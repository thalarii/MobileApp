<template>
  <div>
    <ToolBar></ToolBar>
    <!-- <button @click="setRecieptSheet">OpenRecipt</button> -->
    <v-card style="padding:50px;box-shadow:unset;">
      <v-text-field
        v-model="checkOutOrdeId"
        @change="getCheckOutOrder(checkOutOrdeId)"
        label="Check Out Order Id"
        required
      ></v-text-field>
      <v-btn @click="scan">Scan</v-btn>
      <v-btn @click="getCheckOutOrder(checkOutOrdeId)">Get</v-btn>
    </v-card>
    <Reciept></Reciept>
    <SelectService></SelectService>
    <Confirmation></Confirmation>
    <Success></Success>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

import ToolBar from "../components/ToolBar.vue";
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
  data: () => ({
    qrcode: "",
    qrcodes: "he",
    checkOutOrdeId: ""
    // recieptSheet: false
  }),
  computed: mapState([
    // "checkOutOrderId",
    "recieptSheet",
    "serviceSelectorSheet",
    "confirmationSheet",
    "successSheet"
  ]),
  methods: {
    ...mapActions(["setRecieptSheet", "getCheckOutOrder"]),
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
    Reciept,
    SelectService,
    Confirmation,
    Success
  }
};
</script>

<style></style>
