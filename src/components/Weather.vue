<template>
  <v-container>
    <SearchBar
      @submit-city="getWeatherInfo"
      @update-city="updateWeatherInfo"
      :atleastOneInList="atleastOneInList"
    ></SearchBar>
    <v-container v-if="error" class="white--text">{{
      errorMessage
    }}</v-container>
    <LocationList
      v-if="atleastOneInList"
      :weatherObjects="weatherObjectsList"
    ></LocationList>
  </v-container>
</template>

<script>
import SearchBar from "./SearchBar";
import LocationList from "./LocationList";

export default {
  name: "Weather",
  components: {
    SearchBar,
    LocationList,
  },
  data: function() {
    return {
      weatherObjectsList: [],
      error: false,
      errorMessage: "",
    };
  },
  computed: {
    atleastOneInList: function() {
      return this.weatherObjectsList.length > 0;
    },
  },
  methods: {
    getWeatherInfo: function(city, index) {
      let cityQuery = city.trim();
      let url = `${process.env.VUE_APP_WEATHERURL}q=${cityQuery}&appid=${process.env.VUE_APP_WEATHERAPI}`;

      this.axios
        .get(url)
        .then((response) => {
          let weatherResponse = response.data;

          //from Kelvin to Celsius
          weatherResponse.main.temp =
            Math.round(parseInt(weatherResponse.main.temp) - 273.15, 10) + "°C";

          this.pushIntoList(weatherResponse, index);

          this.error = false;
          console.log(weatherResponse);
        })
        .catch((err) => {
          this.error = true;
          this.errorMessage = `Oops! Something went wrong..${err.message}`;
          console.log(err.name + err.message);
        });

      console.log("Emit was received");
    },
    updateWeatherInfo: function() {
      this.weatherObjectsList.forEach((element, index) => {
        this.getWeatherInfo(element.name, index);
        console.log("Updating.. " + element.name);
      });
    },
    pushIntoList: function(weatherObject, index) {
      if (
        this.weatherObjectsList
          .map((element) => element.id)
          .some((element) => element == weatherObject.id)
      ) {
        this.weatherObjectsList[index] = weatherObject;
      } else {
        if (this.weatherObjectsList.length == 5) {
          this.weatherObjectsList.shift();
        }
        this.weatherObjectsList.push(weatherObject);
      }
    },
  },
};
</script>

<style scoped></style>
