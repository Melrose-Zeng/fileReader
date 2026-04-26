<template>
  <div class="swiper-box">
    <!-- Swiper 组件：直接使用，无需任何导入 -->
    <swiper style="width: 100%; height: 100%" :modules="[EffectCreative]" :speed="600" ref="swiperRef"
      direction="vertical" @activeIndexChange="sliderChange" @slideChangeTransitionEnd="slideChangeTransitionEnd"
      @init="init">
      <swiper-slide v-for="i in 39">
        <imageBox :com="'p'+i" :show="activeValue === i-1"/>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { Pagination, EffectCreative, Navigation } from "swiper";
import imageBox from '@/components/imageBox.vue'
import { ref } from "vue";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/a11y";
const swiperRef = ref()
const activeValue = ref(0)
const sliderChange = (val) => {
  activeValue.value = val.activeIndex
}
// 切换结束时
const slideChangeTransitionEnd = (val) => {
  activeValue.value = val.activeIndex
}
const init = () => {
}
</script>

<style scoped>
.swiper-box {
  width: 100vw;
  height: 100vh;
}
</style>
