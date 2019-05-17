<template>
  <v-app>
    <v-content>
      <router-view/>
      <!-- <HelloWorld/> -->

      <v-bottom-nav :active.sync="bottomNav" :value="true" absolute color="transparent">
        <router-link to="/" class="bottom-nav-link">
          <v-btn color="rgb(25, 118, 210)" flat value="recent">
            <span>Recent</span>
            <v-icon>history</v-icon>
          </v-btn>
        </router-link>
        <router-link to="/epay" class="bottom-nav-link">
          <v-btn color="rgb(25, 118, 210)" flat value="favorites">
            <span>Favorites</span>
            <v-icon>favorite</v-icon>
          </v-btn>
        </router-link>
        <router-link to="/opay" class="bottom-nav-link">
          <v-btn color="rgb(25, 118, 210)" flat value="nearby">
            <span>Nearby</span>
            <v-icon>place</v-icon>
          </v-btn>
        </router-link>
        <router-link to="/about" class="bottom-nav-link">
          <v-btn color="rgb(25, 118, 210)" flat value="neary">
            <span>Nearby</span>
            <v-icon>place</v-icon>
          </v-btn>
        </router-link>
      </v-bottom-nav>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  components: {
    HelloWorld
  },
  data() {
    return {
      bottomNav: "recent"
    };
  }
};
</script>
<style>
.bottom-nav-link {
  text-decoration: none;
}
</style>
