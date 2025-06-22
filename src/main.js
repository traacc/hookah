import './css/reboot.css'
import './style.css'
import './css/header.css'
import './css/front-page.css'
import './css/footer.css'

import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

import 'swiper/css';

const swiperCatalog = new Swiper('.catalog__wrapper', {
// Optional parameters
    modules: [Navigation],
    slidesPerView: 3,
    spaceBetween: 16,
    // Navigation arrows
    navigation: {
        nextEl: '.catalog__next',
        prevEl: '.catalog__back',
    },
    // breakpoints: {
    //     1280: {
    //         slidesPerView: 4,
    //     },
    //     1024: {
    //         slidesPerView: 3,
    //         spaceBetween: 24,
    //     },
    // },

});