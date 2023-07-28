<template>
  <div class="root" :class="[showMask == 'blue' ? 'mask-blue' : 'mask-dark']">
    <headerTime />
    <router-view />
    <footMenu class="footer" :default-active="active" @change="routerChange" />
  </div>
</template>
<script setup>
import { ref, onMounted, onBeforeMount, nextTick } from "vue";
import footMenu from "@/components/footMenu";
import { useRouter } from "vue-router";
import headerTime from '@/components/headerTime'
const router = useRouter();
const showMask = ref("")
router.beforeEach((to, from, next) => {
  // 通过 to.meta.overlay 来获取当前路由的背景遮罩状态
  const showOverlay = to.meta.overlay;
  nextTick(() => showMask.value = showOverlay)
  next(() => { });
})
const active = ref(null);
let show = ref(false);
onMounted(() => {
  show.value = true;
});

onBeforeMount(() => {
  active.value = window.location.pathname;
});
let routerChange = (val) => {
  router.push(val);
};
</script>
<style scoped lang="scss">
.footer {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 50px;
  width: 1128px;
  display: flex;
  white-space: nowrap;
}
</style>
<style lang="scss">
[v-cloak] {
  display: none;
}

.fade-in-down-right-enter-active,
.fade-in-down-right-leave-active {
  will-change: transform;
  transition: all 1s ease-out;
  /*1s后从初始状态，过渡到显示状态*/
}

.fade-in-down-right-enter-from {
  opacity: 0;
  transform: translateX(100%);
}

.fade-in-down-right-enter-to {
  opacity: 1;
  transform: translateX(0);
}

.fade-in-down-right-leave-from {
  opacity: 0;
  transform: translateX(100%);
}

.fade-in-down-right-leave-to {
  opacity: 1;
  transform: translateX(0);
}


.fade-in-down-enter-active {
  animation: fade-in-down-enter 1s ease-out;
}

.fade-in-down-leave-active {
  animation: fade-in-down-leave 1s ease-out;
}

@keyframes fade-in-down-enter {
  from {
    opacity: 0;
    transform: translateX(-100%);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fade-in-down-leave {
  from {
    opacity: 1;
    transform: translateX(0);
  }

  to {
    opacity: 0;
    transform: translateX(100%);
  }
}





.el-loading-spinner {
  transform: translateY(-20%);
}

.echart .watch>div:last-child {

  background: rgba(0, 61, 135, 0.8);
  background-color: rgba(0, 61, 135, 0.8) !important;
  backdrop-filter: blur(15px);
  border-style: none !important;

  div {
    color: #D1E0FF !important;
  }

  span:not(span:first-child) {
    color: #D1E0FF !important;
  }
}
</style>
