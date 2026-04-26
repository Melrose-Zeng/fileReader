<template>
  <div class="imgbox">
    <el-image fit="fill" class="elImg" :src="p1" alt="" />
    <template v-if="props.show">
      <el-image fit="fill" class="elImg fadeInUp a1 " :src="p7" alt="" />
      <el-image fit="fill" class="elImg fadeInUp a1 " :src="p6" alt="" />
      <el-image fit="fill" class="elImg animate__animated animate__fadeInRight a2 " :src="p5" alt="" />
      <el-image fit="fill" class="elImg animate__animated animate__fadeInRight a2 " :src="p9" alt="" />
      <el-image fit="fill" class="elImg animate__animated animate__fadeInRight a2 " :src="p8" alt="" />
      <el-image fit="fill" class="elImg fadeInUp a3" :src="p4" alt="" />
      <el-image fit="fill" class="elImg fadeInUp a3" :src="p3" alt="" />
      <el-image fit="fill" class="elImg fadeInUp a4" :src="p2" alt="" />
    </template>
  </div>
</template>
<script setup>
import p1 from '@/assets/picture/4/1.png'
import p2 from '@/assets/picture/4/2.png'
import p3 from '@/assets/picture/4/3.png'
import p4 from '@/assets/picture/4/4.png'
import p5 from '@/assets/picture/4/5.png'
import p6 from '@/assets/picture/4/6.png'
import p7 from '@/assets/picture/4/7.png'
import p8 from '@/assets/picture/4/8.png'
import p9 from '@/assets/picture/4/9.png'
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
  animation-delay: 1.3s;
}
.a4{
  animation-delay: 2s;
}

</style>