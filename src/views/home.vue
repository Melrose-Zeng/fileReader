<template>
  <div class="swiper-box">
    <!-- Swiper 组件：直接使用，无需任何导入 -->
    <swiper :lazy="true" style="width: 100%; height: 100%" :modules="[EffectCreative, Lazy]" :speed="600"
      direction="vertical" @activeIndexChange="sliderChange" @slideChangeTransitionEnd="slideChangeTransitionEnd"
      @init="init">
      <swiper-slide v-for="i in 39">
        <imageBox v-if="showList[i - 1]" :com="'p' + i" :show="activeValue === i - 1" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';
import { Pagination, EffectCreative, Navigation, Lazy } from "swiper";
const imageBox = defineAsyncComponent(() => import('@/components/imageBox.vue'));
// import imageBox from "@/components/imageBox.vue";
import { ref } from "vue";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/a11y";
const activeValue = ref(0)
const showList = ref({
  0: true,
  1: true,
  2: false,
  3: false,
  4: false,
  5: false,
  6: false,
  7: false,
  8: false,
  9: false,
  10: false,
  11: false,
  12: false,
  13: false,
  14: false,
  15: false,
  16: false,
  17: false,
  18: false,
  19: false,
  20: false,
  21: false,
  22: false,
  23: false,
  24: false,
  25: false,
  26: false,
  27: false,
  28: false,
  29: false,
  30: false,
  31: false,
  32: false,
  33: false,
  34: false,
  35: false,
  36: false,
  37: false,
  38: false
})
const sliderChange = (val) => {
  activeValue.value = val.activeIndex
  showList.value[val.activeIndex] = true
  showList.value[val.activeIndex + 1] = true
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
