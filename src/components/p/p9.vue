<template>
  <div class="imgbox">
    <el-image fit="fill" class="elImg" :src="p1" alt="" />
    <template v-if="props.show">
      <el-image fit="fill" class="elImg fadeInUp a1" :src="p2" alt="" />
      <el-image fit="fill" class="elImg fadeInUp a1" :src="p3" alt="" />
      <el-image fit="fill" class="elImg fadeInUp a2" :src="p4" alt="" />
      <el-image fit="fill" class="elImg animate__animated animate__fadeInRight a3" :src="p5" alt="" />
      <el-image fit="fill" class="elImg animate__animated animate__fadeInRight a3" :src="p6" alt="" />
      <el-image fit="fill" class="elImg animate__animated animate__fadeIn f3" :src="p7" alt="" />
      <el-image fit="fill" class="elImg animate__animated animate__fadeIn f4" :src="p8" alt="" />
      <el-image fit="fill" class="elImg animate__animated animate__fadeIn f5" :src="p9" alt="" />
      <el-image fit="fill" class="elImg animate__animated animate__fadeIn f6" :src="p10" alt="" />
      <el-image fit="fill" class="elImg animate__animated animate__fadeIn f7" :src="p11" alt="" />
      <el-image fit="fill" class="elImg animate__animated animate__fadeIn f8" :src="p12" alt="" />
      <el-image fit="fill" class="elImg animate__animated animate__fadeIn f9" :src="p13" alt="" />
      <el-image fit="fill" class="elImg animate__animated animate__fadeIn f10" :src="p14" alt="" />
    </template>
  </div>
</template>
<script setup>
import p1 from '@/assets/picture/9/1.png'
import p2 from '@/assets/picture/9/2.png'
import p3 from '@/assets/picture/9/3.png'
import p4 from '@/assets/picture/9/4.png'
import p5 from '@/assets/picture/9/5.png'
import p6 from '@/assets/picture/9/6.png'
import p7 from '@/assets/picture/9/7.png'
import p8 from '@/assets/picture/9/8.png'
import p9 from '@/assets/picture/9/9.png'
import p10 from '@/assets/picture/9/10.png'
import p11 from '@/assets/picture/9/11.png'
import p12 from '@/assets/picture/9/12.png'
import p13 from '@/assets/picture/9/13.png'
import p14 from '@/assets/picture/9/14.png'
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
  animation-delay: 2.5s;
}
.a5{
  animation-delay: 3.1s;
}
.a6 {
  animation-delay: 4s;
}
.f3 {
  animation-delay: 2.7s;
}

.f4{
  animation-delay: 2.9s;
}
.f5{
  animation-delay: 3.1s;
}
.f6{
  animation-delay: 3.3s;
}
.f7{
  animation-delay: 3.5s;
}
.f8{
  animation-delay: 3.7s;
}
.f9{
  animation-delay: 3.9s;
}

.f10{
  animation-delay: 4.1s;
}
.f11{
  animation-delay: 4.3s;
}
.f12{
  animation-delay: 4.5s;
}
.f13{
  animation-delay: 4.7s;
}
.f14{
  animation-delay: 4.9s;
}


</style>