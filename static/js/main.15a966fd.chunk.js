(this["webpackJsonpsimple-todo-app"]=this["webpackJsonpsimple-todo-app"]||[]).push([[0],{16:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n(1),c=n.n(a),i=n(9),r=n.n(i);n(16),n.p,n(8);var s=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(e){var n=e.getCLS,o=e.getFID,a=e.getFCP,c=e.getLCP,i=e.getTTFB;n(t),o(t),a(t),c(t),i(t)}))},d=n(7),l=n(2),p=n(3),u=n(5),h=n(4),j=function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){var t=this,e=this.props.todo,n=e.completed,a=e.id,c=e.title;return Object(o.jsxs)("li",{className:"todo-item",children:[Object(o.jsx)("input",{type:"checkbox",checked:n,onChange:function(){return t.props.handleChangeProps(a)}}),Object(o.jsx)("button",{onClick:function(){return t.props.deleteTodoProps(a)},children:"Delete"}),Object(o.jsx)("span",{style:n?{fontStyle:"italic",color:"#d35e0f",opacity:.4,textDecoration:"line-through"}:null,children:c})]})}}]),n}(c.a.Component),b=function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){var t=this;return Object(o.jsx)(o.Fragment,{children:this.props.todos.map((function(e){return Object(o.jsx)(j,{todo:e,handleChangeProps:t.props.handleChangeProps,deleteTodoProps:t.props.deleteTodoProps},e.id)}))})}}]),n}(c.a.Component),f=function(){return Object(o.jsxs)("header",{style:{padding:"20px 0",lineHeight:"2em"},children:[Object(o.jsx)("h1",{style:{fontSize:"25px",marginBottom:"15px"},children:"Simple Todo Todo "}),Object(o.jsx)("p",{style:{fontSize:"19px"},children:"Pink Panther List "})]})},O=n(10),m=function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(l.a)(this,n);for(var o=arguments.length,a=new Array(o),c=0;c<o;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={title:""},t.handleSubmit=function(e){e.preventDefault(),t.props.addTodoProps(t.state.title),t.setState({title:""})},t.onChange=function(e){t.setState(Object(O.a)({},e.target.name,e.target.value))},t}return Object(p.a)(n,[{key:"render",value:function(){return Object(o.jsxs)("form",{onSubmit:this.handleSubmit,className:"form-container",children:[Object(o.jsx)("input",{type:"text",placeholder:"Add stuff",value:this.state.title,name:"title",onChange:this.onChange}),Object(o.jsx)("input",{type:"submit",className:"input-submit",value:"Submit"})]})}}]),n}(a.Component),g=n(19),v=function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(l.a)(this,n);for(var o=arguments.length,a=new Array(o),c=0;c<o;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={todos:[{id:Object(g.a)(),title:"Setup",completed:!0},{id:Object(g.a)(),title:"Develop website",completed:!1},{id:Object(g.a)(),title:"Deploy",completed:!1}]},t.handleChange=function(e){t.setState((function(t){return{todos:t.todos.map((function(t){return t.id===e&&(t.completed=!t.completed),t}))}}))},t.delTodo=function(e){t.setState({todos:Object(d.a)(t.state.todos.filter((function(t){return t.id!==e})))})},t.addTodoItem=function(e){var n={id:Object(g.a)(),title:e,completed:!1};t.setState({todos:[].concat(Object(d.a)(t.state.todos),[n])})},t}return Object(p.a)(n,[{key:"render",value:function(){return Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)(f,{}),Object(o.jsx)(m,{addTodoProps:this.addTodoItem}),Object(o.jsx)(b,{todos:this.state.todos,handleChangeProps:this.handleChange,deleteTodoProps:this.delTodo})]})}}]),n}(c.a.Component);r.a.render(Object(o.jsx)("div",{children:Object(o.jsx)(v,{})}),document.getElementById("root")),s()},8:function(t,e,n){}},[[17,1,2]]]);
//# sourceMappingURL=main.15a966fd.chunk.js.map