<template>
  <div class="imgbox">
    <img class="elImg" src="@/assets/picture/8/1.jpg" alt="" />
    <img class="elImg" src="@/assets/picture/8/5.png" alt="" />
    <template v-if="props.show">
      <img class="elImg fadeInUp a1" src="@/assets/picture/8/2.png" alt="" />
      <img class="elImg fadeInUp a1" src="@/assets/picture/8/3.png" alt="" />
      <img class="elImg fadeInUp a2" src="@/assets/picture/8/4.png" alt="" />

      <img class="elImg animate__animated animate__fadeIn f1" src="@/assets/picture/8/5.png" alt="" />
      <img class="elImg animate__animated animate__fadeIn f2" src="@/assets/picture/8/6.png" alt="" />
      <img class="elImg animate__animated animate__fadeIn f3" src="@/assets/picture/8/7.png" alt="" />
      <img class="elImg animate__animated animate__fadeIn f4" src="@/assets/picture/8/8.png" alt="" />
      <img class="elImg animate__animated animate__fadeIn f5" src="@/assets/picture/8/9.png" alt="" />
      <img class="elImg animate__animated animate__fadeIn f6" src="@/assets/picture/8/10.png" alt="" />
      <img class="elImg animate__animated animate__fadeIn f7" src="@/assets/picture/8/11.png" alt="" />
      <img class="elImg animate__animated animate__fadeIn f8" src="@/assets/picture/8/12.png" alt="" />
      <img class="elImg animate__animated animate__fadeIn f9" src="@/assets/picture/8/13.png" alt="" />
      <img class="elImg animate__animated animate__fadeIn f10" src="@/assets/picture/8/14.png" alt="" />
      <img class="elImg animate__animated animate__fadeIn f11" src="@/assets/picture/8/15.png" alt="" />
      <img class="elImg animate__animated animate__fadeIn f12" src="@/assets/picture/8/16.png" alt="" />
      <img class="elImg animate__animated animate__fadeIn f13" src="@/assets/picture/8/17.png" alt="" />
      <img class="elImg animate__animated animate__fadeIn f14" src="@/assets/picture/8/18.png" alt="" />
      <img class="elImg animate__animated animate__fadeIn f15" src="@/assets/picture/8/19.png" alt="" />

    </template>
  </div>
</template>
<script setup>
const props = defineProps({
  show: false
})
</script>
<style scoped>
@keyframes fadeInUp {
  0% {
    transform: translateY(15%);
    /* 初始位置：屏幕外下方 */
    opacity: 0;
    /* 初始完全透明 */
  }

  100% {
    transform: translateY(0);
    /* 最终位置：回到原始位置 */
    opacity: 1;
    /* 最终完全不透明 */
  }
}

/* 动画应用类 */
.fadeInUp {
  opacity: 0;
  animation: fadeInUp 1s ease-out forwards;
  /* 持续0.8秒，缓动效果，结束后保持最终状态 */
}

.a1 {
  animation-delay: .1s;
  animation-duration: .8s;
}

.a2 {
  animation-delay: .8s;
  animation-duration: .8s;
}

.f1 {
  animation-delay: 1.1s;
}

.f2 {
  animation-delay: 1.3s;
}

.f3 {
  animation-delay: 1.5s;
}

.f4 {
  animation-delay: 1.7s;
}

.f5 {
  animation-delay: 1.9s;
}

.f6 {
  animation-delay: 2.1s;
}

.f7 {
  animation-delay: 2.3s;
}

.f8 {
  animation-delay: 2.5s;
}

.f9 {
  animation-delay: 2.7s;
}

.f10 {
  animation-delay: 2.9s;
}

.f11 {
  animation-delay: 3.1s;
}

.f12 {
  animation-delay: 3.3s;
}

.f13 {
  animation-delay: 3.5s;
}

.f14 {
  animation-delay: 3.7s;
}

.f15 {
  animation-delay: 3.9s;
}</style>