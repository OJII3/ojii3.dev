(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[995],{5658:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ojii3/tetris",function(){return t(4098)}])},4103:function(e,s,t){"use strict";var r=t(5893),i=t(7294),n=t(1664),a=t.n(n),c=t(5005);let l=()=>{let[e,s]=(0,i.useState)(!0),t=(0,r.jsx)("div",{style:{position:"relative"},hidden:e,children:(0,r.jsx)(a(),{href:"",style:{position:"fixed",bottom:"40px",right:"25px"},children:(0,r.jsx)(c.Z,{variant:"secondary",className:"p-4",children:"TOP ↑"})})});return(0,i.useEffect)(()=>{window.addEventListener("scroll",()=>{window.scrollY>100?s(!1):s(!0)})}),t};s.Z=l},3447:function(e,s,t){"use strict";var r=t(5893),i=t(682),n=t(4051),a=t(1555);let c=()=>(0,r.jsx)("footer",{children:(0,r.jsx)(i.Z,{fluid:!0,className:"p-5",children:(0,r.jsx)(n.Z,{className:"p-5",style:{borderTop:"solid 1px #ccc"},children:(0,r.jsx)(a.Z,{className:"text-center",children:"\xa9OJII3"})})})});s.Z=c},8374:function(e,s,t){"use strict";var r=t(5893),i=t(1664),n=t.n(i),a=t(7054),c=t(682),l=t(4862),d=t(3144),o=t(6601);let h=()=>(0,r.jsx)(a.Z,{bg:"light",expand:"",className:"mb-3",children:(0,r.jsxs)(c.Z,{fluid:!0,children:[(0,r.jsxs)(a.Z.Brand,{as:n(),href:"/ojii3/home",children:[" ","OJII3"]}),(0,r.jsx)(a.Z.Toggle,{"aria-controls":"offcanvasNavbar-expand-".concat("")}),(0,r.jsxs)(a.Z.Offcanvas,{id:"offcanvasNavbar-expand-".concat(""),"aria-labelledby":"offcanvasNavbarLabel-expand-".concat(""),placement:"end",children:[(0,r.jsx)(l.Z.Header,{closeButton:!0,children:(0,r.jsx)(l.Z.Title,{id:"offcanvasNavbarLabel-expand-".concat(""),children:"MENU"})}),(0,r.jsx)(l.Z.Body,{children:(0,r.jsxs)(d.Z,{className:"justify-content-end flex-grow-1 pe-3",children:[(0,r.jsx)(d.Z.Link,{as:n(),href:"/ojii3/home",children:"Home"}),(0,r.jsxs)(o.Z,{title:"Works",id:"offcanvasNavbarDropdown-expand-".concat(""),children:[(0,r.jsx)(o.Z.ItemText,{className:"text-info",children:"Website"}),(0,r.jsx)(o.Z.Divider,{}),(0,r.jsx)(o.Z.Item,{as:n(),href:"/ojii3/nextjs-gh-pages",children:"Next.js \xd7 GitHub Pages"}),(0,r.jsx)(o.Z.Item,{as:n(),href:"/ojii3/tetris",children:"Tetris"}),(0,r.jsx)(o.Z.ItemText,{}),(0,r.jsx)(o.Z.ItemText,{className:"text-info",children:"Chrome Extensions"}),(0,r.jsx)(o.Z.Divider,{}),(0,r.jsx)(o.Z.Item,{as:n(),href:"/ojii3/chrome-form-character-counter",children:"Form Character Counter"}),(0,r.jsx)(o.Z.ItemText,{}),(0,r.jsx)(o.Z.ItemText,{className:"text-info",children:"Bot"}),(0,r.jsx)(o.Z.Divider,{}),(0,r.jsx)(o.Z.Item,{as:n(),href:"/ojii3/ichimon-itto-bot",children:"一問一答bot"}),(0,r.jsx)(o.Z.ItemText,{})]}),(0,r.jsxs)(o.Z,{title:"Info",id:"offcanvasNavbarDropdown-expand-".concat(""),children:[(0,r.jsx)(o.Z.Item,{href:"https://github.com/ojii3",children:"GitHub"}),(0,r.jsx)(o.Z.Item,{href:"https://qiita.com/ojii3",children:"Qiita"}),(0,r.jsx)(o.Z.Divider,{}),(0,r.jsx)(o.Z.Item,{href:"#action5",children:"Something else here"})]})]})})]})]})},"");s.Z=h},9561:function(e,s,t){"use strict";t.d(s,{CR:function(){return c},Gl:function(){return n},XZ:function(){return a}});var r=t(7294);class i{get ref(){return this.observe(),this.fadeUpRef}observe(){(0,r.useEffect)(()=>{let e=new IntersectionObserver(e=>{e.forEach(e=>{this.disabled||(e.isIntersecting?(e.target.classList.add(this.className),this.disabled=!!this.disableAfter):(e.target.classList.remove(this.className),e.target.classList.add("fade-untriggered")))})},{threshold:.25});this.fadeUpRef.current&&e.observe(this.fadeUpRef.current)})}constructor(e=!1){this.className="fade-untriggered",this.disabled=!1,this.fadeUpRef=(0,r.useRef)(),this.disableAfter=e}}class n extends i{constructor(...e){super(...e),this.className="fade-up"}}class a extends i{constructor(...e){super(...e),this.className="fade-right"}}class c extends i{constructor(...e){super(...e),this.className="fade-left"}}},4098:function(e,s,t){"use strict";t.r(s);var r=t(5893),i=t(9008),n=t.n(i),a=t(682),c=t(4051),l=t(1555),d=t(8695),o=t(5005),h=t(8374),f=t(3447),x=t(9561),j=t(1664),u=t.n(j),m=t(4103);s.default=()=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n(),{children:[(0,r.jsx)("title",{children:"Tetris - OJII3"}),(0,r.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsx)(h.Z,{}),(0,r.jsx)("main",{children:(0,r.jsxs)(a.Z,{fluid:!0,className:"",children:[(0,r.jsx)(c.Z,{className:"p-5",ref:new x.Gl(!0).ref,children:(0,r.jsx)("h1",{className:"text-center",children:"Tetris-ish Browser Game"})}),(0,r.jsx)(c.Z,{className:"p-5",ref:new x.Gl().ref,children:(0,r.jsx)(l.Z,{className:"text-center",children:(0,r.jsxs)("p",{children:["See code in"," ",(0,r.jsx)("a",{href:"https://github.com/ojii3/ojii3.github.io",children:"GitHub"})]})})}),(0,r.jsx)(c.Z,{className:"justify-content-md-center p-5",ref:new x.Gl().ref,children:(0,r.jsxs)(l.Z,{sm:3,children:[(0,r.jsx)("h2",{className:"text-center",children:"Feature"}),(0,r.jsx)(d.Z,{variant:"flush",children:(0,r.jsx)(d.Z.Item,{children:(0,r.jsx)("li",{children:"Created without any game engine"})})})]})}),(0,r.jsx)(c.Z,{className:"justify-content-md-center p-5",ref:new x.Gl().ref,children:(0,r.jsxs)(l.Z,{sm:3,children:[(0,r.jsx)("h2",{className:"text-center",children:"What I used"}),(0,r.jsxs)(d.Z,{variant:"flush",children:[(0,r.jsx)(d.Z.Item,{children:(0,r.jsx)("li",{children:"Google Apps Script"})}),(0,r.jsx)(d.Z.Item,{children:(0,r.jsx)("li",{children:"Canvas API (HTML5)"})})]})]})}),(0,r.jsx)(c.Z,{className:"justify-content-md-center p-5",ref:new x.Gl().ref,children:(0,r.jsxs)(l.Z,{sm:6,children:[(0,r.jsx)("h2",{className:"text-center",children:"Brief"}),(0,r.jsxs)("p",{className:"brief",children:[(0,r.jsx)(u(),{href:"https://developer.mozilla.org/ja/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript",children:"MDNの2D Breakoutのチュートリアル"}),"を応用して作成しました。 ゲームを作るなら素直にゲームエンジンを使いましょう。"]})]})}),(0,r.jsx)(c.Z,{className:"justify-content-md-center p-5",ref:new x.Gl().ref,children:(0,r.jsxs)(l.Z,{sm:6,children:[(0,r.jsx)("h2",{className:"text-center",children:"Live Site"}),(0,r.jsx)("p",{className:"text-center brief p-3",children:(0,r.jsx)(o.Z,{variant:"primary",href:"https://script.google.com/macros/s/AKfycbwhYmfDdeKwVQSjXGXyv58aRqDb7WpN-xyeWXWNZdjd3vBsRn5F6ZgzpMgew1X140Qy7g/exec",children:"Play"})}),(0,r.jsx)("p",{className:"text-danger brief",children:"※画面の入力座標を変換し忘れているため、画面の横幅が広いと正しく動作しません。"})]})})]})}),(0,r.jsx)(f.Z,{}),(0,r.jsx)(m.Z,{})]})},1555:function(e,s,t){"use strict";var r=t(4184),i=t.n(r),n=t(7294),a=t(6792),c=t(5893);let l=n.forwardRef((e,s)=>{let[{className:t,...r},{as:n="div",bsPrefix:l,spans:d}]=function({as:e,bsPrefix:s,className:t,...r}){s=(0,a.vE)(s,"col");let n=(0,a.pi)(),c=(0,a.zG)(),l=[],d=[];return n.forEach(e=>{let t,i,n;let a=r[e];delete r[e],"object"==typeof a&&null!=a?{span:t,offset:i,order:n}=a:t=a;let o=e!==c?`-${e}`:"";t&&l.push(!0===t?`${s}${o}`:`${s}${o}-${t}`),null!=n&&d.push(`order${o}-${n}`),null!=i&&d.push(`offset${o}-${i}`)}),[{...r,className:i()(t,...l,...d)},{as:e,bsPrefix:s,spans:l}]}(e);return(0,c.jsx)(n,{...r,ref:s,className:i()(t,!d.length&&l)})});l.displayName="Col",s.Z=l},8695:function(e,s,t){"use strict";t.d(s,{Z:function(){return u}});var r=t(4184),i=t.n(r),n=t(7294);t(2473);var a=t(5446),c=t(5115),l=t(6792),d=t(8146),o=t(3716),h=t(7126),f=t(5893);let x=n.forwardRef(({bsPrefix:e,active:s,disabled:t,eventKey:r,className:n,variant:a,action:c,as:x,...j},u)=>{e=(0,l.vE)(e,"list-group-item");let[m,p]=(0,o.v)({key:(0,h.h)(r,j.href),active:s,...j}),Z=(0,d.Z)(e=>{if(t){e.preventDefault(),e.stopPropagation();return}m.onClick(e)});t&&void 0===j.tabIndex&&(j.tabIndex=-1,j["aria-disabled"]=!0);let v=x||(c?j.href?"a":"button":"div");return(0,f.jsx)(v,{ref:u,...j,...m,onClick:Z,className:i()(n,e,p.isActive&&"active",t&&"disabled",a&&`${e}-${a}`,c&&`${e}-action`)})});x.displayName="ListGroupItem";let j=n.forwardRef((e,s)=>{let t;let{className:r,bsPrefix:n,variant:d,horizontal:o,numbered:h,as:x="div",...j}=(0,a.Ch)(e,{activeKey:"onSelect"}),u=(0,l.vE)(n,"list-group");return o&&(t=!0===o?"horizontal":`horizontal-${o}`),(0,f.jsx)(c.Z,{ref:s,...j,as:x,className:i()(r,u,d&&`${u}-${d}`,t&&`${u}-${t}`,h&&`${u}-numbered`)})});j.displayName="ListGroup";var u=Object.assign(j,{Item:x})},4051:function(e,s,t){"use strict";var r=t(4184),i=t.n(r),n=t(7294),a=t(6792),c=t(5893);let l=n.forwardRef(({bsPrefix:e,className:s,as:t="div",...r},n)=>{let l=(0,a.vE)(e,"row"),d=(0,a.pi)(),o=(0,a.zG)(),h=`${l}-cols`,f=[];return d.forEach(e=>{let s;let t=r[e];delete r[e],null!=t&&"object"==typeof t?{cols:s}=t:s=t;let i=e!==o?`-${e}`:"";null!=s&&f.push(`${h}${i}-${s}`)}),(0,c.jsx)(t,{ref:n,...r,className:i()(s,l,...f)})});l.displayName="Row",s.Z=l}},function(e){e.O(0,[194,774,888,179],function(){return e(e.s=5658)}),_N_E=e.O()}]);