(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-200c246e"],{1:function(e,t){},"18a3":function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a("b775");function l(){return Object(n["a"])({url:"/dataUpload/dataUploadList",method:"get"})}},2:function(e,t){},3:function(e,t){},"8cc4":function(e,t,a){"use strict";var n=a("9dd3"),l=a.n(n);l.a},"9dd3":function(e,t,a){},a842:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[e._m(0),e._v(" "),a("aside",[a("strong",[e._v("分类上传")]),e._v(" "),a("DataTypeOption",{staticStyle:{"margin-left":"80px"},model:{value:e.dataType,callback:function(t){e.dataType=t},expression:"dataType"}}),e._v(" "),a("upload-excel-component",{staticStyle:{display:"inline-block"},attrs:{id:"upload1","on-success":e.handleSuccess,"before-upload":e.beforeUpload}})],1),e._v(" "),a("aside",[a("strong",[e._v("打包上传")]),e._v(" "),a("upload-excel-component",{staticStyle:{display:"inline-block","margin-left":"380px"},attrs:{id:"upload2","on-success":e.handleSuccess,"before-upload":e.beforeUpload}})],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],attrs:{data:e.list,"element-loading-text":"拼命加载中",border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{align:"center",label:"上传编号"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[e._v("\n        "+e._s(a.id)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"银行名称",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[e._v("\n        "+e._s(a.bank_name)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"数据类型",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[e._v("\n        "+e._s(a.dataType)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"上传人",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[e._v("\n        "+e._s(a.usrName)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"上传时间"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("i",{staticClass:"el-icon-time"}),e._v(" "),a("span",[e._v(e._s(e._f("parseTime")(n.timestamp,"{y}-{m}-{d} {h}:{i}:{s}")))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"状态",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[e._v("\n        "+e._s(a.status)+"\n      ")]}}])})],1)],1)},l=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("aside",[a("strong",[e._v("提示：")]),e._v(" 分类上传请先选择数据类型\n      ")])}],s=(a("7f7f"),a("96cf"),a("3b8d")),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{display:"inline-block"}},[a("label",{staticClass:"radio-label"},[e._v("数据类型: ")]),e._v(" "),a("el-select",{staticStyle:{width:"220px"},model:{value:e.dataType,callback:function(t){e.dataType=t},expression:"dataType"}},e._l(e.options,(function(e){return a("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1)},i=[],o={props:{value:{type:String,default:"xlsx"}},data:function(){return{options:["存量个人客户信息表","存量单位客户信息表","等"]}},computed:{dataType:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}}},c=o,u=a("2877"),d=Object(u["a"])(c,r,i,!1,null,null,null),p=d.exports,f=a("18a3"),v=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("input",{ref:"excel-upload-input",staticClass:"excel-upload-input",attrs:{type:"file",accept:".xlsx, .xls"},on:{change:e.handleClick}}),e._v(" "),a("el-button",{staticStyle:{"margin-left":"16px"},attrs:{loading:e.loading,size:"mini",type:"primary"},on:{click:e.handleUpload}},[e._v("\n    上传\n  ")])],1)},h=[],g=a("1146"),_=a.n(g),m={props:{beforeUpload:Function,onSuccess:Function},data:function(){return{loading:!1,excelData:{header:null,results:null}}},methods:{generateData:function(e){var t=e.header,a=e.results;this.excelData.header=t,this.excelData.results=a,this.onSuccess&&this.onSuccess(this.excelData)},handleDrop:function(e){if(e.stopPropagation(),e.preventDefault(),!this.loading){var t=e.dataTransfer.files;if(1===t.length){var a=t[0];if(!this.isExcel(a))return this.$message.error("Only supports upload .xlsx, .xls, .csv suffix files"),!1;this.upload(a),e.stopPropagation(),e.preventDefault()}else this.$message.error("Only support uploading one file!")}},handleDragover:function(e){e.stopPropagation(),e.preventDefault(),e.dataTransfer.dropEffect="copy"},handleUpload:function(){this.$refs["excel-upload-input"].click()},handleClick:function(e){var t=e.target.files,a=t[0];a&&this.upload(a)},upload:function(e){if(this.$refs["excel-upload-input"].value=null,this.beforeUpload){var t=this.beforeUpload(e);t&&this.readerData(e)}else this.readerData(e)},readerData:function(e){var t=this;return this.loading=!0,new Promise((function(a,n){var l=new FileReader;l.onload=function(e){var n=e.target.result,l=_.a.read(n,{type:"array"}),s=l.SheetNames[0],r=l.Sheets[s],i=t.getHeaderRow(r),o=_.a.utils.sheet_to_json(r);t.generateData({header:i,results:o}),t.loading=!1,a()},l.readAsArrayBuffer(e)}))},getHeaderRow:function(e){var t,a=[],n=_.a.utils.decode_range(e["!ref"]),l=n.s.r;for(t=n.s.c;t<=n.e.c;++t){var s=e[_.a.utils.encode_cell({c:t,r:l})],r="UNKNOWN "+t;s&&s.t&&(r=_.a.utils.format_cell(s)),a.push(r)}return a},isExcel:function(e){return/\.(xlsx|xls|csv)$/.test(e.name)}}},b=m,y=(a("8cc4"),Object(u["a"])(b,v,h,!1,null,"f3262638",null)),x=y.exports,w={name:"AvatarUploadDemo",components:{DataTypeOption:p,UploadExcelComponent:x},data:function(){return{dataType:"请选择",list:[],listLoading:!0,autoWidth:!0,tableData:[],tableHeader:[]}},created:function(){this.fetchData()},methods:{fetchData:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.listLoading=!0,e.next=3,Object(f["a"])();case 3:t=e.sent,this.list=t.data.items,this.listLoading=!1;case 6:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),beforeUpload:function(e){console.log(e.name);var t=e.size/1024/1024<1;return!!t||(this.$message({message:"Please do not upload files larger than 1m in size.",type:"warning"}),!1)},handleSuccess:function(e){var t=e.results,a=e.header;this.tableData=t,this.tableHeader=a,console.log(this.tableData),console.log(this.tableHeader)}}},D=w,k=Object(u["a"])(D,n,l,!1,null,"08daab3f",null);t["default"]=k.exports}}]);