<template>
  <v-container id="container" class="mt-n6">
    <InfoPanel
      :weatherObject="weatherObject"
      v-for="weatherObject in weatherObjects"
      :key="weatherObject.id"
    ></InfoPanel>
  </v-container>
</template>

<script>
import InfoPanel from "./InfoPanel";

export default {
  name: "LocationList",
  props: {
    weatherObjects: Array,
  },
  components: {
    InfoPanel,
  },
};
</script>

<style scoped>
#container {
  width: 100%;
  display: flex;
}
</style>
