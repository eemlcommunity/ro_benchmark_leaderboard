(this.webpackJsonpro_benchmark_leaderboard=this.webpackJsonpro_benchmark_leaderboard||[]).push([[0],{25:function(e){e.exports=JSON.parse('{"areas":[{"name":"NLP","tasks":[{"id":"text-classification","name":"Text Classification","datasets":[]},{"id":"ner","name":"NER","datasets":[{"dataset":"RONEC - ROMANIAN NAMED ENTITY CORPUS","submission_count":1},{"dataset":"New NER DATASET (dummy)","submission_count":0}]},{"id":"machine-translation","name":"Machine Translation","datasets":[]},{"id":"tokenization","name":"Tokenization","datasets":[]},{"id":"sentence-segmentation","name":"Sentence Segmentation","datasets":[{"dataset":"Universal Dependencies - Romanian RRT Treebank","submission_count":2}]},{"id":"lemmatization","name":"Lemmatization","datasets":[]},{"id":"pos-tagging","name":"POS Tagging","datasets":[]},{"id":"dependency-parsing","name":"Dependency Parsing","datasets":[]},{"id":"language-modeling","name":"Language Modeling","datasets":[]}]}]}')},26:function(e){e.exports=JSON.parse('{"tasks":[{"area":"NLP","id":"text-classification","task_name":"Text Classification","task_description":"Text classification is the task of assigning a sentence or document an appropriate category. The categories depend on the chosen dataset and can range from topics.","datasets":[]},{"area":"NLP","id":"ner","task_name":"NER","task_description":"Named entity recognition (NER) is the task of tagging entities in text with their corresponding type. Approaches typically use BIO notation, which differentiates the beginning (B) and the inside (I) of entities. O is used for non-entity tokens.","datasets":[{"dataset_id":"ronec-romanian-named-entity-corpus","dataset_name":"RONEC - ROMANIAN NAMED ENTITY CORPUS","metric":"F1","model_name":"dummy system 1","paper_title":"paper title here","paper_link":"http://www.google.com","source_link":"http://www.github.com"}]},{"area":"NLP","id":"machine-translation","task_name":"Machine Translation","task_description":"Machine translation is the task of translating a sentence in a source language to a different target language","datasets":[]},{"area":"NLP","id":"tokenization","task_name":"Tokenization","task_description":"Tokenization is the process of breaking a stream of text up into words, phrases, symbols, or other meaningful elements called tokens. The list of tokens becomes input for further processing such as parsing or text mining.","datasets":[]},{"area":"NLP","id":"sentence-segmentation","task_name":"Sentence Segmentation","task_description":"Sentence segmentation is the task of splitting a sentence into its component phrases.","datasets":[]},{"area":"NLP","id":"lemmatization","task_name":"Lemmatization","task_description":"Lemmatization is the process of identifying the lemma of a given word or sequence of words.","datasets":[]},{"area":"NLP","id":"pos-tagging","task_name":"POS Tagging","task_description":"Part-of-speech tagging (POS tagging) is the task of tagging a word in a text with its part of speech. A part of speech is a category of words with similar grammatical properties.","datasets":[]},{"area":"NLP","id":"dependency-parsing","task_name":"Dependency Parsing","task_description":"Dependency parsing is the task of extracting a dependency parse of a sentence that represents its grammatical structure and defines the relationships between \\"head\\" words and words, which modify those heads.","datasets":[]},{"area":"NLP","id":"language-modeling","task_name":"Language Modeling","task_description":"Language modeling is the task of predicting the next word or character in a document.","datasets":[]}]}')},27:function(e){e.exports=JSON.parse('{"datasets":[{"task":"NER","id":"ronec-romanian-named-entity-corpus","dataset_name":"RONEC - ROMANIAN NAMED ENTITY CORPUS","dataset_description":"markdown description or just text?","dataset_link":"https://github.com/dumitrescustefan/ronec","preferred_metric":"F1","models":[{"model":"dummy system 1","metrics":[["F1",91],["PRECISION",90],["RECALL",92],["XYZ",23467]],"extra_training_data":true,"paper_title":"paper title here","paper_link":"http://www.google.com","source_link":"http://www.github.com","date_month":1,"date_year":2020}]},{"task":"Sentence Segmentation","id":"universal-dependencies-romanian-rrt-treebank","dataset_name":"Universal Dependencies - Romanian RRT Treebank","dataset_description":"","dataset_link":"","preferred_metric":"XYZ","models":[{"model":"dummy system for rrt","metrics":[["ACCURACY",78.67]],"extra_training_data":true,"paper_title":"","paper_link":"","source_link":"http://www.abc.com","date_month":11,"date_year":2018},{"model":"dummy system for rrt 2","metrics":[["ACCURACY",80.01]],"extra_training_data":false,"paper_title":"","paper_link":"","source_link":"http://www.other.com","date_month":12,"date_year":2019}]},{"task":"NER","id":"new-ner-dataset-dummy","dataset_name":"New NER DATASET (dummy)","dataset_description":"","dataset_link":"","preferred_metric":"PRECISION","models":[]}]}')},29:function(e,t,a){e.exports=a(42)},35:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(13),i=a.n(s),l=a(16),c=a(3),o=a(8),d=a(9),m=a(12),u=a(11),p=a(24),h=a(25),k=(a(35),function(){function e(){Object(o.a)(this,e),this.basePath="/ro_benchmark_leaderboard"}return Object(d.a)(e,[{key:"normalizeUrl",value:function(e){return e.toLowerCase()}},{key:"buildTaskUrl",value:function(e){var t=e.id,a=this.basePath+"/task/"+t;return this.normalizeUrl(a)}},{key:"buildDatasetUrl",value:function(e){var t=e.id,a=this.basePath+"/dataset/"+t;return this.normalizeUrl(a)}}],[{key:"taskUrlTemplate",get:function(){return"/task/:id"}},{key:"datasetUrlTemplate",get:function(){return"/dataset/:id"}}]),e}()),E=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).urlBuilder=new k,n.state={activeArea:null},n}return Object(d.a)(a,[{key:"updateactiveArea",value:function(e){var t=this.state.activeArea;this.setState({activeArea:e!==t?e:null})}},{key:"renderDataset",value:function(e){return r.a.createElement("tr",{key:e.dataset},r.a.createElement("td",null,e.dataset),r.a.createElement("td",null,e.submission_count))}},{key:"renderTaskSubmissions",value:function(e){return e.datasets&&0!==e.datasets.length?r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"3"),r.a.createElement("td",null,"datasets")),r.a.createElement("tr",null,r.a.createElement("td",null,"6"),r.a.createElement("td",null,"submissions")))):r.a.createElement("span",null,"No submissions")}},{key:"renderAreaTask",value:function(e){return r.a.createElement("a",{href:this.urlBuilder.buildTaskUrl(e),className:"task-tile-link"},r.a.createElement("div",{className:"task-tile",key:e.name},r.a.createElement("h5",null,e.name),r.a.createElement("div",{className:"task-data"},this.renderTaskSubmissions(e))))}},{key:"renderArea",value:function(e){var t=this,a=this.state.activeArea,n=e.tasks,s=e.name,i=a===s;return r.a.createElement("div",{key:e.name,className:"tile-wrapper"},r.a.createElement("div",{onClick:function(){return t.updateactiveArea(s)},className:"collapse-trigger"},r.a.createElement("h4",null,e.name)),r.a.createElement(p.Collapse,{isOpened:i},r.a.createElement("div",{className:"task-wrapper"},n.map((function(e){return t.renderAreaTask(e)})),r.a.createElement("div",{className:"clear"}))))}},{key:"render",value:function(){var e=this,t=h.areas;if(!this.state.activeArea){var a=t[0];this.state.activeArea=a.name}return t.map((function(t){return e.renderArea(t)}))}}]),a}(r.a.Component),g=a(26),f=function(){return r.a.createElement("svg",{viewBox:"0 0 16 16",width:"16",height:"16"},r.a.createElement("path",{fillRule:"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"}))},_=function(){return r.a.createElement("svg",{viewBox:"0 0 512 512",width:"16",height:"16"},r.a.createElement("path",{fillRule:"evenodd",d:"M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"}))},b=function(){return r.a.createElement("svg",{viewBox:"0 0 512 512",width:"16",height:"16"},r.a.createElement("path",{d:"M428 224H288a48 48 0 01-48-48V36a4 4 0 00-4-4h-92a64 64 0 00-64 64v320a64 64 0 0064 64h224a64 64 0 0064-64V228a4 4 0 00-4-4z"}),r.a.createElement("path",{d:"M419.22 188.59L275.41 44.78a2 2 0 00-3.41 1.41V176a16 16 0 0016 16h129.81a2 2 0 001.41-3.41z"}))},v=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).taskId=e.match.params.id,n.task=g.tasks.find((function(e){return e.id===n.taskId})),n.urlBuilder=new k,n}return Object(d.a)(a,[{key:"renderModelRow",value:function(e){var t=e.dataset_name,a=e.dataset_id,n=e.model_name,s=e.paper_title,i=e.paper_link,l=e.source_link;return r.a.createElement("tr",{key:n},r.a.createElement("td",null,t),r.a.createElement("td",null,n),r.a.createElement("td",null,s),r.a.createElement("td",null,i&&r.a.createElement("a",{href:i,target:"_blank",rel:"noopener noreferrer"},r.a.createElement(b,null))),r.a.createElement("td",null,l&&r.a.createElement("a",{href:l,target:"_blank",rel:"noopener noreferrer"},r.a.createElement(_,null))),r.a.createElement("td",null,r.a.createElement("a",{href:this.urlBuilder.buildDatasetUrl({id:a})},"See all models")))}},{key:"renderTaskDatasets",value:function(e){var t=this;return e&&0!==e.length?r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Dataset"),r.a.createElement("td",null,"Best model"),r.a.createElement("td",null,"Paper title"),r.a.createElement("td",null,"Paper"),r.a.createElement("td",null,"Code"),r.a.createElement("td",null,"\xa0"))),r.a.createElement("tbody",null,e.map((function(e){return t.renderModelRow(e)})))):r.a.createElement("p",null,"There are no submissions for this task.")}},{key:"render",value:function(){var e=this.task.datasets;return r.a.createElement("div",{className:"task-details"},r.a.createElement("h3",null,this.task.task_name),r.a.createElement("p",{className:"task-description"},this.task.task_description),this.renderTaskDatasets(e))}}]),a}(r.a.Component),y=a(27),N=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).datasetId=e.match.params.id,n.dataset=y.datasets.find((function(e){return e.id==n.datasetId})),n.urlBuilder=new k,n}return Object(d.a)(a,[{key:"renderModels",value:function(){new Set}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,this.dataset.dataset_name),r.a.createElement("p",null,this.dataset.dataset_description),r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Source"),r.a.createElement("td",null,r.a.createElement("a",{href:this.dataset.dataset_link,target:"_blank",rel:"noopener noreferer"},this.dataset.dataset_link))),r.a.createElement("tr",null,r.a.createElement("th",null,"Licence"),r.a.createElement("td",null,"MIT")))),r.a.createElement("hr",null),this.renderModels())}}]),a}(r.a.Component),w=function(e){var t=e.location;return r.a.createElement(c.c,{location:t},r.a.createElement(c.a,{exact:!0,path:k.taskUrlTemplate,component:v}),r.a.createElement(c.a,{exact:!0,path:k.datasetUrlTemplate,component:N}),r.a.createElement(c.a,{path:"/",component:E}))},T=a(19),O=(a(40),function(){return r.a.createElement("div",{className:"header-menu"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/eemlcommunity/ro_benchmark_leaderboard",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(_,null),r.a.createElement("span",null,"Code")))))}),A=function(){return r.a.createElement(T.a,{bg:"dark",variant:"dark"},r.a.createElement("div",{className:"logo-wrapper"},r.a.createElement(T.a.Brand,{href:"/ro_benchmark_leaderboard"},r.a.createElement(f,null),"RoLa benchmark")),r.a.createElement("div",{className:"main-menu"},r.a.createElement(O,null)))},R=(a(41),function(e){var t=e.location;return r.a.createElement("div",null,r.a.createElement(A,null),r.a.createElement("div",{className:"container main-content"},r.a.createElement(w,{location:t})))});i.a.render(r.a.createElement(l.a,{basename:"/ro_benchmark_leaderboard"},r.a.createElement(c.a,{path:"/",component:R})),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.1120dbc1.chunk.js.map