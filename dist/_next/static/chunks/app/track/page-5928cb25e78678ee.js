(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[571],{8793:(e,t,a)=>{Promise.resolve().then(a.bind(a,4893)),Promise.resolve().then(a.bind(a,1197))},8293:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});var r=a(7437);a(2265);let n=e=>{let{children:t,variant:a="outline",...n}=e;return(0,r.jsx)("button",{...n,className:"btn-".concat(a),children:t})}},4893:(e,t,a)=>{"use strict";a.d(t,{default:()=>d});var r=a(7437);let n=a(8472).Z.create({baseURL:"https://backend.republicmanagement.org/public/api/v1"});async function l(e){try{return await n.get("/nellalink/smart-meta-manager/entity/ticketmembership/retrieve-by-meta-key/".concat(e))}catch(e){console.log(e)}}var i=a(6463),s=a(2265);let d=()=>{let e=(0,i.useSearchParams)(),t=e.get("ticketId"),[a,n]=(0,s.useState)(null),[d,c]=(0,s.useState)(!0),[m,o]=(0,s.useState)("");return((0,s.useEffect)(()=>{(async()=>{if(!t){n(null),c(!1);return}c(!0);try{let e=await l(t);e&&e.data?(n(e.data.data),o("")):(n(null),o("Invalid ticket or membership ID."))}catch(e){console.error(e),o("An error occurred while fetching ticket details."),n(null)}finally{c(!1)}})()},[e]),t&&d)?(0,r.jsx)("div",{className:"text-white text-center max-w-[800px] mx-auto pb-20",children:"Loading..."}):(0,r.jsx)("div",{className:"pb-20",children:(0,r.jsx)("div",{className:"px-4 max-w-[800px] mx-auto",children:a?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h2",{className:"text-white text-center text-4xl font-bold mb-8",children:"Ticket Details"}),(0,r.jsxs)("div",{className:"space-y-6 text-white",children:[(0,r.jsxs)("div",{className:"border border-gray-300 rounded-lg p-4",children:[(0,r.jsx)("h3",{className:"text-lg font-semibold",children:"Membership Information"}),(0,r.jsxs)("p",{children:["Name: ",(null==a?void 0:a.title_name)||"N/A"]}),(0,r.jsxs)("p",{children:["Description: ",(null==a?void 0:a.description)||"N/A"]}),(0,r.jsxs)("p",{children:["Phone:"," ",(null==a?void 0:a.meta_data.member_phone_number)||"N/A"]}),(0,r.jsxs)("p",{children:["Location:"," ","".concat(null==a?void 0:a.meta_data.member_city_of_origin,", ").concat(null==a?void 0:a.meta_data.member_state_of_origin,", ").concat(null==a?void 0:a.meta_data.member_country_of_origin)||"N/A"]}),(0,r.jsxs)("p",{children:["Member Type: ",(null==a?void 0:a.meta_data.member_type)||"N/A"]})]}),(0,r.jsxs)("div",{className:"border border-gray-300 rounded-lg p-4",children:[(0,r.jsx)("h3",{className:"text-lg font-semibold",children:"Artist Information"}),(0,r.jsxs)("p",{children:["Name: ",(null==a?void 0:a.meta_data.artist_name)||"N/A"]}),(0,r.jsxs)("p",{children:["Email: ",(null==a?void 0:a.meta_data.artist_email)||"N/A"]}),(0,r.jsxs)("p",{children:["Description:"," ",(null==a?void 0:a.meta_data.artist_description)||"N/A"]}),(0,r.jsxs)("p",{children:["Website:"," ",(null==a?void 0:a.meta_data.artist_website)?(0,r.jsx)("a",{href:null==a?void 0:a.meta_data.artist_website,target:"_blank",rel:"noopener noreferrer",className:"text-primary underline",children:null==a?void 0:a.meta_data.artist_website}):"N/A"]})]}),(0,r.jsxs)("div",{className:"border border-gray-300 rounded-lg p-4",children:[(0,r.jsx)("h3",{className:"text-lg font-semibold",children:"Management Information"}),(0,r.jsxs)("p",{children:["Name: ",(null==a?void 0:a.meta_data.management_name)||"N/A"]}),(0,r.jsxs)("p",{children:["Email: ",(null==a?void 0:a.meta_data.management_email)||"N/A"]}),(0,r.jsxs)("p",{children:["Phone:"," ",(null==a?void 0:a.meta_data.management_phone_number)||"N/A"]}),(0,r.jsxs)("p",{children:["Address:"," ",(null==a?void 0:a.meta_data.management_address)||"N/A"]})]})]})]}):(0,r.jsx)("div",{className:"text-white text-center ",children:(0,r.jsx)("p",{children:m})})})})}},1197:(e,t,a)=>{"use strict";a.d(t,{default:()=>s});var r=a(7437),n=a(6463),l=a(2265),i=a(8293);let s=()=>{let e=(0,n.useRouter)(),[t,a]=(0,l.useState)(""),[s,d]=(0,l.useState)(""),c=async a=>{if(a.preventDefault(),!t.trim()){d("Please enter a valid ticket number or membership ID.");return}e.replace("/track?ticketId=".concat(t)),d("")};return(0,r.jsxs)("div",{children:[(0,r.jsxs)("form",{className:"flex flex-col gap-8 mt-12 max-w-[800px] w-full mx-auto items-center px-4",children:[(0,r.jsx)("input",{type:"text",placeholder:"Enter ticket number or membership card no.",className:"w-full py-2 bg-transparent border-b-2 \n                          border-primary text-white font-normal outline-none placeholder:text-white ".concat(s&&"border-red-500"),value:t,onChange:e=>{a(e.target.value)}}),(0,r.jsx)(i.Z,{variant:"solid",onClick:c,children:"Submit"})]}),s&&(0,r.jsx)("p",{className:"text-red-500 text-center my-4",children:s})]})}}},e=>{var t=t=>e(e.s=t);e.O(0,[236,130,215,744],()=>t(8793)),_N_E=e.O()}]);