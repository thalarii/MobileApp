<template>
  <v-layout style="overflow:auto;">
    <!-- :style="[service.activated ? {'color:blue'}:{'color:yellow'}]" -->

    <v-flex xs4 sm6 offset-sm2 style="display:flex;">
      <v-card
        v-for="(service,index) in allAvaliableServices"
        :key="index"
        class="service-card"
        style="width:120px;margin-right:15px;border-radius:7.5px;border-color:orange;"
        :class="service.activated"
        @click="activateService(index)"
      >
        <v-container
          fill-height
          fluid
          style="height:75px;"
          ,
          :style="{'background-color': service.color}"
          class="service-card-top"
        >
          <v-layout fill-height>
            <v-flex xs12 align-end flexbox>
              <span class="headlin" style="color:white;">{{service.name}}</span>
            </v-flex>
          </v-layout>
        </v-container>
        <v-card-title>
          <div style="width:100px">
            <span>USSD Service</span>
          </div>
        </v-card-title>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "ServiceCards",
  data: () => ({
    orange: "orange"
  }),
  computed: mapGetters(["allAvaliableServices"]),
  methods: mapActions(["getCheckOutOrder", "activateService"])
};
</script>

<style>
.false {
  /* background-color: orange; */
  opacity: 0.2;
}
.service-card {
  border-bottom: 2px solid green;
  height: 125px;
}
.service-card-top {
  color: white;
  background-color: brown;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}
</style>
