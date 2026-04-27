<template>
  <div class="imgbox">
    <img class="elImg" src="@/assets/picture/12/1.jpg" alt="" />
    <template v-if="props.show">
      <img class="elImg fadeInUp a1" src="@/assets/picture/12/2.png" alt="" />
      <img class="elImg fadeInUp a1" src="@/assets/picture/12/3.png" alt="" />
      <img class="elImg animate__animated animate__fadeInLeft a2" src="@/assets/picture/12/4.png" alt="" />
      <img class="elImg fadeInUp a3" src="@/assets/picture/12/5.png" alt="" />
      <img class="elImg animate__animated animate__fadeIn a4" src="@/assets/picture/12/6.png" alt="" />
      <img class="elImg animate__animated animate__fadeIn a4" src="@/assets/picture/12/7.png" alt="" />
      <img class="elImg animate__animated animate__fadeIn a4" src="@/assets/picture/12/8.png" alt="" />
      <img class="elImg animate__animated animate__fadeIn a4" src="@/assets/picture/12/9.png" alt="" />
      <img class="elImg animate__animated animate__fadeIn a4" src="@/assets/picture/12/10.png" alt="" />
      <img class="elImg animate__animated animate__fadeIn a4" src="@/assets/picture/12/11.png" alt="" />
      <img class="elImg animate__animated animate__fadeIn a4" src="@/assets/picture/12/12.png" alt="" />
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
  animation-delay: .7s;
  animation-duration: .8s;
}
.a3{
  animation-delay: 1.6s;
}
.a4{
  animation-delay: 2.5s;
}
.a5{
  animation-delay: 3s;
}

</style>