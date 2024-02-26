import './style.scss'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import header from './js/header.js'
import map from './js/map.js'
import swiperInits from './js/swiperInits.js'


document.addEventListener("DOMContentLoaded", () => {
  swiperInits()
  map()
  header()
})