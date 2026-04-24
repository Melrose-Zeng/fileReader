<template>
  <imageBox>
    <el-image fit="fill" class="elImg" :src="p1" alt="" />
    <template v-if="props.show">
      <el-image fit="fill" class="elImg a1 animate__animated animate__fadeInDown" :src="p2" alt="" />
      <el-image fit="fill" class="elImg a2 animate__animated animate__fadeInRight d2" :src="p3" alt="" />
      <el-image fit="fill" class="elImg a3 animate__animated animate__fadeInRight d2" :src="p4" alt="" />
      <el-image fit="fill" class="elImg a4 animate__animated animate__fadeInRight d2" :src="p5" alt="" />
      <el-image fit="fill" class="elImg a5 animate__animated animate__fadeInRight d2" :src="p6" alt="" />
      <el-image fit="fill" class="elImg a6 animate__animated animate__fadeInRight d2" :src="p7" alt="" />
      <el-image fit="fill" class="elImg a7 animate__animated animate__fadeInRight d2" :src="p8" alt="" />
    </template>
  </imageBox>
</template>
<script setup>
import imageBox from '../imageBox.vue';
import p1 from '@/assets/picture/2/1.png'
import p2 from '@/assets/picture/2/2.png'
import p3 from '@/assets/picture/2/3.png'
import p4 from '@/assets/picture/2/4.png'
import p5 from '@/assets/picture/2/5.png'
import p6 from '@/assets/picture/2/6.png'
import p7 from '@/assets/picture/2/7.png'
import p8 from '@/assets/picture/2/8.png'
const props = defineProps({
  show:false
})
</script>
<style scoped>
.a1{
  animation-delay: .1s;
  animation-duration: .8s;
}
.a2{
  animation-delay: .2s;
}
.a3{
  animation-delay: .3s;
}
.a4{
  animation-delay: .4s;
}
.a5{
  animation-delay: .5s;
}
.a6{
  animation-delay: .6s;
}
.a7{
  animation-delay: .7s;
}
.d2{
  animation-duration: 1.5s;
}
</style>