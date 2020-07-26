<template>
  <v-container>
    <v-container>
      <img alt="Vue logo" src="../assets/logo.png" />
    </v-container>
    <v-container>
      <h1 class="display-2 font-weight-bold white--text">
        CityWeather
      </h1>
    </v-container>
    <Weather></Weather>
  </v-container>
</template>

<script>
import Weather from "./Weather";

export default {
  name: "CityWeather",
  components: { Weather },
};
</script>

<style scoped>
div {
  width: 100%;
  justify-content: center;
  text-align: center;
}
</style>
