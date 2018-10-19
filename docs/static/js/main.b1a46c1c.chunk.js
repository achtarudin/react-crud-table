(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{147:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(12),r=a.n(i),c=(a(76),a(29)),u=a(17),o=a(18),m=a(21),s=a(19),h=a(22),d=a(9),b=a(28),E=a.n(b),g=(a(78),a(80),"Crud Table with React.js"),f=[{id:0,name:"React",github:"facebook"},{id:1,name:"Vue",github:"vuejs"}],v=a(148),O=a(149),p=a(150),j=a(153),y=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.title,a=e.children;return l.a.createElement("div",{className:"container"},l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(v.a,null,l.a.createElement(O.a,null,l.a.createElement(p.a,{md:4,mdOffset:4},l.a.createElement(j.a,{className:"text-center"},l.a.createElement(j.a.Heading,null,l.a.createElement(j.a.Title,{componentClass:"h2",className:"text-center"},t)),l.a.createElement(j.a.Body,null,a))))))}}]),t}(n.Component),N=a(151),S=a(152),C=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.data,a=e.clickEdit,n=e.clickDelete;return l.a.createElement("div",{className:"container"},l.a.createElement(v.a,null,l.a.createElement(O.a,null,l.a.createElement(p.a,{md:6,mdOffset:3},l.a.createElement(N.a,{responsive:!0},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{className:"text-center"},"ID"),l.a.createElement("th",{className:"text-center"},"Name"),l.a.createElement("th",{className:"text-center"},"Github Account"),l.a.createElement("th",null),l.a.createElement("th",null))),l.a.createElement("tbody",null,t.map(function(e,t){return l.a.createElement("tr",{className:"text-center",key:t},l.a.createElement("td",null,t+1),l.a.createElement("td",null,e.name),l.a.createElement("td",null,l.a.createElement("a",{href:"https://github.com/"+e.github},"@",e.github)),l.a.createElement("td",null,l.a.createElement(S.a,{bsSize:"sm",bsStyle:"primary",onClick:function(){return a(t)}},"Edit")),l.a.createElement("td",null,l.a.createElement(S.a,{bsSize:"sm",bsStyle:"danger",onClick:function(){return n(t)}},"Delete")))})))))))}}]),t}(n.Component),k=a(154),G=function(e){var t=e.show,a=e.handleClose,n=e.children;return l.a.createElement("div",null,l.a.createElement(k.a,{show:t,onHide:a},l.a.createElement(k.a.Header,{closeButton:!0},l.a.createElement(k.a.Title,{className:"text-center"},"Edit User")),l.a.createElement(k.a.Body,null,n,l.a.createElement("br",null),l.a.createElement("br",null))))},w=a(157),x=a(156),B=a(155),V=function(e){var t=e.name,a=e.github,n=e.formOnSubmit,i=e.getValidateName,r=void 0===i?null:i,c=e.getValidateGithub,u=void 0===c?null:c,o=e.onChangeName,m=e.onChangeGithub,s=e.nameButton;return l.a.createElement("div",null,l.a.createElement("form",{onSubmit:n},l.a.createElement(w.a,{validationState:r},l.a.createElement(x.a,null,l.a.createElement(x.a.Addon,null,"Name"),l.a.createElement(B.a,{type:"text",value:t,onChange:o}))),l.a.createElement(w.a,{validationState:u},l.a.createElement(x.a,null,l.a.createElement(x.a.Addon,null,"https://github.com/"),l.a.createElement(B.a,{type:"text",value:a,onChange:m}))),l.a.createElement("div",{className:"pull-right"},l.a.createElement(S.a,{bsSize:"sm",type:"submit"},s))))},I=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(s.a)(t).call(this,e))).state={title:g,data:f,name:"",github:"",modal:!1,editName:"",editGithub:"",editId:""},a.formOnSubmit=a.formOnSubmit.bind(Object(d.a)(Object(d.a)(a))),a.onChangeName=a.onChangeName.bind(Object(d.a)(Object(d.a)(a))),a.onChangeGithub=a.onChangeGithub.bind(Object(d.a)(Object(d.a)(a))),a.delete=a.delete.bind(Object(d.a)(Object(d.a)(a))),a.handleClose=a.handleClose.bind(Object(d.a)(Object(d.a)(a))),a.handleShow=a.handleShow.bind(Object(d.a)(Object(d.a)(a))),a.formOnEdit=a.formOnEdit.bind(Object(d.a)(Object(d.a)(a))),a.onEditName=a.onEditName.bind(Object(d.a)(Object(d.a)(a))),a.onEditGithub=a.onEditGithub.bind(Object(d.a)(Object(d.a)(a))),a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"handleClose",value:function(){this.setState({modal:!1})}},{key:"handleShow",value:function(e){var t=this,a=this.state.data;Object(c.a)(a).filter(function(t){return t.id===e}).map(function(e){return t.editUser(e)}),this.setState({modal:!0})}},{key:"editUser",value:function(e){this.setState({editId:e.id,editName:e.name,editGithub:e.github})}},{key:"formOnEdit",value:function(e){var t=this.state,a=t.editName,n=t.editGithub,l=t.editId,i={id:l,name:a,github:n},r=Object(c.a)(this.state.data);r[l]=i,this.setState({data:r}),e.preventDefault(),this.setState({modal:!1}),E()({position:"top-end",type:"success",title:"Your customer has been changes",showConfirmButton:!1,timer:1500})}},{key:"onEditName",value:function(e){this.setState({editName:e.target.value})}},{key:"onEditGithub",value:function(e){this.setState({editGithub:e.target.value})}},{key:"formOnSubmit",value:function(e){var t=this.state,a=t.name,n=t.github,l=this.state.data.length;""!==a?""!==n?(this.addUSer(l,a,n),console.log(this.state.data),E()("Good job!","You added new user!","success")):E()({type:"error",title:"Oops...",text:" Github name is empty!"}):E()({type:"error",title:"Oops...",text:"Name is empty!"}),e.preventDefault()}},{key:"addUSer",value:function(e,t,a){var n=[{id:e,name:t,github:a}],l=Object(c.a)(this.state.data).concat(n);this.setState({data:l}),this.clearInput()}},{key:"clearInput",value:function(){this.setState({name:"",github:""})}},{key:"onChangeName",value:function(e){this.setState({name:e.target.value})}},{key:"onChangeGithub",value:function(e){this.setState({github:e.target.value})}},{key:"getValidateName",value:function(){var e=this.state.name.length;return e>1?"success":e>0?"error":null}},{key:"getValidateGithub",value:function(){var e=this.state.github.length;return e>1?"success":e>0?"error":null}},{key:"delete",value:function(e){var t=Object(c.a)(this.state.data);t.splice(e,1),this.setState({data:t})}},{key:"render",value:function(){var e=this.state,t=e.title,a=e.data,n=e.name,i=e.github,r=e.modal,c=e.editName,u=e.editGithub;return l.a.createElement("div",null,l.a.createElement(y,{title:t},l.a.createElement(V,{formOnSubmit:this.formOnSubmit,getValidateName:this.getValidateName(),name:n,onChangeName:this.onChangeName,getValidateGithub:this.getValidateGithub(),github:i,onChangeGithub:this.onChangeGithub,nameButton:"Add"})),l.a.createElement("br",null),l.a.createElement(C,{data:a,clickEdit:this.handleShow,clickDelete:this.delete}),l.a.createElement(G,{show:r,handleClose:this.handleClose},l.a.createElement(V,{nameButton:"Save",formOnSubmit:this.formOnEdit,name:c,onChangeName:this.onEditName,github:u,onChangeGithub:this.onEditGithub})),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{className:"footer text-center"},l.a.createElement("a",{href:"https://github.com/achtarudin/react-crud-table",className:"btn btn-lg",role:"button"},l.a.createElement("span",{className:"glyphicon glyphicon-barcode","aria-hidden":"true"}))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},71:function(e,t,a){e.exports=a(147)},76:function(e,t,a){},78:function(e,t,a){},80:function(e,t,a){}},[[71,2,1]]]);
//# sourceMappingURL=main.b1a46c1c.chunk.js.map