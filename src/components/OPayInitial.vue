<template>
  <div>
    <v-card style="padding:10px;box-shadow:unset;">
      <!-- {{getSelectedAccountNumber}} -->
      <v-text-field
        v-model="getSelectedAccountNumber"
        @change="setAmountSheet"
        label="Account Number"
        required
      ></v-text-field>
      <!-- {{selectedAccountNumber}} -->
      <v-btn @click="scan">Scan</v-btn>
      <v-btn @click="setAmountSheet">Pay</v-btn>
    </v-card>
    <v-dialog v-model="dialog" width="500">
      <v-card style="padding:25px;">
        <h3>Add Contact</h3>
        <div style="padding:10px;">
          <v-text-field v-model="name" label="Full Name" required></v-text-field>
          <v-text-field v-model="accountNumber" label="Account Number" required></v-text-field>
          {{accountNumber}}
        </div>
        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            @click="addContact({accountNumber:accountNumber,name:name});dialog = false"
            color="primary"
            flat
          >I accept</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-btn
      @click="dialog=true"
      v-model="fab"
      color="primary"
      dark
      fab
      fixed
      bottom
      right
      style="margin-bottom:50px;"
    ></v-btn>
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from "vuex";

export default {
  name: "OPayInitial",
  data: () => ({
    dialog: false,
    name: "",
    accountNumber: ""
  }),
  computed: {
    ...mapGetters(["getSelectedAccountNumber"])
  }
};
</script>

<style>
</style>
