import{_ as s,z as a,b as e,c as t,e as c,A as l,u as n,F as i,H as r}from"./framework.BrC0DRXd.js";const o={class:"cat-or-tag"},p={class:"title"},g={class:"title-name"},y={key:0,class:"title-num"},u={key:1,class:"title-num"},m={key:0,class:"type-lists"},d=["href"],f={class:"name"},h={class:"num"},k={key:1,class:"type-lists"},v=["href"],_={class:"name"},D={class:"num"},b=s({__name:"CatOrTag",props:{type:{type:String,default:"categories"}},setup(s){const{theme:b}=a();return(a,j)=>{var O,C;return e(),t("div",o,[c("div",p,[c("h1",g,l("categories"===s.type?"全部分类":"全部标签"),1),"categories"===s.type?(e(),t("span",y," 共有 "+l((null==(O=Object.keys(n(b).categoriesData))?void 0:O.length)||0)+" 个分类 ",1)):(e(),t("span",u," 共有 "+l((null==(C=Object.keys(n(b).tagsData))?void 0:C.length)||0)+" 个标签 ",1))]),"categories"===s.type?(e(),t("div",m,[(e(!0),t(i,null,r(n(b).categoriesData,((s,a,n)=>(e(),t("a",{key:n,href:`/pages/categories/${a}`,class:"type-item s-card"},[j[0]||(j[0]=c("i",{class:"iconfont icon-folder"},null,-1)),c("span",f,l(a),1),c("span",h,l(s.count),1)],8,d)))),128))])):(e(),t("div",k,[(e(!0),t(i,null,r(n(b).tagsData,((s,a,n)=>(e(),t("a",{key:n,href:`/pages/tags/${a}`,class:"type-item s-card"},[j[1]||(j[1]=c("i",{class:"iconfont icon-hashtag"},null,-1)),c("span",_,l(a),1),c("span",D,l(s.count),1)],8,v)))),128))]))])}}},[["__scopeId","data-v-5cf8e0f8"]]);export{b as C};
