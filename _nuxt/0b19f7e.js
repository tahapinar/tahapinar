(window.webpackJsonp=window.webpackJsonp||[]).push([[80,40,47,48,53,63],{285:function(t,e,r){var content=r(291);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(41).default)("0336b8f6",content,!0,{sourceMap:!1})},286:function(t,e,r){"use strict";r.r(e);var o={props:{logLink:String}},n=r(28),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("n-link",{attrs:{to:t.logLink}},[r("img",{attrs:{src:"/images/logo/logo.png",alt:"Logo"}})])],1)}),[],!1,null,null,null);e.default=component.exports},287:function(t){t.exports=JSON.parse('[{"url":"https://www.facebook.com/","iconName":"zmdi zmdi-facebook","mediaName":"facebook"},{"url":"https://www.twitter.com/","iconName":"zmdi zmdi-twitter","mediaName":"twitter"},{"url":"https://www.linkedin.com/","iconName":"zmdi zmdi-linkedin","mediaName":"linkedin"},{"url":"https://www.instagram.com/","iconName":"zmdi zmdi-instagram","mediaName":"instagram"}]')},288:function(t){t.exports=JSON.parse('[{"name":"Home","mainlink":"/home"},{"name":"About US","mainlink":"/about"},{"name":"Series","mainlink":"/series"},{"name":"Contact Us","mainlink":"/contact"},{"name":"Tv Series","mainlink":"/series"},{"name":"Tech","mainlink":"/home"},{"name":"Movie","mainlink":"/movie"},{"name":"Video","mainlink":"/movie"},{"name":"Live","mainlink":"/home"},{"name":"Tv Series","mainlink":"/series"}]')},289:function(t){t.exports=JSON.parse('[{"name":"Report a Bug","mainlink":"/home"},{"name":"Request a Feature","mainlink":"/about"},{"name":"Content Grievance","mainlink":"/home"},{"name":"Movie Request","mainlink":"/home"},{"name":"Submit Your Story","mainlink":"/contact"},{"name":"Privacy Policy","mainlink":"/home"},{"name":"Terms of Services","mainlink":"/contact"},{"name":"Support","mainlink":"/contact"}]')},290:function(t,e,r){"use strict";r(285)},291:function(t,e,r){var o=r(40)((function(i){return i[1]}));o.push([t.i,".facebook[data-v-e48bc206]{border-width:1px;--tw-border-opacity:1;border-color:rgb(59 89 152 / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgb(59 89 152 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}.facebook[data-v-e48bc206]:hover{background-color:transparent;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}.twitter[data-v-e48bc206]{border-width:1px;--tw-border-opacity:1;border-color:rgb(0 179 236 / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgb(0 179 236 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}.twitter[data-v-e48bc206]:hover{background-color:transparent;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}.linkedin[data-v-e48bc206]{border-width:1px;--tw-border-opacity:1;border-color:rgb(10 102 194 / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgb(10 102 194 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}.linkedin[data-v-e48bc206]:hover{background-color:transparent;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}.instagram[data-v-e48bc206]{border-width:1px;--tw-border-opacity:1;border-color:rgb(228 64 95 / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgb(228 64 95 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}.instagram[data-v-e48bc206]:hover{background-color:transparent;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}",""]),o.locals={},t.exports=o},292:function(t,e,r){"use strict";r.r(e);r(16),r(29),r(30);var o=r(287),n=r(288),l=r(289),c={components:{Logo:function(){return Promise.resolve().then(r.bind(null,286))},BrandLogo:function(){return r.e(22).then(r.bind(null,472))}},data:function(){return{socialData:o,footerMenuData:n,footerSubmenuData:l}}},m=(r(290),r(28)),component=Object(m.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex flex-wrap md:flex-row flex-col"},[r("div",{staticClass:"flex flex-col w-full sm:w-3/4 md:w-1/3 lg:w-1/4 mb-8 md:mb-0"},[r("Logo",{attrs:{logLink:"/home"}}),t._v(" "),r("p",{staticClass:"text-sm text-white w-full sm:w-[75%] my-5"},[t._v("Eiusmod tempor incididunt ut la abore et minim ven exerc itation ulla mco lboris naliquip ex ea comm.")]),t._v(" "),r("ul",{staticClass:"fotter-socail"},t._l(t.socialData,(function(link,t){return r("li",{key:t,staticClass:"inline-block"},[r("a",{staticClass:"sm:h-[35px] sm:w-[35px] h-[30px] w-[30px] text-[14px] flex items-center justify-center rounded-full sm:mr-3 mr-2",class:link.mediaName,attrs:{href:link.url}},[r("i",{class:link.iconName})])])})),0)],1),t._v(" "),r("div",{staticClass:"lg:w-3/4 md:w-2/3 w-full"},[r("div",{staticClass:"footer-top-right 2xl:ml-[50px] lg:ml-[20px] ml-0"},[r("div",{staticClass:"footer-quicklink"},[r("ul",{staticClass:"flex items-center flex-wrap"},t._l(t.footerMenuData,(function(link,e){return r("li",{key:e,staticClass:"md:mr-10 mr-5 last:mr-0"},[r("n-link",{staticClass:"text-white text-[16px] md:text-[18px] hover:text-[#f4181c]",attrs:{to:link.mainlink}},[t._v("\n                            "+t._s(link.name)+"\n                        ")])],1)})),0)]),t._v(" "),r("BrandLogo"),t._v(" "),r("div",{staticClass:"footer-quicklink-2"},[r("ul",{staticClass:"flex items-center flex-wrap"},t._l(t.footerSubmenuData,(function(link,e){return r("li",{key:e,staticClass:"mr-10 last:mr-0 relative last:before:hidden before:absolute before:-right-5 before:top-1/2 before:w-[1px] before:h-[15px] before:content-[''] before:bg-[#444444] before:-translate-y-1/2"},[r("n-link",{staticClass:"text-white text-[14px] hover:text-[#f4181c]",attrs:{to:link.mainlink}},[t._v("\n                            "+t._s(link.name)+"\n                        ")])],1)})),0)])],1)])])}),[],!1,null,"e48bc206",null);e.default=component.exports;installComponents(component,{Logo:r(286).default})},293:function(t,e,r){"use strict";r.r(e);var o=r(28),component=Object(o.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex items-center lg:justify-between lg:flex-row flex-col justify-center"},[t._m(0),t._v(" "),r("div",{staticClass:"login-alert flex items-center md:flex-row flex-col lg:order-2 order-1"},[r("p",{staticClass:"text-white mb-3 md:mb-0 text-[14px] mr-[15px]"},[t._v("Already have an Account? "),r("n-link",{staticClass:"text-white uppercase font-semibold hover:text-[#f4181c]",attrs:{to:"/login"}},[t._v("LOGIN")])],1),t._v(" "),r("div",{staticClass:"flex items-center justify-center"},[r("n-link",{staticClass:"text-[16px] inline-block rounded-[3px] transition-all duration-300 py-[12px] px-[25px] bg-[#f4181c] text-white font-medium hover:bg-white hover:text-[#333333] leading-[1]",attrs:{to:"/pricing"}},[t._v("Become a Member")])],1)])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"copyright lg:mt-0 mt-5 lg:order-1 order-2"},[r("p",{staticClass:"copyright-text text-white text-[14px] text-center"},[t._v("\n            Copyright ©2022 All rights reserved\n        ")])])}],!1,null,null,null);e.default=component.exports},294:function(t,e,r){var content=r(297);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(41).default)("49acbb9c",content,!0,{sourceMap:!1})},296:function(t,e,r){"use strict";r(294)},297:function(t,e,r){var o=r(40)((function(i){return i[1]}));o.push([t.i,".breadcrumb-item[data-v-64fc2b49]{display:inline-block;font-size:16px;text-transform:capitalize}",""]),o.locals={},t.exports=o},298:function(t,e,r){"use strict";r.r(e);var o={props:{BreadcrumbTitle:String,BreadcrumbEnd:String},components:{}},n=(r(296),r(28)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("div",{staticClass:"flex items-center justify-center flex-col sm:flex-row"},[r("h1",{staticClass:"font-semibold text-white text-[25px] mr-5"},[t._v(t._s(t.BreadcrumbTitle))]),t._v(" "),r("ul",{staticClass:"flex justify-center items-center mt-2 flex-row"},[r("li",[r("n-link",{staticClass:"breadcrumb-item text-[#ddd] hover:text-[#f4181c]",attrs:{to:"/home"}},[t._v("Home")])],1),t._v(" "),r("li",{staticClass:"breadcrumb-item mx-2 text-[#ddd]"},[t._v("|")]),t._v(" "),r("li",[r("span",{staticClass:"breadcrumb-item text-[#ddd]"},[t._v(t._s(t.BreadcrumbEnd))])])])])])}),[],!1,null,"64fc2b49",null);e.default=component.exports},314:function(t,e,r){var content=r(340);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(41).default)("085b94b8",content,!0,{sourceMap:!1})},339:function(t,e,r){"use strict";r(314)},340:function(t,e,r){var o=r(40)((function(i){return i[1]}));o.push([t.i,".user-input[data-v-52369b76]{margin-bottom:1.25rem;width:100%;border-width:1px;--tw-border-opacity:1;border-color:rgb(30 39 45 / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgb(30 39 45 / var(--tw-bg-opacity));padding-left:0.5rem;padding-right:0.5rem;padding-top:0.75rem;padding-bottom:0.75rem;font-size:14px;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}",""]),o.locals={},t.exports=o},358:function(t,e,r){var content=r(399);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(41).default)("ae274906",content,!0,{sourceMap:!1})},389:function(t,e,r){"use strict";r.r(e);r(339);var o=r(28),component=Object(o.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"lg:w-7/12 md:w-5/6 w-full mx-auto"},[r("div",{staticClass:"border-1 border-[#333333] p-5 sm:p-[60px]"},[r("form",{attrs:{action:"#"}},[r("div",{staticClass:"login-input-box"},[r("input",{staticClass:"user-input",attrs:{type:"text",name:"user-name",placeholder:"User Name"}}),t._v(" "),r("input",{staticClass:"user-input",attrs:{type:"password",name:"user-password",placeholder:"Password"}}),t._v(" "),r("input",{staticClass:"user-input",attrs:{type:"email",name:"email",placeholder:"Email"}})]),t._v(" "),r("div",{staticClass:"button-box"},[r("button",{staticClass:"login-btn btn bg-[#f4181c] mt-5 py-2 px-[30px] text-white font-semibold text-[14px] hover:bg-white hover:text-[#f4181c] transition-all duration-300",attrs:{type:"submit"}},[r("span",[t._v("Register")])])])])])])}],!1,null,"52369b76",null);e.default=component.exports},398:function(t,e,r){"use strict";r(358)},399:function(t,e,r){var o=r(40)((function(i){return i[1]}));o.push([t.i,".login-register-tab .nuxt-link-exact-active{--tw-text-opacity:1;color:rgb(244 24 28 / var(--tw-text-opacity))}",""]),o.locals={},t.exports=o},450:function(t,e,r){"use strict";r.r(e);r(16),r(29),r(30);var o={components:{MainHeader:function(){return r.e(4).then(r.bind(null,435))},OffcanvasSidebar:function(){return r.e(2).then(r.bind(null,476))},Breadcrumb:function(){return Promise.resolve().then(r.bind(null,298))},Register:function(){return Promise.resolve().then(r.bind(null,389))},FooterTop:function(){return Promise.resolve().then(r.bind(null,292))},FooterBottom:function(){return Promise.resolve().then(r.bind(null,293))}},data:function(){return{navOpen:!1}}},n=(r(398),r(28)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("MainHeader"),t._v(" "),r("OffcanvasSidebar",{class:{"show-mobile-menu":t.navOpen},on:{togglenav:function(e){t.navOpen=!t.navOpen}}}),t._v(" "),r("div",{staticClass:"py-[25px] bg-[#1E272D]"},[r("Breadcrumb",{attrs:{BreadcrumbTitle:"Login & Register",BreadcrumbEnd:"Login & Register"}})],1),t._v(" "),r("div",{staticClass:"py-[50px] md:py-[80px] bg-[#000000]"},[r("div",{staticClass:"container"},[r("div",{staticClass:"flex items-center justify-center text-center login-register-tab mb-8 md:mb-[60px]"},[r("n-link",{staticClass:"text-white text-[25px] font-bold mr-5 pr-5 relative hover:text-[#f4181c] before:content-[''] before:bg-[#454545] before:h-[18px] before:mx-auto before:absolute before:-right-[2px] before:top-[3px] before:transition-all before:w-[1px]",attrs:{to:"/login"}},[t._v("Login")]),t._v(" "),r("n-link",{staticClass:"text-white text-[25px] font-bold relative hover:text-[#f4181c]",attrs:{to:"/register"}},[t._v("Register")])],1),t._v(" "),r("Register")],1)]),t._v(" "),r("div",{staticClass:"container-fluid px-4 xl:px-10 2xl:px-[100px] py-[45px] bg-[#12222d]"},[r("FooterTop")],1),t._v(" "),r("div",{staticClass:"container-fluid px-4 xl:px-10 2xl:px-[100px] py-[20px] bg-[#12222d] border-t-1 border-[#203544] shadow-[0_0_10px_rgba(0,0,0,0.3)]"},[r("FooterBottom")],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Breadcrumb:r(298).default,Register:r(389).default,FooterTop:r(292).default,FooterBottom:r(293).default})}}]);