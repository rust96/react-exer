(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(e,t,a){e.exports=a(50)},40:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(27),s=a.n(c),l=a(17),o=a(14),i=a(15),d=a(8),u=a(9),b=a(11),m=a(10),g=a(12),f=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(b.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={boardOpen:!1,boardName:""},a.toggleCreating=function(){a.setState({boardOpen:!a.state.boardOpen})},a.onNameChange=function(e){a.setState({boardName:e.target.value})},a.saveBoard=function(){a.props.createBoard(a.state.boardName),a.setState({boardName:""})},a}return Object(g.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.boardOpen,n=t.boardName;return a?r.a.createElement("div",{className:"board-creator"},r.a.createElement("p",{className:"board-creator__create"},"\u0421\u043e\u0437\u0434\u0430\u0435\u043c \u0434\u043e\u0441\u043a\u0443..."),r.a.createElement("input",{type:"text",className:"board-creator__input",value:n,onChange:this.onNameChange}),r.a.createElement("div",null,r.a.createElement("button",{className:"button button_cancel",onClick:this.toggleCreating},"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c"),r.a.createElement("button",{className:"button button_save",onClick:function(){return e.saveBoard()}},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"))):r.a.createElement("div",{className:"board-creator"},r.a.createElement("button",{className:"button button_board-create",onClick:this.toggleCreating},"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0434\u043e\u0441\u043a\u0443"))}}]),t}(n.Component),E=Object(o.b)(null,function(e){return{createBoard:function(t){e({type:"CREATE_BOARD",payload:t})}}})(f),p=(a(40),function(e){var t=e.title,a=e.id,n="/boards/".concat(a);return r.a.createElement("li",{className:"board__item"},r.a.createElement(l.b,{className:"board__link",to:n},r.a.createElement("div",{className:"board__wrapper"},r.a.createElement("div",{className:"board__inner"},r.a.createElement("p",null,t)))))}),O=function(e){var t=e.boards;return 0===t.length?r.a.createElement("h1",null,"No desks"):r.a.createElement("ul",{className:"board__list"},t.map(function(e,t){var a=e.id,n=e.title;return r.a.createElement(p,{key:t,title:n,id:a})}))},k=Object(o.b)(function(e){return{boards:e.boards}})(function(e){var t=e.boards;return r.a.createElement("div",null,r.a.createElement("h1",{className:"main-page__title"},"\u0414\u043b\u044f \u043d\u0430\u0447\u0430\u043b\u0430 \u0440\u0430\u0431\u043e\u0442\u044b \u0432\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u043e\u0441\u043a\u0443"),r.a.createElement(E,null),r.a.createElement(O,{boards:t}))}),v=function(){return r.a.createElement("div",{className:"page_404"},r.a.createElement("h1",{className:"title_not-found"},"404"))},j=(a(46),function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(b.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={cellName:"",addMode:!1},a.addNewList=function(){var e=a.props,t=e.createList,n=e.currentBoardId;t(a.state.cellName,n),a.setState({cellName:""})},a.onCellChange=function(e){a.setState({cellName:e.target.value})},a.toggleAddMode=function(){a.setState({addMode:!a.state.addMode})},a}return Object(g.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props.currentBoardId,a=this.state,n=a.addMode,c=a.cellName;return n?r.a.createElement("div",{className:"list-block cell-creator"},r.a.createElement("div",{className:"list-block__inner"},r.a.createElement("input",{type:"text",className:"input-task task",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u043e\u043b\u043e\u043d\u043a\u0438",value:c,onChange:this.onCellChange}),r.a.createElement("div",{className:"flex"},r.a.createElement("button",{className:"button button_green",onClick:function(){return e.addNewList(c,t)}},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u043e\u043b\u043e\u043d\u043a\u0443"),r.a.createElement("button",{className:"button button_close",onClick:this.toggleAddMode})))):r.a.createElement("div",{className:"list-block cell-creator"},r.a.createElement("div",{className:"list-block__inner"},r.a.createElement("button",{className:"button button_add",onClick:this.toggleAddMode},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0435\u0449\u0435 \u043e\u0434\u043d\u0443 \u043a\u043e\u043b\u043e\u043d\u043a\u0443")))}}]),t}(n.Component)),h=(a(47),function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(b.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={taskName:"",addTaskActive:!1},a.toggleAddTask=function(){a.setState({addTaskActive:!a.state.addTaskActive})},a.onTaskChange=function(e){a.setState({taskName:e.target.value})},a.createTask=function(e,t,n){a.props.createTask(e,t,n),a.setState({taskName:""})},a}return Object(g.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.boardId,n=t.listIdx,c=this.state,s=c.addTaskActive,l=c.taskName;return s?r.a.createElement("div",{className:"task-creator"},r.a.createElement("input",{type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438",className:"input-creator",value:l,onChange:this.onTaskChange}),r.a.createElement("div",{className:"flex"},r.a.createElement("button",{className:"button button_green",onClick:function(){return e.createTask(l,a,n)}},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u0434\u0430\u043d\u0438\u0435"),r.a.createElement("button",{className:"button button_close",onClick:this.toggleAddTask}))):r.a.createElement("button",{className:"button button_add",onClick:this.toggleAddTask},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0435\u0449\u0435 \u043e\u0434\u043d\u0443 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443")}}]),t}(n.Component)),N=function(e){function t(){return Object(d.a)(this,t),Object(b.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.listIdx,a=e.idx,n=e.elements,c=e.dragStart,s=e.dragEnter,l=e.dragEnd,o=e.currentDragIdx,i=e.dragMode,d=e.marginHeight,u=e.addList,b=e.lastTask,m=e.task,g=0,f=8;i&&t===u&&(o!==a||b?a===n.length-1&&b&&(f=d):g=d);var E={marginTop:g+"px",marginBottom:f+"px"};return r.a.createElement(r.a.Fragment,{key:a},r.a.createElement("div",{style:E,className:"task",draggable:!0,onDragStart:function(e){return c(e,a,t)},onDragEnter:function(e){return s(e,a,t)},onDragEnd:function(){return l()}},r.a.createElement("p",{className:"task__item"},m)))}}]),t}(n.Component),T=function(e){return e.elements.map(function(t,a){return r.a.createElement(N,Object.assign({},e,{dragStart:e.dragStart,dragEnter:e.dragEnter,dragEnd:e.dragEnd,task:t,idx:a,key:a}))})},_=function(e){return r.a.createElement("span",{className:"task_last",draggable:!0,onDragEnter:e.onDragEnter})},y=(a(48),function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(b.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={currentDragIdx:0,dragMode:!1,marginHeight:0,editListIdx:null,lastTask:!1,rmTask:null,rmList:null,addTask:null,addList:null},a.dragStart=function(e,t,n){a.setState({rmTask:t,rmList:n,marginHeight:e.currentTarget.offsetHeight+20})},a.dragEnter=function(e,t,n){a.setState({dragMode:!0,currentDragIdx:t,lastTask:!1,editListIdx:n,addTask:t})},a.onListDrag=function(e){a.setState({addList:e})},a.onLastTaskEnter=function(e){a.setState({lastTask:!0,addTask:e})},a.dragEnd=function(){var e=a.state,t=e.rmList,n=e.rmTask,r=e.addList,c=e.addTask;a.setState({dragMode:!1}),a.props.dragTask(t,n,r,c,a.props.boardId)},a}return Object(g.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.board,n=a.cells,c=a.id,s=t.createTask;return r.a.createElement("div",{className:"flex"},n.map(function(t,a){return function(t,a,n,c){var s=t.title,l=t.elements;return r.a.createElement("div",{key:a,className:"list-block",onDragEnter:function(){return e.onListDrag(a)}},r.a.createElement("div",{className:"list-block__inner"},r.a.createElement("div",{className:"tasks"},r.a.createElement("p",{className:"list-title"},s),r.a.createElement(T,Object.assign({elements:l,listIdx:a,dragStart:e.dragStart,dragEnter:e.dragEnter,dragEnd:e.dragEnd},e.state)),r.a.createElement(_,{onDragEnter:function(){return e.onLastTaskEnter(l.length)}})),r.a.createElement(h,{boardId:n,listIdx:a,createTask:c})))}(t,a,c,s)}))}}]),t}(n.Component)),C=Object(o.b)(function(e){return{boards:e.boards}},function(e){return{createList:function(t,a){e(function(e,t){return{type:"CREATE_LIST",payload:e,boardId:t}}(t,a))},createTask:function(t,a,n){e(function(e,t,a){return{type:"CREATE_TASK",payload:e,boardId:t,listIdx:a}}(t,a,n))},dragTask:function(t,a,n,r,c){e(function(e,t,a,n,r){return{type:"DRAG_TASK",rmList:e,rmTask:t,addList:a,addTask:n,boardId:r}}(t,a,n,r,c))}}})(function(e){var t=e.match.params.id,a=e.createTask,n=e.dragTask,c=e.createList,s=e.boards.find(function(e){return+t===e.id});return s?r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"flex list-wrapper"},r.a.createElement(y,{board:s,createTask:a,dragTask:n,boardId:t}),r.a.createElement(j,{currentBoardId:t,createList:c,cells:s.cells}))):r.a.createElement(v,null)}),S=(a(49),function(){return r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/",component:k,exact:!0}),r.a.createElement(i.a,{path:"/boards/",component:C,exact:!0}),r.a.createElement(i.a,{path:"/boards/:id",component:C}),r.a.createElement(i.a,{component:v}))}),I=a(19),A=a(30),x=a(1),L=a(4),D={boards:[{id:0,title:"\u0414\u043e\u0441\u043a\u0430 \u043d\u043e\u043c\u0435\u0440 1",cells:[{title:"\u041f\u043b\u0430\u043d \u043d\u0430 \u043c\u0435\u0441\u044f\u0446",elements:["\u041f\u043e\u043f\u0430\u0441\u0442\u044c \u043d\u0430 \u0441\u0442\u0430\u0436\u0438\u0440\u043e\u0432\u043a\u0443 \u0432\u043a","\u041f\u0440\u043e\u0439\u0442\u0438 \u043a\u0443\u0440\u0441 \u043f\u043e React","\u0417\u0430\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f \u043d\u0430 \u043a\u0443\u0440\u0441\u044b \u0430\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u043e\u0433\u043e \u044f\u0437\u044b\u043a\u0430, \u0447\u0442\u043e\u0431\u044b \u0443\u0435\u0445\u0430\u0442\u044c \u0436\u0438\u0442\u044c \u0432 \u041b\u043e\u043d\u0434\u043e\u043d","\u0421\u0434\u0435\u043b\u0430\u0442\u044c \u0431\u0435\u043a\u0435\u043d\u0434 \u0441\u0432\u043e\u0435\u0433\u043e \u0441\u0430\u0439\u0442\u0430 \u043d\u0430 node.js","\u041f\u043e\u043d\u044f\u0442\u044c, \u0447\u0442\u043e \u0442\u044b \u0444\u0440\u043e\u043d\u0442\u0435\u043d\u0434\u0435\u0440 \u0438 \u0431\u0435\u043a\u0435\u043d\u0434 \u043d\u0435 \u043f\u0438\u0448\u0435\u0448\u044c","\u0420\u0430\u0441\u0441\u0442\u0440\u043e\u0438\u0442\u044c\u0441\u044f","\u041d\u0430\u0447\u0430\u0442\u044c \u0443\u0447\u0438\u0442\u044c \u0431\u0435\u043a\u0435\u043d\u0434?"]},{title:"\u041f\u043b\u0430\u043d \u043d\u0430 \u0434\u0435\u043d\u044c",elements:["\u041e\u0442\u0440\u0435\u0444\u0430\u043a\u0442\u043e\u0440\u0438\u0442\u044c \u043a\u043e\u0434","\u0417\u0430\u0431\u0440\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0442\u0443\u0440 \u043d\u0430 \u0441\u0443\u0431\u0431\u043e\u0442\u0443","\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u044c localStorage, \u0447\u0442\u043e\u0431\u044b \u0447\u0435\u043b\u043e\u0432\u0435\u043a, \u043f\u0440\u043e\u0432\u0435\u0440\u044f\u044e\u0449\u0438\u0439 \u044d\u0442\u0443 \u0440\u0430\u0431\u043e\u0442\u0443 (\u043d\u0430\u0434\u0435\u044e\u0441\u044c \u0442\u0430\u043a\u043e\u0439 \u0431\u0443\u0434\u0435\u0442 :D), \u043d\u0435 \u043f\u0430\u0440\u0438\u043b\u0441\u044f \u043d\u0430 \u0441\u0447\u0435\u0442 \u0442\u043e\u0433\u043e, \u0447\u0442\u043e\u0431\u044b \u0441\u0430\u043c\u043e\u043c\u0443 \u0432\u0441\u0435 \u0437\u0430\u043f\u043e\u043b\u043d\u044f\u0442\u044c","\u041d\u043e \u044d\u0442\u043e \u043a\u043e\u043d\u0435\u0447\u043d\u043e-\u0436\u0435 \u043c\u043e\u0436\u043d\u043e \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0438 \u0441\u0430\u043c\u043e\u043c\u0443, \u0435\u0441\u043b\u0438 \u0435\u0441\u0442\u044c \u0436\u0435\u043b\u0430\u043d\u0438\u0435"]}]}]},w=function(){try{var e=localStorage.getItem("state");return null===e?D:JSON.parse(e)}catch(t){return}}(),B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_BOARD":return function(e,t){var a={id:e.boards.length,title:t.payload,cells:[]};return Object(L.a)({},e,{boards:[].concat(Object(x.a)(e.boards),[a])})}(e,t);case"CREATE_LIST":return function(e,t){var a=t.boardId,n=t.payload,r=e.boards.find(function(e){return e.id===+a}),c={title:n,elements:[]},s=Object(L.a)({},r,{cells:[].concat(Object(x.a)(r.cells),[c])}),l=[].concat(Object(x.a)(e.boards.slice(0,parseInt(a))),[s],Object(x.a)(e.boards.slice(parseInt(a)+1)));return Object(L.a)({},e,{boards:l})}(e,t);case"CREATE_TASK":return function(e,t){var a=t.boardId,n=t.listIdx,r=t.payload,c=e.boards.find(function(e){return e.id===+a}).cells[n].elements,s=e.boards.find(function(e){return e.id===+a}).cells,l=[].concat(Object(x.a)(c),[r]),o=e.boards.find(function(e){return e.id===+a}).cells[n],i=Object(L.a)({},o,{elements:l}),d=[].concat(Object(x.a)(s.slice(0,n)),[i],Object(x.a)(s.slice(n+1))),u=e.boards.find(function(e){return e.id===+a}),b=Object(L.a)({},u,{cells:d});return Object(L.a)({},e,{boards:[].concat(Object(x.a)(e.boards.slice(0,a)),[b],Object(x.a)(e.boards.slice(a+1)))})}(e,t);case"DRAG_TASK":return function(e,t){var a=t.rmList,n=t.rmTask,r=t.addList,c=t.addTask,s=t.boardId;if(a===r&&n===c)return e;var l=e.boards[s].cells[a].elements[n],o=e.boards[s].cells[r].elements,i=e.boards[s].cells[r],d=[];d=0===c?[l].concat(Object(x.a)(o)):c===o.length?[].concat(Object(x.a)(o),[l]):[].concat(Object(x.a)(o.slice(0,c)),[l],Object(x.a)(o.slice(c)));var u=Object(L.a)({},i,{elements:d}),b=[].concat(Object(x.a)(e.boards[s].cells.slice(0,r)),[u],Object(x.a)(e.boards[s].cells.slice(r+1))),m=Object(L.a)({},e.boards[s],{cells:b}),g=[].concat(Object(x.a)(e.boards.slice(0,s)),[m],Object(x.a)(e.boards.slice(s+1))),f=Object(L.a)({},e,{boards:g}),E=f.boards[s].cells[a],p=[];p=a===r&&n<c?[].concat(Object(x.a)(E.elements.slice(0,n)),Object(x.a)(E.elements.slice(n+1))):a===r&&n>c?[].concat(Object(x.a)(E.elements.slice(0,n+1)),Object(x.a)(E.elements.slice(n+2))):0===n?Object(x.a)(E.elements.slice(n+1)):n===E.elements.length-1?Object(x.a)(E.elements.slice(0,n)):[].concat(Object(x.a)(E.elements.slice(0,n)),Object(x.a)(E.elements.slice(n+1)));var O=Object(L.a)({},E,{elements:p}),k=[].concat(Object(x.a)(f.boards[s].cells.slice(0,a)),[O],Object(x.a)(f.boards[s].cells.slice(a+1))),v=Object(L.a)({},f.boards[s],{cells:k}),j=[].concat(Object(x.a)(f.boards.slice(0,s)),[v],Object(x.a)(f.boards.slice(s+1)));return Object(L.a)({},e,{boards:j})}(e,t);default:return e}},M=Object(I.c)(B,Object(I.a)(A.a));M.subscribe(function(){!function(e){try{var t=JSON.stringify(e);localStorage.setItem("state",t)}catch(a){console.log(a)}}(M.getState())});var R=M;s.a.render(r.a.createElement(o.a,{store:R},r.a.createElement(l.a,null,r.a.createElement(S,null))),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.4903bec3.chunk.js.map