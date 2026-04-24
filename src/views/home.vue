<template>
  <div class="swiper-box">
    <!-- Swiper 组件：直接使用，无需任何导入 -->
    <swiper style="width: 100%; height: 100%" :modules="[EffectCreative]" :speed="600" ref="swiperRef"
      direction="vertical" @activeIndexChange="sliderChange" @slideChangeTransitionEnd="slideChangeTransitionEnd"
      @init="init">
      <swiper-slide>
        <p1 :show="activeValue === 0" />
      </swiper-slide>
      <swiper-slide>
        <p2 :show="activeValue === 1" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { Pagination, EffectCreative, Navigation } from "swiper";
import p1 from "@/components/p/p1.vue";
import p2 from "@/components/p/p2.vue";
import { ref } from "vue";
import imageBox from "@/components/imageBox.vue";
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
