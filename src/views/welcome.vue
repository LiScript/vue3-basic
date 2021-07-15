<template>
  <div class="welcome">
    <Flop
      v-if="!mobile"
      class="Flop"
    />
  </div>
</template>

<script lang="ts">
import Flop from "/@/components/ReFlop";
import { ref } from "vue";
import { deviceDetection } from "/@/utils/deviceDetection";

export default {
  name: "welcome",
  components: {
    Flop
  },
  setup() {
    let mobile = ref(deviceDetection());

    return {
      mobile
    };
  }
};
</script>

<style lang="scss" scoped>
.welcome {
  width: 100%;
  height: 100%;
  .Flop {
    height: 104px;
    width: 500px;
    margin: 15% 35%;
  }
}
</style>
