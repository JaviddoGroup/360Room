// Garden Gnome Software - Skin
// Pano2VR 7.0.4/19982
// Filename: 
// Generated 2024-01-12T14:59:58

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
		el=me._popups=document.createElement('div');
		el.ggId="Popups";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 156px;';
		hs+='position : absolute;';
		hs+='top : 165px;';
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
		hs+='height : auto;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((auto + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
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
		el.ggDx=800;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #848484;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 299px;';
		hs+='left : calc(50% - ((300px + 0px) / 2) + 800%);';
		hs+='position : absolute;';
		hs+='top : 1295%;';
		hs+='visibility : hidden;';
		hs+='width : 300px;';
		hs+='pointer-events:auto;';
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
		el=me._header0=document.createElement('div');
		els=me._header0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Header";
		el.ggDx=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text <iframe src=\"https:\/\/javiddogroup.en.alibaba.com\/productgrouplist-932990931\/Truck.html?spm=a2700.shop_index.88.27\" title=\"W3Schools Free Online Web Tutorials\"> <\/iframe>";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 46px;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 1%);';
		hs+='position : absolute;';
		hs+='top : 12.01%;';
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
		me._header0.ggUpdateText=function() {
			var params = [];
			var hs = player._("HP Monitor 24 inch", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._header0.ggUpdateText();
		el.appendChild(els);
		me._header0.ggIsActive=function() {
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
		me._header0.ggUpdatePosition=function (useTransition) {
		}
		me._product1.appendChild(me._header0);
		el=me._close=document.createElement('div');
		els=me._close__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 1.33%;';
		hs+='top : 1%;';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._close.ggUpdateText=function() {
			var params = [];
			var hs = player._("Close\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._close.ggUpdateText();
		el.appendChild(els);
		me._close.ggIsActive=function() {
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
		me._close.onclick=function (e) {
			me._product1.style.transition='none';
			me._product1.style.visibility='hidden';
			me._product1.ggVisible=false;
		}
		me._close.ggUpdatePosition=function (useTransition) {
		}
		me._product1.appendChild(me._close);
		el=me._svg_20=document.createElement('div');
		els=me._svg_20__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMiIgd2lkdGg9IjUxMiIgaWQ9IkxheWVyXzUiIGRhdGEtbmFtZT0iTGF5ZXIgNSIgdmlld0JveD0iMCAwIDE2IDE2IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogPHBhdGggZD0ibTggMGE4IDggMCAxIDAgOCA4IDguMDEwNiA4LjAxMDYgMCAwIDAgLTgtOHptMS4wNiAxMC40Ny0uNzEuNzFhMi40NTA2IDIuNDUwNiAwIDAgMSAtMS43Ni43MyAyLjQ5NjEgMi40OTYxIDAgMCAxIC0xLjc3LTQuMjZsLjcxLS43MWEuNDgzMy40ODMzIDAgMCAxIC43IDAgLjQ5NTEuNDk1MSAwIDAgMSAwIC43MWwtLjcxLjdhMS41MDY0IDEuNTA2NCAwIDAgMCAtLjQzID'+
			'EuMDYgMS40NzIzIDEuNDcyMyAwIDAgMCAuNDMgMS4wNiAxLjUwMjkgMS41MDI5IDAgMCAwIDIuMTMgMGwuNy0uN2EuNDk1MS40OTUxIDAgMCAxIC43MSAwIC40ODMzLjQ4MzMgMCAwIDEgMCAuN3ptLjM1LTMuMTgtMi4xMiAyLjEyYS40ODMzLjQ4MzMgMCAwIDEgLS43IDAgLjQ4MzMuNDgzMyAwIDAgMSAwLS43bDIuMTItMi4xMmEuNDk1LjQ5NSAwIDEgMSAuNy43em0xLjc3IDEuMDYtLjcxLjcxYS40NjkxLjQ2OTEgMCAwIDEgLS4zNS4xNS40ODUyLjQ4NTIgMCAwIDEgLS4zNS0uMTUuNDk1MS40OTUxIDAgMCAxIDAtLjcxbC43MS0uN2ExLjUwNjQgMS41MDY0IDAgMCAwIC40My0xLjA2IDEuNDcy'+
			'MyAxLjQ3MjMgMCAwIDAgLS40My0xLjA2IDEuNTAyOSAxLjUwMjkgMCAwIDAgLTIuMTMgMGwtLjcuN2EuNDk1MS40OTUxIDAgMCAxIC0uNzEgMCAuNDgzMy40ODMzIDAgMCAxIDAtLjdsLjcxLS43MWEyLjQ5NjEgMi40OTYxIDAgMCAxIDMuNTMgMy41M3oiIGZpbGw9IiMyMTk2ZjMiLz4KPC9zdmc+Cg==';
		me._svg_20__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 2";
		el.ggDy=-106;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='position : absolute;';
		hs+='right : 8%;';
		hs+='top : calc(50% - ((25px + 0px) / 2) - 106px);';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
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
			player.openUrl("https:\/\/www.javiddo.com\/contact","_blank");
		}
		me._svg_20.ggUpdatePosition=function (useTransition) {
		}
		me._product1.appendChild(me._svg_20);
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
		hs+='height : 238px;';
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
		me._products.appendChild(me._product1);
		me._popups.appendChild(me._products);
		me.divSkin.appendChild(me._popups);
		el=me._points=document.createElement('div');
		el.ggId="Points";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 19px;';
		hs+='position : absolute;';
		hs+='top : 14px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._points.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._points.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._points);
		el=me._header=document.createElement('div');
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
		me._header.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._header.ggUpdatePosition=function (useTransition) {
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
		me._header.appendChild(me._floorplan01);
		el=me._svg_2=document.createElement('div');
		els=me._svg_2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI0IiB3aWR0aD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxwYXRoIGQ9Ik0xNSAzbDIuMyAyLjMtMi44OSAyLjg3IDEuNDIgMS40MkwxOC43IDYuNyAyMSA5VjN6TTMgOWwyLjMtMi4zIDIuODcgMi44OSAxLjQyLTEuNDJMNi43IDUuMyA5IDNIM3ptNiAxMmwtMi4zLTIuMyAyLjg5LTIuODctMS40Mi0xLjQyTDUuMyAxNy4zIDMgMTV2NnptMTItNmwtMi4zIDIuMy0yLjg3LTIuODktMS40MiAxLjQyIDIuODkgMi44N0wxNSAyMWg2eiIvPgo8L3N2Zz4K';
		me._svg_2__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._svg_2__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI0IiB3aWR0aD0iMjQiIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxwYXRoIGQ9Ik0xNSAzTDE3LjMgNS4zTDE0LjQxIDguMTdMMTUuODMgOS41OUwxOC43IDYuN0wyMSA5VjNIMTVaTTMgOUw1LjMgNi43TDguMTcgOS41OUw5LjU5IDguMTdMNi43IDUuM0w5IDNIM1Y5Wk05IDIxTDYuNyAxOC43TDkuNTkgMTUuODNMOC4xNyAxNC40MUw1LjMgMTcuM0wzIDE1VjIxSDlaTTIxIDE1TDE4LjcgMTcuM0wxNS44MyAxNC40MUwxNC40MSAxNS44M0wxNy4zIDE4LjdMMTUgMjFIMjFWMTVaIiBmaWxsPS'+
			'IjRjY5MjFFIi8+Cjwvc3ZnPgo=';
		me._svg_2__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		ela=me._svg_2__imga=document.createElement('img');
		ela.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI0IiB3aWR0aD0iMjQiIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxwYXRoIGQ9Ik0xNSAzTDE3LjMgNS4zTDE0LjQxIDguMTdMMTUuODMgOS41OUwxOC43IDYuN0wyMSA5VjNIMTVaTTMgOUw1LjMgNi43TDguMTcgOS41OUw5LjU5IDguMTdMNi43IDUuM0w5IDNIM1Y5Wk05IDIxTDYuNyAxOC43TDkuNTkgMTUuODNMOC4xNyAxNC40MUw1LjMgMTcuM0wzIDE1VjIxSDlaTTIxIDE1TDE4LjcgMTcuM0wxNS44MyAxNC40MUwxNC40MSAxNS44M0wxNy4zIDE4LjdMMTUgMjFIMjFWMTVaIiBmaWxsPS'+
			'IjRjY5MjFFIi8+Cjwvc3ZnPgo=';
		me._svg_2__imga.setAttribute('src',hs);
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
			player.enterFullscreen();
		}
		me._svg_2.onmouseover=function (e) {
			me._svg_2__img.style.visibility='hidden';
			me._svg_2__imgo.style.visibility='inherit';
			me.elementMouseOver['svg_2']=true;
		}
		me._svg_2.onmousedown=function (e) {
			me._svg_2__imga.style.visibility='inherit';
			me._svg_2__imgo.style.visibility='hidden';
		}
		me._svg_2.onmouseup=function (e) {
			me._svg_2__imga.style.visibility='hidden';
			if (skin.player.getHasTouch()) {
				me._svg_2__img.style.visibility='inherit';
			} else {
				me._svg_2__imgo.style.visibility='inherit';
			}
		}
		me._svg_2.onmouseout=function (e) {
			me._svg_2__img.style.visibility='inherit';
			me._svg_2__imgo.style.visibility='hidden';
			me._svg_2__imga.style.visibility='hidden';
			me.elementMouseOver['svg_2']=false;
		}
		me._svg_2.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['svg_2']) {
				me._svg_2__img.style.visibility='hidden';
				me._svg_2__imgo.style.visibility='inherit';
				me.elementMouseOver['svg_2']=true;
			}
		}
		me._svg_2.ggUpdatePosition=function (useTransition) {
		}
		me._header.appendChild(me._svg_2);
		el=me._svg_3=document.createElement('div');
		els=me._svg_3__img=document.createElement('img');
		els.className='ggskin ggskin_svg_3';
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
		me._svg_3__img.ggOverSrc=hs;
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
			player.exitFullscreen();
		}
		me._svg_3.onmouseover=function (e) {
			me._svg_3__img.src=me._svg_3__img.ggOverSrc;
			me.elementMouseOver['svg_3']=true;
		}
		me._svg_3.onmouseout=function (e) {
			me._svg_3__img.src=me._svg_3__img.ggNormalSrc;
			me.elementMouseOver['svg_3']=false;
		}
		me._svg_3.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['svg_3']) {
				me._svg_3__img.src=me._svg_3__img.ggOverSrc;
				me.elementMouseOver['svg_3']=true;
			}
		}
		me._svg_3.ggUpdatePosition=function (useTransition) {
		}
		me._header.appendChild(me._svg_3);
		me.divSkin.appendChild(me._header);
		me._video_1.ggInitMedia('QmJlaRZa9EE');
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
					var markerClass = new SkinElement_image_1_Class(me, markerParent);
					me._floorplan01.ggMarkerInstances.push(markerClass);
					var marker = markerClass._image_1;
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
		});
		player.addListener('configloaded', function(event) {
			me._floorplan01.ggClearMap();
			me._floorplan01.ggInitMap(false);
			me._floorplan01.ggInitMapMarkers(true);
		});
	};
	function SkinElement_image_1_Class(parentScope,ggParent) {
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
		
		el=me._image_1=document.createElement('div');
		els=me._image_1__img=document.createElement('img');
		els.className='ggskin ggskin_image_1';
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
		me._image_1__img.ggOverSrc=hs;
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPzSURBVHgBpVe9ctNAEN49xcTMwOACBqhQaIAK0dEhmDBDFx4heYKEJ4jT0ZG8gR/BaRjAGaI8QZwqLjJEaUgyk8IFhUJiLbuST7qzJVsOO5NYpzvdfvv33R5CRWm4fqNev7UEMPCJ0FMKXSBoJJMI/TimEJG6PAqiaLDdD4N+lX1x2oJHz32XaG6VFS5nCisIQdxiQM3Tw58ncBMAYvHt23PrQLgG/yEE1Dzr7WzALADEaoDaLk+61mJ2NRF0+as2QHzCoejnc/iS1fkM+OM4CODwDPwib2AV5aI4JtqMouutabHVuYJsORh7lIHAacpF8eXl9UbVpMr3+u'+
			'Bywq7zXsuTQIwAeH+MFuri+PG6N+wVjyj2htuE/Bec9Tp742sXGQQ2TRBRdPVKG4TlC23lqWvnVjnWa2XVIJvz/9Yo6NG9Y6TN88OdTxkAcT1C7djYiDfprOQbFCdlmRS5+vGLxS9WReHAlXmVjpx143v+uNa8qfKhVcwdTvD4xbsn+t38/PWGJLMex7FKwCjX8xsIajlHj0weX41MnU35KAgJXWJVN0gqSc+z5csyp6LIWTI/jKK/2/o5jd3syk0Qkjd6XK9fb2VeQOSccpYkBL5ewAjbdrkx/U5WweGC7sQVBFnch14w1itfISrPWB7op6TUyq0PuUrenvZ+LPw+7LwicBYgqYAiBNiQvfIhtvNn8JTNeHSQf8m0WmpWzedSC/TwrPeNAeWEMypM356hI8wmYnIVlZ5w6Ba/hq6dpBpEQkJh4SeYA4jj/PwQ7yiY'+
			'VSYdyUaZVRVl1iYp5162V3lyuWZMtSR8YbjaFsPt1mvqKzLdNojdfG5idrdMkkkB1XYnrM/OCDMcbH6oTEWcINlZLjHFEpcmiUtO+PDZ4v7wAAsmVYyZsJx4vn4U3cpCxy7UzJWuzZmrSDh+3jSi4nJt6WdhXbbSaFgwUPX6VdtmJ5u5oKy+q0lonoxFrKuEnUyUwlwmfzPJvL0hiFD4Qg/SQ0019VhOXGHdpAy5693KPmMvzEszOpSUZGYGkSi3+cJZt0kvPXEd+ffn4qh/98FTthpfJ5P8e+f+U37/a0/P8/OWvOM52aSQC5KmFegz944rF0edc8isl0NNreXWS7PzfTvVNRRJkMuotg+VWrJFn3/eqBQM9xnQJaIDK9st5Xk3JN457XUWMtD24g/cGQ12bRDVLhijUnKvGAsNjiMuAiHxj5tVrlwTeseCvCi9mI'+
			'yD0CI9A1/TApPA2P0NuSvy70dW7BWcF4XKSwHkQMbiN7NMu1fgtA2KLhjTRKphEFNLqVubRVbPBEBLfj0nbqOSA8XVvcSQSUN2fTdmaueLR7vqTeofvbcdYBAW8g0AAAAASUVORK5CYII=';
		me._image_1__img.ggDownSrc=hs;
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
		me._image_1.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_1.onclick=function (e) {
			player.openUrl("{"+me.ggNodeId+"}",player.hotspot.target);
		}
		me._image_1.onmouseover=function (e) {
			me._image_1__img.src=me._image_1__img.ggOverSrc;
			me.elementMouseOver['image_1']=true;
		}
		me._image_1.onmousedown=function (e) {
			me._image_1__img.src=me._image_1__img.ggDownSrc;
		}
		me._image_1.onmouseup=function (e) {
			if (skin.player.getHasTouch()) {
				me._image_1__img.src = me._image_1__img.ggNormalSrc;
			} else {
				me._image_1__img.src = me._image_1__img.ggOverSrc;
			}
		}
		me._image_1.onmouseout=function (e) {
			me._image_1__img.src=me._image_1__img.ggNormalSrc;
			me.elementMouseOver['image_1']=false;
		}
		me._image_1.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['image_1']) {
				me._image_1__img.src=me._image_1__img.ggOverSrc;
				me.elementMouseOver['image_1']=true;
			}
		}
		me._image_1.ggUpdatePosition=function (useTransition) {
		}
	player.addListener('timer', function() { me._image_1.ggUpdateConditionTimer(); });
	};
	function SkinHotspotClass_ht_node(parentScope,hotspot) {
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
		el=me._ht_node=document.createElement('div');
		el.ggId="ht_node";
		el.ggDx=182;
		el.ggDy=78;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 182px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 78px);';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node.ggIsActive=function() {
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
		me._ht_node.onclick=function (e) {
			player.openUrl(player._(me.hotspot.url),player._(me.hotspot.target));
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin._ht_node.onclick.call(skin._ht_node);
			me.elementMouseOver['ht_node']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_node']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['ht_node']) {
				player.setActiveHotspot(me.hotspot);
				skin._ht_node.onclick.call(skin._ht_node);
				me.elementMouseOver['ht_node']=true;
			}
		}
		me._ht_node.ggUpdatePosition=function (useTransition) {
		}
		el=me._nodeimage_1=document.createElement('div');
		els=me._nodeimage_1__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/nodeimage_1_" + nodeId + ".png");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 15px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="NodeImage   1";
		el.ggDx=-1;
		el.ggDy=-109;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 210px;';
		hs+='left : calc(50% - ((350px + 0px) / 2) - 1px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((210px + 0px) / 2) - 109px);';
		hs+='visibility : inherit;';
		hs+='width : 350px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._nodeimage_1.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._nodeimage_1.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node.appendChild(me._nodeimage_1);
			me.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				me._ht_node.ggUpdateConditionTimer();
			}
			me.hotspotTimerEvent();
			me.__div = me._ht_node;
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
		el.ggDx=-137.01;
		el.ggDy=-151;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : calc(50% - ((0px + 0px) / 2) - 137.01%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) - 151px);';
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
		hs='data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUwIiB3aWR0aD0iNTAiIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA1MCA1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxyZWN0IGhlaWdodD0iNTAiIHdpZHRoPSI1MCIgcng9IjI1IiBmaWxsPSIjRjY5MjFFIi8+CiA8cGF0aCBkPSJNMjguOTkxNiAxMy43MDcxQzI4LjY5MDEgMTEuNTkzOCAyNi44NTA2IDEwIDI0LjcxMyAxMEMyMy4zMzg0IDEwIDIyLjAzMjggMTAuNjYzNCAyMS4yMjExIDExLjc3NTFDMjEuMDU1MyAxMi4wMDE4IDIxLjEwNDkgMTIuMzE5OSAyMS4zMzE2IDEyLjQ4NTdDMjEuNTU3NiAxMi42NTA5IDIxLjg3NjQgMTIuNjAxOS'+
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
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
			if (hotspot.skinid=='ht_popup') {
				hotspot.skinid = 'ht_popup';
				hsinst = new SkinHotspotClass_ht_popup(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		{
				hotspot.skinid = 'ht_node';
				hsinst = new SkinHotspotClass_ht_node(me, hotspot);
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
		me._svg_2.ggUpdateConditionTimer();
		me._svg_3.ggUpdateConditionTimer();
	};
	player.addListener('timer', me.skinTimerEvent);
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px; line-height: normal; } .ggmarkdown p,.ggmarkdown h1,.ggmarkdown h2,.ggmarkdown h3,.ggmarkdown h4 { margin-top: 0px } .ggmarkdown { white-space:normal } .w-20-recently{ background-image: url("https://i.im.ge/2024/01/12/3gmGzJ.Group-2365613.png"); background-size: contain; background-repeat: no-repeat; width: 50px; height: 50px; }'));
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