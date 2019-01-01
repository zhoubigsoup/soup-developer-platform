(function(e){function o(){this._settings=[];this._extensions=[];this.regional=[];this.regional[""]={errorLoadingText:"Error loading",notSupportedText:"This browser does not support SVG"};this.local=this.regional[""];this._uuid=(new Date).getTime();var a;try{a=!!(window.ActiveXObject&&new ActiveXObject("RenesisX.RenesisCtrl"))}catch(b){a=false}this._renesis=a}function p(a,b){this._svg=a;this._container=b;for(var c=0;c<e.svg._extensions.length;c++){var d=e.svg._extensions[c];this[d[0]]=new d[1](this)}}
function i(){this._path=""}function q(){this._parts=[]}function k(a){return a&&a.constructor==Array}e.extend(o.prototype,{markerClassName:"hasSVG",svgNS:"http://www.w3.org/2000/svg",xlinkNS:"http://www.w3.org/1999/xlink",_wrapperClass:p,_attrNames:{class_:"class",in_:"in",alignmentBaseline:"alignment-baseline",baselineShift:"baseline-shift",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorRendering:"color-rendering",
dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",
imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",
strokeWidth:"stroke-width",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",underlinePosition:"underline-position",underlineThickness:"underline-thickness",vertAdvY:"vert-adv-y",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode"},_attachSVG:function(a,b){var c=a.namespaceURI==this.svgNS?a:null;a=c?null:a;if(!e(a||c).hasClass(this.markerClassName)){if(typeof b=="string")b={loadURL:b};else if(typeof b=="function")b={onLoad:b};e(a||
c).addClass(this.markerClassName);try{if(!c){c=document.createElementNS(this.svgNS,"svg");c.setAttribute("version","1.1");c.setAttribute("width",a.clientWidth);c.setAttribute("height",a.clientHeight);a.appendChild(c)}this._afterLoad(a,c,b||{})}catch(d){if(e.browser.msie){if(!a.id)a.id="svg"+this._uuid++;this._settings[a.id]=b;a.innerHTML='<embed type="image/svg+xml" width="100%" height="100%" src="'+(b.initPath||"")+'blank.svg"/>'}else a.innerHTML='<p class="svg_error">'+this.local.notSupportedText+
"</p>"}}},_registerSVG:function(){for(var a=0;a<document.embeds.length;a++){var b=document.embeds[a].parentNode;if(!(!e(b).hasClass(e.svg.markerClassName)||e.data(b,"svgwrapper"))){var c=null;try{c=document.embeds[a].getSVGDocument()}catch(d){setTimeout(e.svg._registerSVG,250);break}(c=c?c.documentElement:null)&&e.svg._afterLoad(b,c)}}},_afterLoad:function(a,b,c){c=c||this._settings[a.id];this._settings[a?a.id:""]=null;var d=new this._wrapperClass(b,a);e.data(a||b,"svgwrapper",d);try{c.loadURL&&d.load(c.loadURL,
c);c.settings&&d.configure(c.settings);if(c.onLoad&&!c.loadURL)c.onLoad.apply(a||b,[d])}catch(f){alert(f)}},_getSVG:function(a){a=typeof a=="string"?e(a)[0]:a.jquery?a[0]:a;return e.data(a,"svgwrapper")},_destroySVG:function(a){var b=e(a);if(b.hasClass(this.markerClassName)){b.removeClass(this.markerClassName);a.namespaceURI!=this.svgNS&&b.empty();e.removeData(a,"svgwrapper")}},addExtension:function(a,b){this._extensions.push([a,b])}});e.extend(p.prototype,{_width:function(){return this._container?
this._container.clientWidth:this._svg.width},_height:function(){return this._container?this._container.clientHeight:this._svg.height},root:function(){return this._svg},configure:function(a,b){if(b)for(var c=this._svg.attributes.length-1;c>=0;c--){var d=this._svg.attributes.item(c);d.nodeName=="onload"||d.nodeName=="version"||d.nodeName.substring(0,5)=="xmlns"||this._svg.attributes.removeNamedItem(d.nodeName)}for(var f in a)this._svg.setAttribute(f,a[f]);return this},getElementById:function(a){return this._svg.ownerDocument.getElementById(a)},
change:function(a,b){if(a)for(var c in b)b[c]==null?a.removeAttribute(c):a.setAttribute(c,b[c]);return this},_args:function(a,b,c){b.splice(0,0,"parent");b.splice(b.length,0,"settings");var d={},f=0;if(a[0]!=null&&a[0].jquery)a[0]=a[0][0];if(a[0]!=null&&!(typeof a[0]=="object"&&a[0].nodeName)){d.parent=null;f=1}for(var j=0;j<a.length;j++)d[b[j+f]]=a[j];c&&e.each(c,function(l,g){if(typeof d[g]=="object"){d.settings=d[g];d[g]=null}});return d},title:function(){var a=this._args(arguments,["text"]),b=
this._makeNode(a.parent,"title",a.settings||{});b.appendChild(this._svg.ownerDocument.createTextNode(a.text));return b},describe:function(){var a=this._args(arguments,["text"]),b=this._makeNode(a.parent,"desc",a.settings||{});b.appendChild(this._svg.ownerDocument.createTextNode(a.text));return b},defs:function(){var a=this._args(arguments,["id"],["id"]);return this._makeNode(a.parent,"defs",e.extend(a.id?{id:a.id}:{},a.settings||{}))},symbol:function(){var a=this._args(arguments,["id","x1","y1","width",
"height"]);return this._makeNode(a.parent,"symbol",e.extend({id:a.id,viewBox:a.x1+" "+a.y1+" "+a.width+" "+a.height},a.settings||{}))},marker:function(){var a=this._args(arguments,["id","refX","refY","mWidth","mHeight","orient"],["orient"]);return this._makeNode(a.parent,"marker",e.extend({id:a.id,refX:a.refX,refY:a.refY,markerWidth:a.mWidth,markerHeight:a.mHeight,orient:a.orient||"auto"},a.settings||{}))},style:function(){var a=this._args(arguments,["styles"]),b=this._makeNode(a.parent,"style",e.extend({type:"text/css"},
a.settings||{}));b.appendChild(this._svg.ownerDocument.createTextNode(a.styles));e.browser.opera&&e("head").append('<style type="text/css">'+a.styles+"</style>");return b},script:function(){var a=this._args(arguments,["script","type"],["type"]),b=this._makeNode(a.parent,"script",e.extend({type:a.type||"text/javascript"},a.settings||{}));b.appendChild(this._svg.ownerDocument.createTextNode(this._escapeXML(a.script)));e.browser.mozilla||e.globalEval(a.script);return b},linearGradient:function(){var a=
this._args(arguments,["id","stops","x1","y1","x2","y2"],["x1"]),b=e.extend({id:a.id},a.x1!=null?{x1:a.x1,y1:a.y1,x2:a.x2,y2:a.y2}:{});return this._gradient(a.parent,"linearGradient",e.extend(b,a.settings||{}),a.stops)},radialGradient:function(){var a=this._args(arguments,["id","stops","cx","cy","r","fx","fy"],["cx"]),b=e.extend({id:a.id},a.cx!=null?{cx:a.cx,cy:a.cy,r:a.r,fx:a.fx,fy:a.fy}:{});return this._gradient(a.parent,"radialGradient",e.extend(b,a.settings||{}),a.stops)},_gradient:function(a,
b,c,d){a=this._makeNode(a,b,c);for(b=0;b<d.length;b++){c=d[b];this._makeNode(a,"stop",e.extend({offset:c[0],stopColor:c[1]},c[2]!=null?{stopOpacity:c[2]}:{}))}return a},pattern:function(){var a=this._args(arguments,["id","x","y","width","height","vx","vy","vwidth","vheight"],["vx"]),b=e.extend({id:a.id,x:a.x,y:a.y,width:a.width,height:a.height},a.vx!=null?{viewBox:a.vx+" "+a.vy+" "+a.vwidth+" "+a.vheight}:{});return this._makeNode(a.parent,"pattern",e.extend(b,a.settings||{}))},mask:function(){var a=
this._args(arguments,["id","x","y","width","height"]);return this._makeNode(a.parent,"mask",e.extend({id:a.id,x:a.x,y:a.y,width:a.width,height:a.height},a.settings||{}))},createPath:function(){return new i},createText:function(){return new q},svg:function(){var a=this._args(arguments,["x","y","width","height","vx","vy","vwidth","vheight"],["vx"]),b=e.extend({x:a.x,y:a.y,width:a.width,height:a.height},a.vx!=null?{viewBox:a.vx+" "+a.vy+" "+a.vwidth+" "+a.vheight}:{});return this._makeNode(a.parent,
"svg",e.extend(b,a.settings||{}))},group:function(){var a=this._args(arguments,["id"],["id"]);return this._makeNode(a.parent,"g",e.extend({id:a.id},a.settings||{}))},use:function(){var a=this._args(arguments,["x","y","width","height","ref"]);if(typeof a.x=="string"){a.ref=a.x;a.settings=a.y;a.x=a.y=a.width=a.height=null}var b=this._makeNode(a.parent,"use",e.extend({x:a.x,y:a.y,width:a.width,height:a.height},a.settings||{}));b.setAttributeNS(e.svg.xlinkNS,"href",a.ref);return b},link:function(){var a=
this._args(arguments,["ref"]),b=this._makeNode(a.parent,"a",a.settings);b.setAttributeNS(e.svg.xlinkNS,"href",a.ref);return b},image:function(){var a=this._args(arguments,["x","y","width","height","ref"]),b=this._makeNode(a.parent,"image",e.extend({x:a.x,y:a.y,width:a.width,height:a.height},a.settings||{}));b.setAttributeNS(e.svg.xlinkNS,"href",a.ref);return b},path:function(){var a=this._args(arguments,["path"]);return this._makeNode(a.parent,"path",e.extend({d:a.path.path?a.path.path():a.path},
a.settings||{}))},rect:function(){var a=this._args(arguments,["x","y","width","height","rx","ry"],["rx"]);return this._makeNode(a.parent,"rect",e.extend({x:a.x,y:a.y,width:a.width,height:a.height},a.rx?{rx:a.rx,ry:a.ry}:{},a.settings||{}))},circle:function(){var a=this._args(arguments,["cx","cy","r"]);return this._makeNode(a.parent,"circle",e.extend({cx:a.cx,cy:a.cy,r:a.r},a.settings||{}))},ellipse:function(){var a=this._args(arguments,["cx","cy","rx","ry"]);return this._makeNode(a.parent,"ellipse",
e.extend({cx:a.cx,cy:a.cy,rx:a.rx,ry:a.ry},a.settings||{}))},line:function(){var a=this._args(arguments,["x1","y1","x2","y2"]);return this._makeNode(a.parent,"line",e.extend({x1:a.x1,y1:a.y1,x2:a.x2,y2:a.y2},a.settings||{}))},polyline:function(){var a=this._args(arguments,["points"]);return this._poly(a.parent,"polyline",a.points,a.settings)},polygon:function(){var a=this._args(arguments,["points"]);return this._poly(a.parent,"polygon",a.points,a.settings)},_poly:function(a,b,c,d){for(var f="",j=
0;j<c.length;j++)f+=c[j].join()+" ";return this._makeNode(a,b,e.extend({points:e.trim(f)},d||{}))},text:function(){var a=this._args(arguments,["x","y","value"]);if(typeof a.x=="string"&&arguments.length<4){a.value=a.x;a.settings=a.y;a.x=a.y=null}return this._text(a.parent,"text",a.value,e.extend({x:a.x&&k(a.x)?a.x.join(" "):a.x,y:a.y&&k(a.y)?a.y.join(" "):a.y},a.settings||{}))},textpath:function(){var a=this._args(arguments,["path","value"]),b=this._text(a.parent,"textPath",a.value,a.settings||{});
b.setAttributeNS(e.svg.xlinkNS,"href",a.path);return b},_text:function(a,b,c,d){a=this._makeNode(a,b,d);if(typeof c=="string")a.appendChild(a.ownerDocument.createTextNode(c));else for(b=0;b<c._parts.length;b++){d=c._parts[b];if(d[0]=="tspan"){var f=this._makeNode(a,d[0],d[2]);f.appendChild(a.ownerDocument.createTextNode(d[1]));a.appendChild(f)}else if(d[0]=="tref"){f=this._makeNode(a,d[0],d[2]);f.setAttributeNS(e.svg.xlinkNS,"href",d[1]);a.appendChild(f)}else if(d[0]=="textpath"){f=e.extend({},d[2]);
f.href=null;f=this._makeNode(a,d[0],f);f.setAttributeNS(e.svg.xlinkNS,"href",d[2].href);f.appendChild(a.ownerDocument.createTextNode(d[1]));a.appendChild(f)}else a.appendChild(a.ownerDocument.createTextNode(d[1]))}return a},other:function(){var a=this._args(arguments,["name"]);return this._makeNode(a.parent,a.name,a.settings||{})},_makeNode:function(a,b,c){a=a||this._svg;var d=this._svg.ownerDocument.createElementNS(e.svg.svgNS,b);for(b in c){var f=c[b];if(f!=null&&f!=null&&(typeof f!="string"||f!=
""))d.setAttribute(e.svg._attrNames[b]||b,f)}a.appendChild(d);return d},add:function(a){var b=this._args(arguments.length==1?[null,a]:arguments,["node"]),c=this;b.parent=b.parent||this._svg;try{if(e.svg._renesis)throw"Force traversal";b.parent.appendChild(b.node.cloneNode(true))}catch(d){b.node=b.node.jquery?b.node:e(b.node);b.node.each(function(){var f=c._cloneAsSVG(this);f&&b.parent.appendChild(f)})}return this},_cloneAsSVG:function(a){var b=null;if(a.nodeType==1){b=this._svg.ownerDocument.createElementNS(e.svg.svgNS,
this._checkName(a.nodeName));for(var c=0;c<a.attributes.length;c++){var d=a.attributes.item(c);if(d.nodeName!="xmlns"&&d.nodeValue)d.prefix=="xlink"?b.setAttributeNS(e.svg.xlinkNS,d.localName,d.nodeValue):b.setAttribute(this._checkName(d.nodeName),d.nodeValue)}for(c=0;c<a.childNodes.length;c++)(d=this._cloneAsSVG(a.childNodes[c]))&&b.appendChild(d)}else if(a.nodeType==3){if(e.trim(a.nodeValue))b=this._svg.ownerDocument.createTextNode(a.nodeValue)}else if(a.nodeType==4)if(e.trim(a.nodeValue))try{b=
this._svg.ownerDocument.createCDATASection(a.nodeValue)}catch(f){b=this._svg.ownerDocument.createTextNode(a.nodeValue.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"))}return b},_checkName:function(a){a=a.substring(0,1)>="A"&&a.substring(0,1)<="Z"?a.toLowerCase():a;return a.substring(0,4)=="svg:"?a.substring(4):a},load:function(a,b){b=typeof b=="boolean"?{addTo:b}:typeof b=="function"?{onLoad:b}:b||{};b.addTo||this.clear(false);var c=[this._svg.getAttribute("width"),this._svg.getAttribute("height")],
d=this,f=function(g){g=e.svg.local.errorLoadingText+": "+g;b.onLoad?b.onLoad.apply(d._container||d._svg,[d,g]):d.text(null,10,20,g)},j=function(g){var h=new ActiveXObject("Microsoft.XMLDOM");h.validateOnParse=false;h.resolveExternals=false;h.async=false;h.loadXML(g);if(h.parseError.errorCode!=0){f(h.parseError.reason);return null}return h},l=function(g){if(g)if(g.documentElement.nodeName!="svg"){var h=g.getElementsByTagName("parsererror");g=h.length?h[0].getElementsByTagName("div"):[];f(!h.length?
"???":(g.length?g[0]:h[0]).firstChild.nodeValue)}else{var m={};for(h=0;h<g.documentElement.attributes.length;h++){var n=g.documentElement.attributes.item(h);if(!(n.nodeName=="version"||n.nodeName.substring(0,5)=="xmlns"))m[n.nodeName]=n.nodeValue}d.configure(m,true);g=g.documentElement.childNodes;for(h=0;h<g.length;h++)try{if(e.svg._renesis)throw"Force traversal";d._svg.appendChild(g[h].cloneNode(true));g[h].nodeName=="script"&&e.globalEval(g[h].textContent)}catch(r){d.add(null,g[h])}b.changeSize||
d.configure({width:c[0],height:c[1]});if(b.onLoad)b.onLoad.apply(d._container||d._svg,[d])}};a.match("<svg")?l(e.browser.msie?j(a):(new DOMParser).parseFromString(a,"text/xml")):e.ajax({url:a,dataType:e.browser.msie?"text":"xml",success:function(g){l(e.browser.msie?j(g):g)},error:function(g,h,m){f(h+(m?" "+m.message:""))}});return this},remove:function(a){a=a.jquery?a[0]:a;a.parentNode.removeChild(a);return this},clear:function(a){for(a&&this.configure({},true);this._svg.firstChild;)this._svg.removeChild(this._svg.firstChild);
return this},toSVG:function(a){a=a||this._svg;return typeof XMLSerializer=="undefined"?this._toSVG(a):(new XMLSerializer).serializeToString(a)},_toSVG:function(a){var b="";if(!a)return b;if(a.nodeType==3)b=a.nodeValue;else if(a.nodeType==4)b="<![CDATA["+a.nodeValue+"]]\>";else{b="<"+a.nodeName;if(a.attributes)for(var c=0;c<a.attributes.length;c++){var d=a.attributes.item(c);e.trim(d.nodeValue)==""||d.nodeValue.match(/^\[object/)||d.nodeValue.match(/^function/)||(b+=" "+(d.namespaceURI==e.svg.xlinkNS?
"xlink:":"")+d.nodeName+'="'+d.nodeValue+'"')}if(a.firstChild){b+=">";for(c=a.firstChild;c;){b+=this._toSVG(c);c=c.nextSibling}b+="</"+a.nodeName+">"}else b+="/>"}return b},_escapeXML:function(a){a=a.replace(/&/g,"&amp;");a=a.replace(/</g,"&lt;");return a=a.replace(/>/g,"&gt;")}});e.extend(i.prototype,{reset:function(){this._path="";return this},move:function(a,b,c){c=k(a)?b:c;return this._coords(c?"m":"M",a,b)},line:function(a,b,c){c=k(a)?b:c;return this._coords(c?"l":"L",a,b)},horiz:function(a,
b){this._path+=(b?"h":"H")+(k(a)?a.join(" "):a);return this},vert:function(a,b){this._path+=(b?"v":"V")+(k(a)?a.join(" "):a);return this},curveC:function(a,b,c,d,f,j,l){l=k(a)?b:l;return this._coords(l?"c":"C",a,b,c,d,f,j)},smoothC:function(a,b,c,d,f){f=k(a)?b:f;return this._coords(f?"s":"S",a,b,c,d)},curveQ:function(a,b,c,d,f){f=k(a)?b:f;return this._coords(f?"q":"Q",a,b,c,d)},smoothQ:function(a,b,c){c=k(a)?b:c;return this._coords(c?"t":"T",a,b)},_coords:function(a,b,c,d,f,j,l){if(k(b))for(c=0;c<
b.length;c++){d=b[c];this._path+=(c==0?a:" ")+d[0]+","+d[1]+(d.length<4?"":" "+d[2]+","+d[3]+(d.length<6?"":" "+d[4]+","+d[5]))}else this._path+=a+b+","+c+(d==null?"":" "+d+","+f+(j==null?"":" "+j+","+l));return this},arc:function(a,b,c,d,f,j,l,g){g=k(a)?b:g;this._path+=g?"a":"A";if(k(a))for(b=0;b<a.length;b++){c=a[b];this._path+=(b==0?"":" ")+c[0]+","+c[1]+" "+c[2]+" "+(c[3]?"1":"0")+","+(c[4]?"1":"0")+" "+c[5]+","+c[6]}else this._path+=a+","+b+" "+c+" "+(d?"1":"0")+","+(f?"1":"0")+" "+j+","+l;return this},
close:function(){this._path+="z";return this},path:function(){return this._path}});i.prototype.moveTo=i.prototype.move;i.prototype.lineTo=i.prototype.line;i.prototype.horizTo=i.prototype.horiz;i.prototype.vertTo=i.prototype.vert;i.prototype.curveCTo=i.prototype.curveC;i.prototype.smoothCTo=i.prototype.smoothC;i.prototype.curveQTo=i.prototype.curveQ;i.prototype.smoothQTo=i.prototype.smoothQ;i.prototype.arcTo=i.prototype.arc;e.extend(q.prototype,{reset:function(){this._parts=[];return this},string:function(a){this._parts[this._parts.length]=
["text",a];return this},span:function(a,b){this._parts[this._parts.length]=["tspan",a,b];return this},ref:function(a,b){this._parts[this._parts.length]=["tref",a,b];return this},path:function(a,b,c){this._parts[this._parts.length]=["textpath",b,e.extend({href:a},c||{})];return this}});e.fn.svg=function(a){var b=Array.prototype.slice.call(arguments,1);if(typeof a=="string"&&a=="get")return e.svg["_"+a+"SVG"].apply(e.svg,[this[0]].concat(b));return this.each(function(){typeof a=="string"?e.svg["_"+
a+"SVG"].apply(e.svg,[this].concat(b)):e.svg._attachSVG(this,a||{})})};e.svg=new o})(jQuery);
