<template>
  <div class="text-xs-center">
    <v-bottom-sheet v-model="serviceSelectorSheet" style="border-top-left-radius: 10px;">
      <!-- <template v-slot:activator>
        <v-btn color="purple" dark>Click me</v-btn>
      </template>-->
      <v-card>
        <v-toolbar flat>
          <v-list style="background-color: #e3e3e3;
  border-bottom: 1px solid #a9a9a9;">
            <v-list-tile>
              Select Service
              <!-- <v-list-tile-title class="title">Application</v-list-tile-title> -->
            </v-list-tile>
          </v-list>
        </v-toolbar>
        <v-card style="padding:20px;box-shadow:unset;height:400px;overflow:auto;">
          <v-radio-group v-model="radios" :mandatory="false">
            <div
              v-for="(service,index) in allActiveAvaliableServices"
              :key="index"
              style="padding:10px;"
              @click="radios = service.id;selectService(service)"
            >
              <!-- helo -->
              <v-radio :value="service.id"></v-radio>
              <div style="margin-top:-80px;padding:30px;display:flex;">
                <div class="logo-holder" :style="{'background-color': service.color}"></div>
                <div style="padding:20px;">{{service.name}}</div>

                <!-- <div style="margin-top:40px;margin-left:-100px;">Hello</div> -->
              </div>
            </div>
            <!-- <div style="padding:10px;" @click="radios='radio-2'">
              <v-radio value="radio-2"></v-radio>
              <div style="margin-top:-80px;padding:30px;display:flex;">
                <div class="logo-holder"></div>
                <div style="padding:20px;">Hello World</div>
              </div>
            </div>-->
          </v-radio-group>
        </v-card>
        <v-btn
          color="purple"
          dark
          @click="serviceAdderToConfirmation"
          style="margin-right:200px"
        >Continue</v-btn>
      </v-card>
    </v-bottom-sheet>
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
