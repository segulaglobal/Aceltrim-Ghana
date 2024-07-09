// import Swiper JS
import Swiper from 'swiper/bundle';
// import { Navigation, Pagination } from 'swiper/modules';


// import { Navigation, Pagination } from 'swiper/modules';
// import Swiper styles
import 'swiper/css';
// import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



// Swiper.use([
//     Navigation,
//     Pagination
// ]);

const swiper = new Swiper('.hero-swiper', {

     // configure Swiper to use modules
    // modules: [
        
    //     Navigation, 
        
        
    //     Pagination],
  
  
  
  // Optional parameters
    // direction: 'horizontal',
    // loop: true,

    // // If we need pagination
    Pagination: {
        el: '.swiper-pagination',
    },

    // // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});



