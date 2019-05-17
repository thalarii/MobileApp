import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(Vuex);
Vue.use(VueAxios, axios);

export default new Vuex.Store({
  state: {
    checkOutOrderItems: null,
    account: null,
    selectedService: null,
    puk: null,
    // checkOutOrderId: "",
    histories: [
      // {
      //   id: 1,
      //   name: "Tea",
      //   price: 20,
      //   quantity: 1,
      //   date: "Apr 21, 2019",
      //   image: "",
      //   purchased_with: "CBE Birr",
      //   url_logo: "https://cdn.vuetifyjs.com/images/lists/1.jpg"
      // },
      // {
      //   id: 2,
      //   name: "Coffee",
      //   price: 12,
      //   quantity: 2,
      //   date: "Apr 21, 2019",
      //   image: "",
      //   purchased_with: "CBE Birr",
      //   url_logo: "https://cdn.vuetifyjs.com/images/lists/1.jpg"
      // }
    ],
    avaliableServices: [
      {
        id: 2,
        name: "M-Birr",
        logo: "",
        code: "805",
        start: "*805*",
        end: "*1#",
        activated: "true",
        color: "green"
      },
      {
        id: 3,
        name: "Hello Cash",
        logo: "",
        code: "805",
        start: "*805*",
        end: "*1#",
        color: "orange",
        activated: "true"
      },
      {
        id: 4,
        name: "Amole",
        logo: "",
        code: "805",
        start: "*805*",
        end: "*1#",
        color: "darkmagenta",
        activated: "false"
      },
      {
        id: 1,
        name: "Ethio Telecom",
        logo: "",
        code: "804",
        start: "*806*",
        end: "*1#",
        color: "green",
        activated: "false"
      }
    ],
    recieptSheet: false,
    serviceSelectorSheet: false,
    confirmationSheet: false,
    successSheet: false,
    failureSheet: false,
    amountSheet: false
  },
  mutations: {
    RECIEPT_TO_SERVICE_SELECTER(state) {
      state.recieptSheet = false;
      state.serviceSelectorSheet = true;
    },
    SET_RECIEPT_SHEET(state) {
      state.recieptSheet = true;
    },
    SET_AMOUNT_SHEET(state) {
      state.amountSheet = true;
    },
    SERVICE_ADDER_TO_CONFIRMATION(state) {
      state.serviceSelectorSheet = false;
      state.confirmationSheet = true;
    },
    CONFIRMATION_TO_SUCCESS(state) {
      state.confirmationSheet = false;
      state.successSheet = true;
    },
    CONFIRMATION_TO_FAILURE(state) {
      state.successSheet = false;
      state.failureSheet = true;
    },
    SUCCESS_TO(state) {
      state.successSheet = false;
    },
    AMOUNT_TO_SELECT_SERVICE(state) {
      state.amountSheet = false;
      state.serviceSelectorSheet = true;
    },
    CLEAR_HISTORY(state) {
      state.histories = [];
    },
    SET_CHECK_OUT_ORDER_ITEMS(state, items) {
      state.checkOutOrderItems = items;
    },
    SET_ACCOUNT(state, account) {
      state.account = account;
    },
    SET_SELECTED_SERVICE(state, service) {
      state.selectedService = service;
    },
    SET_PUK_NUMBER(state, puk) {
      state.puk = puk;
    },
    ADD_TO_HISTORY(state) {
      for (let i = 0; i < state.checkOutOrderItems.length; i++) {
        const element = state.checkOutOrderItems[i];
        state.histories.push({
          id: i + 3,
          name: element.item_name,
          price: element.item_price,
          quantity: element.item_quantity,
          date: "Apr 21, 2019",
          image: "",
          purchased_with: state.selectedService.name,
          url_logo: "https://cdn.vuetifyjs.com/images/lists/1.jpg"
        });
      }
      // this.$route({ name: "home" });
    },
    SET_SERVICE_ACTIVE(state, index) {
      state.avaliableServices[index].activated = "true";
    }
  },
  actions: {
    addToHistory(context) {
      context.commit("ADD_TO_HISTORY");
    },
    clearHistory(context) {
      context.commit("CLEAR_HISTORY");
    },
    recieptToServiceSelecter(context) {
      context.commit("RECIEPT_TO_SERVICE_SELECTER");
    },
    setAmountSheet(context) {
      context.commit("SET_AMOUNT_SHEET");
    },
    setRecieptSheet(context) {
      context.commit("SET_RECIEPT_SHEET");
    },
    serviceAdderToConfirmation(context) {
      context.commit("SERVICE_ADDER_TO_CONFIRMATION");
      context.commit("SET_PUK_NUMBER", puk);
    },
    confirmationToSuccess(context) {
      context.commit("ADD_TO_HISTORY");

      context.commit("CONFIRMATION_TO_SUCCESS");
    },
    confirmationToFailure(context) {
      context.commit("CONFIRMATION_TO_FAILURE");
    },
    successSheetTo(context) {
      context.commit("SUCCESS_TO");
    },
    amountToSelectService(context) {
      context.commit("AMOUNT_TO_SELECT_SERVICE");
    },
    selectService(context, service) {
      console.log(service);

      context.commit("SET_SELECTED_SERVICE", service);
    },
    setPuk(context, puk) {
      context.commit("SET_PUK_NUMBER", puk);
    },
    proccessPayment(context) {
      // context.commit("SET_PUK_NUMBER", puk);
    },
    async getCheckOutOrder(context, checkOutOrderId) {
      await axios
        .get("http://192.168.43.161:3000/BigList/" + checkOutOrderId)
        .then(r => r.data)
        .then(checkOutOrders => {
          // console.log(checkOutOrders);
          context.commit("SET_CHECK_OUT_ORDER_ITEMS", checkOutOrders.items);
          context.commit("SET_ACCOUNT", checkOutOrders.account);
          context.commit("SET_RECIEPT_SHEET");
        });
    },
    activateService(contex, index) {
      contex.commit("SET_SERVICE_ACTIVE", index);
    }
  },
  getters: {
    allHistories: state => state.histories,
    allAvaliableServices: state => state.avaliableServices,
    allActiveAvaliableServices: state => {
      let arr = [];
      for (let i = 0; i < state.avaliableServices.length; i++) {
        const element = state.avaliableServices[i];
        if (element.activated == "true") {
          arr.push(element);
        }
      }
      return arr;
    },
    getCheckOutOrderItems: state => state.checkOutOrderItems,
    getAccount: state => state.account
  }
});
