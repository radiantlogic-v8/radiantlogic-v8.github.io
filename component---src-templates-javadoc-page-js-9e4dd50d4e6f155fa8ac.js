"use strict";(self.webpackChunkradiant_logic_documentation=self.webpackChunkradiant_logic_documentation||[]).push([[744],{8216:function(e,n,t){var i=t(7294),r=t(574),a=t(527);n.Z=()=>{const e=(0,i.useContext)(a.Pn),n=n=>{var t;return("/"+(null==e||null===(t=e.selectedVersion)||void 0===t?void 0:t.versionPrefix)+"/"+n).replace(/\/+/g,"/")};return{selectedApiVersion:e.selectedVersion,apiVersions:e.versions,changeSelectedApiVersion:async n=>{var t;const i=e.selectedVersion.versionPrefix,a=(null!==(t=location.pathname)&&void 0!==t?t:"").replace(new RegExp("/^("+i+"\\.)/"),""),o="/"+n.versionPrefix+a;e.sitePages.includes(o)?await(0,r.navigate)(""+o):await(0,r.navigate)("/"+n.versionPrefix)},getPathWithVersionPrefix:n,navigateWithinCurrentVersion:async function(e,t){void 0===t&&(t=void 0),await(0,r.navigate)(n(e),t)}}}},2083:function(e,n,t){t.r(n);t(7207);var i=t(7294),r=t(8678),a=t(3100),o=t(527),s=t(8216);n.default=e=>{let{data:n,location:t}=e;const{selectedApiVersion:l}=(0,s.Z)(),c=n.allHtmlContent.edges[0].node.content.replaceAll(/(\.\.\/)+/g,"/").replaceAll(".html","").replaceAll(/href="\/?(?!#)/g,'href="/'+(""===(null==l?void 0:l.versionPrefix)?"":(null==l?void 0:l.versionPrefix)+"/")+"javadoc/"),u=(0,i.useContext)(o.P0);return(0,i.useEffect)((()=>{u({type:"UPDATE_SELECTED_API_VERSION",payload:t}),u({type:"UPDATE_CURRENT_LOCATION",payload:{location:t}})}),[t]),i.createElement(r.Z,{tocContents:n.rootToc},i.createElement(a.xu,{w:"100%",dangerouslySetInnerHTML:{__html:c}}))}},3100:function(e,n,t){t.d(n,{xu:function(){return o}});var i=t(498),r=t(5059),a=t(5893),o=(0,i.m)("div");o.displayName="Box";var s=(0,r.G)((function(e,n){const{size:t,centerContent:i=!0,...r}=e,s=i?{display:"flex",alignItems:"center",justifyContent:"center"}:{};return(0,a.jsx)(o,{ref:n,boxSize:t,__css:{...s,flexShrink:0,flexGrow:0},...r})}));s.displayName="Square",(0,r.G)((function(e,n){const{size:t,...i}=e;return(0,a.jsx)(s,{size:t,ref:n,borderRadius:"9999px",...i})})).displayName="Circle"},204:function(e,n,t){t.d(n,{k:function(){return o}});var i=t(5059),r=t(498),a=t(5893),o=(0,i.G)((function(e,n){const{direction:t,align:i,justify:o,wrap:s,basis:l,grow:c,shrink:u,...d}=e,f={display:"flex",flexDirection:t,alignItems:i,justifyContent:o,flexWrap:s,flexBasis:l,flexGrow:c,flexShrink:u};return(0,a.jsx)(r.m.div,{ref:n,__css:f,...d})}));o.displayName="Flex"}}]);
//# sourceMappingURL=component---src-templates-javadoc-page-js-9e4dd50d4e6f155fa8ac.js.map