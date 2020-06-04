<template>
  <div class="searchbar">
    <div>
      <input
        v-model="enteredValue"
        type="text"
        placeholder="Enter your location"
      />
    </div>
    <button type="submit" @click="emitSubmit">
      Find your city
    </button>
    <button
      v-if="atleastOneInList"
      type="submit"
      class="update"
      @click="$emit('update-city')"
    >
      Update locations
    </button>
  </div>
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
input[type="text"] {
  border-style: solid;
  border-width: 0.3rem;
  border-color: #005691;
  border-radius: 1rem;
  width: 20rem;
  height: 3rem;
  font-size: 2rem;
  text-align: center;
  color: #005691;
  caret-color: transparent;
}

input[type="text"]:hover {
  border-color: #e8f1f5;
}

input[type="text"]:focus::placeholder {
  color: transparent;
}

button[type="submit"] {
  margin-top: 1rem;
  padding: 1rem;
  background-color: #005691;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bolder;
  color: #fafafa;
  transition-duration: 1s;
}

button[type="submit"]:hover {
  background-color: #fafafa;
  color: #005691;
}

.update {
  margin-left: 1rem;
}
</style>
