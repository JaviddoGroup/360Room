// Garden Gnome Software - Skin
// Pano2VR 7.0.4/19982
// Filename: HotMove.ggsk
// Generated 2024-01-23T19:32:27

function pano2vrSkin(player,base) {
	var me=this;
	var skin=this;
	var flag=false;
	var hotspotTemplates={};
	var skinKeyPressed = 0;
	this.player=player;
	player.setApiVersion(7);
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	var cssPrefix="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown={};
	this.elementMouseOver={};
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	for(var i=0;i<prefixes.length;i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix='-' + prefixes[i].toLowerCase() + '-';
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; });
	
	var parameterToTransform=function(p) {
		return p.def + 'translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this._=function(text, params) {
		return player._(text, params);
	}
	
	this.languageChanged=function() {
		var stack=[];
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdateText) {
				e.ggUpdateText();
			}
			if (e.ggUpdateAria) {
				e.ggUpdateAria();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('sizechanged', function () { me.updateSize(me.divSkin);});
	player.addListener('languagechanged', this.languageChanged);
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me._information=document.createElement('div');
		el.ggId="Information";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._information.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._information.ggUpdatePosition=function (useTransition) {
		}
		el=me._info1=document.createElement('div');
		el.ggId="Info1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 500px;';
		hs+='left : calc(50% - ((400px + 0px) / 2) + 0px);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((500px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 400px;';
		hs+='pointer-events:auto;';
		hs+='border-radius: 15px; position: fixed;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._info1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info1.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_10=document.createElement('div');
		els=me._text_10__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 25px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_10.ggUpdateText=function() {
			var params = [];
			var hs = player._("Choco Pie", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_10.ggUpdateText();
		el.appendChild(els);
		me._text_10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_10.ggUpdatePosition=function (useTransition) {
		}
		me._info1.appendChild(me._text_10);
		el=me._image_4=document.createElement('div');
		els=me._image_4__img=document.createElement('img');
		els.className='ggskin ggskin_image_4';
		hs=basePath + 'images/image_4.webp';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 4";
		el.ggDx=-94;
		el.ggDy=-81;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 200px;';
		hs+='left : calc(50% - ((200px + 0px) / 2) - 94px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((200px + 0px) / 2) - 81px);';
		hs+='visibility : inherit;';
		hs+='width : 200px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_4.ggUpdatePosition=function (useTransition) {
		}
		me._info1.appendChild(me._image_4);
		el=me._image_5=document.createElement('div');
		els=me._image_5__img=document.createElement('img');
		els.className='ggskin ggskin_image_5';
		hs=basePath + 'images/image_5.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 5";
		el.ggDx=94;
		el.ggDy=-81;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 200px;';
		hs+='left : calc(50% - ((200px + 0px) / 2) + 94px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((200px + 0px) / 2) - 81px);';
		hs+='visibility : inherit;';
		hs+='width : 200px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_5.ggUpdatePosition=function (useTransition) {
		}
		me._info1.appendChild(me._image_5);
		el=me._text_1=document.createElement('div');
		els=me._text_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 17px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 150px;';
		hs+='left : calc(50% - ((353px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 353px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_1.ggUpdateText=function() {
			var params = [];
			var hs = player._("In 1979, Lotte Confectionery began to sell a similar confection. When \nLotte Confectionery put the Lotte Choco Pie\n on the market, it chose to spell the prefix slightly\ndifferently in Hangul from how Tongyang was spelling it.", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_1.ggUpdateText();
		el.appendChild(els);
		me._text_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_1.ggUpdatePosition=function (useTransition) {
		}
		me._info1.appendChild(me._text_1);
		el=me._svg_31=document.createElement('div');
		els=me._svg_31__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MCIgdmlld0JveD0iMCAwIDUwIDUwIiBmaWxsPSJub25lIiBoZWlnaHQ9IjUwIj4KIDxwYXRoIGQ9Ik00Mi42ODU2IDcuMzE0MzlDMzIuOTMxIC0yLjQzODEzIDE3LjA2NzQgLTIuNDM4MTMgNy4zMTI3OCA3LjMxNDM5Qy0yLjQzNzU5IDE3LjA2NjkgLTIuNDM3NTkgMzIuOTM0NyA3LjMxMjc4IDQyLjY4NzJDMTIuMTkwMSA0Ny41NjI1IDE4LjU5NTEgNDkuOTk4OSAyNS4wMDAzIDQ5Ljk5ODlDMzEuNDA1NCA0OS45OTg5IDM3LjgwODMgNDcuNTYyNCA0Mi42ODU2IDQyLjY4NzJDNTIuNDM4MSAzMi45MzQ4IDUyLj'+
			'QzODEgMTcuMDY2OSA0Mi42ODU2IDcuMzE0MzlaTTM1LjMxNTUgMzIuMzY5OUMzNi4xMzA0IDMzLjE4NDggMzYuMTMwNCAzNC41MDIxIDM1LjMxNTUgMzUuMzE3MUMzNC45MDkgMzUuNzIzNSAzNC4zNzU1IDM1LjkyNzggMzMuODQxOCAzNS45Mjc4QzMzLjMwODMgMzUuOTI3OCAzMi43NzQ2IDM1LjcyMzUgMzIuMzY4MiAzNS4zMTcxTDI1LjAwMDIgMjcuOTQ2OUwxNy42MzQyIDM1LjMxNDlDMTcuMjI1NyAzNS43MjE0IDE2LjY5MjEgMzUuOTI1NyAxNi4xNjA2IDM1LjkyNTdDMTUuNjI3IDM1LjkyNTcgMTUuMDkzNCAzNS43MjE0IDE0LjY4NjkgMzUuMzE0OUMxMy44NzIgMzQuNSAxMy44NzIgMzMu'+
			'MTgwNiAxNC42ODY5IDMyLjM2NzdMMjIuMDUyOSAyNC45OTk3TDE0LjY4NDkgMTcuNjMxN0MxMy44NyAxNi44MTY4IDEzLjg3IDE1LjQ5NzQgMTQuNjg0OSAxNC42ODQ1QzE1LjQ5NzggMTMuODY5NiAxNi44MTcxIDEzLjg2OTYgMTcuNjMyMSAxNC42ODQ1TDI1LjAwMDEgMjIuMDUyNUwzMi4zNjgxIDE0LjY4NDVDMzMuMTgzIDEzLjg2OTYgMzQuNTAwMyAxMy44Njk2IDM1LjMxNTMgMTQuNjg0NUMzNi4xMzAyIDE1LjQ5NzQgMzYuMTMwMiAxNi44MTY4IDM1LjMxNTMgMTcuNjMxN0wyNy45NDczIDI0Ljk5OTdMMzUuMzE1NSAzMi4zNjk5WiIgZmlsbD0iI0Y2OTIxRSIvPgo8L3N2Zz4K';
		me._svg_31__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='position : absolute;';
		hs+='right : 10px;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_31.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_31.onclick=function (e) {
			me._info1.style.transition='none';
			me._info1.style.visibility='hidden';
			me._info1.ggVisible=false;
		}
		me._svg_31.ggUpdatePosition=function (useTransition) {
		}
		me._info1.appendChild(me._svg_31);
		me._information.appendChild(me._info1);
		me.divSkin.appendChild(me._information);
		el=me._header0=document.createElement('div');
		el.ggId="Header";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._header0.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._header0.ggUpdatePosition=function (useTransition) {
		}
		el=me._floorplan01=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = 'FloorPlan01';
		el.ggId="FloorPlan01";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 200px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='right : 24px;';
		hs+='top : 25px;';
		hs+='visibility : inherit;';
		hs+='width : 200px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._floorplan01.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._floorplan01.ggUpdateConditionResize=function () {
			var mapDetails = player.getMapDetails(me._floorplan01.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._floorplan01.ggCalculateFloorplanSize(mapDetails);
				me._floorplan01.ggShowSimpleFloorplan(mapDetails);
				me._floorplan01.ggPlaceMarkersOnSimpleFloorplan();
			}
		}
		me._floorplan01.ggUpdatePosition=function (useTransition) {
			me._floorplan01.ggUpdateConditionResize();
		}
		me._header0.appendChild(me._floorplan01);
		el=me._svg_20=document.createElement('div');
		els=me._svg_20__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjI0Ij4KIDxwYXRoIGQ9Ik0xNSAzbDIuMyAyLjMtMi44OSAyLjg3IDEuNDIgMS40MkwxOC43IDYuNyAyMSA5VjN6TTMgOWwyLjMtMi4zIDIuODcgMi44OSAxLjQyLTEuNDJMNi43IDUuMyA5IDNIM3ptNiAxMmwtMi4zLTIuMyAyLjg5LTIuODctMS40Mi0xLjQyTDUuMyAxNy4zIDMgMTV2NnptMTItNmwtMi4zIDIuMy0yLjg3LTIuODktMS40MiAxLjQyIDIuODkgMi44N0wxNSAyMWg2eiIvPgo8L3N2Zz4K';
		me._svg_20__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._svg_20__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBoZWlnaHQ9IjI0Ij4KIDxwYXRoIGQ9Ik0xNSAzTDE3LjMgNS4zTDE0LjQxIDguMTdMMTUuODMgOS41OUwxOC43IDYuN0wyMSA5VjNIMTVaTTMgOUw1LjMgNi43TDguMTcgOS41OUw5LjU5IDguMTdMNi43IDUuM0w5IDNIM1Y5Wk05IDIxTDYuNyAxOC43TDkuNTkgMTUuODNMOC4xNyAxNC40MUw1LjMgMTcuM0wzIDE1VjIxSDlaTTIxIDE1TDE4LjcgMTcuM0wxNS44MyAxNC40MUwxNC40MSAxNS44M0wxNy4zIDE4LjdMMTUgMjFIMjFWMTVaIiBmaWxsPS'+
			'IjRjY5MjFFIi8+Cjwvc3ZnPgo=';
		me._svg_20__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		ela=me._svg_20__imga=document.createElement('img');
		ela.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBoZWlnaHQ9IjI0Ij4KIDxwYXRoIGQ9Ik0xNSAzTDE3LjMgNS4zTDE0LjQxIDguMTdMMTUuODMgOS41OUwxOC43IDYuN0wyMSA5VjNIMTVaTTMgOUw1LjMgNi43TDguMTcgOS41OUw5LjU5IDguMTdMNi43IDUuM0w5IDNIM1Y5Wk05IDIxTDYuNyAxOC43TDkuNTkgMTUuODNMOC4xNyAxNC40MUw1LjMgMTcuM0wzIDE1VjIxSDlaTTIxIDE1TDE4LjcgMTcuM0wxNS44MyAxNC40MUwxNC40MSAxNS44M0wxNy4zIDE4LjdMMTUgMjFIMjFWMTVaIiBmaWxsPS'+
			'IjRjY5MjFFIi8+Cjwvc3ZnPgo=';
		me._svg_20__imga.setAttribute('src',hs);
		ela.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		ela['ondragstart']=function() { return false; };
		el.appendChild(ela);
		el.ggSubElementActive = ela;
		el.ggId="Svg   2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 50px;';
		hs+='position : absolute;';
		hs+='right : 230%;';
		hs+='top : 100%;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_20.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_20.onclick=function (e) {
			player.enterFullscreen();
		}
		me._svg_20.onmouseover=function (e) {
			me._svg_20__img.style.visibility='hidden';
			me._svg_20__imgo.style.visibility='inherit';
			me.elementMouseOver['svg_20']=true;
		}
		me._svg_20.onmousedown=function (e) {
			me._svg_20__imga.style.visibility='inherit';
			me._svg_20__imgo.style.visibility='hidden';
		}
		me._svg_20.onmouseup=function (e) {
			me._svg_20__imga.style.visibility='hidden';
			if (skin.player.getHasTouch()) {
				me._svg_20__img.style.visibility='inherit';
			} else {
				me._svg_20__imgo.style.visibility='inherit';
			}
		}
		me._svg_20.onmouseout=function (e) {
			me._svg_20__img.style.visibility='inherit';
			me._svg_20__imgo.style.visibility='hidden';
			me._svg_20__imga.style.visibility='hidden';
			me.elementMouseOver['svg_20']=false;
		}
		me._svg_20.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['svg_20']) {
				me._svg_20__img.style.visibility='hidden';
				me._svg_20__imgo.style.visibility='inherit';
				me.elementMouseOver['svg_20']=true;
			}
		}
		me._svg_20.ggUpdatePosition=function (useTransition) {
		}
		me._header0.appendChild(me._svg_20);
		el=me._svg_30=document.createElement('div');
		els=me._svg_30__img=document.createElement('img');
		els.className='ggskin ggskin_svg_30';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAACMCAYAAACuwEE+AAABi0lEQVR4nO3dwU3DQBRF0QdiTwGUQANQQDpIIxF1IBqhAwogBYQSKCAVwJpFFo94MolyjuSdNfqWruSFx3YCAAAAAAAAAAAAAAAAAAAA/HEze4AjrJK8FedvknxcwSxD3c0e4Aj3SR7L80c5p1mGup09AJdFMFQEQ0UwVARDRTBUBENFMFQEQ0UwVARDRTBUBENFMFQEQ2XWfphVjt8T8rTEIJMsMfs+F7oJ6z92SX5OfKwHXs96wvXsBl7PQW5JVARDRTBUBENFMFQEQ0UwVARDRTBUBENl1sv4SzxLan0m+R609kOS50FrH3JVz5IAAAAAAAAAAAAAAIDRvGayDK+ZDOaTZT5ZxjUQDBXBUBEMFcFQEQwVwVARDBXBUBEMlVm/v9lkmd/fvCwwyw'+
			'yvSbZHrrFfYpDWrGCu5qHZAdsk77OH+A+3JCqCoSIYKoKhIhgqgqEiGCqCoSIYKoKhIhgqgqEiGCqCoSIYKrP2wyxhn+SrPH+Uc5oFAAAAAAAAAAAAAAAAAAAAOKVftvqOvCDAHbYAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAACMCAYAAACuwEE+AAABqklEQVR4nO3dsU3DQBiG4R9E5YYBkDIHDJBMAGu4YQ6arAETwABkDksMkCYt1BSR+BRfLiTPU1vnv3glFz77qgAAAAAAAAAAAAAAAAAAAIBfrnoPcIDlbr14/+vFwzitqurjAmZp6rr3AAe4bXx9y7VbztLUfw6GDgRDRDBEBENEMEQEQ0QwRARDRDBEBENEMEQEQ0QwRARDRDBEbjrdd1mH7wm5n2OQTuaYfVsdNmF1CSbZnXaOduvF8xzrDON09B2THklEBENEMEQEQ0QwRARDRDBEBENEMEQEQ6TXx/hzvEtKfVbVV6O176rqodHa+3R5lwQAAAAAAAAAAAAAAJwrn5nM42I+M+kSzG69+D72PYdxeqqqt0bLP+7Wi9dGa+/ll2WcPMEQEQwRwR'+
			'ARDBHBEBEMEcEQEQwRwRDpcprJME6rmuH4m7lOBTm2YZxeqmpz4DLbOWZJ9Tov6dL/zbapdu+1mvJIIiIYIoIhIhgigiEiGCKCISIYIoIhIhgigiEiGCKCISIYIoIh8p+DSTcQtdxwdEqzAAAAAAAAAAAAAAAAAAAAAMf0A/W/MZAumUB4AAAAAElFTkSuQmCC';
		me._svg_30__img.ggOverSrc=hs;
		el.ggId="Svg   3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 70px;';
		hs+='position : absolute;';
		hs+='right : 221%;';
		hs+='top : 300%;';
		hs+='visibility : inherit;';
		hs+='width : 70px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_30.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_30.onclick=function (e) {
			player.exitFullscreen();
		}
		me._svg_30.onmouseover=function (e) {
			me._svg_30__img.src=me._svg_30__img.ggOverSrc;
			me.elementMouseOver['svg_30']=true;
		}
		me._svg_30.onmouseout=function (e) {
			me._svg_30__img.src=me._svg_30__img.ggNormalSrc;
			me.elementMouseOver['svg_30']=false;
		}
		me._svg_30.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['svg_30']) {
				me._svg_30__img.src=me._svg_30__img.ggOverSrc;
				me.elementMouseOver['svg_30']=true;
			}
		}
		me._svg_30.ggUpdatePosition=function (useTransition) {
		}
		me._header0.appendChild(me._svg_30);
		me.divSkin.appendChild(me._header0);
		el=me._float_cursor=document.createElement('div');
		el.ggId="float_cursor";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 50px;';
		hs+='left : 100px;';
		hs+='position : absolute;';
		hs+='top : 100px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:none;';
		hs+='transform-style: preserve-3d; cursor: none !important;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._float_cursor.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._float_cursor.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.hotspot.title == "hide"))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._float_cursor.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._float_cursor.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._float_cursor.style.transition='';
				if (me._float_cursor.ggCurrentLogicStateVisible == 0) {
					me._float_cursor.style.visibility="hidden";
					me._float_cursor.ggVisible=false;
				}
				else {
					me._float_cursor.style.visibility=(Number(me._float_cursor.style.opacity)>0||!me._float_cursor.style.opacity)?'inherit':'hidden';
					me._float_cursor.ggVisible=true;
				}
			}
		}
		me._float_cursor.logicBlock_visible();
		me._float_cursor.ggUpdatePosition=function (useTransition) {
		}
		el=me._ring_white=document.createElement('div');
		el.ggId="ring_white";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border : 10px solid rgba(255,255,255,0.294118);';
		hs+='border-radius : 999px;';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : -30px;';
		hs+='position : absolute;';
		hs+='top : -30px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:none;';
		hs+='transform:translate3d(0px,0px,0px);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ring_white.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ring_white.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((player.hotspot.title != ""))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._ring_white.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._ring_white.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._ring_white.style.transition='border-color 0s';
				if (me._ring_white.ggCurrentLogicStateBorderColor == 0) {
					me._ring_white.style.borderColor="rgba(246,146,30,0.294118)";
				}
				else {
					me._ring_white.style.borderColor="rgba(255,255,255,0.294118)";
				}
			}
		}
		me._ring_white.logicBlock_bordercolor();
		me._ring_white.ggUpdatePosition=function (useTransition) {
		}
		me._float_cursor.appendChild(me._ring_white);
		el=me._float_tt=document.createElement('div');
		els=me._float_tt__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="float_tt";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(246,146,30,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : -50px;';
		hs+='position : absolute;';
		hs+='top : -80px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='transform:translate3d(0px,0px,90px) rotateX(-90deg) scale(1.5); transform-style: preserve-3d;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+="text-shadow: 1px 1px #000000;";
		els.setAttribute('style',hs);
		me._float_tt.ggUpdateText=function() {
			var params = [];
			params.push(player._(String(player.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._float_tt.ggUpdateText();
		player.addListener('activehotspotchanged', function() {
			me._float_tt.ggUpdateText();
		});
		el.appendChild(els);
		me._float_tt.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._float_tt.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.hotspot.title != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._float_tt.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._float_tt.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._float_tt.style.transition='';
				if (me._float_tt.ggCurrentLogicStateVisible == 0) {
					me._float_tt.style.visibility=(Number(me._float_tt.style.opacity)>0||!me._float_tt.style.opacity)?'inherit':'hidden';
					me._float_tt.ggVisible=true;
				}
				else {
					me._float_tt.style.visibility="hidden";
					me._float_tt.ggVisible=false;
				}
			}
		}
		me._float_tt.logicBlock_visible();
		me._float_tt.ggUpdatePosition=function (useTransition) {
		}
		me._float_cursor.appendChild(me._float_tt);
		me.divSkin.appendChild(me._float_cursor);
		el=me.__code=document.createElement('div');
		els=me.__code__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="_code";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 37px;';
		hs+='left : 1px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 66px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='pointer-events: none;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="";
me._float_cursor.ggMousePos={ x: -1, y:0 };
me._float_cursor.ggUpdateCursor=function() {
	let el=me._float_cursor;
	let pt=player.getPositionAngles(el.ggMousePos.x,el.ggMousePos.y);
	let style=el.style;
	if ((pt.tilt>=0) || (el.ggMousePos.x<0)) {
		style.visibility="hidden";
	} else {
		let vs=player.getViewerSize();
		let dist=200; // size of the graphic
		let x=-dist*Math.tan((pt.tilt-90.0) * Math.PI/180.0);
		let hs="";
		let cp=player.getCurrentPerspective();
		hs += 'translate3d(0px,0px,-1000px) perspective(' + cp + 'px) ';
		hs += 'translate3d(0px,0px,' + cp + 'px) '; // move camera to the center
		hs += 'rotateX(' + (90.0+player.getTilt()).toFixed(10) + 'deg) ';
		hs += 'rotateZ(' + (player.getPan()+pt.pan).toFixed(10)  + 'deg) ';
		hs += 'translate3d(' + 0 + 'px,' + x + 'px,' + (-dist) + 'px) ';
		style.transform=hs;
		style.transformOrigin = '0% 0%';
		style.left = vs.width / 2 + "px";
		style.top = vs.height / 2 + "px";
		style.visibility=el.ggVisible?'inherit':'hidden';
	}
    if (me._hide_system_cursor) me._hide_system_cursor.style.visibility=style.visibility=='hidden'?'hidden':'inherit';
}
me.divSkin.addEventListener('mousemove', e => {
	let el=me._float_cursor;
	let rect = me.divSkin.getBoundingClientRect();
	el.ggMousePos.x=e.clientX - rect.left;
	el.ggMousePos.y=e.clientY - rect.top;
	el.ggUpdateCursor();
});
me.player.on("positionchanged", () => {
	me._float_cursor.ggUpdateCursor();
});
		el.appendChild(els);
		me.__code.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__code.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me.__code);
		el=me._popups=document.createElement('div');
		el.ggId="Popups";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._popups.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._popups.ggUpdatePosition=function (useTransition) {
		}
		el=me._products=document.createElement('div');
		el.ggId="Products";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 800px;';
		hs+='left : calc(50% - ((600px + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((800px + 0px) / 2) + 0%);';
		hs+='visibility : inherit;';
		hs+='width : 600px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._products.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._products.ggUpdatePosition=function (useTransition) {
		}
		el=me._product1=document.createElement('div');
		el.ggId="Product1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #f6921e;';
		hs+='border-radius : 5px;';
		hs+='cursor : default;';
		hs+='height : 800px;';
		hs+='left : calc(50% - ((600px + 2px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((800px + 2px) / 2) + 0%);';
		hs+='visibility : hidden;';
		hs+='width : 600px;';
		hs+='pointer-events:auto;';
		hs+='position: fixed;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._product1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._product1.ggUpdatePosition=function (useTransition) {
		}
		el=me._header=document.createElement('div');
		els=me._header__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Header";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text <iframe src=\"https:\/\/javiddogroup.en.alibaba.com\/productgrouplist-932990931\/Truck.html?spm=a2700.shop_index.88.27\" title=\"W3Schools Free Online Web Tutorials\"> <\/iframe>";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(0,0,0,1);';
		hs+='cursor : default;';
		hs+='height : 46px;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='top : 5%;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='<iframe src=\"https:\/\/javiddogroup.en.alibaba.com\/productgrouplist-932990931\/Truck.html?spm=a2700.shop_index.88.27\" title=\"W3Schools Free Online Web Tutorials\"> <\/iframe>';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+="<iframe src=\"https:\/\/javiddogroup.en.alibaba.com\/productgrouplist-932990931\/Truck.html?spm=a2700.shop_index.88.27\" title=\"W3Schools Free Online Web Tutorials\"> <\/iframe>";
		els.setAttribute('style',hs);
		me._header.ggUpdateText=function() {
			var params = [];
			var hs = player._("<div class=\"ggmarkdown\"><h1>HP Monitor 24 inch<\/h1>\n<div>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._header.ggUpdateText();
		el.appendChild(els);
		me._header.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._header.ggUpdatePosition=function (useTransition) {
		}
		me._product1.appendChild(me._header);
		el=me._video_1=document.createElement('div');
		me._video_1.seekbars = [];
			me._video_1.ggYoutubeApiReady = function() { skin.ggYoutubeApiLoaded = true;}
		me._video_1.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._video_1.seekbars.length; i++) {
					var seekbar = me.findElements(me._video_1.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me._video_1.hasChildNodes()) {
				me._video_1.removeChild(me._video_1.lastChild);
			}
			if(media == '') {
				notifySeekbars();
				if (me._video_1.ggVideoNotLoaded == false && me._video_1.ggDeactivate && player.isPlaying('video_1')) { me._video_1.ggDeactivate(); }
				me._video_1.ggVideoNotLoaded = true;
				return;
			}
			me._video_1.ggVideoNotLoaded = false;
			me._video_1__vid=document.createElement('iframe');
			me._video_1__vid.className='ggskin ggskin_video';
			var ggYoutubeMedia = media;
			var ggTimeParam = '';
			if (ggYoutubeMedia.indexOf('&') != -1) {
				ggTimeParam = 'start' + media.slice(ggYoutubeMedia.indexOf('&') + 2) + '&amp;';
				ggYoutubeMedia = ggYoutubeMedia.slice(0, ggYoutubeMedia.indexOf('&'));
			}
			var ggVideoParams = '?' + ggTimeParam + 'autoplay=0&amp;controls=0&amp;loop=1&amp;enablejsapi=0&amp;rel=0';
			var ggVideoUrl = 'https://www.youtube.com/embed/' + ggYoutubeMedia + ggVideoParams;
			me._video_1__vid.setAttribute('src', ggVideoUrl);
			me._video_1__vid.setAttribute('width', '100%');
			me._video_1__vid.setAttribute('height', '100%');
			me._video_1__vid.setAttribute('allow', 'autoplay');
			me._video_1__vid.setAttribute('allowfullscreen', 'true');
			me._video_1__vid.setAttribute('style', 'border:none; ; ;');
			me._video_1.appendChild(me._video_1__vid);
			me._video_1.ggVideoSource = media;
			if (skin.ggYoutubeApiLoaded && skin.ggYoutubeApiLoaded == true) {me._video_1.ggYoutubeApiReady();}
		}
		el.ggId="Video 1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 42.125%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_1.ggUpdatePosition=function (useTransition) {
		}
		me._product1.appendChild(me._video_1);
		el=me._svg_3=document.createElement('div');
		els=me._svg_3__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MCIgdmlld0JveD0iMCAwIDUwIDUwIiBmaWxsPSJub25lIiBoZWlnaHQ9IjUwIj4KIDxwYXRoIGQ9Ik00Mi42ODU2IDcuMzE0MzlDMzIuOTMxIC0yLjQzODEzIDE3LjA2NzQgLTIuNDM4MTMgNy4zMTI3OCA3LjMxNDM5Qy0yLjQzNzU5IDE3LjA2NjkgLTIuNDM3NTkgMzIuOTM0NyA3LjMxMjc4IDQyLjY4NzJDMTIuMTkwMSA0Ny41NjI1IDE4LjU5NTEgNDkuOTk4OSAyNS4wMDAzIDQ5Ljk5ODlDMzEuNDA1NCA0OS45OTg5IDM3LjgwODMgNDcuNTYyNCA0Mi42ODU2IDQyLjY4NzJDNTIuNDM4MSAzMi45MzQ4IDUyLj'+
			'QzODEgMTcuMDY2OSA0Mi42ODU2IDcuMzE0MzlaTTM1LjMxNTUgMzIuMzY5OUMzNi4xMzA0IDMzLjE4NDggMzYuMTMwNCAzNC41MDIxIDM1LjMxNTUgMzUuMzE3MUMzNC45MDkgMzUuNzIzNSAzNC4zNzU1IDM1LjkyNzggMzMuODQxOCAzNS45Mjc4QzMzLjMwODMgMzUuOTI3OCAzMi43NzQ2IDM1LjcyMzUgMzIuMzY4MiAzNS4zMTcxTDI1LjAwMDIgMjcuOTQ2OUwxNy42MzQyIDM1LjMxNDlDMTcuMjI1NyAzNS43MjE0IDE2LjY5MjEgMzUuOTI1NyAxNi4xNjA2IDM1LjkyNTdDMTUuNjI3IDM1LjkyNTcgMTUuMDkzNCAzNS43MjE0IDE0LjY4NjkgMzUuMzE0OUMxMy44NzIgMzQuNSAxMy44NzIgMzMu'+
			'MTgwNiAxNC42ODY5IDMyLjM2NzdMMjIuMDUyOSAyNC45OTk3TDE0LjY4NDkgMTcuNjMxN0MxMy44NyAxNi44MTY4IDEzLjg3IDE1LjQ5NzQgMTQuNjg0OSAxNC42ODQ1QzE1LjQ5NzggMTMuODY5NiAxNi44MTcxIDEzLjg2OTYgMTcuNjMyMSAxNC42ODQ1TDI1LjAwMDEgMjIuMDUyNUwzMi4zNjgxIDE0LjY4NDVDMzMuMTgzIDEzLjg2OTYgMzQuNTAwMyAxMy44Njk2IDM1LjMxNTMgMTQuNjg0NUMzNi4xMzAyIDE1LjQ5NzQgMzYuMTMwMiAxNi44MTY4IDM1LjMxNTMgMTcuNjMxN0wyNy45NDczIDI0Ljk5OTdMMzUuMzE1NSAzMi4zNjk5WiIgZmlsbD0iI0Y2OTIxRSIvPgo8L3N2Zz4K';
		me._svg_3__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='position : absolute;';
		hs+='right : 5px;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_3.onclick=function (e) {
			me._product1.style.transition='none';
			me._product1.style.visibility='hidden';
			me._product1.ggVisible=false;
		}
		me._svg_3.ggUpdatePosition=function (useTransition) {
		}
		me._product1.appendChild(me._svg_3);
		el=me._svg_4=document.createElement('div');
		els=me._svg_4__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1NCIgdmlld0JveD0iMCAwIDU0IDU0IiBmaWxsPSJub25lIiBoZWlnaHQ9IjU0Ij4KIDxwYXRoIGQ9Ik0yOC42NzUgNTEuNzI0NEM0Mi40NDA3IDUwLjY4ODkgNTIuNzYwNSAzOC42OTAyIDUxLjcyNSAyNC45MjQ3QzUwLjY4OTUgMTEuMTU5MiAzOC42OTA3IDAuODM5NDY2IDI0LjkyNSAxLjg3NUMxMS4xNTkzIDIuOTEwNTMgMC44Mzk0NTYgMTQuOTA5MiAxLjg3NDk4IDI4LjY3NDdDMi45MTA1IDQyLjQ0MDIgMTQuOTA5MyA1Mi43NiAyOC42NzUgNTEuNzI0NFoiIGZpbGw9IiNGNjkyMUUiLz4KIDxwYXRoIGQ9Ik'+
			'0zOC42MDI2IDIxLjQzODNIMTkuMTgzMkwyMS43NjE0IDMyLjI2MzdIMzQuOTY1OEwzOC42MDI2IDIxLjQzODNaTTQxLjE4NCAxOS41ODE4QzQxLjQwNCAxOS44ODU4IDQxLjQ2MzQgMjAuMjgyIDQxLjM0MzUgMjAuNjM2N0wzNi45MTk1IDMzLjgwNjhDMzYuNzU5MiAzNC4yODU5IDM2LjMxMiAzNC42MDg0IDM1LjgwODYgMzQuNjA4NEgyMC44MzU3QzIwLjI5MzEgMzQuNjA4NCAxOS44MjE0IDM0LjIzNTMgMTkuNjk1OCAzMy43MDU2TDE1LjI3NjYgMTUuMTUwNEgxMy4zNzcxQzEyLjcyOTggMTUuMTUwNCAxMi4yMDUxIDE0LjYyNTIgMTIuMjA1MSAxMy45NzU3QzEyLjIwNTEgMTMuMzMwOCAxMi43'+
			'Mjk4IDEyLjgwNTcgMTMuMzc3MSAxMi44MDU3SDE2LjIwMjFDMTYuNzQ0NiAxMi44MDU3IDE3LjIxNjUgMTMuMTc4OCAxNy4zNDIzIDEzLjcwMzlMMTguNjI0NCAxOS4wODlMNDAuMjMyNiAxOS4wOTM2QzQwLjYwOTYgMTkuMDkzNiA0MC45NjM3IDE5LjI3MzIgNDEuMTg0IDE5LjU4MThaTTM0LjY5OSAzNy4xMDk4QzMzLjQ2NjIgMzcuMTA5OCAzMi40NjA4IDM4LjExNCAzMi40NjA4IDM5LjM0ODVDMzIuNDYwOCA0MC41ODMxIDMzLjQ2NjIgNDEuNTg3MyAzNC42OTkgNDEuNTg3M0MzNS45MzE2IDQxLjU4NzMgMzYuOTM2OCA0MC41ODMxIDM2LjkzNjggMzkuMzQ4NUMzNi45MzY3IDM4LjExNDEgMz'+
			'UuOTMxNiAzNy4xMDk4IDM0LjY5OSAzNy4xMDk4Wk0yMy42NTE5IDM5LjM0ODVDMjMuNjUxOSA0MC41ODMxIDIyLjY0NjcgNDEuNTg3MyAyMS40MTQxIDQxLjU4NzNDMjAuMTgxNCA0MS41ODczIDE5LjE3NiA0MC41ODMxIDE5LjE3NiAzOS4zNDg1QzE5LjE3NiAzOC4xMTQgMjAuMTgxNCAzNy4xMDk4IDIxLjQxNDEgMzcuMTA5OEMyMi42NDY3IDM3LjEwOTggMjMuNjUxOSAzOC4xMTQxIDIzLjY1MTkgMzkuMzQ4NVoiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K';
		me._svg_4__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 45%;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='position : absolute;';
		hs+='right : 3%;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_4.onclick=function (e) {
			player.openUrl("https:\/\/www.javiddo.com\/contact","_blank");
		}
		me._svg_4.ggUpdatePosition=function (useTransition) {
		}
		me._product1.appendChild(me._svg_4);
		el=me._image_1=document.createElement('div');
		els=me._image_1__img=document.createElement('img');
		els.className='ggskin ggskin_image_1';
		hs='data:image/jpeg;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 225px;';
		hs+='left : 189px;';
		hs+='position : absolute;';
		hs+='top : 150px;';
		hs+='visibility : inherit;';
		hs+='width : 225px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_1.onclick=function (e) {
			me._image_2.ggVisible = !me._image_2.ggVisible;
			var flag=me._image_2.ggVisible;
			me._image_2.style.transition='none';
			me._image_2.style.visibility=((flag)&&(Number(me._image_2.style.opacity)>0||!me._image_2.style.opacity))?'inherit':'hidden';
		}
		me._image_1.ggUpdatePosition=function (useTransition) {
		}
		me._product1.appendChild(me._image_1);
		el=me._image_2=document.createElement('div');
		els=me._image_2__img=document.createElement('img');
		els.className='ggskin ggskin_image_2';
		hs='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgWFRYZGRYaHBwfHRwcHB4eJBkhGhgcHB4hHh8cIS4lHiErIRwcJzgmKy8xNTU1ISU7QDszPy40OjEBDAwMEA8QHxISHzQrJSw2NTQ0PzQ6NDQ0NzQ3PTQ0ND00NDY1NT82NDE0NjQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAMIBAwMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABAUDBgcBAgj/xABDEAABAwIDBQUGAggFAwUAAAABAAIRAyEEEjEFIkFRYQZxgZGhBxMyQrHB0fAUFVJicoKisiOSwuHxFjNjJDRDo7P/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAQIDBAX/xAArEQACAgEEAQMDAwUAAAAAAAAAAQIRAwQSITFBE1FxMoGRIk'+
			'JhBRSx4fD/2gAMAwEAAhEDEQA/AOzIiIDxaVhCwY3GMqMJJqMc14BluagwBuYXaNwnVbqtD2gMu0q8VAwupYdzQ4SHEGo0zabQ3QjVQ3SsmKt0Xz6L2/BUqAdXZv8A9A5efptdvzMd0cwhx8Wuj+le7N2k2q0gwHt+IWg9WmbtUirQHcVaMosiUWjH+uXt+Oif5HB39wapDNsUzqHt72OMd5aC31VRtqu+lSc9jQ4tgkESI4zcQOM8Fp2xO0dRlVzXse91QhrWTEODoAGbiWmeVpsFpUHwZtyR0+hjqTjDKjHHkHAny1UtaF2mxjaYjKCdTmAIgETr0kWUoYN2Rrqb3sBAIDXuaLjkDBVvRT6ZT1mu1+Dcl6tJbtLEst73MRpnY0g9+UNd6r3/AKurM/7lBjuZa4t9CHT5q39pl/arM3rMS+q0bpC9WrUO29A/E2oz'+
			'qWgj+kk+isaHaPCv0rsH8RyejoWcsGSPcWjWGoxT+mSZcosVOq1wlrg4cwQR6LKsjYIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIDxcw9om7jKZloz0CJc7IJZUtvfzjT0XT1zX2rMaKmGc7IARVbv6H4DE8Jg3VJq4stB1JGp1Nr5SWMzBhE2cHXDSdwuuRJjeM6SBC3rDdo/d0HZgXvpxqRJZmiTBjNlgmOY7lzjaDBmk7oc3MXMIdxAMixIvEyP5pVhsp9RrHQJGR2R7SYMETOY7sEz0jQwsYOuUaT57N22htWaZr4Z+dhJa8OcS1vA2a0uba9iI5LQ2VpqUmVXMDsznNOctFRpc0AtLMpvaDPAngq+nin5apa10Py5hyiWtG5uGZAmGxHVYNj4uoyq0PltGQAXA1Gt3SQ0OvEuOs6kHguiMro55I2/H4/3jC'+
			'xgzkyWvYdSMtnOFnAc/itxgrb+z2NY7NT5SQ0mY5xcwOQnmqBuEYKBe+DmiXtcJEQcrr6NMtLXt77r3sriKrnQ2o3O0QWEsJAjVoie8Zua3TaMWjbsThWnv7lX1sIBLXac40Ww1WtDS5xAgSSenFRaNRlRgewyCNfS48FvDM0ZTwpmoY/Y/FsT04/gqd2FOhEFdAdStpI68e5RMTs1rrtN+q78WsriR5WfQ87ofg0qlSLXWlruYsfMKwbtLFU7tr1I/eOf+8FWL9n3yuEHr9l908GRunRayyY58tJnPjhljwpNfDf+DDR7YYlvxBjx1aQfNpj0VlQ7cD56BH8Lg70cG/VV9TZgF4sVHqYCNAsXg00/FfBvHUauHbv5Nrw/a3DOgFzmk8HMd9Wgj1VnQ2lRf8NVjjyDhPlMrntLZ5N2i62HZVNzSQ5oygXtbQrkz6TH'+
			'FXBnoabWZZuppfY21JWnVWBpljnNB4McW/2kLHT2niGm1QkcnNafWJ9VgtLJq00b/wB5BOmmbovVqbO0ldvxU2O/hLm/XMplHtM02fTe09Mrh9QfRUenyx8GkdTil5NgRVf6+w4jNVaybDPLJPIF4AJU+jXa4S1zXDm0gjzCyaa7N1JPozIiKCQiIgCIiAIiIAiIgPFzz2v0iaOGcI3axFxI3qbtfJdDWke1mlmwII1bWpnzJb91D6JXZydmIbIzsb8XhF7Ei479Vs2xcY8thhD2tDoBddosYdqHiBo5aO6uGuLHgGPDulX+xnnI503baSJsWlsE8I4a+CxcVVxLtu6ZHof9x++GEthxDA5pg3zNDSDeBw4eMCqHh7XsqsJaZJZIIh1yWwQCJ0OisMNUJqMa9zW/FvkCN4c7Qb6yFV7QAe5xfBIJ3mwTZkRIkxMc/B'+
			'TF0uTKS5OnYM034VzxiCxxkuDyCZBIbGcZRykC/MrD2JqNqtDS+mDmIytDSAc5cCNCJLrEDjryhYLFNbgIqFhY0AAhwzyTYNJkDQX754Kh2Jtt9GQWtykkhuUNcN3Luva4QJaJgc7LpU1xyYtHZdtYoU6LrwSC0EyQ0x8xBlUPYmqSHtjckhoExPxaG7YaQNLyLrWNnbf+IF9QseGl/wAxzGxMj1AjTwXuw9pfo2Ma0Pc+m4nQNy71hlGYBhJgG3DVUWWN7bD9zpjmh05SLGCBwOsH0WD3cKi7P7Xa/EVGCYcSZOUchNrGTwHPitgrVmB7aZ+JwLh4R+fBbxkZySfJ8upNeId5qPiWMYAXua0TAJMT06qU9gbJJgLTHZqry55uCYHSLADpK6MMN7fPCOXNJRr9PLNkoYik8br2uB/eE+Ruo+OcymJc4dwuVrx2M3LI'+
			'zSDeUZhWZHiTLQYgxBg2vot/TUeVLgw3ylxJKzHiNvPDpoNIa27g4AyBrZP+q8Rlu1m9Mbh1ga735lQsMGN3XXc4WHEHhrHXlovui1r3GmYhjnNcYmCWmJE8zIjoplsvlFse5rhn2ztK8yHMZnGsZhx5Em6w1+0jyHZGhoHzRP1P2UjtLstgaXsDg9pAJEb4gQeqrMHhpc9hLnNeARMhsTmsJurxlBxtESxSU6ZOwm3Hh7Q7K5jvmcDu2PL6eq+/17VzNytpubMOsbXgEEONu9axiaJYS0kubfQkQRwMjnPosnZmg5+JYGboueNgBr1WebiLlF9I0w05KLXbLrH44OZVBZDqmXrGSSCJEzOq1SniHhwcwhj+cgTHOdfut3xWwH3aHg1N4mTrF+c6EW5rXB2fqSHvgiJLS6Dpp4HryXLp8qUWpNc+5158UtycU+PY7D'+
			'2SxxrYOhUcZcWAOPNzSWOPm0q5WmezSt/gVKUEe7qGAb2cAf7sy3Ncs1Umjpg7imeoiKpcIiIAiIgCIiALVPaZSzbOr/u5Hf5XtK2tUPbalmwGKb/4nHyE/ZAfn91TOyInjq61uU6eawNqPZBmByBM69F8UCRBl0W4W8BMqRjsUCwXaSQeHeLctFxQcoypdG1qUbfZmw1TOC10Rz6QTp6LHWwhJlha2BECb9dOP5hQcJiC0AScszYngWnTwPmpjXEEsmfuNBp6roq+GZNWrJ/vajKBa8gNAiGzMuMjNaNNOneoeArb7ZqOY3djeJjKbAiJ9F9bQwpYIzOgydbAHSJvz9FXtcACRIInXw+/RYpN2VaL3M0vcBJa4neBlxAgmCYvEnyXm22OeW1WAxoCNW5bExHOb89JVVh3l2h+Yie8Dj4K8wpzslxmLA5jmAGs2Jg9'+
			'6rLG01JeCErMfZ3aL6dVjsxcQbEkkkmwF9eI04re9u7UdTqsqOmQW70xABMjXnaw4LnLHlji4RmB3SOEXBgaQvau3XvYWPM3LhwuY4C3pxK6Y5pKNJGUoK7O0u2j71jXQYcAco7puoFanBBLco4njp5rSuyW1hkLczpF93np5W4f8TztF7wHZgQRo4E+upXo6bJvVRavyjiz7Y/VZeP2k1gNyeUx9NStfxO08zpi0z+PIT3hQcRip0Edw/2mEZhnPIywBbec6AY9T5LsqMeZM4pSlN1BcGd2MbDn5d5osOZtHd1ULA7SDcQTmyNfd2uo0sepjkpWJaxrSxhzPkEuNhr8o4Ba1tCA4OHUEcNb6aR6QvC1mrcs6jF8I9fSYNuP9XbNp2ptZ7ajcziWOAAgRppx79eit6VZjslUNtBaSTlmAA0ARDtY4ei07arg5oJgkB'+
			'pHURH1+q+9lbVy0XU387HUgE3Bnzss8WrltcX1bOiWFbrLzaH+G6RSYZBB1BiePO4nwX3sXEhzs7GZA1wzRIH8vC/H/e9BitoMfl3i4Cw15EnXpH0VlgscwNMgfCCy4sTuuABNyDx6laS/qVQ2pO67ZWOmW/d4LftDtJ7qrcr8oMh8SLNabSJ4j69FWNa5h948Ncy8kyAZOpnly5AKsqYl4aXE3YXB0xOV2h6gR6rLUxT6lBx0AYDyiCfwC4Hnnt6/izr2q2zeOw2NaMS+m2zXsmLwHNIIiTxa5xXQlwDsPts/p9BxOrsvSHy30Diu/ruxN7al2ZS7PURFqVCIiAIiIAiIgCg7ZpZsPWb+1TePNhU5Y6jZBHMEeYQH5poUGuptJYRyyvF5jgQSDIPBfRwjC2GueIF9HamYmGzcwq6rWcx7mRZpI48DCyUsU4GchOlz'+
			'xWTbXVEfczUcKBYOjlmZGgjVpKzlsBrszS7K2buExYneaI0KzU8XNyw2Ov57llfipiWEdc8R6rJZlfKLLdXZ7jQajLxmGsENDbD5Zvx0VZ+hPGbM0gXixiw8eIVnQqsMh2eZmZaR4zdZMZ7stBDiCDzaU9WMZdE068FE/C5A4QQWvm/SPs7zVhhazWse0guda8mY+ExJjjzWcVRlLfeE6ybTw4z0UnD02PaWueNPitbQ3uks8UndkJNukUVarYk2Mz3zHTqobwHOH/Gi2DE4Bhb/AN1g00i0ADSdLc1CGDbc52Oi/wAUSrRyQfTIlBrsg4Go5j7EiT/wr/Z+0WlrgT848A+T9lVfojSJLhPedeGje9ZarAHAtIEBpEEiYvxBkG6vjyrHPcnyYZMKywcWXzcUybuBMCARYXF76lHYpr3GIO9AubydGjWMo0j6Kds+hS'+
			'fQ965pLxmncc5oOo0EExHGLq2pYnDtYHltNphpbuNkSJvMkRKy1X9Vjb2pt3XwYYNJKknRrFKmc0HdGW8GIF7yq/a1MOFiZB53vz66rZMFtDDljiRvublkiRcB1udzr3rXa+MYS8OBBF234h3K3Mm682M5TyuTT4PXWFRikZwzMwRvENk/goLcGczgTHOSeEcT+YVtsuu3O5gAdDZ6mQJ9fqpeKwp3nBv+I0AwdHNsTfmr+rt4/wC5LvE2rRrZwZALJuCHceEgRzsVn2phi1lMEmxudNCev/CuKDhVzNLAHOEh0Wt1HLgFB2m47rTfI6DOrpgeSLNuaT7RV46SpnlLBVHucWg+7eyCXGAbAiLXJN/NWmxsI/LUZUOm7Ajei891/ryX3hmDKyHOkgQGwBBNrX1HJe4HE5Kj2GJuQSTcXImO86LDJmlKLiv9nRHGk1ZQ'+
			'UtlPZWL2kfFws1sXaTx4W4SF+hcDiA+mx40c0O/zAH7riAe1r8rSIO9Atmnw4dSV1fsZis+FYJksLmGejjH9Jau/R5ZSk4v2ObPBRXHubCiIvROYIiIAiIgCIiAIiID8z7YIp4nEMIdarUAiP2yRw5QolOqyTNo6i/orXtrgz+sMVEQKp5fOM4+qq6OBP5/2Cwk6ZzylTa5PlmKYHQWlzf4jy/FSP0lhaTlbMz81szRPzcx6dV8VdmuABtGnG8eHVSKGzuYMWPgJt320U/Yxc30eUKzXAmBAtlieM/YrE/Fh1gBH8Ij6eCztwoY4tIPG3dI4acViqYLK7S3VRXJX1pLg8dVZIAAGvCx3s0n+UwmEYXZWjiYIHiNO5fAoGZv5fiVIp4VxduyIM2m0mbdVZj1JNmN+GfAZlI1Fx1nhpclR6mFcB8MR0PNX7tnVHDMwGD'+
			'Bnn1818Vdl1csk255lVUG5mvvpHWLnVSKGEe4sYDE2BmInl4wrF2EcyMxmeE/j4K8ZgRkY/IbOEwfC176qe30N0l5IeFxVZjWhukCWkgiYi4OqyuxjSGtq4Wm/UBwOWI4GxPLVSMRRZe542JA+qiHk6D11Oh1XTn0uOS6/HDObDnnF9tE/AYmg3dc0hrjzjIZNiBFmzEjko9XaBp1csNyy4TPAi3qB4KDUwhcN0Zhxyk2jmOtlEqUyQJO9fjrEfh9F4mXSrHNvmme1h1cnFfwXVPbzRqyTlcdWugt4GRYHmq4dqahmSBJNiB3Ktw9B2eBbX1UjE4YG5Z4xyj6qVp8S7Vmz1U35LFna1zTBa0x06LJS25h3OLnUW5jxk3J9FQNwDRvdAYv+eK+/1e1xAmJFp5zH2R6XFzSa+OC8dZLy7+TYndp6MiWQRbXTgstPbOFc'+
			'WnJcDWbjotROypeWzvdTbRZKvZ17BJMaceHBUlpMCS5a+50R1cmvpTN1pbRwkl2WDbh0IW39gsZSd71lImN18GdSMpIn+ELi2I2VVYGnM4NOhmx8wOC2/wBl2KdSxzGPJ/xWPaOVhnH9hHir6bTwx5FKMm/BXPm3wacaO3oiL1zzwiIgCIiAIiIAiIgOGdvqMbRxHX3btQNaYE310VG5pkACesz5cFtHtPaG7QzExnosOgPwueOIstao4okwGOd5d3L7rNxW6znydssaFIhhcIyxDiTxiQNIMgL4cH8ACbRABIv+6QF9YB782S2+WwIbz4W+69D6lOpLsuYGLmw8eOvBLSKbHVmGtiv2nEx09JlSXtYWhzHGw3hcmT4Rxn7ysW0mNa8PnOCOmUEkgiwi3K/orLs1TfUpPADQwNLJcJBJOYDUXmeIgc1Kju4IUVfRV0'+
			'qBe7di/wC0L8o0XoYQS0BtiBNot5R3L6ZIf7v3TZBiXZtbXgcAZ05qc7Z9RzzmADnOIvPHTWJ8gqOEvBdRiVuLe5sXgxpBjnY5brLsrFy9ucuezi2Te3COStNs7KfTazOcwc2d0kyIkWH3Wf8AVPunU3NDg1+VxcRMSd5sFvI3gmRxTFB/uRWUeeD47TbOILGNY6AABPzQNYjXXVXuA2cG0GAtzAieRuZvzI71c9osKalBr2xma0ExfdibW3o1AKtmUmupsa+5DQJ6wBIhdUUk7J2+DQMVgmH4AAf3gDHcZVRidnvF4+s/VbTtpjqbg1xmbtdz8OChuqgauF44W1nmt6fhnLJRbpo1hlB7XTGXqD5r3E4eRw7x5fnxVri2CddeR8p6KK+jESI8Pw+6wy41KNMvibi+OinNItcDI8vx1Ksaj4Ew0gwZjWyxVMKZm+uo'+
			'5fRTv0WadgTYX1I/BcTwv8HWpcEahh2vaZZ8PEcisOJ2eyG62nTjx9JVts+g5osYB4R05/gs+IwssF4brEAn6ypeF9l07RW4DYnvqjQwiYlxPAAwSeZUrH9nn0WvyPzsiwbaOBlvcdRyUWiX0qgc1z8sy4MIBjWLgwPsVbYvHMrNLsNXfTqgTkcDvGJiHfFrwIKusMVGpLkvBtvhlVTweagQQCBoTcHh4aKp2LUfSxFN7iSGPa6BBgNcC6J4ESFP2Ziqu8H5SSb5bRm1GX1UNzS1xIkRqOd/+VxwwqMm18r5NpyfCZ35eqs2BiveYak+Zlgk9QMrvUFWa9BOzEIiKQEREAREQBERAcb9q9L/ANZTJ4sMT0y2H9S1NkxJJiLgHQwYgTYeWhW++1XDB2Iw06EOB8A530atSNMaZQ0NaBoW7tt64iTOvfoqSZRwTdmTZj'+
			'i50NhuVpLiYMG8ZdRN9Oqz7bDw9ry4uJA+IwWxz3R3yLCVWUnuDpYC0j5rSDpaYjz5qeWPyNIa18CJku00FgLRNyoSsjpEKrQD5zFrYFiIMnhad3irvsk6oHljHCLxoG6fNzGtheYVbVxIeAXNAabZgJmCRIM34hSNlPOY5A4uJbldnytBmBmOkTfz1V4qmULPamzjRxLXksqZpIL7tEkyC1w0vYDSy3fZVEPYx9RoL2nd4ZYEaQOZsZWk7ZoNble1odABeWOJZmBg3AEGRxAjror7sxiiWNhmVnwy58zcwGtnuvafFbxXNELhlZ2gpv8AfkvaWU80Tnklsi4kDdAi0G9pWxMw4qYal7stLmBsG8OA5SbCDI+yx9qMEKlEuDcz2yRAkxxAuPuvjZtQ06DJBgiQBNgRIAHd91aMOSrdF8/EgACfO/nKivxRmxHmVU18'+
			'VaY85v6KI6uddDzH+49F0RgkZym2WuPosrMyOm1wYEg9PwWoYrZFVh4vbzFxfuEhWtbacaGTz19V6doACLE8ydVOwzk4sonYSsDJpkgaWN/D8AFKLYewVHsa0DefBGXX9sCT+KsW7TkEHUdfQQe9RMTiGPG+ARz08zwlZyx2Wi0itxJYXOYyoHskbwBsO4nUdNVY7PxTd5pBDYy5iIkG0wY6L3Z2zwGuqMBLLgNBjMQM0SLgC0xc6d1nhsXSnI+gxuYkAMh29pq244XPHlx55Rps6oRtWivrMIIg6i+i+Xkwd0nQDTRRdpuy1MrSXEzYzbK6LETmHisFLFPaCXiOWsfRUNKrslPBggR1JXmzadMuyVGZgQRcRPcozX8YImxg6nuK+yxwgkjmI5D/AGUS5VMR4dokM2O1mfI1oubARYdR0AtyVe8GTnDi3QXBCl+/MQ'+
			'DI16iVVuJk3NrgTpwuFTYmaOVHR/ZxiM2FLDrTqOEcg6H8OrneS29c19muKDa9SlJ3mB0HgWOiNNd/hyXSlaq4K3Z6iIgCIiAIiIAiIgOee09kPwj8wbFT4jwsR/qWpES/M/I/NIzPc6LgiSBwjQdAtz9q9KcPSd+zVbp1e38FrmysOxpitmE5coaAZa4G8ifKDqqSXNi30V1HD5XB/wAmZotcEmNGggTlIPithGwXPw7C22ZwLg03DTAMGQOvRXGytlMa1xewZT8LXfLqDMixKsH4sNAa0D6QAPRWhGyGkjUds7EbSpNBe43gBo58eFzYSei1+kGMeG5XOdEOBJhptIdEEgdFvONwraxGdwLB8sNJ1vDjccBbktG2nka4hkfE4tjkDB0mBfV2seejjRkyY3G7nunbpiMz5zlsyWy47nG4F+pClbEpsD2N944OIEQ2'+
			'wJaLSZB1H9XJeDCudTFV7AGlthnkCJu46kfu20WLs/WjdABcwkPcf2ToGgC56ngOq0jF2iknwbrXxUCxuFT4rGx3adLDhFgo+J2i3TX/AH/PFVWI2gIvMcBGvLS+hXXGNGEpE6rjxqYgennxUOrjbWEA9I629OCpa+IyyGt430Gv1PesLsS4ZdSSecxPfwhX4MnJlu/FDNcxafP/AIC+P0guIDSTxm8CbcPzZVn6RIMwdesT3rG58Gzssi8T+eMKrZMUvJcPxBmNbgCPEyRoNAoeKxWWQ0nmeXkoVSq2JmTz1EX4SvGsc4y0tjiSLm3NUcjRRJOC7SPojIYyPMyROUifMGVYt7Q0s+6XzBBe/MXQSDulhgHhpfmFSY/CtfLWjWI/P31VfSwdSm7dIP7pJAPidFyZU91o78Dio1I2jH4ljMrzoRBBndkyCNHNmTbv4L'+
			'zA7XY+Q0knhmMeK1vE459R92uEhu6b/CALHQ6LJg8M7MXHK0jSHcjGkX9FTFu3P2L5nFxVdm3PDXNvqOseULLVbIFotxvqCqzAVuZAjWSBPrdSH1xB3mmNAOv18OS1dGCsB7BmBBmLTxnkdCPwVbtCJaWm5vF7XUk1w4QfQa9VW1mvIgeseqhxi3d0SnJKi47F4rJjaLjN3ZDyIqAtHhmy+S7avzphRWYQ4RnY4OF9cpBGulwF+gsDi21abajfheAR4qk0l0y0W32SkRFQsEREAREQBERAaX7U2TgTHxBwI6w1x+y0bZXaTAseS578sQMzXkxa26NJHEeS6V232XUxGH93RaHPzAwXBtsrgbnvC5Qz2W7QOraQ76n4AqKBsWI7fYQ6OqEfwGf6lGd28wwkNZWIj9lv3eq6n7J8cdX4cfzvP0YplP2SYn5sRRHcHn6g'+
			'K6k10Q1Z8/8AXNEfDTqE8Jyj6PsO5ao/aAM7up7vpot2p+yGpxxjR3Uifq8KWz2RD5sY491ID6vKOTZG1GmYPtE5jH08gcx1xLvgN5i3GeixYPbbmFxDAc3NxsdbBdAZ7JKHzYmue7IPq0qTT9k+DGtXEu/naPoxFOS6ZGyPsc4ft15+RvqsD9pvJmGz4/crqzPZdgBq2q7vqO/0ws9P2abNH/wOPfVqn/WrerP3I9KHsccOMPML5fi51c23cu3s7B7OaP8A2tM/xZnf3ErAOymABtg8Pb/xsP1Hco9SXuyfSh7I4r+mD9seYWM49g1e3zXWtq7Nw7HhrKFJoDR8NNguSeQ7ls/ZvBNbQacjQXEnQc4HDkFG6XuTsj7I4BTxbXfCS7+EE/QKe1jz8FDEEcm0ah+jV+ioXqi2TtR+emYDEu0weLPX3Dx6kKUzYGPdpg'+
			'q/iGN/ucF3xFBJwtvZPaR0wTx31aI/1qQ3sTtK3/p2DvrMt3wPou2IgONs7BbSPy4ZvfVeZ8mKVT9nmPMZqmFbzg1HR3bon0XWkQHLh7NsTacXSA4xRcY7pqXVgfZsMrR+lVAfmORlz+6I3R3kroKIDQqXs0pC7sViXdB7poP/ANc+q3DZez2Yek2lTzZGzGZxcbkkyT1JU1EAREQBERAEREAREQBERAEREAREQBERAEREBhxDob3qtB48/wAj0U7HHd8Y81ALovwCA1falSajz1j/ACiPst5wdLIxrf2WgeQWhYFueswH5ngnumT6SuioAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiA+HuAuSAOqra+38OzWq0nk2Xf2ypmKpuc3diZ0JgHxAP0VbW2ZnG/TY4+B9SEBVbU7V03Nysa89fh'+
			'8iDIVXhMZWxDsg94GOs7LLjHHeiyvRs9lIyKLf5mh3kTp4LMzbxFiwEfumPxQGPDbAp0d+i15qxYuOaJEGMwgL4y48n5o76YUs9oW2hjpibkftFv1BWN3aB3CmB3uJ+wQHwMNjDq4/5m/ZZG4DE8X/1u+wWP9dVXfCG+DSfuvplfEu4P/wAob9QgPMRsrEOY5oqgOLSAc77Eix0WDC4fGsaGuIJA+IPkH/NB9FYMw1Y/FPi78CpNPBO45fz4ICuGNxDbET4NP9hUylj6vGmPOPrKmDDdfRfX6KOZ9PwQGOniyYzNyyQNQdTCmKLTwjWmd4nq4n0mPRSkAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAFDxVBpmWtPeAiIDSNsnK5mW1naW+Yratg0G+7nK2Z1gToOK9RAXCIiAIiIAiIgCIiAIiIAiIgCIiA'+
			'IiID//2Q==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 194px;';
		hs+='left : 169px;';
		hs+='position : absolute;';
		hs+='top : 165px;';
		hs+='visibility : inherit;';
		hs+='width : 259px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_2.onclick=function (e) {
			me._image_3.ggVisible = !me._image_3.ggVisible;
			var flag=me._image_3.ggVisible;
			me._image_3.style.transition='none';
			me._image_3.style.visibility=((flag)&&(Number(me._image_3.style.opacity)>0||!me._image_3.style.opacity))?'inherit':'hidden';
		}
		me._image_2.ggUpdatePosition=function (useTransition) {
		}
		me._product1.appendChild(me._image_2);
		el=me._image_3=document.createElement('div');
		els=me._image_3__img=document.createElement('img');
		els.className='ggskin ggskin_image_3';
		hs=basePath + 'images/image_3.jpg';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 225px;';
		hs+='left : 189px;';
		hs+='position : absolute;';
		hs+='top : 150px;';
		hs+='visibility : inherit;';
		hs+='width : 225px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_3.onclick=function (e) {
			me._image_1.ggVisible = !me._image_1.ggVisible;
			var flag=me._image_1.ggVisible;
			me._image_1.style.transition='none';
			me._image_1.style.visibility=((flag)&&(Number(me._image_1.style.opacity)>0||!me._image_1.style.opacity))?'inherit':'hidden';
		}
		me._image_3.ggUpdatePosition=function (useTransition) {
		}
		me._product1.appendChild(me._image_3);
		el=me._svg_2=document.createElement('div');
		els=me._svg_2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgd2lkdGg9IjI0IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgaGVpZ2h0PSIyNCIgY2xhc3M9ImZlYXRoZXIgZmVhdGhlci1hcnJvdy1yaWdodC1jaXJjbGUiPgogPGNpcmNsZSBjeD0iMTIiIHI9IjEwIiBjeT0iMTIiLz4KIDxwb2x5bGluZSBwb2ludHM9IjEyIDE2IDE2IDEyIDEyIDgiLz4KIDxsaW5lIHgyPSIxNiIgeTI9IjEyIiB5MT0iMTIiIHgxPSI4Ii'+
			'8+Cjwvc3ZnPgo=';
		me._svg_2__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 65%;';
		hs+='cursor : pointer;';
		hs+='height : 35px;';
		hs+='position : absolute;';
		hs+='right : 14.83%;';
		hs+='visibility : inherit;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_2.onclick=function (e) {
			me._image_3.style['display']='none';
			var p = me._image_3.parentElement;
			while (p != null && p!==this.divSkin) {
				if (p.ggType && p.ggType == 'cloner') {
					if (p.ggAutoPosition) {
						p.ggAutoPosition(false);
					}
				}
				if (p.ggType && p.ggType == 'scrollarea') {
					if (p.ggUpdatePosition) {
						p.ggUpdatePosition();
					}
				}
				p = p.parentElement;
			}
		}
		me._svg_2.ggUpdatePosition=function (useTransition) {
		}
		me._product1.appendChild(me._svg_2);
		el=me._svg_5=document.createElement('div');
		els=me._svg_5__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgd2lkdGg9IjI0IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgaGVpZ2h0PSIyNCIgY2xhc3M9ImZlYXRoZXIgZmVhdGhlci1hcnJvdy1sZWZ0LWNpcmNsZSI+CiA8Y2lyY2xlIGN4PSIxMiIgcj0iMTAiIGN5PSIxMiIvPgogPHBvbHlsaW5lIHBvaW50cz0iMTIgOCA4IDEyIDEyIDE2Ii8+CiA8bGluZSB4Mj0iOCIgeTI9IjEyIiB5MT0iMTIiIHgxPSIxNiIvPg'+
			'o8L3N2Zz4K';
		me._svg_5__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 65%;';
		hs+='cursor : pointer;';
		hs+='height : 35px;';
		hs+='left : 15%;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_5.onclick=function (e) {
			me._image_3.style['display']='inline';
			var p = me._image_3.parentElement;
			while (p != null && p!==this.divSkin) {
				if (p.ggType && p.ggType == 'cloner') {
					if (p.ggAutoPosition) {
						p.ggAutoPosition(false);
					}
				}
				if (p.ggType && p.ggType == 'scrollarea') {
					if (p.ggUpdatePosition) {
						p.ggUpdatePosition();
					}
				}
				p = p.parentElement;
			}
		}
		me._svg_5.ggUpdatePosition=function (useTransition) {
		}
		me._product1.appendChild(me._svg_5);
		me._products.appendChild(me._product1);
		me._popups.appendChild(me._products);
		me.divSkin.appendChild(me._popups);
		el=me._hide_system_cursor=document.createElement('div');
		el.ggId="hide_system_cursor";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 1;';
		hs+='bottom : 0px;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		hs+='cursor: none !important; pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hide_system_cursor.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._hide_system_cursor.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._hide_system_cursor);
		me._floorplan01.ggMarkerInstances=[];
		me._floorplan01.ggLastNodeId=null;
		me._floorplan01.ggSimpleFloorplanMarkerArray=[];
		me._floorplan01.ggFloorplanWidth=0;
		me._floorplan01.ggFloorplanHeight=0;
		me._floorplan01__mapdiv=document.createElement('div');
		me._floorplan01__mapdiv.className='ggskin ggskin_map';
		me._floorplan01.appendChild(me._floorplan01__mapdiv);
		me._floorplan01__img=document.createElement('img');
		me._floorplan01__img.className='ggskin ggskin_map';
		me._floorplan01__mapdiv.appendChild(me._floorplan01__img);
		me._floorplan01.ggShowSimpleFloorplan=function(mapDetails) {
			var mapWidth = me._floorplan01.clientWidth;
			var mapHeight = me._floorplan01.clientHeight;
			var tmpWidth = mapDetails['width'];
			var tmpHeight = mapDetails['height'];
			var levelLimit = 1000;
			var levels = 1;
			while (levelLimit < mapDetails['width'] || levelLimit < mapDetails['height']) {
				tmpWidth /= 2;
				tmpHeight /= 2;
				levelLimit *= 2;
				levels++;
			}
			var level = 1;
			while (levels > level && ((mapWidth * window.devicePixelRatio) >= 2*tmpWidth || (mapHeight * window.devicePixelRatio) >= 2*tmpHeight)) {
				tmpWidth *= 2;
				tmpHeight *= 2;
				levelLimit *= 2;
				level++;
			}
			var imageFilename = basePath + 'images/maptiles/' + me._floorplan01.ggMapId + '_' + level + '.' + mapDetails['tileformat'];
			me._floorplan01__img.setAttribute('src', imageFilename);
		me._floorplan01__mapdiv.setAttribute('style','position: absolute; left: 50%; margin-left: -' + me._floorplan01.ggFloorplanWidth / 2 + 'px; top: 50%; margin-top: -' + me._floorplan01.ggFloorplanHeight / 2 + 'px;width:' + me._floorplan01.ggFloorplanWidth + 'px;height:' + me._floorplan01.ggFloorplanHeight + 'px;overflow:hidden;img{ width: 30px; height: 30px; };');
		var image_rendering_prop = (player.getBrowser() == 2 || player.getBrowser() == 3) ? 'crisp-edges' : 'pixelated';
		me._floorplan01__img.setAttribute('style','width:' + me._floorplan01.ggFloorplanWidth + 'px;height:' + me._floorplan01.ggFloorplanHeight + 'px;-webkit-user-drag:none;pointer-events:none;image-rendering:' + (mapDetails['crispedges'] ? image_rendering_prop : 'auto') + ';');
		}
		me._floorplan01.ggCalculateFloorplanSize=function(mapDetails) {
			var floorplanWidth = mapDetails['width'];
			var floorplanHeight = mapDetails['height'];
			var frameAR = me._floorplan01.clientWidth / me._floorplan01.clientHeight;
			var floorplanAR = floorplanWidth / floorplanHeight;
			if (frameAR > floorplanAR) {
				me._floorplan01.ggFloorplanHeight = me._floorplan01.clientHeight;
				me._floorplan01.ggFloorplanWidth = me._floorplan01.ggFloorplanHeight * floorplanAR;
			} else {
				me._floorplan01.ggFloorplanWidth = me._floorplan01.clientWidth;
				me._floorplan01.ggFloorplanHeight = me._floorplan01.ggFloorplanWidth / floorplanAR;
			}
		}
		me._floorplan01.ggInitMap=function() {
			var mapDetails = player.getMapDetails(me._floorplan01.ggMapId);
			if (Object.keys(mapDetails).length === 0) return;
			me._floorplan01.style.backgroundColor = mapDetails['bgcolor'];
			if (mapDetails.hasOwnProperty('transparent') && mapDetails['transparent']) {
				me._floorplan01.ggPermeableMap = true;
			} else {
				me._floorplan01.ggPermeableMap = false;
			}
			me._floorplan01.ggCalculateFloorplanSize(mapDetails);
			me._floorplan01.ggShowSimpleFloorplan(mapDetails);
			me._floorplan01.ggFloorplanNorth = mapDetails['floorplannorth'];
			me._floorplan01.ggMapNotLoaded = false;
		}
		me._floorplan01.ggClearMap=function() {
			me._floorplan01.ggClearMapMarkers();
			me._floorplan01.ggMapNotLoaded = true;
		}
		me._floorplan01.ggChangeMap=function(mapId) {
			var newMapType = player.getMapType(mapId)
			if (newMapType == 'web') {
				return;
			}
			me._floorplan01.ggMapId = mapId;
			if (!me._floorplan01.ggMapNotLoaded) {
				me._floorplan01.ggClearMap();
				me._floorplan01.ggInitMap();
				me._floorplan01.ggInitMapMarkers();
			}
		}
		me._floorplan01.ggPlaceMarkersOnSimpleFloorplan=function() {
			var markers=me._floorplan01.ggSimpleFloorplanMarkerArray;
			for (id in markers) {
				if (markers.hasOwnProperty(id)) {
					marker=markers[id];
					var coords = player.getNodeMapCoordsInPercent(id, me._floorplan01.ggMapId);
					var xPos = (me._floorplan01.ggFloorplanWidth * coords[0]) / 100.0;
					var yPos = (me._floorplan01.ggFloorplanHeight * coords[1]) / 100.0;
					marker.radarXPos = xPos;
					marker.radarYPos = yPos;
					xPos -= me._floorplan01.ggHMarkerAnchorOffset;
					yPos -= me._floorplan01.ggVMarkerAnchorOffset;
					marker.style['position'] = 'absolute';
					marker.style['left'] = xPos + 'px';
					marker.style['top'] = yPos + 'px';
					marker.style['z-index'] = me._floorplan01.style['z-index'] + 2;
				}
			}
		}
		me._floorplan01.ggInitMapMarkers=function() {
			me._floorplan01.ggClearMapMarkers();
			var ids=player.getNodeIds();
			me._floorplan01.ggFilteredIds = [];
			if (me._floorplan01.ggFilter != '') {
				var filter = me._floorplan01.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me._floorplan01.ggFilteredIds.push(nodeId);
					}
				}
				if (me._floorplan01.ggFilteredIds.length > 0) ids = me._floorplan01.ggFilteredIds;
			}
			var nodeSortObjs = [];
			for (var i=0; i<ids.length;i++) {
				var gps;
				if (player.getMapType(me._floorplan01.ggMapId) == 'web') {
					gps=player.getNodeLatLng(ids[i]);
				} else {
					gps=player.getNodeMapCoords(ids[i], me._floorplan01.ggMapId);
				}
				if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0))) {
					var nodeSortObj = {};
					nodeSortObj['id'] = ids[i];
					nodeSortObj['lat'] = gps[0];
					nodeSortObj['lng'] = gps[1];
					nodeSortObjs.push(nodeSortObj);
				}
			}
			nodeSortObjs.sort(function(a, b){if (a['lat'] == b['lat']) return a['lng'] - b['lng']; else return b['lat'] - a['lat']});
			ids = [];
			for (var i=0; i<nodeSortObjs.length;i++) {
				ids.push(nodeSortObjs[i]['id']);
			}
			for(var i=0; i < ids.length; i++) {
				var id = ids[i];
				var coords = player.getNodeMapCoordsInPercent(id, me._floorplan01.ggMapId);
				if (coords.length>=2) {
					me._floorplan01.ggHMarkerAnchorOffset = 16;
					me._floorplan01.ggVMarkerAnchorOffset = 16;
					var markerParent = new Object();
					markerParent.ggElementNodeId=function() { return id };
					var markerClass = new SkinElement_image_10_Class(me, markerParent);
					me._floorplan01.ggMarkerInstances.push(markerClass);
					var marker = markerClass._image_10;
					me._floorplan01.ggSimpleFloorplanMarkerArray[id] = marker;
					me._floorplan01__mapdiv.appendChild(marker);
				}
			}
			me._floorplan01.ggPlaceMarkersOnSimpleFloorplan();
			skin.updateSize(me._floorplan01);
		}
		me._floorplan01.ggClearMapMarkers=function() {
			for (id in me._floorplan01.ggSimpleFloorplanMarkerArray) {
				if (me._floorplan01.ggSimpleFloorplanMarkerArray.hasOwnProperty(id)) {
					me._floorplan01__mapdiv.removeChild(me._floorplan01.ggSimpleFloorplanMarkerArray[id]);
				}
			}
			me._floorplan01.ggMarkerInstances=[];
			me._floorplan01.ggSimpleFloorplanMarkerArray=[];
		}
		me._float_cursor.logicBlock_visible();
		me._ring_white.logicBlock_bordercolor();
		me._float_tt.logicBlock_visible();
		me._video_1.ggInitMedia('QmJlaRZa9EE');
		player.addListener('activehotspotchanged', function(event) {
			me._float_cursor.logicBlock_visible();
			me._ring_white.logicBlock_bordercolor();
			me._float_tt.logicBlock_visible();
		});
		player.addListener('changenode', function(event) {
			var mapDetails = player.getMapDetails(me._floorplan01.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._floorplan01.ggCalculateFloorplanSize(mapDetails);
				me._floorplan01.ggShowSimpleFloorplan(mapDetails);
				me._floorplan01.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._floorplan01.ggLastNodeId) {
				var lastActiveMarker = me._floorplan01.ggSimpleFloorplanMarkerArray[me._floorplan01.ggLastNodeId];
				if (lastActiveMarker && lastActiveMarker.ggDeactivate) lastActiveMarker.ggDeactivate();
			}
			var id = player.getCurrentNode();
			var marker = me._floorplan01.ggSimpleFloorplanMarkerArray[id];
			if (marker) {
				if (marker.ggActivate) marker.ggActivate();
			}
			if (player.getMapType(me._floorplan01.ggMapId) == 'file') {
				var coords = player.getNodeMapCoords(id, me._floorplan01.ggMapId);
				if (coords.length < 2) {
					var mapId = player.getMapContainingNode(id);
					if (mapId != '') {
							me._floorplan01.ggChangeMap(mapId);
					}
				}
			}
			me._floorplan01.ggLastNodeId = id;
			me._float_cursor.logicBlock_visible();
			me._ring_white.logicBlock_bordercolor();
			me._float_tt.logicBlock_visible();
		});
		player.addListener('configloaded', function(event) {
			me._floorplan01.ggClearMap();
			me._floorplan01.ggInitMap(false);
			me._floorplan01.ggInitMapMarkers(true);
			me._float_cursor.logicBlock_visible();
			me._ring_white.logicBlock_bordercolor();
			me._float_tt.logicBlock_visible();
		});
	};
	function SkinHotspotClass_previewimage(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._previewimage=document.createElement('div');
		el.ggId="preview-image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 36px;';
		hs+='position : absolute;';
		hs+='top : 11px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._previewimage.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._previewimage.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._previewimage.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._previewimage.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['previewimage']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._previewimage.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['previewimage']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._previewimage.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['previewimage']) {
				player.setActiveHotspot(me.hotspot);
				me.elementMouseOver['previewimage']=true;
			}
		}
		me._previewimage.ggUpdatePosition=function (useTransition) {
		}
		el=me._nodeimage_1=document.createElement('div');
		els=me._nodeimage_1__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/nodeimage_1_" + nodeId + ".png");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;border-radius: 25px; border: 10px solid #f6921e;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="NodeImage 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='height : 135px;';
		hs+='left : -89px;';
		hs+='position : absolute;';
		hs+='top : -169px;';
		hs+='visibility : inherit;';
		hs+='width : 215px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._nodeimage_1.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._nodeimage_1.ggUpdatePosition=function (useTransition) {
		}
		me._previewimage.appendChild(me._nodeimage_1);
			me.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				me._previewimage.ggUpdateConditionTimer();
			}
			me.hotspotTimerEvent();
			me.__div = me._previewimage;
	};
	function SkinElement_image_10_Class(parentScope,ggParent) {
		var me=this;
		var flag=false;
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.ggUserdata.nodeid=nodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
		
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		
		el=me._image_10=document.createElement('div');
		els=me._image_10__img=document.createElement('img');
		els.className='ggskin ggskin_image_10';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQTSURBVHgBpVddUhtJDJY0GWMnIeu87Val2OEEa04Q5wTkCN53MHACzAnAZA/gvYFzgjgniHMCBkJVHqGoSkxiphVpTPe0xzP+i1487f7Rp5b0SY2wpNyc1utVerELCE1maDBAhAh1nZPxLQLEjDwkxsG9uXv/8uj2dplzcbHiP6ONIDxgxpZVuIwwcI/ooVPb+3oJ6wBQizdw8xgID+E3hNl0nh1cn8AqAFKrqfJBZqOpwwBuCXEo1vUZ6JJknM2Zf+S4pmh8O4sCYgzGzaLbwGWUTxTDWfWBungUz/Utn0b1+9DssoGODKNFIHCRctl5VkuCk0WK8zI6jS'+
			'IIzLGAb80DMQXge3frYspyFP/tz/pvdP7qNTM1JCgbj6fEwGZQa19/nFn7butYsqTjg/hh7nZsljgAo64sxGxhXrkGZYWeHwDQYWk2yOESC7180OVBGLnV5+0vRw7AJNUqF5BdS6/Wvvo3U14clKVScNXfz7dO5cdlFNI40nnSQSUIj73tcZWCztrKJxZEnISD0X9//W3/+pHQCftZY56kYPBGonYjMDcZMmjV9q7+d8hzcbGS5Pztu0LB/EzutqlKZtffcz++e2+/NS7WVq4ieytPNG4ez5Y0trcgbq5Xwxe7ZJCb3o6+z+FTKVQsMQgxzV3B5Pz+UlKZwFtvoEnI2Mj088B+js+j13OsjxHpzdP21fbT/csdTGg7BVMgaqmmrcOD3Hf6JY2leGVKEjCf7fcDmmaJcqhR0KztxwM3PorjEKhVtp6RnJGB4TibgIgU'+
			'YfGuYusF8BD3LmY4PWzHSkJx0R5kcAAIA+di1U2woshh5SWZYSW6TgH5uSmV7g93llhasifyfWpF+QIws3RKsPhmJkWOs0kJyMh+h0yl0S11oOeTjAJKyapEHsC4GjFG0/CBidGepV4tV5/6twPTFkVswlhI6pMSlfQGg3kZs7l/PfB0NO2nXP+QEmCHjgEbWnTcAukBYJ7olS8gKilqPfutrCubsoaFYEDjJOj77JRnLiiJ7CUl9itqEeuSspNWvwwyHdpbSOcSerMmiFj5wg40SMXQjh2rTmXdNA1FSdebqIfBpquOSjJrgEiV+3yRVlzPXbbiklUiP87fwteH37qvpkAo7eKkYYnLtKordU0toR1fuRY1BGy5ddLs2HnXET2W5U/gNZJlLfXoXdQUJne1QkrsEIE++/TsK/c7LTVAjbGDqZ5QG0kOzIcpEEs+MP'+
			'JS8q6Ycc1MW14EIm2xJICWeXLN6R1nlBcCKAWRoemLEweIxhGYlNR6AihUzG/lCdcoaFoLlZcCcEDyLfVaMv9dsfBxWvjAWKRSsiGQPN+g4KzI6pUAuEMfn1zaRjFig5kj20tM0g+lS+JhYvjjM2HXZV9SvwC8Gx6UvcUdWAAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPRSURBVHgBpVdNUtswFJZku5tmaG7QZAlDqT2EGXaYE8AR0hOUniDmBA03SG8QToDZMAwJk0A77ZJwgmbFAmyr7zmW8uJYsZO+TeRIet+np/cnzirKyHXrjmWdJEL4XEqXSdlgnNfTSSmnMJ5IKceSsTCJ40tvPJ5W0csrADcs2/4KoG0NWEGATM9OkmBnNHpmmxDAEwNwBxacsf+T4NNweM7WIZCe2rKuOOeN3BSadQyW6MskeYb5uZk5/wzH9mF0mtcH1piANfwia/CK4AjUjWq1Cy8MV97tyPfrzsvLCaAGEv2khAQvAwen6sa12nkZ8BKRw8OGE8cdib'+
			'6zgsQCgcf9/afcyQvv7/Hg4IgniSuFcFMloFhyHu4NBtf5tT9brQ7qoSTiOPZUlHDTwjw4OqUN0QAazkzRgMrhAL086SUSYNW94fCbJoCmB+VPagEq2R0MvhBwk1MyE5G8qR9bre80oqw4buC8SD8sq0PAJ8Jxgk3BMx2NSIjwt+d9VP/FUYRW0X4UWVZKhmem/as3C9Hevbv7oZkv+0Vlyd937iqmURQ1hYD0Sje9vb5eqjFu2BQcBfemfpMJAF6wuRXS1C7gXnyyp09zOA2hQgA4IcPEtFr0vWe69XqsKwJYuoRyqIZ/MNQMp0c/gZ/j3fv7Jni8F9l2M/uvSOoYtmRzXw0FFDV0wob6I5LygYx9g0IGTuoDcKi+vdvbicVY27QerKwPKWdWm40BGwkUxrTx9GDCnZubpZy+DUmIE+VUJCHg0PoB2IKtKYmUxpIs'+
			'F5VXEiSgN71j7INWZnAutMzCnWaC+YKRky7sMVgGsZGAnkyI2e1V3p0kPZpkkBAmK9PyiLFrMtYk4TonGAVzICl1Ld+eFZZCk6IVYsuaQJ4Y/cJEJWW4KmI84rCSOjdgC+jfaAVzMTOS7y5bLa4sSVTYmqkx6ua0YYGwF3GSYFzq7JTPXCviu1RwL62MRVlXYHYCh+uR/8+UFXDuzbKONyGRFTVffaOTclKSseKi/jQMY9u+IHvTZlR9YJJZl4QCp/kCKy71E1VxhQKR5L6xbmeVS5OA/qAJw6CECF5l8Pb+vUfBs6LWJusCNa87ovTh4Tgj2kgyQ0sGCn34OVIOiNkRvO2BpmcKzhZNrw7DFgikJGaN5FWum630wMhL0bui6GqW2/JiEnhFQZUnl6l3LAIvJGAiQaQPykPoiGkCq/PZW/GU4bsx17SawI0ElBR0ym'+
			'tL2bui/HFa8MCoIFNw0J7tON2iU69FQBOZP7l8iWaeNTLK1Hg6fJyMGaT2eGurX/Ul9Q+16jDdWB/RcwAAAABJRU5ErkJggg==';
		me._image_10__img.ggOverSrc=hs;
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPzSURBVHgBpVe9ctNAEN49xcTMwOACBqhQaIAK0dEhmDBDFx4heYKEJ4jT0ZG8gR/BaRjAGaI8QZwqLjJEaUgyk8IFhUJiLbuST7qzJVsOO5NYpzvdfvv33R5CRWm4fqNev7UEMPCJ0FMKXSBoJJMI/TimEJG6PAqiaLDdD4N+lX1x2oJHz32XaG6VFS5nCisIQdxiQM3Tw58ncBMAYvHt23PrQLgG/yEE1Dzr7WzALADEaoDaLk+61mJ2NRF0+as2QHzCoejnc/iS1fkM+OM4CODwDPwib2AV5aI4JtqMouutabHVuYJsORh7lIHAacpF8eXl9UbVpMr3+u'+
			'Bywq7zXsuTQIwAeH+MFuri+PG6N+wVjyj2htuE/Bec9Tp742sXGQQ2TRBRdPVKG4TlC23lqWvnVjnWa2XVIJvz/9Yo6NG9Y6TN88OdTxkAcT1C7djYiDfprOQbFCdlmRS5+vGLxS9WReHAlXmVjpx143v+uNa8qfKhVcwdTvD4xbsn+t38/PWGJLMex7FKwCjX8xsIajlHj0weX41MnU35KAgJXWJVN0gqSc+z5csyp6LIWTI/jKK/2/o5jd3syk0Qkjd6XK9fb2VeQOSccpYkBL5ewAjbdrkx/U5WweGC7sQVBFnch14w1itfISrPWB7op6TUyq0PuUrenvZ+LPw+7LwicBYgqYAiBNiQvfIhtvNn8JTNeHSQf8m0WmpWzedSC/TwrPeNAeWEMypM356hI8wmYnIVlZ5w6Ba/hq6dpBpEQkJh4SeYA4jj/PwQ7yiY'+
			'VSYdyUaZVRVl1iYp5162V3lyuWZMtSR8YbjaFsPt1mvqKzLdNojdfG5idrdMkkkB1XYnrM/OCDMcbH6oTEWcINlZLjHFEpcmiUtO+PDZ4v7wAAsmVYyZsJx4vn4U3cpCxy7UzJWuzZmrSDh+3jSi4nJt6WdhXbbSaFgwUPX6VdtmJ5u5oKy+q0lonoxFrKuEnUyUwlwmfzPJvL0hiFD4Qg/SQ0019VhOXGHdpAy5693KPmMvzEszOpSUZGYGkSi3+cJZt0kvPXEd+ffn4qh/98FTthpfJ5P8e+f+U37/a0/P8/OWvOM52aSQC5KmFegz944rF0edc8isl0NNreXWS7PzfTvVNRRJkMuotg+VWrJFn3/eqBQM9xnQJaIDK9st5Xk3JN457XUWMtD24g/cGQ12bRDVLhijUnKvGAsNjiMuAiHxj5tVrlwTeseCvCi9mI'+
			'yD0CI9A1/TApPA2P0NuSvy70dW7BWcF4XKSwHkQMbiN7NMu1fgtA2KLhjTRKphEFNLqVubRVbPBEBLfj0nbqOSA8XVvcSQSUN2fTdmaueLR7vqTeofvbcdYBAW8g0AAAAASUVORK5CYII=';
		me._image_10__img.ggDownSrc=hs;
		el.ggId="Image   1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0%);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_10.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_10.onclick=function (e) {
			player.openUrl("{"+me.ggNodeId+"}",player.hotspot.target);
		}
		me._image_10.onmouseover=function (e) {
			me._image_10__img.src=me._image_10__img.ggOverSrc;
			me.elementMouseOver['image_10']=true;
		}
		me._image_10.onmousedown=function (e) {
			me._image_10__img.src=me._image_10__img.ggDownSrc;
		}
		me._image_10.onmouseup=function (e) {
			if (skin.player.getHasTouch()) {
				me._image_10__img.src = me._image_10__img.ggNormalSrc;
			} else {
				me._image_10__img.src = me._image_10__img.ggOverSrc;
			}
		}
		me._image_10.onmouseout=function (e) {
			me._image_10__img.src=me._image_10__img.ggNormalSrc;
			me.elementMouseOver['image_10']=false;
		}
		me._image_10.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['image_10']) {
				me._image_10__img.src=me._image_10__img.ggOverSrc;
				me.elementMouseOver['image_10']=true;
			}
		}
		me._image_10.ggUpdatePosition=function (useTransition) {
		}
	player.addListener('timer', function() { me._image_10.ggUpdateConditionTimer(); });
	};
	function SkinHotspotClass_ht_popup(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_popup=document.createElement('div');
		el.ggId="ht_popup";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='z-index: 2;';
		hs+='height : 0px;';
		hs+='left : 5%;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_popup.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_popup.onclick=function (e) {
			skin._product1.style.transition='none';
			skin._product1.style.visibility=(Number(skin._product1.style.opacity)>0||!skin._product1.style.opacity)?'inherit':'hidden';
			skin._product1.ggVisible=true;
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_popup.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_popup.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_popup']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_popup.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_popup']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_popup.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['ht_popup']) {
				player.setActiveHotspot(me.hotspot);
				me.elementMouseOver['ht_popup']=true;
			}
		}
		me._ht_popup.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_1=document.createElement('div');
		els=me._svg_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MCIgdmlld0JveD0iMCAwIDUwIDUwIiBmaWxsPSJub25lIiBoZWlnaHQ9IjUwIj4KIDxyZWN0IHdpZHRoPSI1MCIgZmlsbD0iI0Y2OTIxRSIgaGVpZ2h0PSI1MCIgcng9IjI1Ii8+CiA8cGF0aCBkPSJNMjguOTkxNiAxMy43MDcxQzI4LjY5MDEgMTEuNTkzOCAyNi44NTA2IDEwIDI0LjcxMyAxMEMyMy4zMzg0IDEwIDIyLjAzMjggMTAuNjYzNCAyMS4yMjExIDExLjc3NTFDMjEuMDU1MyAxMi4wMDE4IDIxLjEwNDkgMTIuMzE5OSAyMS4zMzE2IDEyLjQ4NTdDMjEuNTU3NiAxMi42NTA5IDIxLjg3NjQgMTIuNjAxOS'+
			'AyMi4wNDE5IDEyLjM3NDlDMjIuNjYzMiAxMS41MjQ3IDIzLjY2MTYgMTEuMDE3IDI0LjcxMjkgMTEuMDE3QzI2LjM0NzcgMTEuMDE3IDI3Ljc1NDEgMTIuMjM1MyAyNy45ODQ3IDEzLjg1MDVDMjguMDIxIDE0LjEwNDIgMjguMjM4NyAxNC4yODczIDI4LjQ4NzYgMTQuMjg3M0MyOC41MTEzIDE0LjI4NzMgMjguNTM1NyAxNC4yODU1IDI4LjU2IDE0LjI4MjNDMjguODM4IDE0LjI0MjUgMjkuMDMxMiAxMy45ODQ5IDI4Ljk5MTYgMTMuNzA3MVoiIGZpbGw9ImJsYWNrIi8+CiA8cGF0aCBkPSJNMzYuMzM1MiAxOS4zOTg3TDM0LjgwOTggMTYuODU2MkMzNC43MTggMTYuNzAyOSAzNC41NTI1IDE2LjYw'+
			'OTQgMzQuMzczNyAxNi42MDk0SDMyLjkxMTlDMzIuNjMxMiAxNi42MDk0IDMyLjQwMzUgMTYuODM3MSAzMi40MDM1IDE3LjExNzhDMzIuNDAzNSAxNy4zOTg1IDMyLjYzMTIgMTcuNjI2MiAzMi45MTE5IDE3LjYyNjJIMzQuMDg1OUwzNS4wMDEyIDE5LjE1MTdIMTQuNDI0TDE1LjMzOTMgMTcuNjI2MkgxNS44Nzc4QzE2LjE1ODQgMTcuNjI2MiAxNi4zODYyIDE3LjM5ODUgMTYuMzg2MiAxNy4xMTc4QzE2LjM4NjIgMTYuODM3MSAxNi4xNTg0IDE2LjYwOTQgMTUuODc3OCAxNi42MDk0SDE1LjA1MTRDMTQuODcyNyAxNi42MDk0IDE0LjcwNzIgMTYuNzAyOSAxNC42MTU0IDE2Ljg1NjJMMTMuMDkgMT'+
			'kuMzk4N0MxMi45OTU3IDE5LjU1NiAxMi45OTM0IDE5Ljc1MTYgMTMuMDgzNiAxOS45MTFDMTMuMTczNyAyMC4wNzA0IDEzLjM0MjYgMjAuMTY5IDEzLjUyNiAyMC4xNjlIMzUuODk5MkMzNi4wODI1IDIwLjE2OSAzNi4yNTEzIDIwLjA3MDQgMzYuMzQxNiAxOS45MTFDMzYuNDMxOSAxOS43NTE2IDM2LjQyOTUgMTkuNTU1NyAzNi4zMzUyIDE5LjM5ODdaIiBmaWxsPSJibGFjayIvPgogPHBhdGggZD0iTTMzLjc5OTQgMTQuNzEwM0MzMy43MjgyIDE0LjU5NTQgMzMuNjE0NSAxNC41MTM5IDMzLjQ4MzEgMTQuNDgzM0wyNi41NTE1IDEyLjg2MkMyNi40MjAyIDEyLjgzMTIgMjYuMjgyIDEyLjg1NDEg'+
			'MjYuMTY3MyAxMi45MjVDMjYuMDUyOSAxMi45OTYzIDI1Ljk3MTIgMTMuMTA5OSAyNS45NDA1IDEzLjI0MTNMMjUuNDE3OCAxNS40NzU4QzI1LjM1MzggMTUuNzQ5MiAyNS41MjM2IDE2LjAyMjcgMjUuNzk3MSAxNi4wODY1QzI2LjA3MDQgMTYuMTUwNSAyNi4zNDQyIDE1Ljk4MDcgMjYuNDA4IDE1LjcwNzJMMjYuODE1IDEzLjk2OEwzMi43NTYzIDE1LjM1NzdMMzEuODIyNyAxOS4zNDkzQzMxLjc1ODcgMTkuNjIyNyAzMS45Mjg1IDE5Ljg5NjIgMzIuMjAyIDE5Ljk1OTlDMzIuMjQxMiAxOS45NjkgMzIuMjgwMSAxOS45NzMzIDMyLjMxODUgMTkuOTczM0MzMi41NDk0IDE5Ljk3MzMgMzIuNzU4NC'+
			'AxOS44MTUxIDMyLjgxMjggMTkuNTgwOEwzMy44NjIyIDE1LjA5NDJDMzMuODkzMiAxNC45NjI5IDMzLjg3MDYgMTQuODI0NyAzMy43OTk0IDE0LjcxMDNaIiBmaWxsPSJibGFjayIvPgogPHBhdGggZD0iTTI0Ljk4MTMgMTUuOTEyNUwyNC41MTggMTEuOTkzOEMyNC41MDIyIDExLjg1OTkgMjQuNDMzOSAxMS43Mzc2IDI0LjMyNzggMTEuNjU0MkMyNC4yMjE3IDExLjU3MDggMjQuMDg3OCAxMS41MzI2IDIzLjk1MzMgMTEuNTQ4NEwxNS40NDg3IDEyLjU1MzdDMTUuMTcgMTIuNTg2NyAxNC45NzA2IDEyLjgzOTQgMTUuMDAzNiAxMy4xMTg0TDE1Ljc3NiAxOS42NTQxQzE1LjgwNjYgMTkuOTEyOSAx'+
			'Ni4wMjYxIDIwLjEwMzEgMTYuMjgwNCAyMC4xMDMxQzE2LjMwMDIgMjAuMTAzMSAxNi4zMjA2IDIwLjEwMTggMTYuMzQwOCAyMC4wOTk1QzE2LjYxOTQgMjAuMDY2NCAxNi44MTg3IDE5LjgxMzggMTYuNzg2IDE5LjUzNDhMMTYuMDczMiAxMy41MDM2TDIzLjU2NzkgMTIuNjE3OUwyMy45NzEzIDE2LjAzMTVDMjQuMDA0NCAxNi4zMTAzIDI0LjI1NTkgMTYuNTA4NSAyNC41MzYxIDE2LjQ3NjlDMjQuODE0OCAxNi40NDQxIDI1LjAxNDEgMTYuMTkxMyAyNC45ODEzIDE1LjkxMjVaIiBmaWxsPSJibGFjayIvPgogPHBhdGggZD0iTTI5LjAwNDQgMTkuNDY5TDI3Ljk5NTEgMTUuMjcyQzI3Ljk2MzYgMT'+
			'UuMTQxMSAyNy44ODEyIDE1LjAyNzcgMjcuNzY2MyAxNC45NTcyQzI3LjY1MTUgMTQuODg3NCAyNy41MTM3IDE0Ljg2NTUgMjcuMzgxOCAxNC44OTY3TDE5LjE5MDUgMTYuODY2N0MxOC45MTc0IDE2LjkzMjMgMTguNzQ5NCAxNy4yMDcgMTguODE1IDE3LjQ4TDE5LjMxOTQgMTkuNTc3OEMxOS4zODQ5IDE5Ljg1MTEgMTkuNjU5NiAyMC4wMTkzIDE5LjkzMjUgMTkuOTUzM0MyMC4yMDU2IDE5Ljg4NzggMjAuMzczNiAxOS42MTMxIDIwLjMwODEgMTkuMzRMMTkuOTIyNCAxNy43MzY1TDI3LjEyNSAxNi4wMDQ2TDI4LjAxNTQgMTkuNzA3MUMyOC4wNzEzIDE5Ljk0MDIgMjguMjc5OCAyMC4wOTY2IDI4'+
			'LjUwOTQgMjAuMDk2NkMyOC41NDg5IDIwLjA5NjYgMjguNTg4OCAyMC4wOTIgMjguNjI4OSAyMC4wODIzQzI4LjkwMTkgMjAuMDE2NyAyOS4wNyAxOS43NDIxIDI5LjAwNDQgMTkuNDY5WiIgZmlsbD0iYmxhY2siLz4KIDxwYXRoIGQ9Ik0zNi40MDY4IDE5LjYzNDdDMzYuMzkyOCAxOS4zNjQ1IDM2LjE2OTYgMTkuMTUyMyAzNS44OTg4IDE5LjE1MjNIMTMuNTI1N0MxMy4yNTQ4IDE5LjE1MjMgMTMuMDMxNyAxOS4zNjQzIDEzLjAxNzcgMTkuNjM0N0wxMi4wMDA3IDM5LjQ2NTRDMTEuOTkzNSAzOS42MDQ1IDEyLjA0MzkgMzkuNzQwNyAxMi4xMzk4IDM5Ljg0MTdDMTIuMjM1OSAzOS45NDI2IDEyLj'+
			'M2OTEgMzkuOTk5OSAxMi41MDg1IDM5Ljk5OTlIMzYuOTE1NUMzNy4wNTQ4IDM5Ljk5OTkgMzcuMTg4MSAzOS45NDI3IDM3LjI4NDcgMzkuODQxN0MzNy4zODA1IDM5Ljc0MDcgMzcuNDMwOCAzOS42MDQ3IDM3LjQyMzggMzkuNDY1NEwzNi40MDY4IDE5LjYzNDdaTTEzLjA0MzYgMzguOTgyOUwxNC4wMDg1IDIwLjE2OTJIMzUuNDE1NEwzNi4zODAzIDM4Ljk4MjlIMTMuMDQzNloiIGZpbGw9ImJsYWNrIi8+CiA8cGF0aCBkPSJNMjguNTI1NCAyMS4xODc1QzI3LjY4NDIgMjEuMTg3NSAyNyAyMS44NzE3IDI3IDIyLjcxMjlDMjcgMjMuNTU0MiAyNy42ODQyIDI0LjIzODQgMjguNTI1NCAyNC4yMzg0'+
			'QzI5LjM2NjcgMjQuMjM4NCAzMC4wNTA5IDIzLjU1NDIgMzAuMDUwOSAyMi43MTI5QzMwLjA1MDkgMjEuODcxNyAyOS4zNjY3IDIxLjE4NzUgMjguNTI1NCAyMS4xODc1Wk0yOC41MjU0IDIzLjIyMTVDMjguMjQ0OSAyMy4yMjE1IDI4LjAxNyAyMi45OTM0IDI4LjAxNyAyMi43MTMxQzI4LjAxNyAyMi40MzI3IDI4LjI0NTEgMjIuMjA0NyAyOC41MjU0IDIyLjIwNDdDMjguODA1OCAyMi4yMDQ3IDI5LjAzMzkgMjIuNDMyNyAyOS4wMzM5IDIyLjcxMzFDMjkuMDMzOSAyMi45OTM0IDI4LjgwNTggMjMuMjIxNSAyOC41MjU0IDIzLjIyMTVaIiBmaWxsPSJibGFjayIvPgogPHBhdGggZD0iTTIwLjkwMD'+
			'QgMjEuMTg3NUMyMC4wNTkyIDIxLjE4NzUgMTkuMzc1IDIxLjg3MTcgMTkuMzc1IDIyLjcxMjlDMTkuMzc1IDIzLjU1NDIgMjAuMDU5MiAyNC4yMzg0IDIwLjkwMDQgMjQuMjM4NEMyMS43NDE3IDI0LjIzODQgMjIuNDI1OSAyMy41NTQyIDIyLjQyNTkgMjIuNzEyOUMyMi40MjU5IDIxLjg3MTcgMjEuNzQxNyAyMS4xODc1IDIwLjkwMDQgMjEuMTg3NVpNMjAuOTAwNCAyMy4yMjE1QzIwLjYyMDEgMjMuMjIxNSAyMC4zOTIgMjIuOTkzNCAyMC4zOTIgMjIuNzEzMUMyMC4zOTIgMjIuNDMyNyAyMC42MjAxIDIyLjIwNDcgMjAuOTAwNCAyMi4yMDQ3QzIxLjE4MDggMjIuMjA0NyAyMS40MDg5IDIyLjQz'+
			'MjcgMjEuNDA4OSAyMi43MTMxQzIxLjQwODkgMjIuOTkzNCAyMS4xODA4IDIzLjIyMTUgMjAuOTAwNCAyMy4yMjE1WiIgZmlsbD0iYmxhY2siLz4KIDxwYXRoIGQ9Ik0yOC41MjYyIDIyLjcxMDlIMjguNDg3MUMyOC4yMDY0IDIyLjcxMDkgMjcuOTc4NiAyMi45Mzg3IDI3Ljk3ODYgMjMuMjE5NEMyNy45Nzg2IDIzLjI4ODggMjcuOTkyMyAyMy4zNTUxIDI4LjAxNzggMjMuNDE1NFYyNi4wMTZDMjguMDE3OCAyNy44MzgzIDI2LjUzNTEgMjkuMzIxMSAyNC43MTI3IDI5LjMyMTFDMjIuODkwMiAyOS4zMjExIDIxLjQwNzUgMjcuODM4NCAyMS40MDc1IDI2LjAxNlYyMy4yMTk1QzIxLjQwNzUgMjIuOT'+
			'M4OSAyMS4xNzk3IDIyLjcxMTEgMjAuODk5MSAyMi43MTExQzIwLjYxODQgMjIuNzExMSAyMC4zOTA2IDIyLjkzODkgMjAuMzkwNiAyMy4yMTk1VjI2LjAxNjFDMjAuMzkwNiAyOC4zOTkzIDIyLjMyOTUgMzAuMzM4MSAyNC43MTI3IDMwLjMzODFDMjcuMDk1OSAzMC4zMzgxIDI5LjAzNDcgMjguMzk5MyAyOS4wMzQ3IDI2LjAxNjFWMjMuMjE5NUMyOS4wMzQ3IDIyLjkzODkgMjguODA2OSAyMi43MTA5IDI4LjUyNjIgMjIuNzEwOVoiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=';
		me._svg_1__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._svg_1.ggUpdatePosition=function (useTransition) {
		}
		me._ht_popup.appendChild(me._svg_1);
			me.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				me._ht_popup.ggUpdateConditionTimer();
			}
			me.hotspotTimerEvent();
			me.__div = me._ht_popup;
	};
	function SkinHotspotClass_ht_info_pop_up(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_info_pop_up=document.createElement('div');
		el.ggId="ht_info_pop_up";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='z-index: 2;';
		hs+='height : 0px;';
		hs+='left : 50px;';
		hs+='position : absolute;';
		hs+='top : 9px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_info_pop_up.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_info_pop_up.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_info_pop_up.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_info_pop_up.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin._info1.style.transition='none';
			skin._info1.style.visibility=(Number(skin._info1.style.opacity)>0||!skin._info1.style.opacity)?'inherit':'hidden';
			skin._info1.ggVisible=true;
			me.elementMouseOver['ht_info_pop_up']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_info_pop_up.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_info_pop_up']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_info_pop_up.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['ht_info_pop_up']) {
				player.setActiveHotspot(me.hotspot);
				skin._info1.style.transition='none';
				skin._info1.style.visibility=(Number(skin._info1.style.opacity)>0||!skin._info1.style.opacity)?'inherit':'hidden';
				skin._info1.ggVisible=true;
				me.elementMouseOver['ht_info_pop_up']=true;
			}
		}
		me._ht_info_pop_up.ggUpdatePosition=function (useTransition) {
		}
		el=me._lottie_1=document.createElement('div');
		el.ggLottie = lottie.loadAnimation({
			container: el,
			path: basePath + 'images/lottie_1.json',
			autoplay: true,
			loop: 999,
			rendererSettings: {
				preserveAspectRatio: 'xMidYMid meet'
			}
		});
		el.ggId="Lottie 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_lottie ";
		el.ggType='lottie';
		hs ='';
		hs+='background : rgba(0,0,0,0);';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : -16px;';
		hs+='position : absolute;';
		hs+='top : -44px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._lottie_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._lottie_1.ggUpdatePosition=function (useTransition) {
		}
		me._ht_info_pop_up.appendChild(me._lottie_1);
			me.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				me._ht_info_pop_up.ggUpdateConditionTimer();
			}
			me.hotspotTimerEvent();
			me.__div = me._ht_info_pop_up;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
			if (hotspot.skinid=='ht_info_pop_up') {
				hotspot.skinid = 'ht_info_pop_up';
				hsinst = new SkinHotspotClass_ht_info_pop_up(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ht_popup') {
				hotspot.skinid = 'ht_popup';
				hsinst = new SkinHotspotClass_ht_popup(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		{
				hotspot.skinid = 'preview-image';
				hsinst = new SkinHotspotClass_previewimage(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		hotspotTemplates = [];
	}
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		if (player.isInVR()) return;
		me.ggCurrentTime=new Date().getTime();
		me._svg_20.ggUpdateConditionTimer();
		me._svg_30.ggUpdateConditionTimer();
	};
	player.addListener('timer', me.skinTimerEvent);
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px; line-height: normal; } .ggmarkdown p,.ggmarkdown h1,.ggmarkdown h2,.ggmarkdown h3,.ggmarkdown h4 { margin-top: 0px } .ggmarkdown { white-space:normal }'));
	document.head.appendChild(style);
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onclick) activeElement.onclick();
		}
	});
	document.addEventListener('keydown', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmousedown) activeElement.onmousedown();
		}
	});
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmouseup) activeElement.onmouseup();
		}
	});
	me.skinTimerEvent();
	document.fonts.onloadingdone = () => {
		me.updateSize(me.divSkin);
	}
};