<template>
  <div id="app">
    <link rel="stylesheet" 
        href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" 
        integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" 
        crossorigin="anonymous">
    <MultiSelect selectTitle="Selected" theme="themelight" :items="permissions" :perItems="5" @selected="yourFunction" />
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
  }),
  methods: {
    yourFunction(selected_items) {
      // console.log(selected_items);
    }
  }
};
</script>

<style lang="scss">
#app {
  margin-top: 60px;
}
</style>
