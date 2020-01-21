(this.webpackJsonpcontactmanager=this.webpackJsonpcontactmanager||[]).push([[0],{37:function(e,a,t){e.exports=t(68)},43:function(e,a,t){},68:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(32),o=t.n(c),l=t(2),s=t(3),i=t(5),m=t(4),u=t(6),p=t(13),h=t(14),d=(t(42),t(43),t(7)),b=t.n(d),f=t(36),E=t(18),v=t(12),y=t.n(v),g=r.a.createContext(),N=function(e,a){switch(a.type){case"DELETE_CONTACT":return Object(E.a)({},e,{contact:e.contact.filter((function(e){return e.id!==a.payload}))});case"ADD_CONTACT":return Object(E.a)({},e,{contact:[a.payload].concat(Object(f.a)(e.contact))});case"UPDATE_CONTACT":return Object(E.a)({},e,{contact:e.contact.map((function(e){return e.id===a.payload.id?e=a.payload:e}))});default:return e}},C=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={contact:[],dispatch:function(e){return t.setState((function(a){return N(a,e)}))}},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e;return b.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,b.a.awrap(y.a.get("http://jsonplaceholder.typicode.com/users"));case 2:e=a.sent,this.setState({contact:e.data});case 4:case"end":return a.stop()}}),null,this)}},{key:"render",value:function(){return r.a.createElement(g.Provider,{value:this.state},this.props.children)}}]),a}(n.Component),j=g.Consumer,O=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={showContactInfo:!1},t.onDelete=function(e,a){return b.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,b.a.awrap(y.a.delete("http://jsonplaceholder.typicode.com/users".concat(e)));case 3:a({type:"DELETE_CONTACT",payload:e}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),a({type:"DELETE_CONTACT",payload:e});case 9:case"end":return t.stop()}}),null,null,[[0,6]])},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this,a=this.props.contact,t=a.id,n=a.name,c=a.email,o=a.phone,l=this.state.showContactInfo;return r.a.createElement(j,null,(function(a){var s=a.dispatch;return r.a.createElement("div",{className:"card card-body mb-3"},r.a.createElement("h4",null,n," ",r.a.createElement("i",{onClick:function(){return e.setState({showContactInfo:!e.state.showContactInfo})},className:"fas fa-sort-down",style:{cursor:"pointer"}}),r.a.createElement("i",{className:"fas fa-times",style:{cursor:"pointer",float:"right",color:"red"},onClick:e.onDelete.bind(e,t,s)}),r.a.createElement(p.b,{to:"contact/edit/".concat(t)},r.a.createElement("i",{className:"fas fa-pencil-alt",style:{cursor:"pointer",color:"black",float:"right",marginRight:"1rem"}}))),l?r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},"Email: ",c),r.a.createElement("li",{className:"list-group-item"},"Phone: ",o)):null)}))}}]),a}(n.Component),k=function(e){function a(){return Object(l.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(j,null,(function(e){var a=e.contact;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"display-4 mb-2"},r.a.createElement("span",{className:"text-danger"},"Contact")," List"),a.map((function(e){return r.a.createElement(O,{key:e.id,contact:e})})))}))}}]),a}(n.Component),w=function(e){var a=e.branding;return r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{href:"/",className:"navbar-brand"},a),r.a.createElement("div",null,r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(p.b,{to:"/",className:"nav-link"},r.a.createElement("i",{className:"fas fa-home"},"Home"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement(p.b,{to:"/contact/add",className:"nav-link"},r.a.createElement("i",{className:"fas fa-plus"},"Add"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement(p.b,{to:"/about",className:"nav-link"},r.a.createElement("i",{className:"fas fa-question"},"About")))))))};w.defaultProps={branding:"My App"};var x=w,A=function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},"About Contact Manager"),r.a.createElement("p",{className:"lead"}," Simple app to manage contacts "),r.a.createElement("p",{className:"text-secondary"},"Version 1.0.0"))},S=t(16),T=t(35),D=t.n(T),P=function(e){var a=e.label,t=e.name,n=e.value,c=e.placeholder,o=e.type,l=e.onChange,s=e.error;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:t},a),r.a.createElement("input",{type:o,name:t,className:D()("form-control form-control-lg",{"is-invalid":s}),placeholder:c,value:n,onChange:l}),s&&r.a.createElement("div",{className:"invalid-feedback"},s))};P.defaultProps={type:"text"};var q=P,R=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:"",errors:{}},t.onChange=function(e){return t.setState(Object(S.a)({},e.target.name,e.target.value))},t.onSubmit=function(e,a){var n,r,c,o,l,s;return b.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:if(a.preventDefault(),n=t.state,r=n.name,c=n.email,o=n.phone,""!==r){i.next=5;break}return t.setState({errors:{name:"Name is Required"}}),i.abrupt("return");case 5:if(""!==c){i.next=8;break}return t.setState({errors:{email:"Email is Required"}}),i.abrupt("return");case 8:if(""!==o){i.next=11;break}return t.setState({errors:{phone:"Phone is Required"}}),i.abrupt("return");case 11:return l={name:r,email:c,phone:o},i.next=14,b.a.awrap(y.a.post("http://jsonplaceholder.typicode.com/users",l));case 14:s=i.sent,e({type:"ADD_CONTACT",payload:s.data}),t.setState({name:"",email:"",phone:"",errors:{}}),t.props.history.push("/");case 18:case"end":return i.stop()}}))},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this,a=this.state,t=a.name,n=a.email,c=a.phone,o=a.errors;return r.a.createElement(j,null,(function(a){var l=a.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Add Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.onSubmit.bind(e,l)},r.a.createElement(q,{label:"Name",name:"name",placeholder:"Enter Name..",value:t,onChange:e.onChange,error:o.name}),r.a.createElement(q,{label:"Email",type:"email",name:"email",placeholder:"Enter Email..",value:n,onChange:e.onChange,error:o.email}),r.a.createElement(q,{label:"Phone",name:"phone",placeholder:"Enter Phone..",value:c,onChange:e.onChange,error:o.phone}),r.a.createElement("input",{type:"submit",value:"Add Contact",className:"btn btn-light btn-block"}))))}))}}]),a}(n.Component),_=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:"",errors:{}},t.onChange=function(e){return t.setState(Object(S.a)({},e.target.name,e.target.value))},t.onSubmit=function(e,a){var n,r,c,o,l,s,i;return b.a.async((function(m){for(;;)switch(m.prev=m.next){case 0:if(a.preventDefault(),n=t.state,r=n.name,c=n.email,o=n.phone,""!==r){m.next=5;break}return t.setState({errors:{name:"Name is Required"}}),m.abrupt("return");case 5:if(""!==c){m.next=8;break}return t.setState({errors:{email:"Email is Required"}}),m.abrupt("return");case 8:if(""!==o){m.next=11;break}return t.setState({errors:{phone:"Phone is Required"}}),m.abrupt("return");case 11:return l={name:r,email:c,phone:o},s=t.props.match.params.id,m.next=15,b.a.awrap(y.a.put("http://jsonplaceholder.typicode.com/users/".concat(s),l));case 15:i=m.sent,e({type:"UPDATE_CONTACT",payload:i.data}),t.setState({name:"",email:"",phone:"",errors:{}}),t.props.history.push("/");case 19:case"end":return m.stop()}}))},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e,a,t;return b.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return e=this.props.match.params.id,n.next=3,b.a.awrap(y.a.get("http://jsonplaceholder.typicode.com/users/".concat(e)));case 3:a=n.sent,t=a.data,this.setState({name:t.name,email:t.email,phone:t.phone});case 6:case"end":return n.stop()}}),null,this)}},{key:"render",value:function(){var e=this,a=this.state,t=a.name,n=a.email,c=a.phone,o=a.errors;return r.a.createElement(j,null,(function(a){var l=a.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Edit Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.onSubmit.bind(e,l)},r.a.createElement(q,{label:"Name",name:"name",placeholder:"Enter Name..",value:t,onChange:e.onChange,error:o.name}),r.a.createElement(q,{label:"Email",type:"email",name:"email",placeholder:"Enter Email..",value:n,onChange:e.onChange,error:o.email}),r.a.createElement(q,{label:"Phone",name:"phone",placeholder:"Enter Phone..",value:c,onChange:e.onChange,error:o.phone}),r.a.createElement("input",{type:"submit",value:"Update Contact",className:"btn btn-light btn-block"}))))}))}}]),a}(n.Component),M=function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},"Page 404 Not Found"),r.a.createElement("p",{className:"lead"},"Sorry, That page does not exist"))},I=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={title:"",body:""},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/todos/1").then((function(e){return e.json()})).then((function(a){return e.setState({title:a.title,body:a.body})}))}},{key:"render",value:function(){var e=this.state,a=e.title,t=e.body;return r.a.createElement("div",null,r.a.createElement("h1",null,a),r.a.createElement("p",null,t))}}]),a}(n.Component),L=function(e){function a(){return Object(l.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(C,null,r.a.createElement(p.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(x,{branding:"Contact Manager"}),r.a.createElement("div",{className:"container"},r.a.createElement(h.c,null,r.a.createElement(h.a,{exact:!0,path:"/",component:k}),r.a.createElement(h.a,{exact:!0,path:"/contact/add",component:R}),r.a.createElement(h.a,{exact:!0,path:"/contact/edit/:id",component:_}),r.a.createElement(h.a,{exact:!0,path:"/about",component:A}),r.a.createElement(h.a,{exact:!0,path:"/test",component:I}),r.a.createElement(h.a,{component:M}))))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[37,1,2]]]);
//# sourceMappingURL=main.06d52753.chunk.js.map