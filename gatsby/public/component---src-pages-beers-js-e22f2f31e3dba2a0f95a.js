(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{iCTh:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return o})),a.d(t,"query",(function(){return d}));var n=a("q1tI"),r=a.n(n),i=a("vOnD"),l=a("EYWl"),s=i.b.div.withConfig({displayName:"beers__BeerGridStyles",componentId:"sc-1goh062-0"})(["display:grid;gap:2rem;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));"]),c=i.b.div.withConfig({displayName:"beers__SingleBeerStyles",componentId:"sc-1goh062-1"})(["border:1px solid var(--grey);padding:2rem;text-align:center;img{width:100%;height:200px;object-fit:contain;display:block;display:grid;align-items:center;font-size:10px;}"]);function o(e){var t=e.data;return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{title:"Beers! We have "+t.beers.nodes.length+" in stock"}),r.a.createElement("h2",{className:"center"},"We have ",t.beers.nodes.length," Beers Available. Dine in Only!"),r.a.createElement(s,null,t.beers.nodes.map((function(e){var t=Math.round(e.rating.average);return r.a.createElement(c,{key:e.id},r.a.createElement("img",{src:e.image,alt:e.name}),r.a.createElement("h3",null,e.name),e.price,r.a.createElement("p",{title:t+" out of 5 stars"},"⭐".repeat(t),r.a.createElement("span",{style:{filter:"grayscale(100%)"}},"⭐".repeat(5-t)),r.a.createElement("span",null,"(",e.rating.reviews,")")))}))))}var d="2074601128"}}]);
//# sourceMappingURL=component---src-pages-beers-js-e22f2f31e3dba2a0f95a.js.map