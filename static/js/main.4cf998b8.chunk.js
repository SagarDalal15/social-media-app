(this["webpackJsonpsocial-app"]=this["webpackJsonpsocial-app"]||[]).push([[0],{103:function(e,t,a){},104:function(e,t,a){},105:function(e,t,a){"use strict";a.r(t);var n=a(4),c=a(1),r=a(17),s=a.n(r),o=(a(82),a(9)),i=a(140),l=a(18),u=a(20),d=a.n(u),j=a(27),p=Object(c.createContext)(),b=function(e){var t=Object(c.useState)(null),a=Object(o.a)(t,2),r=a[0],s=a[1];return Object(n.jsx)(p.Provider,{value:{user:[r,s]},children:e.children})},m=a(34),f=m.a.initializeApp({apiKey:"AIzaSyBps2dAYpBCMSfkSp9Pb9g0uB8B4uavrpo",authDomain:"reactsocialapptutorial.firebaseapp.com",projectId:"reactsocialapptutorial",storageBucket:"reactsocialapptutorial.appspot.com",messagingSenderId:"1071064469720",appId:"1:1071064469720:web:d8358c841243c084c447ad"}).firestore(),h=m.a.auth(),g=m.a.storage(),O=new m.a.auth.GoogleAuthProvider,x=function(){var e=Object(j.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.signInWithPopup(O).then((function(e){t=e.user})).catch((function(e){console.log(e.message)}));case 2:return e.abrupt("return",t);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(j.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.signOut().then((function(){t=!0})).catch((function(e){console.log(e.message)}));case 2:return e.abrupt("return",t);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(j.a)(d.a.mark((function e(t,a){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.createUserWithEmailAndPassword(t,a).then((function(e){n=e.user})).catch((function(e){e.code,e.message;return e}));case 2:return e.abrupt("return",n);case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),k=function(){var e=Object(j.a)(d.a.mark((function e(t,a){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.signInWithEmailAndPassword(t,a).then((function(e){n=e.user})).catch((function(e){e.code,e.message;return e}));case 2:return e.abrupt("return",n);case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();a(87);function _(){var e=Object(o.a)(Object(c.useContext)(p).user,2)[1],t=Object(l.f)(),a=function(){var a=Object(j.a)(d.a.mark((function a(){var n;return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,x();case 2:(n=a.sent)&&(localStorage.setItem("user",n),e(n),t.push("/home"));case 4:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();return Object(n.jsx)("div",{onClick:a,className:"signInBtn"})}function w(e){var t=e.username,a=e.caption;return Object(n.jsx)("div",{className:"comment",children:Object(n.jsxs)("p",{children:[Object(n.jsx)("span",{style:{fontWeight:"600",marginRight:"4px"},children:t}),a]})})}a(92);var C=Object(c.createContext)(),y=function(e){var t=Object(c.useState)(!1),a=Object(o.a)(t,2),r=a[0],s=a[1];return Object(n.jsx)(C.Provider,{value:{DarkMode:[r,s]},children:e.children})};function S(e){var t=e.comments,a=e.id,r=Object(c.useState)(""),s=Object(o.a)(r,2),i=s[0],l=s[1],u=Object(o.a)(Object(c.useContext)(p).user,2),d=u[0],j=(u[1],Object(c.useState)(t||[])),b=Object(o.a)(j,2),m=b[0],h=(b[1],Object(o.a)(Object(c.useContext)(C).DarkMode,2)),g=h[0],O=(h[1],"commentInput__btn"),x="commentInput__textarea";g&&(x="commentInput__textarea dark",O="commentInput__btn dark");return Object(n.jsxs)("div",{className:"commentInput",children:[Object(n.jsx)("textarea",{className:x,rows:"1",placeholder:"write a comment..",value:i,onChange:function(e){return l(e.target.value)}}),Object(n.jsx)("button",{onClick:function(){""!==i&&(m.push({comment:i,username:d.email.replace("@gmail.com","").toLowerCase()}),f.collection("posts").doc(a).update({comments:m}).then((function(){l(""),console.log("comment added")})).catch((function(e){console.log("Error ".concat(e))})))},className:O,children:"Post"})]})}a(93),a(94),a(95);var I=a(133),P=a.p+"static/media/sun.919fd8c1.svg",U=a.p+"static/media/moon.cf257b45.svg";function L(){var e=Object(o.a)(Object(c.useContext)(C).DarkMode,2),t=e[0],a=e[1],r="darkmodebtn-image";return Object(n.jsx)("div",{className:"darkmode-btn",children:Object(n.jsx)(I.a,{onClick:function(){r="darkmodebtn-image dark",a(!t)},className:"darkmodebtn-icon",children:Object(n.jsx)("img",{className:r,src:t?U:P})})})}var D=a.p+"static/media/appicon2.12aa051e.svg",M=a.p+"static/media/blank-profile.7a6a6c54.webp";function E(){var e=Object(o.a)(Object(c.useContext)(p).user,2),t=e[0],a=(e[1],Object(o.a)(Object(c.useContext)(C).DarkMode,2)),r=a[0],s=(a[1],Object(l.f)()),i=function(){var e=Object(j.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v();case 2:e.sent&&(localStorage.removeItem("user"),s.push("/social-media-app/social-media-app/"));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u="navbar";return r&&(u="navbar dark"),Object(n.jsxs)("div",{className:u,children:[Object(n.jsxs)("div",{className:"heading",children:[Object(n.jsx)("img",{style:{height:"40px",marginRight:"10px"},src:D}),"Social App",Object(n.jsx)("div",{className:"navbar-darkmode",children:Object(n.jsx)(L,{})})]}),t&&t.photoURL?Object(n.jsxs)("div",{onClick:i,className:"logged-in",children:[Object(n.jsx)("img",{className:"navbar__img",src:t.photoURL}),"Log out"]}):t&&Object(n.jsxs)("div",{onClick:i,className:"logged-in",children:[Object(n.jsx)("img",{className:"navbar__img",src:M}),"Log out"]})]})}var B=a(8),R=a(139),F=a(137),A=a(138),T=Object(c.createContext)({notification:null,showNotification:function(e){},hideNotification:function(){}});function W(e){var t=Object(c.useState)(),a=Object(o.a)(t,2),r=a[0],s=a[1];Object(c.useEffect)((function(){if(r&&("success"===r.status||"error"===r.status)){var e=setTimeout((function(){s(null)}),3e3);return function(){clearTimeout(e)}}}),[r]);var i={notification:r,showNotification:function(e){s(e)},hideNotification:function(){s(null)}};return Object(n.jsx)(T.Provider,{value:i,children:e.children})}var G=T,z=(a(96),"#C3C4C4"),J="rgb(68, 127, 255)",K=Object(B.a)({root:{"& label.Mui-focused":{color:J},"& .MuiInput-underline:after":{borderBottomColor:J},"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:z},"&:hover fieldset":{borderColor:J},"&.Mui-focused fieldset":{borderColor:J}}}})(R.a);function Y(){var e=Object(o.a)(Object(c.useContext)(p).user,2),t=(e[0],e[1]),a=Object(c.useContext)(G),r=Object(o.a)(Object(c.useContext)(C).DarkMode,2),s=r[0],i=(r[1],Object(c.useState)("")),u=Object(o.a)(i,2),b=u[0],m=u[1],f=Object(c.useState)(""),h=Object(o.a)(f,2),g=h[0],O=h[1],x=Object(l.f)(),v="authform-textfield",_="authform-signin-button",w="authform-signup-button";s&&(v="authform-textfield dark",_="authform-signin-button dark",w="authform-signup-button dark",z="white",J="white");var y=function(){var e=Object(j.a)(d.a.mark((function e(n){var c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),a.showNotification({title:"Please wait!",message:"Getting things ready...",status:"pending"}),e.prev=2,e.next=5,N(b,g);case 5:(c=e.sent)?(t(c),localStorage.setItem("user",c),a.showNotification({title:"Success!",message:"Logged in successfully",status:"success"}),x.push("/home")):a.showNotification({title:"Error!",message:"Please enter valid details",status:"error"}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),a.showNotification({title:"Error!",message:"Not able to Sign in!",status:"error"});case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(j.a)(d.a.mark((function e(n){var c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),a.showNotification({title:"Please wait!",message:"Getting things ready...",status:"pending"}),e.prev=2,e.next=5,k(b,g);case 5:(c=e.sent)?(t(c),localStorage.setItem("user",c),a.showNotification({title:"Success!",message:"Logged in successfully",status:"success"}),x.push("/home")):a.showNotification({title:"Error!",message:"Please enter valid details",status:"error"}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),a.showNotification({title:"Error!",message:"Not able to Sign in!",status:"error"});case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{children:[Object(n.jsx)(F.a,{style:{marginBottom:"45px",backgroundColor:s&&"white"}}),Object(n.jsx)("div",{className:"authform-textfields-wrapper",children:Object(n.jsxs)("div",{className:"authform-textfields",children:[Object(n.jsx)(K,{inputProps:{className:v},InputLabelProps:{className:v},autoComplete:"off",variant:"outlined",label:"Email",type:"text",value:b,onChange:function(e){return m(e.target.value)}}),Object(n.jsx)(K,{InputProps:{className:v},InputLabelProps:{className:v},variant:"outlined",label:"Password",type:"password",value:g,style:{marginTop:"20px"},onChange:function(e){return O(e.target.value)}})]})}),Object(n.jsx)(F.a,{style:{marginTop:"25px",backgroundColor:s&&"white"}}),Object(n.jsxs)("div",{style:{float:"right",marginTop:"10px"},children:[Object(n.jsx)(A.a,{className:_,autoFocus:!0,type:"submit",onClick:S,children:"Login"}),Object(n.jsx)(A.a,{className:w,autoFocus:!0,type:"submit",onClick:y,color:"primary",children:"SignUp"})]})]})}var q=a(38),H=(a(97),a(98),a(67)),Q=a.n(H);function V(){var e=Object(o.a)(Object(c.useContext)(p).user,2),t=e[0],a=e[1],r=Object(c.useState)(""),s=Object(o.a)(r,2),i=s[0],l=s[1],u=Object(c.useState)(null),d=Object(o.a)(u,2),j=d[0],b=d[1],h=Object(c.useState)(0),O=Object(o.a)(h,2),x=O[0],v=O[1],N=Object(o.a)(Object(c.useContext)(C).DarkMode,2),k=N[0],_=(N[1],"createPost__loggedIn"),w="createPost__textarea";k&&(w="createPost__textarea dark",_="createPost__loggedIn dark"),m.a.auth().onAuthStateChanged((function(e){a(e)}));return Object(n.jsx)("div",{className:"createPost",children:t?Object(n.jsxs)("div",{className:_,children:[Object(n.jsx)("p",{children:"Create Post"}),Object(n.jsxs)("div",{className:"createPost__loggedInCenter",children:[Object(n.jsx)("textarea",{placeholder:"enter caption here..",className:w,rows:"3",value:i,onChange:function(e){return l(e.target.value)}}),Object(n.jsx)("div",{className:"createPost__imagePreview",children:Object(n.jsx)("img",{id:"image-preview",alt:""})})]}),Object(n.jsxs)("div",{className:"creatPost__loggedInBottom",children:[Object(n.jsxs)("div",{className:"createPost__imageUpload",children:[Object(n.jsx)("label",{htmlFor:"fileInput",children:Object(n.jsx)(Q.a,{style:{cursor:"pointer",fontSize:"20px"}})}),Object(n.jsx)("input",{id:"fileInput",type:"file",accept:"image/*",onChange:function(e){if(e.target.files[0]){b(e.target.files[0]);var t=URL.createObjectURL(e.target.files[0]),a=document.getElementById("image-preview");a.src=t,a.style.display="block"}}})]}),Object(n.jsx)("button",{className:"createPost__uploadBtn",onClick:function(){if(j){var e=function(e){for(var t="",a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=a.length,c=0;c<e;c++)t+=a.charAt(Math.floor(Math.random()*n));return t}(10);g.ref("images/".concat(e,".jpg")).put(j).on("state_changed",(function(e){var t=Math.round(e.bytesTransferred/e.totalBytes*100);v(t)}),(function(e){console.log(e)}),(function(){g.ref("images").child("".concat(e,".jpg")).getDownloadURL().then((function(e){f.collection("posts").add({timestamp:m.a.firestore.Timestamp.now(),caption:i,photoUrl:e,username:t.email.replace("@gmail.com",""),profileUrl:t.photoURL?t.photoURL:"https://firebasestorage.googleapis.com/v0/b/reactsocialapptutorial.appspot.com/o/images%2Fblank-profile.webp?alt=media&token=d749fb07-d371-4927-b3d7-ac16abd31c9e"})})),l(""),v(0),b(null),document.getElementById("image-preview").style.display="none",console.log("image nulled")}))}},style:{color:k?i?"#FFFFFF":"lightgrey":i?"#000":"lightgrey"},children:"Upload ".concat(0!=x?x:"")})]})]}):Object(n.jsx)("div",{})})}a(103);function X(e){var t=e.profileUrl,a=e.username,r=e.id,s=e.photoUrl,i=e.caption,l=e.comments,u=Object(o.a)(Object(c.useContext)(p).user,2),d=u[0],j=(u[1],Object(o.a)(Object(c.useContext)(C).DarkMode,2)),b=j[0],m=(j[1],"post"),h="post__delete";b&&(m="post dark",h="post__delete dark");var O=!1,x=null;d&&(x=d.email.replace("@gmail.com","")),x===a&&null!==x&&(O=!0);return Object(n.jsxs)("div",{className:m,children:[Object(n.jsxs)("div",{className:"post__header",children:[Object(n.jsxs)("div",{className:"post__headerLeft",children:[Object(n.jsx)("img",{className:"post__profilePic",src:t}),Object(n.jsx)("p",{style:{marginLeft:"8px"},children:a})]}),O&&Object(n.jsx)("button",{onClick:function(){g.refFromURL(s).delete().then((function(){console.log("delete successfull")})).catch((function(e){console.log("Error delete".concat(e))})),f.collection("posts").doc(r).delete().then((function(){console.log("delete successfull from firebase")})).catch((function(e){console.log("Error post info delete from firebase ".concat(e))}))},className:h,children:"Delete"})]}),Object(n.jsx)("div",{className:"post__center",children:Object(n.jsx)("img",{className:"post__photoUrl",src:s})}),Object(n.jsx)("div",{children:Object(n.jsxs)("p",{children:[Object(n.jsx)("span",{style:{fontWeight:"600",marginRight:"4px"},children:a}),i]})}),l&&l.map((function(e){return Object(n.jsx)("div",{children:Object(n.jsx)(w,{username:e.username,caption:e.comment})},e.username)})),d&&Object(n.jsx)(S,{comments:l,id:r})]})}a(104);function Z(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),a=t[0],r=t[1],s=Object(o.a)(Object(c.useContext)(C).DarkMode,2),i=s[0],l=(s[1],"feed");return i&&(l="feed dark"),Object(c.useEffect)((function(){f.collection("posts").onSnapshot((function(e){r(e.docs.map((function(e){return{id:e.id,post:e.data()}})))}))}),[]),Object(n.jsx)("div",{className:l,children:a.map((function(e){var t=e.id,a=e.post;return Object(n.jsx)("div",{style:{padding:"6px 0px"},children:Object(n.jsx)(X,{id:t,profileUrl:a.profileUrl,username:a.username,photoUrl:a.photoUrl,caption:a.caption,comments:a.comments},t)})}))})}var $=a(68);var ee,te=(ee=function(){var e=Object(o.a)(Object(c.useContext)(C).DarkMode,2),t=e[0],a=(e[1],"home");return t&&(a="home dark"),Object(n.jsxs)("div",{className:a,children:[Object(n.jsx)(E,{}),Object(n.jsx)(V,{}),Object(n.jsx)(Z,{})]})},function(e){var t=Object(o.a)(Object(c.useContext)(p).user,2),a=t[0];return t[1],a?Object(n.jsx)("div",{children:Object(n.jsx)(ee,Object($.a)({},e))}):null}),ae=function(){var e=Object(o.a)(Object(c.useContext)(p).user,2),t=(e[0],e[1]);return Object(c.useEffect)((function(){localStorage.getItem("user")&&t(localStorage.getItem("user"))}),[]),Object(n.jsx)("div",{className:"app",children:Object(n.jsx)(te,{})})},ne=a(48),ce=a.n(ne);var re=function(e){var t=Object(c.useContext)(G),a=e.title,r=e.message,s=e.status,o="";"success"===s&&(o=ce.a.success),"error"===s&&(o=ce.a.error),"pending"===s&&(o=ce.a.pending);var i="".concat(ce.a.notification," ").concat(o);return Object(n.jsxs)("div",{className:i,onClick:t.hideNotification,children:[Object(n.jsx)("h2",{children:a}),Object(n.jsx)("p",{children:r})]})};function se(e){var t=Object(c.useContext)(G).notification;return Object(n.jsxs)("div",{children:[e.children,t&&Object(n.jsx)(re,{title:t.title,message:t.message,status:t.status})]})}s.a.render(Object(n.jsx)(W,{children:Object(n.jsx)(y,{children:Object(n.jsx)(b,{children:Object(n.jsx)(q.a,{children:Object(n.jsx)(se,{children:Object(n.jsxs)(l.c,{children:[Object(n.jsx)(l.a,{exact:!0,path:"/social-media-app/",component:function(){var e=Object(o.a)(Object(c.useContext)(p).user,2),t=(e[0],e[1],Object(l.f)(),Object(o.a)(Object(c.useContext)(C).DarkMode,2)),a=t[0],r=(t[1],"loginpage-inner"),s="loginpage-title",u="loginpage-card";return a&&(r="loginpage-inner dark",s="loginpage-title dark",u="loginpage-card dark"),Object(n.jsxs)("div",{className:"loginpage",children:[Object(n.jsx)(E,{}),Object(n.jsxs)("div",{className:r,children:[Object(n.jsxs)("div",{className:s,children:["Share your stories here! ",Object(n.jsx)("br",{}),"Sign up Now!"]}),Object(n.jsx)(i.a,{className:u,children:Object(n.jsxs)(i.a.Body,{className:"loginpage-card-body",children:[Object(n.jsx)(Y,{}),Object(n.jsx)(i.a.Text,{className:"loginpage-card-text",children:"Sign in with Google:"}),Object(n.jsx)("div",{className:"loginpage-signinbtn",children:Object(n.jsx)(_,{})})]})})]}),Object(n.jsx)("div",{className:"loginpage-footer",children:"Developed by Sagar Dalal"})]})}}),Object(n.jsx)(l.a,{exact:!0,path:"/home",component:ae})]})})})})})}),document.getElementById("root"))},48:function(e,t,a){e.exports={notification:"notification_notification__2lEK8",pending:"notification_pending__13nR4",success:"notification_success__2LYeu",error:"notification_error__1Dac6"}},82:function(e,t,a){},87:function(e,t,a){},92:function(e,t,a){},93:function(e,t,a){},94:function(e,t,a){},95:function(e,t,a){},96:function(e,t,a){},97:function(e,t,a){},98:function(e,t,a){}},[[105,1,2]]]);
//# sourceMappingURL=main.4cf998b8.chunk.js.map