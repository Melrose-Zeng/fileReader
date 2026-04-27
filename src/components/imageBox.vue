<template>
  <div class="imgbox">
    <!-- <component :is="com" :show="show"></component> -->
    <p1 :show="show" v-if="com==='p1'"/>
    <p2 :show="show" v-else-if="com==='p2'"/>
    <p3 :show="show" v-else-if="com==='p3'"/>
    <p4 :show="show" v-else-if="com==='p4'"/>
    <p5 :show="show" v-else-if="com==='p5'"/>
    <p6 :show="show" v-else-if="com==='p6'"/>
    <p7 :show="show" v-else-if="com==='p7'"/>
    <p8 :show="show" v-else-if="com==='p8'"/>
    <p9 :show="show" v-else-if="com==='p9'"/>
    <p10 :show="show" v-else-if="com==='p10'"/>
    <p11 :show="show" v-else-if="com==='p11'"/>
    <p12 :show="show" v-else-if="com==='p12'"/>
    <p13 :show="show" v-else-if="com==='p13'"/>
    <p14 :show="show" v-else-if="com==='p14'"/>
    <p15 :show="show" v-else-if="com==='p15'"/>
    <p16 :show="show" v-else-if="com==='p16'"/>
    <p17 :show="show" v-else-if="com==='p17'"/>
    <p18 :show="show" v-else-if="com==='p18'"/>
    <p19 :show="show" v-else-if="com==='p19'"/>
    <p20 :show="show" v-else-if="com==='p20'"/>
    <p21 :show="show" v-else-if="com==='p21'"/>
    <p22 :show="show" v-else-if="com==='p22'"/>
    <p23 :show="show" v-else-if="com==='p23'"/>
    <p24 :show="show" v-else-if="com==='p24'"/>
    <p25 :show="show" v-else-if="com==='p25'"/>
    <p26 :show="show" v-else-if="com==='p26'"/>
    <p27 :show="show" v-else-if="com==='p27'"/>
    <p28 :show="show" v-else-if="com==='p28'"/>
    <p29 :show="show" v-else-if="com==='p29'"/>
    <p30 :show="show" v-else-if="com==='p30'"/>
    <p31 :show="show" v-else-if="com==='p31'"/>
    <p32 :show="show" v-else-if="com==='p32'"/>
    <p33 :show="show" v-else-if="com==='p33'"/>
    <p34 :show="show" v-else-if="com==='p34'"/>
    <p35 :show="show" v-else-if="com==='p35'"/>
    <p36 :show="show" v-else-if="com==='p36'"/>
    <p37 :show="show" v-else-if="com==='p37'"/>
    <p38 :show="show" v-else-if="com==='p38'"/>
    <p39 :show="show" v-else-if="com==='p39'"/>
    
  </div>
</template>
<script>
import { defineAsyncComponent } from 'vue';
const p1 = defineAsyncComponent(() => import('@/components/p/p1.vue'));
const p2 = defineAsyncComponent(() => import('@/components/p/p2.vue'));
const p3 = defineAsyncComponent(() => import('@/components/p/p3.vue'));
const p4 = defineAsyncComponent(() => import('@/components/p/p4.vue'));
const p5 = defineAsyncComponent(() => import('@/components/p/p5.vue'));
const p6 = defineAsyncComponent(() => import('@/components/p/p6.vue'));
const p7 = defineAsyncComponent(() => import('@/components/p/p7.vue'));
const p8 = defineAsyncComponent(() => import('@/components/p/p8.vue'));
const p9 = defineAsyncComponent(() => import('@/components/p/p9.vue'));
const p10 = defineAsyncComponent(() => import('@/components/p/p10.vue'));
const p11 = defineAsyncComponent(() => import('@/components/p/p11.vue'));
const p12 = defineAsyncComponent(() => import('@/components/p/p12.vue'));
const p13 = defineAsyncComponent(() => import('@/components/p/p13.vue'));
const p14 = defineAsyncComponent(() => import('@/components/p/p14.vue'));
const p15 = defineAsyncComponent(() => import('@/components/p/p15.vue'));
const p16 = defineAsyncComponent(() => import('@/components/p/p16.vue'));
const p17 = defineAsyncComponent(() => import('@/components/p/p17.vue'));
const p18 = defineAsyncComponent(() => import('@/components/p/p18.vue'));
const p19 = defineAsyncComponent(() => import('@/components/p/p19.vue'));
const p20 = defineAsyncComponent(() => import('@/components/p/p20.vue'));
const p21 = defineAsyncComponent(() => import('@/components/p/p21.vue'));
const p22 = defineAsyncComponent(() => import('@/components/p/p22.vue'));
const p23 = defineAsyncComponent(() => import('@/components/p/p23.vue'));
const p24 = defineAsyncComponent(() => import('@/components/p/p24.vue'));
const p25 = defineAsyncComponent(() => import('@/components/p/p25.vue'));
const p26 = defineAsyncComponent(() => import('@/components/p/p26.vue'));
const p27 = defineAsyncComponent(() => import('@/components/p/p27.vue'));
const p28 = defineAsyncComponent(() => import('@/components/p/p28.vue'));
const p29 = defineAsyncComponent(() => import('@/components/p/p29.vue'));
const p30 = defineAsyncComponent(() => import('@/components/p/p30.vue'));
const p31 = defineAsyncComponent(() => import('@/components/p/p31.vue'));
const p32 = defineAsyncComponent(() => import('@/components/p/p32.vue'));
const p33 = defineAsyncComponent(() => import('@/components/p/p33.vue'));
const p34 = defineAsyncComponent(() => import('@/components/p/p34.vue'));
const p35 = defineAsyncComponent(() => import('@/components/p/p35.vue'));
const p36 = defineAsyncComponent(() => import('@/components/p/p36.vue'));
const p37 = defineAsyncComponent(() => import('@/components/p/p37.vue'));
const p38 = defineAsyncComponent(() => import('@/components/p/p38.vue'));
const p39 = defineAsyncComponent(() => import('@/components/p/p39.vue'));
export default {
  name: 'imageBox',
  props: {
    com: String, // 组件名称
    show: Boolean // 是否显示组件
  },
  components: {
    p1,
    p2,
    p3,
    p4,
    p5,
    p6,
    p7,
    p8,
    p9,
    p10,
    p11,
    p12,
    p13,
    p14,
    p15,
    p16,
    p17,
    p18,
    p19,
    p20,
    p21,
    p22,
    p23,
    p24,
    p25,
    p26,
    p27,
    p28,
    p29,
    p30,
    p31,
    p32,
    p33,
    p34,
    p35,
    p36,
    p37,
    p38,
    p39
  },
  props: {
      com: String, // 组件名称
      show: Boolean // 是否显示组件
  },
  mounted() {
    console.log(this.com, this.show);
  }
}
</script>
<style scoped>

</style>