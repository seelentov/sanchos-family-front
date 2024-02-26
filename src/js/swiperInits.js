import Swiper from 'swiper'

import { Navigation, Pagination } from 'swiper/modules'

export default () => {
  const swiperBanner = new Swiper('.banner__swiper', {
  modules: [Navigation, Pagination],
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.banner-swiper-btns__forw',
    prevEl: '.banner-swiper-btns__prev',
  },
})

const swiperDetail = new Swiper('.detail-imgs__swiper', {
  modules: [Navigation],
  navigation: {
    nextEl: '.detail-imgs__btns--forw',
    prevEl: '.detail-imgs__btns--prev',
  },
})

const swiperMore = new Swiper('.more__swiper', {
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    '1000': {
      slidesPerView: 2,
    },
    '1200': {
      slidesPerView: 3,
    },

  },
})

}