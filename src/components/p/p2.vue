<template>
  <div class="imgbox">
    <img class="elImg" src="@/assets/picture/2/1.jpg" alt="" />
    <template v-if="props.show">
      <img class="elImg a1 animate__animated animate__fadeInDown" src="@/assets/picture/2/2.png" alt="" />
      <img class="elImg a2 animate__animated animate__fadeInRight d2" src="@/assets/picture/2/3.png" alt="" />
      <img class="elImg a3 animate__animated animate__fadeInRight d2" src="@/assets/picture/2/4.png" alt="" />
      <img class="elImg a4 animate__animated animate__fadeInRight d2" src="@/assets/picture/2/5.png" alt="" />
      <img class="elImg a5 animate__animated animate__fadeInRight d2" src="@/assets/picture/2/6.png" alt="" />
      <img class="elImg a6 animate__animated animate__fadeInRight d2" src="@/assets/picture/2/7.png" alt="" />
      <img class="elImg a7 animate__animated animate__fadeInRight d2" src="@/assets/picture/2/8.png" alt="" />
    </template>
  </div>
</template>
<script setup>
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