(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{168:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return f});var r=n(0),a=n.n(r),o=n(1),i=n.n(o),s=n(169),l=n.n(s);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return s.withPrefix}),n.d(t,"navigate",function(){return s.navigate}),n.d(t,"push",function(){return s.push}),n.d(t,"replace",function(){return s.replace}),n.d(t,"navigateTo",function(){return s.navigateTo});var c=n(210),u=n.n(c);n.d(t,"PageRenderer",function(){return u.a});var d=n(48);n.d(t,"parsePath",function(){return d.a});var p=a.a.createContext({}),f=function(e){return a.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},170:function(e,t,n){"use strict";n.d(t,"g",function(){return a}),n.d(t,"a",function(){return o}),n.d(t,"c",function(){return i}),n.d(t,"b",function(){return s}),n.d(t,"d",function(){return l}),n.d(t,"f",function(){return c}),n.d(t,"e",function(){return u});var r=n(11),a=function(e){return{type:r.g,payload:{headerHeight:e}}},o=function(e){return{type:r.b,payload:{anchorOpen:e}}},i=function(e){return{type:r.f,payload:{sidebarOpen:e}}},s=function(e){return{type:r.e,payload:{sidebarDocked:e}}},l=function(e){return{type:r.a,payload:{expandedKeys:e,autoExpandParent:!1}}},c=function(){return{type:r.d}},u=function(){return{type:r.c}}},193:function(e,t,n){"use strict";n(88),n(29),n(53);var r=n(246),a=n(0),o=n.n(a),i=n(1),s=n.n(i),l=n(247),c=n.n(l),u=n(168),d=n(8),p=n.n(d),f=n(257),h=n.n(f),m=n(51),g=n(170),y=(n(271),n(272),n(273)),b=function(){return o.a.createElement(u.StaticQuery,{query:"2236891844",render:function(e){var t=e.allMenuItems.edges.map(function(e){return e.node}).reverse();return o.a.createElement("div",null,t.map(function(e){return o.a.createElement("div",{style:{marginLeft:"2em",float:"right"},key:t.indexOf(e)},o.a.createElement("p",{style:{margin:0,fontSize:"1rem"}},o.a.createElement(u.Link,{to:e.link,style:{color:"white",textDecoration:"none"}},e.name)))}))},data:y})},v=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).componentDidUpdate=function(){t.props.updateHeaderHeight(t.props.size.height)},t}return p()(t,e),t.prototype.render=function(){var e=this.props.siteTitle;return o.a.createElement("div",{style:{position:"fixed",top:0,width:"100%",zIndex:1e3,background:"cornflowerblue",marginBottom:"1.45rem"}},o.a.createElement("div",{style:{margin:"0 auto",maxWidth:1360,padding:"0.8rem 1.0875rem"}},o.a.createElement("div",{style:{float:"left",marginBottom:"0.8em"}},o.a.createElement("h1",{style:{margin:0,fontSize:"1.25rem"}},o.a.createElement(u.Link,{to:"/",style:{color:"white",textDecoration:"none"}},e))),o.a.createElement(b,null)))},t}(a.Component),E={updateHeaderHeight:g.g},k=Object(m.b)(function(){return{}},E)(h()({monitorHeight:!0})(v)),S=(n(274),n(89),function(e){return e.layout.sidebar}),w=function(e){return e.layout.header.height},O=(n(275),n(213),n(91),n(85),n(86),n(87),n(278)),x=n(284),P=n.n(x),C=(n(279),n(283),n(214)),M=P.a.SubMenu,A=function(e){var t=[],n=[];return e.forEach(function(e){if(e.parents===[]||null===e.parents)t.push(e);else{for(var r=t,a=function(t){if(0===r.filter(function(n){return n.title===e.parents[t]&&n.children}).length){var a={key:"tree/"+e.parents[t],title:e.parents[t],children:[]};r.push(a),n.push(a)}r=r.find(function(n){return n.title===e.parents[t]&&n.children}).children},o=0;o<e.parents.length;o++)a(o);r.push(e)}}),[t,n]},R=function(e){e.sort(function(e,t){return(e.children&&t.children||!e.children&&!t.children)&&e.title>t.title?1:e.children?1:-1})},T=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).onSetSidebarOpen=function(){t.props.onSetSidebarOpen(!1)},t}return p()(t,e),t.prototype.render=function(){var e=this,t=this.props.sidebar.expandedKeys,n=this.props.root;return o.a.createElement(u.StaticQuery,{query:"1176653062",render:function(r){var a=function(e){var t=e.map(function(e){return{path:e.node.fields.slug,key:e.node.id,title:e.node.frontmatter.title,parents:e.node.frontmatter.parents}});return A(t)}(r.allMarkdownRemark.edges.filter(function(e){return e.node.fields.slug.startsWith(n)})),i=a[0],s=a[1];R(i);var l=window.location.pathname.replace(C.pathPrefix.slice(0,-1),""),c=r.allMarkdownRemark.edges.filter(function(e){return l===e.node.fields.slug||l.slice(0,-1)===e.node.fields.slug&&"/"===l.slice(-1)}).length>0?[t]:[],d=s.map(function(e){return e.key});return o.a.createElement("div",null,o.a.createElement(P.a,{mode:"inline",defaultOpenKeys:d,selectedKeys:c,inlineIndent:12},function t(n){return n.map(function(n){return n.children?(R(n.children),o.a.createElement(M,{key:n.key,title:o.a.createElement("span",{style:{fontWeight:900}},n.title)},t(n.children))):o.a.createElement(P.a.Item,{key:n.key},o.a.createElement(u.Link,{to:n.path,onClick:e.onSetSidebarOpen},n.title))})}(i)))},data:O})},t}(a.Component),H={onSetSidebarOpen:g.c},q=Object(m.b)(function(e){return{sidebar:S(e)}},H)(T),D=function(e){function t(){return e.apply(this,arguments)||this}return p()(t,e),t.prototype.render=function(){var e=this.props,t=e.headerHeight,n=e.root;return o.a.createElement("div",{style:{position:"fixed",top:t+30,left:10,right:"80%",bottom:0,overflow:"hidden"}},o.a.createElement("div",{style:{position:"absolute",left:0,right:10,top:0,bottom:0}},o.a.createElement(q,{root:n})))},t}(a.Component),j=Object(m.b)(function(e){return{headerHeight:w(e)}})(D),I=function(e){function t(){return e.apply(this,arguments)||this}return p()(t,e),t.prototype.render=function(){var e=this.props,t=e.sidebarDocked,n=e.headerHeight,r=e.onPostPage;return o.a.createElement("div",{style:{position:"absolute",top:!t&&r?n+70:n+30,left:!t&&r||!r?0:"20%",right:!t&&r||!r?0:"15%",bottom:0,overflow:t?"visible":"auto"}},o.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},this.props.children))},t}(a.Component),W=Object(m.b)(function(e){return{headerHeight:w(e)}})(I),L=n(343),G=n.n(L),Q=(n(340),n(342),G.a.Link),z=function(e){for(var t=[],n=0;n<e.length;n++)for(var r=n+1;r<e.length;r++)if(e[n].depth+1===e[r].depth)e[n].children.push(e[r]),t.push(r);else if(e[n].depth>=e[r].depth)break;t.sort(function(e,t){return t-e}).forEach(function(t){return e.splice(t,1)})},B=function(e){function t(t){var n;return(n=e.call(this,t)||this).onSetAnchorOpen=function(){n.props.onSetAnchorOpen(!1)},n.state={anchors:[]},n}p()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=document.getElementsByClassName("post-toc-anchor");this.setState({anchors:function(e){var t=0;return e=[].slice.call(e).map(function(e){var n=parseInt(e.parentElement.nodeName[1]);return 0!==t&&n>t&&(n=t+1),t=n,{href:"#"+e.parentElement.id,title:e.parentElement.innerText,depth:n,children:[]}}),z(e),e}(e)})},n.render=function(){var e=this.state.anchors,t=this.props,n=t.offsetTop,r=t.affix;return o.a.createElement(G.a,{offsetTop:n,onClick:this.onSetAnchorOpen,affix:r},function e(t){return t.map(function(t){return t.children.length>0?o.a.createElement(Q,{href:t.href,title:t.title,key:t.href},e(t.children)):o.a.createElement(Q,{href:t.href,title:t.title,key:t.href})})}(e))},t}(a.Component),K={onSetAnchorOpen:g.a},N=Object(m.b)(function(){return{}},K)(B),_=function(e){function t(){return e.apply(this,arguments)||this}return p()(t,e),t.prototype.render=function(){var e=this.props.headerHeight;return o.a.createElement("div",{style:{position:"fixed",top:e+30,left:"85%",right:10,bottom:0,overflow:"hidden"}},o.a.createElement("div",{style:{position:"absolute",left:10,right:0,top:0,bottom:0}},o.a.createElement(N,{offsetTop:e+30,affix:!0})))},t}(a.Component),F=Object(m.b)(function(e){return{headerHeight:w(e)}})(_),U=n(235),J=n.n(U),Y=(n(234),function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).onSetSidebarOpen=function(){t.props.onSetSidebarOpen(!0)},t.onSetSidebarClose=function(){t.props.onSetSidebarOpen(!1)},t.onSetAnchorOpen=function(){t.props.onSetAnchorOpen(!0)},t.onSetAnchorClose=function(){t.props.onSetAnchorOpen(!1)},t}return p()(t,e),t.prototype.render=function(){var e=this.props,t=e.headerHeight,n=e.sidebarOpen,r=e.anchorOpen,a=e.root;return o.a.createElement("div",{style:{position:"fixed",top:t,width:"100%",height:40,zIndex:1e3,background:"aliceblue",marginBottom:"1.45rem"}},!r&&o.a.createElement("div",{style:{position:"absolute",left:8,top:4}},n?o.a.createElement(J.a,{icon:"close",onClick:this.onSetSidebarClose}):o.a.createElement(J.a,{icon:"bars",onClick:this.onSetSidebarOpen}),n&&o.a.createElement("div",{style:{position:"fixed",top:t+40,left:0,right:0,bottom:0,backgroundColor:"white"}},o.a.createElement("div",{style:{position:"absolute",top:0,bottom:0,left:0,right:0,overflowY:"auto",WebkitOverflowScrolling:"touch",transition:"left .3s ease-out, right .3s ease-out"}},o.a.createElement(q,{root:a})))),!n&&o.a.createElement("div",{style:{position:"absolute",right:8,top:4}},r?o.a.createElement(J.a,{icon:"close",onClick:this.onSetAnchorClose}):o.a.createElement(J.a,{icon:"ellipsis",onClick:this.onSetAnchorOpen}),r&&o.a.createElement("div",{style:{position:"fixed",top:t+40,left:0,right:10,bottom:0,overflowY:"auto",backgroundColor:"white",WebkitOverflowScrolling:"touch",transition:"left .3s ease-out, right .3s ease-out"}},o.a.createElement(N,{offsetTop:t+70,affix:!1}))))},t}(a.Component)),V={onSetSidebarOpen:g.c,onSetAnchorOpen:g.a},X=Object(m.b)(function(e){return{headerHeight:w(e),sidebarOpen:S(e).open,anchorOpen:(t=e,t.layout.anchor).open};var t},V)(Y),Z=n(370),$=n.n(Z),ee=function(e){var t=e.children,n=e.setPostPageOn,a=e.setPostPageOff,i=e.sidebarRoot,s=e.onSetSidebarDocked;e.onPostPage;return o.a.createElement(u.StaticQuery,{query:"3168754476",render:function(e){var r,l=e.allMarkdownRemark.edges.map(function(e){return e.node.fields.slug});if("undefined"!=typeof window){var u=window.location.pathname.replace(C.pathPrefix.slice(0,-1),"");l.indexOf(u)>=0||l.indexOf(u.slice(0,-1))>=0?(n(),r=!0):(a(),r=!1)}return o.a.createElement($.a,{maxWidth:1e3,onChange:function(e){s(!e)}},function(n){return o.a.createElement(o.a.Fragment,null,o.a.createElement(c.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},o.a.createElement("html",{lang:"en"})),o.a.createElement(k,{siteTitle:e.site.siteMetadata.title}),n&&r?o.a.createElement(X,{root:i}):null,!n&&r?o.a.createElement(o.a.Fragment,null,o.a.createElement(j,{root:i})," ",o.a.createElement(F,null)," "):null,o.a.createElement(W,{sidebarDocked:!n,onPostPage:r},t))})},data:r})};ee.propTypes={children:s.a.node.isRequired};var te={setPostPageOn:g.f,setPostPageOff:g.e,onSetSidebarDocked:g.b},ne=Object(m.b)(function(e){return{onPostPage:(t=e,t.layout.content.onPostPage)};var t},te)(ee);t.a=ne},210:function(e,t,n){var r;e.exports=(r=n(256))&&r.default||r},214:function(e,t){(function(t){e.exports={siteMetadata:{title:"Gatsby Markdown Starter"},plugins:["gatsby-plugin-react-helmet",{resolve:"gatsby-source-filesystem",options:{name:"images",path:t+"/src/images"}},{resolve:"gatsby-transformer-json",options:{typeName:"MenuItems"}},{resolve:"gatsby-source-filesystem",options:{name:"menuItems",path:t+"/src/menuItems"}},{resolve:"gatsby-source-filesystem",options:{name:"contents",path:t+"/contents"}},"gatsby-transformer-sharp","gatsby-plugin-sharp",{resolve:"gatsby-plugin-manifest",options:{name:"gatsby-starter-markdown",short_name:"starter",start_url:"/",background_color:"#663399",theme_color:"#663399",display:"minimal-ui",icon:"src/images/gatsby-icon.png"}},{resolve:"gatsby-transformer-remark",options:{plugins:["gatsby-remark-katex",{resolve:"gatsby-remark-autolink-headers",options:{className:"post-toc-anchor"}}]}},"gatsby-plugin-remove-trailing-slashes"],pathPrefix:"/gatsby-starter-markdown/"}}).call(this,"/")},246:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Markdown Starter"}},allMarkdownRemark:{edges:[{node:{fields:{slug:"/blog/README"}}},{node:{fields:{slug:"/blog/hello-world"}}},{node:{fields:{slug:"/docs/test"}}},{node:{fields:{slug:"/docs/test-1/test1"}}}]}}}},256:function(e,t,n){"use strict";n.r(t);n(31);var r=n(0),a=n.n(r),o=n(1),i=n.n(o),s=n(78),l=n(3),c=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return a.a.createElement(s.a,Object.assign({location:t,pageResources:n},n.json))};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},273:function(e){e.exports={data:{allMenuItems:{edges:[{node:{name:"Docs",link:"/docs/test"}},{node:{name:"Blog",link:"/blog"}}]}}}},274:function(e,t,n){},278:function(e){e.exports={data:{allMarkdownRemark:{edges:[{node:{fields:{slug:"/blog/README"},id:"4ae4be27-8cf5-5095-aed9-171bd325c169",frontmatter:{title:"README",parents:null}}},{node:{fields:{slug:"/blog/hello-world"},id:"3a9baa4a-664e-5457-bf53-3b0e0b1412e2",frontmatter:{title:"Hello World",parents:null}}},{node:{fields:{slug:"/docs/test"},id:"aedaa3a9-d5f3-5575-bf26-f19a172db6e4",frontmatter:{title:"Test",parents:[]}}},{node:{fields:{slug:"/docs/test-1/test1"},id:"4fb2aa46-5893-58f2-bfc4-8719e306b324",frontmatter:{title:"Test1",parents:["Test-1"]}}}]}}}},283:function(e,t,n){},342:function(e,t,n){}}]);
//# sourceMappingURL=1-199b28db08ae12bc3020.js.map