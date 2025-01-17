"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[8580],{"./public/app/features/admin/UserListAdminPage.tsx":(e,s,a)=>{a.r(s),a.d(s,{default:()=>S});var i,n,l,t,r,c,o,d,m,h,u,g,x=a("./node_modules/react/index.js"),p=a("./node_modules/@emotion/css/dist/emotion-css.esm.js"),j=a("./node_modules/react-redux/es/index.js"),b=a("./packages/grafana-ui/src/index.ts"),f=a("./public/app/core/components/Page/Page.tsx"),N=a("./public/app/core/components/TagFilter/TagBadge.tsx"),v=a("./public/app/core/core.ts"),L=a("./public/app/core/selectors/navModel.ts"),A=a("./public/app/types/index.ts"),w=a("./public/app/features/admin/state/actions.ts"),y=a("./public/app/core/components/PageLoader/PageLoader.tsx"),P=a("./node_modules/react/jsx-runtime.js");const $={fetchUsers:w.uh,changeQuery:w.R5,changePage:w.oO,changeFilter:w.M6},k=(0,j.connect)((e=>({navModel:(0,L.h)(e.navIndex,"global-users"),users:e.userListAdmin.users,query:e.userListAdmin.query,showPaging:e.userListAdmin.showPaging,totalPages:e.userListAdmin.totalPages,page:e.userListAdmin.page,filter:e.userListAdmin.filter,isLoading:e.userListAdmin.isLoading})),$),I=e=>`Edit user's ${e} details`,T=(0,x.memo)((({user:e,showLicensedRole:s})=>{var a;const i=(0,b.useStyles2)(F),n=`admin/users/edit/${e.id}`;return(0,P.jsxs)("tr",{children:[(0,P.jsx)("td",{className:"width-4 text-center link-td",children:(0,P.jsx)("a",{href:n,"aria-label":`Edit user's ${e.name} details`,children:(0,P.jsx)("img",{className:"filter-table__avatar",src:e.avatarUrl,alt:`Avatar for user ${e.name}`})})}),(0,P.jsx)("td",{className:"link-td max-width-10",children:(0,P.jsx)("a",{className:"ellipsis",href:n,title:e.login,"aria-label":I(e.name),children:e.login})}),(0,P.jsx)("td",{className:"link-td max-width-10",children:(0,P.jsx)("a",{className:"ellipsis",href:n,title:e.email,"aria-label":I(e.name),children:e.email})}),(0,P.jsx)("td",{className:"link-td max-width-10",children:(0,P.jsx)("a",{className:"ellipsis",href:n,title:e.name,"aria-label":I(e.name),children:e.name})}),(0,P.jsxs)("td",{className:i.row,title:null!==(a=e.orgs)&&void 0!==a&&a.length?`The user is a member of the following organizations: ${e.orgs.map((e=>e.name)).join(",")}`:void 0,children:[(0,P.jsx)(R,{units:e.orgs,icon:"building"}),e.isAdmin&&(0,P.jsx)("a",{href:n,"aria-label":I(e.name),children:h||(h=(0,P.jsx)(b.Tooltip,{placement:"top",content:"Grafana Admin",children:(0,P.jsx)(b.Icon,{name:"shield"})}))})]}),s&&(0,P.jsx)("td",{className:(0,p.cx)("link-td",i.iconRow),children:(0,P.jsx)("a",{className:"ellipsis",href:n,title:e.name,"aria-label":I(e.name),children:"None"===e.licensedRole?(0,P.jsxs)("span",{className:i.disabled,children:["Not assigned"," ",u||(u=(0,P.jsx)(b.Tooltip,{placement:"top",content:"A licensed role will be assigned when this user signs in",children:(0,P.jsx)(b.Icon,{name:"question-circle"})}))]}):e.licensedRole})}),(0,P.jsx)("td",{className:"link-td",children:e.lastSeenAtAge&&(0,P.jsx)("a",{href:n,"aria-label":`Last seen at ${e.lastSeenAtAge}. Follow to edit user's ${e.name} details.`,children:"10 years"===e.lastSeenAtAge?(0,P.jsx)("span",{className:i.disabled,children:"Never"}):e.lastSeenAtAge})}),(0,P.jsx)("td",{className:"text-right",children:Array.isArray(e.authLabels)&&e.authLabels.length>0&&(0,P.jsx)(N.e,{label:e.authLabels[0],removeIcon:!1,count:0})}),(0,P.jsx)("td",{className:"text-right",children:e.isDisabled&&(g||(g=(0,P.jsx)("span",{className:"label label-tag label-tag--gray",children:"Disabled"})))})]},e.id)}));T.displayName="UserListItem";const R=({units:e,icon:s})=>{const a=(0,b.useStyles2)(F);return null!=e&&e.length?e.length>1?(0,P.jsx)(b.Tooltip,{placement:"top",content:(0,P.jsx)("div",{className:a.unitTooltip,children:null==e?void 0:e.map((e=>(0,P.jsx)("a",{href:e.url,className:a.link,title:e.name,"aria-label":`Edit ${e.name}`,children:e.name},e.name)))}),children:(0,P.jsxs)("div",{className:a.unitItem,children:[(0,P.jsx)(b.Icon,{name:s})," ",(0,P.jsx)("span",{children:e.length})]})}):(0,P.jsxs)("a",{href:e[0].url,className:a.unitItem,title:e[0].name,"aria-label":`Edit ${e[0].name}`,children:[(0,P.jsx)(b.Icon,{name:s})," ",e[0].name]},e[0].name):null},F=e=>({table:p.css`
      margin-top: ${e.spacing(3)};
    `,filter:p.css`
      margin: 0 ${e.spacing(1)};
    `,iconRow:p.css`
      svg {
        margin-left: ${e.spacing(.5)};
      }
    `,row:p.css`
      display: flex;
      align-items: center;
      height: 100% !important;

      a {
        padding: ${e.spacing(.5)} 0 !important;
      }
    `,unitTooltip:p.css`
      display: flex;
      flex-direction: column;
    `,unitItem:p.css`
      cursor: pointer;
      padding: ${e.spacing(.5)} 0;
      margin-right: ${e.spacing(1)};
    `,disabled:p.css`
      color: ${e.colors.text.disabled};
    `,link:p.css`
      color: ${e.colors.text.link};
      :hover {
        text-decoration: underline;
      }
    `}),S=k((({fetchUsers:e,navModel:s,query:a,changeQuery:h,users:u,showPaging:g,totalPages:j,page:N,changePage:L,changeFilter:w,filter:$,isLoading:k})=>{const I=(0,b.useStyles2)(F);(0,x.useEffect)((()=>{e()}),[e]);const R=(0,x.useMemo)((()=>u.some((e=>e.licensedRole))),[u]);return(0,P.jsx)(f.Z,{navModel:s,children:(0,P.jsxs)(f.Z.Contents,{children:[(0,P.jsxs)("div",{className:"page-action-bar",children:[(0,P.jsxs)("div",{className:"gf-form gf-form--grow",children:[(0,P.jsx)(b.FilterInput,{placeholder:"Search user by login, email, or name.",autoFocus:!0,value:a,onChange:h}),(0,P.jsx)(b.RadioButtonGroup,{options:[{label:"All users",value:"all"},{label:"Active last 30 days",value:"activeLast30Days"}],onChange:w,value:$,className:I.filter})]}),v.Vt.hasPermission(A.bW.UsersCreate)&&(i||(i=(0,P.jsx)(b.LinkButton,{href:"admin/users/create",variant:"primary",children:"New user"})))]}),k?n||(n=(0,P.jsx)(y.Z,{})):(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)("div",{className:(0,p.cx)(I.table,"admin-list-table"),children:(0,P.jsxs)("table",{className:"filter-table form-inline filter-table--hover",children:[(0,P.jsx)("thead",{children:(0,P.jsxs)("tr",{children:[l||(l=(0,P.jsx)("th",{})),t||(t=(0,P.jsx)("th",{children:"Login"})),r||(r=(0,P.jsx)("th",{children:"Email"})),c||(c=(0,P.jsx)("th",{children:"Name"})),o||(o=(0,P.jsx)("th",{children:"Belongs to"})),R&&(0,P.jsxs)("th",{children:["Licensed role"," ",(0,P.jsx)(b.Tooltip,{placement:"top",content:(0,P.jsxs)(P.Fragment,{children:["Licensed role is based on a user's Org role (i.e. Viewer, Editor, Admin) and their dashboard/folder permissions."," ",(0,P.jsx)("a",{className:I.link,href:"https://grafana.com/docs/grafana/next/enterprise/license/license-restrictions/#active-users-limit",children:"Learn more"})]}),children:d||(d=(0,P.jsx)(b.Icon,{name:"question-circle"}))})]}),m||(m=(0,P.jsxs)("th",{children:["Last active ",(0,P.jsx)(b.Tooltip,{placement:"top",content:"Time since user was seen using Grafana",children:(0,P.jsx)(b.Icon,{name:"question-circle"})})]})),(0,P.jsx)("th",{style:{width:"1%"}})]})}),(0,P.jsx)("tbody",{children:u.map((e=>(0,P.jsx)(T,{user:e,showLicensedRole:R},e.id)))})]})}),g&&(0,P.jsx)(b.Pagination,{numberOfPages:j,currentPage:N,onNavigate:L})]})]})})}))}}]);
//# sourceMappingURL=UserListAdminPage.8128b05ac04b15cbf98d.js.map