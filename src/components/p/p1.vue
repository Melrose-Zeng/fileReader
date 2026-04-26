<template>
  <div class="imgbox">
    <el-image fit="fill" class="elImg" :src="p1" alt="" />
    <el-image fit="fill" class="elImg" :src="p2" alt="" />
    <template v-if="props.show">
      <el-image fit="fill" class="elImg wenzi fadeInUp" :src="p3" alt="" />
      <el-image fit="fill" class="elImg sub animate__animated animate__fadeIn" :src="p4" alt="" />
      <el-image fit="fill" class="elImg shu fadeInUp" :src="p5" alt="" />
      <el-image fit="fill" class="elImg bai fadeInUp" :src="p6" alt="" />
      <el-image fit="fill" class="elImg pi fadeInUp" :src="p7" alt="" />
    </template>
  </div>
</template>
<script setup>
import p1 from '@/assets/picture/1/1.png'
import p2 from '@/assets/picture/1/2.png'
import p3 from '@/assets/picture/1/3.png'
import p4 from '@/assets/picture/1/4.png'
import p5 from '@/assets/picture/1/5.png'
import p6 from '@/assets/picture/1/6.png'
import p7 from '@/assets/picture/1/7.png'
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