<template>
  <div>
    <b-card class="multi-select">
      <div class="px-2 lead py-2 text-left" @click="dropDown">
        {{selectTitle}}
        <span style="float: right;">{{ icon }}</span>
      </div>
    </b-card>
    <b-card v-if="collapse" class="multi-select-body">
      <div v-show="selectedCollections.length" class="px-2 py-2 text-left">
        <b-badge
          pill
          variant="light"
          class="py-2 px-4 m-1"
          v-for="(collection, index) in selectedCollections"
          :key="index"
        >{{collection.name}}</b-badge>
      </div>
      <div class="text-left">
        <b-form-input v-model="search" id="input-small" size="md" placeholder="Search"></b-form-input>
      </div>
      <div v-show="collections.length" class="px-2 py-2 text-left">
        <b-form-checkbox v-model="selectall">Select All</b-form-checkbox>
      </div>

      <div
        class="px-2 py-2 text-left striped"
        v-for="(collection, index) in collections"
        :key="index"
      >
        <span style="float: right;"></span>
        <b-form-checkbox v-model="collection.flag" name="check-button">{{ collection.name }}</b-form-checkbox>
      </div>
    </b-card>
  </div>
</template>

<script>
export default {
  props: ["selectTitle", "items"],
  data() {
    return {
      collapse: false,
      selectall: false,
      search: "",
      icon: "v",
      temp: null,
      collections: this.items,
      selectedItems: [],
    };
  },
  methods: {
    dropDown() {
      this.collapse = !this.collapse;
      this.icon = this.collapse ? "^" : "v";
    },

    addSelected() {
      console.log("add working!");
    }
  },
  computed: {
    selectedCollections() {
      this.selectedItems = this.collections.filter(collection => collection.flag);
      return this.selectedItems;
    }
  },
  watch: {
    selectall: function(newVal, old) {
      if (newVal) {
        this.collections.forEach(collection => {
          collection.flag = true;
        });
      } else {
        this.collections.forEach(collection => {
          collection.flag = false;
        });
      }
    },

    search: function(newVal, old) {
      if (!newVal) {
        this.collections = this.temp;
      } else {
        this.collections = this.collections.filter(
          collection => collection.name.match(new RegExp(`^${newVal}`)) != null
        );
      }
    }
  },

  mounted() {
    this.temp = this.collections;
  }
};
</script>

<style lang="scss">
.multi-select {
  max-width: 28rem;
  border-bottom-left-radius: 0 !important;
  border-bottom-right-radius: 0 !important;
  .card-body {
    padding: 0;
  }
}

.multi-select-body {
  .card-body {
    padding: 0;
  }
  border-top-left-radius: 0 !important;
  border-top-right-radius: 0 !important;
  max-width: 28rem;
}

.striped:nth-child(even) {
  background-color: #f7fcff;
}
</style>
