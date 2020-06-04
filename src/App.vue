<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <h1>CityWeather</h1>
    <Weather></Weather>
  </div>
</template>

<script>
import Weather from "./components/Weather";

export default {
  name: "App",
  components: {
    Weather,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fafafa;
  margin-top: 60px;
}

html,
body {
  background-color: #004a7c;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}
</style>
