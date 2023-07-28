import { ref, onMounted, onUnmounted } from "vue";
export default function useTime() {
  // 创建响应式的变量来存储小时、分钟和秒数
  const hours = ref(0);
  const minutes = ref(0);
  const seconds = ref(0);
  const year = ref(0);
  const month = ref(0);
  const day = ref(0);
  const week = ref('');
  const nowTime = ref('')

  // 更新时间
  function updateTime() {
    const date = new Date();
    hours.value = date.getHours();
    minutes.value = date.getMinutes();
    seconds.value = date.getSeconds();
    year.value = date.getFullYear()
    month.value = date.getMonth() + 1
    day.value = date.getDate()
    week.value = "星期" + "日一二三四五六".charAt(date.getDay())
    nowTime.value = date.toLocaleString();
  }

  onMounted(() => {
    updateTime()
    // 每秒钟更新时间
    setInterval(updateTime, 1000);
  });

  onUnmounted(() => {
    // 清除定时器
    clearInterval(updateTime);
  });

  // // 使用 watchEffect 监听时间的变化
  // watchEffect(() => {
  //   updateTime();
  // });

  return {
    hours,
    week,
    minutes,
    seconds,
    year,
    month,
    day,
    nowTime
  };
}
