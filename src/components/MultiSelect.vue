<template>
  <div>
    <b-card class="multi-select">
      <div class="px-2 py-2 text-left" @click="dropDown">
        <span v-if="!selectedItems.length || collapse">{{selectTitle}}</span>
        <span v-if="selectedItems.length && !collapse">
          <b-button
            pill
            variant="outline-secondary"
            class="py-0 px-2 mx-1"
            v-for="(collection, index) in selectedCollections.slice(0,3)"
            :key="index"
          >{{collection.name}}</b-button>
        </span>
        <span style="float: right;" class="ml-2">{{ icon }}</span>
        <span
          v-show="selectedItems.length > 3 && !collapse"
          style="float: right"
        >+ {{selectedCollections.length - 3}} more</span>
      </div>
    </b-card>
    <b-card v-if="collapse" class="multi-select-body">
      <div v-show="selectedCollections.length" class="px-2 py-2 text-left">
        <b-button
          @click="removeItem(collection.id)"
          pill
          variant="outline-secondary"
          class="py-0 px-3 m-1"
          v-for="(collection, index) in selectedCollections"
          :key="index"
        >{{collection.name}}</b-button>
      </div>
      <div v-show="temp.length" class="text-left">
        <b-form-input v-model.lazy="search" id="input-small" size="md" placeholder="Search"></b-form-input>
      </div>
      <div v-show="collections.length" class="px-2 py-2 text-left">
        <b-form-checkbox v-model="selectall">Select All</b-form-checkbox>
      </div>

      <div
        class="px-2 py-2 text-left striped"
        v-for="(collection, index) in collections.slice(start, end)"
        :key="index"
      >
        <span style="float: right;"></span>
        <b-form-checkbox v-model="collection.flag" name="check-button">{{ collection.name }}</b-form-checkbox>
      </div>
      <div v-show="collections.length > 5" class="px-2 py-2">
        <b-button size="sm" variant="light" pill @click="prevItems">Previous</b-button>
        <span style="float: right">
          <b-button variant="light" pill size="sm" @click="nextItems">Next</b-button>
        </span>
      </div>
    </b-card>
  </div>
</template>

<script>
export default {
  props: ["selectTitle", "items", "perItems"],
  data() {
    return {
      page: 1,
      last_page: null,
      start: 0,
      end: 0,
      increment: this.perItems,
      titleFlag: true,
      collapse: false,
      selectall: false,
      search: "",
      icon: "v",
      temp: null,
      collections: this.items || [],
      selectedItems: []
    };
  },
  methods: {
    dropDown() {
      this.collapse = !this.collapse;
      this.icon = this.collapse ? "^" : "v";
    },
    removeItem(id) {
      for (const collection of this.collections) {
        if (id == collection.id) {
          collection.flag = false;
          break;
        }
      }
    },
    nextItems() {
      if (++this.page > this.last_page) {
        this.start = 0;
        this.end = this.increment;
        this.page = 1;
        return;
      }
      this.start = this.end;
      this.end += this.increment;
    },
    prevItems() {
      if (--this.page == 0) {
        this.end = this.increment * this.last_page;
        this.start = this.end - this.increment;
        this.page = this.last_page;
        return;
      }
      this.end = this.start;
      this.start -= this.increment;
    }
  },
  computed: {
    selectedCollections() {
      this.selectedItems = this.collections.filter(
        collection => collection.flag
      );
      return this.selectedItems;
    }
  },
  watch: {
    selectall: function(newVal, old) {
      this.collections.forEach(collection => {
        collection.flag = newVal;
      });
    },

    search: function(newVal, old) {
      if (!newVal) {
        this.collections = this.temp;
        this.last_page = Math.ceil(this.collections.length / this.increment);
      } else {
        this.collections = this.collections.filter(collection =>
          collection.name.match(new RegExp(`^${newVal}`, "i"))
        );
        this.last_page = Math.ceil(this.collections.length / this.increment);
      }
    },

    selectedItems: function(newVal, old) {
      if (!newVal.length) this.selectall = false;
      this.$emit("selected", newVal);
    }
  },

  mounted() {
    this.temp = this.collections;
    this.end = this.increment;
    this.last_page = Math.ceil(this.collections.length / this.increment);
  }
};
</script>

<style lang="scss">
.multi-select,
.multi-select-body {
  max-width: 28rem;
  border-bottom-left-radius: 0 !important;
  border-bottom-right-radius: 0 !important;
  .card-body {
    padding: 0;
  }
}

.striped:nth-child(even) {
  background-color: #f7fcff;
}
</style>
