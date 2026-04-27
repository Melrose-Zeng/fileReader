<template>
  <div class="imgbox">
    <img class="elImg" src="@/assets/picture/17/1.jpg" alt="" />
    <template v-if="props.show">
      <img class="elImg fadeInUp a1" src="@/assets/picture/17/2.png" alt="" />
      <img class="elImg fadeInUp a1" src="@/assets/picture/17/3.png" alt="" />
      <img class="elImg animate__animated animate__fadeInLeft a2" src="@/assets/picture/17/8.png" alt="" />
      <img class="elImg animate__animated animate__fadeIn a3" src="@/assets/picture/17/4.png" alt="" />
      <img class="elImg animate__animated animate__fadeIn a4" src="@/assets/picture/17/10.png" alt="" />
      <img class="elImg animate__animated animate__fadeIn a4" src="@/assets/picture/17/14.png" alt="" />
      <img class="elImg animate__animated animate__fadeIn a5" src="@/assets/picture/17/11.png" alt="" />
      <img class="elImg animate__animated animate__fadeIn a5" src="@/assets/picture/17/15.png" alt="" />
      <img class="elImg animate__animated animate__fadeInLeft a6" src="@/assets/picture/17/6.png" alt="" />
      <img class="elImg animate__animated animate__fadeIn a7" src="@/assets/picture/17/5.png" alt="" />
      <img class="elImg animate__animated animate__fadeInLeft a8" src="@/assets/picture/17/9.png" alt="" />
      <img class="elImg animate__animated animate__fadeIn a9" src="@/assets/picture/17/7.png" alt="" />
      <img class="elImg animate__animated animate__fadeIn a10" src="@/assets/picture/17/13.png" alt="" />
      <img class="elImg animate__animated animate__fadeIn a10" src="@/assets/picture/17/16.png" alt="" />
      <img class="elImg animate__animated animate__fadeIn a11" src="@/assets/picture/17/12.png" alt="" />
      <img class="elImg animate__animated animate__fadeIn a11" src="@/assets/picture/17/17.png" alt="" />
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
  animation-delay: 2.3s;
}
.a5{
  animation-delay: 2.8s;
}
.a6 {
  animation-delay: 3.2s;
}
.a7 {
  animation-delay: 4.3s;
}
.a8 {
  animation-delay: 4.7s;
}
.a9{
  animation-delay: 5.6s;
}
.a10{
  animation-delay: 6.4s;
}
.a11{
  animation-delay: 7s;
}

</style>