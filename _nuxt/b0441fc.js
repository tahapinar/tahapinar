(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{308:function(t,e,r){var content=r(334);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(41).default)("28c064d0",content,!0,{sourceMap:!1})},333:function(t,e,r){"use strict";r(308)},334:function(t,e,r){var o=r(40)((function(i){return i[1]}));o.push([t.i,"@-webkit-keyframes fadeUp-data-v-dbc16184{0%{opacity:0;transform:translateY(40px)}100%{opacity:1;transform:translateY(0)}}@keyframes fadeUp-data-v-dbc16184{0%{opacity:0;transform:translateY(40px)}100%{opacity:1;transform:translateY(0)}}.swiper-slide-active .animation-one[data-v-dbc16184]{-webkit-animation:fadeUp-data-v-dbc16184 .5s ease-in-out;animation:fadeUp-data-v-dbc16184 .5s ease-in-out}@keyframes fadeUp-data-v-dbc16184{0%{opacity:0;transform:translateY(40px)}100%{opacity:1;transform:translateY(0)}}.swiper-slide-active .animation-two[data-v-dbc16184]{-webkit-animation:fadeUp-data-v-dbc16184 .8s ease-in-out;animation:fadeUp-data-v-dbc16184 .8s ease-in-out}@keyframes fadeUp-data-v-dbc16184{0%{opacity:0;transform:translateY(40px)}100%{opacity:1;transform:translateY(0)}}.swiper-slide-active .animation-three[data-v-dbc16184]{-webkit-animation:fadeUp-data-v-dbc16184 1.1s ease-in-out;animation:fadeUp-data-v-dbc16184 1.1s ease-in-out}@-webkit-keyframes rollIn-data-v-dbc16184{0%{opacity:0;transform:translateX(-100%) rotate(-120deg)}100%{opacity:1;transform:translateX(0px) rotate(0deg)}}@keyframes rollIn-data-v-dbc16184{0%{opacity:0;transform:translateX(-100%) rotate(-120deg)}100%{opacity:1;transform:translateX(0px) rotate(0deg)}}.swiper-slide-active .animation-four[data-v-dbc16184]{-webkit-animation:rollIn-data-v-dbc16184 .7s ease-in-out;animation:rollIn-data-v-dbc16184 .7s ease-in-out}.hero-slider .tvseries[data-v-dbc16184]{background-position:50%}@media screen and (max-width:1600px)and (min-width:1200px){.hero-slider .tvseries[data-v-dbc16184]{background-position:68%}}@media screen and (max-width:1199px)and (min-width:1025px){.hero-slider .tvseries[data-v-dbc16184]{background-position:74%}}@media screen and (max-width:1024px)and (min-width:768px){.hero-slider .tvseries[data-v-dbc16184]{background-position:85%}}.hero-slider .tvseries[data-v-dbc16184]:before{background:linear-gradient(90deg,#0c171f 10%,transparent 70%)}",""]),o.locals={},t.exports=o},382:function(t,e,r){"use strict";r.r(e);r(16),r(29),r(30),r(47),r(31),r(81),r(109);var o=r(295),n=r(142),l={props:{titleColor:String,subTitleColor:String,textColor:String,bgColor:String,PageLink:String},components:{BtnDefault:function(){return r.e(6).then(r.bind(null,459))},VideoButton:function(){return Promise.all([r.e(7),r.e(8)]).then(r.bind(null,471))},Swiper:n.Swiper,SwiperSlide:n.SwiperSlide},data:function(){return{movieData:o,comboPackSlider:[],swiperOption:{slidesPerView:1,loop:!0,spaceBetween:30,pagination:!1,navigation:{nextEl:".hero-slider .hero-slider_arrows__nextbtn",prevEl:".hero-slider .hero-slider_arrows__prevbtn"}}}},mounted:function(){this.comboPackSlider=this.movieData.filter((function(t){return 1==t.comboPackSlider}))},methods:{slugify:function(text){return text.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}}},d=(r(333),r(28)),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"hero-slider group relative"},[r("div",{staticClass:"overflow-hidden"},[r("swiper",{staticClass:"swiper",attrs:{options:t.swiperOption}},t._l(t.comboPackSlider,(function(e,o){return r("swiper-slide",{key:o,staticClass:"flex items-center tvseries bg-no-repeat bg-cover 2xl:bg-center !h-[380px] md:!h-[450px] lg:!h-[500px] xl:!h-[605px] before:content-[''] before:h-full before:w-full before:absolute before:top-0 before:left-0 tvseries bg-[#000]",class:e.bgColor,style:{"background-image":"url("+e.posterImage+")"}},[r("div",{staticClass:"slider-content ml-4 pr-4 xl:ml-10 2xl:ml-[100px] z-9 relative"},[r("h1",{staticClass:"title sm:mb-5 mb-3 lg:mb-[30px] lg:text-[80px] sm:text-[50px] text-[36px] font-bold block leading-[1] animation-one text-white",class:e.titleColor},[t._v(t._s(e.title))]),t._v(" "),r("div",{staticClass:"flex items-center animation-two"},[r("span",{staticClass:"subtitle text-red text-[25px] lg:text-[35px] font-bold"},[t._v(t._s(e.newprice))]),t._v(" "),r("span",{staticClass:"ml-5 subtitle text-white text-[25px] lg:text-[35px] font-bold relative before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-full\n                         before:h-[2px] before:bg-white"},[t._v(t._s(e.oldprice))])]),t._v(" "),r("div",{staticClass:"flex items-center mt-7 sm:mt-10 md:mt-14 animation-three"},[r("n-link",{staticClass:"inline-block rounded-[3px] transition-all duration-300 sm:py-[15px] sm:px-[25px] px-[20px] py-[10px] bg-[#f4181c] text-white font-semibold hover:bg-white hover:text-[#333333] !text-[16px]",attrs:{to:"/"+t.PageLink+"/"+t.slugify(e.title)}},[t._v("Watch Now")])],1)])])})),1)],1),t._v(" "),t._m(0)])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"hero-slider_arrows flex justify-between w-full absolute top-1/2 -translate-y-1/2 z-99"},[r("div",{staticClass:"hero-slider_arrows__prevbtn swipper-arrow text-red hover:text-white transition-all duration-300 text-[60px] opacity-0 group-hover:opacity-100 group-hover:ml-5 ml-0"},[r("i",{staticClass:"zmdi zmdi-chevron-left bold-important"})]),t._v(" "),r("div",{staticClass:"hero-slider_arrows__nextbtn swipper-arrow text-red hover:text-white transition-all duration-300 text-[60px] opacity-0 group-hover:opacity-100 group-hover:mr-5 mr-0"},[r("i",{staticClass:"zmdi zmdi-chevron-right bold-important"})])])}],!1,null,"dbc16184",null);e.default=component.exports}}]);