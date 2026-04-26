<template>
  <div class="imgbox">
    <el-image fit="fill" class="elImg" :src="p1" alt="" />
    <template v-if="props.show">
      <el-image fit="fill" class="elImg fadeInUp a1" :src="p2" alt="" />
      <el-image fit="fill" class="elImg fadeInUp a1" :src="p3" alt="" />
      <el-image fit="fill" class="elImg animate__animated animate__fadeInLeft a2" :src="p8" alt="" />
      <el-image fit="fill" class="elImg animate__animated animate__fadeIn a3" :src="p4" alt="" />
      <el-image fit="fill" class="elImg animate__animated animate__fadeIn a4" :src="p10" alt="" />
      <el-image fit="fill" class="elImg animate__animated animate__fadeIn a4" :src="p14" alt="" />
      <el-image fit="fill" class="elImg animate__animated animate__fadeIn a5" :src="p11" alt="" />
      <el-image fit="fill" class="elImg animate__animated animate__fadeIn a5" :src="p15" alt="" />
      <el-image fit="fill" class="elImg animate__animated animate__fadeInLeft a6" :src="p6" alt="" />
      <el-image fit="fill" class="elImg animate__animated animate__fadeIn a7" :src="p5" alt="" />
      <el-image fit="fill" class="elImg animate__animated animate__fadeInLeft a8" :src="p9" alt="" />
      <el-image fit="fill" class="elImg animate__animated animate__fadeIn a9" :src="p7" alt="" />
      <el-image fit="fill" class="elImg animate__animated animate__fadeIn a10" :src="p13" alt="" />
      <el-image fit="fill" class="elImg animate__animated animate__fadeIn a10" :src="p16" alt="" />
      <el-image fit="fill" class="elImg animate__animated animate__fadeIn a11" :src="p12" alt="" />
      <el-image fit="fill" class="elImg animate__animated animate__fadeIn a11" :src="p17" alt="" />
    </template>
  </div>
</template>
<script setup>
import p1 from '@/assets/picture/17/1.png'
import p2 from '@/assets/picture/17/2.png'
import p3 from '@/assets/picture/17/3.png'
import p4 from '@/assets/picture/17/4.png'
import p5 from '@/assets/picture/17/5.png'
import p6 from '@/assets/picture/17/6.png'
import p7 from '@/assets/picture/17/7.png'
import p8 from '@/assets/picture/17/8.png'
import p9 from '@/assets/picture/17/9.png'
import p10 from '@/assets/picture/17/10.png'
import p11 from '@/assets/picture/17/11.png'
import p12 from '@/assets/picture/17/12.png'
import p13 from '@/assets/picture/17/13.png'
import p14 from '@/assets/picture/17/14.png'
import p15 from '@/assets/picture/17/15.png'
import p16 from '@/assets/picture/17/16.png'
import p17 from '@/assets/picture/17/17.png'
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