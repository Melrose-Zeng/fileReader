<template>
  <div class="imgbox">
    <el-image fit="fill" class="elImg" :src="p1" alt="" />
    <template v-if="props.show">
      <el-image fit="fill" class="elImg fadeInUp a1" :src="p2" alt="" />
      <el-image fit="fill" class="elImg fadeInUp a1" :src="p3" alt="" />
      <el-image fit="fill" class="elImg animate__animated animate__fadeInLeft a2" :src="p4" alt="" />
      <el-image fit="fill" class="elImg animate__animated animate__fadeIn a3" :src="p5" alt="" />
      <el-image fit="fill" class="elImg animate__animated animate__fadeIn a4" :src="p11" alt="" />
      <el-image fit="fill" class="elImg animate__animated animate__fadeIn a4" :src="p12" alt="" />
      <el-image fit="fill" class="elImg animate__animated animate__fadeIn a4" :src="p15" alt="" />
      <el-image fit="fill" class="elImg animate__animated animate__fadeInLeft a5" :src="p6" alt="" />
      <el-image fit="fill" class="elImg animate__animated animate__fadeIn a6" :src="p7" alt="" />
      <el-image fit="fill" class="elImg animate__animated animate__fadeInLeft a7" :src="p8" alt="" />
      <el-image fit="fill" class="elImg animate__animated animate__fadeIn a8" :src="p9" alt="" />
      <el-image fit="fill" class="elImg animate__animated animate__fadeIn a9" :src="p10" alt="" />
      <el-image fit="fill" class="elImg animate__animated animate__fadeIn a9" :src="p13" alt="" />
      <el-image fit="fill" class="elImg animate__animated animate__fadeIn a9" :src="p14" alt="" />

    </template>
  </div>
</template>
<script setup>
import p1 from '@/assets/picture/37/1.png'
import p2 from '@/assets/picture/37/2.png'
import p3 from '@/assets/picture/37/3.png'
import p4 from '@/assets/picture/37/4.png'
import p5 from '@/assets/picture/37/5.png'
import p6 from '@/assets/picture/37/6.png'
import p7 from '@/assets/picture/37/7.png'
import p8 from '@/assets/picture/37/8.png'
import p9 from '@/assets/picture/37/9.png'
import p10 from '@/assets/picture/37/10.png'
import p11 from '@/assets/picture/37/11.png'
import p12 from '@/assets/picture/37/12.png'
import p13 from '@/assets/picture/37/13.png'
import p14 from '@/assets/picture/37/14.png'
import p15 from '@/assets/picture/37/15.png'
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
  animation-delay: 1.4s;
}
.a4{
  animation-delay: 2s;
}
.a5{
  animation-delay: 2.6s;
}
.a6 {
  animation-delay: 3.5s;
}
.a7 {
  animation-delay: 4.1s;
}
.a8 {
  animation-delay: 4.8s;
}
.a9{
  animation-delay: 5.4s;
}
.a10{
  animation-delay: 6.3s;
}
.a11{
  animation-delay: 6.8s;
}


</style>