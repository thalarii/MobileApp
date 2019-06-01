<template>
  <v-card style="padding:10px;box-shadow:unset;">
    <v-text-field
      v-model="checkOutOrdeId"
      @change="getCheckOutOrder(checkOutOrdeId)"
      label="Check Out Order Id"
      required
    ></v-text-field>
    <v-btn @click="scan">Scan</v-btn>
    <v-btn @click="getCheckOutOrder(checkOutOrdeId)">Get</v-btn>
  </v-card>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "EpayInitial",
  data: () => ({
    checkOutOrdeId: ""
  }),
  methods: {
    ...mapActions(["setRecieptSheet", "getCheckOutOrder"]),
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
  }
};
</script>

<style>
</style>
