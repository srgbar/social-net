(this["webpackJsonpsocial-net"]=this["webpackJsonpsocial-net"]||[]).push([[1],{12:function(e,t,n){e.exports={usersPage:"Users_usersPage__3pLvn",container:"Users_container__3gcvt",users:"Users_users__iHU0o",user:"Users_user__3F1QO",userAvatar:"Users_userAvatar__12H_V",blockInfoUser:"Users_blockInfoUser__2D7Vl",name:"Users_name__2dkYM",status:"Users_status__3RLyX",location:"Users_location__1H_JJ",buttonFollow:"Users_buttonFollow__1zNtR",buttonUnfollow:"Users_buttonUnfollow__U1RPy"}},21:function(e,t,n){"use strict";n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return d})),n.d(t,"d",(function(){return p}));var r=n(3),a=n.n(r),s=n(6),o=n(2),c=n(5),i={data:{userId:null,email:null,login:null},isAuth:!1,message:""};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH/SET-USERS-DATA":return Object(o.a)(Object(o.a)({},e),{},{data:t.data});case"AUTH/SET-IS-AUTH":return Object(o.a)(Object(o.a)({},e),{},{isAuth:t.isAuth});default:return e}};var u=function(e,t,n){return{type:"AUTH/SET-USERS-DATA",data:{userId:e,email:t,login:n}}},l=function(e){return{type:"AUTH/SET-IS-AUTH",isAuth:e}},f=function(){return function(){var e=Object(s.a)(a.a.mark((function e(t){var n,r,s,o,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.me();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,s=r.id,o=r.email,i=r.login,t(u(s,o,i)),t(l(!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},d=function(e,t,n,r){return function(){var o=Object(s.a)(a.a.mark((function s(o){var i;return a.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,c.a.login(e,t,n);case 2:0===(i=a.sent).data.resultCode?o(f()):r(i.data.messages[0]);case 4:case"end":return a.stop()}}),s)})));return function(e){return o.apply(this,arguments)}}()},p=function(){return function(){var e=Object(s.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.logout();case 2:0===e.sent.data.resultCode&&(t(d(null,null,!1,(function(e){return""}))),t(l(!1)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}},22:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));n(0);var r=n.p+"static/media/fidget-spinner.29181c59.gif",a=n(1),s=function(){return Object(a.jsx)("div",{children:Object(a.jsx)("img",{src:r})})}},25:function(e,t,n){e.exports={paginator:"Paginator_paginator__2uczv",selectedPage:"Paginator_selectedPage__3VRT4",button:"Paginator_button__2eyNF"}},30:function(e,t,n){e.exports={header:"Header_header__2U6A2",loginBlock:"Header_loginBlock__2yecS",button:"Header_button__2fdez"}},39:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"d",(function(){return d})),n.d(t,"c",(function(){return p})),n.d(t,"f",(function(){return b})),n.d(t,"e",(function(){return g}));var r=n(3),a=n.n(r),s=n(6),o=n(19),c=n(2),i=n(5),u={posts:[{id:1,message:"Hi, how are you?",likesCount:12},{id:2,message:"It's my first post",likesCount:11},{id:3,message:"Awesome!",likesCount:5}],profile:{photos:{small:"",large:""},lookingForAJobDescription:"",lookingForAJob:!1,aboutMe:"",fullName:"",contacts:{github:"",vk:"",facebook:"",instagram:"",twitter:"",website:"",youtube:"",mainLink:""}},status:""};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PROFILE-PAGE/ADD-POST":var n={id:(new Date).getTime(),message:t.newMessageText,likesCount:0};return Object(c.a)(Object(c.a)({},e),{},{posts:[].concat(Object(o.a)(e.posts),[n])});case"PROFILE-PAGE/SET-STATUS":return Object(c.a)(Object(c.a)({},e),{},{status:t.status});case"PROFILE-PAGE/SET-USER-PROFILE":return Object(c.a)(Object(c.a)({},e),{},{profile:t.profile});case"PROFILE-PAGE/DELETE-POST":return Object(c.a)(Object(c.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.postId}))});case"PROFILE-PAGE/SAVE-PHOTO-SUCCESS":return Object(c.a)(Object(c.a)({},e),{},{profile:Object(c.a)(Object(c.a)({},e.profile),{},{photos:Object(c.a)(Object(c.a)({},e.profile.photos),{},{small:t.photo,large:t.photo})})});default:return e}};var l=function(e){return{type:"PROFILE-PAGE/ADD-POST",newMessageText:e}},f=function(e){return{type:"PROFILE-PAGE/SET-STATUS",status:e}},d=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.c.getProfile(e);case 2:r=t.sent,n({type:"PROFILE-PAGE/SET-USER-PROFILE",profile:r.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},p=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.getStatus(e);case 2:r=t.sent,n(f(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},b=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(f(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.savePhoto(e);case 2:0===(r=t.sent).data.resultCode&&n({type:"PROFILE-PAGE/SAVE-PHOTO-SUCCESS",photo:r.data.data.photos.large});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},5:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return c}));var r=n(54),a=n.n(r).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"88133967-bfe7-4c18-8b37-a3c163827473"}}),s={getUsers:function(e,t){return a.get("users/?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return a.post("follow/".concat(e))},unfollow:function(e){return a.delete("follow/".concat(e))},getProfile:function(e){return console.warn("Obsolete method. Please profileAPI object."),o.getProfile(e)}},o={getProfile:function(e){return a.get("profile/"+e)},getStatus:function(e){return a.get("profile/status/"+e)},updateStatus:function(e){return a.put("profile/status/",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),a.put("profile/photo/",t,{headers:{"Content-Type":"multipart/form-data"}})}},c={me:function(){return a.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return a.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return a.delete("auth/login")}}},51:function(e,t,n){"use strict";t.a="data:image/png;base64,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"},52:function(e,t,n){"use strict";n.d(t,"b",(function(){return o}));var r=n(19),a=n(2),s={dialogs:[{id:1,name:"Dimych"},{id:2,name:"Andrew"},{id:3,name:"Pasha"},{id:4,name:"Olga"}],messages:[{id:1,message:"Hello, my friend!"},{id:2,message:'Have you seen the new "Spider-Man: No Way Home" yet?'},{id:3,message:"What will you do during the winter holidays? Come with us to the Altai! Will be cool!"},{id:4,message:"How are you learning Javascript?"}]};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"DIALOGS-PAGE/SEND-MESSAGE":var n=t.newMessageBody;return Object(a.a)(Object(a.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[{id:4,message:n}])});default:return e}};var o=function(e){return{type:"DIALOGS-PAGE/SEND-MESSAGE",newMessageBody:e}}},64:function(e,t,n){},65:function(e,t,n){},7:function(e,t,n){e.exports={nav:"Navbar_nav__2Fa0v",item:"Navbar_item__90oSo",activeLink:"Navbar_activeLink__3nmss"}},90:function(e,t,n){"use strict";n.r(t);var r=function(e){e&&e instanceof Function&&n.e(8).then(n.bind(null,261)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),r(e),a(e),s(e),o(e)}))},a=n(0),s=n.n(a),o=n(28),c=n.n(o),i=(n(64),n(15)),u=n(16),l=n(17),f=n(18),d=(n(65),n(4)),p=n(9),b=n(2),g=n(14),j=n(21),h=n(30),O=n.n(h),m=n.p+"static/media/black-map.6d299889.png",v=n(1),S=function(e){return Object(v.jsxs)("header",{className:O.a.header,children:[Object(v.jsx)("img",{src:m}),Object(v.jsx)("div",{className:O.a.loginBlock,children:e.isAuth?Object(v.jsxs)("div",{children:[e.login,Object(v.jsx)("button",{onClick:e.logoutTC,className:O.a.button,children:"Log out"})]}):Object(v.jsx)("div",{children:Object(v.jsx)(p.b,{to:"/login",children:"Login"})})})]})},w=function(e){Object(l.a)(n,e);var t=Object(f.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(v.jsx)(S,Object(b.a)({},this.props))}}]),n}(s.a.Component),P=Object(g.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.data.login}}),{logoutTC:j.d})(w),E=n(22),A=n(3),x=n.n(A),U=n(6),C=n(19),I=n(5),y=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(b.a)(Object(b.a)({},e),r):e}))},G={users:[],pageSize:9,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USERS-PAGE/FOLLOW":return Object(b.a)(Object(b.a)({},e),{},{users:y(e.users,t.userId,"id",{followed:!0})});case"USERS-PAGE/UNFOLLOW":return Object(b.a)(Object(b.a)({},e),{},{users:y(e.users,t.userId,"id",{followed:!1})});case"USERS-PAGE/SET-USERS":return Object(b.a)(Object(b.a)({},e),{},{users:t.users});case"USERS-PAGE/SET-CURRENT-PAGE":return Object(b.a)(Object(b.a)({},e),{},{currentPage:t.currentPage});case"USERS-PAGE/SET-TOTAL-USERS-COUNT":return Object(b.a)(Object(b.a)({},e),{},{totalUsersCount:t.count});case"USERS-PAGE/TOGGLE-IS-FETCHING":return Object(b.a)(Object(b.a)({},e),{},{isFetching:t.isFetching});case"USERS-PAGE/TOGGLE-IS-FOLLOWING-PROGRESS":return Object(b.a)(Object(b.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(C.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},k=function(e){return{type:"USERS-PAGE/FOLLOW",userId:e}},R=function(e){return{type:"USERS-PAGE/UNFOLLOW",userId:e}},T=function(e){return{type:"USERS-PAGE/SET-CURRENT-PAGE",currentPage:e}},F=function(e){return{type:"USERS-PAGE/TOGGLE-IS-FETCHING",isFetching:e}},L=function(e,t){return{type:"USERS-PAGE/TOGGLE-IS-FOLLOWING-PROGRESS",isFetching:e,userId:t}},z=function(){var e=Object(U.a)(x.a.mark((function e(t,n,r,a){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(L(!0,n)),e.next=3,r(n);case 3:0===e.sent.data.resultCode&&t(a(n)),t(L(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),M=n(13),D=n(12),K=n.n(D),V=n(37),B=n(25),Y=n.n(B),Z=function(e){for(var t=Math.ceil(e.totalItemsCount/e.pageSize),n=[],r=1;r<=t;r++)n.push(r);var s=Math.ceil(t/20),o=Object(a.useState)(1),c=Object(V.a)(o,2),i=c[0],u=c[1],l=20*(i-1)+1,f=20*i;return Object(v.jsxs)("div",{className:Y.a.paginator,children:[i>1&&Object(v.jsx)("button",{className:Y.a.button,onClick:function(){u(i-1)},children:"<"}),n.filter((function(e){return e>=l&&e<=f})).map((function(t){return Object(v.jsx)("span",{className:e.currentPage===t?Y.a.selectedPage:"",onClick:function(n){e.onPageChanged(t)},children:t})})),s>i&&Object(v.jsx)("button",{className:Y.a.button,onClick:function(){u(i+1)},children:">"})]})},Q=n(51),H=function(e){return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("div",{className:K.a.user,children:[Object(v.jsx)("div",{className:K.a.userAvatar,children:Object(v.jsx)(p.b,{to:"profile/"+e.users.id,children:Object(v.jsx)("img",{src:null!=e.users.photos.small?e.users.photos.small:Q.a})})}),Object(v.jsx)("div",{className:K.a.blockInfoUser,children:Object(v.jsxs)("div",{children:[Object(v.jsx)("div",{className:K.a.name,children:e.users.name}),Object(v.jsx)("div",{className:K.a.status,children:null!==e.users.status?e.users.status:"I have not status"})]})}),Object(v.jsx)("div",{children:e.users.followed?Object(v.jsx)("button",{disabled:e.followingInProgress.some((function(t){return t===e.users.id})),onClick:function(){e.unfollow(e.users.id)},className:K.a.buttonFollow,children:"unfollow"}):Object(v.jsx)("button",{disabled:e.followingInProgress.some((function(t){return t===e.users.id})),onClick:function(){e.follow(e.users.id)},className:K.a.buttonUnfollow,children:"follow"})})]},e.users.id)})},q=function(e){return Object(v.jsxs)("div",{className:K.a.usersPage,children:[Object(v.jsx)(Z,{currentPage:e.currentPage,onPageChanged:e.onPageChanged,totalItemsCount:e.totalUsersCount,pageSize:e.pageSize}),Object(v.jsx)("div",{className:K.a.users,children:e.users.map((function(t){return Object(v.jsx)(H,{users:t,followingInProgress:e.followingInProgress,follow:e.follow,unfollow:e.unfollow},t.id)}))})]})},J=n(57),W=Object(J.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),X=function(e){return e.usersPage.pageSize},_=function(e){return e.usersPage.totalUsersCount},$=function(e){return e.usersPage.currentPage},ee=function(e){return e.usersPage.isFetching},te=function(e){return e.usersPage.followingInProgress},ne=function(e){Object(l.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){e.props.getUsers(t,e.props.pageSize)},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(v.jsxs)(v.Fragment,{children:[this.props.isFetching?Object(v.jsx)(E.a,{}):null,Object(v.jsx)(q,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,toggleFollowingProgress:this.props.toggleFollowingProgress,followingInProgress:this.props.followingInProgress})]})}}]),n}(s.a.PureComponent),re=Object(M.compose)(Object(g.b)((function(e){return{users:W(e),pageSize:X(e),totalUsersCount:_(e),currentPage:$(e),isFetching:ee(e),followingInProgress:te(e)}}),{follow:function(e){return function(){var t=Object(U.a)(x.a.mark((function t(n){return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:z(n,e,I.c.follow.bind(I.c),k);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(U.a)(x.a.mark((function t(n){return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:z(n,e,I.c.unfollow.bind(I.c),R);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},toggleFollowingProgress:L,getUsers:function(e,t){return function(){var n=Object(U.a)(x.a.mark((function n(r){var a;return x.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(F(!0)),r(T(e)),n.next=4,I.c.getUsers(e,t);case 4:a=n.sent,r(F(!1)),r({type:"USERS-PAGE/SET-USERS",users:a.items}),r({type:"USERS-PAGE/SET-TOTAL-USERS-COUNT",count:a.totalCount}),r(T(e));case 9:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},setCurrentPage:T}))(ne),ae=n(7),se=n.n(ae),oe=function(){return Object(v.jsxs)("nav",{className:se.a.nav,children:[Object(v.jsx)("div",{className:se.a.item,children:Object(v.jsx)(p.b,{to:"/profile",activeClassName:se.a.activeLink,children:"Profile"})}),Object(v.jsx)("div",{className:"".concat(se.a.item," $(s.active}"),children:Object(v.jsx)(p.b,{to:"/dialogs",activeClassName:se.a.activeLink,children:"Messages"})}),Object(v.jsx)("div",{className:"".concat(se.a.item," $(s.active}"),children:Object(v.jsx)(p.b,{to:"/users",activeClassName:se.a.activeLink,children:"Users"})}),Object(v.jsx)("div",{className:se.a.item,children:Object(v.jsx)(p.b,{to:"/news",activeClassName:se.a.activeLink,children:"News"})}),Object(v.jsx)("div",{className:se.a.item,children:Object(v.jsx)(p.b,{to:"/music",activeClassName:se.a.activeLink,children:"Music"})}),Object(v.jsx)("div",{className:se.a.item,children:Object(v.jsx)(p.b,{to:"/settings",activeClassName:se.a.activeLink,children:"Settings"})})]})},ce={initialized:!1},ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"APP/INITIALIZED-SUCCESS":return Object(b.a)(Object(b.a)({},e),{},{initialized:!0});default:return e}},ue=n(39),le=n(52),fe={},de=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe;return e},pe=n(56),be=n(55),ge=Object(M.combineReducers)({profilePage:ue.b,dialogsPage:le.a,sidebar:de,usersPage:N,auth:j.a,app:ie}),je=Object(M.createStore)(ge,Object(be.composeWithDevTools)(Object(M.applyMiddleware)(pe.a)));window.store=je;var he=je;function Oe(e){return function(t){return Object(v.jsx)(s.a.Suspense,{fallback:Object(v.jsx)(E.a,{}),children:Object(v.jsx)(e,Object(b.a)({},t))})}}var me=s.a.lazy((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,264))})),ve=s.a.lazy((function(){return Promise.all([n.e(0),n.e(6),n.e(4)]).then(n.bind(null,263))})),Se=s.a.lazy((function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,262))})),we=function(e){Object(l.a)(n,e);var t=Object(f.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.initializedAppTC()}},{key:"render",value:function(){return this.props.initialized?Object(v.jsxs)("div",{className:"app-wrapper",children:[Object(v.jsx)(P,{}),Object(v.jsx)(oe,{}),Object(v.jsxs)("div",{className:"app-wrapper-content",children:[Object(v.jsx)(d.b,{path:"/dialogs",component:Oe(me)}),Object(v.jsx)(d.b,{path:"/profile/:userId?",component:Oe(ve)}),Object(v.jsx)(d.b,{path:"/users",render:function(){return Object(v.jsx)(re,{})}}),Object(v.jsx)(d.b,{path:"/login",component:Oe(Se)})]})]}):Object(v.jsx)(E.a,{})}}]),n}(s.a.Component),Pe=Object(M.compose)(d.f,Object(g.b)((function(e){return{initialized:e.app.initialized}}),{initializedAppTC:function(){return function(e){var t=e(Object(j.b)());Promise.all([t]).then((function(){e({type:"APP/INITIALIZED-SUCCESS"})}))}}}))(we),Ee=function(){return Object(v.jsx)(p.a,{basename:"/social-net",children:Object(v.jsx)(g.a,{store:he,children:Object(v.jsx)(Pe,{})})})};c.a.render(Object(v.jsx)(Ee,{}),document.getElementById("root")),r()}},[[90,2,3]]]);
//# sourceMappingURL=main.10be9fde.chunk.js.map