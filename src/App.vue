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
        id: 1,
        name: "Create",
        description: "blah blah blah",
        flag: false
      },
      {
        id: 2,
        name: "Create",
        description: "blah blah blah",
        flag: false
      },
      {
        id: 3,
        name: "Update",
        description: "blah blah blah",
        flag: false
      },
      {
        id: 4,
        name: "Update",
        description: "blah blah blah",
        flag: false
      },
      {
        id: 5,
        name: "Delete",
        description: "blah blah blah",
        flag: false
      },
      {
        id: 6,
        name: "Delete",
        description: "blah blah blah",
        flag: false
      },
      {
        id: 7,
        name: "Read",
        description: "blah blah blah",
        flag: false
      },
      {
        id: 8,
        name: "Read",
        description: "blah blah blah",
        flag: false
      },
      {
        id: 9,
        name: "Write",
        description: "blah blah blah",
        flag: false
      },
      {
        id: 10,
        name: "Write",
        description: "blah blah blah",
        flag: false
      },
      {
        id: 11,
        name: "Create",
        description: "blah blah blah",
        flag: false
      },
      {
        id: 12,
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
