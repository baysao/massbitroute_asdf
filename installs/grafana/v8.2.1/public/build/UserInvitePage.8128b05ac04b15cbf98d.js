"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[7707],{"./public/app/features/org/UserInvitePage.tsx":(e,a,n)=>{n.r(a),n.d(a,{UserInvitePage:()=>b,default:()=>f});n("./node_modules/react/index.js");var r,i=n("./node_modules/react-redux/es/index.js"),s=n("./packages/grafana-ui/src/index.ts"),l=n("./public/app/core/config.ts"),t=n("./public/app/types/index.ts"),o=n("./packages/grafana-runtime/src/index.ts"),d=n("./public/app/core/core.ts"),c=n("./packages/grafana-data/src/index.ts"),u=n("./node_modules/react/jsx-runtime.js");const p=["ref"];const m=[{label:"Viewer",value:t.B5.Viewer},{label:"Editor",value:t.B5.Editor},{label:"Admin",value:t.B5.Admin}],g=({})=>{const e={name:"",email:"",role:t.B5.Editor,sendEmail:!0};return(0,u.jsx)(s.Form,{defaultValues:e,onSubmit:async e=>{try{await(0,o.getBackendSrv)().post("/api/org/invites",e)}catch(e){d.h$.emit(c.AppEvents.alertError,["Failed to send invitation.",e.message])}o.locationService.push("/org/users/")},children:({register:e,control:a,errors:n})=>(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(s.Field,{invalid:!!n.loginOrEmail,error:n.loginOrEmail?"Email or username is required":void 0,label:"Email or username",children:(0,u.jsx)(s.Input,Object.assign({},e("loginOrEmail",{required:!0}),{placeholder:"email@example.com"}))}),(0,u.jsx)(s.Field,{invalid:!!n.name,label:"Name",children:(0,u.jsx)(s.Input,Object.assign({},e("name"),{placeholder:"(optional)"}))}),(0,u.jsx)(s.Field,{invalid:!!n.role,label:"Role",children:(0,u.jsx)(s.InputControl,{render:e=>{let{}=e,a=function(e,a){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],a.indexOf(n)>=0||(i[n]=e[n]);return i}(e.field,p);return(0,u.jsx)(s.RadioButtonGroup,Object.assign({},a,{options:m}))},control:a,name:"role"})}),(0,u.jsx)(s.Field,{label:"Send invite email",children:(0,u.jsx)(s.Switch,Object.assign({id:"send-email-switch"},e("sendEmail")))}),(0,u.jsxs)(s.HorizontalGroup,{children:[r||(r=(0,u.jsx)(s.Button,{type:"submit",children:"Submit"})),(0,u.jsx)(s.LinkButton,{href:c.locationUtil.assureBaseUrl((0,l.iE)().appSubUrl+"/org/users"),variant:"secondary",children:"Back"})]})]})})};var x,h,j=n("./public/app/core/selectors/navModel.ts"),v=n("./public/app/core/components/Page/Page.tsx");const b=({navModel:e})=>(0,u.jsx)(v.Z,{navModel:e,children:(0,u.jsxs)(v.Z.Contents,{children:[x||(x=(0,u.jsx)("h3",{className:"page-sub-heading",children:"Invite user"})),(0,u.jsxs)("div",{className:"p-b-2",children:["Send invitation or add existing Grafana user to the organization.",(0,u.jsxs)("span",{className:"highlight-word",children:[" ",d.Vt.user.orgName]})]}),h||(h=(0,u.jsx)(g,{}))]})}),f=(0,i.connect)((e=>({navModel:(0,j.h)(e.navIndex,"users")})))(b)}}]);
//# sourceMappingURL=UserInvitePage.8128b05ac04b15cbf98d.js.map