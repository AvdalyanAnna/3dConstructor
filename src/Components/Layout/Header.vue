<template>
  <header class="header">
    <!--      <div class="header-left">-->
    <div class="header-burger">
      <svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="17" height="1.66667" rx="0.833333" fill="black"/>
        <rect y="5.66669" width="17" height="1.66667" rx="0.833333" fill="black"/>
        <rect y="11.3334" width="17" height="1.66667" rx="0.833333" fill="black"/>
      </svg>
    </div>
    <a href="#" class="header-logo">
      <img src="@/assets/img/logo.svg" alt="logo">
      <span>Недорогие <br> кухни и мебель от производителя</span>
    </a>
    <div class="header-contact">
      <div class="info">Специалист поможет</div>
      <a href="tel:+74959841699">+7 (495) 984-16-99</a>
    </div>
    <!--      </div>-->
    <!--      <div class="header-right">-->
    <div class="header-search">
      <input type="text" placeholder="Новый проект">
    </div>
    <ul class="header-info__list">
      <li class="header-info__item">
        <a href="#">Стоимость товаров: <b>0 ₽</b></a>
      </li>
      <li class="header-info__item">
        <a href="#">
          <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_319_9427)">
              <rect x="2.5" y="2.5" width="12" height="12" rx="1.5" stroke="#888888"/>
              <rect x="6" y="1" width="5" height="5" fill="white"/>
              <path
                  d="M8.14645 11.3201C8.34171 11.5154 8.65829 11.5154 8.85355 11.3201L12.0355 8.13813C12.2308 7.94286 12.2308 7.62628 12.0355 7.43102C11.8403 7.23576 11.5237 7.23576 11.3284 7.43102L8.5 10.2594L5.67157 7.43102C5.47631 7.23576 5.15973 7.23576 4.96447 7.43102C4.7692 7.62628 4.7692 7.94286 4.96447 8.13813L8.14645 11.3201ZM8 -1.03345L8 10.9666L9 10.9666L9 -1.03345L8 -1.03345Z"
                  fill="#888888"/>
            </g>
            <defs>
              <clipPath id="clip0_319_9427">
                <rect width="17" height="17" fill="white"/>
              </clipPath>
            </defs>
          </svg>

          Сохранить</a>
      </li>
      <li class="header-info__item">
        <a href="#">
          <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M8.49927 7.02762C9.15304 7.02762 9.79214 6.83375 10.3357 6.47053C10.8793 6.10731 11.303 5.59105 11.5532 4.98704C11.8034 4.38303 11.8689 3.71839 11.7413 3.07718C11.6138 2.43596 11.2989 1.84697 10.8366 1.38468C10.3744 0.92239 9.78536 0.607566 9.14415 0.480021C8.50293 0.352475 7.8383 0.417936 7.23429 0.668126C6.63027 0.918316 6.11402 1.342 5.7508 1.88559C5.38758 2.42919 5.19371 3.06828 5.19371 3.72206C5.19371 4.59875 5.54197 5.43953 6.16189 6.05944C6.7818 6.67935 7.62258 7.02762 8.49927 7.02762ZM8.49927 1.36095C8.96625 1.36095 9.42275 1.49943 9.81103 1.75887C10.1993 2.01831 10.5019 2.38707 10.6806 2.8185C10.8594 3.24994 10.9061 3.72468 10.815 4.18269C10.7239 4.6407 10.499 5.06141 10.1688 5.39162C9.83862 5.72183 9.41791 5.9467 8.9599 6.0378C8.50189 6.12891 8.02715 6.08215 7.59571 5.90344C7.16427 5.72474 6.79552 5.42211 6.53608 5.03382C6.27663 4.64554 6.13816 4.18904 6.13816 3.72206C6.13816 3.09586 6.38692 2.4953 6.82971 2.0525C7.2725 1.60971 7.87306 1.36095 8.49927 1.36095Z"
                fill="#888888"/>
            <path
                d="M14.3879 10.5079C13.6306 9.70748 12.718 9.06992 11.7059 8.63421C10.6938 8.19849 9.60349 7.97376 8.5016 7.97376C7.39971 7.97376 6.3094 8.19849 5.29732 8.63421C4.28524 9.06992 3.37265 9.70748 2.61535 10.5079C2.45117 10.6833 2.35998 10.9146 2.36035 11.1548V13.6387C2.36035 13.8892 2.45986 14.1294 2.63697 14.3065C2.81409 14.4837 3.05431 14.5832 3.3048 14.5832H13.6937C13.9442 14.5832 14.1844 14.4837 14.3615 14.3065C14.5386 14.1294 14.6381 13.8892 14.6381 13.6387V11.1548C14.6398 10.9152 14.5503 10.684 14.3879 10.5079ZM13.6937 13.6387H3.3048V11.1501C3.97404 10.4454 4.77968 9.88424 5.67269 9.50077C6.56569 9.11731 7.52739 8.91956 8.49924 8.91956C9.4711 8.91956 10.4328 9.11731 11.3258 9.50077C12.2188 9.88424 13.0244 10.4454 13.6937 11.1501V13.6387Z"
                fill="#888888"/>
          </svg>
          Войти</a>
      </li>

    </ul>
    <!--      </div>-->
  </header>

</template>

<script>
export default {
  name: "Header"
}
</script>

<style lang="scss" scoped>



.header {
  background: #FFFFFF;
  box-shadow: -1px 0px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;

  &-burger {
    display: flex;
    align-items: center;
    padding: 0 34px;
  }

  &-logo {
    margin-left: 10px;

    span {
      max-width: 83px;
      width: 100%;
      display: inline-block;
      font-size: 10px;
      line-height: 10px;
      margin-left: 10px;
    }
  }

  &-contact {
    font-weight: bold;
    font-size: 16px;
    line-height: 18px;
    margin: 0 0 5px 8%;

    .info {
      font-size: 14px;
      line-height: 16px;
      text-decoration-line: underline;
      color: #000000;
      opacity: 0.54;
      margin: 5px 0;
    }
  }

  &-search {
    flex: 1;

    input {
      width: 100%;
      border: none;
      text-align: center;
      outline: none;
    }
  }

  &-info {
    &__list {
      display: flex;
      align-items: center;

    }

    &__item {
      font-size: 14px;
      line-height: 16px;
      color: rgba(#000000, 0.54);
      margin: 0;
      padding: 18px 20px;
      border-right: 1px solid #E7E7E7;

      a {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      &:nth-last-child(1) {
        border-right: none;
      }

      b {
        margin-left: 5px;
        font-weight: bold;
        font-size: 20px;
        line-height: 23px;
      }

      svg {
        margin-right: 5px;

      }
    }
  }
}

@media screen and (max-width: 1200px) {
  .header-contact {
    margin: 0 5px 5px 15px;
  }
  .header-info__item {
    padding: 18px 7px;
  }
}

</style>