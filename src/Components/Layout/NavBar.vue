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
              <li class="nav-bar__item">Главная
                <svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M0 0.933333L0.941722 0L4.97767 4L0.941722 8L0 7.06667L3.09423 4L0 0.933333Z" fill="#757575"/>
                </svg>
              </li>
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

<style lang="scss" scoped>
a {
  color: inherit;
  text-decoration: none;
}

ul {
  padding: 0;
  list-style: none;
}

.nav {
  position: absolute;
  top: 0;
  height: 100%;
  background: #FFFFFF;
  box-shadow: 1px 0 4px rgba(0, 0, 0, 0.1);
  width: 78px;

  &__list {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  &__item {
    font-size: 13px;
    line-height: 15px;
    display: flex;
    align-items: center;
    text-align: center;
    padding: 15px 13px;
    border-bottom: 1px solid #E7E7E7;

    &:nth-last-child(1) {
      border-bottom: 0;
    }

    svg, img {
      margin-bottom: 5px;
    }
  }

  &__link {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 60px;
  }

  &-content {
    position: absolute;
    width: 377px;
    height: 100%;
    left: 78px;
    top: 0;
    box-shadow: inset -1px 0px 0px #E7E7E7, inset 1px 0px 0px #E7E7E7;
    background-color: #fff;

    &__list {
      display: flex;
      flex-wrap: wrap;
      text-align: left;
    }

    &__item {
      font-size: 13px;
      line-height: 15px;
      width: 50%;
      padding: 10px;
      box-sizing: border-box;

      svg {
        width: 53px;
      }
    }

    &__link {
      display: flex;
      align-items: center;
    }
  }

  &-bar {
    &__list {
      border-bottom: 1px solid #E7E7E7;
      display: flex;
      align-items: center;
      padding: 12px 0 10px;
    }

    &__item {
      font-size: 12px;
      line-height: 14px;
      color: #757575;
      margin: 0 7px;
      position: relative;
      padding-right: 15px;
      display: flex;
      align-items: center;

      svg {
        position: absolute;
        width: 5px;
        height: 8px;
        right: 0;
      }

      &:nth-last-child(1) {
        &::before {
          content: unset;
        }
      }

      &-active {
        font-size: 12px;
        line-height: 14px;
        color: #000000;
        margin: 0 7px;
      }
    }
  }

  &-search {
    margin: 10px;

    input {
      width: 100%;
      padding: 10px 14px;
      border: 1px solid #E7E7E7;
      box-sizing: border-box;
      border-radius: 3px;
      font-size: 14px;
      line-height: 16px;
    }
  }
}

</style>