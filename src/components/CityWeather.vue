<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>CityWeather</h1>
    <Weather></Weather>
  </div>
</template>

<script>
import Weather from "./Weather";

export default {
  name: "CityWeather",
  components: { Weather },
};
</script>

<style scoped></style>
