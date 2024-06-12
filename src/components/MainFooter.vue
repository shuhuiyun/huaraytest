<template>
  <footer>
    <div class="text-white">
      <div class="d-flex flex-column justify-content-between me-auto">
        <a href="#" class="footer__logo" aria-label="logo"><h2>信榮纖維</h2></a>
        <div class="copyright">
          © 2024 練習作品 無商業用途
          <br />
          網頁設計 - 華瑞資訊
        </div>
      </div>
      <div class="d-md-flex justify-content-between d-none">
        <div>
          <div class="footer__list-title">{{ productList[0].name }}</div>
          <ul
            class="p-0 footer__list d-flex flex-column flex-wrap"
            v-for="item in productList"
            :key="item.name"
          >
            <li v-for="subItem in item.categories" :key="subItem.name">
              <div v-if="subItem.categories">
                {{ subItem.name }}
                <ul class="p-0 footer__subList">
                  <li v-for="item in subItem.categories" :key="item">
                    <a href="#">{{ item }}</a>
                  </li>
                </ul>
              </div>
              <a href="#" v-else>{{ subItem.name }}</a>
            </li>
          </ul>
        </div>

        <!-- 第二個List -->
        <div>
          <div class="subList listBox" v-for="item in footerList.slice(0, 1)" :key="item.name">
            <div class="footer__list-title">{{ item.name }}</div>
            <ul class="p-0 listBox">
              <li v-for="item in item.categories" :key="item.name">
                <a href="#">{{ item }}</a>
              </li>
            </ul>
          </div>
        </div>
        <!-- 第三個List -->
        <div>
          <div class="subList listBox" v-for="item in footerList.slice(1, 3)" :key="item.name">
            <div class="footer__list-title">{{ item.name }}</div>
            <ul class="p-0 listBox">
              <li v-for="item in item.categories" :key="item.name">
                <a href="#">{{ item }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <div class="mobile-menu d-sm-none" style="z-index: 100">
    <div class="row row-cols-5 m-0">
      <div class="col footer__mobile-link">
        <a href="#" aria-label="home " class="link-light active"
          ><i class="bi bi-house-door fs-2"></i>首頁</a
        >
      </div>
      <div class="col footer__mobile-link">
        <a href="#" aria-label="app" class="link-light"><i class="bi bi-basket fs-2"></i>應用</a>
      </div>
      <div class="col footer__mobile-link">
        <a href="#" aria-label="product" class="link-light"><i class="bi bi-cart4 fs-2"></i>產品</a>
      </div>
      <div class="col footer__mobile-link">
        <a
          href="#"
          aria-label="
connection"
          class="link-light"
          ><i class="bi bi-chat-right-dots fs-2"></i>聯絡</a
        >
      </div>
      <div class="col footer__mobile-link">
        <a href="#" aria-label="other" class="link-light"
          ><i class="bi bi-grid-3x3-gap fs-2"></i>其他</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      productList: [
        {
          name: '產品應用領域',
          categories: [
            { name: '布料', categories: ['親膚層布料', '保暖層布料', '外層布料'] },
            { name: '醫療防護', categories: ['醫療', '防護', '體態回復'] },
            { name: '一體成型' },
            { name: '鞋材' },
            { name: '襪類' },
            { name: '織帶' },
          ],
        },
      ],
      footerList: [
        {
          name: '產品類別',
          categories: [
            '單包覆紗',
            '雙包覆紗',
            '空氣變形包覆紗',
            '各類包覆紗特性比較',
            'dúctel(獨家代理)',
          ],
        },
        {
          name: '其他',
          categories: ['首頁', '關於信榮', '聯絡我們'],
        },
        {
          name: 'LANGUAGE',
          categories: ['繁體中文', 'English'],
        },
      ],
    };
  },
};
</script>
