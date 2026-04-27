<template>
  <div class="imgbox">
    <img class="elImg" src="@/assets/picture/1/1.jpg" alt="" />
    <img class="elImg" src="@/assets/picture/1/2.png" alt="" />
    <template v-if="props.show">
      <img class="elImg wenzi fadeInUp" src="@/assets/picture/1/3.png" alt="" />
      <img class="elImg sub animate__animated animate__fadeIn" src="@/assets/picture/1/4.png" alt="" />
      <img class="elImg shu fadeInUp" src="@/assets/picture/1/5.png" alt="" />
      <img class="elImg bai fadeInUp" src="@/assets/picture/1/6.png" alt="" />
      <img class="elImg pi fadeInUp" src="@/assets/picture/1/7.png" alt="" />
    </template>
  </div>
</template>
<script setup>
const props = defineProps({
  show:false
})
</script>
<style scoped>
/* 关键帧动画定义 */
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
.pi,.bai,.shu {
  animation-duration: 0.5s;
}
.pi{
  animation-delay: .2s;
}
.shu{
  animation-delay: .4s;
}
.wenzi{
  animation-duration: .9s;
  animation-delay: .8s;
}
.sub{
  animation-duration: 0.6s;
  animation-delay: 1.5s;
}


</style>