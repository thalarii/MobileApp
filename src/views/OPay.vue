<template>
  <div>
    <ToolBar></ToolBar>
    <button @click="setAmountSheet">OPay</button>
    <AmountSetter></AmountSetter>
    <SelectService></SelectService>
    <Confirmation></Confirmation>
    <Success></Success>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

import ToolBar from "../components/ToolBar.vue";
import AmountSetter from "../components/AmountSetter.vue";
import SelectService from "../components/SelectService.vue";
import Confirmation from "../components/Confirmation.vue";
import Success from "../components/Success.vue";

export default {
  name: "EPay",
  data: () => ({
    // recieptSheet: false
  }),
  computed: mapState([
    "recieptSheet",
    "serviceSelectorSheet",
    "confirmationSheet",
    "successSheet"
  ]),
  methods: mapActions(["setAmountSheet"]),
  components: {
    ToolBar,
    AmountSetter,
    SelectService,
    Confirmation,
    Success
  }
};
</script>

<style>
</style>
