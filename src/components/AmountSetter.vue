<template>
  <div class="text-xs-center">
    <v-bottom-sheet v-model="amountSheet" style="border-top-left-radius: 10px;">
      <v-card>
        <v-toolbar flat>
          <v-list style="background-color: #e3e3e3;
  border-bottom: 1px solid #a9a9a9;">
            <v-list-tile>
              Set Amount
              <!-- <v-list-tile-title class="title">Application</v-list-tile-title> -->
            </v-list-tile>
          </v-list>
        </v-toolbar>
        <v-card style="padding:20px;box-shadow:unset;">
          <v-text-field v-model="amount" :rules="amountRules" :counter="4" label="PUK" required></v-text-field>
        </v-card>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0" style="text-align:center;">{{amount}}</h3>
            <!-- <div>Do you Confirm?</div> -->
          </div>
        </v-card-title>
        <v-btn color="purple" dark @click="amountToSelectService" style="margin-right:200px">Pay</v-btn>
      </v-card>
    </v-bottom-sheet>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: mapState(["amountSheet"]),
  methods: {
    ...mapActions(["amountToSelectService"])
  },

  data: () => ({
    amount: "",
    amountRules: [
      v => !!v || "PUK is required",
      v => v.length == 4 || "PUK must be 4 characters"
    ]
  })
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
