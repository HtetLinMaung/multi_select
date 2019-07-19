<template>
  <div>
    <b-card class="multi-select">
      <div class="px-2 lead py-2 text-left" @click="dropDown">
        Select
        <span style="float: right;">{{ icon }}</span>
      </div>
    </b-card>
    <b-card v-if="collapse" class="multi-select-body">
      <div v-show="selectedPermissions.length" class="px-2 py-2 text-left">
        <b-badge
          pill
          variant="light"
          class="py-2 px-4 m-1"
          v-for="permission in selectedPermissions"
          :key="permission"
        >{{permission.name}}</b-badge>
      </div>
      <div class="text-left">
        <b-form-input v-model="search" id="input-small" size="md" placeholder="Search"></b-form-input>
      </div>
      <div v-show="permissions.length" class="px-2 py-2 text-left">
        <b-form-checkbox v-model="selectall">Select All</b-form-checkbox>
      </div>

      <div
        class="px-2 py-2 text-left striped"
        v-for="(permission, index) in permissions"
        :key="index"
      >
        <span style="float: right;"></span>
        <b-form-checkbox v-model="permission.flag" name="check-button">{{ permission.name }}</b-form-checkbox>
      </div>
    </b-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    collapse: false,
    selectall: false,
    search: "",
    icon: "v",
    temp: null,
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
  }),
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
    selectedPermissions() {
      return this.permissions.filter(permission => permission.flag);
    }
  },
  watch: {
    selectall: function(newVal, old) {
      if (newVal) {
        this.permissions.forEach(permission => {
          permission.flag = true;
        });
      } else {
        this.permissions.forEach(permission => {
          permission.flag = false;
        });
      }
    },

    search: function(newVal, old) {
      if (!newVal) {
        this.permissions = this.temp;
      } else {
        this.permissions = this.permissions.filter(
          permission => permission.name.match(new RegExp(`^${newVal}`)) != null
        );
      }
    }
  },

  mounted() {
    this.temp = this.permissions;
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
