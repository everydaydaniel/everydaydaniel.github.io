(this.webpackJsonpgoodyb=this.webpackJsonpgoodyb||[]).push([[0],{19:function(e,t,a){},25:function(e,t,a){e.exports=a(38)},37:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(20),r=a.n(s),o=a(5),l=a(6),m=a(8),i=a(7),u=a(9),h=a(4),d=a(11),E=function(){return c.a.createElement("div",{className:"container"},"About Page")},p=function(e){return c.a.createElement("div",{className:"container header-wrap"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"two-thirds column header-col"},c.a.createElement(h.b,{to:"/"},c.a.createElement("img",{id:"goody-boi",className:"left header-item",src:"images/goody-boi.svg",alt:"goody boy logo"}),c.a.createElement("h1",{className:"goody-header-text header-item"},"\xa0\xa0Goody Bag"))),c.a.createElement("div",{className:"one-third column right header-col"},c.a.createElement("img",{onClick:e.showMenu,id:"burger-menu",className:"header-item",src:"images/goody-menu.svg",alt:"expand menu"}))))},b=function(){return c.a.createElement("div",{className:"container home-page"},c.a.createElement("h1",null,"We are an Austin-based print studio offering design and merchandise for artists, bands and organizations."))},f=function(e){return c.a.createElement("div",{className:"".concat((t=e.location.pathname,"/quote"===t?"no-show":"")," container footer-wrap")},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"one-third column left footer-col"},c.a.createElement(h.b,{to:"/contact"},c.a.createElement("img",{className:"footer-img",alt:"contact us",src:"images/goody-mail.svg"}))),c.a.createElement("div",{className:"two-thirds column footer-col right"},c.a.createElement(h.b,{to:"/quote"},c.a.createElement("img",{className:"footer-img footer-item float-right",alt:"get a quote",src:"images/goody-arrow.svg"}),c.a.createElement("h1",{className:"goody-footer-text footer-item float-right"},"Get a Quote \xa0")))));var t},g=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(a=Object(m.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(c)))).getMenuState=function(){return a.props.menuState.menu?"":"no-show"},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"".concat(this.getMenuState()," menu-overlay")},c.a.createElement("div",{className:"container header-wrap"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"11 column right menu-col"},c.a.createElement("img",{onClick:this.props.showMenu,id:"close-menu",className:"header-item",src:"images/goody-close.svg",alt:"close menu"})))),c.a.createElement("div",{className:"row menu-option"},c.a.createElement(h.b,{onClick:this.props.showMenu,to:"/quote"},c.a.createElement("h2",null,"Quote"))),c.a.createElement("div",{className:"container menu-options-wrapper"},c.a.createElement("div",{className:"row menu-option"},c.a.createElement(h.b,{onClick:this.props.showMenu,to:"/about"},c.a.createElement("h2",null,"About"))),c.a.createElement("div",{className:"row menu-option"},c.a.createElement(h.b,{onClick:this.props.showMenu,to:"/contact"},c.a.createElement("h2",null,"Contact")))))}}]),t}(c.a.Component),v=function(){return c.a.createElement("div",{className:"container"},"Contact Page")},N=a(23),S=(a(19),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(i.a)(t).call(this,e))).changeCheckState=function(){a.setState({checked:!a.state.checked},(function(){a.props.updateState(a.props.stateKey,a.props.name,a.state.checked)}))},a.state={checked:!1},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return this.state.checked?c.a.createElement("img",{className:"checkbox",id:this.props.name,alt:"checked box",value:"true",onClick:this.changeCheckState,src:"images/font-check.svg"}):c.a.createElement("img",{className:"checkbox",id:this.props.name,alt:"unchecked box",value:"false",onClick:this.changeCheckState,src:"images/font-uncheck.svg"})}}]),t}(c.a.Component)),x=a(24),k=a.n(x),y={SERVICE_ID:"goody_bag_email",USER_ID:"user_ii2AGhcG0hUukoNlbQ1tO",TEMPLATE_ID:"template_WBPDRPzX"},C=function(e,t,a){var n={name:e.name,email:e.email,body:e.body,services:JSON.stringify(e.services),objects:JSON.stringify(e.objects),colors:JSON.stringify(e.colors),quantity:JSON.stringify(e.quantity)};k.a.send(y.SERVICE_ID,y.TEMPLATE_ID,n,y.USER_ID).then((function(e){t()}),(function(e){a()}))},w=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(i.a)(t).call(this,e))).submitForm=function(e){var t=!1;e.preventDefault();if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(a.state.email)){var n=a.state.errors;n.emailError=c.a.createElement("span",{className:"error-message"},"\xa0 *please enter a valid email*"),a.setState(n),t=!0}t||(a.props.sentMail(),C(a.state,a.props.mailSuccess,a.props.mailError))},a.handleChange=function(e){a.setState(Object(N.a)({},e.target.name,e.target.value))},a.setCheckboxState=function(e,t,n){var c=a.state[e];c[t]=n,console.log("return obj setCheckboxState:",c),a.setState(c)},a.state={errors:{emailError:""},name:"",email:"",body:"",services:{},objects:{},colors:{},quantity:{}},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement("div",{className:"container"},c.a.createElement("form",null,c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"one-half column form-inputs text-inputs"},c.a.createElement("h2",null,"Get a Quote"),c.a.createElement("div",{className:"text-input"},c.a.createElement("label",{className:"input-labels"},"Name",c.a.createElement("br",null),c.a.createElement("input",{type:"text",name:"name",value:this.state.name,onChange:function(t){return e.handleChange(t)},autoComplete:"false"}))),c.a.createElement("div",{className:"text-input"},c.a.createElement("label",{className:"input-labels"},"Email",c.a.createElement("br",null),c.a.createElement("input",{type:"email",name:"email",value:this.state.email,onChange:function(t){return e.handleChange(t)},autoComplete:"false"}))),this.state.errors.emailError,c.a.createElement("div",{className:"text-input"},c.a.createElement("label",{className:"input-labels"},"Description",c.a.createElement("br",null),c.a.createElement("input",{type:"text",name:"body",value:this.state.body,onChange:function(t){return e.handleChange(t)},autoComplete:"false"})))),c.a.createElement("div",{className:"one-half column form-inputs checkbox-inputs"},c.a.createElement("div",{className:"full-width"},c.a.createElement("h3",null,"Services"),c.a.createElement("div",{className:"checkbox-wrap"},c.a.createElement(S,{name:"print",stateKey:"services",updateState:this.setCheckboxState})," ",c.a.createElement("span",{className:"checkbox-text"},"Print"),c.a.createElement(S,{name:"design",stateKey:"services",updateState:this.setCheckboxState})," ",c.a.createElement("span",{className:"checkbox-text"},"Design"),c.a.createElement(S,{name:"fun",stateKey:"services",updateState:this.setCheckboxState})," ",c.a.createElement("span",{className:"checkbox-text"},"Fun"))),c.a.createElement("div",{className:"full-width"},c.a.createElement("h3",null,"Objects"),c.a.createElement("div",{className:"checkbox-wrap"},c.a.createElement(S,{name:"paper",stateKey:"objects",updateState:this.setCheckboxState})," ",c.a.createElement("span",{className:"checkbox-text"},"Paper"),c.a.createElement(S,{name:"totes",stateKey:"objects",updateState:this.setCheckboxState})," ",c.a.createElement("span",{className:"checkbox-text"},"Totes"),c.a.createElement(S,{name:"shirts",stateKey:"objects",updateState:this.setCheckboxState})," ",c.a.createElement("span",{className:"checkbox-text"},"Shirts"))),c.a.createElement("div",{className:"full-width"},c.a.createElement("h3",null,"Colors"),c.a.createElement("div",{className:"checkbox-wrap"},c.a.createElement(S,{name:"one",stateKey:"colors",updateState:this.setCheckboxState})," ",c.a.createElement("span",{className:"checkbox-text"},"1"),c.a.createElement(S,{name:"two",stateKey:"colors",updateState:this.setCheckboxState})," ",c.a.createElement("span",{className:"checkbox-text"},"2"),c.a.createElement(S,{name:"three",stateKey:"colors",updateState:this.setCheckboxState})," ",c.a.createElement("span",{className:"checkbox-text"},"3"),c.a.createElement(S,{name:"four",stateKey:"colors",updateState:this.setCheckboxState})," ",c.a.createElement("span",{className:"checkbox-text"},"4"))),c.a.createElement("div",{className:"full-width"},c.a.createElement("h3",null,"Quantity"),c.a.createElement("div",{className:"checkbox-wrap"},c.a.createElement(S,{name:"small-order",stateKey:"quantity",updateState:this.setCheckboxState})," ",c.a.createElement("span",{className:"checkbox-text"},"1-50"),c.a.createElement(S,{name:"medium-order",stateKey:"quantity",updateState:this.setCheckboxState})," ",c.a.createElement("span",{className:"checkbox-text"},"51-100"),c.a.createElement(S,{name:"large-order",stateKey:"quantity",updateState:this.setCheckboxState})," ",c.a.createElement("span",{className:"checkbox-text"},"More"))))),c.a.createElement("div",{className:"row right submit-wrap"},c.a.createElement("button",{onClick:this.submitForm},c.a.createElement("img",{className:"footer-img footer-item float-right",alt:"get a quote",src:"images/goody-arrow.svg"}),c.a.createElement("h1",{className:"goody-footer-text footer-item float-right"},"Submit"))))))}}]),t}(c.a.Component),j=function(){return c.a.createElement("div",null,"Success")},O=function(){return c.a.createElement("div",null,"Loading.....")},M=function(){return c.a.createElement("div",null,"email error")},K=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(i.a)(t).call(this,e))).sentMail=function(){a.setState({sent:!0})},a.mailSuccess=function(){a.setState({success:!0}),a.mailDone()},a.mailError=function(){a.setState({error:!0}),a.mailDone()},a.mailDone=function(){a.setState({done:!0})},a.state={sent:!1,done:!1,success:!1,error:!1},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return this.state.sent?this.state.sent&&!this.state.done?c.a.createElement(O,null):this.state.sent&&this.state.done?this.state.success?c.a.createElement(j,null):c.a.createElement(M,null):void 0:c.a.createElement(w,{sentMail:this.sentMail,mailSuccess:this.mailSuccess,mailError:this.mailError})}}]),t}(c.a.Component),q=(a(37),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(i.a)(t).call(this,e))).changeMenuState=function(e){a.state.menu?a.setState({menu:!1}):a.setState({menu:!0})},a.state={menu:!1},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{id:"app-wrapper"},c.a.createElement(h.a,null,c.a.createElement(g,{menuState:this.state,showMenu:this.changeMenuState}),c.a.createElement(p,{showMenu:this.changeMenuState}),c.a.createElement(d.a,{path:"/",exact:!0,component:b}),c.a.createElement(d.a,{path:"/quote",exact:!0,component:K}),c.a.createElement(d.a,{path:"/contact",exact:!0,component:v}),c.a.createElement(d.a,{path:"/about",exact:!0,component:E}),c.a.createElement(d.a,{component:f})))}}]),t}(c.a.Component));r.a.render(c.a.createElement(q,null),document.querySelector("#root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.9cfdc77d.chunk.js.map