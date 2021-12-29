(this["webpackJsonpstarter-postgres-express-react"]=this["webpackJsonpstarter-postgres-express-react"]||[]).push([[0],{39:function(e,t,a){},66:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(31),o=a.n(s),l=(a(39),a(15)),c=a(3),i=a(1),u=a.n(i),d=a(6),m=a.n(d),f=a(7),h=a.n(f),p=a(2),v=a.n(p),E=a(8),b=a.n(E),g=a(9),y=a.n(g),N=a(4),C=a.n(N),R=a(32),w=a.n(R).a.create({baseURL:"http://127.0.0.1:3000/"});w.interceptors.request.use((function(e){return e.headers.Authorization="Bearer ".concat(localStorage.getItem("token")),e}));var k=w;function S(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,r=C()(e);if(t){var n=C()(this).constructor;a=Reflect.construct(r,arguments,n)}else a=r.apply(this,arguments);return y()(this,a)}}var P=function(e){b()(a,e);var t=S(a);function a(e){var r;m()(this,a);return(r=t.call(this,e)).state={post:{title:"",content:""},editMode:!1},r.handleAddPost=r.handleAddPost.bind(v()(r)),r.handleChange=r.handleChange.bind(v()(r)),r.updateAction=r.updateAction.bind(v()(r)),r}return h()(a,[{key:"handleAddPost",value:function(e){e.preventDefault();var t=this.state,a=t.editMode,r=t.post,n=this.props.refreshTable;r&&(a?k.put("/api/posts/".concat(r.id),r).then((function(e){n(),console.log(e)})).catch((function(e){console.log(e)})):k.post("api/posts",r).then((function(e){n(),console.log(e)})).catch((function(e){console.log(e)})))}},{key:"handleChange",value:function(e){var t=this.state.post;t[e.target.id]=e.target.value,this.setState({post:t})}},{key:"updateAction",value:function(e){e?this.setState({post:e,editMode:!0}):this.setState({post:{title:"",content:""},editMode:!1})}},{key:"render",value:function(){var e=this,t=this.state,a=t.editMode,r=t.post;return n.a.createElement("div",{className:"card text-left mb-3"},n.a.createElement("div",{className:"card-body"},n.a.createElement("form",{onSubmit:this.handleAddPost},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"title"},"Title"),n.a.createElement("input",{type:"text",className:"form-control",id:"title","aria-describedby":"title",placeholder:"Enter title",onChange:this.handleChange,value:r.title})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"content"},"Content"),n.a.createElement("textarea",{className:"form-control",id:"content",placeholder:"content",onChange:this.handleChange,value:r.content})),n.a.createElement("div",{className:"btn-group",role:"group","aria-label":""},n.a.createElement("button",{type:"submit",className:"btn btn-primary"},a?"Edit":"Add"),a&&n.a.createElement("button",{type:"button",className:"btn btn-warning",onClick:function(){return e.updateAction()}},"Close")))))}}]),a}(n.a.Component);P.propTypes={refreshTable:u.a.func.isRequired};var T=P;function D(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,r=C()(e);if(t){var n=C()(this).constructor;a=Reflect.construct(r,arguments,n)}else a=r.apply(this,arguments);return y()(this,a)}}var A=function(e){b()(a,e);var t=D(a);function a(e){var r;return m()(this,a),(r=t.call(this,e)).state={posts:[],filter:""},r.handleEditPost=r.handleEditPost.bind(v()(r)),r.handleRemovePost=r.handleRemovePost.bind(v()(r)),r.fetchPosts=r.fetchPosts.bind(v()(r)),r.getByID=r.getByID.bind(v()(r)),r.handleChange=r.handleChange.bind(v()(r)),r.fetchPosts(),r}return h()(a,[{key:"handleEditPost",value:function(e,t){e.preventDefault(),(0,this.props.sendToEdit)(this.state.posts.find((function(e){return e.id===t})))}},{key:"handleRemovePost",value:function(e,t){var a=this;e.preventDefault(),k.delete("/api/posts/".concat(t)).then((function(){a.fetchPosts()})).catch((function(e){console.log(e)}))}},{key:"handleChange",value:function(e){var t=this,a=e.target.value;this.setState({filter:e.target.value},(function(){a?t.getByID():t.fetchPosts()}))}},{key:"getByID",value:function(){var e=this,t=this.state.filter;console.log(t),k.get("/api/posts/".concat(t)).then((function(t){t.data&&e.setState({posts:[t.data]})})).catch((function(e){console.log(e)}))}},{key:"fetchPosts",value:function(){var e=this;k.get("/api/posts").then((function(t){e.setState({posts:t.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.posts,r=t.filter,s=a.map((function(t){return n.a.createElement("tr",{key:t.id},n.a.createElement("th",{scope:"row"},t.id),n.a.createElement("td",null,t.title),n.a.createElement("td",null,t.author),n.a.createElement("td",null,t.content),n.a.createElement("td",null,n.a.createElement("div",{className:"btn-group",role:"group","aria-label":""},n.a.createElement("button",{type:"button",className:"btn btn-warning",onClick:function(a){return e.handleEditPost(a,t.id)}},"Edit"),n.a.createElement("button",{type:"button",className:"btn btn-danger",onClick:function(a){return e.handleRemovePost(a,t.id)}},"Remove"))))}));return n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-body"},n.a.createElement("div",{className:"input-group"},n.a.createElement("div",{className:"input-group-prepend"},n.a.createElement("span",{className:"input-group-text",id:"basic-addon1"},"Filter")),n.a.createElement("input",{type:"text",className:"form-control",placeholder:"ID","aria-label":"ID",value:r,onChange:this.handleChange})),n.a.createElement("table",{className:"table table-hover table-responsive-sm"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",{scope:"col"},"#"),n.a.createElement("th",{scope:"col"},"Title"),n.a.createElement("th",{scope:"col"},"Author"),n.a.createElement("th",{scope:"col"},"Content"),n.a.createElement("th",{scope:"col"},"Actions"))),n.a.createElement("tbody",null,s))))}}]),a}(n.a.Component);A.propTypes={sendToEdit:u.a.func.isRequired};var x=A;function F(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,r=C()(e);if(t){var n=C()(this).constructor;a=Reflect.construct(r,arguments,n)}else a=r.apply(this,arguments);return y()(this,a)}}var I=function(e){b()(a,e);var t=F(a);function a(e){var r;return m()(this,a),(r=t.call(this,e)).sendToEdit=r.sendToEdit.bind(v()(r)),r.refreshTable=r.refreshTable.bind(v()(r)),r.postAddForm=n.a.createRef(),r.postTable=n.a.createRef(),r}return h()(a,[{key:"sendToEdit",value:function(e){this.postAddForm.current.updateAction(e)}},{key:"refreshTable",value:function(e){this.postTable.current.fetchPosts(e)}},{key:"render",value:function(){return n.a.createElement("div",{className:"col"},n.a.createElement(T,{ref:this.postAddForm,refreshTable:this.refreshTable}),n.a.createElement(x,{sendToEdit:this.sendToEdit,ref:this.postTable}))}}]),a}(r.Component),j=a(16),q=a.n(j),L=a(18),B=a.n(L);function M(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,r=C()(e);if(t){var n=C()(this).constructor;a=Reflect.construct(r,arguments,n)}else a=r.apply(this,arguments);return y()(this,a)}}var O=n.a.createContext(),_=function(e){return function(t){return n.a.createElement(O.Consumer,null,(function(a){return n.a.createElement(e,q()({store:a},t))}))}};function U(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,r=C()(e);if(t){var n=C()(this).constructor;a=Reflect.construct(r,arguments,n)}else a=r.apply(this,arguments);return y()(this,a)}}var J=function(e){b()(a,e);var t=U(a);function a(e){var r;m()(this,a);return(r=t.call(this,e)).state={user:{email:"",password:""},formErrors:{}},r.handleSubmit=r.handleSubmit.bind(v()(r)),r.handleChange=r.handleChange.bind(v()(r)),r}return h()(a,[{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var a=this.state,r=a.user,n=a.formErrors,s=this.props,o=s.history,l=s.store;Object.keys(r).forEach((function(e){return t.validateField(e)}));var c=Object.values(n).filter((function(e){return e})).length;r&&!c&&k.post("auth/login",r).then((function(e){var a=e.data;t.setState({error:null}),l.set("user",a.user),localStorage.setItem("token",a.token),o.push("/")})).catch((function(e){t.setState({error:e})}))}},{key:"handleChange",value:function(e){var t=this,a=this.state.user,r=e.target.id,n=e.target.value;a[r]=n,this.setState({user:a},(function(){t.validateField(r,n)}))}},{key:"validateField",value:function(e){var t,a=this.state,r=a.formErrors,n=a.user[e];switch(e){case"email":t=n.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i),r.email=t?"":"Email is invalid";break;case"password":t=n.length>=6,r.password=t?"":"Password is too short"}this.setState({formErrors:r})}},{key:"errorClass",value:function(e){return e?"is-invalid":""}},{key:"render",value:function(){var e=this.state,t=e.user,a=e.formErrors,r=e.error;return n.a.createElement("div",{className:"card text-left mb-3"},n.a.createElement("div",{className:"card-body"},n.a.createElement("form",{onSubmit:this.handleSubmit},r&&n.a.createElement("div",{className:"alert alert-danger"},"Invalid credentials"),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"email"},"Email"),n.a.createElement("input",{type:"email",className:"form-control ".concat(this.errorClass(a.email)),id:"email","aria-describedby":"email",placeholder:"Enter email",onChange:this.handleChange,value:t.email}),a.email&&n.a.createElement("div",{className:"invalid-feedback"},a.email)),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"password"},"Password"),n.a.createElement("input",{type:"password",className:"form-control ".concat(this.errorClass(a.password)),id:"password",placeholder:"Enter password",onChange:this.handleChange,value:t.password}),a.password&&n.a.createElement("div",{className:"invalid-feedback"},a.password)),n.a.createElement("div",{className:"btn-group",role:"group","aria-label":""},n.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Sign In")))))}}]),a}(n.a.Component);J.propTypes={history:u.a.object.isRequired,store:u.a.object.isRequired};var $=_(J);function z(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,r=C()(e);if(t){var n=C()(this).constructor;a=Reflect.construct(r,arguments,n)}else a=r.apply(this,arguments);return y()(this,a)}}var H=function(e){b()(a,e);var t=z(a);function a(e){var r;m()(this,a);return(r=t.call(this,e)).state={user:{email:"",firstName:"",lastName:"",password:"",password2:""},formErrors:{}},r.handleSubmit=r.handleSubmit.bind(v()(r)),r.handleChange=r.handleChange.bind(v()(r)),r}return h()(a,[{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var a=this.state,r=a.user,n=a.formErrors,s=this.props,o=s.history,l=s.store;Object.keys(r).forEach((function(e){return t.validateField(e)}));var c=Object.values(n).filter((function(e){return e})).length;r&&!c&&k.post("auth/register",r).then((function(e){var a=e.data;t.setState({error:null}),l.set("user",a.user),localStorage.setItem("token",a.token),o.push("/")})).catch((function(e){t.setState({error:e})}))}},{key:"handleChange",value:function(e){var t=this,a=this.state.user,r=e.target.id,n=e.target.value;a[r]=n,this.setState({user:a},(function(){t.validateField(r,n)}))}},{key:"validateField",value:function(e){var t,a=this.state,r=a.formErrors,n=a.user,s=n[e];switch(e){case"email":t=s.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i),r.email=t?"":"Email is invalid";break;case"firstName":case"lastName":t=!!s,r[e]=t?"":"Please fill this field";break;case"password":t=s.length>=6,r.password=t?"":"Password is too short";break;case"password2":t=s===n.password,r.password2=t?"":"Password doesn't match"}this.setState({formErrors:r})}},{key:"errorClass",value:function(e){return e?"is-invalid":""}},{key:"render",value:function(){var e=this.state,t=e.user,a=e.formErrors,r=e.error;return n.a.createElement("div",{className:"card text-left mb-3"},n.a.createElement("div",{className:"card-body"},n.a.createElement("form",{onSubmit:this.handleSubmit},r&&n.a.createElement("div",{className:"alert alert-danger"},"Some error occurred"),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"email"},"Email"),n.a.createElement("input",{type:"email",className:"form-control ".concat(this.errorClass(a.email)),id:"email","aria-describedby":"email",placeholder:"Enter email",onChange:this.handleChange,value:t.email}),a.email&&n.a.createElement("div",{className:"invalid-feedback"},a.email)),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"firstName"},"First Name"),n.a.createElement("input",{type:"text",className:"form-control ".concat(this.errorClass(a.firstName)),id:"firstName","aria-describedby":"firstName",placeholder:"Enter first name",onChange:this.handleChange,value:t.firstName}),a.firstName&&n.a.createElement("div",{className:"invalid-feedback"},a.firstName)),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"lastName"},"Last Name"),n.a.createElement("input",{type:"lastName",className:"form-control ".concat(this.errorClass(a.lastName)),id:"lastName","aria-describedby":"lastName",placeholder:"Enter last name",onChange:this.handleChange,value:t.lastName}),a.lastName&&n.a.createElement("div",{className:"invalid-feedback"},a.lastName)),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"password"},"Password"),n.a.createElement("input",{type:"password",className:"form-control ".concat(this.errorClass(a.password)),id:"password",placeholder:"Enter password",onChange:this.handleChange,value:t.password}),a.password&&n.a.createElement("div",{className:"invalid-feedback"},a.password)),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"password2"},"Repeat Password"),n.a.createElement("input",{type:"password",className:"form-control ".concat(this.errorClass(a.password2)),id:"password2",placeholder:"Enter password2",onChange:this.handleChange,value:t.password2}),a.password2&&n.a.createElement("div",{className:"invalid-feedback"},a.password2)),n.a.createElement("div",{className:"btn-group",role:"group","aria-label":""},n.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Sign Up")))))}}]),a}(n.a.Component);H.propTypes={history:u.a.object.isRequired,store:u.a.object.isRequired};var W=_(H),G=a.p+"static/media/logo.103b5fa1.svg";function K(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,r=C()(e);if(t){var n=C()(this).constructor;a=Reflect.construct(r,arguments,n)}else a=r.apply(this,arguments);return y()(this,a)}}var Q=function(e){b()(a,e);var t=K(a);function a(e){var r;return m()(this,a),(r=t.call(this,e)).handleLogout=r.handleLogout.bind(v()(r)),r}return h()(a,[{key:"componentDidMount",value:function(){var e=this.props.store;e.get("user")||k.get("auth/me").then((function(t){var a=t.data;e.set("user",a)}))}},{key:"handleLogout",value:function(){this.props.store.set("user",{}),localStorage.removeItem("token")}},{key:"render",value:function(){var e=this.props.store.get("user");return n.a.createElement("div",{className:"App"},n.a.createElement("header",{className:"App-header"},n.a.createElement("img",{src:G,className:"App-logo",alt:"logo"}),n.a.createElement("h1",{className:"App-title"},"Welcome to React. This demo was modified to include <POSTS> module"),e&&e.id&&n.a.createElement("p",null,"Hello, ",e.firstName," ",e.lastName),n.a.createElement("div",{className:"d-flex justify-content-center"},!e.id&&n.a.createElement(l.b,{to:"/sign_in",className:"btn btn-success mr-2"},"Sign In"),!e.id&&n.a.createElement(l.b,{to:"/sign_up",className:"btn btn-success mr-2"},"Sign Up"),e&&e.id&&n.a.createElement("button",{type:"button",onClick:this.handleLogout,className:"btn btn-danger"},"Logout"))))}}]),a}(n.a.Component);Q.propTypes={store:u.a.object.isRequired};var V=_(Q),X=(a(65),a(66),a(34)),Y=a.n(X),Z=function(e){var t=e.store,a=e.component,r=Y()(e,["store","component"]),s=t.get("user");return n.a.createElement(c.b,q()({},r,{render:function(e){return s&&s.id?n.a.createElement(a,e):n.a.createElement(c.a,{to:{pathname:"/sign_in"}})}}))};Z.propTypes={store:u.a.object.isRequired,component:u.a.any.isRequired};var ee=_(Z),te=function(e){var t=e.store;return t.get("user")?n.a.createElement(l.a,null,n.a.createElement("div",{className:"App"},n.a.createElement(V,null),n.a.createElement("p",{className:"App-intro"},"To get started, edit"," ",n.a.createElement("code",null,"src/App.jsx")," ","and save to reload."),n.a.createElement("div",{className:"container"},n.a.createElement("div",null,n.a.createElement(ee,{exact:!0,path:"/",component:I}),n.a.createElement(c.b,{path:"/sign_in",component:$}),n.a.createElement(c.b,{path:"/sign_up",component:W}))))):(k.get("auth/me").then((function(e){var a=e.data;t.set("user",a)})).catch((function(){t.set("user",{})})),null)};te.propTypes={store:u.a.object.isRequired};var ae,re=(ae=te,function(e){b()(a,e);var t=M(a);function a(e){var r;return m()(this,a),(r=t.call(this,e)).state={get:function(e){return r.state[e]},set:function(e,t){r.setState(B()({},e,t))},remove:function(e){r.setState(B()({},e,void 0))}},r}return h()(a,[{key:"render",value:function(){return n.a.createElement(O.Provider,{value:this.state},n.a.createElement(ae,q()({store:this.state},this.props)))}}]),a}(n.a.Component));o.a.render(n.a.createElement(re,null),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.0f486263.chunk.js.map