<template>
  <nav class="nav">
    <ul class="nav__list">
      <li class="nav__item" v-for="(item,index) in menu" :key="index">
        <router-link :to="item.url" class="nav__link" @click.native="openChild(index)">
          <img :src="require(`@/assets/img/menu/${item.img}`)" alt="">
          {{ item.title }}
        </router-link>
        <transition v-if="item.show" name="fade">
          <div class="nav-content">
            <ul class="nav-bar__list">
              <li class="nav-bar__item">Главная</li>
              <li class="nav-bar__item nav-bar__item-active ">{{ item.title }}</li>
            </ul>

            <div class="nav-search">
              <input type="text" placeholder="Поиск...">
            </div>
            <ul class="nav-content__list">
              <li class="nav-content__item" v-for="(i,ind) in item.child" :key="ind">
                <a href="#" class="nav-content__link">
                  <img :src="require(`@/assets/img/menu/${i.img}`)" alt="">
                  {{ i.title }}
                </a>
              </li>
            </ul>
          </div>
        </transition>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      menu: [
        {
          title: "Изменить комнату",
          img: "menu-1.svg",
          url: "/",
          show: false,

        },
        {
          title: "Кухни",
          img: "menu-2.svg",
          show: false,
          url: "/",
          child: [
            {
              title: " Готовые кухни ",
              img: "menu-6.svg",
              url: "/",
            },
            {
              title: "Навесные",
              img: "menu-7.svg",
              url: "/",
            },
            {
              title: "Напольные",
              img: "menu-8.svg",
              url: "/",
            },
            {
              title: "Шкафы-пеналы",
              img: "menu-9.svg",
              url: "/",
            },
            {
              title: "Бутылочницы",
              img: "menu-10.svg",
              url: "/",
            },
            {
              title: "Угловые",
              img: "menu-11.svg",
              url: "/",
            },
            {
              title: "Для варочной панели",
              img: "menu-12.svg",
              url: "/",
            },
            {
              title: "Под мойку",
              img: "menu-13.svg",
              url: "/",
            },
            {
              title: "Для духовки",
              img: "menu-14.svg",
              url: "/",
            },
            {
              title: "Для вытяжки",
              img: "menu-15.svg",
              url: "/",
            },
            {
              title: "Для СВЧ",
              img: "menu-16.svg",
              url: "/",
            },
            {
              title: "Товары для кухни",
              img: "menu-17.svg",
              url: "/",
            },
          ]
        },
        {
          title: "Мебель",
          img: "menu-3.svg",
          show: false,
          url: "/"
        },
        {
          title: "Бытовая техника",
          img: "menu-4.svg",
          show: false,
          url: "/"
        },
        {
          title: "Общие стили",
          img: "menu-5.svg",
          show: false,
          url: "/"
        }
      ]
    }
  },
  methods: {
    openChild(index) {
      this.menu.forEach((item, i) => {
        if (i === index) {
          item.show = !item.show
        } else {
          item.show = false
        }
      })
    }
  }
}
</script>
