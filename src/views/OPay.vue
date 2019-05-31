<template>
  <div>
    <ToolBar></ToolBar>
    <v-card style="padding:50px;box-shadow:unset;">
      <v-text-field
        v-model="selectedAccountNumber"
        @change="setAmountSheet"
        label="Account Number"
        required
      ></v-text-field>
      <!-- {{selectedAccountNumber}} -->
      <v-btn @click="scan">Scan</v-btn>
      <v-btn @click="setAmountSheet">Pay</v-btn>
    </v-card>
    <v-card style="box-shadow:unset;">
      <ContactList></ContactList>
      <v-dialog v-model="dialog" width="500">
        <!-- <template v-slot:activator="{ on }">
          <v-btn color="red lighten-2" dark v-on="on">Click Me</v-btn>
        </template>-->

        <v-card style="padding:25px;">
          <h3>Add Contact</h3>
          <!-- <v-card-title class="headline grey lighten-2" primary-title>Privacy Policy</v-card-title> -->

          <!-- <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</v-card-text> -->
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
    </v-card>
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
    >
      <!-- <v-icon>{{ activeFab.icon }}</v-icon> -->
      <v-icon>add</v-icon>
    </v-btn>

    <!-- <button @click="setAmountSheet">OPay</button> -->
    <AmountSetter></AmountSetter>
    <SelectService></SelectService>
    <Confirmation></Confirmation>
    <Success></Success>
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from "vuex";

import ToolBar from "../components/ToolBar.vue";
import AmountSetter from "../components/AmountSetter.vue";
import SelectService from "../components/SelectService.vue";
import Confirmation from "../components/Confirmation.vue";
import Success from "../components/Success.vue";
import ContactList from "../components/ContactList.vue";
// import { mapGetters, mapActions } from "vuex";

export default {
  name: "EPay",
  data: () => ({
    dialog: false,
    name: "",
    accountNumber: ""
    // selectedAccountNumber: ""
    // recieptSheet: false
  }),
  computed: mapState([
    "recieptSheet",
    "serviceSelectorSheet",
    "confirmationSheet",
    "successSheet",
    "selectedAccountNumber"
  ]),
  methods: mapActions(["setAmountSheet", "addContact"]),
  components: {
    ToolBar,
    AmountSetter,
    SelectService,
    Confirmation,
    Success,
    ContactList
  }
};
</script>

<style>
</style>
