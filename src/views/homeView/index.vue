<template>
  <div v-cloak class="homeView">
    <transition name="fade-in-down">
      <div v-if="show" key="securityMonitoring" class="securityMonitoring">
        <securityMonitoring />
      </div>
    </transition>
  </div>
</template>
<script setup>
import { onMounted, reactive, ref, toRefs, onBeforeUnmount } from "vue";
import securityMonitoring from "./components/securityMonitoring";
let show = ref(false);
let show1 = ref(false);
let show2 = ref(false);
let show3 = ref(false);
let show4 = ref(false);
onMounted(() => {
  show.value = true;
  setTimeout(() => {
    show1.value = true;
  }, 500);
  setTimeout(() => {
    show2.value = true;
  }, 1000);
  setTimeout(() => {
    show3.value = true;
  }, 1500);
  setTimeout(() => {
    show4.value = true;
  }, 2000);
});
onBeforeUnmount(() => {
  show.value = false;
  show1.value = false;
  show2.value = false;
  show3.value = false;
  show4.value = false;
});
</script>
<style lang="scss" scoped>
.homeView {
  width: 100%;
  height: 100%;
  .securityMonitoring {
    @include bgIndex;
    left: 16px;
    top: 73px;
    width: 326px;
    height: 636px;
  }

  .productionSelfControl {
    @include bgIndex;
    left: 16px;
    top: 721px;
    width: 326px;
    height: 338px;
  }

  .environmentalMonitoring {
    @include bgIndex;
    right: 16px;
    top: 73px;
    width: 326px;
    height: 432px;
  }

  .vehicleManage {
    @include bgIndex;
    right: 16px;
    top: 522px;
    width: 326px;
    height: 536px;
  }
}
</style>
