import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(Vuex);
Vue.use(VueAxios, axios);

export default new Vuex.Store({
  state: {
    amountToPay: 0,
    darkMode: false,
    checkOutOrderItems: null,
    account: null,
    selectedService: null,
    puk: null,
    selectedAccountNumber: "",
    totalAmount: 0,
    contacts: [
      {
        name: "Demeke",
        accountNumber: "+2519421494"
      },
      {
        name: "Takele",
        accountNumber: "+2519347544"
      },
      {
        name: "Daniel",
        accountNumber: "+2519114987"
      }
    ],
    // checkOutOrderId: "",
    histories: [],
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
    amountSheet: false,
    serviceSelectorOPaySheet: false
  },
  mutations: {
    UPDATE_DARK_MODE(state) {
      state.darkMode = !state.darkMode;
    },
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
    AMOUNT_TO_SELECT_SERVICE_OPAY(state) {
      state.amountSheet = false;
      state.serviceSelectorOPaySheet = true;
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
    },
    SET_AMOUNT(state, amount) {
      state.amountToPay = 100;
    },
    DELETE_HISTORY(state, index) {
      state.histories.pop(index);
    },
    ADD_CONTACT(state, contact) {
      state.contacts.push(contact);
    },
    SET_ACCOUNT_NUMBER(state, accountNumber) {
      state.selectedAccountNumber = accountNumber;
    },
    SET_TOTAL_AMOUNT(state, checkOutOrderItems) {
      let totalPrice = 0;
      for (let i = 0; i < checkOutOrderItems.length; i++) {
        const element = checkOutOrderItems[i];
        totalPrice = totalPrice + element.item_price;
      }
      state.totalAmount = totalPrice;
    },
    SET_AMOUNT_TO_PAY(state, amount) {
      state.totalAmount = amount;
    }
  },
  actions: {
    setAmountToPay(context, amount) {
      context.commit("SET_AMOUNT_TO_PAY", amount);
    },
    setSelectedAccountNumber(contex, accountNumber) {
      contex.commit("SET_ACCOUNT_NUMBER", accountNumber);
    },
    addContact(context, contact) {
      context.commit("ADD_CONTACT", contact);
    },
    deleteHistory(context, index) {
      context.commit("DELETE_HISTORY", index);
    },
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
    amountToSelectServiceOPay(context) {
      context.commit("AMOUNT_TO_SELECT_SERVICE_OPAY");
    },
    serviceAdderToConfirmation(context) {
      context.commit("SERVICE_ADDER_TO_CONFIRMATION");
      // context.commit("SET_PUK_NUMBER", puk);
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
      // contex.commit("SET_AMOUNT", amount);
      context.commit("AMOUNT_TO_SELECT_SERVICE");
    },
    selectService(context, service) {
      // console.log(service);

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
          // context.commit(
          //   "SET_CHECK_OUT_ORDER_ITEMS",
          //   checkOutOrders.account
          // );

          context.commit("SET_CHECK_OUT_ORDER_ITEMS", checkOutOrders.items);
          context.commit("SET_ACCOUNT", checkOutOrders.account);
          context.commit("SET_TOTAL_AMOUNT", checkOutOrders.items);
        });
    },
    activateService(contex, index) {
      contex.commit("SET_SERVICE_ACTIVE", index);
    }
  },
  getters: {
    getTotalAmount: state => state.totalAmount,
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
    getAccount: state => state.account,
    getContacts: state => state.contacts,
    isDarkMode: state => state.darkMode,
    getSelectedService: state => state.selectedService,
    getSelectedAccountNumber: state => state.selectedAccountNumber
  }
});
