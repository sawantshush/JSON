(this.webpackJsonpscroll=this.webpackJsonpscroll||[]).push([[0],{15:function(t,e,n){},16:function(t,e,n){},19:function(t,e,n){},20:function(t,e,n){},21:function(t,e,n){"use strict";n.r(e);var i=n(1),c=n.n(i),o=n(9),r=n.n(o),s=(n(15),n(6)),a=n(2),l=n(3),u=n(5),p=n(4),d=(n(16),n(0)),h=function(t){Object(u.a)(n,t);var e=Object(p.a)(n);function n(){return Object(a.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"beerDiv",children:[Object(d.jsx)("div",{style:{fontSize:"10pt"},children:this.props.beer.name}),Object(d.jsx)("img",{src:this.props.beer.image_url,alt:"",style:{width:"30px",float:"left",paddingRight:"10px",paddingBottom:"10px"}}),Object(d.jsx)("p",{style:{fontSize:"10pt"},children:this.props.beer.tagline})]})}}]),n}(i.Component),f=(c.a.Component,function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(e){var n=e.getCLS,i=e.getFID,c=e.getFCP,o=e.getLCP,r=e.getTTFB;n(t),i(t),c(t),o(t),r(t)}))}),j=n(8),b=n.n(j),m=n(10),O=(n(19),function(t){Object(u.a)(n,t);var e=Object(p.a)(n);function n(){return Object(a.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"card",children:[Object(d.jsx)("h4",{children:this.props.posts.title}),Object(d.jsx)("h6",{children:this.props.posts.body})]})}}]),n}(i.Component)),g=(n(20),function(t){Object(u.a)(n,t);var e=Object(p.a)(n);function n(t){var i;return Object(a.a)(this,n),(i=e.call(this,t)).fetchData=function(){var t=Object(m.a)(b.a.mark((function t(e){var n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://jsonplaceholder.typicode.com/posts/?_start=".concat(e,"&_limit=10"),i.setState({loading:!0}),t.next=4,fetch(n).then((function(t){return t.json()})).then((function(t){t?(i.setState({loading:!1}),i.setState({posts:[].concat(Object(s.a)(i.state.posts),Object(s.a)(t))})):i.setState({loading:!1})}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),i.componentDidMount=function(){i.fetchData(i.state.perPage),window.addEventListener("scroll",i.infiniteScroll)},i.infiniteScroll=function(){if(window.innerHeight+document.documentElement.scrollTop===document.documentElement.offsetHeight){console.log("infinite");var t=i.state.perPage;t+=10,i.setState({perPage:t}),i.fetchData(t)}},i.state={posts:[],perPage:1,loading:!1},i}return Object(l.a)(n,[{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.infiniteScroll)}},{key:"render",value:function(){var t=this;return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Test Example"}),this.state.posts.map((function(e,n){return Object(d.jsx)(O,{posts:e,loading:t.state.loading},n)}))]})}}]),n}(i.Component));r.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(g,{})}),document.getElementById("root")),f()}},[[21,1,2]]]);
//# sourceMappingURL=main.551a77d5.chunk.js.map