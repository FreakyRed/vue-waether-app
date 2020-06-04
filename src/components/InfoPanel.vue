<template>
  <div v-if="infoPresent" class="infoPanel">
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
    <!-- <div class="infoData">{{ weatherObject.weather[0].description }}</div> -->
    <div class="infoData">Temperature: {{ weatherObject.main.temp }}</div>
    <div class="infoData">Country: {{ weatherObject.sys.country }}</div>
  </div>
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
.infoPanel {
  background-color: #005691;
  width: 10rem;
  display: inline-block;
  text-align: center;
  padding-bottom: 2rem;
  border: solid;
  border-color: #fafafa;
  border-radius: 1rem;
  margin-top: 1rem;
}

.title {
  background: #e8f1f5;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  font-size: 1.2rem;
  padding-bottom: 0.2rem;
  padding-top: 0.2rem;
  margin-top: 0.5rem;
  color: #005691;
}

.infoData {
  margin-top: 1rem;
  margin-bottom: -0.5rem;
}

.weatherImage {
  margin-bottom: -2rem;
}
</style>
