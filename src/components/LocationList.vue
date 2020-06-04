<template>
  <div class="infoPanels">
    <InfoPanel
      class="infoPanel"
      :weatherObject="weatherObject"
      v-for="weatherObject in weatherObjects"
      :key="weatherObject.id"
    ></InfoPanel>
  </div>
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
.infoPanel {
  margin-left: 2rem;
}

.infoPanels {
  margin-left: -2rem;
}
</style>
