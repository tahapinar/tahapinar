(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{460:function(e,t,r){"use strict";r.r(t);r(47),r(16),r(31),r(81),r(109);var n=r(299),l={props:{PageLink:String},data:function(){return{seriesData:n,seriesBanner:[]}},mounted:function(){this.seriesBanner=this.seriesData.filter((function(e){return 1==e.horrorBanner}))},methods:{slugify:function(text){return text.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}}},o=r(28),component=Object(o.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",e._l(e.seriesBanner,(function(t,n){return r("div",{key:n,staticClass:"group relative overflow-hidden bg-[#313131]"},[r("n-link",{staticClass:"group-hover:scale-[1.1] transition-all duration-700",attrs:{to:"/"+e.PageLink+"/"+e.slugify(t.title)}},[r("img",{staticClass:"min-h-[610px]",attrs:{height:"610",width:"1920",src:t.posterImage,alt:"Banner"}})])],1)})),0)}),[],!1,null,null,null);t.default=component.exports}}]);