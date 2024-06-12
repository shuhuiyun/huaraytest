<template>
  <div class="home">
    <!-- swiper -->
    <VueSwiper />
    <!-- about -->
    <div class="about row m-0">
      <div class="col-lg-7 col-md-10 col-12">
        <h3 class="about__title">ABOUT US</h3>
        <p>
          信榮纖維為專業的複合彈性包紗廠，導入電子監控系統，輔以精準製程參數控制，
          提升良率至業界最高標準，具備客制化、交期快、品質好、彈性佳、產能大等五大競爭優勢。
          從開發、打樣、量產，提供一條龍服務，依不同應用領域進行產品特性強化，
          與客戶共創商品競爭力。
        </p>
      </div>
    </div>
    <!-- 產品列表標題 -->
    <div class="product__title">
      <h2>
        產品應用領域
        <span>APPLICATION FIELD</span>
      </h2>
    </div>
    <!-- 產品列表 -->
    <div class="container-fluid">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3">
        <a
          class="col product__list"
          v-for="item in product"
          :key="item.title"
          href="#"
          style="padding-left: 0"
          :aria-label="item.enTitle"
        >
          <p>
            <span>{{ item.enTitle }}</span>
            {{ item.title }}
          </p>
          <div
            class="product__img"
            :style="inlineBgImage(`${require(`@/assets/images/${item.image}.jpg`)}`)"
          >
            <div></div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import VueSwiper from '@/components/HomeSwiper.vue';
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';

export default {
  components: {
    VueSwiper,
  },
  data() {
    return {
      slickOptions: {
        slidesToShow: 3,
        // Any other options that can be got from plugin documentation
      },
      item: 'fabric',
      product: [
        {
          enTitle: 'FABRIC',
          title: '布料',
          image: 'fabric',
        },
        {
          enTitle: 'Medical protection',
          title: '醫療防護',
          image: 'medical',
        },
        {
          enTitle: 'Seamless',
          title: '一體成型',
          image: 'seamless',
        },
        {
          enTitle: 'Shoe material',
          title: '鞋材',
          image: 'shoe',
        },
        {
          enTitle: 'Hosiery',
          title: '襪類',
          image: 'hosiery',
        },
        {
          enTitle: 'Band',
          title: '織帶',
          image: 'band',
        },
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
};
</script>
