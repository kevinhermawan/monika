(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[705],{2076:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tutorial/run-using-opsgenie-notification",function(){return n(8313)}])},8313:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c},meta:function(){return s}});n(7294);var i=n(3905),a=n(8470);function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s={id:"run-using-opsgenie-notification",title:"Run using Opsgenie Notification"},r={meta:s},l=function(e){var t=e.children,n=o(e,["children"]);return(0,i.kt)(a.C,Object.assign({meta:s},n),t)};function c(e){var t=e.components,n=o(e,["components"]);return(0,i.kt)(l,Object.assign({},r,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This tutorial will show you how to integrate Monika with Opsgenie to get your Monika notifications through the Opsgenie dashboard."),(0,i.kt)("h2",Object.assign({},{id:"setup-opsgenie"}),"Setup Opsgenie",(0,i.kt)("a",Object.assign({parentName:"h2"},{href:"#setup-opsgenie",title:"Direct link to heading",className:"anchor"}),(0,i.kt)("span",Object.assign({parentName:"a"},{className:"icon icon-link"})))),(0,i.kt)("p",null,"To use Opsgenie, you need to create an account on the ",(0,i.kt)("a",Object.assign({parentName:"p"},{href:"https://www.atlassian.com/software/opsgenie"}),"Opsgenie website"),". After you have created your account, head over to the Teams menu in the Dashboard and create a Team."),(0,i.kt)("img",Object.assign({},{src:"https://miro.medium.com/max/1400/1*qhx-3z_Wvd2-YbDVfrOJkw.png",alt:null})),(0,i.kt)("p",null,"Now that you have created a team, go to the ",(0,i.kt)("strong",{parentName:"p"},"Integrations")," menu and click ",(0,i.kt)("strong",{parentName:"p"},"Add Integration"),". Then, select the ",(0,i.kt)("strong",{parentName:"p"},"API integration"),". You will be redirected to the API Key page. After that, copy the API Key and save it somewhere safe as we are going to need it later."),(0,i.kt)("img",Object.assign({},{src:"https://miro.medium.com/max/1400/1*U6Rs1uQZy8KFo_44tcYd2g.png",alt:null})),(0,i.kt)("p",null,"Once that\u2019s done, it\u2019s time to configure Monika to integrate with Opsgenie."),(0,i.kt)("h2",Object.assign({},{id:"integrate-monika-with-opsgenie"}),"Integrate Monika with Opsgenie",(0,i.kt)("a",Object.assign({parentName:"h2"},{href:"#integrate-monika-with-opsgenie",title:"Direct link to heading",className:"anchor"}),(0,i.kt)("span",Object.assign({parentName:"a"},{className:"icon icon-link"})))),(0,i.kt)("p",null,"Now that we have our API Key from Opsgenie, it\u2019s time to create a Monika configuration called ",(0,i.kt)("inlineCode",{parentName:"p"},"monika.yml")),(0,i.kt)("pre",null,(0,i.kt)("code",Object.assign({parentName:"pre"},{}),'notifications:\n  - id: unique-id-opsgenie\n    type: opsgenie\n    data:\n      geniekey: <YOUR_API_KEY>\nprobes:\n  - id: "1"\n    name: Localhost\n    description: Check status\n    interval: 3\n    incidentThreshold: 3\n    recoveryThreshold: 3\n    requests:\n      - method: GET\n        url: https://httpbin.org/delay/2500\n    alerts:\n      - query: response.time > 2000\n        message: Response time more than 2 seconds\n      - query: response.status != 200\n        message: Status not 2xx\n')),(0,i.kt)("p",null,"Let\u2019s take a look at the configuration above:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The Pushover notification channel will use the API Token and User Key you created from the previous step."),(0,i.kt)("li",{parentName:"ul"},"It will probe ",(0,i.kt)("a",Object.assign({parentName:"li"},{href:"https://httpbin.org/delay/2500"}),"https://httpbin.org/delay/2500"),(0,i.kt)("a",Object.assign({parentName:"li"},{href:"https://www.google.com%2C/"}),",")," with the method GET"),(0,i.kt)("li",{parentName:"ul"},"It will alert you if the response status code is not 200, or the response time is longer than two seconds"),(0,i.kt)("li",{parentName:"ul"},"The incident/recovery threshold count is 3, meaning Monika will only send notifications when the probed URL returns non-2xx status 3 times in a row. After sending the notifications, Monika will not send notifications anymore until the alert status changes.")),(0,i.kt)("p",null,"Once that\u2019s done, run Monika with the configuration above with the command ",(0,i.kt)("inlineCode",{parentName:"p"},"monika -c monika.yml")),(0,i.kt)("img",Object.assign({},{src:"https://miro.medium.com/max/1400/1*M0ddqavWVjDdfMc-AfeT6Q.png",alt:null})),(0,i.kt)("p",null,"Congratulations! You have successfully integrated Monika with Opsgenie! Note that Opsgenie integration is only available from the Monika version 1.8.0++"))}c.isMDXComponent=!0}},function(e){e.O(0,[547,778,470,774,888,179],(function(){return t=2076,e(e.s=t);var t}));var t=e.O();_N_E=t}]);