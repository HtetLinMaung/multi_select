<template>
  <div id="app" class="ml-5">
    <MultiSelect />
  </div>
</template>

<script>
import MultiSelect from "./components/MultiSelect";

export default {
  name: "app",
  components: {
    MultiSelect
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
