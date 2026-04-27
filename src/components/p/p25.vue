<template>
  <div class="imgbox">
    <img class="elImg" src="@/assets/picture/25/1.jpg" alt="" />
    <template v-if="props.show">
      <img class="elImg fadeInUp a1" src="@/assets/picture/25/2.png" alt="" />
      <img class="elImg fadeInUp a1" src="@/assets/picture/25/3.png" alt="" />
      <img class="elImg fadeInUp a1" src="@/assets/picture/25/4.png" alt="" />
      <img class="elImg fadeInUp a1" src="@/assets/picture/25/5.png" alt="" />
      <img class="elImg fadeInUp a1" src="@/assets/picture/25/6.png" alt="" />
      <img class="elImg animate__animated animate__fadeIn a2" src="@/assets/picture/25/7.png" alt="" />
      <img class="elImg animate__animated animate__fadeIn a2" src="@/assets/picture/25/8.png" alt="" />
      <img class="elImg animate__animated animate__fadeIn a2" src="@/assets/picture/25/9.png" alt="" />
      <img class="elImg animate__animated animate__fadeIn a2" src="@/assets/picture/25/10.png" alt="" />

    </template>
  </div>
</template>
<script setup>
const props = defineProps({
  show:false
})
</script>
<style scoped>
@keyframes fadeInUp {
  0% {
    transform: translateY(15%); /* 初始位置：屏幕外下方 */
    opacity: 0;                /* 初始完全透明 */
  }
  100% {
    transform: translateY(0);   /* 最终位置：回到原始位置 */
    opacity: 1;                /* 最终完全不透明 */
  }
}

/* 动画应用类 */
.fadeInUp {
  opacity: 0;
  animation: fadeInUp 1s ease-out forwards; /* 持续0.8秒，缓动效果，结束后保持最终状态 */
}
.a1{
  animation-delay: .1s;
  animation-duration: .8s;
}
.a2{
  animation-delay: .8s;
  animation-duration: .8s;
}
.a3{
  animation-delay: 1.6s;
}
.a4{
  animation-delay: 2.2s;
}
.a5{
  animation-delay: 2.5s;
}
.a6 {
  animation-delay: 3.5s;
}
.a7 {
  animation-delay: 4.2s;
}
.a8 {
  animation-delay: 5.1s;
}
.a9{
  animation-delay: 5.6s;
}


</style>