<template>
  <v-toolbar color="primary" dark style="box-shadow:unset;" fixed>
    <v-menu v-model="menu" :close-on-content-click="false" :nudge-width="200" offset-x>
      <template v-slot:activator="{ on }">
        <v-toolbar-side-icon v-on="on"></v-toolbar-side-icon>
      </template>

      <v-card :dark="darkMode">
        <v-list>
          <v-list-tile avatar>
            <v-list-tile-content>
              <v-list-tile-title>Settings</v-list-tile-title>
              <v-list-tile-sub-title>Customize</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>

        <v-divider></v-divider>

        <v-list>
          <v-list-tile>
            <v-list-tile-action>
              <v-switch v-model="darkMode" color="purple"></v-switch>
            </v-list-tile-action>
            <v-list-tile-title>Dark Mode</v-list-tile-title>
          </v-list-tile>

          <v-list-tile>
            <v-list-tile-action>
              <v-switch v-model="hints" color="purple"></v-switch>
            </v-list-tile-action>
            <v-list-tile-title>Enable hints</v-list-tile-title>
          </v-list-tile>
        </v-list>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn flat @click="menu = false">Cancel</v-btn>
          <v-btn color="primary" flat @click="menu = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-menu>
    <v-toolbar-title class="white--text">Taleri</v-toolbar-title>

    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>more_vert</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "ToolBar",
  data: () => {
    return {
      fav: true,
      menu: false,
      message: false,
      hints: true
    };
  },
  computed: {
    darkMode: {
      get() {
        return this.$store.state.darkMode;
      },
      set() {
        this.$store.commit("UPDATE_DARK_MODE");
      }
    }
  }
};
</script>

<style>
</style>
