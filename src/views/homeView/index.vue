<template>
  <div v-cloak class="homeView">
    <transition-group name="fade-in-down">
      <template v-if="shouldShowComponent('securityMonitoring')" key='securityMonitoring'>
        <securityMonitoring class="securityMonitoring" />
      </template>
    </transition-group>

  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import securityMonitoring from "./components/securityMonitoring";
const showComponents = ref(new Set());
const shouldShowComponent = (componentName) => {
  return showComponents.value.has(componentName); // Access using .value
};

const animateComponent = (componentName, delay) => {
  setTimeout(() => {
    showComponents.value.add(componentName); // Access using .value
  }, delay);
};

onMounted(() => {
  animateComponent('securityMonitoring', 0);
});

onBeforeUnmount(() => {
  showComponents.value.clear(); // Access using .value
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
