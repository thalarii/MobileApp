<template>
  <div class="text-xs-center">
    <v-card>
      <div>
        <v-card color="cyn darken-2" class="hite--text" style="box-shadow:unset;">
          <v-layout>
            <v-flex xs3 style="padding-top:22.5px;margin-left:20px;">
              <v-img
                :src="getAccount.owners_logo_link"
                height="80px"
                contain
                style="border-radius:10px"
              ></v-img>
            </v-flex>
            <v-flex xs7>
              <v-card-title primary-title>
                <div>
                  <div class="headline">{{getAccount.owners_name}}</div>
                  <div>{{getAccount.desc}}</div>
                </div>
              </v-card-title>
            </v-flex>
          </v-layout>
          <v-divider light></v-divider>
        </v-card>
      </div>
      <div style="padding:10px;">
        <v-data-table
          :headers="headers"
          :items="getCheckOutOrderItems"
          class="elevaton-0"
          hide-actions
        >
          <template v-slot:items="props">
            <!-- <tr> -->
            <td>{{ props.item.item_name }}</td>
            <td class="text-xs-right">{{ props.item.item_quantity }}</td>
            <td class="text-xs-right">{{ props.item.item_price }}</td>
            <!-- </tr> -->
          </template>
        </v-data-table>
      </div>
      <br>
      <v-spacer></v-spacer>
    </v-card>
  </div>
</template>
<script>
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  computed: {
    ...mapState(["recieptSheet"]),
    ...mapGetters(["getCheckOutOrderItems", "getAccount"])
  },
  methods: {
    ...mapActions(["recieptToServiceSelecter"])
  },
  created: () => {
    // this.getA()
    // console.log("hello");
  },
  data: () => ({
    // sheet: false,
    headers: [
      {
        text: "Item Name ",
        value: "name"
      },
      { text: "Quantity", value: "calories" },
      { text: "Price (Birr)", value: "price" }
    ]
    
  })
};
</script>
<style scoped>
.div.v-list.theme--light {
  background-color: #e3e3e3;
  border-bottom: 1px solid #a9a9a9;
  border-top-left-radius: 10px;
}
</style>
