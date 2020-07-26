<template>
  <v-app>
    <v-app-bar dense dark flat app>
      <router-link to="/">
        <v-btn color="blue darken-1" text>Home</v-btn>
      </router-link>
      <v-divider vertical inset class="mx-4"></v-divider>
      <router-link to="cityWeather">
        <v-btn color="blue darken-1" text>CityWeather</v-btn>
      </router-link>
    </v-app-bar>

    <v-content id="content">
      <v-container>
        <v-row align="center">
          <router-view></router-view>
        </v-row>
      </v-container>
    </v-content>

    <v-footer app> </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>

<style scoped>
#content {
  background-color: #212121;
}

.fade-enter-active .fade-leave-active {
  transition: opacity 2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
