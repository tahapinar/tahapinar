(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{367:function(e,t,r){var content=r(418);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(41).default)("377a369c",content,!0,{sourceMap:!1})},417:function(e,t,r){"use strict";r(367)},418:function(e,t,r){var n=r(40)((function(i){return i[1]}));n.push([e.i,".newstyle-arrow .swipper-arrow{display:flex;height:30px;width:30px;align-items:center;justify-content:center;border-radius:3px;--tw-bg-opacity:1;background-color:rgb(51 51 51 / var(--tw-bg-opacity));transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:500ms}.newstyle-arrow .swipper-arrow:hover{--tw-bg-opacity:1;background-color:rgb(244 24 28 / var(--tw-bg-opacity))}",""]),n.locals={},e.exports=n},481:function(e,t,r){"use strict";r.r(t);r(16),r(29),r(30),r(47),r(61),r(62);var n=r(142),o=r(295),c={components:{SectionTitle:function(){return r.e(5).then(r.bind(null,490))},SingleProduct:function(){return r.e(3).then(r.bind(null,485))},Swiper:n.Swiper,SwiperSlide:n.SwiperSlide},data:function(){return{movieData:o,movieSeries:[],movieSeriesOption:{loop:!1,slidesPerView:6,spaceBetween:40,navigation:{nextEl:".horror-movie .nextbtn",prevEl:".horror-movie .prevbtn"},breakpoints:{1680:{slidesPerView:6,spaceBetween:40},1300:{slidesPerView:5,spaceBetween:40},1025:{slidesPerView:4,spaceBetween:40},768:{slidesPerView:3,spaceBetween:30},480:{slidesPerView:2,spaceBetween:20},320:{slidesPerView:1,spaceBetween:10}}}}},mounted:function(){this.movieSeries=this.movieData.filter((function(e){return e.category.includes("horror")}))}},l=(r(417),r(28)),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("SectionTitle",{attrs:{secTionMargin:"border-b-1 border-[#444444]",titleClass:"text-white",title:"Horror Movies"}}),e._v(" "),r("div",{staticClass:"horror-movie relative"},[r("Swiper",{attrs:{options:e.movieSeriesOption}},e._l(e.movieSeries,(function(e,t){return r("Swiper-Slide",{key:t},[r("SingleProduct",{attrs:{product:e,PageLink:"/movie",btnLink:"/movie"}})],1)})),1),e._v(" "),e._m(0)],1)],1)}),[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"flex right-0 -top-[74px] absolute newstyle-arrow"},[r("button",{staticClass:"prevbtn swipper-arrow text-[20px] mr-1 text-[#cccccc]"},[r("i",{staticClass:"zmdi zmdi-chevron-left"})]),e._v(" "),r("button",{staticClass:"nextbtn swipper-arrow text-[20px] ml-1 text-[#cccccc]"},[r("i",{staticClass:"zmdi zmdi-chevron-right"})])])}],!1,null,null,null);t.default=component.exports}}]);