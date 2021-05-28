(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[399],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),u=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,h=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(h,i(i({ref:t},s),{},{components:n})):a.createElement(h,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4779:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return c},default:function(){return s}});var a=n(2122),r=n(9756),o=(n(7294),n(3905)),i={id:"touch",title:"Touch Detection",sidebar_label:"Touch Detection"},l={unversionedId:"tutorials/tasks/touch",id:"tutorials/tasks/touch",isDocsHomePage:!1,title:"Touch Detection",description:"The TouchDetect task predicts if there is an object in contact with the surface of the sensor.",source:"@site/docs/tutorials/tasks/touch.md",sourceDirName:"tutorials/tasks",slug:"/tutorials/tasks/touch",permalink:"/docs/tutorials/tasks/touch",editUrl:"https://github.com/facebookresearch/pytouch/edit/master/website/docs/tutorials/tasks/touch.md",version:"current",sidebar_label:"Touch Detection",frontMatter:{id:"touch",title:"Touch Detection",sidebar_label:"Touch Detection"},sidebar:"docs",previous:{title:"Sensor Input",permalink:"/docs/tutorials/basic/sensor_input"},next:{title:"Slip Detection",permalink:"/docs/tutorials/tasks/slip"}},c=[{value:"Available Pre-Trained Models",id:"available-pre-trained-models",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Normalization",id:"normalization",children:[]}],u={toc:c};function s(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"TouchDetect")," task predicts if there is an object in contact with the surface of the sensor."),(0,o.kt)("h3",{id:"available-pre-trained-models"},"Available Pre-Trained Models"),(0,o.kt)("p",null,"The following pre-trained models are available for use with the ",(0,o.kt)("inlineCode",{parentName:"p"},"TouchDetect")," task:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Dataset"),(0,o.kt)("th",{parentName:"tr",align:null},"Model Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Accuracy"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"DIGIT"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"touchdetect_")),(0,o.kt)("td",{parentName:"tr",align:null},"xx.yy")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"GelSight"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"touchdetect_")),(0,o.kt)("td",{parentName:"tr",align:null},"xx.yy")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"OmniTact"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"touchdetect_")),(0,o.kt)("td",{parentName:"tr",align:null},"xx.yy")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Joint (DIGIT, Gelsight, OmniTact)"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"joint_touchdetect_")),(0,o.kt)("td",{parentName:"tr",align:null},"xx.yy")))),(0,o.kt)("h3",{id:"usage"},"Usage"),(0,o.kt)("p",null,"Initialize the ",(0,o.kt)("inlineCode",{parentName:"p"},"TouchDetect")," task with a sensor and pre-trained model,"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'touch_detect = TouchDetect(DigitSensor, zoo_model="touchdetect_resnet18")\n')),(0,o.kt)("p",null,"Calling ",(0,o.kt)("inlineCode",{parentName:"p"},"touch_detect")," on an input sample predicts with certainty if there is an object touching the sensor surface."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"is_touching, certainty = touch_detect(sample)\n")),(0,o.kt)("h3",{id:"normalization"},"Normalization"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"TouchDetect")," task loads default transform and normalization values from ",(0,o.kt)("inlineCode",{parentName:"p"},"pytouch.models.touch_detect.TouchDetectModelDefaults")," and is suitable for any pre-trained model from the ",(0,o.kt)("inlineCode",{parentName:"p"},"TorchVision")," package."),(0,o.kt)("p",null,"For custom models provide a custom class when initializing ",(0,o.kt)("inlineCode",{parentName:"p"},"TouchDetect")," in the format of:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"touch_detect = TouchDetect(model=my_custom_model, defaults=MyTouchDetectValues)\n\n")),(0,o.kt)("p",null,"Where ",(0,o.kt)("inlineCode",{parentName:"p"},"MyTouchDetectValues")," are in the following format,"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class MyTouchDetectValues:\n    SCALES = [64, 64]\n    MEANS = [0.123, 0.123, 0.123]\n    STDS = [0.123, 0.123, 0.123]\n    CLASSES = 2\n")))}s.isMDXComponent=!0}}]);