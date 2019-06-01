<template>
  <div class="text-xs-center">
    <v-card style="padding:0px;box-shadow:unset;max-height:400px;overflow:auto;">
      <v-radio-group v-model="radios" :mandatory="false">
        <div
          v-for="(service,index) in allActiveAvaliableServices"
          :key="index"
          style="padding:10px;"
          @click="radios = service.id;selectService(service)"
        >
          <!-- helo -->
          <v-radio :value="service.id"></v-radio>
          <div style="margin-top:-80px;padding:30px;display:flex;max-width:300px;overflow:hidden;">
            <div
              class="logo-holder"
              style="width:120px;"
              :style="{'background-color': service.color}"
            ></div>
            <div style="padding:10px;width:200px;">{{service.name}}</div>
          </div>
        </div>
      </v-radio-group>
    </v-card>
  </div>
</template>
<script>
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  computed: {
    ...mapState(["serviceSelectorSheet"]),
    ...mapGetters(["allActiveAvaliableServices"])
  },

  data: () => ({
    radios: "radio-1",
    sheet: false,
    headers: [
      {
        text: "Item Name ",
        value: "name"
      },
      { text: "Quantity", value: "calories" },
      { text: "Price (Birr)", value: "fat" }
    ],
    checkOutOrders: [
      {
        name: "Frozen Yogurt",
        calories: 159,
        fat: 6.0
      },
      {
        name: "Ice cream sandwich",
        calories: 237,
        fat: 9.0
      },
      {
        name: "Frozen Yogurt",
        calories: 159,
        fat: 6.0
      },
      {
        name: "Ice cream sandwich",
        calories: 237,
        fat: 9.0
      },
      {
        name: "Eclair",
        calories: 262,
        fat: 16.0
      }
    ],
    tiles: [
      { img: "keep.png", title: "Keep" },
      { img: "inbox.png", title: "Inbox" },
      { img: "hangouts.png", title: "Hangouts" },
      { img: "messenger.png", title: "Messenger" },
      { img: "google.png", title: "Google+" }
    ]
  }),
  methods: {
    ...mapActions(["serviceAdderToConfirmation", "selectService"])
    // onServiceClick: service => {
    //   // (this.radios = service.color),
    //   this.selectService(service);
    // }
  }
};
</script>
<style scoped>
.logo-holder {
  width: 100px;
  height: 60px;
  background-color: crimson;
}
.div.v-list.theme--light {
  background-color: #e3e3e3;
  border-bottom: 1px solid #a9a9a9;
  border-top-left-radius: 10px;
}
</style>
