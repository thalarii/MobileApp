<template>
  <div>
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from "../components/HelloWorld";

export default {
  data() {
    return {
      bottomNav: "recent"
    };
  },
  components: {
    HelloWorld
  }
};
</script>
