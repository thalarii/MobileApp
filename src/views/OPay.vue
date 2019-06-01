<template>
  <div class="top-padding">
    <ToolBar></ToolBar>
    <v-card :dark="isDarkMode">
      <v-stepper v-model="e6" vertical>
        <v-stepper-step :complete="e6 > 1" step="1">
          Check Out Order
          <small>get check out order using qr code</small>
        </v-stepper-step>

        <v-stepper-content step="1">
          <!-- <v-card style="box-shadow:unset;"> -->
          <OPayInitial></OPayInitial>
          <ContactList></ContactList>
          <!-- </v-card> -->
          <v-btn color="primary" @click="e6 = 2">Continue</v-btn>
          <v-btn flat @click="e6=1">Cancel</v-btn>
        </v-stepper-content>

        <v-stepper-step :complete="e6 > 2" step="2">Reciept</v-stepper-step>

        <v-stepper-content step="2">
          <AmountSetter></AmountSetter>
          <!-- <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card> -->
          <v-btn color="primary" @click="e6 = 3">Continue</v-btn>
          <v-btn flat @click="e6=1">Cancel</v-btn>
        </v-stepper-content>

        <v-stepper-step :complete="e6 > 3" step="3">Select Payment Service</v-stepper-step>

        <v-stepper-content step="3">
          <SelectService></SelectService>

          <!-- <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card> -->
          <v-btn color="primary" @click="e6 = 4">Continue</v-btn>
          <v-btn flat @click="e6=1">Cancel</v-btn>
        </v-stepper-content>

        <v-stepper-step :complete="e6 > 4" step="4">Confirmation</v-stepper-step>
        <v-stepper-content step="4">
          <Confirmation></Confirmation>

          <!-- <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card> -->
          <v-btn color="primary" @click="e6 = 5">Continue</v-btn>
          <v-btn flat @click="e6=1">Cancel</v-btn>
        </v-stepper-content>

        <v-stepper-step step="5">Done</v-stepper-step>
        <v-stepper-content step="5">
          <Success></Success>

          <router-link to="/">
            <v-btn color="primary" @click="addToHistory();e6 = 1">Done</v-btn>
          </router-link>

          <v-btn flat @click="e6=1">Cancel</v-btn>
        </v-stepper-content>
      </v-stepper>
    </v-card>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";

import ToolBar from "../components/ToolBar.vue";
import OPayInitial from "../components/OPayInitial.vue";
import AmountSetter from "../components/AmountSetter.vue";
import ContactList from "../components/ContactList.vue";
import Reciept from "../components/Reciept.vue";
import SelectService from "../components/SelectService.vue";
import Confirmation from "../components/Confirmation.vue";
import Success from "../components/Success.vue";

export default {
  name: "EPay",
  watch: {
    qrcode: function() {
      // this.getCheckOutOrder(this.qrcode);
      this.qrcodes = "watching...";
    }
  },
  data() {
    return {
      e6: 1
    };
  },
  computed: mapGetters(["isDarkMode"]),
  methods: {
    ...mapActions([
      "setRecieptSheet",
      "getCheckOutOrder",
      "addToHistory",
      "setAmountSheet",
      "addContact"
    ]),
    // getCheckOutOrders: function() {

    // },
    scan: function() {
      this.qrcode = "result pending...";
      // cordova.plugins.barcodeScanner.scan(
      //   result => {
      //     // this.qrcode = result.text;
      //     this.checkOutOrdeId = result.text;
      //   },
      //   err => {
      //     console.err(error);
      //   }
      // );
    }
    // getCheckOutOrders(){
    //   this.
    // }
  },
  components: {
    ToolBar,
    AmountSetter,
    SelectService,
    Confirmation,
    Success,
    ContactList,
    OPayInitial
  }
};
</script>

<style>
.top-padding {
  padding-top: 55px;
}
</style>
