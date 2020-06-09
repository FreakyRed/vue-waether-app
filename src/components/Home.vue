<template>
  <div>
    <h1>Hello world</h1>
  </div>
</template>

<script>
export default {
  name: "Home",
  computed: {
    username() {
      return this.$route.params.username;
    },
  },
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    },
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
}
</style>
