<template>
  <div class="text-xs-center">
    <v-bottom-sheet v-model="successSheet" style="border-top-left-radius: 10px;">
      <!-- <template v-slot:activator>
        <v-btn color="purple" dark>Click me</v-btn>
      </template>-->
      <v-card>
        <v-toolbar flat>
          <v-list style="background-color: #e3e3e3;
  border-bottom: 1px solid #a9a9a9;">
            <v-list-tile>
              Success
              <!-- <v-list-tile-title class="title">Application</v-list-tile-title> -->
            </v-list-tile>
          </v-list>
        </v-toolbar>
        <v-card style="padding:10px;text-align:center;color:green;box-shadow:unset;">
          <img src="../assets/check.svg" alt="check" width="70px;" style="fill:red;color:blue;">
          <div style="max-width:120px;margin:0 auto;">You Payment has been successfully completed!</div>
        </v-card>
        <router-link to="/">
          <v-btn color="purple" dark @click="successSheetTo" style="margin-right:200px">Ok!</v-btn>
        </router-link>
      </v-card>
    </v-bottom-sheet>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: mapState(["successSheet"]),
  methods: {
    ...mapActions(["successSheetTo"])
  },
  data: () => ({
    radios: "radio-1",
    sheet: false
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
