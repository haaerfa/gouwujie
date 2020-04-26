<template>
  <div>
  <swiper class="detail-swiper">
    <swiper-item v-for="(item,index) in topImg" :key="index">
      <img :src="item" />
    </swiper-item>
  </swiper></div>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  name: "detailSwiper",
  props: {
    topImg: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    Swiper,
    SwiperItem
  }
};
</script>

<style scoped>
.detail-swiper {
  overflow: hidden; 
  height: 350px;
}
</style>