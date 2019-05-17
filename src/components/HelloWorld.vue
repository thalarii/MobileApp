<template>
  <div>
    <ToolBar></ToolBar>
    <div style="padding:10px;background-color: #1976d2;">
      <ServiceCards/>
    </div>
    <v-list two-line>
      <v-btn flat style="float:right;margin-top" @click="clearHistory">clear all</v-btn>
      <v-subheader>History</v-subheader>
      <div v-for="(item, index) in allHistories" :key="index">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img :src="item.url_logo">
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title v-html="item.name"></v-list-tile-title>
            <v-list-tile-sub-title v-html="item.purchased_with"></v-list-tile-sub-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-btn flat>
              <div
                style="max-width:80px;overflow:hidden;"
                color="grey lighten-1"
              >- {{item.price}}.00</div>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
        <v-divider inset></v-divider>
      </div>
    </v-list>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

import ServiceCards from "./ServiceCards.vue";
import ToolBar from "./ToolBar.vue";
export default {
  computed: mapGetters(["allHistories"]),
  methods: mapActions(["clearHistory"]),
  data: () => ({
    drawer: null,
    itemss: [
      { title: "Home", icon: "dashboard" },
      { title: "About", icon: "question_answer" }
    ],
    items: [
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        title: "Ice Cream",
        subtitle: "CBE Birr"
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
        title: "Samsung Galaxy J9",
        subtitle: "CBE Birr"
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
        title: "Thoshiba G 850",
        subtitle: "Amole"
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
        title: "Houndi v3",
        subtitle: "Ethio Telecom"
      }
    ]
  }),
  name: "HelloWorld",
  components: {
    ServiceCards,
    ToolBar
  }
};
</script>

<style>
* {
  font-family: "roboto mono";
}
.v-avatar img,
.v-avatar .v-icon,
.v-avatar .v-image {
  border-radius: 10px;
  /* color:darkmagenta */
}
</style>
