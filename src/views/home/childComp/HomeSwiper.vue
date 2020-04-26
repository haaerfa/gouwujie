<template>
 <div>
  <swiper>
    <swiper-item  v-for="(item,index) in banner" :key="index">
  
      <a   :href="item.link" >
        <img :src="item.image" @load="imageLoad" />
      </a>
    </swiper-item>
 
    </swiper>
  </div>
</template>
<script>
import { Swiper, SwiperItem} from "components/common/swiper";
export default {
  name: "homeSwiper",
  data() {
    return {
      isLoad: false
    };
  },
  props: {
    banner: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    Swiper, SwiperItem

  },
  methods: {
    imageLoad() {
      if (!this.isLoad) { //
        this.$emit("swiperImageLoad");
        this.isLoad = true;
      }
    }
  }
};
</script>

<style>
</style>