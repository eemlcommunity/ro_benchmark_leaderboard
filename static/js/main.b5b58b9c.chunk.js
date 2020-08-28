(this.webpackJsonpro_benchmark_leaderboard=this.webpackJsonpro_benchmark_leaderboard||[]).push([[0],{22:function(e){e.exports=JSON.parse('{"domains":[{"domain":"Text classification","id":"text-classification","tasks":[{"name":"Text classification","id":"text-classification","submissions":9,"datasets":1},{"name":"Sentence classification","id":"sentence-classification"}]},{"domain":"Named entity recognition","id":"named-entity-recognition","tasks":[{"name":"Named entity recognition","id":"named-entity-recognition","submissions":15,"datasets":3}]}]}')},23:function(e){e.exports=JSON.parse('{"tasks":[{"name":"Text classification","id":"text-classification","domainId":"text-classification","description":"Text classification is the task of assigning a sentence or document an appropriate category. The categories depend on the chosen dataset and can range from topics.","submissions":[{"modelName":"Quack-pack and done!","modelId":"qpd-v1","dataset":"MOROCO","datasetId":"moroco","score":0.89},{"modelName":"Bang! You\'re classified!","modelId":"byac","dataset":"MOROCO","datasetId":"moroco","score":0.91}]},{"name":"Sentence classification","id":"sentence-classification","domainId":"text-classification","description":"Sentence classification is the task of assigning a sentence an appropriate category."},{"name":"Named entity recognition","id":"named-entity-recognition","domainId":"named-entity-recognition","description":"Named entity recognition (NER) is the task of tagging entities in text with their corresponding type. Approaches typically use BIO notation, which differentiates the beginning (B) and the inside (I) of entities. O is used for non-entity tokens."}]}')},25:function(e,t,a){e.exports=a(37)},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(13),r=a.n(i),c=a(3),l=a(9),o=a(10),m=a(12),d=a(11),u=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e={href:"/ro_benchmark_leaderboard/task/"+this.props.id,name:this.props.name,submissions:this.props.submissions,datasets:this.props.datasets};return s.a.createElement("div",{className:"col-md4 task-tile"},s.a.createElement("a",{href:e.href},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-xs-4 tile-col"},s.a.createElement("div",{className:"task-logo"})),s.a.createElement("div",{className:"col-xs-8 task-name tile-col"},e.name)),s.a.createElement("hr",null),s.a.createElement("div",{className:"row task-summary"},s.a.createElement("ul",null,s.a.createElement("li",null,e.submissions?e.submissions:"No"," submissions"),s.a.createElement("li",null,e.datasets?e.datasets:"No"," datasets")))))}}]),a}(s.a.Component),p=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e={name:this.props.name,tasks:this.props.tasks,href:"/domain/"+this.props.id};return s.a.createElement("div",{className:"row domain-tile"},s.a.createElement("div",{className:"col-md-12 domain-name"},s.a.createElement("h4",null,e.name)),s.a.createElement("div",{className:"row task-tiles"},e.tasks.slice(0,5).map((function(e){return s.a.createElement(u,{id:e.id,name:e.name,description:e.description,submissions:e.submissions,datasets:e.datasets})}))),e.tasks.length>5&&s.a.createElement("div",{className:"col-md-12 domain-tasks"},s.a.createElement("a",{href:e.href},"See all ",e.tasks.length," tasks")))}}]),a}(s.a.Component),h=a(22),E=function(){return s.a.createElement(s.a.Fragment,null,h.domains.map((function(e){return s.a.createElement(s.a.Fragment,null,s.a.createElement(p,{id:e.id,name:e.domain,tasks:e.tasks}))})))},f=a(23),b=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).taskId=e.match.params.id,n.task=f.tasks.find((function(e){return e.id===n.taskId})),n}return Object(o.a)(a,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("h3",null,this.task.name),s.a.createElement("p",null,this.task.description),this.task.submissions&&s.a.createElement("table",{className:"table table-striped"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("td",null,"Model"),s.a.createElement("td",null,"Dataset"),s.a.createElement("td",null,"Score"))),s.a.createElement("tbody",null,this.task.submissions.map((function(e){var t="/model/"+e.modelId,a="/dataset/"+e.datasetId;return s.a.createElement("tr",null,s.a.createElement("td",null,s.a.createElement("a",{href:t},e.modelName)),s.a.createElement("td",null,s.a.createElement("a",{href:a},e.dataset)),s.a.createElement("td",null,e.score))})))))}}]),a}(s.a.Component),k=function(e){var t=e.location;return s.a.createElement(c.c,{location:t},s.a.createElement(c.a,{path:"/ro_benchmark_leaderboard/task/:id",component:b}),s.a.createElement(c.a,{path:"/",component:E}))},g=a(19),v=a(14),N=function(){return s.a.createElement("svg",{viewBox:"0 0 16 16",width:"16",height:"16"},s.a.createElement("path",{"fill-rule":"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"}))},y=function(){return s.a.createElement("svg",{viewBox:"0 0 16 16",width:"16",height:"16"},s.a.createElement("path",{"fill-rule":"evenodd",d:"M1.5 1.75a.75.75 0 00-1.5 0v12.5c0 .414.336.75.75.75h14.5a.75.75 0 000-1.5H1.5V1.75zm14.28 2.53a.75.75 0 00-1.06-1.06L10 7.94 7.53 5.47a.75.75 0 00-1.06 0L3.22 8.72a.75.75 0 001.06 1.06L7 7.06l2.47 2.47a.75.75 0 001.06 0l5.25-5.25z"}))},x=(a(35),[{text:"Code",url:"https://github.com/eemlcommunity/ro_benchmark_leaderboard",target:"_blank",icon:s.a.createElement(y,null)},{text:"Datasets",url:"/datasets",target:""},{text:"About",url:"/about",target:""}]),O=function(){return s.a.createElement("div",{className:"header-menu"},s.a.createElement("ul",null,x.map((function(e){return s.a.createElement("li",null,s.a.createElement(v.b,{exact:!0,to:e.url,target:e.target},e.icon,s.a.createElement("span",null,e.text)))}))))},I=function(){return s.a.createElement(g.a,{bg:"dark",variant:"dark"},s.a.createElement("div",{className:"logo-wrapper"},s.a.createElement(g.a.Brand,{href:"/"},s.a.createElement(N,null),"RoLa benchmark")),s.a.createElement("div",{className:"main-menu"},s.a.createElement(O,null)))},w=(a(36),function(e){var t=e.location;return s.a.createElement("div",null,s.a.createElement(I,null),s.a.createElement("div",{className:"container main-content"},s.a.createElement(k,{location:t})))});r.a.render(s.a.createElement(v.a,null,s.a.createElement(c.a,{path:"/",component:w})),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.b5b58b9c.chunk.js.map