<template>
  <div style="background-color: #0b0b0b; position: relative">
    <swiper
      :style="{
        '--swiper-navigation-color': '#fff',
        '--swiper-pagination-color': '#fff',
      }"
      :loop="true"
      :effect="'fade'"
      :spaceBetween="10"
      :navigation="true"
      :thumbs="{ swiper: thumbsSwiper }"
      :modules="modules"
      :slidesPerView="3"
      :centeredSlides="true"
      :loopAdditionalSlides="1"
      :autoplay="{
        delay: 3000,
        disableOnInteraction: false,
      }"
      class="mySwiper2"
    >
      <swiper-slide v-for="item in banner" :key="item.title"
        ><div
          class="banner__img"
          :style="inlineBgImage(`${require(`@/assets/images/${item.img}.jpg`)}`)"
        >
          <h2 class="banner__title">
            <span class="banner__subTitle">{{ item.subTitle }}</span>
            <div>
              <span v-if="item.title">
                {{ item.title }}
              </span>
              <img v-else style="object-fit: contain" src="../assets/images/ductes.svg" alt="" />
            </div>
          </h2>
          <div style="width: 20vw; height: auto"></div></div
      ></swiper-slide>
    </swiper>
    <div style="position: relative">
      <swiper
        @swiper="setThumbsSwiper"
        :loop="true"
        :spaceBetween="25"
        :slidesPerView="4"
        :watchSlidesProgress="true"
        :centeredSlides="true"
        :loopAdditionalSlides="1"
        class="mySwiper banner__list d-none d-md-block"
        :autoplay="{
          delay: 3000,
          disableOnInteraction: false,
        }"
      >
        >
        <swiper-slide v-for="item in banner" :key="item.title"
          ><div :style="inlineBgImage(`${require(`@/assets/images/${item.img}.jpg`)}`)"></div
        ></swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles

import '@/assets/vendors-extensions/swiper.scss';

import '@/assets/vendors-extensions/effect-fade.scss';
import '@/assets/vendors-extensions/free-mode.scss';
import '@/assets/vendors-extensions/navigation.scss';
import '@/assets/vendors-extensions/thumbs.scss';
import '@/assets/components/swiper.scss';

// import required modules
import { Autoplay, EffectFade, FreeMode, Navigation, Thumbs } from 'swiper/modules';

export default {
  data() {
    return {
      banner: [
        { title: '創造紗線的無限可能', subTitle: '技術X電子X數據', img: 'banner01' },
        { title: '舒適延伸表裡如一', subTitle: '輕柔極細包覆紗', img: 'banner02' },
        { imgtitle: 'ductes.svg', subTitle: '台灣代理‧西班牙紗線', img: 'banner03' },
      ],
    };
  },
  methods: {
    inlineBgImage(num) {
      return {
        backgroundImage: `url("${num}")`,
      };
    },
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const thumbsSwiper = ref(null);

    const setThumbsSwiper = (swiper) => {
      thumbsSwiper.value = swiper;
    };

    return {
      thumbsSwiper,
      setThumbsSwiper,
      modules: [Autoplay, EffectFade, FreeMode, Navigation, Thumbs],
    };
  },
};
</script>
