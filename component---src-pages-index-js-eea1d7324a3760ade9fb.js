(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{173:function(t,e,i){"use strict";i.r(e);var a=i(33),n=i.n(a),o=i(8),r=i.n(o),s=i(0),l=i.n(s),c=i(177),m=i(64),h=i(30),d=(i(181),i(182),i(190),function(t){function e(){var e;return(e=t.call(this)||this).x=80,e.y=13,e.objX=356,e.objY=10,e.objectObtained=!1,e.missionCompleted=!1,e.canvasRef=l.a.createRef(),e.state={angle:0},e.updateAnimationState=e.updateAnimationState.bind(n()(e)),e.motionFlag=!0,e.motionController="Stop",e.start=e.start.bind(n()(e)),e.forFirstTime=!0,e}r()(e,t);var a=e.prototype;return a.componentDidMount=function(){this.canvasRef.current;this.rAF=requestAnimationFrame(this.updateAnimationState),this.setState({motionFlag:!0}),this.setState({motionController:"Stop Robot"})},a.updateAnimationState=function(){this.setState(function(t){return{angle:t.angle+.1}}),this.rAF=requestAnimationFrame(this.updateAnimationState)},a.componentWillUnmount=function(){cancelAnimationFrame(this.rAF)},a.componentDidUpdate=function(){var t=this.canvasRef.current,e=t.getContext("2d"),i=document.getElementById("mobilrobo"),a=document.getElementById("mobilroboFlip");e.save(),this.state.motionFlag&&(e.clearRect(0,0,t.width,t.height),e.drawImage(i,this.x,this.y,64,64),e.fillStyle="red",e.fillRect(this.objX,this.objY,20,20),300!=this.x||this.objectObtained?this.x<300&&!this.objectObtained?(this.x=this.x+1,e.clearRect(0,0,t.width,t.height),e.drawImage(i,this.x,this.y,64,64),e.fillStyle="red",e.fillRect(this.objX,this.objY,20,20)):this.objectObtained&&300==this.x?(this.x=this.x-1,this.objX=this.objX-72,e.clearRect(0,0,t.width,t.height),e.drawImage(a,this.x,this.y,64,64),e.fillStyle="green",e.fillRect(this.objX,this.objY,20,20)):this.x>80&&this.objectObtained?(this.x=this.x-1,this.objX=this.objX-1,e.clearRect(0,0,t.width,t.height),e.drawImage(a,this.x,this.y,64,64),e.fillStyle="green",e.fillRect(this.objX,this.objY,20,20)):this.x<=80&&this.objectObtained&&(e.clearRect(0,0,t.width,t.height),e.drawImage(a,this.x,this.y,64,64),e.fillStyle="green",e.fillRect(this.objX,this.objY,20,20),this.x=80,this.y=13,this.objX=356,this.objY=10,this.objectObtained=!1,this.missionCompleted=!1):(e.clearRect(0,0,t.width,t.height),e.drawImage(i,this.x,this.y,64,64),e.fillStyle="green",e.fillRect(this.objX,this.objY,20,20),this.objectObtained=!0)),e.restore()},a.start=function(){this.state.motionFlag?(this.setState({motionFlag:!1}),this.setState({motionController:"Start Robot"})):(this.setState({motionFlag:!0}),this.setState({motionController:"Stop Robot"}))},a.render=function(){return l.a.createElement("div",null,l.a.createElement(c.a,{title:"Motivation",keywords:["react","javascript","web"]}),l.a.createElement(m.a,null,"I follow the new developments and interested so much Web Technologies, IoT, Industrie 4.0 and Robotics. I already made many basic projects about automation and robotics,I learned many different system integrations, From my bachelor, I have several experiences, I already joined 2 times AUVSI SUAS Competition, I am now a Master Student that completed my all lectures, I should start my master next October 2019 I am looking at a company for my master thesis."),l.a.createElement("img",{id:"mobilrobo",width:"64",height:"64",style:{display:"none"},src:i(181),alt:"The Scream"}),l.a.createElement("img",{id:"mobilroboFlip",width:"64",height:"64",style:{display:"none"},src:i(182),alt:"The Scream"}),l.a.createElement("div",{id:"container",style:{justifyContent:"center",alignItems:"center",display:"flex"}},l.a.createElement("button",{id:"controls",className:this.state.motionFlag?"inMotion":"inPosition",type:"button",onClick:this.start},this.state.motionController),l.a.createElement("canvas",{ref:this.canvasRef,id:"viewport",width:"500rem",height:"80",style:{border:1,backgroundColor:"#f1f1f1"}}),l.a.createElement("menu",null)),l.a.createElement("br",null),l.a.createElement(h.a,{href:"https://github.com/mutluhanuzmez/uzmez-furkan-website-dev/blob/master/src/pages/index.js "},"Canvas Robot"),l.a.createElement("br",null),l.a.createElement(m.a,null,"I already studied Embedded Systems, Embedded Security, Real Time Programming, Robotics and Advanced Control, Image and Signal Processing during my Master education."),l.a.createElement(m.a,null,"I can work for this subjects,",l.a.createElement("li",null," Factory automation"),l.a.createElement("li",null," Web Applications for robots, industrial systems"),l.a.createElement("li",null," Robot Vision",l.a.createElement("ul",null,l.a.createElement("li",null,"Color Detection"),l.a.createElement("li",null,"Material Sorting"),l.a.createElement("li",null,"Object Recognition"))),l.a.createElement("li",null," Cryptography methods for Embedded system"),l.a.createElement("li",null," Electrical Power System Design"),l.a.createElement("li",null," Electrical Design(HomeAutomation /Solar Systems)")))},e}(l.a.Component));e.default=d},177:function(t,e,i){"use strict";var a=i(178),n=i(0),o=i.n(n),r=i(1),s=i.n(r),l=i(179),c=i.n(l),m=i(18);function h(t){var e=t.description,i=t.lang,n=t.meta,r=t.keywords,s=t.title;return o.a.createElement(m.b,{query:d,render:function(t){var a=s+" | "+t.site.siteMetadata.title,l=e||t.site.siteMetadata.description;return o.a.createElement(c.a,{htmlAttributes:{lang:i},title:s,titleTemplate:"%s | "+t.site.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:a},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:t.site.siteMetadata.author},{name:"twitter:title",content:a},{name:"twitter:description",content:l}].concat(r.length>0?{name:"keywords",content:r.join(", ")}:[]).concat(n)})},data:a})}h.defaultProps={lang:"en",meta:[],keywords:[]},h.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},e.a=h;var d="1025518380"},178:function(t){t.exports={data:{site:{siteMetadata:{title:"Furkan Üzmez",description:"E&E Engineer,Ms.Eng Student-IT",author:"@uzmezfurkan"}}}}},181:function(t,e,i){t.exports=i.p+"static/mobile-6784b722491eb033d3f119f84da23a4a.png"},182:function(t,e,i){t.exports=i.p+"static/mobileFlip-43a6a141348b30aae7513ff12c833e58.png"}}]);
//# sourceMappingURL=component---src-pages-index-js-eea1d7324a3760ade9fb.js.map