<template>
  <v-container>
    <v-container>
      <v-text-field
        v-model="enteredValue"
        placeholder="Enter your location"
        rounded
        outlined
        clearable
        type="text"
        dark
        class="mt-n4"
      />
    </v-container>
    <v-container class="mt-n6">
      <v-btn dark type="submit" @click="emitSubmit">
        Find your city
      </v-btn>
      <v-btn
        dark
        v-if="atleastOneInList"
        type="submit"
        class="ml-4"
        @click="$emit('update-city')"
      >
        Update locations
      </v-btn>
    </v-container>
  </v-container>
</template>

<script>
export default {
  name: "SearchBar",
  props: {
    atleastOneInList: Boolean,
  },
  data: function() {
    return {
      enteredValue: "",
    };
  },
  methods: {
    emitSubmit: function() {
      this.$emit("submit-city", this.enteredValue);
      this.enteredValue = "";
    },
  },
};
</script>

<style scoped>
.v-text-field {
  display: inline-block;
  width: 50%;
  text-align: center;
}

@media only screen and(max-width: 600px) {
  .v-text-field {
    width: 400px;
  }
}
</style>
