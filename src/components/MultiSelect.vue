<template>
  <div :class="theme">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous">
    <b-card class="multi-select">
      <div class="px-2 py-2 text-left" @click="dropDown">
        <span v-if="!selectedItems.length || collapse">{{selectTitle}}</span>
        <span>{{selectTitle}}</span>
        <span v-if="selectedItems.length && !collapse">
          <b-button
            pill
            variant="outline-secondary"
            class="py-0 px-2 mx-1"
            v-for="collection in selectedCollections.slice(0,3)"
            :key="collection.id"
          >{{collection.name}}</b-button>
        </span>
        <span style="float: right;" class="ml-2">{{ icon }}<i v-if="collapse" class="fas fa-caret-square-up"></i> <i v-if="!collapse" class="fas fa-caret-square-down"></i></span>
        <span
          v-show="selectedItems.length > 3 && !collapse"
          style="float: right"
        >+ {{selectedCollections.length - 3}} more</span>
      </div>
    </b-card>
    <b-card v-if="collapse" class="multi-select-body">
      <div v-show="selectedCollections.length" class="px-2 py-2 text-left">
        <b-button
          pill
          variant="outline-secondary"
          class="py-0 px-3 m-1"
          v-for="collection in selectedCollections"
          :key="collection.id"
        >{{collection.name}} <i @click="removeItem(collection.id)" class="fas fa-minus-circle"></i></b-button>
      </div>
      <div v-show="temp.length" class="text-left">
        <b-form-input v-model.lazy="search" id="input-small" size="md" placeholder="Search"></b-form-input>
      </div>
      <div v-show="collections.length" class="px-2 py-2 text-left">
        <b-form-checkbox v-model="selectall">Select All</b-form-checkbox>
      </div>

      <div
        class="px-2 py-2 text-left striped"
        v-for="collection in collections.slice(start, end)"
        :key="collection.id"
      >
        <b-button
          v-b-popover.hover="collection.description"
          pill
          :title="collection.name"
          style="float: right; display: inline-block"
          class="py-0 px-2 m-0"
        >?</b-button>
        <i class="far fa-question-circle"></i>
        <b-form-checkbox
          v-model="collection.flag"
          name="check-button"
          style="display: inline-block"
        >{{ collection.name }}</b-form-checkbox>
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
  props: ["selectTitle", "theme", "items", "perItems"],
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
      icon: "",
      temp: null,
      collections: this.items || [],
      selectedItems: []
    };
  },
  methods: {
    dropDown() {
      this.collapse = !this.collapse;
      // this.icon = this.collapse ? "^" : "v";
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
    },
    recalculatePositions() {
      this.last_page = Math.ceil(this.collections.length / this.increment);
      this.start = 0;
      this.end = this.increment;
      this.page = 1;
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
        this.recalculatePositions();
      } else {
        this.collections = this.collections.filter(collection =>
          collection.name.match(new RegExp(`^${newVal}`, "i"))
        );
        this.recalculatePositions();
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
.light .card-body{
  background-color: #e2e2e2;
}
.light .card{
  max-width: 53rem;
}
.light .btn-outline-secondary {
    color: #ffffff;
    border-color: red;
    background-color: red;
}
.dark .card-body{
  background-color: #ff6b6b;
}
.dark .card{
  max-width: 23rem;
}
.dark .btn-outline-secondary {
    color: #ffffff;
     background-color: #fff;
     -webkit-animation: random 30s infinite;
     animation: random 45s infinite;
}
@keyframes  random {
    15% { background-color: red; border-color: red; } 
    30% { background-color: yellow; border-color: yellow; } 
    45% { background-color: green; border-color: green; } 
    60% { background-color: blue; border-color: blue; }
    75% { background-color: white; border-color: white; }  
}
</style>
