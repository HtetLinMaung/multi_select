<template>
  <div id="app" class="ml-5">
    <MultiSelect selectTitle="Select" :items="permissions" />
  </div>
</template>

<script>
import MultiSelect from "./components/MultiSelect";

export default {
  name: "app",
  components: {
    MultiSelect
  },
  data: () => ({
    permissions: [
      {
        name: "Create",
        description: "blah blah blah",
        flag: false
      },
      {
        name: "Create",
        description: "blah blah blah",
        flag: false
      },
      {
        name: "Update",
        description: "blah blah blah",
        flag: false
      },
      {
        name: "Update",
        description: "blah blah blah",
        flag: false
      },
      {
        name: "Delete",
        description: "blah blah blah",
        flag: false
      },
      {
        name: "Delete",
        description: "blah blah blah",
        flag: false
      },
      {
        name: "Read",
        description: "blah blah blah",
        flag: false
      },
      {
        name: "Read",
        description: "blah blah blah",
        flag: false
      },
      {
        name: "Write",
        description: "blah blah blah",
        flag: false
      },
      {
        name: "Write",
        description: "blah blah blah",
        flag: false
      },
      {
        name: "Create",
        description: "blah blah blah",
        flag: false
      },
      {
        name: "Create",
        description: "blah blah blah",
        flag: false
      }
    ]
  })
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
