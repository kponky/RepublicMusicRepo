(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[571],{8793:(e,t,a)=>{Promise.resolve().then(a.bind(a,1969)),Promise.resolve().then(a.bind(a,1197))},6463:(e,t,a)=>{"use strict";var r=a(1169);a.o(r,"usePathname")&&a.d(t,{usePathname:function(){return r.usePathname}}),a.o(r,"useRouter")&&a.d(t,{useRouter:function(){return r.useRouter}}),a.o(r,"useSearchParams")&&a.d(t,{useSearchParams:function(){return r.useSearchParams}})},8293:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});var r=a(7437);a(2265);let n=e=>{let{children:t,variant:a="outline",...n}=e;return(0,r.jsx)("button",{...n,className:"btn-".concat(a),children:t})}},1969:(e,t,a)=>{"use strict";a.d(t,{default:()=>o});var r=a(7437),n=a(2265),s=a(6463),l=a(903),i=a(4613);let c=(0,l.U)((e,t)=>({ticketId:null,membershipData:null,loading:!1,errorMsg:"",setTicketId:a=>{e({ticketId:a}),a&&t().fetchMembership()},fetchMembership:async()=>{let{ticketId:a}=t();if(!a){e({membershipData:null,loading:!1});return}e({loading:!0,errorMsg:""});try{let t=await (0,i.uF)(a);(null==t?void 0:t.data)?e({membershipData:t.data.data,errorMsg:"",loading:!1}):e({membershipData:null,errorMsg:"Invalid ticket or membership ID.",loading:!1})}catch(t){console.error(t),e({membershipData:null,errorMsg:"An error occurred while fetching ticket details.",loading:!1})}}})),o=()=>{let e=(0,s.useSearchParams)().get("ticketId"),{membershipData:t,loading:a,errorMsg:l,setTicketId:i}=c();return((0,n.useEffect)(()=>{i(e)},[e,i]),e&&a)?(0,r.jsx)("div",{className:"text-white text-center max-w-[800px] mx-auto pb-20",children:"Loading..."}):(0,r.jsx)("div",{className:"pb-20",children:(0,r.jsx)("div",{className:"px-4 max-w-[800px] mx-auto",children:t?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h2",{className:"text-white text-center text-4xl font-bold mb-8",children:"Ticket Details"}),(0,r.jsxs)("div",{className:"space-y-6 text-white",children:[(0,r.jsxs)("div",{className:"border border-gray-300 rounded-lg p-4",children:[(0,r.jsx)("h3",{className:"text-lg font-semibold",children:"Membership Information"}),(0,r.jsxs)("p",{children:["Name: ",(null==t?void 0:t.title_name)||"N/A"]}),(0,r.jsxs)("p",{children:["Description: ",(null==t?void 0:t.description)||"N/A"]}),(0,r.jsxs)("p",{children:["Phone:"," ",(null==t?void 0:t.meta_data.member_phone_number)||"N/A"]}),(0,r.jsxs)("p",{children:["Location:"," ","".concat(null==t?void 0:t.meta_data.member_city_of_origin,", ").concat(null==t?void 0:t.meta_data.member_state_of_origin,", ").concat(null==t?void 0:t.meta_data.member_country_of_origin)||"N/A"]}),(0,r.jsxs)("p",{children:["Member Type: ",(null==t?void 0:t.meta_data.member_type)||"N/A"]})]}),(0,r.jsxs)("div",{className:"border border-gray-300 rounded-lg p-4",children:[(0,r.jsx)("h3",{className:"text-lg font-semibold",children:"Artist Information"}),(0,r.jsxs)("p",{children:["Name: ",(null==t?void 0:t.meta_data.artist_name)||"N/A"]}),(0,r.jsxs)("p",{children:["Email: ",(null==t?void 0:t.meta_data.artist_email)||"N/A"]}),(0,r.jsxs)("p",{children:["Description:"," ",(null==t?void 0:t.meta_data.artist_description)||"N/A"]}),(0,r.jsxs)("p",{children:["Website:"," ",(null==t?void 0:t.meta_data.artist_website)?(0,r.jsx)("a",{href:null==t?void 0:t.meta_data.artist_website,target:"_blank",rel:"noopener noreferrer",className:"text-primary underline",children:null==t?void 0:t.meta_data.artist_website}):"N/A"]})]}),(0,r.jsxs)("div",{className:"border border-gray-300 rounded-lg p-4",children:[(0,r.jsx)("h3",{className:"text-lg font-semibold",children:"Management Information"}),(0,r.jsxs)("p",{children:["Name: ",(null==t?void 0:t.meta_data.management_name)||"N/A"]}),(0,r.jsxs)("p",{children:["Email: ",(null==t?void 0:t.meta_data.management_email)||"N/A"]}),(0,r.jsxs)("p",{children:["Phone:"," ",(null==t?void 0:t.meta_data.management_phone_number)||"N/A"]}),(0,r.jsxs)("p",{children:["Address:"," ",(null==t?void 0:t.meta_data.management_address)||"N/A"]})]})]})]}):(0,r.jsx)("div",{className:"text-white text-center ",children:(0,r.jsx)("p",{children:l})})})})}},1197:(e,t,a)=>{"use strict";a.d(t,{default:()=>i});var r=a(7437),n=a(6463),s=a(2265),l=a(8293);let i=()=>{let e=(0,n.useRouter)(),[t,a]=(0,s.useState)(""),[i,c]=(0,s.useState)(""),o=async a=>{if(a.preventDefault(),!t.trim()){c("Please enter a valid ticket number or membership ID.");return}e.replace("/track?ticketId=".concat(t)),c("")};return(0,r.jsxs)("div",{children:[(0,r.jsxs)("form",{className:"flex flex-col gap-8 mt-12 max-w-[800px] w-full mx-auto items-center px-4",children:[(0,r.jsx)("input",{type:"text",placeholder:"Enter ticket number or membership card no.",className:"w-full py-2 bg-transparent border-b-2 \n                          border-primary text-white font-normal outline-none placeholder:text-white ".concat(i&&"border-red-500"),value:t,onChange:e=>{a(e.target.value)}}),(0,r.jsx)(l.Z,{variant:"solid",onClick:o,children:"Submit"})]}),i&&(0,r.jsx)("p",{className:"text-red-500 text-center my-4",children:i})]})}},4613:(e,t,a)=>{"use strict";a.d(t,{PL:()=>l,fC:()=>s,uF:()=>n,IX:()=>i,WY:()=>c});let r=a(8472).Z.create({baseURL:"https://backend.republicmanagement.org/public/api/v1"});async function n(e){try{return await r.get("/nellalink/smart-meta-manager/entity/ticketmembership/retrieve-by-meta-key/".concat(e))}catch(e){console.log(e)}}async function s(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;try{return await r.get("/nellalink/smart-meta-manager/entity/artists?per_page=".concat(e,"&page=").concat(t,"&sort_by=id&sort_order=desc"))}catch(e){console.log(e)}}async function l(e){try{let t=await r.get("/nellalink/smart-meta-manager/entity/artists/".concat(e));return null==t?void 0:t.data.data}catch(e){console.log(e)}}async function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;try{return await r.get("/nellalink/smart-meta-manager/entity/sliders?per_page=".concat(e,"&page=").concat(t,"&sort_by=id&sort_order=desc"))}catch(e){console.log(e)}}async function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;try{return await r.get("/nellalink/smart-meta-manager/entity/videos?per_page=".concat(e,"&page=").concat(t,"&sort_by=id&sort_order=desc"))}catch(e){console.log(e)}}},903:(e,t,a)=>{"use strict";a.d(t,{U:()=>c});var r=a(2265);let n=e=>{let t;let a=new Set,r=(e,r)=>{let n="function"==typeof e?e(t):e;if(!Object.is(n,t)){let e=t;t=(null!=r?r:"object"!=typeof n||null===n)?n:Object.assign({},t,n),a.forEach(a=>a(t,e))}},n=()=>t,s={setState:r,getState:n,getInitialState:()=>l,subscribe:e=>(a.add(e),()=>a.delete(e))},l=t=e(r,n,s);return s},s=e=>e?n(e):n,l=e=>e,i=e=>{let t=s(e),a=e=>(function(e,t=l){let a=r.useSyncExternalStore(e.subscribe,()=>t(e.getState()),()=>t(e.getInitialState()));return r.useDebugValue(a),a})(t,e);return Object.assign(a,t),a},c=e=>e?i(e):i}},e=>{var t=t=>e(e.s=t);e.O(0,[472,130,215,744],()=>t(8793)),_N_E=e.O()}]);