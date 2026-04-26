<template>
  <div class="imgbox">
    <el-image fit="fill" class="elImg" :src="p1" alt="" />
    <template v-if="props.show">
      <el-image fit="fill" class="elImg animate__animated animate__fadeInLeft a1" :src="p3" alt="" />
      <el-image fit="fill" class="elImg fadeInUp a2" :src="p2" alt="" />
      <el-image fit="fill" class="elImg animate__animated animate__fadeIn a3" :src="p4" alt="" />
      <el-image fit="fill" class="elImg animate__animated animate__fadeIn a3 " :src="p5" alt="" />
    </template>
  </div>
</template>
<script setup>
import p1 from '@/assets/picture/16/1.png'
import p2 from '@/assets/picture/16/2.png'
import p3 from '@/assets/picture/16/3.png'
import p4 from '@/assets/picture/16/4.png'
import p5 from '@/assets/picture/16/5.png'
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
  animation-delay: .9s;
}
.a3{
  animation-delay: 2.0s;
}
.a4{
  animation-delay: 1.8s;
}
.d2{
  animation-duration: 1.5s;
}
</style>