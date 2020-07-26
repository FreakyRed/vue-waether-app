<template>
  <v-container id="weatherCard">
    <v-card color="light-blue accent-3">
      <v-card-title primary-title class="justify-center white--text mb-n10">{{
        weatherObject.name
      }}</v-card-title>

      <v-container id="image" class="mt-n6">
        <v-img
          :src="
            'http://openweathermap.org/img/wn/' +
              weatherObject.weather[0].icon +
              '@2x.png'
          "
        />
      </v-container>

      <v-card-text class="text-center mt-n12 white--text">
        <div class="body-1">
          {{ weatherObject.weather[0].main }}
        </div>
        <div class="body-1">Temperature: {{ weatherObject.main.temp }}</div>
        <div class="body-1">
          Country:
          {{ weatherObject.sys.country }}
        </div>
      </v-card-text>
    </v-card>
  </v-container>

  <!-- <div v-if="infoPresent" class="infoPanel">
    <div class="title">{{ weatherObject.name }}</div>
    <div class="weatherImage">
      <img
        :src="
          'http://openweathermap.org/img/wn/' +
            weatherObject.weather[0].icon +
            '@2x.png'
        "
      />
    </div>
    <div class="infoData">{{ weatherObject.weather[0].main }}</div>
    <div class="infoData">{{ weatherObject.weather[0].description }}</div>
   <div class="infoData">Temperature: {{ weatherObject.main.temp }}</div>
    <div class="infoData">Country: {{ weatherObject.sys.country }}</div>
  </div> -->
</template>

<script>
export default {
  name: "InfoPanel",
  props: {
    weatherObject: Object,
  },
  computed: {
    infoPresent: function() {
      return Object.keys(this.weatherObject).length !== 0;
    },
  },
};
</script>

<style scoped>
#weatherCard {
  width: 25%;
  flex-wrap: wrap;
}

#image {
  width: 150px;
  height: 150px;
}
</style>
