(this["webpackJsonpreact-boot-camp"]=this["webpackJsonpreact-boot-camp"]||[]).push([[0],{30:function(t,e,c){},31:function(t,e,c){},38:function(t,e,c){},39:function(t,e,c){},43:function(t,e,c){},44:function(t,e,c){},45:function(t,e,c){},46:function(t,e,c){"use strict";c.r(e);var a=c(0),n=c(1),s=c.n(n),r=c(22),i=c.n(r),l=(c(30),c(14)),o=c(3),d=(c(31),c(20)),j=c(9),p=c.n(j),x=c(15),u=function(){var t=Object(x.a)(p.a.mark((function t(e,c){var a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e,{signal:c});case 2:return a=t.sent,t.abrupt("return",a.json());case 4:case"end":return t.stop()}}),t)})));return function(e,c){return t.apply(this,arguments)}}(),b=function(t){var e=s.a.useReducer((function(t,e){switch(e.type){case"loading":return{loading:!0,data:null,error:null};case"success":return{loading:!1,data:e.data,error:null};case"error":return{loading:!1,data:null,error:e.error};default:throw new Error}}),{loading:!1,data:null,error:null}),c=Object(d.a)(e,2),a=c[0],n=c[1];return s.a.useEffect((function(){var e=new AbortController,c=e.signal,a=!0;return a&&function(){var e=Object(x.a)(p.a.mark((function e(){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n({type:"loading"}),e.prev=1,e.next=4,u(t,c);case 4:a=e.sent,n({type:"success",data:a}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),n({type:"error",error:e.t0});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}()(),function(){a=!1,e.abort()}}),[t]),a},h=c(13),m=c(10),O=(c(38),function(t){var e=t.name,c=t.population;return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("div",{"data-testid":"card",className:"card",children:Object(a.jsxs)("div",{className:"card-row",children:[Object(a.jsx)(h.a,{icon:m.a,size:"3x"}),Object(a.jsxs)("div",{className:"card-col",children:[Object(a.jsxs)("p",{"data-testid":"cityname",className:"city",children:[e," Weather"]}),Object(a.jsxs)("p",{"data-testid":"population",className:"population",children:[c," people"]})]})]})})})}),f=(c(39),function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{"data-testid":"loading-id",className:"preloader",style:{opacity:1},children:[Object(a.jsx)("svg",{version:"1.1",id:"sun",x:"0px",y:"0px",width:"10px",height:"10px",viewBox:"0 0 10 10",enableBackground:"new 0 0 10 10",style:{opacity:1,marginLeft:"0px",marginTop:"0px"},children:Object(a.jsxs)("g",{children:[Object(a.jsx)("path",{fill:"none",d:"M6.942,3.876c-0.4-0.692-1.146-1.123-1.946-1.123c-0.392,0-0.779,0.104-1.121,0.301c-1.072,0.619-1.44,1.994-0.821,3.067C3.454,6.815,4.2,7.245,5,7.245c0.392,0,0.779-0.104,1.121-0.301C6.64,6.644,7.013,6.159,7.167,5.581C7.321,5,7.243,4.396,6.942,3.876z M6.88,5.505C6.745,6.007,6.423,6.427,5.973,6.688C5.676,6.858,5.34,6.948,5,6.948c-0.695,0-1.343-0.373-1.69-0.975C2.774,5.043,3.093,3.849,4.024,3.312C4.32,3.14,4.656,3.05,4.996,3.05c0.695,0,1.342,0.374,1.69,0.975C6.946,4.476,7.015,5,6.88,5.505z"}),Object(a.jsx)("path",{fill:"none",d:"M8.759,2.828C8.718,2.757,8.626,2.732,8.556,2.774L7.345,3.473c-0.07,0.041-0.094,0.132-0.053,0.202C7.319,3.723,7.368,3.75,7.419,3.75c0.025,0,0.053-0.007,0.074-0.02l1.211-0.699C8.774,2.989,8.8,2.899,8.759,2.828z"}),Object(a.jsx)("path",{fill:"none",d:"M1.238,7.171c0.027,0.047,0.077,0.074,0.128,0.074c0.025,0,0.051-0.008,0.074-0.02l1.211-0.699c0.071-0.041,0.095-0.133,0.054-0.203S2.574,6.228,2.503,6.269l-1.21,0.699C1.221,7.009,1.197,7.101,1.238,7.171z"}),Object(a.jsx)("path",{fill:"none",d:"M6.396,2.726c0.052,0,0.102-0.026,0.13-0.075l0.349-0.605C6.915,1.976,6.89,1.885,6.819,1.844c-0.07-0.042-0.162-0.017-0.202,0.054L6.269,2.503C6.228,2.574,6.251,2.666,6.322,2.706C6.346,2.719,6.371,2.726,6.396,2.726z"}),Object(a.jsx)("path",{fill:"none",d:"M3.472,7.347L3.123,7.952c-0.041,0.07-0.017,0.162,0.054,0.203C3.2,8.169,3.226,8.175,3.25,8.175c0.052,0,0.102-0.027,0.129-0.074l0.349-0.605c0.041-0.07,0.017-0.16-0.054-0.203C3.603,7.251,3.513,7.276,3.472,7.347z"}),Object(a.jsx)("path",{fill:"none",d:"M3.601,2.726c0.025,0,0.051-0.007,0.074-0.02C3.746,2.666,3.77,2.574,3.729,2.503l-0.35-0.604C3.338,1.828,3.248,1.804,3.177,1.844C3.106,1.886,3.082,1.976,3.123,2.047l0.35,0.604C3.5,2.7,3.549,2.726,3.601,2.726z"}),Object(a.jsx)("path",{fill:"none",d:"M6.321,7.292c-0.07,0.043-0.094,0.133-0.054,0.203l0.351,0.605c0.026,0.047,0.076,0.074,0.127,0.074c0.025,0,0.051-0.006,0.074-0.02c0.072-0.041,0.096-0.133,0.055-0.203l-0.35-0.605C6.483,7.276,6.393,7.253,6.321,7.292z"}),Object(a.jsx)("path",{fill:"none",d:"M2.202,5.146c0.082,0,0.149-0.065,0.149-0.147S2.284,4.851,2.202,4.851H1.503c-0.082,0-0.148,0.066-0.148,0.148s0.066,0.147,0.148,0.147H2.202z"}),Object(a.jsx)("path",{fill:"none",d:"M8.493,4.851H7.794c-0.082,0-0.148,0.066-0.148,0.148s0.066,0.147,0.148,0.147l0,0h0.699c0.082,0,0.148-0.065,0.148-0.147S8.575,4.851,8.493,4.851L8.493,4.851z"}),Object(a.jsx)("path",{fill:"none",d:"M5.146,2.203V0.805c0-0.082-0.066-0.148-0.148-0.148c-0.082,0-0.148,0.066-0.148,0.148v1.398c0,0.082,0.066,0.149,0.148,0.149C5.08,2.352,5.146,2.285,5.146,2.203z"}),Object(a.jsx)("path",{fill:"none",d:"M4.85,7.796v1.396c0,0.082,0.066,0.15,0.148,0.15c0.082,0,0.148-0.068,0.148-0.15V7.796c0-0.082-0.066-0.148-0.148-0.148C4.917,7.647,4.85,7.714,4.85,7.796z"}),Object(a.jsx)("path",{fill:"none",d:"M2.651,3.473L1.44,2.774C1.369,2.732,1.279,2.757,1.238,2.828C1.197,2.899,1.221,2.989,1.292,3.031l1.21,0.699c0.023,0.013,0.049,0.02,0.074,0.02c0.051,0,0.101-0.026,0.129-0.075C2.747,3.604,2.722,3.514,2.651,3.473z"}),Object(a.jsx)("path",{fill:"none",d:"M8.704,6.968L7.493,6.269c-0.07-0.041-0.162-0.016-0.201,0.055c-0.041,0.07-0.018,0.162,0.053,0.203l1.211,0.699c0.023,0.012,0.049,0.02,0.074,0.02c0.051,0,0.102-0.027,0.129-0.074C8.8,7.101,8.776,7.009,8.704,6.968z"})]})}),Object(a.jsx)("svg",{version:"1.1",id:"cloud",x:"0px",y:"0px",width:"10px",height:"10px",viewBox:"0 0 10 10",enableBackground:"new 0 0 10 10",children:Object(a.jsx)("path",{fill:"none",d:"M8.528,5.624H8.247c-0.085,0-0.156-0.068-0.156-0.154c0-0.694-0.563-1.257-1.257-1.257c-0.098,0-0.197,0.013-0.3,0.038C6.493,4.259,6.45,4.252,6.415,4.229C6.38,4.208,6.356,4.172,6.348,4.131C6.117,3.032,5.135,2.235,4.01,2.235c-1.252,0-2.297,0.979-2.379,2.23c-0.004,0.056-0.039,0.108-0.093,0.13C1.076,4.793,0.776,5.249,0.776,5.752c0,0.693,0.564,1.257,1.257,1.257h6.495c0.383,0,0.695-0.31,0.695-0.692S8.911,5.624,8.528,5.624z"})}),Object(a.jsxs)("div",{className:"rain",children:[Object(a.jsx)("span",{className:"drop"}),Object(a.jsx)("span",{className:"drop"}),Object(a.jsx)("span",{className:"drop"}),Object(a.jsx)("span",{className:"drop"}),Object(a.jsx)("span",{className:"drop"}),Object(a.jsx)("span",{className:"drop"}),Object(a.jsx)("span",{className:"drop"}),Object(a.jsx)("span",{className:"drop"}),Object(a.jsx)("span",{className:"drop"}),Object(a.jsx)("span",{className:"drop"})]}),Object(a.jsx)("div",{className:"text",children:"LOOKING OUTSIDE FOR YOU... ONE SEC"})]})})}),g=function(){var t=b("https://simplemaps.com/static/data/country-cities/mm/mm.json");return Object(a.jsxs)(a.Fragment,{children:[t.loading&&Object(a.jsx)(f,{}),t.data&&t.data.map((function(t){return Object(a.jsx)(l.b,{"data-testid":"location",to:"".concat("/react-boot-camp","/detail/").concat(t.lat,"/").concat(t.lng),children:Object(a.jsx)(O,{name:t.city,population:t.population})},"".concat(t.population,"-").concat(t.city))}))]})},v=c(24),C=c.n(v),N=(c(43),function(t){var e=t.datetime,c=t.iconcode,n=t.temperature;return Object(a.jsxs)("div",{className:"minicard",children:[Object(a.jsx)("p",{className:"date",children:C.a.unix(e).format("ll")}),Object(a.jsx)("div",{className:"cloud-icon",children:Object(a.jsx)("img",{alt:c,src:"http://openweathermap.org/img/wn/".concat(c,"@2x.png")})}),Object(a.jsxs)("p",{className:"temperature",children:[n," \xb0"]})]})}),w=(c(44),function(t){var e=t.icon,c=t.data,n=t.unit;return Object(a.jsxs)("div",{"data-testid":"status",className:"flex px-6",children:[Object(a.jsx)(h.a,{icon:e,className:"px-2",style:{color:"#374151"}}),Object(a.jsxs)("p",{className:"m-0 text-gray-800",children:[c,"\xa0",n]})]})}),y=s.a.createContext(""),M=(c(45),function(){var t=Object(o.f)(),e=t.lat,c=t.lng,s=Object(n.useContext)(y),r=b("https://api.openweathermap.org/data/2.5/onecall?lat=".concat(e,"&lon=").concat(c,"&units=metric&appid=").concat(s));if(r&&r.data&&r.data.current){var i=r.data.daily,l=r.data.current,d=l.temp,j=l.wind_speed,p=l.humidity,x=r.data.current.weather[0],u=x.icon,h=x.description;return Object(a.jsxs)("div",{"data-testid":"detail-container",className:"container",children:[Object(a.jsx)("img",{src:"http://openweathermap.org/img/wn/".concat(u,"@4x.png"),alt:"status"}),Object(a.jsx)("p",{"data-testid":"detail-text",className:"capitalize font-medium tracking-wider",children:h}),Object(a.jsxs)("p",{className:"text-7xl my-8",children:[d,"\xb0"]}),Object(a.jsxs)("div",{className:"flex justify-center",children:[Object(a.jsx)(w,{icon:m.c,data:j,unit:"km/h"}),Object(a.jsx)(w,{icon:m.b,data:p,unit:"%"})]}),Object(a.jsx)("div",{className:"flex mt-8 overflow-y-scroll",children:i.map((function(t,e){var c=t.dt,n=t.weather,s=t.temp;return Object(a.jsx)(N,{datetime:c,iconcode:n[0].icon,temperature:s.max},e)}))})]})}return Object(a.jsx)(a.Fragment,{children:r.loading&&Object(a.jsx)(f,{})})});var z=function(){return Object(a.jsx)("div",{"data-testid":"app",className:"wrapper ",children:Object(a.jsx)(l.a,{children:Object(a.jsxs)(o.c,{children:[Object(a.jsx)(o.a,{exact:!0,path:"".concat("/react-boot-camp","/"),children:Object(a.jsx)(g,{})}),Object(a.jsx)(o.a,{exact:!0,path:"".concat("/react-boot-camp","/home"),children:Object(a.jsx)(g,{})}),Object(a.jsx)(o.a,{path:"".concat("/react-boot-camp","/detail/:lat/:lng"),children:Object(a.jsx)(M,{})}),Object(a.jsx)(o.a,{path:"*",children:"404"})]})})})},L=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,47)).then((function(e){var c=e.getCLS,a=e.getFID,n=e.getFCP,s=e.getLCP,r=e.getTTFB;c(t),a(t),n(t),s(t),r(t)}))},k=atob("ZDc5ZTQ3M2MyN2UxY2U4NWExNDVjM2E1MWUyM2YyYzU=");i.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(y.Provider,{value:k,children:Object(a.jsx)(z,{})})}),document.getElementById("root")),L()}},[[46,1,2]]]);
//# sourceMappingURL=main.1e1863fd.chunk.js.map