// Garden Gnome Software - Skin
// Pano2VR 7.0.4/19982
// Filename: HotMove.ggsk
// Generated 2024-02-08T15:05:32

function pano2vrSkin(player,base) {
	player.addVariable('panoramaName', 1, 0, { ignoreInState: 0  });
	player.addVariable('viewAngle', 1, 0, { ignoreInState: 0  });
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
		el=me._navbar=document.createElement('div');
		el.ggId="navbar";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 2;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._navbar.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._navbar.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_1=document.createElement('div');
		el.ggId="Rectangle 1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 2.91%;';
		hs+='cursor : default;';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((410px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 410px;';
		hs+='pointer-events:auto;';
		hs+='border-radius: 15px; background-color: #192845a8;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_1.ggIsActive=function() {
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
		me._rectangle_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_9=document.createElement('div');
		els=me._svg_9__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjUwIiB2aWV3Qm94PSIwIDAgMTUwIDUwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNTAiPgogPHBhdGggZmlsbD0id2hpdGUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTUuODc1MDYgMEMyLjY5NDMgMCAwIDIuNjk0MzMgMCA1Ljg3NTA2VjE3LjEyNTJDMCAyMC4zMDYgMi42OTQzIDIzLjAwMDIgNS44NzUwNiAyMy4wMDAySDE3LjEyNTJDMjAuMzA2IDIzLjAwMDIgMjMuMDAwMyAyMC4zMDYgMjMuMDAwMyAxNy4xMjUyVjUuODc1MDZDMjMuMDAwMyAyLjY5NDMzIDIwLjMwNiAwIDE3LjEyNTIgMEg1Ljg3NTA2Wk01Lj'+
			'AwMDA1IDUuODc1MDZDNS4wMDAwNSA1LjQ1NTc4IDUuNDU1NzUgNS4wMDAwNSA1Ljg3NTA2IDUuMDAwMDVIMTcuMTI1MkMxNy41NDQ1IDUuMDAwMDUgMTguMDAwMiA1LjQ1NTc4IDE4LjAwMDIgNS44NzUwNlYxNy4xMjUyQzE4LjAwMDIgMTcuNTQ0NSAxNy41NDQ1IDE4LjAwMDIgMTcuMTI1MiAxOC4wMDAySDUuODc1MDZDNS40NTU3NSAxOC4wMDAyIDUuMDAwMDUgMTcuNTQ0NSA1LjAwMDA1IDE3LjEyNTJWNS44NzUwNloiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgogPHBhdGggZmlsbD0id2hpdGUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTMyLjg3NTQgMEMyOS42OTQ2IDAgMjcuMDAwMyAyLjY5'+
			'NDMzIDI3LjAwMDMgNS44NzUwNlYxNy4xMjUyQzI3LjAwMDMgMjAuMzA2IDI5LjY5NDYgMjMuMDAwMiAzMi44NzU0IDIzLjAwMDJINDQuMTI1NUM0Ny4zMDYzIDIzLjAwMDIgNTAuMDAwNSAyMC4zMDYgNTAuMDAwNSAxNy4xMjUyVjUuODc1MDZDNTAuMDAwNSAyLjY5NDMzIDQ3LjMwNjMgMCA0NC4xMjU1IDBIMzIuODc1NFpNMzIuMDAwNCA1Ljg3NTA2QzMyLjAwMDQgNS40NTU3OCAzMi40NTYxIDUuMDAwMDUgMzIuODc1NCA1LjAwMDA1SDQ0LjEyNTVDNDQuNTQ0NyA1LjAwMDA1IDQ1LjAwMDUgNS40NTU3OCA0NS4wMDA1IDUuODc1MDZWMTcuMTI1MkM0NS4wMDA1IDE3LjU0NDUgNDQuNTQ0NyAxOC'+
			'4wMDAyIDQ0LjEyNTUgMTguMDAwMkgzMi44NzU0QzMyLjQ1NjEgMTguMDAwMiAzMi4wMDA0IDE3LjU0NDUgMzIuMDAwNCAxNy4xMjUyVjUuODc1MDZaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KIDxwYXRoIGZpbGw9IndoaXRlIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wIDMyLjg3NDhDMCAyOS42OTQgMi42OTQzIDI2Ljk5OTggNS44NzUwNiAyNi45OTk4SDE3LjEyNTJDMjAuMzA2IDI2Ljk5OTggMjMuMDAwMyAyOS42OTQgMjMuMDAwMyAzMi44NzQ4VjQ0LjEyNDlDMjMuMDAwMyA0Ny4zMDU3IDIwLjMwNiA1MCAxNy4xMjUyIDUwSDUuODc1MDZDMi42OTQzIDUwIDAgNDcuMzA1NyAwIDQ0LjEy'+
			'NDlWMzIuODc0OFpNNS44NzUwNiAzMS45OTk4QzUuNDU1NzUgMzEuOTk5OCA1LjAwMDA1IDMyLjQ1NTYgNS4wMDAwNSAzMi44NzQ4VjQ0LjEyNDlDNS4wMDAwNSA0NC41NDQyIDUuNDU1NzUgNDQuOTk5OSA1Ljg3NTA2IDQ0Ljk5OTlIMTcuMTI1MkMxNy41NDQ1IDQ0Ljk5OTkgMTguMDAwMiA0NC41NDQyIDE4LjAwMDIgNDQuMTI0OVYzMi44NzQ4QzE4LjAwMDIgMzIuNDU1NiAxNy41NDQ1IDMxLjk5OTggMTcuMTI1MiAzMS45OTk4SDUuODc1MDZaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KIDxwYXRoIGZpbGw9IndoaXRlIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zMi44NzU0IDI2Ljk5OThDMj'+
			'kuNjk0NiAyNi45OTk4IDI3LjAwMDMgMjkuNjk0IDI3LjAwMDMgMzIuODc0OFY0NC4xMjQ5QzI3LjAwMDMgNDcuMzA1NyAyOS42OTQ2IDUwIDMyLjg3NTQgNTBINDQuMTI1NUM0Ny4zMDYzIDUwIDUwLjAwMDUgNDcuMzA1NyA1MC4wMDA1IDQ0LjEyNDlWMzIuODc0OEM1MC4wMDA1IDI5LjY5NCA0Ny4zMDYzIDI2Ljk5OTggNDQuMTI1NSAyNi45OTk4SDMyLjg3NTRaTTMyLjAwMDQgMzIuODc0OEMzMi4wMDA0IDMyLjQ1NTYgMzIuNDU2MSAzMS45OTk4IDMyLjg3NTQgMzEuOTk5OEg0NC4xMjU1QzQ0LjU0NDcgMzEuOTk5OCA0NS4wMDA1IDMyLjQ1NTYgNDUuMDAwNSAzMi44NzQ4VjQ0LjEyNDlDNDUu'+
			'MDAwNSA0NC41NDQyIDQ0LjU0NDcgNDQuOTk5OSA0NC4xMjU1IDQ0Ljk5OTlIMzIuODc1NEMzMi40NTYxIDQ0Ljk5OTkgMzIuMDAwNCA0NC41NDQyIDMyLjAwMDQgNDQuMTI0OVYzMi44NzQ4WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+CiA8cGF0aCBmaWxsPSJ3aGl0ZSIgZD0iTTE0Ni43MyAyMy43MTAyQzE0Ni42ODUgMjMuMjUxOSAxNDYuNDkgMjIuODk1OCAxNDYuMTQ1IDIyLjY0MkMxNDUuOCAyMi4zODgyIDE0NS4zMzIgMjIuMjYxMyAxNDQuNzQxIDIyLjI2MTNDMTQ0LjM0IDIyLjI2MTMgMTQ0LjAwMSAyMi4zMTgyIDE0My43MjQgMjIuNDMxOEMxNDMuNDQ4IDIyLjU0MTcgMTQzLjIzNiAyMi'+
			'42OTUxIDE0My4wODggMjIuODkyQzE0Mi45NDQgMjMuMDg5IDE0Mi44NzIgMjMuMzEyNSAxNDIuODcyIDIzLjU2MjVDMTQyLjg2NSAyMy43NzA4IDE0Mi45MDggMjMuOTUyNiAxNDMuMDAzIDI0LjEwNzlDMTQzLjEwMSAyNC4yNjMyIDE0My4yMzYgMjQuMzk3NyAxNDMuNDA2IDI0LjUxMTNDMTQzLjU3NyAyNC42MjEyIDE0My43NzQgMjQuNzE3OCAxNDMuOTk3IDI0LjgwMTFDMTQ0LjIyMSAyNC44ODA3IDE0NC40NTkgMjQuOTQ4OCAxNDQuNzEzIDI1LjAwNTdMMTQ1Ljc1OSAyNS4yNTU3QzE0Ni4yNjYgMjUuMzY5MyAxNDYuNzMyIDI1LjUyMDggMTQ3LjE1NiAyNS43MTAyQzE0Ny41OCAyNS44OTk2'+
			'IDE0Ny45NDggMjYuMTMyNiAxNDguMjU5IDI2LjQwOTFDMTQ4LjU2OSAyNi42ODU2IDE0OC44MSAyNy4wMTEzIDE0OC45OCAyNy4zODYzQzE0OS4xNTQgMjcuNzYxMyAxNDkuMjQzIDI4LjE5MTMgMTQ5LjI0NyAyOC42NzYxQzE0OS4yNDMgMjkuMzg4MiAxNDkuMDYyIDMwLjAwNTcgMTQ4LjcwMiAzMC41Mjg0QzE0OC4zNDYgMzEuMDQ3MyAxNDcuODMgMzEuNDUwNyAxNDcuMTU2IDMxLjczODZDMTQ2LjQ4NiAzMi4wMjI3IDE0NS42NzcgMzIuMTY0OCAxNDQuNzMgMzIuMTY0OEMxNDMuNzkxIDMyLjE2NDggMTQyLjk3MyAzMi4wMjA4IDE0Mi4yNzYgMzEuNzMyOUMxNDEuNTgyIDMxLjQ0NTEgMTQxLj'+
			'A0MSAzMS4wMTg5IDE0MC42NTEgMzAuNDU0NUMxNDAuMjY0IDI5Ljg4NjMgMTQwLjA2MiAyOS4xODM3IDE0MC4wNDMgMjguMzQ2NkgxNDIuNDIzQzE0Mi40NSAyOC43MzY3IDE0Mi41NjIgMjkuMDYyNSAxNDIuNzU5IDI5LjMyMzhDMTQyLjk1OSAyOS41ODE0IDE0My4yMjYgMjkuNzc2NSAxNDMuNTYgMjkuOTA5MUMxNDMuODk3IDMwLjAzNzkgMTQ0LjI3NyAzMC4xMDIzIDE0NC43MDIgMzAuMTAyM0MxNDUuMTE4IDMwLjEwMjMgMTQ1LjQ4IDMwLjA0MTYgMTQ1Ljc4NyAyOS45MjA0QzE0Ni4wOTggMjkuNzk5MiAxNDYuMzM4IDI5LjYzMDcgMTQ2LjUwOSAyOS40MTQ4QzE0Ni42NzkgMjkuMTk4OCAx'+
			'NDYuNzY0IDI4Ljk1MDcgMTQ2Ljc2NCAyOC42NzA0QzE0Ni43NjQgMjguNDA5MSAxNDYuNjg3IDI4LjE4OTQgMTQ2LjUzMSAyOC4wMTEzQzE0Ni4zOCAyNy44MzMzIDE0Ni4xNTYgMjcuNjgxOCAxNDUuODYxIDI3LjU1NjhDMTQ1LjU2OSAyNy40MzE4IDE0NS4yMTEgMjcuMzE4MiAxNDQuNzg3IDI3LjIxNTlMMTQzLjUyIDI2Ljg5NzdDMTQyLjUzOSAyNi42NTkxIDE0MS43NjQgMjYuMjg2IDE0MS4xOTYgMjUuNzc4NEMxNDAuNjI4IDI1LjI3MDggMTQwLjM0NiAyNC41ODcxIDE0MC4zNDkgMjMuNzI3M0MxNDAuMzQ2IDIzLjAyMjcgMTQwLjUzMyAyMi40MDcyIDE0MC45MTIgMjEuODgwN0MxNDEuMj'+
			'k1IDIxLjM1NDIgMTQxLjgxOSAyMC45NDMyIDE0Mi40ODYgMjAuNjQ3N0MxNDMuMTUyIDIwLjM1MjMgMTQzLjkxIDIwLjIwNDUgMTQ0Ljc1OSAyMC4yMDQ1QzE0NS42MjIgMjAuMjA0NSAxNDYuMzc2IDIwLjM1MjMgMTQ3LjAyIDIwLjY0NzdDMTQ3LjY2OCAyMC45NDMyIDE0OC4xNzEgMjEuMzU0MiAxNDguNTMxIDIxLjg4MDdDMTQ4Ljg5MSAyMi40MDcyIDE0OS4wNzcgMjMuMDE3IDE0OS4wODggMjMuNzEwMkgxNDYuNzNaIi8+CiA8cGF0aCBmaWxsPSJ3aGl0ZSIgZD0iTTEyOS4yODcgMjIuMzkyMVYyMC4zNjM2SDEzOC44NDRWMjIuMzkyMUgxMzUuMjgxVjMySDEzMi44NDlWMjIuMzkyMUgxMjku'+
			'Mjg3WiIvPgogPHBhdGggZmlsbD0id2hpdGUiIGQ9Ik0xMjcuOTY2IDI0LjQzNzVIMTI1LjQ3N0MxMjUuNDMyIDI0LjExNTUgMTI1LjMzOSAyMy44Mjk1IDEyNS4xOTkgMjMuNTc5NUMxMjUuMDU5IDIzLjMyNTcgMTI0Ljg3OSAyMy4xMDk4IDEyNC42NTkgMjIuOTMxOEMxMjQuNDM5IDIyLjc1MzggMTI0LjE4NiAyMi42MTc0IDEyMy44OTggMjIuNTIyN0MxMjMuNjE0IDIyLjQyOCAxMjMuMzA1IDIyLjM4MDcgMTIyLjk3MiAyMi4zODA3QzEyMi4zNjkgMjIuMzgwNyAxMjEuODQ1IDIyLjUzMDMgMTIxLjM5OCAyMi44Mjk1QzEyMC45NTEgMjMuMTI1IDEyMC42MDQgMjMuNTU2OCAxMjAuMzU4IDI0Lj'+
			'EyNUMxMjAuMTEyIDI0LjY4OTQgMTE5Ljk4OSAyNS4zNzUgMTE5Ljk4OSAyNi4xODE4QzExOS45ODkgMjcuMDExMyAxMjAuMTEyIDI3LjcwODMgMTIwLjM1OCAyOC4yNzI3QzEyMC42MDggMjguODM3MSAxMjAuOTU2IDI5LjI2MzIgMTIxLjQwMyAyOS41NTExQzEyMS44NSAyOS44MzkgMTIyLjM2NyAyOS45ODI5IDEyMi45NTUgMjkuOTgyOUMxMjMuMjg0IDI5Ljk4MjkgMTIzLjU4OSAyOS45Mzk0IDEyMy44NjkgMjkuODUyM0MxMjQuMTUzIDI5Ljc2NTEgMTI0LjQwNSAyOS42MzgyIDEyNC42MjUgMjkuNDcxNkMxMjQuODQ1IDI5LjMwMTEgMTI1LjAyNyAyOS4wOTQ3IDEyNS4xNyAyOC44NTIzQzEy'+
			'NS4zMTggMjguNjA5OCAxMjUuNDIgMjguMzMzMyAxMjUuNDc3IDI4LjAyMjdMMTI3Ljk2NiAyOC4wMzQxQzEyNy45MDIgMjguNTY4MiAxMjcuNzQxIDI5LjA4MzMgMTI3LjQ4MyAyOS41Nzk1QzEyNy4yMjkgMzAuMDcyIDEyNi44ODYgMzAuNTEzMiAxMjYuNDU1IDMwLjkwMzRDMTI2LjAyNyAzMS4yODk4IDEyNS41MTUgMzEuNTk2NiAxMjQuOTIgMzEuODIzOEMxMjQuMzMgMzIuMDQ3MyAxMjMuNjYxIDMyLjE1OTEgMTIyLjkxNSAzMi4xNTkxQzEyMS44NzcgMzIuMTU5MSAxMjAuOTQ5IDMxLjkyNDIgMTIwLjEzMSAzMS40NTQ1QzExOS4zMTYgMzAuOTg0OCAxMTguNjcyIDMwLjMwNDkgMTE4LjE5OS'+
			'AyOS40MTQ4QzExNy43MjkgMjguNTI0NiAxMTcuNDk0IDI3LjQ0NyAxMTcuNDk0IDI2LjE4MThDMTE3LjQ5NCAyNC45MTI5IDExNy43MzMgMjMuODMzMyAxMTguMjEgMjIuOTQzMkMxMTguNjg4IDIyLjA1MyAxMTkuMzM1IDIxLjM3NSAxMjAuMTUzIDIwLjkwOTFDMTIwLjk3MiAyMC40Mzk0IDEyMS44OTIgMjAuMjA0NSAxMjIuOTE1IDIwLjIwNDVDMTIzLjU4OSAyMC4yMDQ1IDEyNC4yMTQgMjAuMjk5MiAxMjQuNzkgMjAuNDg4NkMxMjUuMzY5IDIwLjY3OCAxMjUuODgzIDIwLjk1NDUgMTI2LjMzIDIxLjMxODJDMTI2Ljc3NyAyMS42NzggMTI3LjE0IDIyLjExOTMgMTI3LjQyIDIyLjY0MkMxMjcu'+
			'NzA1IDIzLjE2NDggMTI3Ljg4NiAyMy43NjMyIDEyNy45NjYgMjQuNDM3NVoiLz4KIDxwYXRoIGZpbGw9IndoaXRlIiBkPSJNMTEzLjIxNCAyMC4zNjM2SDExNS42NzVWMjcuOTIwNUMxMTUuNjc1IDI4Ljc2OSAxMTUuNDcyIDI5LjUxMTQgMTE1LjA2NyAzMC4xNDc3QzExNC42NjUgMzAuNzg0MSAxMTQuMTAzIDMxLjI4MDMgMTEzLjM3OSAzMS42MzY0QzExMi42NTYgMzEuOTg4NiAxMTEuODEzIDMyLjE2NDggMTEwLjg1MSAzMi4xNjQ4QzEwOS44ODUgMzIuMTY0OCAxMDkuMDQgMzEuOTg4NiAxMDguMzE3IDMxLjYzNjRDMTA3LjU5MyAzMS4yODAzIDEwNy4wMzEgMzAuNzg0MSAxMDYuNjI5IDMwLj'+
			'E0NzdDMTA2LjIyOCAyOS41MTE0IDEwNi4wMjcgMjguNzY5IDEwNi4wMjcgMjcuOTIwNVYyMC4zNjM2SDEwOC40ODdWMjcuNzEwMkMxMDguNDg3IDI4LjE1MzQgMTA4LjU4NCAyOC41NDc0IDEwOC43NzcgMjguODkyMUMxMDguOTc0IDI5LjIzNjggMTA5LjI1IDI5LjUwNzYgMTA5LjYwNyAyOS43MDQ2QzEwOS45NjMgMjkuOTAxNSAxMTAuMzc3IDMwIDExMC44NTEgMzBDMTExLjMyOCAzMCAxMTEuNzQzIDI5LjkwMTUgMTEyLjA5NSAyOS43MDQ2QzExMi40NTEgMjkuNTA3NiAxMTIuNzI2IDI5LjIzNjggMTEyLjkxOSAyOC44OTIxQzExMy4xMTYgMjguNTQ3NCAxMTMuMjE0IDI4LjE1MzQgMTEzLjIx'+
			'NCAyNy43MTAyVjIwLjM2MzZaIi8+CiA8cGF0aCBmaWxsPSJ3aGl0ZSIgZD0iTTk4LjUxMTQgMzJIOTQuMzg2NFYyMC4zNjM2SDk4LjU0NTVDOTkuNzE1OSAyMC4zNjM2IDEwMC43MjMgMjAuNTk2NiAxMDEuNTY4IDIxLjA2MjVDMTAyLjQxMyAyMS41MjQ2IDEwMy4wNjMgMjIuMTg5NCAxMDMuNTE3IDIzLjA1NjhDMTAzLjk3NSAyMy45MjQzIDEwNC4yMDUgMjQuOTYyMSAxMDQuMjA1IDI2LjE3MDVDMTA0LjIwNSAyNy4zODI2IDEwMy45NzUgMjguNDI0MyAxMDMuNTE3IDI5LjI5NTVDMTAzLjA2MyAzMC4xNjY3IDEwMi40MDkgMzAuODM1MiAxMDEuNTU3IDMxLjMwMTFDMTAwLjcwOCAzMS43NjcxID'+
			'k5LjY5MzIgMzIgOTguNTExNCAzMlpNOTYuODQ2NiAyOS44OTIxSDk4LjQwOTFDOTkuMTM2NCAyOS44OTIxIDk5Ljc0ODEgMjkuNzYzMyAxMDAuMjQ0IDI5LjUwNTdDMTAwLjc0NCAyOS4yNDQzIDEwMS4xMTkgMjguODQwOSAxMDEuMzY5IDI4LjI5NTVDMTAxLjYyMyAyNy43NDYyIDEwMS43NSAyNy4wMzc5IDEwMS43NSAyNi4xNzA1QzEwMS43NSAyNS4zMTA2IDEwMS42MjMgMjQuNjA4IDEwMS4zNjkgMjQuMDYyNUMxMDEuMTE5IDIzLjUxNzEgMTAwLjc0NiAyMy4xMTU1IDEwMC4yNSAyMi44NThDOTkuNzUzOCAyMi42MDA0IDk5LjE0MiAyMi40NzE2IDk4LjQxNDggMjIuNDcxNkg5Ni44NDY2VjI5'+
			'Ljg5MjFaIi8+CiA8cGF0aCBmaWxsPSJ3aGl0ZSIgZD0iTTkyLjU2MzkgMjYuMTgxOEM5Mi41NjM5IDI3LjQ1MDcgOTIuMzIzNCAyOC41MzAzIDkxLjg0MjMgMjkuNDIwNEM5MS4zNjUxIDMwLjMxMDYgOTAuNzEzNSAzMC45OTA1IDg5Ljg4NzggMzEuNDYwMkM4OS4wNjU4IDMxLjkyNjEgODguMTQxNiAzMi4xNTkxIDg3LjExNTEgMzIuMTU5MUM4Ni4wODEgMzIuMTU5MSA4NS4xNTI5IDMxLjkyNDIgODQuMzMxIDMxLjQ1NDVDODMuNTA5IDMwLjk4NDggODIuODU5NCAzMC4zMDQ5IDgyLjM4MjEgMjkuNDE0OEM4MS45MDQ4IDI4LjUyNDYgODEuNjY2MiAyNy40NDcgODEuNjY2MiAyNi4xODE4QzgxLj'+
			'Y2NjIgMjQuOTEyOSA4MS45MDQ4IDIzLjgzMzMgODIuMzgyMSAyMi45NDMyQzgyLjg1OTQgMjIuMDUzIDgzLjUwOSAyMS4zNzUgODQuMzMxIDIwLjkwOTFDODUuMTUyOSAyMC40Mzk0IDg2LjA4MSAyMC4yMDQ1IDg3LjExNTEgMjAuMjA0NUM4OC4xNDE2IDIwLjIwNDUgODkuMDY1OCAyMC40Mzk0IDg5Ljg4NzggMjAuOTA5MUM5MC43MTM1IDIxLjM3NSA5MS4zNjUxIDIyLjA1MyA5MS44NDIzIDIyLjk0MzJDOTIuMzIzNCAyMy44MzMzIDkyLjU2MzkgMjQuOTEyOSA5Mi41NjM5IDI2LjE4MThaTTkwLjA2OTYgMjYuMTgxOEM5MC4wNjk2IDI1LjM1OTggODkuOTQ2NSAyNC42NjY3IDg5LjcwMDMgMjQu'+
			'MTAyM0M4OS40NTc5IDIzLjUzNzkgODkuMTE1MSAyMy4xMDk4IDg4LjY3MTkgMjIuODE4MkM4OC4yMjg3IDIyLjUyNjUgODcuNzA5OCAyMi4zODA3IDg3LjExNTEgMjIuMzgwN0M4Ni41MjA0IDIyLjM4MDcgODYuMDAxNCAyMi41MjY1IDg1LjU1ODIgMjIuODE4MkM4NS4xMTUxIDIzLjEwOTggODQuNzcwNCAyMy41Mzc5IDg0LjUyNDIgMjQuMTAyM0M4NC4yODE3IDI0LjY2NjcgODQuMTYwNSAyNS4zNTk4IDg0LjE2MDUgMjYuMTgxOEM4NC4xNjA1IDI3LjAwMzggODQuMjgxNyAyNy42OTcgODQuNTI0MiAyOC4yNjEzQzg0Ljc3MDQgMjguODI1NyA4NS4xMTUxIDI5LjI1MzggODUuNTU4MiAyOS41ND'+
			'U0Qzg2LjAwMTQgMjkuODM3MSA4Ni41MjA0IDI5Ljk4MjkgODcuMTE1MSAyOS45ODI5Qzg3LjcwOTggMjkuOTgyOSA4OC4yMjg3IDI5LjgzNzEgODguNjcxOSAyOS41NDU0Qzg5LjExNTEgMjkuMjUzOCA4OS40NTc5IDI4LjgyNTcgODkuNzAwMyAyOC4yNjEzQzg5Ljk0NjUgMjcuNjk3IDkwLjA2OTYgMjcuMDAzOCA5MC4wNjk2IDI2LjE4MThaIi8+CiA8cGF0aCBmaWxsPSJ3aGl0ZSIgZD0iTTcxLjM3MDcgMzJWMjAuMzYzNkg3NS45NjE3Qzc2Ljg0MDQgMjAuMzYzNiA3Ny41OTA0IDIwLjUyMDggNzguMjExNyAyMC44MzUyQzc4LjgzNjcgMjEuMTQ1OCA3OS4zMTIgMjEuNTg3MSA3OS42Mzc4IDIy'+
			'LjE1OTFDNzkuOTY3MyAyMi43MjczIDgwLjEzMjEgMjMuMzk1OCA4MC4xMzIxIDI0LjE2NDhDODAuMTMyMSAyNC45Mzc1IDc5Ljk2NTQgMjUuNjAyMyA3OS42MzIxIDI2LjE1OTFDNzkuMjk4OCAyNi43MTIxIDc4LjgxNTggMjcuMTM2NCA3OC4xODMyIDI3LjQzMThDNzcuNTU0NSAyNy43MjczIDc2Ljc5MzEgMjcuODc1IDc1Ljg5OTIgMjcuODc1SDcyLjgyNTNWMjUuODk3N0g3NS41MDE0Qzc1Ljk3MTEgMjUuODk3NyA3Ni4zNjEzIDI1LjgzMzMgNzYuNjcxOSAyNS43MDQ2Qzc2Ljk4MjUgMjUuNTc1OCA3Ny4yMTM1IDI1LjM4MjYgNzcuMzY1MSAyNS4xMjVDNzcuNTIwNCAyNC44Njc0IDc3LjU5OC'+
			'AyNC41NDc0IDc3LjU5OCAyNC4xNjQ4Qzc3LjU5OCAyMy43Nzg0IDc3LjUyMDQgMjMuNDUyNyA3Ny4zNjUxIDIzLjE4NzVDNzcuMjEzNSAyMi45MjI0IDc2Ljk4MDYgMjIuNzIxNiA3Ni42NjYyIDIyLjU4NTJDNzYuMzU1NiAyMi40NDUxIDc1Ljk2MzUgMjIuMzc1IDc1LjQ5MDEgMjIuMzc1SDczLjgzMVYzMkg3MS4zNzA3Wk03Ny42NTQ4IDI2LjcwNDZMODAuNTQ2OSAzMkg3Ny44MzFMNzUuMDAxNCAyNi43MDQ2SDc3LjY1NDhaIi8+CiA8cGF0aCBmaWxsPSJ3aGl0ZSIgZD0iTTYxLjAxMTQgMzJWMjAuMzYzNkg2NS42MDIzQzY2LjQ4NDkgMjAuMzYzNiA2Ny4yMzY3IDIwLjUzMjIgNjcuODU4IDIw'+
			'Ljg2OTNDNjguNDc5MiAyMS4yMDI3IDY4Ljk1MjcgMjEuNjY2NyA2OS4yNzg0IDIyLjI2MTRDNjkuNjA4IDIyLjg1MjMgNjkuNzcyNyAyMy41MzQxIDY5Ljc3MjcgMjQuMzA2OEM2OS43NzI3IDI1LjA3OTYgNjkuNjA2MSAyNS43NjE0IDY5LjI3MjcgMjYuMzUyM0M2OC45Mzk0IDI2Ljk0MzIgNjguNDU2NCAyNy40MDM0IDY3LjgyMzkgMjcuNzMzQzY3LjE5NTEgMjguMDYyNSA2Ni40MzM3IDI4LjIyNzMgNjUuNTM5OCAyOC4yMjczSDYyLjYxMzZWMjYuMjU1N0g2NS4xNDJDNjUuNjE1NSAyNi4yNTU3IDY2LjAwNTcgMjYuMTc0MyA2Ni4zMTI1IDI2LjAxMTRDNjYuNjIzMSAyNS44NDQ3IDY2Ljg1ND'+
			'IgMjUuNjE1NSA2Ny4wMDU3IDI1LjMyMzlDNjcuMTYxIDI1LjAyODQgNjcuMjM4NiAyNC42ODk0IDY3LjIzODYgMjQuMzA2OEM2Ny4yMzg2IDIzLjkyMDUgNjcuMTYxIDIzLjU4MzMgNjcuMDA1NyAyMy4yOTU1QzY2Ljg1NDIgMjMuMDAzOCA2Ni42MjMxIDIyLjc3ODQgNjYuMzEyNSAyMi42MTkzQzY2LjAwMTkgMjIuNDU2NSA2NS42MDggMjIuMzc1IDY1LjEzMDcgMjIuMzc1SDYzLjQ3MTZWMzJINjEuMDExNFoiLz4KPC9zdmc+Cg==';
		me._svg_9__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 9";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 33px;';
		hs+='left : 5%;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((33px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_9.ggIsActive=function() {
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
		me._svg_9.onclick=function (e) {
			me._products_list.style.transition='none';
			me._products_list.style.visibility=(Number(me._products_list.style.opacity)>0||!me._products_list.style.opacity)?'inherit':'hidden';
			me._products_list.ggVisible=true;
			(function() {
    var elementsBeforeTarget = document.querySelectorAll('.product_list');
    elementsBeforeTarget.forEach(function(element) {
        element.style.visibility = 'inherit';
    });
})();
		}
		me._svg_9.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_1.appendChild(me._svg_9);
		el=me._svg_120=document.createElement('div');
		els=me._svg_120__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjMzIiB2aWV3Qm94PSIwIDAgMiAzMyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMiI+CiA8cmVjdCBmaWxsPSJ3aGl0ZSIgaGVpZ2h0PSIzMyIgcng9IjEiIHdpZHRoPSIyIi8+Cjwvc3ZnPgo=';
		me._svg_120__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 12";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 33px;';
		hs+='left : 125px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((33px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_120.ggIsActive=function() {
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
		me._svg_120.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_1.appendChild(me._svg_120);
		el=me._svg_15=document.createElement('div');
		els=me._svg_15__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjMzIiB2aWV3Qm94PSIwIDAgMzcgMzMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjM3Ij4KIDxwYXRoIGZpbGw9IndoaXRlIiBkPSJNMzYuNDQ4MiAxNy4xNDM2QzM2LjAwMTkgMTYuNzQ5MyAzNS4zMjAyIDE2Ljc5MTcgMzQuOTI1OSAxNy4yMzhMMzQuOTA4NSAxNy4yNTc2VjE2LjUwMThDMzQuOTA4NSAxMi4wOTQgMzMuMTkxOSA3Ljk0OTk3IDMwLjA3NDkgNC44MzMwMUMyNi45NTgyIDEuNzE2MzIgMjIuODE0MiAwIDE4LjQwNjQgMEMxNS43NDM4IDAgMTMuMDk4MiAwLjY0OTM0NCAxMC43NTUgMS44Nzc1NEM4LjQ4Nz'+
			'g3IDMuMDY1ODUgNi40OTc5OSA0Ljc5NDUzIDUuMDAwNDUgNi44NzcxQzQuNjUyNzUgNy4zNjA0NSA0Ljc2Mjg1IDguMDM0NTEgNS4yNDY0OCA4LjM4MjIxQzUuNzMwMTIgOC43MzAyIDYuNDA0MTggOC42MjAxIDYuNzUxODkgOC4xMzY0NkM4LjA1NDUxIDYuMzI0OTMgOS43ODUxNSA0LjgyMTIxIDExLjc1NjUgMy43ODc5NEMxMy43OTE5IDIuNzIwOTUgMTYuMDkxMyAyLjE1Njk5IDE4LjQwNjQgMi4xNTY5OUMyNi4zMTYyIDIuMTU2OTkgMzIuNzUxNSA4LjU5MjMgMzIuNzUxNSAxNi41MDIxVjE3LjI1NzlMMzIuNzMzOCAxNy4yMzgyQzMyLjMzOTUgMTYuNzkxNyAzMS42NTc4IDE2Ljc0OTUgMzEu'+
			'MjExNSAxNy4xNDM5QzMwLjc2NSAxNy41MzgyIDMwLjcyMjkgMTguMjE5OCAzMS4xMTcyIDE4LjY2NjFMMzMuMDIxNCAyMC44MjJDMzMuMjI2MSAyMS4wNTM3IDMzLjUyMDUgMjEuMTg2MyAzMy44Mjk3IDIxLjE4NjNDMzQuMTM4OSAyMS4xODYzIDM0LjQzMzMgMjEuMDUzNyAzNC42MzggMjAuODIyTDM2LjU0MjIgMTguNjY2MUMzNi45MzY4IDE4LjIxOTYgMzYuODk0NyAxNy41Mzc5IDM2LjQ0ODIgMTcuMTQzNloiLz4KIDxwYXRoIGZpbGw9IndoaXRlIiBkPSJNMzEuNTY2MyAyNC42MTc4QzMxLjA4MjYgMjQuMjcwMSAzMC40MDg4IDI0LjM3OTkgMzAuMDYwOSAyNC44NjM2QzI4Ljc1ODIgMjYuNj'+
			'c0OCAyNy4wMjc2IDI4LjE3ODUgMjUuMDU2MiAyOS4yMTIxQzIzLjAyMDkgMzAuMjc5MSAyMC43MjEyIDMwLjg0MyAxOC40MDY0IDMwLjg0M0MxMC40OTY2IDMwLjg0MyA0LjA2MTI1IDI0LjQwNzcgNC4wNjEyNSAxNi40OTc5VjE1Ljc0MjFMNC4wNzg5NCAxNS43NjIxQzQuNDczMjcgMTYuMjA4MyA1LjE1NDkxIDE2LjI1MDggNS42MDEyIDE1Ljg1NjFDNi4wNDc3NiAxNS40NjE4IDYuMDg5ODkgMTQuNzgwMiA1LjY5NTU2IDE0LjMzMzlMMy43OTEzNCAxMi4xNzhDMy41ODYzMiAxMS45NDYzIDMuMjkyMjYgMTEuODEzNSAyLjk4MzAzIDExLjgxMzVDMi42NzM4MSAxMS44MTM1IDIuMzc5MTkgMTEu'+
			'OTQ2MyAyLjE3NDcyIDEyLjE3OEwwLjI3MDIyNCAxNC4zMzM5Qy0wLjEyNDEgMTQuNzgwNSAtMC4wODE5NzE4IDE1LjQ2MTggMC4zNjQ1OTMgMTUuODU2MUMwLjU2OTYxOSAxNi4wMzc2IDAuODI0MzU4IDE2LjEyNjYgMS4wNzgyNSAxNi4xMjY2QzEuMzc2NTMgMTYuMTI2NiAxLjY3MzY3IDE2LjAwMzMgMS44ODY4NCAxNS43NjIxTDEuOTA0MjYgMTUuNzQyMVYxNi40OTc5QzEuOTA0MjYgMjAuOTA2IDMuNjIwODYgMjUuMDQ5OCA2LjczNzgzIDI4LjE2NjdDOS44NTQ1MSAzMS4yODM3IDEzLjk5ODYgMzMgMTguNDA2NCAzM0MyMS4wNjg2IDMzIDIzLjcxNDYgMzIuMzUwNyAyNi4wNTc4IDMxLjEyMj'+
			'VDMjguMzI0NiAyOS45MzQyIDMwLjMxNDUgMjguMjA1MiAzMS44MTIgMjYuMTIyOUMzMi4xNTk3IDI1LjYzOTMgMzIuMDQ5OSAyNC45NjU1IDMxLjU2NjMgMjQuNjE3OFoiLz4KIDxwYXRoIGZpbGw9IndoaXRlIiBkPSJNNy43Njg1NyAxOS4yNjEzQzcuNjk0NDMgMTkuNTM3NCA3LjczMzE5IDE5LjgzMTcgNy44NzY0MiAyMC4wNzk0TDEwLjAzMzQgMjMuODE1N0MxMC4xNzY0IDI0LjA2MzQgMTAuNDEyIDI0LjI0NCAxMC42ODgxIDI0LjMxODFDMTAuOTY0NSAyNC4zOTIgMTEuMjU4OCAyNC4zNTM1IDExLjUwNjUgMjQuMjEwM0wxMy4wOTI1IDIzLjI5NDdDMTMuNzI1OSAyMy43ODk2IDE0LjQyNzcg'+
			'MjQuMTk1NyAxNS4xNzA5IDI0LjQ5NzNWMjYuMzI2QzE1LjE3MDkgMjYuOTIxNCAxNS42NTM3IDI3LjQwNDUgMTYuMjQ5NCAyNy40MDQ1SDIwLjU2MzRDMjEuMTU4OCAyNy40MDQ1IDIxLjY0MTggMjYuOTIxNCAyMS42NDE4IDI2LjMyNlYyNC40OTczQzIyLjM4NSAyNC4xOTU3IDIzLjA4NjkgMjMuNzg5NiAyMy43MjAyIDIzLjI5NDdMMjUuMzA2MiAyNC4yMTAzQzI1LjU1MzYgMjQuMzUzMiAyNS44NDgzIDI0LjM5MiAyNi4xMjQzIDI0LjMxODFDMjYuNDAwNyAyNC4yNDQgMjYuNjM2NCAyNC4wNjM0IDI2Ljc3OTMgMjMuODE1N0wyOC45MzYzIDIwLjA3OTRDMjkuMDc5MyAxOS44MzE3IDI5LjExOC'+
			'AxOS41Mzc0IDI5LjA0NDEgMTkuMjYxM0MyOC45NyAxOC45ODQ5IDI4Ljc4OTEgMTguNzQ5MyAyOC41NDE3IDE4LjYwNjNMMjYuOTUyMyAxNy42ODg4QzI3LjAwNjggMTcuMjk1IDI3LjAzNDMgMTYuODk2NSAyNy4wMzQzIDE2LjQ5NzlDMjcuMDM0MyAxNi4wOTQ2IDI3LjAwNjIgMTUuNjkyMSAyNi45NTAzIDE1LjI5MzlMMjguNTQxNyAxNC4zNzUyQzI4Ljc4OTQgMTQuMjMyMiAyOC45NyAxMy45OTY2IDI5LjA0NDEgMTMuNzIwMkMyOS4xMTggMTMuNDQzOSAyOS4wNzkzIDEzLjE0OTUgMjguOTM2MyAxMi45MDE4TDI2Ljc3OTMgOS4xNjU4M0MyNi40ODE2IDguNjUwMTggMjUuODIxOSA4LjQ3MzUy'+
			'IDI1LjMwNjIgOC43NzEyM0wyMy43MDk4IDkuNjkzQzIzLjA3OSA5LjIwMTc4IDIyLjM4MDggOC43OTg0NyAyMS42NDE4IDguNDk4NTFWNi42NTU1MkMyMS42NDE4IDYuMDYwMSAyMS4xNTkxIDUuNTc3MDMgMjAuNTYzNCA1LjU3NzAzSDE2LjI0OTRDMTUuNjUzNyA1LjU3NzAzIDE1LjE3MDkgNi4wNjAxIDE1LjE3MDkgNi42NTU1MlY4LjQ5ODUxQzE0LjQzMjIgOC43OTg0NyAxMy43MzM3IDkuMjAxNzggMTMuMTAzMiA5LjY5M0wxMS41MDY1IDguNzcxMjNDMTAuOTkwOSA4LjQ3MzI0IDEwLjMzMTEgOC42NTAxOCAxMC4wMzM0IDkuMTY1ODNMNy44NzY0MiAxMi45MDE4QzcuNzMzNDcgMTMuMTQ5NS'+
			'A3LjY5NDcxIDEzLjQ0NDEgNy43Njg1NyAxMy43MjAyQzcuODQyNzIgMTMuOTk2NiA4LjAyMzMxIDE0LjIzMjIgOC4yNzEwMyAxNC4zNzUyTDkuODYyMzcgMTUuMjkzOUM5LjgwNjQ4IDE1LjY5MjEgOS43Nzg0IDE2LjA5NDYgOS43Nzg0IDE2LjQ5NzlDOS43Nzg0IDE2Ljg5NjUgOS44MDU5MiAxNy4yOTQ3IDkuODYwNDEgMTcuNjg4OEw4LjI3MTMxIDE4LjYwNjNDOC4wMjMzMSAxOC43NDkzIDcuODQyNzIgMTguOTg0OSA3Ljc2ODU3IDE5LjI2MTNaTTE4LjQwNjQgMTMuMjYyNEMyMC4xOTMyIDEzLjI2MjQgMjEuNjQxOCAxNC43MTExIDIxLjY0MTggMTYuNDk3OUMyMS42NDE4IDE4LjI4NDcgMjAu'+
			'MTkzMiAxOS43MzM0IDE4LjQwNjQgMTkuNzMzNEMxNi42MTkzIDE5LjczMzQgMTUuMTcwOSAxOC4yODQ3IDE1LjE3MDkgMTYuNDk3OUMxNS4xNzA5IDE0LjcxMTEgMTYuNjE5NSAxMy4yNjI0IDE4LjQwNjQgMTMuMjYyNFoiLz4KPC9zdmc+Cg==';
		me._svg_15__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 15";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 33px;';
		hs+='left : 160px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((33px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 37px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_15.ggIsActive=function() {
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
		me._svg_15.onclick=function (e) {
			player.moveToDefaultViewEx(20,0);
		}
		me._svg_15.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_1.appendChild(me._svg_15);
		el=me._svg_12_1=document.createElement('div');
		els=me._svg_12_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjMzIiB2aWV3Qm94PSIwIDAgMiAzMyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMiI+CiA8cmVjdCBmaWxsPSJ3aGl0ZSIgaGVpZ2h0PSIzMyIgcng9IjEiIHdpZHRoPSIyIi8+Cjwvc3ZnPgo=';
		me._svg_12_1__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 12_1";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 33px;';
		hs+='left : 200px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((33px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_12_1.ggIsActive=function() {
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
		me._svg_12_1.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_1.appendChild(me._svg_12_1);
		me._navbar.appendChild(me._rectangle_1);
		el=me._products_list=document.createElement('div');
		el.ggId="products_list";
		el.ggDx=6;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle products_list_pop_up";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #565a56;';
		hs+='cursor : default;';
		hs+='height : 70%;';
		hs+='left : calc(50% - ((50% + 2px) / 2) + 6px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((70% + 2px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		hs+='border-radius: 15px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._products_list.ggIsActive=function() {
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
		me._products_list.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_100=document.createElement('div');
		els=me._svg_100__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjE1NyIgdmlld0JveD0iMCAwIDE1NyAxNTciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjE1NyI+CiA8cGF0aCBmaWxsPSIjNkY2RjZGIiBkPSJNMi44NDkyMiAyLjg0OTI1QzUuODQ4NTIgLTAuMTQ5NTM3IDEwLjcxMTUgLTAuMTQ5NTM3IDEzLjcxMDggMi44NDkyNUw3OC42OCA2Ny44MTlMMTQzLjY0OSAyLjg0OTI1QzE0Ni42NDkgLTAuMTQ5NTM3IDE1MS41MTEgLTAuMTQ5NTM3IDE1NC41MTEgMi44NDkyNUMxNTcuNTEgNS44NDg1NCAxNTcuNTEgMTAuNzExNSAxNTQuNTExIDEzLjcxMDhMODkuNTQxMSA3OC42OEwxNT'+
			'QuNTExIDE0My42NDlDMTU3LjUxIDE0Ni42NDkgMTU3LjUxIDE1MS41MTIgMTU0LjUxMSAxNTQuNTExQzE1MS41MTEgMTU3LjUxIDE0Ni42NDkgMTU3LjUxIDE0My42NDkgMTU0LjUxMUw3OC42OCA4OS41NDExTDEzLjcxMDggMTU0LjUxMUMxMC43MTE1IDE1Ny41MSA1Ljg0ODUyIDE1Ny41MSAyLjg0OTIyIDE1NC41MTFDLTAuMTQ5NTYgMTUxLjUxMiAtMC4xNDk1NiAxNDYuNjQ5IDIuODQ5MjIgMTQzLjY0OUw2Ny44MTg5IDc4LjY4TDIuODQ5MjIgMTMuNzEwOEMtMC4xNDk1NiAxMC43MTE1IC0wLjE0OTU2IDUuODQ4NTQgMi44NDkyMiAyLjg0OTI1WiIvPgo8L3N2Zz4K';
		me._svg_100__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 10";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 15px;';
		hs+='position : absolute;';
		hs+='right : 10px;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 15px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_100.ggIsActive=function() {
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
		me._svg_100.onclick=function (e) {
			me._products_list.style.transition='none';
			me._products_list.style.visibility='hidden';
			me._products_list.ggVisible=false;
		}
		me._svg_100.ggUpdatePosition=function (useTransition) {
		}
		me._products_list.appendChild(me._svg_100);
		el=me._text_5=document.createElement('div');
		els=me._text_5__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
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
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_5.ggUpdateText=function() {
			var params = [];
			var hs = player._("Products", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_5.ggUpdateText();
		el.appendChild(els);
		me._text_5.ggIsActive=function() {
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
		me._text_5.ggUpdatePosition=function (useTransition) {
		}
		me._products_list.appendChild(me._text_5);
		el=me._scrollarea_1=document.createElement('div');
		els=me._scrollarea_1__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggContentWidth = 0;
		el.ggContentHeight = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		el.ggIsDragging = false;
		hs ='';
		hs+='height : 951px;';
		hs+='left : 0px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 936px;';
		hs+="";
		els.setAttribute('style',hs);
		me._scrollarea_1.ggScrollByX = function(diffX) {
			if(!me._scrollarea_1.ggHorScrollVisible || diffX == 0 || me._scrollarea_1.ggHPercentVisible >= 1.0) return;
			me._scrollarea_1.ggScrollPosX = (me._scrollarea_1__horScrollFg.offsetLeft + diffX);
			me._scrollarea_1.ggScrollPosX = Math.max(me._scrollarea_1.ggScrollPosX, 0);
			me._scrollarea_1.ggScrollPosX = Math.min(me._scrollarea_1.ggScrollPosX, me._scrollarea_1__horScrollBg.offsetWidth - me._scrollarea_1__horScrollFg.offsetWidth);
			me._scrollarea_1__horScrollFg.style.left = me._scrollarea_1.ggScrollPosX + 'px';
			let percentScrolled = me._scrollarea_1.ggScrollPosX / (me._scrollarea_1__horScrollBg.offsetWidth - me._scrollarea_1__horScrollFg.offsetWidth);
			me._scrollarea_1__content.style.left = -(Math.round((me._scrollarea_1.ggContentWidth * (1.0 - me._scrollarea_1.ggHPercentVisible)) * percentScrolled)) + me._scrollarea_1.ggContentLeftOffset + 'px';
			me._scrollarea_1.ggScrollPosXPercent = (me._scrollarea_1__horScrollFg.offsetLeft / me._scrollarea_1__horScrollBg.offsetWidth);
		}
		me._scrollarea_1.ggScrollByXSmooth = function(diffX) {
			if(!me._scrollarea_1.ggHorScrollVisible || diffX == 0 || me._scrollarea_1.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._scrollarea_1.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._scrollarea_1.ggScrollPosX >= me._scrollarea_1__horScrollBg.offsetWidth - me._scrollarea_1__horScrollFg.offsetWidth)) {
					me._scrollarea_1.ggScrollPosX = Math.min(me._scrollarea_1.ggScrollPosX, me._scrollarea_1__horScrollBg.offsetWidth - me._scrollarea_1__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._scrollarea_1.ggScrollPosX <= 0)) {
					me._scrollarea_1.ggScrollPosX = Math.max(me._scrollarea_1.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._scrollarea_1__horScrollFg.style.left = me._scrollarea_1.ggScrollPosX + 'px';
			let percentScrolled = me._scrollarea_1.ggScrollPosX / (me._scrollarea_1__horScrollBg.offsetWidth - me._scrollarea_1__horScrollFg.offsetWidth);
			me._scrollarea_1__content.style.left = -(Math.round((me._scrollarea_1.ggContentWidth * (1.0 - me._scrollarea_1.ggHPercentVisible)) * percentScrolled)) + me._scrollarea_1.ggContentLeftOffset + 'px';
			me._scrollarea_1.ggScrollPosXPercent = (me._scrollarea_1__horScrollFg.offsetLeft / me._scrollarea_1__horScrollBg.offsetWidth);
			}, 10);
		}
		me._scrollarea_1.ggScrollByY = function(diffY) {
			if(!me._scrollarea_1.ggVertScrollVisible || diffY == 0 || me._scrollarea_1.ggVPercentVisible >= 1.0) return;
			me._scrollarea_1.ggScrollPosY = (me._scrollarea_1__vertScrollFg.offsetTop + diffY);
			me._scrollarea_1.ggScrollPosY = Math.max(me._scrollarea_1.ggScrollPosY, 0);
			me._scrollarea_1.ggScrollPosY = Math.min(me._scrollarea_1.ggScrollPosY, me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight);
			me._scrollarea_1__vertScrollFg.style.top = me._scrollarea_1.ggScrollPosY + 'px';
			let percentScrolled = me._scrollarea_1.ggScrollPosY / (me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight);
			me._scrollarea_1__content.style.top = -(Math.round((me._scrollarea_1.ggContentHeight * (1.0 - me._scrollarea_1.ggVPercentVisible)) * percentScrolled)) + me._scrollarea_1.ggContentTopOffset + 'px';
			me._scrollarea_1.ggScrollPosYPercent = (me._scrollarea_1__vertScrollFg.offsetTop / me._scrollarea_1__vertScrollBg.offsetHeight);
		}
		me._scrollarea_1.ggScrollByYSmooth = function(diffY) {
			if(!me._scrollarea_1.ggVertScrollVisible || diffY == 0 || me._scrollarea_1.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._scrollarea_1.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._scrollarea_1.ggScrollPosY >= me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight)) {
					me._scrollarea_1.ggScrollPosY = Math.min(me._scrollarea_1.ggScrollPosY, me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._scrollarea_1.ggScrollPosY <= 0)) {
					me._scrollarea_1.ggScrollPosY = Math.max(me._scrollarea_1.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._scrollarea_1__vertScrollFg.style.top = me._scrollarea_1.ggScrollPosY + 'px';
			let percentScrolled = me._scrollarea_1.ggScrollPosY / (me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight);
			me._scrollarea_1__content.style.top = -(Math.round((me._scrollarea_1.ggContentHeight * (1.0 - me._scrollarea_1.ggVPercentVisible)) * percentScrolled)) + me._scrollarea_1.ggContentTopOffset + 'px';
			me._scrollarea_1.ggScrollPosYPercent = (me._scrollarea_1__vertScrollFg.offsetTop / me._scrollarea_1__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._scrollarea_1.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._scrollarea_1.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._scrollarea_1.ggHPercentVisible);
					me._scrollarea_1.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._scrollarea_1.clientWidth - (me._scrollarea_1.ggVertScrollVisible ? 15 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._scrollarea_1.clientWidth - (me._scrollarea_1.ggVertScrollVisible ? 15 : 0))) * me._scrollarea_1.ggHPercentVisible);
					me._scrollarea_1.ggScrollByXSmooth(diffX);
				}
			}
			if (me._scrollarea_1.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._scrollarea_1.ggVPercentVisible);
					me._scrollarea_1.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._scrollarea_1.clientHeight - (me._scrollarea_1.ggHorScrollVisible ? 15 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._scrollarea_1.clientHeight - (me._scrollarea_1.ggHorScrollVisible ? 15 : 0))) * me._scrollarea_1.ggVPercentVisible);
					me._scrollarea_1.ggScrollByYSmooth(diffY);
				}
			}
		}
		me._scrollarea_1__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me._scrollarea_1.ggDragInertiaX *= 0.65;
				me._scrollarea_1.ggDragInertiaY *= 0.65;
				me._scrollarea_1.ggScrollByX(me._scrollarea_1.ggDragInertiaX);
				me._scrollarea_1.ggScrollByY(me._scrollarea_1.ggDragInertiaY);
				if (Math.abs(me._scrollarea_1.ggDragInertiaX) < 1.0 && Math.abs(me._scrollarea_1.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 50);
			me._scrollarea_1__content.onmouseup = null;
			me._scrollarea_1__content.onmousemove = null;
			me._scrollarea_1__content.ontouchend = null;
			me._scrollarea_1__content.ontouchmove = null;
			me._scrollarea_1__content.onpointerup = null;
			me._scrollarea_1__content.onpointermove = null;
			setTimeout(function() { me._scrollarea_1.ggIsDragging = false; }, 100);
		}
		me._scrollarea_1__content.mousetouchmove = e => {
			e = e || window.event;
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me._scrollarea_1.ggDragStartX) > 10 || Math.abs(eventY - me._scrollarea_1.ggDragStartY) > 10) me._scrollarea_1.ggIsDragging = true;
			var diffX = (eventX - me._scrollarea_1.ggDragLastX) * me._scrollarea_1.ggHPercentVisible;
			var diffY = (eventY - me._scrollarea_1.ggDragLastY) * me._scrollarea_1.ggVPercentVisible;
			me._scrollarea_1.ggDragInertiaX = -diffX;
			me._scrollarea_1.ggDragInertiaY = -diffY;
			me._scrollarea_1.ggDragLastX = eventX;
			me._scrollarea_1.ggDragLastY = eventY;
			me._scrollarea_1.ggScrollByX(-diffX);
			me._scrollarea_1.ggScrollByY(-diffY);
		}
		me._scrollarea_1__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me._scrollarea_1.ggDragLastX = me._scrollarea_1.ggDragStartX = t ? t[0].clientX : e.clientX;
			me._scrollarea_1.ggDragLastY = me._scrollarea_1.ggDragStartY = t ? t[0].clientY : e.clientY;
			me._scrollarea_1__content.onmouseup = me._scrollarea_1__content.mousetouchend;
			me._scrollarea_1__content.ontouchend = me._scrollarea_1__content.mousetouchend;
			me._scrollarea_1__content.onmousemove = me._scrollarea_1__content.mousetouchmove;
			me._scrollarea_1__content.ontouchmove = me._scrollarea_1__content.mousetouchmove;
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._scrollarea_1__content.onpointerup = me._scrollarea_1__content.ontouchend;
				me._scrollarea_1__content.onpointermove = me._scrollarea_1__content.ontouchmove;
			}
		}
		els.onmousedown = me._scrollarea_1__content.mousetouchstart;
		els.ontouchstart = me._scrollarea_1__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me._scrollarea_1__content.mousetouchstart;
		}
		elVertScrollBg = me._scrollarea_1__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 15px; height: 718.2px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._scrollarea_1__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 15px; height: 718.2px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me._scrollarea_1.ggScrollPosY = 0;
		me._scrollarea_1.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._scrollarea_1.ggDragLastY = e.clientY;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._scrollarea_1.ggDragInertiaY *= 0.65;
					me._scrollarea_1.ggScrollByY(me._scrollarea_1.ggDragInertiaY);
					if (Math.abs(me._scrollarea_1.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me._scrollarea_1.ggDragLastY;
				me._scrollarea_1.ggDragInertiaY = diffY;
				me._scrollarea_1.ggDragLastY = e.clientY;
				me._scrollarea_1.ggScrollByY(diffY);
			}
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._scrollarea_1.ggDragLastY = t ? t[0].clientY : e.clientY;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._scrollarea_1.ggDragInertiaY *= 0.65;
					me._scrollarea_1.ggScrollByY(me._scrollarea_1.ggDragInertiaY);
					if (Math.abs(me._scrollarea_1.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffY = (t ? t[0].clientY : e.clientY) - me._scrollarea_1.ggDragLastY;
				me._scrollarea_1.ggDragInertiaY = diffY;
				me._scrollarea_1.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._scrollarea_1.ggScrollByY(diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elVertScrollFg.onpointerdown = elVertScrollFg.ontouchstart;
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me._scrollarea_1.ggScrollHeight;
			if (e.offsetY < me._scrollarea_1.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._scrollarea_1.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._scrollarea_1__vertScrollBg.getBoundingClientRect();
			var diffY = me._scrollarea_1.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me._scrollarea_1.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._scrollarea_1.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaY);
			me._scrollarea_1.ggScrollByYSmooth(30 * me._scrollarea_1.ggVPercentVisible * wheelDelta);
		});
		elCornerBg = me._scrollarea_1__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 15px; height: 15px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="Scrollarea 1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea product_list_scroll";
		el.ggType='scrollarea';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='height : 95%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='border-radius: 0 0 15px 15px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._scrollarea_1.ggIsActive=function() {
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
		me._scrollarea_1.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none' && (e.offsetWidth != 0 || e.offsetHeight != 0)) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none' && e.style['overflow']!='hidden') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var contentWidth = maxX - minX;
				this.ggContent.style.width = contentWidth + 'px';
				var contentHeight = maxY - minY;
				this.ggContent.style.height = contentHeight + 'px';
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = -(Math.round(me._scrollarea_1.ggScrollPosY / me._scrollarea_1.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				me._scrollarea_1__vertScrollBg.style.visibility = 'inherit';
				me._scrollarea_1__vertScrollFg.style.visibility = 'inherit';
				me._scrollarea_1.ggVertScrollVisible = true;
				if(me._scrollarea_1.ggVertScrollVisible) {
					me._scrollarea_1.ggAvailableWidth = me._scrollarea_1.clientWidth - 15;
					if (me._scrollarea_1.ggHorScrollVisible) {
						me._scrollarea_1.ggAvailableHeight = me._scrollarea_1.clientHeight - 15;
						me._scrollarea_1.ggAvailableHeightWithScale = me._scrollarea_1.getBoundingClientRect().height - me._scrollarea_1__vertScrollBg.getBoundingClientRect().width;
						me._scrollarea_1__cornerBg.style.visibility = 'inherit';
					} else {
						me._scrollarea_1.ggAvailableHeight = me._scrollarea_1.clientHeight;
						me._scrollarea_1.ggAvailableHeightWithScale = me._scrollarea_1.getBoundingClientRect().height;
						me._scrollarea_1__cornerBg.style.visibility = 'hidden';
					}
					me._scrollarea_1__vertScrollBg.style.height = me._scrollarea_1.ggAvailableHeight + 'px';
					me._scrollarea_1.ggVPercentVisible = contentHeight != 0 ? me._scrollarea_1.ggAvailableHeightWithScale / contentHeight : 0.0;
					if (me._scrollarea_1.ggVPercentVisible > 1.0) me._scrollarea_1.ggVPercentVisible = 1.0;
					me._scrollarea_1.ggScrollHeight =  Math.round(me._scrollarea_1__vertScrollBg.offsetHeight * me._scrollarea_1.ggVPercentVisible);
					me._scrollarea_1__vertScrollFg.style.height = me._scrollarea_1.ggScrollHeight + 'px';
					me._scrollarea_1.ggScrollPosY = me._scrollarea_1.ggScrollPosYPercent * me._scrollarea_1.ggAvailableHeight;
					me._scrollarea_1.ggScrollPosY = Math.min(me._scrollarea_1.ggScrollPosY, me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight);
					me._scrollarea_1__vertScrollFg.style.top = me._scrollarea_1.ggScrollPosY + 'px';
					if (me._scrollarea_1.ggVPercentVisible < 1.0) {
						let percentScrolled = me._scrollarea_1.ggScrollPosY / (me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight);
						me._scrollarea_1__content.style.top = -(Math.round((me._scrollarea_1.ggContentHeight * (1.0 - me._scrollarea_1.ggVPercentVisible)) * percentScrolled)) + me._scrollarea_1.ggContentTopOffset + 'px';
					}
				} else {
					me._scrollarea_1.ggAvailableWidth = me._scrollarea_1.clientWidth;
					me._scrollarea_1.ggScrollPosY = 0;
					me._scrollarea_1.ggScrollPosYPercent = 0.0;
					me._scrollarea_1__content.style.top = this.ggContentTopOffset + 'px';
					me._scrollarea_1__cornerBg.style.visibility = 'hidden';
				}
				if(horScrollWasVisible != me._scrollarea_1.ggHorScrollVisible || vertScrollWasVisible != me._scrollarea_1.ggVertScrollVisible) {
					skin.updateSize(me._scrollarea_1);
					me._scrollarea_1.ggUpdatePosition();
				}
			}
		}
		el=me._product_list_h12w051=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._product_list_h12w051;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="product_list_h12w05";
		el.ggDx=356;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle product_list";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #eeeeee;';
		hs+='border-radius : 5px;';
		hs+='cursor : default;';
		hs+='height : 300px;';
		hs+='left : calc(50% - ((200px + 2px) / 2) + 356px);';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 200px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 0%';
		me._product_list_h12w051.ggIsActive=function() {
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
		me._product_list_h12w051.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_141=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._image_141;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._image_141__img=document.createElement('img');
		els.className='ggskin ggskin_image_141';
		hs=basePath + 'images/image_141.png';
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
		el.ggId="Image 14";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 180px;';
		hs+='left : calc(50% - ((180px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 180px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_141.ggIsActive=function() {
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
		me._image_141.ggUpdatePosition=function (useTransition) {
		}
		me._product_list_h12w051.appendChild(me._image_141);
		el=me._text_6_41=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._text_6_41;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._text_6_41__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 6_4";
		el.ggDy=59;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(102,102,102,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 59px);';
		hs+='visibility : inherit;';
		hs+='width : 95%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+="text-overflow: ellipsis;";
		els.setAttribute('style',hs);
		me._text_6_41.ggUpdateText=function() {
			var params = [];
			var hs = player._("Factory price, allowing you to have sufficient profits", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_6_41.ggUpdateText();
		el.appendChild(els);
		me._text_6_41.ggIsActive=function() {
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
		me._text_6_41.ggUpdatePosition=function (useTransition) {
		}
		me._product_list_h12w051.appendChild(me._text_6_41);
		el=me._text_6_1_41=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._text_6_1_41;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._text_6_1_41__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 6_1_4";
		el.ggDy=82;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(0,0,0,1);';
		hs+='cursor : default;';
		hs+='height : 21px;';
		hs+='left : 7px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((21px + 0px) / 2) + 82px);';
		hs+='visibility : inherit;';
		hs+='width : 95%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='bottom: 0px;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+="text-overflow: ellipsis;";
		els.setAttribute('style',hs);
		me._text_6_1_41.ggUpdateText=function() {
			var params = [];
			var hs = player._("<div class=\"ggmarkdown\"><p><strong>$7-$12<\/strong> \/pieces<\/p>\n<div>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_6_1_41.ggUpdateText();
		el.appendChild(els);
		me._text_6_1_41.ggIsActive=function() {
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
		me._text_6_1_41.ggUpdatePosition=function (useTransition) {
		}
		me._product_list_h12w051.appendChild(me._text_6_1_41);
		el=me._text_6_1_1_1_31=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._text_6_1_1_1_31;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._text_6_1_1_1_31__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 6_1_1_1_3";
		el.ggDy=105;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(0,0,0,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 7px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 105px);';
		hs+='visibility : inherit;';
		hs+='width : 40%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='bottom: 0px;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+="text-overflow: ellipsis;";
		els.setAttribute('style',hs);
		me._text_6_1_1_1_31.ggUpdateText=function() {
			var params = [];
			var hs = player._("<div class=\"ggmarkdown\"><p>70 pieces<\/p>\n<div>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_6_1_1_1_31.ggUpdateText();
		el.appendChild(els);
		me._text_6_1_1_1_31.ggIsActive=function() {
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
		me._text_6_1_1_1_31.ggUpdatePosition=function (useTransition) {
		}
		me._product_list_h12w051.appendChild(me._text_6_1_1_1_31);
		el=me._text_6_1_1_41=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._text_6_1_1_41;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._text_6_1_1_41__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 6_1_1_4";
		el.ggDy=105;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(168,168,168,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 85px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 105px);';
		hs+='visibility : inherit;';
		hs+='width : 35%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='bottom: 0px;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+="text-overflow: ellipsis;";
		els.setAttribute('style',hs);
		me._text_6_1_1_41.ggUpdateText=function() {
			var params = [];
			var hs = player._("<div class=\"ggmarkdown\"><p>(MOQ)<\/p>\n<div>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_6_1_1_41.ggUpdateText();
		el.appendChild(els);
		me._text_6_1_1_41.ggIsActive=function() {
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
		me._text_6_1_1_41.ggUpdatePosition=function (useTransition) {
		}
		me._product_list_h12w051.appendChild(me._text_6_1_1_41);
		el=me._rectangle_4_31=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._rectangle_4_31;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="Rectangle 4_3";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 5px;';
		hs+='cursor : default;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((95% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 95%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_4_31.ggIsActive=function() {
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
		me._rectangle_4_31.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_1111=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._svg_1111;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._svg_1111__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjMwIiB2aWV3Qm94PSIwIDAgMTEwIDMwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMTAiPgogPHJlY3QgZmlsbD0iIzE5Mjg0NSIgaGVpZ2h0PSIzMCIgcng9IjE1IiB3aWR0aD0iMTEwIi8+CiA8cGF0aCBmaWxsPSJ3aGl0ZSIgZD0iTTIyLjAxMTQgMjFWOS4zNjM2NEgyNi42NzA1QzI3LjUyNjUgOS4zNjM2NCAyOC4yNDA1IDkuNDkwNTMgMjguODEyNSA5Ljc0NDMyQzI5LjM4NDUgOS45OTgxMSAyOS44MTQ0IDEwLjM1MDQgMzAuMTAyMyAxMC44MDExQzMwLjM5MDIgMTEuMjQ4MSAzMC41MzQxIDExLjc2MzMgMzAuNT'+
			'M0MSAxMi4zNDY2QzMwLjUzNDEgMTIuODAxMSAzMC40NDMyIDEzLjIwMDggMzAuMjYxNCAxMy41NDU1QzMwLjA3OTUgMTMuODg2NCAyOS44Mjk1IDE0LjE2NjcgMjkuNTExNCAxNC4zODY0QzI5LjE5NyAxNC42MDIzIDI4LjgzNzEgMTQuNzU1NyAyOC40MzE4IDE0Ljg0NjZWMTQuOTYwMkMyOC44NzUgMTQuOTc5MiAyOS4yODk4IDE1LjEwNDIgMjkuNjc2MSAxNS4zMzUyQzMwLjA2NjMgMTUuNTY2MyAzMC4zODI2IDE1Ljg5MDIgMzAuNjI1IDE2LjMwNjhDMzAuODY3NCAxNi43MTk3IDMwLjk4ODYgMTcuMjEyMSAzMC45ODg2IDE3Ljc4NDFDMzAuOTg4NiAxOC40MDE1IDMwLjgzNTIgMTguOTUyNyAz'+
			'MC41Mjg0IDE5LjQzNzVDMzAuMjI1NCAxOS45MTg2IDI5Ljc3NjUgMjAuMjk5MiAyOS4xODE4IDIwLjU3OTVDMjguNTg3MSAyMC44NTk4IDI3Ljg1NDIgMjEgMjYuOTgzIDIxSDIyLjAxMTRaTTI0LjQ3MTYgMTguOTg4NkgyNi40NzczQzI3LjE2MjkgMTguOTg4NiAyNy42NjI5IDE4Ljg1OCAyNy45NzczIDE4LjU5NjZDMjguMjkxNyAxOC4zMzE0IDI4LjQ0ODkgMTcuOTc5MiAyOC40NDg5IDE3LjUzOThDMjguNDQ4OSAxNy4yMTc4IDI4LjM3MTIgMTYuOTMzNyAyOC4yMTU5IDE2LjY4NzVDMjguMDYwNiAxNi40NDEzIDI3LjgzOSAxNi4yNDgxIDI3LjU1MTEgMTYuMTA4QzI3LjI2NyAxNS45Njc4ID'+
			'I2LjkyOCAxNS44OTc3IDI2LjUzNDEgMTUuODk3N0gyNC40NzE2VjE4Ljk4ODZaTTI0LjQ3MTYgMTQuMjMzSDI2LjI5NTVDMjYuNjMyNiAxNC4yMzMgMjYuOTMxOCAxNC4xNzQyIDI3LjE5MzIgMTQuMDU2OEMyNy40NTgzIDEzLjkzNTYgMjcuNjY2NyAxMy43NjUyIDI3LjgxODIgMTMuNTQ1NUMyNy45NzM1IDEzLjMyNTggMjguMDUxMSAxMy4wNjI1IDI4LjA1MTEgMTIuNzU1N0MyOC4wNTExIDEyLjMzNTIgMjcuOTAxNSAxMS45OTYyIDI3LjYwMjMgMTEuNzM4NkMyNy4zMDY4IDExLjQ4MTEgMjYuODg2NCAxMS4zNTIzIDI2LjM0MDkgMTEuMzUyM0gyNC40NzE2VjE0LjIzM1pNMzguMTQwNiAxNy4y'+
			'ODQxVjEyLjI3MjdINDAuNTYxMVYyMUgzOC4yMzcyVjE5LjQxNDhIMzguMTQ2M0MzNy45NDkzIDE5LjkyNjEgMzcuNjIxNyAyMC4zMzcxIDM3LjE2MzQgMjAuNjQ3N0MzNi43MDg4IDIwLjk1ODMgMzYuMTUzOSAyMS4xMTM2IDM1LjQ5ODYgMjEuMTEzNkMzNC45MTUyIDIxLjExMzYgMzQuNDAyIDIwLjk4MTEgMzMuOTU4OCAyMC43MTU5QzMzLjUxNTYgMjAuNDUwOCAzMy4xNjkgMjAuMDczOSAzMi45MTkgMTkuNTg1MkMzMi42NzI4IDE5LjA5NjYgMzIuNTQ3OCAxOC41MTE0IDMyLjU0NCAxNy44Mjk1VjEyLjI3MjdIMzQuOTY0NVYxNy4zOTc3QzM0Ljk2ODMgMTcuOTEyOSAzNS4xMDY1IDE4LjMyMD'+
			'EgMzUuMzc5MyAxOC42MTkzQzM1LjY1MiAxOC45MTg2IDM2LjAxNzUgMTkuMDY4MiAzNi40NzU5IDE5LjA2ODJDMzYuNzY3NSAxOS4wNjgyIDM3LjA0MDIgMTkuMDAxOSAzNy4yOTQgMTguODY5M0MzNy41NDc4IDE4LjczMyAzNy43NTI0IDE4LjUzMjIgMzcuOTA3NyAxOC4yNjdDMzguMDY2OCAxOC4wMDE5IDM4LjE0NDQgMTcuNjc0MiAzOC4xNDA2IDE3LjI4NDFaTTQzLjk5MTUgMjQuMjcyN0M0My42ODQ3IDI0LjI3MjcgNDMuMzk2OCAyNC4yNDgxIDQzLjEyNzggMjQuMTk4OUM0Mi44NjI3IDI0LjE1MzQgNDIuNjQzIDI0LjA5NDcgNDIuNDY4OCAyNC4wMjI3TDQzLjAxNDIgMjIuMjE1OUM0My4y'+
			'OTgzIDIyLjMwMyA0My41NTQgMjIuMzUwNCA0My43ODEyIDIyLjM1OEM0NC4wMTIzIDIyLjM2NTUgNDQuMjExMiAyMi4zMTI1IDQ0LjM3NzggMjIuMTk4OUM0NC41NDgzIDIyLjA4NTIgNDQuNjg2NiAyMS44OTIgNDQuNzkyNiAyMS42MTkzTDQ0LjkzNDcgMjEuMjVMNDEuODA0IDEyLjI3MjdINDQuMzQ5NEw0Ni4xNTYyIDE4LjY4MThINDYuMjQ3Mkw0OC4wNzEgMTIuMjcyN0g1MC42MzM1TDQ3LjI0MTUgMjEuOTQzMkM0Ny4wNzg2IDIyLjQxMjkgNDYuODU3IDIyLjgyMiA0Ni41NzY3IDIzLjE3MDVDNDYuMzAwMiAyMy41MjI3IDQ1Ljk0OTggMjMuNzkzNiA0NS41MjU2IDIzLjk4M0M0NS4xMDEzID'+
			'I0LjE3NjEgNDQuNTkgMjQuMjcyNyA0My45OTE1IDI0LjI3MjdaTTY1LjM1MzcgOS4zNjM2NFYyMUg2My4yMjg3TDU4LjE2NjIgMTMuNjc2MUg1OC4wODFWMjFINTUuNjIwN1Y5LjM2MzY0SDU3Ljc3OThMNjIuODAyNiAxNi42ODE4SDYyLjkwNDhWOS4zNjM2NEg2NS4zNTM3Wk03MS4yODQxIDIxLjE3MDVDNzAuNDAxNSAyMS4xNzA1IDY5LjYzODMgMjAuOTgzIDY4Ljk5NDMgMjAuNjA4QzY4LjM1NDIgMjAuMjI5MiA2Ny44NTk4IDE5LjcwMjcgNjcuNTExNCAxOS4wMjg0QzY3LjE2MjkgMTguMzUwNCA2Ni45ODg2IDE3LjU2NDQgNjYuOTg4NiAxNi42NzA1QzY2Ljk4ODYgMTUuNzY4OSA2Ny4xNjI5'+
			'IDE0Ljk4MTEgNjcuNTExNCAxNC4zMDY4QzY3Ljg1OTggMTMuNjI4OCA2OC4zNTQyIDEzLjEwMjMgNjguOTk0MyAxMi43MjczQzY5LjYzODMgMTIuMzQ4NSA3MC40MDE1IDEyLjE1OTEgNzEuMjg0MSAxMi4xNTkxQzcyLjE2NjcgMTIuMTU5MSA3Mi45MjggMTIuMzQ4NSA3My41NjgyIDEyLjcyNzNDNzQuMjEyMSAxMy4xMDIzIDc0LjcwODMgMTMuNjI4OCA3NS4wNTY4IDE0LjMwNjhDNzUuNDA1MyAxNC45ODExIDc1LjU3OTUgMTUuNzY4OSA3NS41Nzk1IDE2LjY3MDVDNzUuNTc5NSAxNy41NjQ0IDc1LjQwNTMgMTguMzUwNCA3NS4wNTY4IDE5LjAyODRDNzQuNzA4MyAxOS43MDI3IDc0LjIxMjEgMj'+
			'AuMjI5MiA3My41NjgyIDIwLjYwOEM3Mi45MjggMjAuOTgzIDcyLjE2NjcgMjEuMTcwNSA3MS4yODQxIDIxLjE3MDVaTTcxLjI5NTUgMTkuMjk1NUM3MS42OTcgMTkuMjk1NSA3Mi4wMzIyIDE5LjE4MTggNzIuMzAxMSAxOC45NTQ1QzcyLjU3MDEgMTguNzIzNSA3Mi43NzI3IDE4LjQwOTEgNzIuOTA5MSAxOC4wMTE0QzczLjA0OTIgMTcuNjEzNiA3My4xMTkzIDE3LjE2MSA3My4xMTkzIDE2LjY1MzRDNzMuMTE5MyAxNi4xNDU4IDczLjA0OTIgMTUuNjkzMiA3Mi45MDkxIDE1LjI5NTVDNzIuNzcyNyAxNC44OTc3IDcyLjU3MDEgMTQuNTgzMyA3Mi4zMDExIDE0LjM1MjNDNzIuMDMyMiAxNC4xMjEy'+
			'IDcxLjY5NyAxNC4wMDU3IDcxLjI5NTUgMTQuMDA1N0M3MC44OTAyIDE0LjAwNTcgNzAuNTQ5MiAxNC4xMjEyIDcwLjI3MjcgMTQuMzUyM0M3MCAxNC41ODMzIDY5Ljc5MzYgMTQuODk3NyA2OS42NTM0IDE1LjI5NTVDNjkuNTE3IDE1LjY5MzIgNjkuNDQ4OSAxNi4xNDU4IDY5LjQ0ODkgMTYuNjUzNEM2OS40NDg5IDE3LjE2MSA2OS41MTcgMTcuNjEzNiA2OS42NTM0IDE4LjAxMTRDNjkuNzkzNiAxOC40MDkxIDcwIDE4LjcyMzUgNzAuMjcyNyAxOC45NTQ1QzcwLjU0OTIgMTkuMTgxOCA3MC44OTAyIDE5LjI5NTUgNzEuMjk1NSAxOS4yOTU1Wk03OC42NTYyIDIxTDc2LjI4MTIgMTIuMjcyN0g3OC'+
			'43MzAxTDgwLjA4MjQgMTguMTM2NEg4MC4xNjE5TDgxLjU3MSAxMi4yNzI3SDgzLjk3NDRMODUuNDA2MiAxOC4xMDIzSDg1LjQ4MDFMODYuODA5NyAxMi4yNzI3SDg5LjI1MjhMODYuODgzNSAyMUg4NC4zMjFMODIuODIxIDE1LjUxMTRIODIuNzEzMUw4MS4yMTMxIDIxSDc4LjY1NjJaIi8+Cjwvc3ZnPgo=';
		me._svg_1111__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._svg_1111__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjMwIiB2aWV3Qm94PSIwIDAgMTEwIDMwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMTAiPgogPHJlY3QgZmlsbD0iI0QzMzQzNCIgaGVpZ2h0PSIzMCIgcng9IjE1IiB3aWR0aD0iMTEwIi8+CiA8cGF0aCBmaWxsPSJ3aGl0ZSIgZD0iTTIyLjAxMTQgMjFWOS4zNjM2NEgyNi42NzA1QzI3LjUyNjUgOS4zNjM2NCAyOC4yNDA1IDkuNDkwNTMgMjguODEyNSA5Ljc0NDMyQzI5LjM4NDUgOS45OTgxMSAyOS44MTQ0IDEwLjM1MDQgMzAuMTAyMyAxMC44MDExQzMwLjM5MDIgMTEuMjQ4MSAzMC41MzQxIDExLjc2MzMgMzAuNT'+
			'M0MSAxMi4zNDY2QzMwLjUzNDEgMTIuODAxMSAzMC40NDMyIDEzLjIwMDggMzAuMjYxNCAxMy41NDU1QzMwLjA3OTUgMTMuODg2NCAyOS44Mjk1IDE0LjE2NjcgMjkuNTExNCAxNC4zODY0QzI5LjE5NyAxNC42MDIzIDI4LjgzNzEgMTQuNzU1NyAyOC40MzE4IDE0Ljg0NjZWMTQuOTYwMkMyOC44NzUgMTQuOTc5MiAyOS4yODk4IDE1LjEwNDIgMjkuNjc2MSAxNS4zMzUyQzMwLjA2NjMgMTUuNTY2MyAzMC4zODI2IDE1Ljg5MDIgMzAuNjI1IDE2LjMwNjhDMzAuODY3NCAxNi43MTk3IDMwLjk4ODYgMTcuMjEyMSAzMC45ODg2IDE3Ljc4NDFDMzAuOTg4NiAxOC40MDE1IDMwLjgzNTIgMTguOTUyNyAz'+
			'MC41Mjg0IDE5LjQzNzVDMzAuMjI1NCAxOS45MTg2IDI5Ljc3NjUgMjAuMjk5MiAyOS4xODE4IDIwLjU3OTVDMjguNTg3MSAyMC44NTk4IDI3Ljg1NDIgMjEgMjYuOTgzIDIxSDIyLjAxMTRaTTI0LjQ3MTYgMTguOTg4NkgyNi40NzczQzI3LjE2MjkgMTguOTg4NiAyNy42NjI5IDE4Ljg1OCAyNy45NzczIDE4LjU5NjZDMjguMjkxNyAxOC4zMzE0IDI4LjQ0ODkgMTcuOTc5MiAyOC40NDg5IDE3LjUzOThDMjguNDQ4OSAxNy4yMTc4IDI4LjM3MTIgMTYuOTMzNyAyOC4yMTU5IDE2LjY4NzVDMjguMDYwNiAxNi40NDEzIDI3LjgzOSAxNi4yNDgxIDI3LjU1MTEgMTYuMTA4QzI3LjI2NyAxNS45Njc4ID'+
			'I2LjkyOCAxNS44OTc3IDI2LjUzNDEgMTUuODk3N0gyNC40NzE2VjE4Ljk4ODZaTTI0LjQ3MTYgMTQuMjMzSDI2LjI5NTVDMjYuNjMyNiAxNC4yMzMgMjYuOTMxOCAxNC4xNzQyIDI3LjE5MzIgMTQuMDU2OEMyNy40NTgzIDEzLjkzNTYgMjcuNjY2NyAxMy43NjUyIDI3LjgxODIgMTMuNTQ1NUMyNy45NzM1IDEzLjMyNTggMjguMDUxMSAxMy4wNjI1IDI4LjA1MTEgMTIuNzU1N0MyOC4wNTExIDEyLjMzNTIgMjcuOTAxNSAxMS45OTYyIDI3LjYwMjMgMTEuNzM4NkMyNy4zMDY4IDExLjQ4MTEgMjYuODg2NCAxMS4zNTIzIDI2LjM0MDkgMTEuMzUyM0gyNC40NzE2VjE0LjIzM1pNMzguMTQwNiAxNy4y'+
			'ODQxVjEyLjI3MjdINDAuNTYxMVYyMUgzOC4yMzcyVjE5LjQxNDhIMzguMTQ2M0MzNy45NDkzIDE5LjkyNjEgMzcuNjIxNyAyMC4zMzcxIDM3LjE2MzQgMjAuNjQ3N0MzNi43MDg4IDIwLjk1ODMgMzYuMTUzOSAyMS4xMTM2IDM1LjQ5ODYgMjEuMTEzNkMzNC45MTUyIDIxLjExMzYgMzQuNDAyIDIwLjk4MTEgMzMuOTU4OCAyMC43MTU5QzMzLjUxNTYgMjAuNDUwOCAzMy4xNjkgMjAuMDczOSAzMi45MTkgMTkuNTg1MkMzMi42NzI4IDE5LjA5NjYgMzIuNTQ3OCAxOC41MTE0IDMyLjU0NCAxNy44Mjk1VjEyLjI3MjdIMzQuOTY0NVYxNy4zOTc3QzM0Ljk2ODMgMTcuOTEyOSAzNS4xMDY1IDE4LjMyMD'+
			'EgMzUuMzc5MyAxOC42MTkzQzM1LjY1MiAxOC45MTg2IDM2LjAxNzUgMTkuMDY4MiAzNi40NzU5IDE5LjA2ODJDMzYuNzY3NSAxOS4wNjgyIDM3LjA0MDIgMTkuMDAxOSAzNy4yOTQgMTguODY5M0MzNy41NDc4IDE4LjczMyAzNy43NTI0IDE4LjUzMjIgMzcuOTA3NyAxOC4yNjdDMzguMDY2OCAxOC4wMDE5IDM4LjE0NDQgMTcuNjc0MiAzOC4xNDA2IDE3LjI4NDFaTTQzLjk5MTUgMjQuMjcyN0M0My42ODQ3IDI0LjI3MjcgNDMuMzk2OCAyNC4yNDgxIDQzLjEyNzggMjQuMTk4OUM0Mi44NjI3IDI0LjE1MzQgNDIuNjQzIDI0LjA5NDcgNDIuNDY4OCAyNC4wMjI3TDQzLjAxNDIgMjIuMjE1OUM0My4y'+
			'OTgzIDIyLjMwMyA0My41NTQgMjIuMzUwNCA0My43ODEyIDIyLjM1OEM0NC4wMTIzIDIyLjM2NTUgNDQuMjExMiAyMi4zMTI1IDQ0LjM3NzggMjIuMTk4OUM0NC41NDgzIDIyLjA4NTIgNDQuNjg2NiAyMS44OTIgNDQuNzkyNiAyMS42MTkzTDQ0LjkzNDcgMjEuMjVMNDEuODA0IDEyLjI3MjdINDQuMzQ5NEw0Ni4xNTYyIDE4LjY4MThINDYuMjQ3Mkw0OC4wNzEgMTIuMjcyN0g1MC42MzM1TDQ3LjI0MTUgMjEuOTQzMkM0Ny4wNzg2IDIyLjQxMjkgNDYuODU3IDIyLjgyMiA0Ni41NzY3IDIzLjE3MDVDNDYuMzAwMiAyMy41MjI3IDQ1Ljk0OTggMjMuNzkzNiA0NS41MjU2IDIzLjk4M0M0NS4xMDEzID'+
			'I0LjE3NjEgNDQuNTkgMjQuMjcyNyA0My45OTE1IDI0LjI3MjdaTTY1LjM1MzcgOS4zNjM2NFYyMUg2My4yMjg3TDU4LjE2NjIgMTMuNjc2MUg1OC4wODFWMjFINTUuNjIwN1Y5LjM2MzY0SDU3Ljc3OThMNjIuODAyNiAxNi42ODE4SDYyLjkwNDhWOS4zNjM2NEg2NS4zNTM3Wk03MS4yODQxIDIxLjE3MDVDNzAuNDAxNSAyMS4xNzA1IDY5LjYzODMgMjAuOTgzIDY4Ljk5NDMgMjAuNjA4QzY4LjM1NDIgMjAuMjI5MiA2Ny44NTk4IDE5LjcwMjcgNjcuNTExNCAxOS4wMjg0QzY3LjE2MjkgMTguMzUwNCA2Ni45ODg2IDE3LjU2NDQgNjYuOTg4NiAxNi42NzA1QzY2Ljk4ODYgMTUuNzY4OSA2Ny4xNjI5'+
			'IDE0Ljk4MTEgNjcuNTExNCAxNC4zMDY4QzY3Ljg1OTggMTMuNjI4OCA2OC4zNTQyIDEzLjEwMjMgNjguOTk0MyAxMi43MjczQzY5LjYzODMgMTIuMzQ4NSA3MC40MDE1IDEyLjE1OTEgNzEuMjg0MSAxMi4xNTkxQzcyLjE2NjcgMTIuMTU5MSA3Mi45MjggMTIuMzQ4NSA3My41NjgyIDEyLjcyNzNDNzQuMjEyMSAxMy4xMDIzIDc0LjcwODMgMTMuNjI4OCA3NS4wNTY4IDE0LjMwNjhDNzUuNDA1MyAxNC45ODExIDc1LjU3OTUgMTUuNzY4OSA3NS41Nzk1IDE2LjY3MDVDNzUuNTc5NSAxNy41NjQ0IDc1LjQwNTMgMTguMzUwNCA3NS4wNTY4IDE5LjAyODRDNzQuNzA4MyAxOS43MDI3IDc0LjIxMjEgMj'+
			'AuMjI5MiA3My41NjgyIDIwLjYwOEM3Mi45MjggMjAuOTgzIDcyLjE2NjcgMjEuMTcwNSA3MS4yODQxIDIxLjE3MDVaTTcxLjI5NTUgMTkuMjk1NUM3MS42OTcgMTkuMjk1NSA3Mi4wMzIyIDE5LjE4MTggNzIuMzAxMSAxOC45NTQ1QzcyLjU3MDEgMTguNzIzNSA3Mi43NzI3IDE4LjQwOTEgNzIuOTA5MSAxOC4wMTE0QzczLjA0OTIgMTcuNjEzNiA3My4xMTkzIDE3LjE2MSA3My4xMTkzIDE2LjY1MzRDNzMuMTE5MyAxNi4xNDU4IDczLjA0OTIgMTUuNjkzMiA3Mi45MDkxIDE1LjI5NTVDNzIuNzcyNyAxNC44OTc3IDcyLjU3MDEgMTQuNTgzMyA3Mi4zMDExIDE0LjM1MjNDNzIuMDMyMiAxNC4xMjEy'+
			'IDcxLjY5NyAxNC4wMDU3IDcxLjI5NTUgMTQuMDA1N0M3MC44OTAyIDE0LjAwNTcgNzAuNTQ5MiAxNC4xMjEyIDcwLjI3MjcgMTQuMzUyM0M3MCAxNC41ODMzIDY5Ljc5MzYgMTQuODk3NyA2OS42NTM0IDE1LjI5NTVDNjkuNTE3IDE1LjY5MzIgNjkuNDQ4OSAxNi4xNDU4IDY5LjQ0ODkgMTYuNjUzNEM2OS40NDg5IDE3LjE2MSA2OS41MTcgMTcuNjEzNiA2OS42NTM0IDE4LjAxMTRDNjkuNzkzNiAxOC40MDkxIDcwIDE4LjcyMzUgNzAuMjcyNyAxOC45NTQ1QzcwLjU0OTIgMTkuMTgxOCA3MC44OTAyIDE5LjI5NTUgNzEuMjk1NSAxOS4yOTU1Wk03OC42NTYyIDIxTDc2LjI4MTIgMTIuMjcyN0g3OC'+
			'43MzAxTDgwLjA4MjQgMTguMTM2NEg4MC4xNjE5TDgxLjU3MSAxMi4yNzI3SDgzLjk3NDRMODUuNDA2MiAxOC4xMDIzSDg1LjQ4MDFMODYuODA5NyAxMi4yNzI3SDg5LjI1MjhMODYuODgzNSAyMUg4NC4zMjFMODIuODIxIDE1LjUxMTRIODIuNzEzMUw4MS4yMTMxIDIxSDc4LjY1NjJaIi8+Cjwvc3ZnPgo=';
		me._svg_1111__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="Svg 11";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 23px;';
		hs+='position : absolute;';
		hs+='right : 5px;';
		hs+='top : calc(50% - ((23px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 90px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_1111.ggIsActive=function() {
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
		me._svg_1111.onclick=function (e) {
			if (me._svg_1111.isDragging()) return;
			player.openUrl("https:\/\/www.javiddo.com\/product\/yag-filtri-2105101200500","_blank");
			var list=me.findElements("products_list",true);
			while(list.length>0) {
				var e=list.pop();
				e.style.transition='none';
				e.style.visibility='hidden';
				e.ggVisible=false;
			}
		}
		me._svg_1111.onmouseover=function (e) {
			me._svg_1111__img.style.visibility='hidden';
			me._svg_1111__imgo.style.visibility='inherit';
			me.elementMouseOver['svg_1111']=true;
		}
		me._svg_1111.onmouseout=function (e) {
			me._svg_1111__img.style.visibility='inherit';
			me._svg_1111__imgo.style.visibility='hidden';
			me.elementMouseOver['svg_1111']=false;
		}
		me._svg_1111.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['svg_1111']) {
				me._svg_1111__img.style.visibility='hidden';
				me._svg_1111__imgo.style.visibility='inherit';
				me.elementMouseOver['svg_1111']=true;
			}
		}
		me._svg_1111.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_4_31.appendChild(me._svg_1111);
		el=me._svg_1311=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._svg_1311;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._svg_1311__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjMwIiB2aWV3Qm94PSIwIDAgMTEwIDMwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMTAiPgogPHJlY3QgZmlsbD0iI0Y2OTIxRSIgaGVpZ2h0PSIzMCIgcng9IjE1IiB3aWR0aD0iMTEwIi8+CiA8cGF0aCBmaWxsPSJ3aGl0ZSIgZD0iTTM4LjM5NDkgOS4zNjM2NEw0MS4yMDc0IDE4LjIwNDVINDEuMzE1M0w0NC4xMzM1IDkuMzYzNjRINDYuODYwOEw0Mi44NDk0IDIxSDM5LjY3OUwzNS42NjE5IDkuMzYzNjRIMzguMzk0OVpNNDguMjE1OSAyMVYxMi4yNzI3SDUwLjYzNjRWMjFINDguMjE1OVpNNDkuNDMxOCAxMS4xND'+
			'c3QzQ5LjA3MiAxMS4xNDc3IDQ4Ljc2MzMgMTEuMDI4NCA0OC41MDU3IDEwLjc4OThDNDguMjUxOSAxMC41NDczIDQ4LjEyNSAxMC4yNTc2IDQ4LjEyNSA5LjkyMDQ1QzQ4LjEyNSA5LjU4NzEyIDQ4LjI1MTkgOS4zMDExNCA0OC41MDU3IDkuMDYyNUM0OC43NjMzIDguODIwMDggNDkuMDcyIDguNjk4ODYgNDkuNDMxOCA4LjY5ODg2QzQ5Ljc5MTcgOC42OTg4NiA1MC4wOTg1IDguODIwMDggNTAuMzUyMyA5LjA2MjVDNTAuNjA5OCA5LjMwMTE0IDUwLjczODYgOS41ODcxMiA1MC43Mzg2IDkuOTIwNDVDNTAuNzM4NiAxMC4yNTc2IDUwLjYwOTggMTAuNTQ3MyA1MC4zNTIzIDEwLjc4OThDNTAuMDk4'+
			'NSAxMS4wMjg0IDQ5Ljc5MTcgMTEuMTQ3NyA0OS40MzE4IDExLjE0NzdaTTU2LjU1MjYgMjEuMTcwNUM1NS42NTQ4IDIxLjE3MDUgNTQuODgyMSAyMC45ODg2IDU0LjIzNDQgMjAuNjI1QzUzLjU5MDQgMjAuMjU3NiA1My4wOTQyIDE5LjczODYgNTIuNzQ1NyAxOS4wNjgyQzUyLjM5NzMgMTguMzkzOSA1Mi4yMjMgMTcuNTk2NiA1Mi4yMjMgMTYuNjc2MUM1Mi4yMjMgMTUuNzc4NCA1Mi4zOTczIDE0Ljk5MDUgNTIuNzQ1NyAxNC4zMTI1QzUzLjA5NDIgMTMuNjM0NSA1My41ODQ4IDEzLjEwNjEgNTQuMjE3MyAxMi43MjczQzU0Ljg1MzcgMTIuMzQ4NSA1NS41OTk5IDEyLjE1OTEgNTYuNDU2IDEyLj'+
			'E1OTFDNTcuMDMxNyAxMi4xNTkxIDU3LjU2NzcgMTIuMjUxOSA1OC4wNjM5IDEyLjQzNzVDNTguNTYzOSAxMi42MTkzIDU4Ljk5OTUgMTIuODkzOSA1OS4zNzA3IDEzLjI2MTRDNTkuNzQ1NyAxMy42Mjg4IDYwLjAzNzQgMTQuMDkwOSA2MC4yNDU3IDE0LjY0NzdDNjAuNDU0MSAxNS4yMDA4IDYwLjU1ODIgMTUuODQ4NSA2MC41NTgyIDE2LjU5MDlWMTcuMjU1N0g1My4xODg5VjE1Ljc1NTdINTguMjc5OEM1OC4yNzk4IDE1LjQwNzIgNTguMjA0MSAxNS4wOTg1IDU4LjA1MjYgMTQuODI5NUM1Ny45MDEgMTQuNTYwNiA1Ny42OTA4IDE0LjM1MDQgNTcuNDIxOSAxNC4xOTg5QzU3LjE1NjcgMTQuMDQz'+
			'NiA1Ni44NDggMTMuOTY1OSA1Ni40OTU3IDEzLjk2NTlDNTYuMTI4MyAxMy45NjU5IDU1LjgwMjYgMTQuMDUxMSA1NS41MTg1IDE0LjIyMTZDNTUuMjM4MiAxNC4zODgzIDU1LjAxODUgMTQuNjEzNiA1NC44NTk0IDE0Ljg5NzdDNTQuNzAwMyAxNS4xNzggNTQuNjE4OCAxNS40OTA1IDU0LjYxNTEgMTUuODM1MlYxNy4yNjE0QzU0LjYxNTEgMTcuNjkzMiA1NC42OTQ2IDE4LjA2NjMgNTQuODUzNyAxOC4zODA3QzU1LjAxNjYgMTguNjk1MSA1NS4yNDU3IDE4LjkzNzUgNTUuNTQxMiAxOS4xMDhDNTUuODM2NiAxOS4yNzg0IDU2LjE4NyAxOS4zNjM2IDU2LjU5MjMgMTkuMzYzNkM1Ni44NjEzIDE5Lj'+
			'M2MzYgNTcuMTA3NSAxOS4zMjU4IDU3LjMzMSAxOS4yNUM1Ny41NTQ1IDE5LjE3NDIgNTcuNzQ1NyAxOS4wNjA2IDU3LjkwNDggMTguOTA5MUM1OC4wNjM5IDE4Ljc1NzYgNTguMTg1MSAxOC41NzIgNTguMjY4NSAxOC4zNTIzTDYwLjUwNzEgMTguNUM2MC4zOTM1IDE5LjAzNzkgNjAuMTYwNSAxOS41MDc2IDU5LjgwODIgMTkuOTA5MUM1OS40NTk4IDIwLjMwNjggNTkuMDA5IDIwLjYxNzQgNTguNDU2IDIwLjg0MDlDNTcuOTA2NyAyMS4wNjA2IDU3LjI3MjMgMjEuMTcwNSA1Ni41NTI2IDIxLjE3MDVaTTYzLjc5NjkgMjFMNjEuNDIxOSAxMi4yNzI3SDYzLjg3MDdMNjUuMjIzIDE4LjEzNjRINjUu'+
			'MzAyNkw2Ni43MTE2IDEyLjI3MjdINjkuMTE1MUw3MC41NDY5IDE4LjEwMjNINzAuNjIwN0w3MS45NTAzIDEyLjI3MjdINzQuMzkzNUw3Mi4wMjQxIDIxSDY5LjQ2MTZMNjcuOTYxNiAxNS41MTE0SDY3Ljg1MzdMNjYuMzUzNyAyMUg2My43OTY5WiIvPgo8L3N2Zz4K';
		me._svg_1311__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._svg_1311__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjMwIiB2aWV3Qm94PSIwIDAgMTEwIDMwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMTAiPgogPHJlY3QgZmlsbD0iI0FGNUUwMCIgaGVpZ2h0PSIzMCIgcng9IjE1IiB3aWR0aD0iMTEwIi8+CiA8cGF0aCBmaWxsPSJ3aGl0ZSIgZD0iTTM4LjM5NDkgOS4zNjM2NEw0MS4yMDc0IDE4LjIwNDVINDEuMzE1M0w0NC4xMzM1IDkuMzYzNjRINDYuODYwOEw0Mi44NDk0IDIxSDM5LjY3OUwzNS42NjE5IDkuMzYzNjRIMzguMzk0OVpNNDguMjE1OSAyMVYxMi4yNzI3SDUwLjYzNjRWMjFINDguMjE1OVpNNDkuNDMxOCAxMS4xND'+
			'c3QzQ5LjA3MiAxMS4xNDc3IDQ4Ljc2MzMgMTEuMDI4NCA0OC41MDU3IDEwLjc4OThDNDguMjUxOSAxMC41NDczIDQ4LjEyNSAxMC4yNTc2IDQ4LjEyNSA5LjkyMDQ1QzQ4LjEyNSA5LjU4NzEyIDQ4LjI1MTkgOS4zMDExNCA0OC41MDU3IDkuMDYyNUM0OC43NjMzIDguODIwMDggNDkuMDcyIDguNjk4ODYgNDkuNDMxOCA4LjY5ODg2QzQ5Ljc5MTcgOC42OTg4NiA1MC4wOTg1IDguODIwMDggNTAuMzUyMyA5LjA2MjVDNTAuNjA5OCA5LjMwMTE0IDUwLjczODYgOS41ODcxMiA1MC43Mzg2IDkuOTIwNDVDNTAuNzM4NiAxMC4yNTc2IDUwLjYwOTggMTAuNTQ3MyA1MC4zNTIzIDEwLjc4OThDNTAuMDk4'+
			'NSAxMS4wMjg0IDQ5Ljc5MTcgMTEuMTQ3NyA0OS40MzE4IDExLjE0NzdaTTU2LjU1MjYgMjEuMTcwNUM1NS42NTQ4IDIxLjE3MDUgNTQuODgyMSAyMC45ODg2IDU0LjIzNDQgMjAuNjI1QzUzLjU5MDQgMjAuMjU3NiA1My4wOTQyIDE5LjczODYgNTIuNzQ1NyAxOS4wNjgyQzUyLjM5NzMgMTguMzkzOSA1Mi4yMjMgMTcuNTk2NiA1Mi4yMjMgMTYuNjc2MUM1Mi4yMjMgMTUuNzc4NCA1Mi4zOTczIDE0Ljk5MDUgNTIuNzQ1NyAxNC4zMTI1QzUzLjA5NDIgMTMuNjM0NSA1My41ODQ4IDEzLjEwNjEgNTQuMjE3MyAxMi43MjczQzU0Ljg1MzcgMTIuMzQ4NSA1NS41OTk5IDEyLjE1OTEgNTYuNDU2IDEyLj'+
			'E1OTFDNTcuMDMxNyAxMi4xNTkxIDU3LjU2NzcgMTIuMjUxOSA1OC4wNjM5IDEyLjQzNzVDNTguNTYzOSAxMi42MTkzIDU4Ljk5OTUgMTIuODkzOSA1OS4zNzA3IDEzLjI2MTRDNTkuNzQ1NyAxMy42Mjg4IDYwLjAzNzQgMTQuMDkwOSA2MC4yNDU3IDE0LjY0NzdDNjAuNDU0MSAxNS4yMDA4IDYwLjU1ODIgMTUuODQ4NSA2MC41NTgyIDE2LjU5MDlWMTcuMjU1N0g1My4xODg5VjE1Ljc1NTdINTguMjc5OEM1OC4yNzk4IDE1LjQwNzIgNTguMjA0MSAxNS4wOTg1IDU4LjA1MjYgMTQuODI5NUM1Ny45MDEgMTQuNTYwNiA1Ny42OTA4IDE0LjM1MDQgNTcuNDIxOSAxNC4xOTg5QzU3LjE1NjcgMTQuMDQz'+
			'NiA1Ni44NDggMTMuOTY1OSA1Ni40OTU3IDEzLjk2NTlDNTYuMTI4MyAxMy45NjU5IDU1LjgwMjYgMTQuMDUxMSA1NS41MTg1IDE0LjIyMTZDNTUuMjM4MiAxNC4zODgzIDU1LjAxODUgMTQuNjEzNiA1NC44NTk0IDE0Ljg5NzdDNTQuNzAwMyAxNS4xNzggNTQuNjE4OCAxNS40OTA1IDU0LjYxNTEgMTUuODM1MlYxNy4yNjE0QzU0LjYxNTEgMTcuNjkzMiA1NC42OTQ2IDE4LjA2NjMgNTQuODUzNyAxOC4zODA3QzU1LjAxNjYgMTguNjk1MSA1NS4yNDU3IDE4LjkzNzUgNTUuNTQxMiAxOS4xMDhDNTUuODM2NiAxOS4yNzg0IDU2LjE4NyAxOS4zNjM2IDU2LjU5MjMgMTkuMzYzNkM1Ni44NjEzIDE5Lj'+
			'M2MzYgNTcuMTA3NSAxOS4zMjU4IDU3LjMzMSAxOS4yNUM1Ny41NTQ1IDE5LjE3NDIgNTcuNzQ1NyAxOS4wNjA2IDU3LjkwNDggMTguOTA5MUM1OC4wNjM5IDE4Ljc1NzYgNTguMTg1MSAxOC41NzIgNTguMjY4NSAxOC4zNTIzTDYwLjUwNzEgMTguNUM2MC4zOTM1IDE5LjAzNzkgNjAuMTYwNSAxOS41MDc2IDU5LjgwODIgMTkuOTA5MUM1OS40NTk4IDIwLjMwNjggNTkuMDA5IDIwLjYxNzQgNTguNDU2IDIwLjg0MDlDNTcuOTA2NyAyMS4wNjA2IDU3LjI3MjMgMjEuMTcwNSA1Ni41NTI2IDIxLjE3MDVaTTYzLjc5NjkgMjFMNjEuNDIxOSAxMi4yNzI3SDYzLjg3MDdMNjUuMjIzIDE4LjEzNjRINjUu'+
			'MzAyNkw2Ni43MTE2IDEyLjI3MjdINjkuMTE1MUw3MC41NDY5IDE4LjEwMjNINzAuNjIwN0w3MS45NTAzIDEyLjI3MjdINzQuMzkzNUw3Mi4wMjQxIDIxSDY5LjQ2MTZMNjcuOTYxNiAxNS41MTE0SDY3Ljg1MzdMNjYuMzUzNyAyMUg2My43OTY5WiIvPgo8L3N2Zz4K';
		me._svg_1311__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="Svg 13";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 23px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((23px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 90px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_1311.ggIsActive=function() {
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
		me._svg_1311.onclick=function (e) {
			if (me._svg_1311.isDragging()) return;
			var list=me.findElements("products_list",true);
			while(list.length>0) {
				var e=list.pop();
				e.style.transition='none';
				e.style.visibility='hidden';
				e.ggVisible=false;
			}
				me.__code.ggUpdateText=function() {
					var params = [];
					var hs = player._("panoramaName", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			me.__code.ggUpdateText();
			me.__code.ggTextDiv.scrollTop = 0;
				me.__code.ggUpdateText=function() {
					var params = [];
					var hs = player._("viewAngle", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			me.__code.ggUpdateText();
			me.__code.ggTextDiv.scrollTop = 0;
		}
		me._svg_1311.onmouseover=function (e) {
			me._svg_1311__img.style.visibility='hidden';
			me._svg_1311__imgo.style.visibility='inherit';
			me.elementMouseOver['svg_1311']=true;
		}
		me._svg_1311.onmouseout=function (e) {
			me._svg_1311__img.style.visibility='inherit';
			me._svg_1311__imgo.style.visibility='hidden';
			me.elementMouseOver['svg_1311']=false;
		}
		me._svg_1311.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['svg_1311']) {
				me._svg_1311__img.style.visibility='hidden';
				me._svg_1311__imgo.style.visibility='inherit';
				me.elementMouseOver['svg_1311']=true;
			}
		}
		me._svg_1311.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_4_31.appendChild(me._svg_1311);
		me._product_list_h12w051.appendChild(me._rectangle_4_31);
		me._scrollarea_1__content.appendChild(me._product_list_h12w051);
		el=me._product_list_10418001091=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._product_list_10418001091;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="product_list_1041800109";
		el.ggDx=115;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle product_list";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #eeeeee;';
		hs+='border-radius : 5px;';
		hs+='cursor : default;';
		hs+='height : 300px;';
		hs+='left : calc(50% - ((200px + 2px) / 2) + 115px);';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 200px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 0%';
		me._product_list_10418001091.ggIsActive=function() {
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
		me._product_list_10418001091.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_151=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._image_151;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._image_151__img=document.createElement('img');
		els.className='ggskin ggskin_image_151';
		hs=basePath + 'images/image_151.png';
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
		el.ggId="Image 15";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 180px;';
		hs+='left : calc(50% - ((180px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 180px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_151.ggIsActive=function() {
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
		me._image_151.ggUpdatePosition=function (useTransition) {
		}
		me._product_list_10418001091.appendChild(me._image_151);
		el=me._text_6_31=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._text_6_31;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._text_6_31__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 6_3";
		el.ggDy=59;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(102,102,102,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 59px);';
		hs+='visibility : inherit;';
		hs+='width : 95%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+="text-overflow: ellipsis;";
		els.setAttribute('style',hs);
		me._text_6_31.ggUpdateText=function() {
			var params = [];
			var hs = player._("One of the most important components of your vehicle is its oil filter. Early\nengines didn\u2019t have the tight tolerances and fragile technologies as they do\ntoday such as variable valve timing controlled by electronically controlled oil\npressure. Instead, they were less complex, didn\u2019t use oil filters, and ran on\nthe poorest grade oil imaginable. Today there are various types of oil filters\nused and the truth is that they are not all created equal.", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_6_31.ggUpdateText();
		el.appendChild(els);
		me._text_6_31.ggIsActive=function() {
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
		me._text_6_31.ggUpdatePosition=function (useTransition) {
		}
		me._product_list_10418001091.appendChild(me._text_6_31);
		el=me._text_6_1_31=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._text_6_1_31;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._text_6_1_31__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 6_1_3";
		el.ggDy=82;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(0,0,0,1);';
		hs+='cursor : default;';
		hs+='height : 21px;';
		hs+='left : 7px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((21px + 0px) / 2) + 82px);';
		hs+='visibility : inherit;';
		hs+='width : 95%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='bottom: 0px;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+="text-overflow: ellipsis;";
		els.setAttribute('style',hs);
		me._text_6_1_31.ggUpdateText=function() {
			var params = [];
			var hs = player._("<div class=\"ggmarkdown\"><p><strong>$6-$11<\/strong> \/pieces<\/p>\n<div>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_6_1_31.ggUpdateText();
		el.appendChild(els);
		me._text_6_1_31.ggIsActive=function() {
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
		me._text_6_1_31.ggUpdatePosition=function (useTransition) {
		}
		me._product_list_10418001091.appendChild(me._text_6_1_31);
		el=me._text_6_1_1_1_21=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._text_6_1_1_1_21;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._text_6_1_1_1_21__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 6_1_1_1_2";
		el.ggDy=105;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(0,0,0,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 7px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 105px);';
		hs+='visibility : inherit;';
		hs+='width : 40%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='bottom: 0px;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+="text-overflow: ellipsis;";
		els.setAttribute('style',hs);
		me._text_6_1_1_1_21.ggUpdateText=function() {
			var params = [];
			var hs = player._("<div class=\"ggmarkdown\"><p>113 pieces<\/p>\n<div>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_6_1_1_1_21.ggUpdateText();
		el.appendChild(els);
		me._text_6_1_1_1_21.ggIsActive=function() {
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
		me._text_6_1_1_1_21.ggUpdatePosition=function (useTransition) {
		}
		me._product_list_10418001091.appendChild(me._text_6_1_1_1_21);
		el=me._text_6_1_1_31=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._text_6_1_1_31;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._text_6_1_1_31__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 6_1_1_3";
		el.ggDy=105;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(168,168,168,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 85px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 105px);';
		hs+='visibility : inherit;';
		hs+='width : 35%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='bottom: 0px;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+="text-overflow: ellipsis;";
		els.setAttribute('style',hs);
		me._text_6_1_1_31.ggUpdateText=function() {
			var params = [];
			var hs = player._("<div class=\"ggmarkdown\"><p>(MOQ)<\/p>\n<div>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_6_1_1_31.ggUpdateText();
		el.appendChild(els);
		me._text_6_1_1_31.ggIsActive=function() {
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
		me._text_6_1_1_31.ggUpdatePosition=function (useTransition) {
		}
		me._product_list_10418001091.appendChild(me._text_6_1_1_31);
		el=me._rectangle_4_21=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._rectangle_4_21;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="Rectangle 4_2";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 5px;';
		hs+='cursor : default;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((95% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 95%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_4_21.ggIsActive=function() {
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
		me._rectangle_4_21.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_1110=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._svg_1110;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._svg_1110__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjMwIiB2aWV3Qm94PSIwIDAgMTEwIDMwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMTAiPgogPHJlY3QgZmlsbD0iIzE5Mjg0NSIgaGVpZ2h0PSIzMCIgcng9IjE1IiB3aWR0aD0iMTEwIi8+CiA8cGF0aCBmaWxsPSJ3aGl0ZSIgZD0iTTIyLjAxMTQgMjFWOS4zNjM2NEgyNi42NzA1QzI3LjUyNjUgOS4zNjM2NCAyOC4yNDA1IDkuNDkwNTMgMjguODEyNSA5Ljc0NDMyQzI5LjM4NDUgOS45OTgxMSAyOS44MTQ0IDEwLjM1MDQgMzAuMTAyMyAxMC44MDExQzMwLjM5MDIgMTEuMjQ4MSAzMC41MzQxIDExLjc2MzMgMzAuNT'+
			'M0MSAxMi4zNDY2QzMwLjUzNDEgMTIuODAxMSAzMC40NDMyIDEzLjIwMDggMzAuMjYxNCAxMy41NDU1QzMwLjA3OTUgMTMuODg2NCAyOS44Mjk1IDE0LjE2NjcgMjkuNTExNCAxNC4zODY0QzI5LjE5NyAxNC42MDIzIDI4LjgzNzEgMTQuNzU1NyAyOC40MzE4IDE0Ljg0NjZWMTQuOTYwMkMyOC44NzUgMTQuOTc5MiAyOS4yODk4IDE1LjEwNDIgMjkuNjc2MSAxNS4zMzUyQzMwLjA2NjMgMTUuNTY2MyAzMC4zODI2IDE1Ljg5MDIgMzAuNjI1IDE2LjMwNjhDMzAuODY3NCAxNi43MTk3IDMwLjk4ODYgMTcuMjEyMSAzMC45ODg2IDE3Ljc4NDFDMzAuOTg4NiAxOC40MDE1IDMwLjgzNTIgMTguOTUyNyAz'+
			'MC41Mjg0IDE5LjQzNzVDMzAuMjI1NCAxOS45MTg2IDI5Ljc3NjUgMjAuMjk5MiAyOS4xODE4IDIwLjU3OTVDMjguNTg3MSAyMC44NTk4IDI3Ljg1NDIgMjEgMjYuOTgzIDIxSDIyLjAxMTRaTTI0LjQ3MTYgMTguOTg4NkgyNi40NzczQzI3LjE2MjkgMTguOTg4NiAyNy42NjI5IDE4Ljg1OCAyNy45NzczIDE4LjU5NjZDMjguMjkxNyAxOC4zMzE0IDI4LjQ0ODkgMTcuOTc5MiAyOC40NDg5IDE3LjUzOThDMjguNDQ4OSAxNy4yMTc4IDI4LjM3MTIgMTYuOTMzNyAyOC4yMTU5IDE2LjY4NzVDMjguMDYwNiAxNi40NDEzIDI3LjgzOSAxNi4yNDgxIDI3LjU1MTEgMTYuMTA4QzI3LjI2NyAxNS45Njc4ID'+
			'I2LjkyOCAxNS44OTc3IDI2LjUzNDEgMTUuODk3N0gyNC40NzE2VjE4Ljk4ODZaTTI0LjQ3MTYgMTQuMjMzSDI2LjI5NTVDMjYuNjMyNiAxNC4yMzMgMjYuOTMxOCAxNC4xNzQyIDI3LjE5MzIgMTQuMDU2OEMyNy40NTgzIDEzLjkzNTYgMjcuNjY2NyAxMy43NjUyIDI3LjgxODIgMTMuNTQ1NUMyNy45NzM1IDEzLjMyNTggMjguMDUxMSAxMy4wNjI1IDI4LjA1MTEgMTIuNzU1N0MyOC4wNTExIDEyLjMzNTIgMjcuOTAxNSAxMS45OTYyIDI3LjYwMjMgMTEuNzM4NkMyNy4zMDY4IDExLjQ4MTEgMjYuODg2NCAxMS4zNTIzIDI2LjM0MDkgMTEuMzUyM0gyNC40NzE2VjE0LjIzM1pNMzguMTQwNiAxNy4y'+
			'ODQxVjEyLjI3MjdINDAuNTYxMVYyMUgzOC4yMzcyVjE5LjQxNDhIMzguMTQ2M0MzNy45NDkzIDE5LjkyNjEgMzcuNjIxNyAyMC4zMzcxIDM3LjE2MzQgMjAuNjQ3N0MzNi43MDg4IDIwLjk1ODMgMzYuMTUzOSAyMS4xMTM2IDM1LjQ5ODYgMjEuMTEzNkMzNC45MTUyIDIxLjExMzYgMzQuNDAyIDIwLjk4MTEgMzMuOTU4OCAyMC43MTU5QzMzLjUxNTYgMjAuNDUwOCAzMy4xNjkgMjAuMDczOSAzMi45MTkgMTkuNTg1MkMzMi42NzI4IDE5LjA5NjYgMzIuNTQ3OCAxOC41MTE0IDMyLjU0NCAxNy44Mjk1VjEyLjI3MjdIMzQuOTY0NVYxNy4zOTc3QzM0Ljk2ODMgMTcuOTEyOSAzNS4xMDY1IDE4LjMyMD'+
			'EgMzUuMzc5MyAxOC42MTkzQzM1LjY1MiAxOC45MTg2IDM2LjAxNzUgMTkuMDY4MiAzNi40NzU5IDE5LjA2ODJDMzYuNzY3NSAxOS4wNjgyIDM3LjA0MDIgMTkuMDAxOSAzNy4yOTQgMTguODY5M0MzNy41NDc4IDE4LjczMyAzNy43NTI0IDE4LjUzMjIgMzcuOTA3NyAxOC4yNjdDMzguMDY2OCAxOC4wMDE5IDM4LjE0NDQgMTcuNjc0MiAzOC4xNDA2IDE3LjI4NDFaTTQzLjk5MTUgMjQuMjcyN0M0My42ODQ3IDI0LjI3MjcgNDMuMzk2OCAyNC4yNDgxIDQzLjEyNzggMjQuMTk4OUM0Mi44NjI3IDI0LjE1MzQgNDIuNjQzIDI0LjA5NDcgNDIuNDY4OCAyNC4wMjI3TDQzLjAxNDIgMjIuMjE1OUM0My4y'+
			'OTgzIDIyLjMwMyA0My41NTQgMjIuMzUwNCA0My43ODEyIDIyLjM1OEM0NC4wMTIzIDIyLjM2NTUgNDQuMjExMiAyMi4zMTI1IDQ0LjM3NzggMjIuMTk4OUM0NC41NDgzIDIyLjA4NTIgNDQuNjg2NiAyMS44OTIgNDQuNzkyNiAyMS42MTkzTDQ0LjkzNDcgMjEuMjVMNDEuODA0IDEyLjI3MjdINDQuMzQ5NEw0Ni4xNTYyIDE4LjY4MThINDYuMjQ3Mkw0OC4wNzEgMTIuMjcyN0g1MC42MzM1TDQ3LjI0MTUgMjEuOTQzMkM0Ny4wNzg2IDIyLjQxMjkgNDYuODU3IDIyLjgyMiA0Ni41NzY3IDIzLjE3MDVDNDYuMzAwMiAyMy41MjI3IDQ1Ljk0OTggMjMuNzkzNiA0NS41MjU2IDIzLjk4M0M0NS4xMDEzID'+
			'I0LjE3NjEgNDQuNTkgMjQuMjcyNyA0My45OTE1IDI0LjI3MjdaTTY1LjM1MzcgOS4zNjM2NFYyMUg2My4yMjg3TDU4LjE2NjIgMTMuNjc2MUg1OC4wODFWMjFINTUuNjIwN1Y5LjM2MzY0SDU3Ljc3OThMNjIuODAyNiAxNi42ODE4SDYyLjkwNDhWOS4zNjM2NEg2NS4zNTM3Wk03MS4yODQxIDIxLjE3MDVDNzAuNDAxNSAyMS4xNzA1IDY5LjYzODMgMjAuOTgzIDY4Ljk5NDMgMjAuNjA4QzY4LjM1NDIgMjAuMjI5MiA2Ny44NTk4IDE5LjcwMjcgNjcuNTExNCAxOS4wMjg0QzY3LjE2MjkgMTguMzUwNCA2Ni45ODg2IDE3LjU2NDQgNjYuOTg4NiAxNi42NzA1QzY2Ljk4ODYgMTUuNzY4OSA2Ny4xNjI5'+
			'IDE0Ljk4MTEgNjcuNTExNCAxNC4zMDY4QzY3Ljg1OTggMTMuNjI4OCA2OC4zNTQyIDEzLjEwMjMgNjguOTk0MyAxMi43MjczQzY5LjYzODMgMTIuMzQ4NSA3MC40MDE1IDEyLjE1OTEgNzEuMjg0MSAxMi4xNTkxQzcyLjE2NjcgMTIuMTU5MSA3Mi45MjggMTIuMzQ4NSA3My41NjgyIDEyLjcyNzNDNzQuMjEyMSAxMy4xMDIzIDc0LjcwODMgMTMuNjI4OCA3NS4wNTY4IDE0LjMwNjhDNzUuNDA1MyAxNC45ODExIDc1LjU3OTUgMTUuNzY4OSA3NS41Nzk1IDE2LjY3MDVDNzUuNTc5NSAxNy41NjQ0IDc1LjQwNTMgMTguMzUwNCA3NS4wNTY4IDE5LjAyODRDNzQuNzA4MyAxOS43MDI3IDc0LjIxMjEgMj'+
			'AuMjI5MiA3My41NjgyIDIwLjYwOEM3Mi45MjggMjAuOTgzIDcyLjE2NjcgMjEuMTcwNSA3MS4yODQxIDIxLjE3MDVaTTcxLjI5NTUgMTkuMjk1NUM3MS42OTcgMTkuMjk1NSA3Mi4wMzIyIDE5LjE4MTggNzIuMzAxMSAxOC45NTQ1QzcyLjU3MDEgMTguNzIzNSA3Mi43NzI3IDE4LjQwOTEgNzIuOTA5MSAxOC4wMTE0QzczLjA0OTIgMTcuNjEzNiA3My4xMTkzIDE3LjE2MSA3My4xMTkzIDE2LjY1MzRDNzMuMTE5MyAxNi4xNDU4IDczLjA0OTIgMTUuNjkzMiA3Mi45MDkxIDE1LjI5NTVDNzIuNzcyNyAxNC44OTc3IDcyLjU3MDEgMTQuNTgzMyA3Mi4zMDExIDE0LjM1MjNDNzIuMDMyMiAxNC4xMjEy'+
			'IDcxLjY5NyAxNC4wMDU3IDcxLjI5NTUgMTQuMDA1N0M3MC44OTAyIDE0LjAwNTcgNzAuNTQ5MiAxNC4xMjEyIDcwLjI3MjcgMTQuMzUyM0M3MCAxNC41ODMzIDY5Ljc5MzYgMTQuODk3NyA2OS42NTM0IDE1LjI5NTVDNjkuNTE3IDE1LjY5MzIgNjkuNDQ4OSAxNi4xNDU4IDY5LjQ0ODkgMTYuNjUzNEM2OS40NDg5IDE3LjE2MSA2OS41MTcgMTcuNjEzNiA2OS42NTM0IDE4LjAxMTRDNjkuNzkzNiAxOC40MDkxIDcwIDE4LjcyMzUgNzAuMjcyNyAxOC45NTQ1QzcwLjU0OTIgMTkuMTgxOCA3MC44OTAyIDE5LjI5NTUgNzEuMjk1NSAxOS4yOTU1Wk03OC42NTYyIDIxTDc2LjI4MTIgMTIuMjcyN0g3OC'+
			'43MzAxTDgwLjA4MjQgMTguMTM2NEg4MC4xNjE5TDgxLjU3MSAxMi4yNzI3SDgzLjk3NDRMODUuNDA2MiAxOC4xMDIzSDg1LjQ4MDFMODYuODA5NyAxMi4yNzI3SDg5LjI1MjhMODYuODgzNSAyMUg4NC4zMjFMODIuODIxIDE1LjUxMTRIODIuNzEzMUw4MS4yMTMxIDIxSDc4LjY1NjJaIi8+Cjwvc3ZnPgo=';
		me._svg_1110__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._svg_1110__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjMwIiB2aWV3Qm94PSIwIDAgMTEwIDMwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMTAiPgogPHJlY3QgZmlsbD0iI0QzMzQzNCIgaGVpZ2h0PSIzMCIgcng9IjE1IiB3aWR0aD0iMTEwIi8+CiA8cGF0aCBmaWxsPSJ3aGl0ZSIgZD0iTTIyLjAxMTQgMjFWOS4zNjM2NEgyNi42NzA1QzI3LjUyNjUgOS4zNjM2NCAyOC4yNDA1IDkuNDkwNTMgMjguODEyNSA5Ljc0NDMyQzI5LjM4NDUgOS45OTgxMSAyOS44MTQ0IDEwLjM1MDQgMzAuMTAyMyAxMC44MDExQzMwLjM5MDIgMTEuMjQ4MSAzMC41MzQxIDExLjc2MzMgMzAuNT'+
			'M0MSAxMi4zNDY2QzMwLjUzNDEgMTIuODAxMSAzMC40NDMyIDEzLjIwMDggMzAuMjYxNCAxMy41NDU1QzMwLjA3OTUgMTMuODg2NCAyOS44Mjk1IDE0LjE2NjcgMjkuNTExNCAxNC4zODY0QzI5LjE5NyAxNC42MDIzIDI4LjgzNzEgMTQuNzU1NyAyOC40MzE4IDE0Ljg0NjZWMTQuOTYwMkMyOC44NzUgMTQuOTc5MiAyOS4yODk4IDE1LjEwNDIgMjkuNjc2MSAxNS4zMzUyQzMwLjA2NjMgMTUuNTY2MyAzMC4zODI2IDE1Ljg5MDIgMzAuNjI1IDE2LjMwNjhDMzAuODY3NCAxNi43MTk3IDMwLjk4ODYgMTcuMjEyMSAzMC45ODg2IDE3Ljc4NDFDMzAuOTg4NiAxOC40MDE1IDMwLjgzNTIgMTguOTUyNyAz'+
			'MC41Mjg0IDE5LjQzNzVDMzAuMjI1NCAxOS45MTg2IDI5Ljc3NjUgMjAuMjk5MiAyOS4xODE4IDIwLjU3OTVDMjguNTg3MSAyMC44NTk4IDI3Ljg1NDIgMjEgMjYuOTgzIDIxSDIyLjAxMTRaTTI0LjQ3MTYgMTguOTg4NkgyNi40NzczQzI3LjE2MjkgMTguOTg4NiAyNy42NjI5IDE4Ljg1OCAyNy45NzczIDE4LjU5NjZDMjguMjkxNyAxOC4zMzE0IDI4LjQ0ODkgMTcuOTc5MiAyOC40NDg5IDE3LjUzOThDMjguNDQ4OSAxNy4yMTc4IDI4LjM3MTIgMTYuOTMzNyAyOC4yMTU5IDE2LjY4NzVDMjguMDYwNiAxNi40NDEzIDI3LjgzOSAxNi4yNDgxIDI3LjU1MTEgMTYuMTA4QzI3LjI2NyAxNS45Njc4ID'+
			'I2LjkyOCAxNS44OTc3IDI2LjUzNDEgMTUuODk3N0gyNC40NzE2VjE4Ljk4ODZaTTI0LjQ3MTYgMTQuMjMzSDI2LjI5NTVDMjYuNjMyNiAxNC4yMzMgMjYuOTMxOCAxNC4xNzQyIDI3LjE5MzIgMTQuMDU2OEMyNy40NTgzIDEzLjkzNTYgMjcuNjY2NyAxMy43NjUyIDI3LjgxODIgMTMuNTQ1NUMyNy45NzM1IDEzLjMyNTggMjguMDUxMSAxMy4wNjI1IDI4LjA1MTEgMTIuNzU1N0MyOC4wNTExIDEyLjMzNTIgMjcuOTAxNSAxMS45OTYyIDI3LjYwMjMgMTEuNzM4NkMyNy4zMDY4IDExLjQ4MTEgMjYuODg2NCAxMS4zNTIzIDI2LjM0MDkgMTEuMzUyM0gyNC40NzE2VjE0LjIzM1pNMzguMTQwNiAxNy4y'+
			'ODQxVjEyLjI3MjdINDAuNTYxMVYyMUgzOC4yMzcyVjE5LjQxNDhIMzguMTQ2M0MzNy45NDkzIDE5LjkyNjEgMzcuNjIxNyAyMC4zMzcxIDM3LjE2MzQgMjAuNjQ3N0MzNi43MDg4IDIwLjk1ODMgMzYuMTUzOSAyMS4xMTM2IDM1LjQ5ODYgMjEuMTEzNkMzNC45MTUyIDIxLjExMzYgMzQuNDAyIDIwLjk4MTEgMzMuOTU4OCAyMC43MTU5QzMzLjUxNTYgMjAuNDUwOCAzMy4xNjkgMjAuMDczOSAzMi45MTkgMTkuNTg1MkMzMi42NzI4IDE5LjA5NjYgMzIuNTQ3OCAxOC41MTE0IDMyLjU0NCAxNy44Mjk1VjEyLjI3MjdIMzQuOTY0NVYxNy4zOTc3QzM0Ljk2ODMgMTcuOTEyOSAzNS4xMDY1IDE4LjMyMD'+
			'EgMzUuMzc5MyAxOC42MTkzQzM1LjY1MiAxOC45MTg2IDM2LjAxNzUgMTkuMDY4MiAzNi40NzU5IDE5LjA2ODJDMzYuNzY3NSAxOS4wNjgyIDM3LjA0MDIgMTkuMDAxOSAzNy4yOTQgMTguODY5M0MzNy41NDc4IDE4LjczMyAzNy43NTI0IDE4LjUzMjIgMzcuOTA3NyAxOC4yNjdDMzguMDY2OCAxOC4wMDE5IDM4LjE0NDQgMTcuNjc0MiAzOC4xNDA2IDE3LjI4NDFaTTQzLjk5MTUgMjQuMjcyN0M0My42ODQ3IDI0LjI3MjcgNDMuMzk2OCAyNC4yNDgxIDQzLjEyNzggMjQuMTk4OUM0Mi44NjI3IDI0LjE1MzQgNDIuNjQzIDI0LjA5NDcgNDIuNDY4OCAyNC4wMjI3TDQzLjAxNDIgMjIuMjE1OUM0My4y'+
			'OTgzIDIyLjMwMyA0My41NTQgMjIuMzUwNCA0My43ODEyIDIyLjM1OEM0NC4wMTIzIDIyLjM2NTUgNDQuMjExMiAyMi4zMTI1IDQ0LjM3NzggMjIuMTk4OUM0NC41NDgzIDIyLjA4NTIgNDQuNjg2NiAyMS44OTIgNDQuNzkyNiAyMS42MTkzTDQ0LjkzNDcgMjEuMjVMNDEuODA0IDEyLjI3MjdINDQuMzQ5NEw0Ni4xNTYyIDE4LjY4MThINDYuMjQ3Mkw0OC4wNzEgMTIuMjcyN0g1MC42MzM1TDQ3LjI0MTUgMjEuOTQzMkM0Ny4wNzg2IDIyLjQxMjkgNDYuODU3IDIyLjgyMiA0Ni41NzY3IDIzLjE3MDVDNDYuMzAwMiAyMy41MjI3IDQ1Ljk0OTggMjMuNzkzNiA0NS41MjU2IDIzLjk4M0M0NS4xMDEzID'+
			'I0LjE3NjEgNDQuNTkgMjQuMjcyNyA0My45OTE1IDI0LjI3MjdaTTY1LjM1MzcgOS4zNjM2NFYyMUg2My4yMjg3TDU4LjE2NjIgMTMuNjc2MUg1OC4wODFWMjFINTUuNjIwN1Y5LjM2MzY0SDU3Ljc3OThMNjIuODAyNiAxNi42ODE4SDYyLjkwNDhWOS4zNjM2NEg2NS4zNTM3Wk03MS4yODQxIDIxLjE3MDVDNzAuNDAxNSAyMS4xNzA1IDY5LjYzODMgMjAuOTgzIDY4Ljk5NDMgMjAuNjA4QzY4LjM1NDIgMjAuMjI5MiA2Ny44NTk4IDE5LjcwMjcgNjcuNTExNCAxOS4wMjg0QzY3LjE2MjkgMTguMzUwNCA2Ni45ODg2IDE3LjU2NDQgNjYuOTg4NiAxNi42NzA1QzY2Ljk4ODYgMTUuNzY4OSA2Ny4xNjI5'+
			'IDE0Ljk4MTEgNjcuNTExNCAxNC4zMDY4QzY3Ljg1OTggMTMuNjI4OCA2OC4zNTQyIDEzLjEwMjMgNjguOTk0MyAxMi43MjczQzY5LjYzODMgMTIuMzQ4NSA3MC40MDE1IDEyLjE1OTEgNzEuMjg0MSAxMi4xNTkxQzcyLjE2NjcgMTIuMTU5MSA3Mi45MjggMTIuMzQ4NSA3My41NjgyIDEyLjcyNzNDNzQuMjEyMSAxMy4xMDIzIDc0LjcwODMgMTMuNjI4OCA3NS4wNTY4IDE0LjMwNjhDNzUuNDA1MyAxNC45ODExIDc1LjU3OTUgMTUuNzY4OSA3NS41Nzk1IDE2LjY3MDVDNzUuNTc5NSAxNy41NjQ0IDc1LjQwNTMgMTguMzUwNCA3NS4wNTY4IDE5LjAyODRDNzQuNzA4MyAxOS43MDI3IDc0LjIxMjEgMj'+
			'AuMjI5MiA3My41NjgyIDIwLjYwOEM3Mi45MjggMjAuOTgzIDcyLjE2NjcgMjEuMTcwNSA3MS4yODQxIDIxLjE3MDVaTTcxLjI5NTUgMTkuMjk1NUM3MS42OTcgMTkuMjk1NSA3Mi4wMzIyIDE5LjE4MTggNzIuMzAxMSAxOC45NTQ1QzcyLjU3MDEgMTguNzIzNSA3Mi43NzI3IDE4LjQwOTEgNzIuOTA5MSAxOC4wMTE0QzczLjA0OTIgMTcuNjEzNiA3My4xMTkzIDE3LjE2MSA3My4xMTkzIDE2LjY1MzRDNzMuMTE5MyAxNi4xNDU4IDczLjA0OTIgMTUuNjkzMiA3Mi45MDkxIDE1LjI5NTVDNzIuNzcyNyAxNC44OTc3IDcyLjU3MDEgMTQuNTgzMyA3Mi4zMDExIDE0LjM1MjNDNzIuMDMyMiAxNC4xMjEy'+
			'IDcxLjY5NyAxNC4wMDU3IDcxLjI5NTUgMTQuMDA1N0M3MC44OTAyIDE0LjAwNTcgNzAuNTQ5MiAxNC4xMjEyIDcwLjI3MjcgMTQuMzUyM0M3MCAxNC41ODMzIDY5Ljc5MzYgMTQuODk3NyA2OS42NTM0IDE1LjI5NTVDNjkuNTE3IDE1LjY5MzIgNjkuNDQ4OSAxNi4xNDU4IDY5LjQ0ODkgMTYuNjUzNEM2OS40NDg5IDE3LjE2MSA2OS41MTcgMTcuNjEzNiA2OS42NTM0IDE4LjAxMTRDNjkuNzkzNiAxOC40MDkxIDcwIDE4LjcyMzUgNzAuMjcyNyAxOC45NTQ1QzcwLjU0OTIgMTkuMTgxOCA3MC44OTAyIDE5LjI5NTUgNzEuMjk1NSAxOS4yOTU1Wk03OC42NTYyIDIxTDc2LjI4MTIgMTIuMjcyN0g3OC'+
			'43MzAxTDgwLjA4MjQgMTguMTM2NEg4MC4xNjE5TDgxLjU3MSAxMi4yNzI3SDgzLjk3NDRMODUuNDA2MiAxOC4xMDIzSDg1LjQ4MDFMODYuODA5NyAxMi4yNzI3SDg5LjI1MjhMODYuODgzNSAyMUg4NC4zMjFMODIuODIxIDE1LjUxMTRIODIuNzEzMUw4MS4yMTMxIDIxSDc4LjY1NjJaIi8+Cjwvc3ZnPgo=';
		me._svg_1110__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="Svg 11";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 23px;';
		hs+='position : absolute;';
		hs+='right : 5px;';
		hs+='top : calc(50% - ((23px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 90px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_1110.ggIsActive=function() {
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
		me._svg_1110.onclick=function (e) {
			if (me._svg_1110.isDragging()) return;
			player.openUrl("https:\/\/www.fcpeuro.com\/products\/mercedes-engine-oil-filter-1041800109he","_blank");
			var list=me.findElements("products_list",true);
			while(list.length>0) {
				var e=list.pop();
				e.style.transition='none';
				e.style.visibility='hidden';
				e.ggVisible=false;
			}
		}
		me._svg_1110.onmouseover=function (e) {
			me._svg_1110__img.style.visibility='hidden';
			me._svg_1110__imgo.style.visibility='inherit';
			me.elementMouseOver['svg_1110']=true;
		}
		me._svg_1110.onmouseout=function (e) {
			me._svg_1110__img.style.visibility='inherit';
			me._svg_1110__imgo.style.visibility='hidden';
			me.elementMouseOver['svg_1110']=false;
		}
		me._svg_1110.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['svg_1110']) {
				me._svg_1110__img.style.visibility='hidden';
				me._svg_1110__imgo.style.visibility='inherit';
				me.elementMouseOver['svg_1110']=true;
			}
		}
		me._svg_1110.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_4_21.appendChild(me._svg_1110);
		el=me._svg_1310=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._svg_1310;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._svg_1310__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjMwIiB2aWV3Qm94PSIwIDAgMTEwIDMwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMTAiPgogPHJlY3QgZmlsbD0iI0Y2OTIxRSIgaGVpZ2h0PSIzMCIgcng9IjE1IiB3aWR0aD0iMTEwIi8+CiA8cGF0aCBmaWxsPSJ3aGl0ZSIgZD0iTTM4LjM5NDkgOS4zNjM2NEw0MS4yMDc0IDE4LjIwNDVINDEuMzE1M0w0NC4xMzM1IDkuMzYzNjRINDYuODYwOEw0Mi44NDk0IDIxSDM5LjY3OUwzNS42NjE5IDkuMzYzNjRIMzguMzk0OVpNNDguMjE1OSAyMVYxMi4yNzI3SDUwLjYzNjRWMjFINDguMjE1OVpNNDkuNDMxOCAxMS4xND'+
			'c3QzQ5LjA3MiAxMS4xNDc3IDQ4Ljc2MzMgMTEuMDI4NCA0OC41MDU3IDEwLjc4OThDNDguMjUxOSAxMC41NDczIDQ4LjEyNSAxMC4yNTc2IDQ4LjEyNSA5LjkyMDQ1QzQ4LjEyNSA5LjU4NzEyIDQ4LjI1MTkgOS4zMDExNCA0OC41MDU3IDkuMDYyNUM0OC43NjMzIDguODIwMDggNDkuMDcyIDguNjk4ODYgNDkuNDMxOCA4LjY5ODg2QzQ5Ljc5MTcgOC42OTg4NiA1MC4wOTg1IDguODIwMDggNTAuMzUyMyA5LjA2MjVDNTAuNjA5OCA5LjMwMTE0IDUwLjczODYgOS41ODcxMiA1MC43Mzg2IDkuOTIwNDVDNTAuNzM4NiAxMC4yNTc2IDUwLjYwOTggMTAuNTQ3MyA1MC4zNTIzIDEwLjc4OThDNTAuMDk4'+
			'NSAxMS4wMjg0IDQ5Ljc5MTcgMTEuMTQ3NyA0OS40MzE4IDExLjE0NzdaTTU2LjU1MjYgMjEuMTcwNUM1NS42NTQ4IDIxLjE3MDUgNTQuODgyMSAyMC45ODg2IDU0LjIzNDQgMjAuNjI1QzUzLjU5MDQgMjAuMjU3NiA1My4wOTQyIDE5LjczODYgNTIuNzQ1NyAxOS4wNjgyQzUyLjM5NzMgMTguMzkzOSA1Mi4yMjMgMTcuNTk2NiA1Mi4yMjMgMTYuNjc2MUM1Mi4yMjMgMTUuNzc4NCA1Mi4zOTczIDE0Ljk5MDUgNTIuNzQ1NyAxNC4zMTI1QzUzLjA5NDIgMTMuNjM0NSA1My41ODQ4IDEzLjEwNjEgNTQuMjE3MyAxMi43MjczQzU0Ljg1MzcgMTIuMzQ4NSA1NS41OTk5IDEyLjE1OTEgNTYuNDU2IDEyLj'+
			'E1OTFDNTcuMDMxNyAxMi4xNTkxIDU3LjU2NzcgMTIuMjUxOSA1OC4wNjM5IDEyLjQzNzVDNTguNTYzOSAxMi42MTkzIDU4Ljk5OTUgMTIuODkzOSA1OS4zNzA3IDEzLjI2MTRDNTkuNzQ1NyAxMy42Mjg4IDYwLjAzNzQgMTQuMDkwOSA2MC4yNDU3IDE0LjY0NzdDNjAuNDU0MSAxNS4yMDA4IDYwLjU1ODIgMTUuODQ4NSA2MC41NTgyIDE2LjU5MDlWMTcuMjU1N0g1My4xODg5VjE1Ljc1NTdINTguMjc5OEM1OC4yNzk4IDE1LjQwNzIgNTguMjA0MSAxNS4wOTg1IDU4LjA1MjYgMTQuODI5NUM1Ny45MDEgMTQuNTYwNiA1Ny42OTA4IDE0LjM1MDQgNTcuNDIxOSAxNC4xOTg5QzU3LjE1NjcgMTQuMDQz'+
			'NiA1Ni44NDggMTMuOTY1OSA1Ni40OTU3IDEzLjk2NTlDNTYuMTI4MyAxMy45NjU5IDU1LjgwMjYgMTQuMDUxMSA1NS41MTg1IDE0LjIyMTZDNTUuMjM4MiAxNC4zODgzIDU1LjAxODUgMTQuNjEzNiA1NC44NTk0IDE0Ljg5NzdDNTQuNzAwMyAxNS4xNzggNTQuNjE4OCAxNS40OTA1IDU0LjYxNTEgMTUuODM1MlYxNy4yNjE0QzU0LjYxNTEgMTcuNjkzMiA1NC42OTQ2IDE4LjA2NjMgNTQuODUzNyAxOC4zODA3QzU1LjAxNjYgMTguNjk1MSA1NS4yNDU3IDE4LjkzNzUgNTUuNTQxMiAxOS4xMDhDNTUuODM2NiAxOS4yNzg0IDU2LjE4NyAxOS4zNjM2IDU2LjU5MjMgMTkuMzYzNkM1Ni44NjEzIDE5Lj'+
			'M2MzYgNTcuMTA3NSAxOS4zMjU4IDU3LjMzMSAxOS4yNUM1Ny41NTQ1IDE5LjE3NDIgNTcuNzQ1NyAxOS4wNjA2IDU3LjkwNDggMTguOTA5MUM1OC4wNjM5IDE4Ljc1NzYgNTguMTg1MSAxOC41NzIgNTguMjY4NSAxOC4zNTIzTDYwLjUwNzEgMTguNUM2MC4zOTM1IDE5LjAzNzkgNjAuMTYwNSAxOS41MDc2IDU5LjgwODIgMTkuOTA5MUM1OS40NTk4IDIwLjMwNjggNTkuMDA5IDIwLjYxNzQgNTguNDU2IDIwLjg0MDlDNTcuOTA2NyAyMS4wNjA2IDU3LjI3MjMgMjEuMTcwNSA1Ni41NTI2IDIxLjE3MDVaTTYzLjc5NjkgMjFMNjEuNDIxOSAxMi4yNzI3SDYzLjg3MDdMNjUuMjIzIDE4LjEzNjRINjUu'+
			'MzAyNkw2Ni43MTE2IDEyLjI3MjdINjkuMTE1MUw3MC41NDY5IDE4LjEwMjNINzAuNjIwN0w3MS45NTAzIDEyLjI3MjdINzQuMzkzNUw3Mi4wMjQxIDIxSDY5LjQ2MTZMNjcuOTYxNiAxNS41MTE0SDY3Ljg1MzdMNjYuMzUzNyAyMUg2My43OTY5WiIvPgo8L3N2Zz4K';
		me._svg_1310__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._svg_1310__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjMwIiB2aWV3Qm94PSIwIDAgMTEwIDMwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMTAiPgogPHJlY3QgZmlsbD0iI0FGNUUwMCIgaGVpZ2h0PSIzMCIgcng9IjE1IiB3aWR0aD0iMTEwIi8+CiA8cGF0aCBmaWxsPSJ3aGl0ZSIgZD0iTTM4LjM5NDkgOS4zNjM2NEw0MS4yMDc0IDE4LjIwNDVINDEuMzE1M0w0NC4xMzM1IDkuMzYzNjRINDYuODYwOEw0Mi44NDk0IDIxSDM5LjY3OUwzNS42NjE5IDkuMzYzNjRIMzguMzk0OVpNNDguMjE1OSAyMVYxMi4yNzI3SDUwLjYzNjRWMjFINDguMjE1OVpNNDkuNDMxOCAxMS4xND'+
			'c3QzQ5LjA3MiAxMS4xNDc3IDQ4Ljc2MzMgMTEuMDI4NCA0OC41MDU3IDEwLjc4OThDNDguMjUxOSAxMC41NDczIDQ4LjEyNSAxMC4yNTc2IDQ4LjEyNSA5LjkyMDQ1QzQ4LjEyNSA5LjU4NzEyIDQ4LjI1MTkgOS4zMDExNCA0OC41MDU3IDkuMDYyNUM0OC43NjMzIDguODIwMDggNDkuMDcyIDguNjk4ODYgNDkuNDMxOCA4LjY5ODg2QzQ5Ljc5MTcgOC42OTg4NiA1MC4wOTg1IDguODIwMDggNTAuMzUyMyA5LjA2MjVDNTAuNjA5OCA5LjMwMTE0IDUwLjczODYgOS41ODcxMiA1MC43Mzg2IDkuOTIwNDVDNTAuNzM4NiAxMC4yNTc2IDUwLjYwOTggMTAuNTQ3MyA1MC4zNTIzIDEwLjc4OThDNTAuMDk4'+
			'NSAxMS4wMjg0IDQ5Ljc5MTcgMTEuMTQ3NyA0OS40MzE4IDExLjE0NzdaTTU2LjU1MjYgMjEuMTcwNUM1NS42NTQ4IDIxLjE3MDUgNTQuODgyMSAyMC45ODg2IDU0LjIzNDQgMjAuNjI1QzUzLjU5MDQgMjAuMjU3NiA1My4wOTQyIDE5LjczODYgNTIuNzQ1NyAxOS4wNjgyQzUyLjM5NzMgMTguMzkzOSA1Mi4yMjMgMTcuNTk2NiA1Mi4yMjMgMTYuNjc2MUM1Mi4yMjMgMTUuNzc4NCA1Mi4zOTczIDE0Ljk5MDUgNTIuNzQ1NyAxNC4zMTI1QzUzLjA5NDIgMTMuNjM0NSA1My41ODQ4IDEzLjEwNjEgNTQuMjE3MyAxMi43MjczQzU0Ljg1MzcgMTIuMzQ4NSA1NS41OTk5IDEyLjE1OTEgNTYuNDU2IDEyLj'+
			'E1OTFDNTcuMDMxNyAxMi4xNTkxIDU3LjU2NzcgMTIuMjUxOSA1OC4wNjM5IDEyLjQzNzVDNTguNTYzOSAxMi42MTkzIDU4Ljk5OTUgMTIuODkzOSA1OS4zNzA3IDEzLjI2MTRDNTkuNzQ1NyAxMy42Mjg4IDYwLjAzNzQgMTQuMDkwOSA2MC4yNDU3IDE0LjY0NzdDNjAuNDU0MSAxNS4yMDA4IDYwLjU1ODIgMTUuODQ4NSA2MC41NTgyIDE2LjU5MDlWMTcuMjU1N0g1My4xODg5VjE1Ljc1NTdINTguMjc5OEM1OC4yNzk4IDE1LjQwNzIgNTguMjA0MSAxNS4wOTg1IDU4LjA1MjYgMTQuODI5NUM1Ny45MDEgMTQuNTYwNiA1Ny42OTA4IDE0LjM1MDQgNTcuNDIxOSAxNC4xOTg5QzU3LjE1NjcgMTQuMDQz'+
			'NiA1Ni44NDggMTMuOTY1OSA1Ni40OTU3IDEzLjk2NTlDNTYuMTI4MyAxMy45NjU5IDU1LjgwMjYgMTQuMDUxMSA1NS41MTg1IDE0LjIyMTZDNTUuMjM4MiAxNC4zODgzIDU1LjAxODUgMTQuNjEzNiA1NC44NTk0IDE0Ljg5NzdDNTQuNzAwMyAxNS4xNzggNTQuNjE4OCAxNS40OTA1IDU0LjYxNTEgMTUuODM1MlYxNy4yNjE0QzU0LjYxNTEgMTcuNjkzMiA1NC42OTQ2IDE4LjA2NjMgNTQuODUzNyAxOC4zODA3QzU1LjAxNjYgMTguNjk1MSA1NS4yNDU3IDE4LjkzNzUgNTUuNTQxMiAxOS4xMDhDNTUuODM2NiAxOS4yNzg0IDU2LjE4NyAxOS4zNjM2IDU2LjU5MjMgMTkuMzYzNkM1Ni44NjEzIDE5Lj'+
			'M2MzYgNTcuMTA3NSAxOS4zMjU4IDU3LjMzMSAxOS4yNUM1Ny41NTQ1IDE5LjE3NDIgNTcuNzQ1NyAxOS4wNjA2IDU3LjkwNDggMTguOTA5MUM1OC4wNjM5IDE4Ljc1NzYgNTguMTg1MSAxOC41NzIgNTguMjY4NSAxOC4zNTIzTDYwLjUwNzEgMTguNUM2MC4zOTM1IDE5LjAzNzkgNjAuMTYwNSAxOS41MDc2IDU5LjgwODIgMTkuOTA5MUM1OS40NTk4IDIwLjMwNjggNTkuMDA5IDIwLjYxNzQgNTguNDU2IDIwLjg0MDlDNTcuOTA2NyAyMS4wNjA2IDU3LjI3MjMgMjEuMTcwNSA1Ni41NTI2IDIxLjE3MDVaTTYzLjc5NjkgMjFMNjEuNDIxOSAxMi4yNzI3SDYzLjg3MDdMNjUuMjIzIDE4LjEzNjRINjUu'+
			'MzAyNkw2Ni43MTE2IDEyLjI3MjdINjkuMTE1MUw3MC41NDY5IDE4LjEwMjNINzAuNjIwN0w3MS45NTAzIDEyLjI3MjdINzQuMzkzNUw3Mi4wMjQxIDIxSDY5LjQ2MTZMNjcuOTYxNiAxNS41MTE0SDY3Ljg1MzdMNjYuMzUzNyAyMUg2My43OTY5WiIvPgo8L3N2Zz4K';
		me._svg_1310__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="Svg 13";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 23px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((23px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 90px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_1310.ggIsActive=function() {
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
		me._svg_1310.onclick=function (e) {
			if (me._svg_1310.isDragging()) return;
			player.moveTo("-86.15","-6.49","20.74","18.0000");
			var list=me.findElements("products_list",true);
			while(list.length>0) {
				var e=list.pop();
				e.style.transition='none';
				e.style.visibility='hidden';
				e.ggVisible=false;
			}
		}
		me._svg_1310.onmouseover=function (e) {
			me._svg_1310__img.style.visibility='hidden';
			me._svg_1310__imgo.style.visibility='inherit';
			me.elementMouseOver['svg_1310']=true;
		}
		me._svg_1310.onmouseout=function (e) {
			me._svg_1310__img.style.visibility='inherit';
			me._svg_1310__imgo.style.visibility='hidden';
			me.elementMouseOver['svg_1310']=false;
		}
		me._svg_1310.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['svg_1310']) {
				me._svg_1310__img.style.visibility='hidden';
				me._svg_1310__imgo.style.visibility='inherit';
				me.elementMouseOver['svg_1310']=true;
			}
		}
		me._svg_1310.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_4_21.appendChild(me._svg_1310);
		me._product_list_10418001091.appendChild(me._rectangle_4_21);
		me._scrollarea_1__content.appendChild(me._product_list_10418001091);
		el=me._product_list_sn702071=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._product_list_sn702071;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="product_list_sn70207";
		el.ggDx=-127;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle product_list";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #eeeeee;';
		hs+='border-radius : 5px;';
		hs+='cursor : default;';
		hs+='height : 300px;';
		hs+='left : calc(50% - ((200px + 2px) / 2) - 127px);';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 200px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 0%';
		me._product_list_sn702071.ggIsActive=function() {
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
		me._product_list_sn702071.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_121=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._image_121;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._image_121__img=document.createElement('img');
		els.className='ggskin ggskin_image_121';
		hs=basePath + 'images/image_121.png';
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
		el.ggId="Image 12";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 180px;';
		hs+='left : calc(50% - ((180px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 180px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_121.ggIsActive=function() {
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
		me._image_121.ggUpdatePosition=function (useTransition) {
		}
		me._product_list_sn702071.appendChild(me._image_121);
		el=me._text_6_21=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._text_6_21;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._text_6_21__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 6_2";
		el.ggDy=59;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(102,102,102,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 59px);';
		hs+='visibility : inherit;';
		hs+='width : 95%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+="text-overflow: ellipsis;";
		els.setAttribute('style',hs);
		me._text_6_21.ggUpdateText=function() {
			var params = [];
			var hs = player._("FILTR PALIWA SEPARATOR Z ODSTOJNIKIEM H-232mm fi-103mm 1-14 UNS CASE\/ CLAAS\nMOT. D2862\/\/ DAF 95XF\/ 105\/ CF75\/ CF IV\/ XF106 mot. PE\/ PR\/ PX-7\/ MX\/ MX-11\/\nMX-13\/ XF\/XE\/XM\/VF\/\/ DOOSAN mot. DL\/ DV", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_6_21.ggUpdateText();
		el.appendChild(els);
		me._text_6_21.ggIsActive=function() {
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
		me._text_6_21.ggUpdatePosition=function (useTransition) {
		}
		me._product_list_sn702071.appendChild(me._text_6_21);
		el=me._text_6_1_21=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._text_6_1_21;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._text_6_1_21__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 6_1_2";
		el.ggDy=82;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(0,0,0,1);';
		hs+='cursor : default;';
		hs+='height : 21px;';
		hs+='left : 7px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((21px + 0px) / 2) + 82px);';
		hs+='visibility : inherit;';
		hs+='width : 95%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='bottom: 0px;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+="text-overflow: ellipsis;";
		els.setAttribute('style',hs);
		me._text_6_1_21.ggUpdateText=function() {
			var params = [];
			var hs = player._("<div class=\"ggmarkdown\"><p><strong>$30-$50<\/strong> \/pieces<\/p>\n<div>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_6_1_21.ggUpdateText();
		el.appendChild(els);
		me._text_6_1_21.ggIsActive=function() {
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
		me._text_6_1_21.ggUpdatePosition=function (useTransition) {
		}
		me._product_list_sn702071.appendChild(me._text_6_1_21);
		el=me._text_6_1_1_1_11=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._text_6_1_1_1_11;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._text_6_1_1_1_11__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 6_1_1_1_1";
		el.ggDy=105;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(0,0,0,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 7px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 105px);';
		hs+='visibility : inherit;';
		hs+='width : 40%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='bottom: 0px;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+="text-overflow: ellipsis;";
		els.setAttribute('style',hs);
		me._text_6_1_1_1_11.ggUpdateText=function() {
			var params = [];
			var hs = player._("<div class=\"ggmarkdown\"><p>200 pieces<\/p>\n<div>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_6_1_1_1_11.ggUpdateText();
		el.appendChild(els);
		me._text_6_1_1_1_11.ggIsActive=function() {
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
		me._text_6_1_1_1_11.ggUpdatePosition=function (useTransition) {
		}
		me._product_list_sn702071.appendChild(me._text_6_1_1_1_11);
		el=me._text_6_1_1_21=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._text_6_1_1_21;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._text_6_1_1_21__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 6_1_1_2";
		el.ggDy=105;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(168,168,168,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 85px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 105px);';
		hs+='visibility : inherit;';
		hs+='width : 35%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='bottom: 0px;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+="text-overflow: ellipsis;";
		els.setAttribute('style',hs);
		me._text_6_1_1_21.ggUpdateText=function() {
			var params = [];
			var hs = player._("<div class=\"ggmarkdown\"><p>(MOQ)<\/p>\n<div>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_6_1_1_21.ggUpdateText();
		el.appendChild(els);
		me._text_6_1_1_21.ggIsActive=function() {
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
		me._text_6_1_1_21.ggUpdatePosition=function (useTransition) {
		}
		me._product_list_sn702071.appendChild(me._text_6_1_1_21);
		el=me._rectangle_4_11=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._rectangle_4_11;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="Rectangle 4_1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 5px;';
		hs+='cursor : default;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((95% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 95%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_4_11.ggIsActive=function() {
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
		me._rectangle_4_11.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_119=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._svg_119;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._svg_119__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjMwIiB2aWV3Qm94PSIwIDAgMTEwIDMwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMTAiPgogPHJlY3QgZmlsbD0iIzE5Mjg0NSIgaGVpZ2h0PSIzMCIgcng9IjE1IiB3aWR0aD0iMTEwIi8+CiA8cGF0aCBmaWxsPSJ3aGl0ZSIgZD0iTTIyLjAxMTQgMjFWOS4zNjM2NEgyNi42NzA1QzI3LjUyNjUgOS4zNjM2NCAyOC4yNDA1IDkuNDkwNTMgMjguODEyNSA5Ljc0NDMyQzI5LjM4NDUgOS45OTgxMSAyOS44MTQ0IDEwLjM1MDQgMzAuMTAyMyAxMC44MDExQzMwLjM5MDIgMTEuMjQ4MSAzMC41MzQxIDExLjc2MzMgMzAuNT'+
			'M0MSAxMi4zNDY2QzMwLjUzNDEgMTIuODAxMSAzMC40NDMyIDEzLjIwMDggMzAuMjYxNCAxMy41NDU1QzMwLjA3OTUgMTMuODg2NCAyOS44Mjk1IDE0LjE2NjcgMjkuNTExNCAxNC4zODY0QzI5LjE5NyAxNC42MDIzIDI4LjgzNzEgMTQuNzU1NyAyOC40MzE4IDE0Ljg0NjZWMTQuOTYwMkMyOC44NzUgMTQuOTc5MiAyOS4yODk4IDE1LjEwNDIgMjkuNjc2MSAxNS4zMzUyQzMwLjA2NjMgMTUuNTY2MyAzMC4zODI2IDE1Ljg5MDIgMzAuNjI1IDE2LjMwNjhDMzAuODY3NCAxNi43MTk3IDMwLjk4ODYgMTcuMjEyMSAzMC45ODg2IDE3Ljc4NDFDMzAuOTg4NiAxOC40MDE1IDMwLjgzNTIgMTguOTUyNyAz'+
			'MC41Mjg0IDE5LjQzNzVDMzAuMjI1NCAxOS45MTg2IDI5Ljc3NjUgMjAuMjk5MiAyOS4xODE4IDIwLjU3OTVDMjguNTg3MSAyMC44NTk4IDI3Ljg1NDIgMjEgMjYuOTgzIDIxSDIyLjAxMTRaTTI0LjQ3MTYgMTguOTg4NkgyNi40NzczQzI3LjE2MjkgMTguOTg4NiAyNy42NjI5IDE4Ljg1OCAyNy45NzczIDE4LjU5NjZDMjguMjkxNyAxOC4zMzE0IDI4LjQ0ODkgMTcuOTc5MiAyOC40NDg5IDE3LjUzOThDMjguNDQ4OSAxNy4yMTc4IDI4LjM3MTIgMTYuOTMzNyAyOC4yMTU5IDE2LjY4NzVDMjguMDYwNiAxNi40NDEzIDI3LjgzOSAxNi4yNDgxIDI3LjU1MTEgMTYuMTA4QzI3LjI2NyAxNS45Njc4ID'+
			'I2LjkyOCAxNS44OTc3IDI2LjUzNDEgMTUuODk3N0gyNC40NzE2VjE4Ljk4ODZaTTI0LjQ3MTYgMTQuMjMzSDI2LjI5NTVDMjYuNjMyNiAxNC4yMzMgMjYuOTMxOCAxNC4xNzQyIDI3LjE5MzIgMTQuMDU2OEMyNy40NTgzIDEzLjkzNTYgMjcuNjY2NyAxMy43NjUyIDI3LjgxODIgMTMuNTQ1NUMyNy45NzM1IDEzLjMyNTggMjguMDUxMSAxMy4wNjI1IDI4LjA1MTEgMTIuNzU1N0MyOC4wNTExIDEyLjMzNTIgMjcuOTAxNSAxMS45OTYyIDI3LjYwMjMgMTEuNzM4NkMyNy4zMDY4IDExLjQ4MTEgMjYuODg2NCAxMS4zNTIzIDI2LjM0MDkgMTEuMzUyM0gyNC40NzE2VjE0LjIzM1pNMzguMTQwNiAxNy4y'+
			'ODQxVjEyLjI3MjdINDAuNTYxMVYyMUgzOC4yMzcyVjE5LjQxNDhIMzguMTQ2M0MzNy45NDkzIDE5LjkyNjEgMzcuNjIxNyAyMC4zMzcxIDM3LjE2MzQgMjAuNjQ3N0MzNi43MDg4IDIwLjk1ODMgMzYuMTUzOSAyMS4xMTM2IDM1LjQ5ODYgMjEuMTEzNkMzNC45MTUyIDIxLjExMzYgMzQuNDAyIDIwLjk4MTEgMzMuOTU4OCAyMC43MTU5QzMzLjUxNTYgMjAuNDUwOCAzMy4xNjkgMjAuMDczOSAzMi45MTkgMTkuNTg1MkMzMi42NzI4IDE5LjA5NjYgMzIuNTQ3OCAxOC41MTE0IDMyLjU0NCAxNy44Mjk1VjEyLjI3MjdIMzQuOTY0NVYxNy4zOTc3QzM0Ljk2ODMgMTcuOTEyOSAzNS4xMDY1IDE4LjMyMD'+
			'EgMzUuMzc5MyAxOC42MTkzQzM1LjY1MiAxOC45MTg2IDM2LjAxNzUgMTkuMDY4MiAzNi40NzU5IDE5LjA2ODJDMzYuNzY3NSAxOS4wNjgyIDM3LjA0MDIgMTkuMDAxOSAzNy4yOTQgMTguODY5M0MzNy41NDc4IDE4LjczMyAzNy43NTI0IDE4LjUzMjIgMzcuOTA3NyAxOC4yNjdDMzguMDY2OCAxOC4wMDE5IDM4LjE0NDQgMTcuNjc0MiAzOC4xNDA2IDE3LjI4NDFaTTQzLjk5MTUgMjQuMjcyN0M0My42ODQ3IDI0LjI3MjcgNDMuMzk2OCAyNC4yNDgxIDQzLjEyNzggMjQuMTk4OUM0Mi44NjI3IDI0LjE1MzQgNDIuNjQzIDI0LjA5NDcgNDIuNDY4OCAyNC4wMjI3TDQzLjAxNDIgMjIuMjE1OUM0My4y'+
			'OTgzIDIyLjMwMyA0My41NTQgMjIuMzUwNCA0My43ODEyIDIyLjM1OEM0NC4wMTIzIDIyLjM2NTUgNDQuMjExMiAyMi4zMTI1IDQ0LjM3NzggMjIuMTk4OUM0NC41NDgzIDIyLjA4NTIgNDQuNjg2NiAyMS44OTIgNDQuNzkyNiAyMS42MTkzTDQ0LjkzNDcgMjEuMjVMNDEuODA0IDEyLjI3MjdINDQuMzQ5NEw0Ni4xNTYyIDE4LjY4MThINDYuMjQ3Mkw0OC4wNzEgMTIuMjcyN0g1MC42MzM1TDQ3LjI0MTUgMjEuOTQzMkM0Ny4wNzg2IDIyLjQxMjkgNDYuODU3IDIyLjgyMiA0Ni41NzY3IDIzLjE3MDVDNDYuMzAwMiAyMy41MjI3IDQ1Ljk0OTggMjMuNzkzNiA0NS41MjU2IDIzLjk4M0M0NS4xMDEzID'+
			'I0LjE3NjEgNDQuNTkgMjQuMjcyNyA0My45OTE1IDI0LjI3MjdaTTY1LjM1MzcgOS4zNjM2NFYyMUg2My4yMjg3TDU4LjE2NjIgMTMuNjc2MUg1OC4wODFWMjFINTUuNjIwN1Y5LjM2MzY0SDU3Ljc3OThMNjIuODAyNiAxNi42ODE4SDYyLjkwNDhWOS4zNjM2NEg2NS4zNTM3Wk03MS4yODQxIDIxLjE3MDVDNzAuNDAxNSAyMS4xNzA1IDY5LjYzODMgMjAuOTgzIDY4Ljk5NDMgMjAuNjA4QzY4LjM1NDIgMjAuMjI5MiA2Ny44NTk4IDE5LjcwMjcgNjcuNTExNCAxOS4wMjg0QzY3LjE2MjkgMTguMzUwNCA2Ni45ODg2IDE3LjU2NDQgNjYuOTg4NiAxNi42NzA1QzY2Ljk4ODYgMTUuNzY4OSA2Ny4xNjI5'+
			'IDE0Ljk4MTEgNjcuNTExNCAxNC4zMDY4QzY3Ljg1OTggMTMuNjI4OCA2OC4zNTQyIDEzLjEwMjMgNjguOTk0MyAxMi43MjczQzY5LjYzODMgMTIuMzQ4NSA3MC40MDE1IDEyLjE1OTEgNzEuMjg0MSAxMi4xNTkxQzcyLjE2NjcgMTIuMTU5MSA3Mi45MjggMTIuMzQ4NSA3My41NjgyIDEyLjcyNzNDNzQuMjEyMSAxMy4xMDIzIDc0LjcwODMgMTMuNjI4OCA3NS4wNTY4IDE0LjMwNjhDNzUuNDA1MyAxNC45ODExIDc1LjU3OTUgMTUuNzY4OSA3NS41Nzk1IDE2LjY3MDVDNzUuNTc5NSAxNy41NjQ0IDc1LjQwNTMgMTguMzUwNCA3NS4wNTY4IDE5LjAyODRDNzQuNzA4MyAxOS43MDI3IDc0LjIxMjEgMj'+
			'AuMjI5MiA3My41NjgyIDIwLjYwOEM3Mi45MjggMjAuOTgzIDcyLjE2NjcgMjEuMTcwNSA3MS4yODQxIDIxLjE3MDVaTTcxLjI5NTUgMTkuMjk1NUM3MS42OTcgMTkuMjk1NSA3Mi4wMzIyIDE5LjE4MTggNzIuMzAxMSAxOC45NTQ1QzcyLjU3MDEgMTguNzIzNSA3Mi43NzI3IDE4LjQwOTEgNzIuOTA5MSAxOC4wMTE0QzczLjA0OTIgMTcuNjEzNiA3My4xMTkzIDE3LjE2MSA3My4xMTkzIDE2LjY1MzRDNzMuMTE5MyAxNi4xNDU4IDczLjA0OTIgMTUuNjkzMiA3Mi45MDkxIDE1LjI5NTVDNzIuNzcyNyAxNC44OTc3IDcyLjU3MDEgMTQuNTgzMyA3Mi4zMDExIDE0LjM1MjNDNzIuMDMyMiAxNC4xMjEy'+
			'IDcxLjY5NyAxNC4wMDU3IDcxLjI5NTUgMTQuMDA1N0M3MC44OTAyIDE0LjAwNTcgNzAuNTQ5MiAxNC4xMjEyIDcwLjI3MjcgMTQuMzUyM0M3MCAxNC41ODMzIDY5Ljc5MzYgMTQuODk3NyA2OS42NTM0IDE1LjI5NTVDNjkuNTE3IDE1LjY5MzIgNjkuNDQ4OSAxNi4xNDU4IDY5LjQ0ODkgMTYuNjUzNEM2OS40NDg5IDE3LjE2MSA2OS41MTcgMTcuNjEzNiA2OS42NTM0IDE4LjAxMTRDNjkuNzkzNiAxOC40MDkxIDcwIDE4LjcyMzUgNzAuMjcyNyAxOC45NTQ1QzcwLjU0OTIgMTkuMTgxOCA3MC44OTAyIDE5LjI5NTUgNzEuMjk1NSAxOS4yOTU1Wk03OC42NTYyIDIxTDc2LjI4MTIgMTIuMjcyN0g3OC'+
			'43MzAxTDgwLjA4MjQgMTguMTM2NEg4MC4xNjE5TDgxLjU3MSAxMi4yNzI3SDgzLjk3NDRMODUuNDA2MiAxOC4xMDIzSDg1LjQ4MDFMODYuODA5NyAxMi4yNzI3SDg5LjI1MjhMODYuODgzNSAyMUg4NC4zMjFMODIuODIxIDE1LjUxMTRIODIuNzEzMUw4MS4yMTMxIDIxSDc4LjY1NjJaIi8+Cjwvc3ZnPgo=';
		me._svg_119__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._svg_119__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjMwIiB2aWV3Qm94PSIwIDAgMTEwIDMwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMTAiPgogPHJlY3QgZmlsbD0iI0QzMzQzNCIgaGVpZ2h0PSIzMCIgcng9IjE1IiB3aWR0aD0iMTEwIi8+CiA8cGF0aCBmaWxsPSJ3aGl0ZSIgZD0iTTIyLjAxMTQgMjFWOS4zNjM2NEgyNi42NzA1QzI3LjUyNjUgOS4zNjM2NCAyOC4yNDA1IDkuNDkwNTMgMjguODEyNSA5Ljc0NDMyQzI5LjM4NDUgOS45OTgxMSAyOS44MTQ0IDEwLjM1MDQgMzAuMTAyMyAxMC44MDExQzMwLjM5MDIgMTEuMjQ4MSAzMC41MzQxIDExLjc2MzMgMzAuNT'+
			'M0MSAxMi4zNDY2QzMwLjUzNDEgMTIuODAxMSAzMC40NDMyIDEzLjIwMDggMzAuMjYxNCAxMy41NDU1QzMwLjA3OTUgMTMuODg2NCAyOS44Mjk1IDE0LjE2NjcgMjkuNTExNCAxNC4zODY0QzI5LjE5NyAxNC42MDIzIDI4LjgzNzEgMTQuNzU1NyAyOC40MzE4IDE0Ljg0NjZWMTQuOTYwMkMyOC44NzUgMTQuOTc5MiAyOS4yODk4IDE1LjEwNDIgMjkuNjc2MSAxNS4zMzUyQzMwLjA2NjMgMTUuNTY2MyAzMC4zODI2IDE1Ljg5MDIgMzAuNjI1IDE2LjMwNjhDMzAuODY3NCAxNi43MTk3IDMwLjk4ODYgMTcuMjEyMSAzMC45ODg2IDE3Ljc4NDFDMzAuOTg4NiAxOC40MDE1IDMwLjgzNTIgMTguOTUyNyAz'+
			'MC41Mjg0IDE5LjQzNzVDMzAuMjI1NCAxOS45MTg2IDI5Ljc3NjUgMjAuMjk5MiAyOS4xODE4IDIwLjU3OTVDMjguNTg3MSAyMC44NTk4IDI3Ljg1NDIgMjEgMjYuOTgzIDIxSDIyLjAxMTRaTTI0LjQ3MTYgMTguOTg4NkgyNi40NzczQzI3LjE2MjkgMTguOTg4NiAyNy42NjI5IDE4Ljg1OCAyNy45NzczIDE4LjU5NjZDMjguMjkxNyAxOC4zMzE0IDI4LjQ0ODkgMTcuOTc5MiAyOC40NDg5IDE3LjUzOThDMjguNDQ4OSAxNy4yMTc4IDI4LjM3MTIgMTYuOTMzNyAyOC4yMTU5IDE2LjY4NzVDMjguMDYwNiAxNi40NDEzIDI3LjgzOSAxNi4yNDgxIDI3LjU1MTEgMTYuMTA4QzI3LjI2NyAxNS45Njc4ID'+
			'I2LjkyOCAxNS44OTc3IDI2LjUzNDEgMTUuODk3N0gyNC40NzE2VjE4Ljk4ODZaTTI0LjQ3MTYgMTQuMjMzSDI2LjI5NTVDMjYuNjMyNiAxNC4yMzMgMjYuOTMxOCAxNC4xNzQyIDI3LjE5MzIgMTQuMDU2OEMyNy40NTgzIDEzLjkzNTYgMjcuNjY2NyAxMy43NjUyIDI3LjgxODIgMTMuNTQ1NUMyNy45NzM1IDEzLjMyNTggMjguMDUxMSAxMy4wNjI1IDI4LjA1MTEgMTIuNzU1N0MyOC4wNTExIDEyLjMzNTIgMjcuOTAxNSAxMS45OTYyIDI3LjYwMjMgMTEuNzM4NkMyNy4zMDY4IDExLjQ4MTEgMjYuODg2NCAxMS4zNTIzIDI2LjM0MDkgMTEuMzUyM0gyNC40NzE2VjE0LjIzM1pNMzguMTQwNiAxNy4y'+
			'ODQxVjEyLjI3MjdINDAuNTYxMVYyMUgzOC4yMzcyVjE5LjQxNDhIMzguMTQ2M0MzNy45NDkzIDE5LjkyNjEgMzcuNjIxNyAyMC4zMzcxIDM3LjE2MzQgMjAuNjQ3N0MzNi43MDg4IDIwLjk1ODMgMzYuMTUzOSAyMS4xMTM2IDM1LjQ5ODYgMjEuMTEzNkMzNC45MTUyIDIxLjExMzYgMzQuNDAyIDIwLjk4MTEgMzMuOTU4OCAyMC43MTU5QzMzLjUxNTYgMjAuNDUwOCAzMy4xNjkgMjAuMDczOSAzMi45MTkgMTkuNTg1MkMzMi42NzI4IDE5LjA5NjYgMzIuNTQ3OCAxOC41MTE0IDMyLjU0NCAxNy44Mjk1VjEyLjI3MjdIMzQuOTY0NVYxNy4zOTc3QzM0Ljk2ODMgMTcuOTEyOSAzNS4xMDY1IDE4LjMyMD'+
			'EgMzUuMzc5MyAxOC42MTkzQzM1LjY1MiAxOC45MTg2IDM2LjAxNzUgMTkuMDY4MiAzNi40NzU5IDE5LjA2ODJDMzYuNzY3NSAxOS4wNjgyIDM3LjA0MDIgMTkuMDAxOSAzNy4yOTQgMTguODY5M0MzNy41NDc4IDE4LjczMyAzNy43NTI0IDE4LjUzMjIgMzcuOTA3NyAxOC4yNjdDMzguMDY2OCAxOC4wMDE5IDM4LjE0NDQgMTcuNjc0MiAzOC4xNDA2IDE3LjI4NDFaTTQzLjk5MTUgMjQuMjcyN0M0My42ODQ3IDI0LjI3MjcgNDMuMzk2OCAyNC4yNDgxIDQzLjEyNzggMjQuMTk4OUM0Mi44NjI3IDI0LjE1MzQgNDIuNjQzIDI0LjA5NDcgNDIuNDY4OCAyNC4wMjI3TDQzLjAxNDIgMjIuMjE1OUM0My4y'+
			'OTgzIDIyLjMwMyA0My41NTQgMjIuMzUwNCA0My43ODEyIDIyLjM1OEM0NC4wMTIzIDIyLjM2NTUgNDQuMjExMiAyMi4zMTI1IDQ0LjM3NzggMjIuMTk4OUM0NC41NDgzIDIyLjA4NTIgNDQuNjg2NiAyMS44OTIgNDQuNzkyNiAyMS42MTkzTDQ0LjkzNDcgMjEuMjVMNDEuODA0IDEyLjI3MjdINDQuMzQ5NEw0Ni4xNTYyIDE4LjY4MThINDYuMjQ3Mkw0OC4wNzEgMTIuMjcyN0g1MC42MzM1TDQ3LjI0MTUgMjEuOTQzMkM0Ny4wNzg2IDIyLjQxMjkgNDYuODU3IDIyLjgyMiA0Ni41NzY3IDIzLjE3MDVDNDYuMzAwMiAyMy41MjI3IDQ1Ljk0OTggMjMuNzkzNiA0NS41MjU2IDIzLjk4M0M0NS4xMDEzID'+
			'I0LjE3NjEgNDQuNTkgMjQuMjcyNyA0My45OTE1IDI0LjI3MjdaTTY1LjM1MzcgOS4zNjM2NFYyMUg2My4yMjg3TDU4LjE2NjIgMTMuNjc2MUg1OC4wODFWMjFINTUuNjIwN1Y5LjM2MzY0SDU3Ljc3OThMNjIuODAyNiAxNi42ODE4SDYyLjkwNDhWOS4zNjM2NEg2NS4zNTM3Wk03MS4yODQxIDIxLjE3MDVDNzAuNDAxNSAyMS4xNzA1IDY5LjYzODMgMjAuOTgzIDY4Ljk5NDMgMjAuNjA4QzY4LjM1NDIgMjAuMjI5MiA2Ny44NTk4IDE5LjcwMjcgNjcuNTExNCAxOS4wMjg0QzY3LjE2MjkgMTguMzUwNCA2Ni45ODg2IDE3LjU2NDQgNjYuOTg4NiAxNi42NzA1QzY2Ljk4ODYgMTUuNzY4OSA2Ny4xNjI5'+
			'IDE0Ljk4MTEgNjcuNTExNCAxNC4zMDY4QzY3Ljg1OTggMTMuNjI4OCA2OC4zNTQyIDEzLjEwMjMgNjguOTk0MyAxMi43MjczQzY5LjYzODMgMTIuMzQ4NSA3MC40MDE1IDEyLjE1OTEgNzEuMjg0MSAxMi4xNTkxQzcyLjE2NjcgMTIuMTU5MSA3Mi45MjggMTIuMzQ4NSA3My41NjgyIDEyLjcyNzNDNzQuMjEyMSAxMy4xMDIzIDc0LjcwODMgMTMuNjI4OCA3NS4wNTY4IDE0LjMwNjhDNzUuNDA1MyAxNC45ODExIDc1LjU3OTUgMTUuNzY4OSA3NS41Nzk1IDE2LjY3MDVDNzUuNTc5NSAxNy41NjQ0IDc1LjQwNTMgMTguMzUwNCA3NS4wNTY4IDE5LjAyODRDNzQuNzA4MyAxOS43MDI3IDc0LjIxMjEgMj'+
			'AuMjI5MiA3My41NjgyIDIwLjYwOEM3Mi45MjggMjAuOTgzIDcyLjE2NjcgMjEuMTcwNSA3MS4yODQxIDIxLjE3MDVaTTcxLjI5NTUgMTkuMjk1NUM3MS42OTcgMTkuMjk1NSA3Mi4wMzIyIDE5LjE4MTggNzIuMzAxMSAxOC45NTQ1QzcyLjU3MDEgMTguNzIzNSA3Mi43NzI3IDE4LjQwOTEgNzIuOTA5MSAxOC4wMTE0QzczLjA0OTIgMTcuNjEzNiA3My4xMTkzIDE3LjE2MSA3My4xMTkzIDE2LjY1MzRDNzMuMTE5MyAxNi4xNDU4IDczLjA0OTIgMTUuNjkzMiA3Mi45MDkxIDE1LjI5NTVDNzIuNzcyNyAxNC44OTc3IDcyLjU3MDEgMTQuNTgzMyA3Mi4zMDExIDE0LjM1MjNDNzIuMDMyMiAxNC4xMjEy'+
			'IDcxLjY5NyAxNC4wMDU3IDcxLjI5NTUgMTQuMDA1N0M3MC44OTAyIDE0LjAwNTcgNzAuNTQ5MiAxNC4xMjEyIDcwLjI3MjcgMTQuMzUyM0M3MCAxNC41ODMzIDY5Ljc5MzYgMTQuODk3NyA2OS42NTM0IDE1LjI5NTVDNjkuNTE3IDE1LjY5MzIgNjkuNDQ4OSAxNi4xNDU4IDY5LjQ0ODkgMTYuNjUzNEM2OS40NDg5IDE3LjE2MSA2OS41MTcgMTcuNjEzNiA2OS42NTM0IDE4LjAxMTRDNjkuNzkzNiAxOC40MDkxIDcwIDE4LjcyMzUgNzAuMjcyNyAxOC45NTQ1QzcwLjU0OTIgMTkuMTgxOCA3MC44OTAyIDE5LjI5NTUgNzEuMjk1NSAxOS4yOTU1Wk03OC42NTYyIDIxTDc2LjI4MTIgMTIuMjcyN0g3OC'+
			'43MzAxTDgwLjA4MjQgMTguMTM2NEg4MC4xNjE5TDgxLjU3MSAxMi4yNzI3SDgzLjk3NDRMODUuNDA2MiAxOC4xMDIzSDg1LjQ4MDFMODYuODA5NyAxMi4yNzI3SDg5LjI1MjhMODYuODgzNSAyMUg4NC4zMjFMODIuODIxIDE1LjUxMTRIODIuNzEzMUw4MS4yMTMxIDIxSDc4LjY1NjJaIi8+Cjwvc3ZnPgo=';
		me._svg_119__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="Svg 11";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 23px;';
		hs+='position : absolute;';
		hs+='right : 5px;';
		hs+='top : calc(50% - ((23px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 90px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_119.ggIsActive=function() {
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
		me._svg_119.onclick=function (e) {
			if (me._svg_119.isDragging()) return;
			player.openUrl("https:\/\/autos.com.pl\/pl\/produkt\/filtr-paliwa-separator-unitruck-ut6012b\/132406","_blank");
			var list=me.findElements("products_list",true);
			while(list.length>0) {
				var e=list.pop();
				e.style.transition='none';
				e.style.visibility='hidden';
				e.ggVisible=false;
			}
		}
		me._svg_119.onmouseover=function (e) {
			me._svg_119__img.style.visibility='hidden';
			me._svg_119__imgo.style.visibility='inherit';
			me.elementMouseOver['svg_119']=true;
		}
		me._svg_119.onmouseout=function (e) {
			me._svg_119__img.style.visibility='inherit';
			me._svg_119__imgo.style.visibility='hidden';
			me.elementMouseOver['svg_119']=false;
		}
		me._svg_119.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['svg_119']) {
				me._svg_119__img.style.visibility='hidden';
				me._svg_119__imgo.style.visibility='inherit';
				me.elementMouseOver['svg_119']=true;
			}
		}
		me._svg_119.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_4_11.appendChild(me._svg_119);
		el=me._svg_139=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._svg_139;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._svg_139__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjMwIiB2aWV3Qm94PSIwIDAgMTEwIDMwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMTAiPgogPHJlY3QgZmlsbD0iI0Y2OTIxRSIgaGVpZ2h0PSIzMCIgcng9IjE1IiB3aWR0aD0iMTEwIi8+CiA8cGF0aCBmaWxsPSJ3aGl0ZSIgZD0iTTM4LjM5NDkgOS4zNjM2NEw0MS4yMDc0IDE4LjIwNDVINDEuMzE1M0w0NC4xMzM1IDkuMzYzNjRINDYuODYwOEw0Mi44NDk0IDIxSDM5LjY3OUwzNS42NjE5IDkuMzYzNjRIMzguMzk0OVpNNDguMjE1OSAyMVYxMi4yNzI3SDUwLjYzNjRWMjFINDguMjE1OVpNNDkuNDMxOCAxMS4xND'+
			'c3QzQ5LjA3MiAxMS4xNDc3IDQ4Ljc2MzMgMTEuMDI4NCA0OC41MDU3IDEwLjc4OThDNDguMjUxOSAxMC41NDczIDQ4LjEyNSAxMC4yNTc2IDQ4LjEyNSA5LjkyMDQ1QzQ4LjEyNSA5LjU4NzEyIDQ4LjI1MTkgOS4zMDExNCA0OC41MDU3IDkuMDYyNUM0OC43NjMzIDguODIwMDggNDkuMDcyIDguNjk4ODYgNDkuNDMxOCA4LjY5ODg2QzQ5Ljc5MTcgOC42OTg4NiA1MC4wOTg1IDguODIwMDggNTAuMzUyMyA5LjA2MjVDNTAuNjA5OCA5LjMwMTE0IDUwLjczODYgOS41ODcxMiA1MC43Mzg2IDkuOTIwNDVDNTAuNzM4NiAxMC4yNTc2IDUwLjYwOTggMTAuNTQ3MyA1MC4zNTIzIDEwLjc4OThDNTAuMDk4'+
			'NSAxMS4wMjg0IDQ5Ljc5MTcgMTEuMTQ3NyA0OS40MzE4IDExLjE0NzdaTTU2LjU1MjYgMjEuMTcwNUM1NS42NTQ4IDIxLjE3MDUgNTQuODgyMSAyMC45ODg2IDU0LjIzNDQgMjAuNjI1QzUzLjU5MDQgMjAuMjU3NiA1My4wOTQyIDE5LjczODYgNTIuNzQ1NyAxOS4wNjgyQzUyLjM5NzMgMTguMzkzOSA1Mi4yMjMgMTcuNTk2NiA1Mi4yMjMgMTYuNjc2MUM1Mi4yMjMgMTUuNzc4NCA1Mi4zOTczIDE0Ljk5MDUgNTIuNzQ1NyAxNC4zMTI1QzUzLjA5NDIgMTMuNjM0NSA1My41ODQ4IDEzLjEwNjEgNTQuMjE3MyAxMi43MjczQzU0Ljg1MzcgMTIuMzQ4NSA1NS41OTk5IDEyLjE1OTEgNTYuNDU2IDEyLj'+
			'E1OTFDNTcuMDMxNyAxMi4xNTkxIDU3LjU2NzcgMTIuMjUxOSA1OC4wNjM5IDEyLjQzNzVDNTguNTYzOSAxMi42MTkzIDU4Ljk5OTUgMTIuODkzOSA1OS4zNzA3IDEzLjI2MTRDNTkuNzQ1NyAxMy42Mjg4IDYwLjAzNzQgMTQuMDkwOSA2MC4yNDU3IDE0LjY0NzdDNjAuNDU0MSAxNS4yMDA4IDYwLjU1ODIgMTUuODQ4NSA2MC41NTgyIDE2LjU5MDlWMTcuMjU1N0g1My4xODg5VjE1Ljc1NTdINTguMjc5OEM1OC4yNzk4IDE1LjQwNzIgNTguMjA0MSAxNS4wOTg1IDU4LjA1MjYgMTQuODI5NUM1Ny45MDEgMTQuNTYwNiA1Ny42OTA4IDE0LjM1MDQgNTcuNDIxOSAxNC4xOTg5QzU3LjE1NjcgMTQuMDQz'+
			'NiA1Ni44NDggMTMuOTY1OSA1Ni40OTU3IDEzLjk2NTlDNTYuMTI4MyAxMy45NjU5IDU1LjgwMjYgMTQuMDUxMSA1NS41MTg1IDE0LjIyMTZDNTUuMjM4MiAxNC4zODgzIDU1LjAxODUgMTQuNjEzNiA1NC44NTk0IDE0Ljg5NzdDNTQuNzAwMyAxNS4xNzggNTQuNjE4OCAxNS40OTA1IDU0LjYxNTEgMTUuODM1MlYxNy4yNjE0QzU0LjYxNTEgMTcuNjkzMiA1NC42OTQ2IDE4LjA2NjMgNTQuODUzNyAxOC4zODA3QzU1LjAxNjYgMTguNjk1MSA1NS4yNDU3IDE4LjkzNzUgNTUuNTQxMiAxOS4xMDhDNTUuODM2NiAxOS4yNzg0IDU2LjE4NyAxOS4zNjM2IDU2LjU5MjMgMTkuMzYzNkM1Ni44NjEzIDE5Lj'+
			'M2MzYgNTcuMTA3NSAxOS4zMjU4IDU3LjMzMSAxOS4yNUM1Ny41NTQ1IDE5LjE3NDIgNTcuNzQ1NyAxOS4wNjA2IDU3LjkwNDggMTguOTA5MUM1OC4wNjM5IDE4Ljc1NzYgNTguMTg1MSAxOC41NzIgNTguMjY4NSAxOC4zNTIzTDYwLjUwNzEgMTguNUM2MC4zOTM1IDE5LjAzNzkgNjAuMTYwNSAxOS41MDc2IDU5LjgwODIgMTkuOTA5MUM1OS40NTk4IDIwLjMwNjggNTkuMDA5IDIwLjYxNzQgNTguNDU2IDIwLjg0MDlDNTcuOTA2NyAyMS4wNjA2IDU3LjI3MjMgMjEuMTcwNSA1Ni41NTI2IDIxLjE3MDVaTTYzLjc5NjkgMjFMNjEuNDIxOSAxMi4yNzI3SDYzLjg3MDdMNjUuMjIzIDE4LjEzNjRINjUu'+
			'MzAyNkw2Ni43MTE2IDEyLjI3MjdINjkuMTE1MUw3MC41NDY5IDE4LjEwMjNINzAuNjIwN0w3MS45NTAzIDEyLjI3MjdINzQuMzkzNUw3Mi4wMjQxIDIxSDY5LjQ2MTZMNjcuOTYxNiAxNS41MTE0SDY3Ljg1MzdMNjYuMzUzNyAyMUg2My43OTY5WiIvPgo8L3N2Zz4K';
		me._svg_139__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._svg_139__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjMwIiB2aWV3Qm94PSIwIDAgMTEwIDMwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMTAiPgogPHJlY3QgZmlsbD0iI0FGNUUwMCIgaGVpZ2h0PSIzMCIgcng9IjE1IiB3aWR0aD0iMTEwIi8+CiA8cGF0aCBmaWxsPSJ3aGl0ZSIgZD0iTTM4LjM5NDkgOS4zNjM2NEw0MS4yMDc0IDE4LjIwNDVINDEuMzE1M0w0NC4xMzM1IDkuMzYzNjRINDYuODYwOEw0Mi44NDk0IDIxSDM5LjY3OUwzNS42NjE5IDkuMzYzNjRIMzguMzk0OVpNNDguMjE1OSAyMVYxMi4yNzI3SDUwLjYzNjRWMjFINDguMjE1OVpNNDkuNDMxOCAxMS4xND'+
			'c3QzQ5LjA3MiAxMS4xNDc3IDQ4Ljc2MzMgMTEuMDI4NCA0OC41MDU3IDEwLjc4OThDNDguMjUxOSAxMC41NDczIDQ4LjEyNSAxMC4yNTc2IDQ4LjEyNSA5LjkyMDQ1QzQ4LjEyNSA5LjU4NzEyIDQ4LjI1MTkgOS4zMDExNCA0OC41MDU3IDkuMDYyNUM0OC43NjMzIDguODIwMDggNDkuMDcyIDguNjk4ODYgNDkuNDMxOCA4LjY5ODg2QzQ5Ljc5MTcgOC42OTg4NiA1MC4wOTg1IDguODIwMDggNTAuMzUyMyA5LjA2MjVDNTAuNjA5OCA5LjMwMTE0IDUwLjczODYgOS41ODcxMiA1MC43Mzg2IDkuOTIwNDVDNTAuNzM4NiAxMC4yNTc2IDUwLjYwOTggMTAuNTQ3MyA1MC4zNTIzIDEwLjc4OThDNTAuMDk4'+
			'NSAxMS4wMjg0IDQ5Ljc5MTcgMTEuMTQ3NyA0OS40MzE4IDExLjE0NzdaTTU2LjU1MjYgMjEuMTcwNUM1NS42NTQ4IDIxLjE3MDUgNTQuODgyMSAyMC45ODg2IDU0LjIzNDQgMjAuNjI1QzUzLjU5MDQgMjAuMjU3NiA1My4wOTQyIDE5LjczODYgNTIuNzQ1NyAxOS4wNjgyQzUyLjM5NzMgMTguMzkzOSA1Mi4yMjMgMTcuNTk2NiA1Mi4yMjMgMTYuNjc2MUM1Mi4yMjMgMTUuNzc4NCA1Mi4zOTczIDE0Ljk5MDUgNTIuNzQ1NyAxNC4zMTI1QzUzLjA5NDIgMTMuNjM0NSA1My41ODQ4IDEzLjEwNjEgNTQuMjE3MyAxMi43MjczQzU0Ljg1MzcgMTIuMzQ4NSA1NS41OTk5IDEyLjE1OTEgNTYuNDU2IDEyLj'+
			'E1OTFDNTcuMDMxNyAxMi4xNTkxIDU3LjU2NzcgMTIuMjUxOSA1OC4wNjM5IDEyLjQzNzVDNTguNTYzOSAxMi42MTkzIDU4Ljk5OTUgMTIuODkzOSA1OS4zNzA3IDEzLjI2MTRDNTkuNzQ1NyAxMy42Mjg4IDYwLjAzNzQgMTQuMDkwOSA2MC4yNDU3IDE0LjY0NzdDNjAuNDU0MSAxNS4yMDA4IDYwLjU1ODIgMTUuODQ4NSA2MC41NTgyIDE2LjU5MDlWMTcuMjU1N0g1My4xODg5VjE1Ljc1NTdINTguMjc5OEM1OC4yNzk4IDE1LjQwNzIgNTguMjA0MSAxNS4wOTg1IDU4LjA1MjYgMTQuODI5NUM1Ny45MDEgMTQuNTYwNiA1Ny42OTA4IDE0LjM1MDQgNTcuNDIxOSAxNC4xOTg5QzU3LjE1NjcgMTQuMDQz'+
			'NiA1Ni44NDggMTMuOTY1OSA1Ni40OTU3IDEzLjk2NTlDNTYuMTI4MyAxMy45NjU5IDU1LjgwMjYgMTQuMDUxMSA1NS41MTg1IDE0LjIyMTZDNTUuMjM4MiAxNC4zODgzIDU1LjAxODUgMTQuNjEzNiA1NC44NTk0IDE0Ljg5NzdDNTQuNzAwMyAxNS4xNzggNTQuNjE4OCAxNS40OTA1IDU0LjYxNTEgMTUuODM1MlYxNy4yNjE0QzU0LjYxNTEgMTcuNjkzMiA1NC42OTQ2IDE4LjA2NjMgNTQuODUzNyAxOC4zODA3QzU1LjAxNjYgMTguNjk1MSA1NS4yNDU3IDE4LjkzNzUgNTUuNTQxMiAxOS4xMDhDNTUuODM2NiAxOS4yNzg0IDU2LjE4NyAxOS4zNjM2IDU2LjU5MjMgMTkuMzYzNkM1Ni44NjEzIDE5Lj'+
			'M2MzYgNTcuMTA3NSAxOS4zMjU4IDU3LjMzMSAxOS4yNUM1Ny41NTQ1IDE5LjE3NDIgNTcuNzQ1NyAxOS4wNjA2IDU3LjkwNDggMTguOTA5MUM1OC4wNjM5IDE4Ljc1NzYgNTguMTg1MSAxOC41NzIgNTguMjY4NSAxOC4zNTIzTDYwLjUwNzEgMTguNUM2MC4zOTM1IDE5LjAzNzkgNjAuMTYwNSAxOS41MDc2IDU5LjgwODIgMTkuOTA5MUM1OS40NTk4IDIwLjMwNjggNTkuMDA5IDIwLjYxNzQgNTguNDU2IDIwLjg0MDlDNTcuOTA2NyAyMS4wNjA2IDU3LjI3MjMgMjEuMTcwNSA1Ni41NTI2IDIxLjE3MDVaTTYzLjc5NjkgMjFMNjEuNDIxOSAxMi4yNzI3SDYzLjg3MDdMNjUuMjIzIDE4LjEzNjRINjUu'+
			'MzAyNkw2Ni43MTE2IDEyLjI3MjdINjkuMTE1MUw3MC41NDY5IDE4LjEwMjNINzAuNjIwN0w3MS45NTAzIDEyLjI3MjdINzQuMzkzNUw3Mi4wMjQxIDIxSDY5LjQ2MTZMNjcuOTYxNiAxNS41MTE0SDY3Ljg1MzdMNjYuMzUzNyAyMUg2My43OTY5WiIvPgo8L3N2Zz4K';
		me._svg_139__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="Svg 13";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 23px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((23px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 90px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_139.ggIsActive=function() {
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
		me._svg_139.onclick=function (e) {
			if (me._svg_139.isDragging()) return;
			player.moveTo("-99.97","3.7","20.74","18.0000");
			var list=me.findElements("products_list",true);
			while(list.length>0) {
				var e=list.pop();
				e.style.transition='none';
				e.style.visibility='hidden';
				e.ggVisible=false;
			}
		}
		me._svg_139.onmouseover=function (e) {
			me._svg_139__img.style.visibility='hidden';
			me._svg_139__imgo.style.visibility='inherit';
			me.elementMouseOver['svg_139']=true;
		}
		me._svg_139.onmouseout=function (e) {
			me._svg_139__img.style.visibility='inherit';
			me._svg_139__imgo.style.visibility='hidden';
			me.elementMouseOver['svg_139']=false;
		}
		me._svg_139.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['svg_139']) {
				me._svg_139__img.style.visibility='hidden';
				me._svg_139__imgo.style.visibility='inherit';
				me.elementMouseOver['svg_139']=true;
			}
		}
		me._svg_139.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_4_11.appendChild(me._svg_139);
		me._product_list_sn702071.appendChild(me._rectangle_4_11);
		me._scrollarea_1__content.appendChild(me._product_list_sn702071);
		el=me._product_list_pl2701=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._product_list_pl2701;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="product_list_pl270";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle product_list";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #eeeeee;';
		hs+='border-radius : 5px;';
		hs+='cursor : default;';
		hs+='height : 300px;';
		hs+='position : absolute;';
		hs+='right : 748px;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 200px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 0%';
		me._product_list_pl2701.ggIsActive=function() {
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
		me._product_list_pl2701.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_112=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._image_112;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._image_112__img=document.createElement('img');
		els.className='ggskin ggskin_image_112';
		hs=basePath + 'images/image_112.png';
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
		el.ggId="Image 11";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 180px;';
		hs+='position : absolute;';
		hs+='right : 10px;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 180px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_112.ggIsActive=function() {
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
		me._image_112.ggUpdatePosition=function (useTransition) {
		}
		me._product_list_pl2701.appendChild(me._image_112);
		el=me._text_61=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._text_61;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._text_61__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 6";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(102,102,102,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 5px;';
		hs+='top : 199px;';
		hs+='visibility : inherit;';
		hs+='width : 95%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+="text-overflow: ellipsis;";
		els.setAttribute('style',hs);
		me._text_61.ggUpdateText=function() {
			var params = [];
			var hs = player._("Binko pa system outdoor speak", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_61.ggUpdateText();
		el.appendChild(els);
		me._text_61.ggIsActive=function() {
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
		me._text_61.ggUpdatePosition=function (useTransition) {
		}
		me._product_list_pl2701.appendChild(me._text_61);
		el=me._text_6_11=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._text_6_11;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._text_6_11__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 6_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(0,0,0,1);';
		hs+='cursor : default;';
		hs+='height : 21px;';
		hs+='position : absolute;';
		hs+='right : 3px;';
		hs+='top : 222px;';
		hs+='visibility : inherit;';
		hs+='width : 95%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='bottom: 0px;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+="text-overflow: ellipsis;";
		els.setAttribute('style',hs);
		me._text_6_11.ggUpdateText=function() {
			var params = [];
			var hs = player._("<div class=\"ggmarkdown\"><p><strong>$10-$25<\/strong> \/pieces<\/p>\n<div>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_6_11.ggUpdateText();
		el.appendChild(els);
		me._text_6_11.ggIsActive=function() {
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
		me._text_6_11.ggUpdatePosition=function (useTransition) {
		}
		me._product_list_pl2701.appendChild(me._text_6_11);
		el=me._text_6_1_1_11=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._text_6_1_1_11;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._text_6_1_1_11__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 6_1_1_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(0,0,0,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 113px;';
		hs+='top : 245px;';
		hs+='visibility : inherit;';
		hs+='width : 40%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='bottom: 0px;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+="text-overflow: ellipsis;";
		els.setAttribute('style',hs);
		me._text_6_1_1_11.ggUpdateText=function() {
			var params = [];
			var hs = player._("<div class=\"ggmarkdown\"><p>100 pieces<\/p>\n<div>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_6_1_1_11.ggUpdateText();
		el.appendChild(els);
		me._text_6_1_1_11.ggIsActive=function() {
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
		me._text_6_1_1_11.ggUpdatePosition=function (useTransition) {
		}
		me._product_list_pl2701.appendChild(me._text_6_1_1_11);
		el=me._text_6_1_11=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._text_6_1_11;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._text_6_1_11__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 6_1_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(168,168,168,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 45px;';
		hs+='top : 245px;';
		hs+='visibility : inherit;';
		hs+='width : 35%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='bottom: 0px;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+="text-overflow: ellipsis;";
		els.setAttribute('style',hs);
		me._text_6_1_11.ggUpdateText=function() {
			var params = [];
			var hs = player._("<div class=\"ggmarkdown\"><p>(MOQ)<\/p>\n<div>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_6_1_11.ggUpdateText();
		el.appendChild(els);
		me._text_6_1_11.ggIsActive=function() {
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
		me._text_6_1_11.ggUpdatePosition=function (useTransition) {
		}
		me._product_list_pl2701.appendChild(me._text_6_1_11);
		el=me._rectangle_41=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._rectangle_41;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="Rectangle 4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 30px;';
		hs+='position : absolute;';
		hs+='right : 5px;';
		hs+='top : 266px;';
		hs+='visibility : inherit;';
		hs+='width : 95%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_41.ggIsActive=function() {
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
		me._rectangle_41.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_118=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._svg_118;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._svg_118__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjMwIiB2aWV3Qm94PSIwIDAgMTEwIDMwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMTAiPgogPHJlY3QgZmlsbD0iIzE5Mjg0NSIgaGVpZ2h0PSIzMCIgcng9IjE1IiB3aWR0aD0iMTEwIi8+CiA8cGF0aCBmaWxsPSJ3aGl0ZSIgZD0iTTIyLjAxMTQgMjFWOS4zNjM2NEgyNi42NzA1QzI3LjUyNjUgOS4zNjM2NCAyOC4yNDA1IDkuNDkwNTMgMjguODEyNSA5Ljc0NDMyQzI5LjM4NDUgOS45OTgxMSAyOS44MTQ0IDEwLjM1MDQgMzAuMTAyMyAxMC44MDExQzMwLjM5MDIgMTEuMjQ4MSAzMC41MzQxIDExLjc2MzMgMzAuNT'+
			'M0MSAxMi4zNDY2QzMwLjUzNDEgMTIuODAxMSAzMC40NDMyIDEzLjIwMDggMzAuMjYxNCAxMy41NDU1QzMwLjA3OTUgMTMuODg2NCAyOS44Mjk1IDE0LjE2NjcgMjkuNTExNCAxNC4zODY0QzI5LjE5NyAxNC42MDIzIDI4LjgzNzEgMTQuNzU1NyAyOC40MzE4IDE0Ljg0NjZWMTQuOTYwMkMyOC44NzUgMTQuOTc5MiAyOS4yODk4IDE1LjEwNDIgMjkuNjc2MSAxNS4zMzUyQzMwLjA2NjMgMTUuNTY2MyAzMC4zODI2IDE1Ljg5MDIgMzAuNjI1IDE2LjMwNjhDMzAuODY3NCAxNi43MTk3IDMwLjk4ODYgMTcuMjEyMSAzMC45ODg2IDE3Ljc4NDFDMzAuOTg4NiAxOC40MDE1IDMwLjgzNTIgMTguOTUyNyAz'+
			'MC41Mjg0IDE5LjQzNzVDMzAuMjI1NCAxOS45MTg2IDI5Ljc3NjUgMjAuMjk5MiAyOS4xODE4IDIwLjU3OTVDMjguNTg3MSAyMC44NTk4IDI3Ljg1NDIgMjEgMjYuOTgzIDIxSDIyLjAxMTRaTTI0LjQ3MTYgMTguOTg4NkgyNi40NzczQzI3LjE2MjkgMTguOTg4NiAyNy42NjI5IDE4Ljg1OCAyNy45NzczIDE4LjU5NjZDMjguMjkxNyAxOC4zMzE0IDI4LjQ0ODkgMTcuOTc5MiAyOC40NDg5IDE3LjUzOThDMjguNDQ4OSAxNy4yMTc4IDI4LjM3MTIgMTYuOTMzNyAyOC4yMTU5IDE2LjY4NzVDMjguMDYwNiAxNi40NDEzIDI3LjgzOSAxNi4yNDgxIDI3LjU1MTEgMTYuMTA4QzI3LjI2NyAxNS45Njc4ID'+
			'I2LjkyOCAxNS44OTc3IDI2LjUzNDEgMTUuODk3N0gyNC40NzE2VjE4Ljk4ODZaTTI0LjQ3MTYgMTQuMjMzSDI2LjI5NTVDMjYuNjMyNiAxNC4yMzMgMjYuOTMxOCAxNC4xNzQyIDI3LjE5MzIgMTQuMDU2OEMyNy40NTgzIDEzLjkzNTYgMjcuNjY2NyAxMy43NjUyIDI3LjgxODIgMTMuNTQ1NUMyNy45NzM1IDEzLjMyNTggMjguMDUxMSAxMy4wNjI1IDI4LjA1MTEgMTIuNzU1N0MyOC4wNTExIDEyLjMzNTIgMjcuOTAxNSAxMS45OTYyIDI3LjYwMjMgMTEuNzM4NkMyNy4zMDY4IDExLjQ4MTEgMjYuODg2NCAxMS4zNTIzIDI2LjM0MDkgMTEuMzUyM0gyNC40NzE2VjE0LjIzM1pNMzguMTQwNiAxNy4y'+
			'ODQxVjEyLjI3MjdINDAuNTYxMVYyMUgzOC4yMzcyVjE5LjQxNDhIMzguMTQ2M0MzNy45NDkzIDE5LjkyNjEgMzcuNjIxNyAyMC4zMzcxIDM3LjE2MzQgMjAuNjQ3N0MzNi43MDg4IDIwLjk1ODMgMzYuMTUzOSAyMS4xMTM2IDM1LjQ5ODYgMjEuMTEzNkMzNC45MTUyIDIxLjExMzYgMzQuNDAyIDIwLjk4MTEgMzMuOTU4OCAyMC43MTU5QzMzLjUxNTYgMjAuNDUwOCAzMy4xNjkgMjAuMDczOSAzMi45MTkgMTkuNTg1MkMzMi42NzI4IDE5LjA5NjYgMzIuNTQ3OCAxOC41MTE0IDMyLjU0NCAxNy44Mjk1VjEyLjI3MjdIMzQuOTY0NVYxNy4zOTc3QzM0Ljk2ODMgMTcuOTEyOSAzNS4xMDY1IDE4LjMyMD'+
			'EgMzUuMzc5MyAxOC42MTkzQzM1LjY1MiAxOC45MTg2IDM2LjAxNzUgMTkuMDY4MiAzNi40NzU5IDE5LjA2ODJDMzYuNzY3NSAxOS4wNjgyIDM3LjA0MDIgMTkuMDAxOSAzNy4yOTQgMTguODY5M0MzNy41NDc4IDE4LjczMyAzNy43NTI0IDE4LjUzMjIgMzcuOTA3NyAxOC4yNjdDMzguMDY2OCAxOC4wMDE5IDM4LjE0NDQgMTcuNjc0MiAzOC4xNDA2IDE3LjI4NDFaTTQzLjk5MTUgMjQuMjcyN0M0My42ODQ3IDI0LjI3MjcgNDMuMzk2OCAyNC4yNDgxIDQzLjEyNzggMjQuMTk4OUM0Mi44NjI3IDI0LjE1MzQgNDIuNjQzIDI0LjA5NDcgNDIuNDY4OCAyNC4wMjI3TDQzLjAxNDIgMjIuMjE1OUM0My4y'+
			'OTgzIDIyLjMwMyA0My41NTQgMjIuMzUwNCA0My43ODEyIDIyLjM1OEM0NC4wMTIzIDIyLjM2NTUgNDQuMjExMiAyMi4zMTI1IDQ0LjM3NzggMjIuMTk4OUM0NC41NDgzIDIyLjA4NTIgNDQuNjg2NiAyMS44OTIgNDQuNzkyNiAyMS42MTkzTDQ0LjkzNDcgMjEuMjVMNDEuODA0IDEyLjI3MjdINDQuMzQ5NEw0Ni4xNTYyIDE4LjY4MThINDYuMjQ3Mkw0OC4wNzEgMTIuMjcyN0g1MC42MzM1TDQ3LjI0MTUgMjEuOTQzMkM0Ny4wNzg2IDIyLjQxMjkgNDYuODU3IDIyLjgyMiA0Ni41NzY3IDIzLjE3MDVDNDYuMzAwMiAyMy41MjI3IDQ1Ljk0OTggMjMuNzkzNiA0NS41MjU2IDIzLjk4M0M0NS4xMDEzID'+
			'I0LjE3NjEgNDQuNTkgMjQuMjcyNyA0My45OTE1IDI0LjI3MjdaTTY1LjM1MzcgOS4zNjM2NFYyMUg2My4yMjg3TDU4LjE2NjIgMTMuNjc2MUg1OC4wODFWMjFINTUuNjIwN1Y5LjM2MzY0SDU3Ljc3OThMNjIuODAyNiAxNi42ODE4SDYyLjkwNDhWOS4zNjM2NEg2NS4zNTM3Wk03MS4yODQxIDIxLjE3MDVDNzAuNDAxNSAyMS4xNzA1IDY5LjYzODMgMjAuOTgzIDY4Ljk5NDMgMjAuNjA4QzY4LjM1NDIgMjAuMjI5MiA2Ny44NTk4IDE5LjcwMjcgNjcuNTExNCAxOS4wMjg0QzY3LjE2MjkgMTguMzUwNCA2Ni45ODg2IDE3LjU2NDQgNjYuOTg4NiAxNi42NzA1QzY2Ljk4ODYgMTUuNzY4OSA2Ny4xNjI5'+
			'IDE0Ljk4MTEgNjcuNTExNCAxNC4zMDY4QzY3Ljg1OTggMTMuNjI4OCA2OC4zNTQyIDEzLjEwMjMgNjguOTk0MyAxMi43MjczQzY5LjYzODMgMTIuMzQ4NSA3MC40MDE1IDEyLjE1OTEgNzEuMjg0MSAxMi4xNTkxQzcyLjE2NjcgMTIuMTU5MSA3Mi45MjggMTIuMzQ4NSA3My41NjgyIDEyLjcyNzNDNzQuMjEyMSAxMy4xMDIzIDc0LjcwODMgMTMuNjI4OCA3NS4wNTY4IDE0LjMwNjhDNzUuNDA1MyAxNC45ODExIDc1LjU3OTUgMTUuNzY4OSA3NS41Nzk1IDE2LjY3MDVDNzUuNTc5NSAxNy41NjQ0IDc1LjQwNTMgMTguMzUwNCA3NS4wNTY4IDE5LjAyODRDNzQuNzA4MyAxOS43MDI3IDc0LjIxMjEgMj'+
			'AuMjI5MiA3My41NjgyIDIwLjYwOEM3Mi45MjggMjAuOTgzIDcyLjE2NjcgMjEuMTcwNSA3MS4yODQxIDIxLjE3MDVaTTcxLjI5NTUgMTkuMjk1NUM3MS42OTcgMTkuMjk1NSA3Mi4wMzIyIDE5LjE4MTggNzIuMzAxMSAxOC45NTQ1QzcyLjU3MDEgMTguNzIzNSA3Mi43NzI3IDE4LjQwOTEgNzIuOTA5MSAxOC4wMTE0QzczLjA0OTIgMTcuNjEzNiA3My4xMTkzIDE3LjE2MSA3My4xMTkzIDE2LjY1MzRDNzMuMTE5MyAxNi4xNDU4IDczLjA0OTIgMTUuNjkzMiA3Mi45MDkxIDE1LjI5NTVDNzIuNzcyNyAxNC44OTc3IDcyLjU3MDEgMTQuNTgzMyA3Mi4zMDExIDE0LjM1MjNDNzIuMDMyMiAxNC4xMjEy'+
			'IDcxLjY5NyAxNC4wMDU3IDcxLjI5NTUgMTQuMDA1N0M3MC44OTAyIDE0LjAwNTcgNzAuNTQ5MiAxNC4xMjEyIDcwLjI3MjcgMTQuMzUyM0M3MCAxNC41ODMzIDY5Ljc5MzYgMTQuODk3NyA2OS42NTM0IDE1LjI5NTVDNjkuNTE3IDE1LjY5MzIgNjkuNDQ4OSAxNi4xNDU4IDY5LjQ0ODkgMTYuNjUzNEM2OS40NDg5IDE3LjE2MSA2OS41MTcgMTcuNjEzNiA2OS42NTM0IDE4LjAxMTRDNjkuNzkzNiAxOC40MDkxIDcwIDE4LjcyMzUgNzAuMjcyNyAxOC45NTQ1QzcwLjU0OTIgMTkuMTgxOCA3MC44OTAyIDE5LjI5NTUgNzEuMjk1NSAxOS4yOTU1Wk03OC42NTYyIDIxTDc2LjI4MTIgMTIuMjcyN0g3OC'+
			'43MzAxTDgwLjA4MjQgMTguMTM2NEg4MC4xNjE5TDgxLjU3MSAxMi4yNzI3SDgzLjk3NDRMODUuNDA2MiAxOC4xMDIzSDg1LjQ4MDFMODYuODA5NyAxMi4yNzI3SDg5LjI1MjhMODYuODgzNSAyMUg4NC4zMjFMODIuODIxIDE1LjUxMTRIODIuNzEzMUw4MS4yMTMxIDIxSDc4LjY1NjJaIi8+Cjwvc3ZnPgo=';
		me._svg_118__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._svg_118__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjMwIiB2aWV3Qm94PSIwIDAgMTEwIDMwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMTAiPgogPHJlY3QgZmlsbD0iI0QzMzQzNCIgaGVpZ2h0PSIzMCIgcng9IjE1IiB3aWR0aD0iMTEwIi8+CiA8cGF0aCBmaWxsPSJ3aGl0ZSIgZD0iTTIyLjAxMTQgMjFWOS4zNjM2NEgyNi42NzA1QzI3LjUyNjUgOS4zNjM2NCAyOC4yNDA1IDkuNDkwNTMgMjguODEyNSA5Ljc0NDMyQzI5LjM4NDUgOS45OTgxMSAyOS44MTQ0IDEwLjM1MDQgMzAuMTAyMyAxMC44MDExQzMwLjM5MDIgMTEuMjQ4MSAzMC41MzQxIDExLjc2MzMgMzAuNT'+
			'M0MSAxMi4zNDY2QzMwLjUzNDEgMTIuODAxMSAzMC40NDMyIDEzLjIwMDggMzAuMjYxNCAxMy41NDU1QzMwLjA3OTUgMTMuODg2NCAyOS44Mjk1IDE0LjE2NjcgMjkuNTExNCAxNC4zODY0QzI5LjE5NyAxNC42MDIzIDI4LjgzNzEgMTQuNzU1NyAyOC40MzE4IDE0Ljg0NjZWMTQuOTYwMkMyOC44NzUgMTQuOTc5MiAyOS4yODk4IDE1LjEwNDIgMjkuNjc2MSAxNS4zMzUyQzMwLjA2NjMgMTUuNTY2MyAzMC4zODI2IDE1Ljg5MDIgMzAuNjI1IDE2LjMwNjhDMzAuODY3NCAxNi43MTk3IDMwLjk4ODYgMTcuMjEyMSAzMC45ODg2IDE3Ljc4NDFDMzAuOTg4NiAxOC40MDE1IDMwLjgzNTIgMTguOTUyNyAz'+
			'MC41Mjg0IDE5LjQzNzVDMzAuMjI1NCAxOS45MTg2IDI5Ljc3NjUgMjAuMjk5MiAyOS4xODE4IDIwLjU3OTVDMjguNTg3MSAyMC44NTk4IDI3Ljg1NDIgMjEgMjYuOTgzIDIxSDIyLjAxMTRaTTI0LjQ3MTYgMTguOTg4NkgyNi40NzczQzI3LjE2MjkgMTguOTg4NiAyNy42NjI5IDE4Ljg1OCAyNy45NzczIDE4LjU5NjZDMjguMjkxNyAxOC4zMzE0IDI4LjQ0ODkgMTcuOTc5MiAyOC40NDg5IDE3LjUzOThDMjguNDQ4OSAxNy4yMTc4IDI4LjM3MTIgMTYuOTMzNyAyOC4yMTU5IDE2LjY4NzVDMjguMDYwNiAxNi40NDEzIDI3LjgzOSAxNi4yNDgxIDI3LjU1MTEgMTYuMTA4QzI3LjI2NyAxNS45Njc4ID'+
			'I2LjkyOCAxNS44OTc3IDI2LjUzNDEgMTUuODk3N0gyNC40NzE2VjE4Ljk4ODZaTTI0LjQ3MTYgMTQuMjMzSDI2LjI5NTVDMjYuNjMyNiAxNC4yMzMgMjYuOTMxOCAxNC4xNzQyIDI3LjE5MzIgMTQuMDU2OEMyNy40NTgzIDEzLjkzNTYgMjcuNjY2NyAxMy43NjUyIDI3LjgxODIgMTMuNTQ1NUMyNy45NzM1IDEzLjMyNTggMjguMDUxMSAxMy4wNjI1IDI4LjA1MTEgMTIuNzU1N0MyOC4wNTExIDEyLjMzNTIgMjcuOTAxNSAxMS45OTYyIDI3LjYwMjMgMTEuNzM4NkMyNy4zMDY4IDExLjQ4MTEgMjYuODg2NCAxMS4zNTIzIDI2LjM0MDkgMTEuMzUyM0gyNC40NzE2VjE0LjIzM1pNMzguMTQwNiAxNy4y'+
			'ODQxVjEyLjI3MjdINDAuNTYxMVYyMUgzOC4yMzcyVjE5LjQxNDhIMzguMTQ2M0MzNy45NDkzIDE5LjkyNjEgMzcuNjIxNyAyMC4zMzcxIDM3LjE2MzQgMjAuNjQ3N0MzNi43MDg4IDIwLjk1ODMgMzYuMTUzOSAyMS4xMTM2IDM1LjQ5ODYgMjEuMTEzNkMzNC45MTUyIDIxLjExMzYgMzQuNDAyIDIwLjk4MTEgMzMuOTU4OCAyMC43MTU5QzMzLjUxNTYgMjAuNDUwOCAzMy4xNjkgMjAuMDczOSAzMi45MTkgMTkuNTg1MkMzMi42NzI4IDE5LjA5NjYgMzIuNTQ3OCAxOC41MTE0IDMyLjU0NCAxNy44Mjk1VjEyLjI3MjdIMzQuOTY0NVYxNy4zOTc3QzM0Ljk2ODMgMTcuOTEyOSAzNS4xMDY1IDE4LjMyMD'+
			'EgMzUuMzc5MyAxOC42MTkzQzM1LjY1MiAxOC45MTg2IDM2LjAxNzUgMTkuMDY4MiAzNi40NzU5IDE5LjA2ODJDMzYuNzY3NSAxOS4wNjgyIDM3LjA0MDIgMTkuMDAxOSAzNy4yOTQgMTguODY5M0MzNy41NDc4IDE4LjczMyAzNy43NTI0IDE4LjUzMjIgMzcuOTA3NyAxOC4yNjdDMzguMDY2OCAxOC4wMDE5IDM4LjE0NDQgMTcuNjc0MiAzOC4xNDA2IDE3LjI4NDFaTTQzLjk5MTUgMjQuMjcyN0M0My42ODQ3IDI0LjI3MjcgNDMuMzk2OCAyNC4yNDgxIDQzLjEyNzggMjQuMTk4OUM0Mi44NjI3IDI0LjE1MzQgNDIuNjQzIDI0LjA5NDcgNDIuNDY4OCAyNC4wMjI3TDQzLjAxNDIgMjIuMjE1OUM0My4y'+
			'OTgzIDIyLjMwMyA0My41NTQgMjIuMzUwNCA0My43ODEyIDIyLjM1OEM0NC4wMTIzIDIyLjM2NTUgNDQuMjExMiAyMi4zMTI1IDQ0LjM3NzggMjIuMTk4OUM0NC41NDgzIDIyLjA4NTIgNDQuNjg2NiAyMS44OTIgNDQuNzkyNiAyMS42MTkzTDQ0LjkzNDcgMjEuMjVMNDEuODA0IDEyLjI3MjdINDQuMzQ5NEw0Ni4xNTYyIDE4LjY4MThINDYuMjQ3Mkw0OC4wNzEgMTIuMjcyN0g1MC42MzM1TDQ3LjI0MTUgMjEuOTQzMkM0Ny4wNzg2IDIyLjQxMjkgNDYuODU3IDIyLjgyMiA0Ni41NzY3IDIzLjE3MDVDNDYuMzAwMiAyMy41MjI3IDQ1Ljk0OTggMjMuNzkzNiA0NS41MjU2IDIzLjk4M0M0NS4xMDEzID'+
			'I0LjE3NjEgNDQuNTkgMjQuMjcyNyA0My45OTE1IDI0LjI3MjdaTTY1LjM1MzcgOS4zNjM2NFYyMUg2My4yMjg3TDU4LjE2NjIgMTMuNjc2MUg1OC4wODFWMjFINTUuNjIwN1Y5LjM2MzY0SDU3Ljc3OThMNjIuODAyNiAxNi42ODE4SDYyLjkwNDhWOS4zNjM2NEg2NS4zNTM3Wk03MS4yODQxIDIxLjE3MDVDNzAuNDAxNSAyMS4xNzA1IDY5LjYzODMgMjAuOTgzIDY4Ljk5NDMgMjAuNjA4QzY4LjM1NDIgMjAuMjI5MiA2Ny44NTk4IDE5LjcwMjcgNjcuNTExNCAxOS4wMjg0QzY3LjE2MjkgMTguMzUwNCA2Ni45ODg2IDE3LjU2NDQgNjYuOTg4NiAxNi42NzA1QzY2Ljk4ODYgMTUuNzY4OSA2Ny4xNjI5'+
			'IDE0Ljk4MTEgNjcuNTExNCAxNC4zMDY4QzY3Ljg1OTggMTMuNjI4OCA2OC4zNTQyIDEzLjEwMjMgNjguOTk0MyAxMi43MjczQzY5LjYzODMgMTIuMzQ4NSA3MC40MDE1IDEyLjE1OTEgNzEuMjg0MSAxMi4xNTkxQzcyLjE2NjcgMTIuMTU5MSA3Mi45MjggMTIuMzQ4NSA3My41NjgyIDEyLjcyNzNDNzQuMjEyMSAxMy4xMDIzIDc0LjcwODMgMTMuNjI4OCA3NS4wNTY4IDE0LjMwNjhDNzUuNDA1MyAxNC45ODExIDc1LjU3OTUgMTUuNzY4OSA3NS41Nzk1IDE2LjY3MDVDNzUuNTc5NSAxNy41NjQ0IDc1LjQwNTMgMTguMzUwNCA3NS4wNTY4IDE5LjAyODRDNzQuNzA4MyAxOS43MDI3IDc0LjIxMjEgMj'+
			'AuMjI5MiA3My41NjgyIDIwLjYwOEM3Mi45MjggMjAuOTgzIDcyLjE2NjcgMjEuMTcwNSA3MS4yODQxIDIxLjE3MDVaTTcxLjI5NTUgMTkuMjk1NUM3MS42OTcgMTkuMjk1NSA3Mi4wMzIyIDE5LjE4MTggNzIuMzAxMSAxOC45NTQ1QzcyLjU3MDEgMTguNzIzNSA3Mi43NzI3IDE4LjQwOTEgNzIuOTA5MSAxOC4wMTE0QzczLjA0OTIgMTcuNjEzNiA3My4xMTkzIDE3LjE2MSA3My4xMTkzIDE2LjY1MzRDNzMuMTE5MyAxNi4xNDU4IDczLjA0OTIgMTUuNjkzMiA3Mi45MDkxIDE1LjI5NTVDNzIuNzcyNyAxNC44OTc3IDcyLjU3MDEgMTQuNTgzMyA3Mi4zMDExIDE0LjM1MjNDNzIuMDMyMiAxNC4xMjEy'+
			'IDcxLjY5NyAxNC4wMDU3IDcxLjI5NTUgMTQuMDA1N0M3MC44OTAyIDE0LjAwNTcgNzAuNTQ5MiAxNC4xMjEyIDcwLjI3MjcgMTQuMzUyM0M3MCAxNC41ODMzIDY5Ljc5MzYgMTQuODk3NyA2OS42NTM0IDE1LjI5NTVDNjkuNTE3IDE1LjY5MzIgNjkuNDQ4OSAxNi4xNDU4IDY5LjQ0ODkgMTYuNjUzNEM2OS40NDg5IDE3LjE2MSA2OS41MTcgMTcuNjEzNiA2OS42NTM0IDE4LjAxMTRDNjkuNzkzNiAxOC40MDkxIDcwIDE4LjcyMzUgNzAuMjcyNyAxOC45NTQ1QzcwLjU0OTIgMTkuMTgxOCA3MC44OTAyIDE5LjI5NTUgNzEuMjk1NSAxOS4yOTU1Wk03OC42NTYyIDIxTDc2LjI4MTIgMTIuMjcyN0g3OC'+
			'43MzAxTDgwLjA4MjQgMTguMTM2NEg4MC4xNjE5TDgxLjU3MSAxMi4yNzI3SDgzLjk3NDRMODUuNDA2MiAxOC4xMDIzSDg1LjQ4MDFMODYuODA5NyAxMi4yNzI3SDg5LjI1MjhMODYuODgzNSAyMUg4NC4zMjFMODIuODIxIDE1LjUxMTRIODIuNzEzMUw4MS4yMTMxIDIxSDc4LjY1NjJaIi8+Cjwvc3ZnPgo=';
		me._svg_118__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="Svg 11";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 23px;';
		hs+='position : absolute;';
		hs+='right : 5px;';
		hs+='top : 4px;';
		hs+='visibility : inherit;';
		hs+='width : 90px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_118.ggIsActive=function() {
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
		me._svg_118.onclick=function (e) {
			if (me._svg_118.isDragging()) return;
			player.openUrl("https:\/\/catalog.mann-filter.com\/EU\/eng\/catalog\/MANN-FILTER%20Katalog%20Europa\/Fuel%20Filter\/PL%20270%20x","_blank");
			var list=me.findElements("products_list",true);
			while(list.length>0) {
				var e=list.pop();
				e.style.transition='none';
				e.style.visibility='hidden';
				e.ggVisible=false;
			}
		}
		me._svg_118.onmouseover=function (e) {
			me._svg_118__img.style.visibility='hidden';
			me._svg_118__imgo.style.visibility='inherit';
			me.elementMouseOver['svg_118']=true;
		}
		me._svg_118.onmouseout=function (e) {
			me._svg_118__img.style.visibility='inherit';
			me._svg_118__imgo.style.visibility='hidden';
			me.elementMouseOver['svg_118']=false;
		}
		me._svg_118.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['svg_118']) {
				me._svg_118__img.style.visibility='hidden';
				me._svg_118__imgo.style.visibility='inherit';
				me.elementMouseOver['svg_118']=true;
			}
		}
		me._svg_118.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_41.appendChild(me._svg_118);
		el=me._svg_138=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._svg_138;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._svg_138__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjMwIiB2aWV3Qm94PSIwIDAgMTEwIDMwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMTAiPgogPHJlY3QgZmlsbD0iI0Y2OTIxRSIgaGVpZ2h0PSIzMCIgcng9IjE1IiB3aWR0aD0iMTEwIi8+CiA8cGF0aCBmaWxsPSJ3aGl0ZSIgZD0iTTM4LjM5NDkgOS4zNjM2NEw0MS4yMDc0IDE4LjIwNDVINDEuMzE1M0w0NC4xMzM1IDkuMzYzNjRINDYuODYwOEw0Mi44NDk0IDIxSDM5LjY3OUwzNS42NjE5IDkuMzYzNjRIMzguMzk0OVpNNDguMjE1OSAyMVYxMi4yNzI3SDUwLjYzNjRWMjFINDguMjE1OVpNNDkuNDMxOCAxMS4xND'+
			'c3QzQ5LjA3MiAxMS4xNDc3IDQ4Ljc2MzMgMTEuMDI4NCA0OC41MDU3IDEwLjc4OThDNDguMjUxOSAxMC41NDczIDQ4LjEyNSAxMC4yNTc2IDQ4LjEyNSA5LjkyMDQ1QzQ4LjEyNSA5LjU4NzEyIDQ4LjI1MTkgOS4zMDExNCA0OC41MDU3IDkuMDYyNUM0OC43NjMzIDguODIwMDggNDkuMDcyIDguNjk4ODYgNDkuNDMxOCA4LjY5ODg2QzQ5Ljc5MTcgOC42OTg4NiA1MC4wOTg1IDguODIwMDggNTAuMzUyMyA5LjA2MjVDNTAuNjA5OCA5LjMwMTE0IDUwLjczODYgOS41ODcxMiA1MC43Mzg2IDkuOTIwNDVDNTAuNzM4NiAxMC4yNTc2IDUwLjYwOTggMTAuNTQ3MyA1MC4zNTIzIDEwLjc4OThDNTAuMDk4'+
			'NSAxMS4wMjg0IDQ5Ljc5MTcgMTEuMTQ3NyA0OS40MzE4IDExLjE0NzdaTTU2LjU1MjYgMjEuMTcwNUM1NS42NTQ4IDIxLjE3MDUgNTQuODgyMSAyMC45ODg2IDU0LjIzNDQgMjAuNjI1QzUzLjU5MDQgMjAuMjU3NiA1My4wOTQyIDE5LjczODYgNTIuNzQ1NyAxOS4wNjgyQzUyLjM5NzMgMTguMzkzOSA1Mi4yMjMgMTcuNTk2NiA1Mi4yMjMgMTYuNjc2MUM1Mi4yMjMgMTUuNzc4NCA1Mi4zOTczIDE0Ljk5MDUgNTIuNzQ1NyAxNC4zMTI1QzUzLjA5NDIgMTMuNjM0NSA1My41ODQ4IDEzLjEwNjEgNTQuMjE3MyAxMi43MjczQzU0Ljg1MzcgMTIuMzQ4NSA1NS41OTk5IDEyLjE1OTEgNTYuNDU2IDEyLj'+
			'E1OTFDNTcuMDMxNyAxMi4xNTkxIDU3LjU2NzcgMTIuMjUxOSA1OC4wNjM5IDEyLjQzNzVDNTguNTYzOSAxMi42MTkzIDU4Ljk5OTUgMTIuODkzOSA1OS4zNzA3IDEzLjI2MTRDNTkuNzQ1NyAxMy42Mjg4IDYwLjAzNzQgMTQuMDkwOSA2MC4yNDU3IDE0LjY0NzdDNjAuNDU0MSAxNS4yMDA4IDYwLjU1ODIgMTUuODQ4NSA2MC41NTgyIDE2LjU5MDlWMTcuMjU1N0g1My4xODg5VjE1Ljc1NTdINTguMjc5OEM1OC4yNzk4IDE1LjQwNzIgNTguMjA0MSAxNS4wOTg1IDU4LjA1MjYgMTQuODI5NUM1Ny45MDEgMTQuNTYwNiA1Ny42OTA4IDE0LjM1MDQgNTcuNDIxOSAxNC4xOTg5QzU3LjE1NjcgMTQuMDQz'+
			'NiA1Ni44NDggMTMuOTY1OSA1Ni40OTU3IDEzLjk2NTlDNTYuMTI4MyAxMy45NjU5IDU1LjgwMjYgMTQuMDUxMSA1NS41MTg1IDE0LjIyMTZDNTUuMjM4MiAxNC4zODgzIDU1LjAxODUgMTQuNjEzNiA1NC44NTk0IDE0Ljg5NzdDNTQuNzAwMyAxNS4xNzggNTQuNjE4OCAxNS40OTA1IDU0LjYxNTEgMTUuODM1MlYxNy4yNjE0QzU0LjYxNTEgMTcuNjkzMiA1NC42OTQ2IDE4LjA2NjMgNTQuODUzNyAxOC4zODA3QzU1LjAxNjYgMTguNjk1MSA1NS4yNDU3IDE4LjkzNzUgNTUuNTQxMiAxOS4xMDhDNTUuODM2NiAxOS4yNzg0IDU2LjE4NyAxOS4zNjM2IDU2LjU5MjMgMTkuMzYzNkM1Ni44NjEzIDE5Lj'+
			'M2MzYgNTcuMTA3NSAxOS4zMjU4IDU3LjMzMSAxOS4yNUM1Ny41NTQ1IDE5LjE3NDIgNTcuNzQ1NyAxOS4wNjA2IDU3LjkwNDggMTguOTA5MUM1OC4wNjM5IDE4Ljc1NzYgNTguMTg1MSAxOC41NzIgNTguMjY4NSAxOC4zNTIzTDYwLjUwNzEgMTguNUM2MC4zOTM1IDE5LjAzNzkgNjAuMTYwNSAxOS41MDc2IDU5LjgwODIgMTkuOTA5MUM1OS40NTk4IDIwLjMwNjggNTkuMDA5IDIwLjYxNzQgNTguNDU2IDIwLjg0MDlDNTcuOTA2NyAyMS4wNjA2IDU3LjI3MjMgMjEuMTcwNSA1Ni41NTI2IDIxLjE3MDVaTTYzLjc5NjkgMjFMNjEuNDIxOSAxMi4yNzI3SDYzLjg3MDdMNjUuMjIzIDE4LjEzNjRINjUu'+
			'MzAyNkw2Ni43MTE2IDEyLjI3MjdINjkuMTE1MUw3MC41NDY5IDE4LjEwMjNINzAuNjIwN0w3MS45NTAzIDEyLjI3MjdINzQuMzkzNUw3Mi4wMjQxIDIxSDY5LjQ2MTZMNjcuOTYxNiAxNS41MTE0SDY3Ljg1MzdMNjYuMzUzNyAyMUg2My43OTY5WiIvPgo8L3N2Zz4K';
		me._svg_138__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._svg_138__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjMwIiB2aWV3Qm94PSIwIDAgMTEwIDMwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMTAiPgogPHJlY3QgZmlsbD0iI0FGNUUwMCIgaGVpZ2h0PSIzMCIgcng9IjE1IiB3aWR0aD0iMTEwIi8+CiA8cGF0aCBmaWxsPSJ3aGl0ZSIgZD0iTTM4LjM5NDkgOS4zNjM2NEw0MS4yMDc0IDE4LjIwNDVINDEuMzE1M0w0NC4xMzM1IDkuMzYzNjRINDYuODYwOEw0Mi44NDk0IDIxSDM5LjY3OUwzNS42NjE5IDkuMzYzNjRIMzguMzk0OVpNNDguMjE1OSAyMVYxMi4yNzI3SDUwLjYzNjRWMjFINDguMjE1OVpNNDkuNDMxOCAxMS4xND'+
			'c3QzQ5LjA3MiAxMS4xNDc3IDQ4Ljc2MzMgMTEuMDI4NCA0OC41MDU3IDEwLjc4OThDNDguMjUxOSAxMC41NDczIDQ4LjEyNSAxMC4yNTc2IDQ4LjEyNSA5LjkyMDQ1QzQ4LjEyNSA5LjU4NzEyIDQ4LjI1MTkgOS4zMDExNCA0OC41MDU3IDkuMDYyNUM0OC43NjMzIDguODIwMDggNDkuMDcyIDguNjk4ODYgNDkuNDMxOCA4LjY5ODg2QzQ5Ljc5MTcgOC42OTg4NiA1MC4wOTg1IDguODIwMDggNTAuMzUyMyA5LjA2MjVDNTAuNjA5OCA5LjMwMTE0IDUwLjczODYgOS41ODcxMiA1MC43Mzg2IDkuOTIwNDVDNTAuNzM4NiAxMC4yNTc2IDUwLjYwOTggMTAuNTQ3MyA1MC4zNTIzIDEwLjc4OThDNTAuMDk4'+
			'NSAxMS4wMjg0IDQ5Ljc5MTcgMTEuMTQ3NyA0OS40MzE4IDExLjE0NzdaTTU2LjU1MjYgMjEuMTcwNUM1NS42NTQ4IDIxLjE3MDUgNTQuODgyMSAyMC45ODg2IDU0LjIzNDQgMjAuNjI1QzUzLjU5MDQgMjAuMjU3NiA1My4wOTQyIDE5LjczODYgNTIuNzQ1NyAxOS4wNjgyQzUyLjM5NzMgMTguMzkzOSA1Mi4yMjMgMTcuNTk2NiA1Mi4yMjMgMTYuNjc2MUM1Mi4yMjMgMTUuNzc4NCA1Mi4zOTczIDE0Ljk5MDUgNTIuNzQ1NyAxNC4zMTI1QzUzLjA5NDIgMTMuNjM0NSA1My41ODQ4IDEzLjEwNjEgNTQuMjE3MyAxMi43MjczQzU0Ljg1MzcgMTIuMzQ4NSA1NS41OTk5IDEyLjE1OTEgNTYuNDU2IDEyLj'+
			'E1OTFDNTcuMDMxNyAxMi4xNTkxIDU3LjU2NzcgMTIuMjUxOSA1OC4wNjM5IDEyLjQzNzVDNTguNTYzOSAxMi42MTkzIDU4Ljk5OTUgMTIuODkzOSA1OS4zNzA3IDEzLjI2MTRDNTkuNzQ1NyAxMy42Mjg4IDYwLjAzNzQgMTQuMDkwOSA2MC4yNDU3IDE0LjY0NzdDNjAuNDU0MSAxNS4yMDA4IDYwLjU1ODIgMTUuODQ4NSA2MC41NTgyIDE2LjU5MDlWMTcuMjU1N0g1My4xODg5VjE1Ljc1NTdINTguMjc5OEM1OC4yNzk4IDE1LjQwNzIgNTguMjA0MSAxNS4wOTg1IDU4LjA1MjYgMTQuODI5NUM1Ny45MDEgMTQuNTYwNiA1Ny42OTA4IDE0LjM1MDQgNTcuNDIxOSAxNC4xOTg5QzU3LjE1NjcgMTQuMDQz'+
			'NiA1Ni44NDggMTMuOTY1OSA1Ni40OTU3IDEzLjk2NTlDNTYuMTI4MyAxMy45NjU5IDU1LjgwMjYgMTQuMDUxMSA1NS41MTg1IDE0LjIyMTZDNTUuMjM4MiAxNC4zODgzIDU1LjAxODUgMTQuNjEzNiA1NC44NTk0IDE0Ljg5NzdDNTQuNzAwMyAxNS4xNzggNTQuNjE4OCAxNS40OTA1IDU0LjYxNTEgMTUuODM1MlYxNy4yNjE0QzU0LjYxNTEgMTcuNjkzMiA1NC42OTQ2IDE4LjA2NjMgNTQuODUzNyAxOC4zODA3QzU1LjAxNjYgMTguNjk1MSA1NS4yNDU3IDE4LjkzNzUgNTUuNTQxMiAxOS4xMDhDNTUuODM2NiAxOS4yNzg0IDU2LjE4NyAxOS4zNjM2IDU2LjU5MjMgMTkuMzYzNkM1Ni44NjEzIDE5Lj'+
			'M2MzYgNTcuMTA3NSAxOS4zMjU4IDU3LjMzMSAxOS4yNUM1Ny41NTQ1IDE5LjE3NDIgNTcuNzQ1NyAxOS4wNjA2IDU3LjkwNDggMTguOTA5MUM1OC4wNjM5IDE4Ljc1NzYgNTguMTg1MSAxOC41NzIgNTguMjY4NSAxOC4zNTIzTDYwLjUwNzEgMTguNUM2MC4zOTM1IDE5LjAzNzkgNjAuMTYwNSAxOS41MDc2IDU5LjgwODIgMTkuOTA5MUM1OS40NTk4IDIwLjMwNjggNTkuMDA5IDIwLjYxNzQgNTguNDU2IDIwLjg0MDlDNTcuOTA2NyAyMS4wNjA2IDU3LjI3MjMgMjEuMTcwNSA1Ni41NTI2IDIxLjE3MDVaTTYzLjc5NjkgMjFMNjEuNDIxOSAxMi4yNzI3SDYzLjg3MDdMNjUuMjIzIDE4LjEzNjRINjUu'+
			'MzAyNkw2Ni43MTE2IDEyLjI3MjdINjkuMTE1MUw3MC41NDY5IDE4LjEwMjNINzAuNjIwN0w3MS45NTAzIDEyLjI3MjdINzQuMzkzNUw3Mi4wMjQxIDIxSDY5LjQ2MTZMNjcuOTYxNiAxNS41MTE0SDY3Ljg1MzdMNjYuMzUzNyAyMUg2My43OTY5WiIvPgo8L3N2Zz4K';
		me._svg_138__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="Svg 13";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 23px;';
		hs+='position : absolute;';
		hs+='right : 100px;';
		hs+='top : 4px;';
		hs+='visibility : inherit;';
		hs+='width : 90px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_138.ggIsActive=function() {
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
		me._svg_138.onclick=function (e) {
			if (me._svg_138.isDragging()) return;
			player.moveTo("-87.34","4.51","20.74","18.0000");
			var list=me.findElements("products_list",true);
			while(list.length>0) {
				var e=list.pop();
				e.style.transition='none';
				e.style.visibility='hidden';
				e.ggVisible=false;
			}
		}
		me._svg_138.onmouseover=function (e) {
			me._svg_138__img.style.visibility='hidden';
			me._svg_138__imgo.style.visibility='inherit';
			me.elementMouseOver['svg_138']=true;
		}
		me._svg_138.onmouseout=function (e) {
			me._svg_138__img.style.visibility='inherit';
			me._svg_138__imgo.style.visibility='hidden';
			me.elementMouseOver['svg_138']=false;
		}
		me._svg_138.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['svg_138']) {
				me._svg_138__img.style.visibility='hidden';
				me._svg_138__imgo.style.visibility='inherit';
				me.elementMouseOver['svg_138']=true;
			}
		}
		me._svg_138.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_41.appendChild(me._svg_138);
		me._product_list_pl2701.appendChild(me._rectangle_41);
		me._scrollarea_1__content.appendChild(me._product_list_pl2701);
		el=me._product_list_h12w050=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._product_list_h12w050;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="product_list_h12w05";
		el.ggDx=356;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle product_list";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #eeeeee;';
		hs+='border-radius : 5px;';
		hs+='cursor : default;';
		hs+='height : 300px;';
		hs+='left : calc(50% - ((200px + 2px) / 2) + 356px);';
		hs+='position : absolute;';
		hs+='top : 330px;';
		hs+='visibility : inherit;';
		hs+='width : 200px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 0%';
		me._product_list_h12w050.ggIsActive=function() {
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
		me._product_list_h12w050.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_140=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._image_140;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._image_140__img=document.createElement('img');
		els.className='ggskin ggskin_image_140';
		hs=basePath + 'images/image_140.png';
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
		el.ggId="Image 14";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 180px;';
		hs+='left : calc(50% - ((180px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 180px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_140.ggIsActive=function() {
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
		me._image_140.ggUpdatePosition=function (useTransition) {
		}
		me._product_list_h12w050.appendChild(me._image_140);
		el=me._text_6_40=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._text_6_40;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._text_6_40__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 6_4";
		el.ggDy=59;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(102,102,102,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 59px);';
		hs+='visibility : inherit;';
		hs+='width : 95%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+="text-overflow: ellipsis;";
		els.setAttribute('style',hs);
		me._text_6_40.ggUpdateText=function() {
			var params = [];
			var hs = player._("Factory price, allowing you to have sufficient profits", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_6_40.ggUpdateText();
		el.appendChild(els);
		me._text_6_40.ggIsActive=function() {
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
		me._text_6_40.ggUpdatePosition=function (useTransition) {
		}
		me._product_list_h12w050.appendChild(me._text_6_40);
		el=me._text_6_1_40=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._text_6_1_40;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._text_6_1_40__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 6_1_4";
		el.ggDy=82;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(0,0,0,1);';
		hs+='cursor : default;';
		hs+='height : 21px;';
		hs+='left : 7px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((21px + 0px) / 2) + 82px);';
		hs+='visibility : inherit;';
		hs+='width : 95%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='bottom: 0px;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+="text-overflow: ellipsis;";
		els.setAttribute('style',hs);
		me._text_6_1_40.ggUpdateText=function() {
			var params = [];
			var hs = player._("<div class=\"ggmarkdown\"><p><strong>$7-$12<\/strong> \/pieces<\/p>\n<div>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_6_1_40.ggUpdateText();
		el.appendChild(els);
		me._text_6_1_40.ggIsActive=function() {
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
		me._text_6_1_40.ggUpdatePosition=function (useTransition) {
		}
		me._product_list_h12w050.appendChild(me._text_6_1_40);
		el=me._text_6_1_1_1_30=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._text_6_1_1_1_30;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._text_6_1_1_1_30__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 6_1_1_1_3";
		el.ggDy=105;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(0,0,0,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 7px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 105px);';
		hs+='visibility : inherit;';
		hs+='width : 40%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='bottom: 0px;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+="text-overflow: ellipsis;";
		els.setAttribute('style',hs);
		me._text_6_1_1_1_30.ggUpdateText=function() {
			var params = [];
			var hs = player._("<div class=\"ggmarkdown\"><p>70 pieces<\/p>\n<div>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_6_1_1_1_30.ggUpdateText();
		el.appendChild(els);
		me._text_6_1_1_1_30.ggIsActive=function() {
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
		me._text_6_1_1_1_30.ggUpdatePosition=function (useTransition) {
		}
		me._product_list_h12w050.appendChild(me._text_6_1_1_1_30);
		el=me._text_6_1_1_40=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._text_6_1_1_40;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._text_6_1_1_40__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 6_1_1_4";
		el.ggDy=105;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(168,168,168,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 85px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 105px);';
		hs+='visibility : inherit;';
		hs+='width : 35%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='bottom: 0px;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+="text-overflow: ellipsis;";
		els.setAttribute('style',hs);
		me._text_6_1_1_40.ggUpdateText=function() {
			var params = [];
			var hs = player._("<div class=\"ggmarkdown\"><p>(MOQ)<\/p>\n<div>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_6_1_1_40.ggUpdateText();
		el.appendChild(els);
		me._text_6_1_1_40.ggIsActive=function() {
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
		me._text_6_1_1_40.ggUpdatePosition=function (useTransition) {
		}
		me._product_list_h12w050.appendChild(me._text_6_1_1_40);
		el=me._rectangle_4_30=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._rectangle_4_30;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="Rectangle 4_3";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 5px;';
		hs+='cursor : default;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((95% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 95%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_4_30.ggIsActive=function() {
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
		me._rectangle_4_30.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_117=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._svg_117;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._svg_117__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjMwIiB2aWV3Qm94PSIwIDAgMTEwIDMwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMTAiPgogPHJlY3QgZmlsbD0iIzE5Mjg0NSIgaGVpZ2h0PSIzMCIgcng9IjE1IiB3aWR0aD0iMTEwIi8+CiA8cGF0aCBmaWxsPSJ3aGl0ZSIgZD0iTTIyLjAxMTQgMjFWOS4zNjM2NEgyNi42NzA1QzI3LjUyNjUgOS4zNjM2NCAyOC4yNDA1IDkuNDkwNTMgMjguODEyNSA5Ljc0NDMyQzI5LjM4NDUgOS45OTgxMSAyOS44MTQ0IDEwLjM1MDQgMzAuMTAyMyAxMC44MDExQzMwLjM5MDIgMTEuMjQ4MSAzMC41MzQxIDExLjc2MzMgMzAuNT'+
			'M0MSAxMi4zNDY2QzMwLjUzNDEgMTIuODAxMSAzMC40NDMyIDEzLjIwMDggMzAuMjYxNCAxMy41NDU1QzMwLjA3OTUgMTMuODg2NCAyOS44Mjk1IDE0LjE2NjcgMjkuNTExNCAxNC4zODY0QzI5LjE5NyAxNC42MDIzIDI4LjgzNzEgMTQuNzU1NyAyOC40MzE4IDE0Ljg0NjZWMTQuOTYwMkMyOC44NzUgMTQuOTc5MiAyOS4yODk4IDE1LjEwNDIgMjkuNjc2MSAxNS4zMzUyQzMwLjA2NjMgMTUuNTY2MyAzMC4zODI2IDE1Ljg5MDIgMzAuNjI1IDE2LjMwNjhDMzAuODY3NCAxNi43MTk3IDMwLjk4ODYgMTcuMjEyMSAzMC45ODg2IDE3Ljc4NDFDMzAuOTg4NiAxOC40MDE1IDMwLjgzNTIgMTguOTUyNyAz'+
			'MC41Mjg0IDE5LjQzNzVDMzAuMjI1NCAxOS45MTg2IDI5Ljc3NjUgMjAuMjk5MiAyOS4xODE4IDIwLjU3OTVDMjguNTg3MSAyMC44NTk4IDI3Ljg1NDIgMjEgMjYuOTgzIDIxSDIyLjAxMTRaTTI0LjQ3MTYgMTguOTg4NkgyNi40NzczQzI3LjE2MjkgMTguOTg4NiAyNy42NjI5IDE4Ljg1OCAyNy45NzczIDE4LjU5NjZDMjguMjkxNyAxOC4zMzE0IDI4LjQ0ODkgMTcuOTc5MiAyOC40NDg5IDE3LjUzOThDMjguNDQ4OSAxNy4yMTc4IDI4LjM3MTIgMTYuOTMzNyAyOC4yMTU5IDE2LjY4NzVDMjguMDYwNiAxNi40NDEzIDI3LjgzOSAxNi4yNDgxIDI3LjU1MTEgMTYuMTA4QzI3LjI2NyAxNS45Njc4ID'+
			'I2LjkyOCAxNS44OTc3IDI2LjUzNDEgMTUuODk3N0gyNC40NzE2VjE4Ljk4ODZaTTI0LjQ3MTYgMTQuMjMzSDI2LjI5NTVDMjYuNjMyNiAxNC4yMzMgMjYuOTMxOCAxNC4xNzQyIDI3LjE5MzIgMTQuMDU2OEMyNy40NTgzIDEzLjkzNTYgMjcuNjY2NyAxMy43NjUyIDI3LjgxODIgMTMuNTQ1NUMyNy45NzM1IDEzLjMyNTggMjguMDUxMSAxMy4wNjI1IDI4LjA1MTEgMTIuNzU1N0MyOC4wNTExIDEyLjMzNTIgMjcuOTAxNSAxMS45OTYyIDI3LjYwMjMgMTEuNzM4NkMyNy4zMDY4IDExLjQ4MTEgMjYuODg2NCAxMS4zNTIzIDI2LjM0MDkgMTEuMzUyM0gyNC40NzE2VjE0LjIzM1pNMzguMTQwNiAxNy4y'+
			'ODQxVjEyLjI3MjdINDAuNTYxMVYyMUgzOC4yMzcyVjE5LjQxNDhIMzguMTQ2M0MzNy45NDkzIDE5LjkyNjEgMzcuNjIxNyAyMC4zMzcxIDM3LjE2MzQgMjAuNjQ3N0MzNi43MDg4IDIwLjk1ODMgMzYuMTUzOSAyMS4xMTM2IDM1LjQ5ODYgMjEuMTEzNkMzNC45MTUyIDIxLjExMzYgMzQuNDAyIDIwLjk4MTEgMzMuOTU4OCAyMC43MTU5QzMzLjUxNTYgMjAuNDUwOCAzMy4xNjkgMjAuMDczOSAzMi45MTkgMTkuNTg1MkMzMi42NzI4IDE5LjA5NjYgMzIuNTQ3OCAxOC41MTE0IDMyLjU0NCAxNy44Mjk1VjEyLjI3MjdIMzQuOTY0NVYxNy4zOTc3QzM0Ljk2ODMgMTcuOTEyOSAzNS4xMDY1IDE4LjMyMD'+
			'EgMzUuMzc5MyAxOC42MTkzQzM1LjY1MiAxOC45MTg2IDM2LjAxNzUgMTkuMDY4MiAzNi40NzU5IDE5LjA2ODJDMzYuNzY3NSAxOS4wNjgyIDM3LjA0MDIgMTkuMDAxOSAzNy4yOTQgMTguODY5M0MzNy41NDc4IDE4LjczMyAzNy43NTI0IDE4LjUzMjIgMzcuOTA3NyAxOC4yNjdDMzguMDY2OCAxOC4wMDE5IDM4LjE0NDQgMTcuNjc0MiAzOC4xNDA2IDE3LjI4NDFaTTQzLjk5MTUgMjQuMjcyN0M0My42ODQ3IDI0LjI3MjcgNDMuMzk2OCAyNC4yNDgxIDQzLjEyNzggMjQuMTk4OUM0Mi44NjI3IDI0LjE1MzQgNDIuNjQzIDI0LjA5NDcgNDIuNDY4OCAyNC4wMjI3TDQzLjAxNDIgMjIuMjE1OUM0My4y'+
			'OTgzIDIyLjMwMyA0My41NTQgMjIuMzUwNCA0My43ODEyIDIyLjM1OEM0NC4wMTIzIDIyLjM2NTUgNDQuMjExMiAyMi4zMTI1IDQ0LjM3NzggMjIuMTk4OUM0NC41NDgzIDIyLjA4NTIgNDQuNjg2NiAyMS44OTIgNDQuNzkyNiAyMS42MTkzTDQ0LjkzNDcgMjEuMjVMNDEuODA0IDEyLjI3MjdINDQuMzQ5NEw0Ni4xNTYyIDE4LjY4MThINDYuMjQ3Mkw0OC4wNzEgMTIuMjcyN0g1MC42MzM1TDQ3LjI0MTUgMjEuOTQzMkM0Ny4wNzg2IDIyLjQxMjkgNDYuODU3IDIyLjgyMiA0Ni41NzY3IDIzLjE3MDVDNDYuMzAwMiAyMy41MjI3IDQ1Ljk0OTggMjMuNzkzNiA0NS41MjU2IDIzLjk4M0M0NS4xMDEzID'+
			'I0LjE3NjEgNDQuNTkgMjQuMjcyNyA0My45OTE1IDI0LjI3MjdaTTY1LjM1MzcgOS4zNjM2NFYyMUg2My4yMjg3TDU4LjE2NjIgMTMuNjc2MUg1OC4wODFWMjFINTUuNjIwN1Y5LjM2MzY0SDU3Ljc3OThMNjIuODAyNiAxNi42ODE4SDYyLjkwNDhWOS4zNjM2NEg2NS4zNTM3Wk03MS4yODQxIDIxLjE3MDVDNzAuNDAxNSAyMS4xNzA1IDY5LjYzODMgMjAuOTgzIDY4Ljk5NDMgMjAuNjA4QzY4LjM1NDIgMjAuMjI5MiA2Ny44NTk4IDE5LjcwMjcgNjcuNTExNCAxOS4wMjg0QzY3LjE2MjkgMTguMzUwNCA2Ni45ODg2IDE3LjU2NDQgNjYuOTg4NiAxNi42NzA1QzY2Ljk4ODYgMTUuNzY4OSA2Ny4xNjI5'+
			'IDE0Ljk4MTEgNjcuNTExNCAxNC4zMDY4QzY3Ljg1OTggMTMuNjI4OCA2OC4zNTQyIDEzLjEwMjMgNjguOTk0MyAxMi43MjczQzY5LjYzODMgMTIuMzQ4NSA3MC40MDE1IDEyLjE1OTEgNzEuMjg0MSAxMi4xNTkxQzcyLjE2NjcgMTIuMTU5MSA3Mi45MjggMTIuMzQ4NSA3My41NjgyIDEyLjcyNzNDNzQuMjEyMSAxMy4xMDIzIDc0LjcwODMgMTMuNjI4OCA3NS4wNTY4IDE0LjMwNjhDNzUuNDA1MyAxNC45ODExIDc1LjU3OTUgMTUuNzY4OSA3NS41Nzk1IDE2LjY3MDVDNzUuNTc5NSAxNy41NjQ0IDc1LjQwNTMgMTguMzUwNCA3NS4wNTY4IDE5LjAyODRDNzQuNzA4MyAxOS43MDI3IDc0LjIxMjEgMj'+
			'AuMjI5MiA3My41NjgyIDIwLjYwOEM3Mi45MjggMjAuOTgzIDcyLjE2NjcgMjEuMTcwNSA3MS4yODQxIDIxLjE3MDVaTTcxLjI5NTUgMTkuMjk1NUM3MS42OTcgMTkuMjk1NSA3Mi4wMzIyIDE5LjE4MTggNzIuMzAxMSAxOC45NTQ1QzcyLjU3MDEgMTguNzIzNSA3Mi43NzI3IDE4LjQwOTEgNzIuOTA5MSAxOC4wMTE0QzczLjA0OTIgMTcuNjEzNiA3My4xMTkzIDE3LjE2MSA3My4xMTkzIDE2LjY1MzRDNzMuMTE5MyAxNi4xNDU4IDczLjA0OTIgMTUuNjkzMiA3Mi45MDkxIDE1LjI5NTVDNzIuNzcyNyAxNC44OTc3IDcyLjU3MDEgMTQuNTgzMyA3Mi4zMDExIDE0LjM1MjNDNzIuMDMyMiAxNC4xMjEy'+
			'IDcxLjY5NyAxNC4wMDU3IDcxLjI5NTUgMTQuMDA1N0M3MC44OTAyIDE0LjAwNTcgNzAuNTQ5MiAxNC4xMjEyIDcwLjI3MjcgMTQuMzUyM0M3MCAxNC41ODMzIDY5Ljc5MzYgMTQuODk3NyA2OS42NTM0IDE1LjI5NTVDNjkuNTE3IDE1LjY5MzIgNjkuNDQ4OSAxNi4xNDU4IDY5LjQ0ODkgMTYuNjUzNEM2OS40NDg5IDE3LjE2MSA2OS41MTcgMTcuNjEzNiA2OS42NTM0IDE4LjAxMTRDNjkuNzkzNiAxOC40MDkxIDcwIDE4LjcyMzUgNzAuMjcyNyAxOC45NTQ1QzcwLjU0OTIgMTkuMTgxOCA3MC44OTAyIDE5LjI5NTUgNzEuMjk1NSAxOS4yOTU1Wk03OC42NTYyIDIxTDc2LjI4MTIgMTIuMjcyN0g3OC'+
			'43MzAxTDgwLjA4MjQgMTguMTM2NEg4MC4xNjE5TDgxLjU3MSAxMi4yNzI3SDgzLjk3NDRMODUuNDA2MiAxOC4xMDIzSDg1LjQ4MDFMODYuODA5NyAxMi4yNzI3SDg5LjI1MjhMODYuODgzNSAyMUg4NC4zMjFMODIuODIxIDE1LjUxMTRIODIuNzEzMUw4MS4yMTMxIDIxSDc4LjY1NjJaIi8+Cjwvc3ZnPgo=';
		me._svg_117__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._svg_117__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjMwIiB2aWV3Qm94PSIwIDAgMTEwIDMwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMTAiPgogPHJlY3QgZmlsbD0iI0QzMzQzNCIgaGVpZ2h0PSIzMCIgcng9IjE1IiB3aWR0aD0iMTEwIi8+CiA8cGF0aCBmaWxsPSJ3aGl0ZSIgZD0iTTIyLjAxMTQgMjFWOS4zNjM2NEgyNi42NzA1QzI3LjUyNjUgOS4zNjM2NCAyOC4yNDA1IDkuNDkwNTMgMjguODEyNSA5Ljc0NDMyQzI5LjM4NDUgOS45OTgxMSAyOS44MTQ0IDEwLjM1MDQgMzAuMTAyMyAxMC44MDExQzMwLjM5MDIgMTEuMjQ4MSAzMC41MzQxIDExLjc2MzMgMzAuNT'+
			'M0MSAxMi4zNDY2QzMwLjUzNDEgMTIuODAxMSAzMC40NDMyIDEzLjIwMDggMzAuMjYxNCAxMy41NDU1QzMwLjA3OTUgMTMuODg2NCAyOS44Mjk1IDE0LjE2NjcgMjkuNTExNCAxNC4zODY0QzI5LjE5NyAxNC42MDIzIDI4LjgzNzEgMTQuNzU1NyAyOC40MzE4IDE0Ljg0NjZWMTQuOTYwMkMyOC44NzUgMTQuOTc5MiAyOS4yODk4IDE1LjEwNDIgMjkuNjc2MSAxNS4zMzUyQzMwLjA2NjMgMTUuNTY2MyAzMC4zODI2IDE1Ljg5MDIgMzAuNjI1IDE2LjMwNjhDMzAuODY3NCAxNi43MTk3IDMwLjk4ODYgMTcuMjEyMSAzMC45ODg2IDE3Ljc4NDFDMzAuOTg4NiAxOC40MDE1IDMwLjgzNTIgMTguOTUyNyAz'+
			'MC41Mjg0IDE5LjQzNzVDMzAuMjI1NCAxOS45MTg2IDI5Ljc3NjUgMjAuMjk5MiAyOS4xODE4IDIwLjU3OTVDMjguNTg3MSAyMC44NTk4IDI3Ljg1NDIgMjEgMjYuOTgzIDIxSDIyLjAxMTRaTTI0LjQ3MTYgMTguOTg4NkgyNi40NzczQzI3LjE2MjkgMTguOTg4NiAyNy42NjI5IDE4Ljg1OCAyNy45NzczIDE4LjU5NjZDMjguMjkxNyAxOC4zMzE0IDI4LjQ0ODkgMTcuOTc5MiAyOC40NDg5IDE3LjUzOThDMjguNDQ4OSAxNy4yMTc4IDI4LjM3MTIgMTYuOTMzNyAyOC4yMTU5IDE2LjY4NzVDMjguMDYwNiAxNi40NDEzIDI3LjgzOSAxNi4yNDgxIDI3LjU1MTEgMTYuMTA4QzI3LjI2NyAxNS45Njc4ID'+
			'I2LjkyOCAxNS44OTc3IDI2LjUzNDEgMTUuODk3N0gyNC40NzE2VjE4Ljk4ODZaTTI0LjQ3MTYgMTQuMjMzSDI2LjI5NTVDMjYuNjMyNiAxNC4yMzMgMjYuOTMxOCAxNC4xNzQyIDI3LjE5MzIgMTQuMDU2OEMyNy40NTgzIDEzLjkzNTYgMjcuNjY2NyAxMy43NjUyIDI3LjgxODIgMTMuNTQ1NUMyNy45NzM1IDEzLjMyNTggMjguMDUxMSAxMy4wNjI1IDI4LjA1MTEgMTIuNzU1N0MyOC4wNTExIDEyLjMzNTIgMjcuOTAxNSAxMS45OTYyIDI3LjYwMjMgMTEuNzM4NkMyNy4zMDY4IDExLjQ4MTEgMjYuODg2NCAxMS4zNTIzIDI2LjM0MDkgMTEuMzUyM0gyNC40NzE2VjE0LjIzM1pNMzguMTQwNiAxNy4y'+
			'ODQxVjEyLjI3MjdINDAuNTYxMVYyMUgzOC4yMzcyVjE5LjQxNDhIMzguMTQ2M0MzNy45NDkzIDE5LjkyNjEgMzcuNjIxNyAyMC4zMzcxIDM3LjE2MzQgMjAuNjQ3N0MzNi43MDg4IDIwLjk1ODMgMzYuMTUzOSAyMS4xMTM2IDM1LjQ5ODYgMjEuMTEzNkMzNC45MTUyIDIxLjExMzYgMzQuNDAyIDIwLjk4MTEgMzMuOTU4OCAyMC43MTU5QzMzLjUxNTYgMjAuNDUwOCAzMy4xNjkgMjAuMDczOSAzMi45MTkgMTkuNTg1MkMzMi42NzI4IDE5LjA5NjYgMzIuNTQ3OCAxOC41MTE0IDMyLjU0NCAxNy44Mjk1VjEyLjI3MjdIMzQuOTY0NVYxNy4zOTc3QzM0Ljk2ODMgMTcuOTEyOSAzNS4xMDY1IDE4LjMyMD'+
			'EgMzUuMzc5MyAxOC42MTkzQzM1LjY1MiAxOC45MTg2IDM2LjAxNzUgMTkuMDY4MiAzNi40NzU5IDE5LjA2ODJDMzYuNzY3NSAxOS4wNjgyIDM3LjA0MDIgMTkuMDAxOSAzNy4yOTQgMTguODY5M0MzNy41NDc4IDE4LjczMyAzNy43NTI0IDE4LjUzMjIgMzcuOTA3NyAxOC4yNjdDMzguMDY2OCAxOC4wMDE5IDM4LjE0NDQgMTcuNjc0MiAzOC4xNDA2IDE3LjI4NDFaTTQzLjk5MTUgMjQuMjcyN0M0My42ODQ3IDI0LjI3MjcgNDMuMzk2OCAyNC4yNDgxIDQzLjEyNzggMjQuMTk4OUM0Mi44NjI3IDI0LjE1MzQgNDIuNjQzIDI0LjA5NDcgNDIuNDY4OCAyNC4wMjI3TDQzLjAxNDIgMjIuMjE1OUM0My4y'+
			'OTgzIDIyLjMwMyA0My41NTQgMjIuMzUwNCA0My43ODEyIDIyLjM1OEM0NC4wMTIzIDIyLjM2NTUgNDQuMjExMiAyMi4zMTI1IDQ0LjM3NzggMjIuMTk4OUM0NC41NDgzIDIyLjA4NTIgNDQuNjg2NiAyMS44OTIgNDQuNzkyNiAyMS42MTkzTDQ0LjkzNDcgMjEuMjVMNDEuODA0IDEyLjI3MjdINDQuMzQ5NEw0Ni4xNTYyIDE4LjY4MThINDYuMjQ3Mkw0OC4wNzEgMTIuMjcyN0g1MC42MzM1TDQ3LjI0MTUgMjEuOTQzMkM0Ny4wNzg2IDIyLjQxMjkgNDYuODU3IDIyLjgyMiA0Ni41NzY3IDIzLjE3MDVDNDYuMzAwMiAyMy41MjI3IDQ1Ljk0OTggMjMuNzkzNiA0NS41MjU2IDIzLjk4M0M0NS4xMDEzID'+
			'I0LjE3NjEgNDQuNTkgMjQuMjcyNyA0My45OTE1IDI0LjI3MjdaTTY1LjM1MzcgOS4zNjM2NFYyMUg2My4yMjg3TDU4LjE2NjIgMTMuNjc2MUg1OC4wODFWMjFINTUuNjIwN1Y5LjM2MzY0SDU3Ljc3OThMNjIuODAyNiAxNi42ODE4SDYyLjkwNDhWOS4zNjM2NEg2NS4zNTM3Wk03MS4yODQxIDIxLjE3MDVDNzAuNDAxNSAyMS4xNzA1IDY5LjYzODMgMjAuOTgzIDY4Ljk5NDMgMjAuNjA4QzY4LjM1NDIgMjAuMjI5MiA2Ny44NTk4IDE5LjcwMjcgNjcuNTExNCAxOS4wMjg0QzY3LjE2MjkgMTguMzUwNCA2Ni45ODg2IDE3LjU2NDQgNjYuOTg4NiAxNi42NzA1QzY2Ljk4ODYgMTUuNzY4OSA2Ny4xNjI5'+
			'IDE0Ljk4MTEgNjcuNTExNCAxNC4zMDY4QzY3Ljg1OTggMTMuNjI4OCA2OC4zNTQyIDEzLjEwMjMgNjguOTk0MyAxMi43MjczQzY5LjYzODMgMTIuMzQ4NSA3MC40MDE1IDEyLjE1OTEgNzEuMjg0MSAxMi4xNTkxQzcyLjE2NjcgMTIuMTU5MSA3Mi45MjggMTIuMzQ4NSA3My41NjgyIDEyLjcyNzNDNzQuMjEyMSAxMy4xMDIzIDc0LjcwODMgMTMuNjI4OCA3NS4wNTY4IDE0LjMwNjhDNzUuNDA1MyAxNC45ODExIDc1LjU3OTUgMTUuNzY4OSA3NS41Nzk1IDE2LjY3MDVDNzUuNTc5NSAxNy41NjQ0IDc1LjQwNTMgMTguMzUwNCA3NS4wNTY4IDE5LjAyODRDNzQuNzA4MyAxOS43MDI3IDc0LjIxMjEgMj'+
			'AuMjI5MiA3My41NjgyIDIwLjYwOEM3Mi45MjggMjAuOTgzIDcyLjE2NjcgMjEuMTcwNSA3MS4yODQxIDIxLjE3MDVaTTcxLjI5NTUgMTkuMjk1NUM3MS42OTcgMTkuMjk1NSA3Mi4wMzIyIDE5LjE4MTggNzIuMzAxMSAxOC45NTQ1QzcyLjU3MDEgMTguNzIzNSA3Mi43NzI3IDE4LjQwOTEgNzIuOTA5MSAxOC4wMTE0QzczLjA0OTIgMTcuNjEzNiA3My4xMTkzIDE3LjE2MSA3My4xMTkzIDE2LjY1MzRDNzMuMTE5MyAxNi4xNDU4IDczLjA0OTIgMTUuNjkzMiA3Mi45MDkxIDE1LjI5NTVDNzIuNzcyNyAxNC44OTc3IDcyLjU3MDEgMTQuNTgzMyA3Mi4zMDExIDE0LjM1MjNDNzIuMDMyMiAxNC4xMjEy'+
			'IDcxLjY5NyAxNC4wMDU3IDcxLjI5NTUgMTQuMDA1N0M3MC44OTAyIDE0LjAwNTcgNzAuNTQ5MiAxNC4xMjEyIDcwLjI3MjcgMTQuMzUyM0M3MCAxNC41ODMzIDY5Ljc5MzYgMTQuODk3NyA2OS42NTM0IDE1LjI5NTVDNjkuNTE3IDE1LjY5MzIgNjkuNDQ4OSAxNi4xNDU4IDY5LjQ0ODkgMTYuNjUzNEM2OS40NDg5IDE3LjE2MSA2OS41MTcgMTcuNjEzNiA2OS42NTM0IDE4LjAxMTRDNjkuNzkzNiAxOC40MDkxIDcwIDE4LjcyMzUgNzAuMjcyNyAxOC45NTQ1QzcwLjU0OTIgMTkuMTgxOCA3MC44OTAyIDE5LjI5NTUgNzEuMjk1NSAxOS4yOTU1Wk03OC42NTYyIDIxTDc2LjI4MTIgMTIuMjcyN0g3OC'+
			'43MzAxTDgwLjA4MjQgMTguMTM2NEg4MC4xNjE5TDgxLjU3MSAxMi4yNzI3SDgzLjk3NDRMODUuNDA2MiAxOC4xMDIzSDg1LjQ4MDFMODYuODA5NyAxMi4yNzI3SDg5LjI1MjhMODYuODgzNSAyMUg4NC4zMjFMODIuODIxIDE1LjUxMTRIODIuNzEzMUw4MS4yMTMxIDIxSDc4LjY1NjJaIi8+Cjwvc3ZnPgo=';
		me._svg_117__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="Svg 11";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 23px;';
		hs+='position : absolute;';
		hs+='right : 5px;';
		hs+='top : calc(50% - ((23px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 90px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_117.ggIsActive=function() {
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
		me._svg_117.onclick=function (e) {
			if (me._svg_117.isDragging()) return;
			player.openUrl("https:\/\/www.javiddo.com\/product\/yag-filtri-2105101200500","_blank");
			var list=me.findElements("products_list",true);
			while(list.length>0) {
				var e=list.pop();
				e.style.transition='none';
				e.style.visibility='hidden';
				e.ggVisible=false;
			}
		}
		me._svg_117.onmouseover=function (e) {
			me._svg_117__img.style.visibility='hidden';
			me._svg_117__imgo.style.visibility='inherit';
			me.elementMouseOver['svg_117']=true;
		}
		me._svg_117.onmouseout=function (e) {
			me._svg_117__img.style.visibility='inherit';
			me._svg_117__imgo.style.visibility='hidden';
			me.elementMouseOver['svg_117']=false;
		}
		me._svg_117.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['svg_117']) {
				me._svg_117__img.style.visibility='hidden';
				me._svg_117__imgo.style.visibility='inherit';
				me.elementMouseOver['svg_117']=true;
			}
		}
		me._svg_117.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_4_30.appendChild(me._svg_117);
		el=me._svg_137=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._svg_137;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._svg_137__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjMwIiB2aWV3Qm94PSIwIDAgMTEwIDMwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMTAiPgogPHJlY3QgZmlsbD0iI0Y2OTIxRSIgaGVpZ2h0PSIzMCIgcng9IjE1IiB3aWR0aD0iMTEwIi8+CiA8cGF0aCBmaWxsPSJ3aGl0ZSIgZD0iTTM4LjM5NDkgOS4zNjM2NEw0MS4yMDc0IDE4LjIwNDVINDEuMzE1M0w0NC4xMzM1IDkuMzYzNjRINDYuODYwOEw0Mi44NDk0IDIxSDM5LjY3OUwzNS42NjE5IDkuMzYzNjRIMzguMzk0OVpNNDguMjE1OSAyMVYxMi4yNzI3SDUwLjYzNjRWMjFINDguMjE1OVpNNDkuNDMxOCAxMS4xND'+
			'c3QzQ5LjA3MiAxMS4xNDc3IDQ4Ljc2MzMgMTEuMDI4NCA0OC41MDU3IDEwLjc4OThDNDguMjUxOSAxMC41NDczIDQ4LjEyNSAxMC4yNTc2IDQ4LjEyNSA5LjkyMDQ1QzQ4LjEyNSA5LjU4NzEyIDQ4LjI1MTkgOS4zMDExNCA0OC41MDU3IDkuMDYyNUM0OC43NjMzIDguODIwMDggNDkuMDcyIDguNjk4ODYgNDkuNDMxOCA4LjY5ODg2QzQ5Ljc5MTcgOC42OTg4NiA1MC4wOTg1IDguODIwMDggNTAuMzUyMyA5LjA2MjVDNTAuNjA5OCA5LjMwMTE0IDUwLjczODYgOS41ODcxMiA1MC43Mzg2IDkuOTIwNDVDNTAuNzM4NiAxMC4yNTc2IDUwLjYwOTggMTAuNTQ3MyA1MC4zNTIzIDEwLjc4OThDNTAuMDk4'+
			'NSAxMS4wMjg0IDQ5Ljc5MTcgMTEuMTQ3NyA0OS40MzE4IDExLjE0NzdaTTU2LjU1MjYgMjEuMTcwNUM1NS42NTQ4IDIxLjE3MDUgNTQuODgyMSAyMC45ODg2IDU0LjIzNDQgMjAuNjI1QzUzLjU5MDQgMjAuMjU3NiA1My4wOTQyIDE5LjczODYgNTIuNzQ1NyAxOS4wNjgyQzUyLjM5NzMgMTguMzkzOSA1Mi4yMjMgMTcuNTk2NiA1Mi4yMjMgMTYuNjc2MUM1Mi4yMjMgMTUuNzc4NCA1Mi4zOTczIDE0Ljk5MDUgNTIuNzQ1NyAxNC4zMTI1QzUzLjA5NDIgMTMuNjM0NSA1My41ODQ4IDEzLjEwNjEgNTQuMjE3MyAxMi43MjczQzU0Ljg1MzcgMTIuMzQ4NSA1NS41OTk5IDEyLjE1OTEgNTYuNDU2IDEyLj'+
			'E1OTFDNTcuMDMxNyAxMi4xNTkxIDU3LjU2NzcgMTIuMjUxOSA1OC4wNjM5IDEyLjQzNzVDNTguNTYzOSAxMi42MTkzIDU4Ljk5OTUgMTIuODkzOSA1OS4zNzA3IDEzLjI2MTRDNTkuNzQ1NyAxMy42Mjg4IDYwLjAzNzQgMTQuMDkwOSA2MC4yNDU3IDE0LjY0NzdDNjAuNDU0MSAxNS4yMDA4IDYwLjU1ODIgMTUuODQ4NSA2MC41NTgyIDE2LjU5MDlWMTcuMjU1N0g1My4xODg5VjE1Ljc1NTdINTguMjc5OEM1OC4yNzk4IDE1LjQwNzIgNTguMjA0MSAxNS4wOTg1IDU4LjA1MjYgMTQuODI5NUM1Ny45MDEgMTQuNTYwNiA1Ny42OTA4IDE0LjM1MDQgNTcuNDIxOSAxNC4xOTg5QzU3LjE1NjcgMTQuMDQz'+
			'NiA1Ni44NDggMTMuOTY1OSA1Ni40OTU3IDEzLjk2NTlDNTYuMTI4MyAxMy45NjU5IDU1LjgwMjYgMTQuMDUxMSA1NS41MTg1IDE0LjIyMTZDNTUuMjM4MiAxNC4zODgzIDU1LjAxODUgMTQuNjEzNiA1NC44NTk0IDE0Ljg5NzdDNTQuNzAwMyAxNS4xNzggNTQuNjE4OCAxNS40OTA1IDU0LjYxNTEgMTUuODM1MlYxNy4yNjE0QzU0LjYxNTEgMTcuNjkzMiA1NC42OTQ2IDE4LjA2NjMgNTQuODUzNyAxOC4zODA3QzU1LjAxNjYgMTguNjk1MSA1NS4yNDU3IDE4LjkzNzUgNTUuNTQxMiAxOS4xMDhDNTUuODM2NiAxOS4yNzg0IDU2LjE4NyAxOS4zNjM2IDU2LjU5MjMgMTkuMzYzNkM1Ni44NjEzIDE5Lj'+
			'M2MzYgNTcuMTA3NSAxOS4zMjU4IDU3LjMzMSAxOS4yNUM1Ny41NTQ1IDE5LjE3NDIgNTcuNzQ1NyAxOS4wNjA2IDU3LjkwNDggMTguOTA5MUM1OC4wNjM5IDE4Ljc1NzYgNTguMTg1MSAxOC41NzIgNTguMjY4NSAxOC4zNTIzTDYwLjUwNzEgMTguNUM2MC4zOTM1IDE5LjAzNzkgNjAuMTYwNSAxOS41MDc2IDU5LjgwODIgMTkuOTA5MUM1OS40NTk4IDIwLjMwNjggNTkuMDA5IDIwLjYxNzQgNTguNDU2IDIwLjg0MDlDNTcuOTA2NyAyMS4wNjA2IDU3LjI3MjMgMjEuMTcwNSA1Ni41NTI2IDIxLjE3MDVaTTYzLjc5NjkgMjFMNjEuNDIxOSAxMi4yNzI3SDYzLjg3MDdMNjUuMjIzIDE4LjEzNjRINjUu'+
			'MzAyNkw2Ni43MTE2IDEyLjI3MjdINjkuMTE1MUw3MC41NDY5IDE4LjEwMjNINzAuNjIwN0w3MS45NTAzIDEyLjI3MjdINzQuMzkzNUw3Mi4wMjQxIDIxSDY5LjQ2MTZMNjcuOTYxNiAxNS41MTE0SDY3Ljg1MzdMNjYuMzUzNyAyMUg2My43OTY5WiIvPgo8L3N2Zz4K';
		me._svg_137__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._svg_137__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjMwIiB2aWV3Qm94PSIwIDAgMTEwIDMwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMTAiPgogPHJlY3QgZmlsbD0iI0FGNUUwMCIgaGVpZ2h0PSIzMCIgcng9IjE1IiB3aWR0aD0iMTEwIi8+CiA8cGF0aCBmaWxsPSJ3aGl0ZSIgZD0iTTM4LjM5NDkgOS4zNjM2NEw0MS4yMDc0IDE4LjIwNDVINDEuMzE1M0w0NC4xMzM1IDkuMzYzNjRINDYuODYwOEw0Mi44NDk0IDIxSDM5LjY3OUwzNS42NjE5IDkuMzYzNjRIMzguMzk0OVpNNDguMjE1OSAyMVYxMi4yNzI3SDUwLjYzNjRWMjFINDguMjE1OVpNNDkuNDMxOCAxMS4xND'+
			'c3QzQ5LjA3MiAxMS4xNDc3IDQ4Ljc2MzMgMTEuMDI4NCA0OC41MDU3IDEwLjc4OThDNDguMjUxOSAxMC41NDczIDQ4LjEyNSAxMC4yNTc2IDQ4LjEyNSA5LjkyMDQ1QzQ4LjEyNSA5LjU4NzEyIDQ4LjI1MTkgOS4zMDExNCA0OC41MDU3IDkuMDYyNUM0OC43NjMzIDguODIwMDggNDkuMDcyIDguNjk4ODYgNDkuNDMxOCA4LjY5ODg2QzQ5Ljc5MTcgOC42OTg4NiA1MC4wOTg1IDguODIwMDggNTAuMzUyMyA5LjA2MjVDNTAuNjA5OCA5LjMwMTE0IDUwLjczODYgOS41ODcxMiA1MC43Mzg2IDkuOTIwNDVDNTAuNzM4NiAxMC4yNTc2IDUwLjYwOTggMTAuNTQ3MyA1MC4zNTIzIDEwLjc4OThDNTAuMDk4'+
			'NSAxMS4wMjg0IDQ5Ljc5MTcgMTEuMTQ3NyA0OS40MzE4IDExLjE0NzdaTTU2LjU1MjYgMjEuMTcwNUM1NS42NTQ4IDIxLjE3MDUgNTQuODgyMSAyMC45ODg2IDU0LjIzNDQgMjAuNjI1QzUzLjU5MDQgMjAuMjU3NiA1My4wOTQyIDE5LjczODYgNTIuNzQ1NyAxOS4wNjgyQzUyLjM5NzMgMTguMzkzOSA1Mi4yMjMgMTcuNTk2NiA1Mi4yMjMgMTYuNjc2MUM1Mi4yMjMgMTUuNzc4NCA1Mi4zOTczIDE0Ljk5MDUgNTIuNzQ1NyAxNC4zMTI1QzUzLjA5NDIgMTMuNjM0NSA1My41ODQ4IDEzLjEwNjEgNTQuMjE3MyAxMi43MjczQzU0Ljg1MzcgMTIuMzQ4NSA1NS41OTk5IDEyLjE1OTEgNTYuNDU2IDEyLj'+
			'E1OTFDNTcuMDMxNyAxMi4xNTkxIDU3LjU2NzcgMTIuMjUxOSA1OC4wNjM5IDEyLjQzNzVDNTguNTYzOSAxMi42MTkzIDU4Ljk5OTUgMTIuODkzOSA1OS4zNzA3IDEzLjI2MTRDNTkuNzQ1NyAxMy42Mjg4IDYwLjAzNzQgMTQuMDkwOSA2MC4yNDU3IDE0LjY0NzdDNjAuNDU0MSAxNS4yMDA4IDYwLjU1ODIgMTUuODQ4NSA2MC41NTgyIDE2LjU5MDlWMTcuMjU1N0g1My4xODg5VjE1Ljc1NTdINTguMjc5OEM1OC4yNzk4IDE1LjQwNzIgNTguMjA0MSAxNS4wOTg1IDU4LjA1MjYgMTQuODI5NUM1Ny45MDEgMTQuNTYwNiA1Ny42OTA4IDE0LjM1MDQgNTcuNDIxOSAxNC4xOTg5QzU3LjE1NjcgMTQuMDQz'+
			'NiA1Ni44NDggMTMuOTY1OSA1Ni40OTU3IDEzLjk2NTlDNTYuMTI4MyAxMy45NjU5IDU1LjgwMjYgMTQuMDUxMSA1NS41MTg1IDE0LjIyMTZDNTUuMjM4MiAxNC4zODgzIDU1LjAxODUgMTQuNjEzNiA1NC44NTk0IDE0Ljg5NzdDNTQuNzAwMyAxNS4xNzggNTQuNjE4OCAxNS40OTA1IDU0LjYxNTEgMTUuODM1MlYxNy4yNjE0QzU0LjYxNTEgMTcuNjkzMiA1NC42OTQ2IDE4LjA2NjMgNTQuODUzNyAxOC4zODA3QzU1LjAxNjYgMTguNjk1MSA1NS4yNDU3IDE4LjkzNzUgNTUuNTQxMiAxOS4xMDhDNTUuODM2NiAxOS4yNzg0IDU2LjE4NyAxOS4zNjM2IDU2LjU5MjMgMTkuMzYzNkM1Ni44NjEzIDE5Lj'+
			'M2MzYgNTcuMTA3NSAxOS4zMjU4IDU3LjMzMSAxOS4yNUM1Ny41NTQ1IDE5LjE3NDIgNTcuNzQ1NyAxOS4wNjA2IDU3LjkwNDggMTguOTA5MUM1OC4wNjM5IDE4Ljc1NzYgNTguMTg1MSAxOC41NzIgNTguMjY4NSAxOC4zNTIzTDYwLjUwNzEgMTguNUM2MC4zOTM1IDE5LjAzNzkgNjAuMTYwNSAxOS41MDc2IDU5LjgwODIgMTkuOTA5MUM1OS40NTk4IDIwLjMwNjggNTkuMDA5IDIwLjYxNzQgNTguNDU2IDIwLjg0MDlDNTcuOTA2NyAyMS4wNjA2IDU3LjI3MjMgMjEuMTcwNSA1Ni41NTI2IDIxLjE3MDVaTTYzLjc5NjkgMjFMNjEuNDIxOSAxMi4yNzI3SDYzLjg3MDdMNjUuMjIzIDE4LjEzNjRINjUu'+
			'MzAyNkw2Ni43MTE2IDEyLjI3MjdINjkuMTE1MUw3MC41NDY5IDE4LjEwMjNINzAuNjIwN0w3MS45NTAzIDEyLjI3MjdINzQuMzkzNUw3Mi4wMjQxIDIxSDY5LjQ2MTZMNjcuOTYxNiAxNS41MTE0SDY3Ljg1MzdMNjYuMzUzNyAyMUg2My43OTY5WiIvPgo8L3N2Zz4K';
		me._svg_137__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="Svg 13";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 23px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((23px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 90px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_137.ggIsActive=function() {
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
		me._svg_137.onclick=function (e) {
			if (me._svg_137.isDragging()) return;
			player.moveTo("-101.52","-6.17","23.1","18.0000");
			var list=me.findElements("products_list",true);
			while(list.length>0) {
				var e=list.pop();
				e.style.transition='none';
				e.style.visibility='hidden';
				e.ggVisible=false;
			}
		}
		me._svg_137.onmouseover=function (e) {
			me._svg_137__img.style.visibility='hidden';
			me._svg_137__imgo.style.visibility='inherit';
			me.elementMouseOver['svg_137']=true;
		}
		me._svg_137.onmouseout=function (e) {
			me._svg_137__img.style.visibility='inherit';
			me._svg_137__imgo.style.visibility='hidden';
			me.elementMouseOver['svg_137']=false;
		}
		me._svg_137.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['svg_137']) {
				me._svg_137__img.style.visibility='hidden';
				me._svg_137__imgo.style.visibility='inherit';
				me.elementMouseOver['svg_137']=true;
			}
		}
		me._svg_137.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_4_30.appendChild(me._svg_137);
		me._product_list_h12w050.appendChild(me._rectangle_4_30);
		me._scrollarea_1__content.appendChild(me._product_list_h12w050);
		el=me._product_list_10418001090=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._product_list_10418001090;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="product_list_1041800109";
		el.ggDx=115;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle product_list";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #eeeeee;';
		hs+='border-radius : 5px;';
		hs+='cursor : default;';
		hs+='height : 300px;';
		hs+='left : calc(50% - ((200px + 2px) / 2) + 115px);';
		hs+='position : absolute;';
		hs+='top : 330px;';
		hs+='visibility : inherit;';
		hs+='width : 200px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 0%';
		me._product_list_10418001090.ggIsActive=function() {
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
		me._product_list_10418001090.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_150=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._image_150;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._image_150__img=document.createElement('img');
		els.className='ggskin ggskin_image_150';
		hs=basePath + 'images/image_150.png';
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
		el.ggId="Image 15";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 180px;';
		hs+='left : calc(50% - ((180px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 180px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_150.ggIsActive=function() {
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
		me._image_150.ggUpdatePosition=function (useTransition) {
		}
		me._product_list_10418001090.appendChild(me._image_150);
		el=me._text_6_30=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._text_6_30;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._text_6_30__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 6_3";
		el.ggDy=59;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(102,102,102,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 59px);';
		hs+='visibility : inherit;';
		hs+='width : 95%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+="text-overflow: ellipsis;";
		els.setAttribute('style',hs);
		me._text_6_30.ggUpdateText=function() {
			var params = [];
			var hs = player._("One of the most important components of your vehicle is its oil filter. Early\nengines didn\u2019t have the tight tolerances and fragile technologies as they do\ntoday such as variable valve timing controlled by electronically controlled oil\npressure. Instead, they were less complex, didn\u2019t use oil filters, and ran on\nthe poorest grade oil imaginable. Today there are various types of oil filters\nused and the truth is that they are not all created equal.", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_6_30.ggUpdateText();
		el.appendChild(els);
		me._text_6_30.ggIsActive=function() {
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
		me._text_6_30.ggUpdatePosition=function (useTransition) {
		}
		me._product_list_10418001090.appendChild(me._text_6_30);
		el=me._text_6_1_30=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._text_6_1_30;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._text_6_1_30__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 6_1_3";
		el.ggDy=82;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(0,0,0,1);';
		hs+='cursor : default;';
		hs+='height : 21px;';
		hs+='left : 7px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((21px + 0px) / 2) + 82px);';
		hs+='visibility : inherit;';
		hs+='width : 95%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='bottom: 0px;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+="text-overflow: ellipsis;";
		els.setAttribute('style',hs);
		me._text_6_1_30.ggUpdateText=function() {
			var params = [];
			var hs = player._("<div class=\"ggmarkdown\"><p><strong>$6-$11<\/strong> \/pieces<\/p>\n<div>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_6_1_30.ggUpdateText();
		el.appendChild(els);
		me._text_6_1_30.ggIsActive=function() {
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
		me._text_6_1_30.ggUpdatePosition=function (useTransition) {
		}
		me._product_list_10418001090.appendChild(me._text_6_1_30);
		el=me._text_6_1_1_1_20=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._text_6_1_1_1_20;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._text_6_1_1_1_20__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 6_1_1_1_2";
		el.ggDy=105;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(0,0,0,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 7px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 105px);';
		hs+='visibility : inherit;';
		hs+='width : 40%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='bottom: 0px;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+="text-overflow: ellipsis;";
		els.setAttribute('style',hs);
		me._text_6_1_1_1_20.ggUpdateText=function() {
			var params = [];
			var hs = player._("<div class=\"ggmarkdown\"><p>113 pieces<\/p>\n<div>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_6_1_1_1_20.ggUpdateText();
		el.appendChild(els);
		me._text_6_1_1_1_20.ggIsActive=function() {
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
		me._text_6_1_1_1_20.ggUpdatePosition=function (useTransition) {
		}
		me._product_list_10418001090.appendChild(me._text_6_1_1_1_20);
		el=me._text_6_1_1_30=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._text_6_1_1_30;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._text_6_1_1_30__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 6_1_1_3";
		el.ggDy=105;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(168,168,168,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 85px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 105px);';
		hs+='visibility : inherit;';
		hs+='width : 35%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='bottom: 0px;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+="text-overflow: ellipsis;";
		els.setAttribute('style',hs);
		me._text_6_1_1_30.ggUpdateText=function() {
			var params = [];
			var hs = player._("<div class=\"ggmarkdown\"><p>(MOQ)<\/p>\n<div>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_6_1_1_30.ggUpdateText();
		el.appendChild(els);
		me._text_6_1_1_30.ggIsActive=function() {
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
		me._text_6_1_1_30.ggUpdatePosition=function (useTransition) {
		}
		me._product_list_10418001090.appendChild(me._text_6_1_1_30);
		el=me._rectangle_4_20=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._rectangle_4_20;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="Rectangle 4_2";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 5px;';
		hs+='cursor : default;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((95% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 95%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_4_20.ggIsActive=function() {
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
		me._rectangle_4_20.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_116=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._svg_116;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._svg_116__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjMwIiB2aWV3Qm94PSIwIDAgMTEwIDMwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMTAiPgogPHJlY3QgZmlsbD0iIzE5Mjg0NSIgaGVpZ2h0PSIzMCIgcng9IjE1IiB3aWR0aD0iMTEwIi8+CiA8cGF0aCBmaWxsPSJ3aGl0ZSIgZD0iTTIyLjAxMTQgMjFWOS4zNjM2NEgyNi42NzA1QzI3LjUyNjUgOS4zNjM2NCAyOC4yNDA1IDkuNDkwNTMgMjguODEyNSA5Ljc0NDMyQzI5LjM4NDUgOS45OTgxMSAyOS44MTQ0IDEwLjM1MDQgMzAuMTAyMyAxMC44MDExQzMwLjM5MDIgMTEuMjQ4MSAzMC41MzQxIDExLjc2MzMgMzAuNT'+
			'M0MSAxMi4zNDY2QzMwLjUzNDEgMTIuODAxMSAzMC40NDMyIDEzLjIwMDggMzAuMjYxNCAxMy41NDU1QzMwLjA3OTUgMTMuODg2NCAyOS44Mjk1IDE0LjE2NjcgMjkuNTExNCAxNC4zODY0QzI5LjE5NyAxNC42MDIzIDI4LjgzNzEgMTQuNzU1NyAyOC40MzE4IDE0Ljg0NjZWMTQuOTYwMkMyOC44NzUgMTQuOTc5MiAyOS4yODk4IDE1LjEwNDIgMjkuNjc2MSAxNS4zMzUyQzMwLjA2NjMgMTUuNTY2MyAzMC4zODI2IDE1Ljg5MDIgMzAuNjI1IDE2LjMwNjhDMzAuODY3NCAxNi43MTk3IDMwLjk4ODYgMTcuMjEyMSAzMC45ODg2IDE3Ljc4NDFDMzAuOTg4NiAxOC40MDE1IDMwLjgzNTIgMTguOTUyNyAz'+
			'MC41Mjg0IDE5LjQzNzVDMzAuMjI1NCAxOS45MTg2IDI5Ljc3NjUgMjAuMjk5MiAyOS4xODE4IDIwLjU3OTVDMjguNTg3MSAyMC44NTk4IDI3Ljg1NDIgMjEgMjYuOTgzIDIxSDIyLjAxMTRaTTI0LjQ3MTYgMTguOTg4NkgyNi40NzczQzI3LjE2MjkgMTguOTg4NiAyNy42NjI5IDE4Ljg1OCAyNy45NzczIDE4LjU5NjZDMjguMjkxNyAxOC4zMzE0IDI4LjQ0ODkgMTcuOTc5MiAyOC40NDg5IDE3LjUzOThDMjguNDQ4OSAxNy4yMTc4IDI4LjM3MTIgMTYuOTMzNyAyOC4yMTU5IDE2LjY4NzVDMjguMDYwNiAxNi40NDEzIDI3LjgzOSAxNi4yNDgxIDI3LjU1MTEgMTYuMTA4QzI3LjI2NyAxNS45Njc4ID'+
			'I2LjkyOCAxNS44OTc3IDI2LjUzNDEgMTUuODk3N0gyNC40NzE2VjE4Ljk4ODZaTTI0LjQ3MTYgMTQuMjMzSDI2LjI5NTVDMjYuNjMyNiAxNC4yMzMgMjYuOTMxOCAxNC4xNzQyIDI3LjE5MzIgMTQuMDU2OEMyNy40NTgzIDEzLjkzNTYgMjcuNjY2NyAxMy43NjUyIDI3LjgxODIgMTMuNTQ1NUMyNy45NzM1IDEzLjMyNTggMjguMDUxMSAxMy4wNjI1IDI4LjA1MTEgMTIuNzU1N0MyOC4wNTExIDEyLjMzNTIgMjcuOTAxNSAxMS45OTYyIDI3LjYwMjMgMTEuNzM4NkMyNy4zMDY4IDExLjQ4MTEgMjYuODg2NCAxMS4zNTIzIDI2LjM0MDkgMTEuMzUyM0gyNC40NzE2VjE0LjIzM1pNMzguMTQwNiAxNy4y'+
			'ODQxVjEyLjI3MjdINDAuNTYxMVYyMUgzOC4yMzcyVjE5LjQxNDhIMzguMTQ2M0MzNy45NDkzIDE5LjkyNjEgMzcuNjIxNyAyMC4zMzcxIDM3LjE2MzQgMjAuNjQ3N0MzNi43MDg4IDIwLjk1ODMgMzYuMTUzOSAyMS4xMTM2IDM1LjQ5ODYgMjEuMTEzNkMzNC45MTUyIDIxLjExMzYgMzQuNDAyIDIwLjk4MTEgMzMuOTU4OCAyMC43MTU5QzMzLjUxNTYgMjAuNDUwOCAzMy4xNjkgMjAuMDczOSAzMi45MTkgMTkuNTg1MkMzMi42NzI4IDE5LjA5NjYgMzIuNTQ3OCAxOC41MTE0IDMyLjU0NCAxNy44Mjk1VjEyLjI3MjdIMzQuOTY0NVYxNy4zOTc3QzM0Ljk2ODMgMTcuOTEyOSAzNS4xMDY1IDE4LjMyMD'+
			'EgMzUuMzc5MyAxOC42MTkzQzM1LjY1MiAxOC45MTg2IDM2LjAxNzUgMTkuMDY4MiAzNi40NzU5IDE5LjA2ODJDMzYuNzY3NSAxOS4wNjgyIDM3LjA0MDIgMTkuMDAxOSAzNy4yOTQgMTguODY5M0MzNy41NDc4IDE4LjczMyAzNy43NTI0IDE4LjUzMjIgMzcuOTA3NyAxOC4yNjdDMzguMDY2OCAxOC4wMDE5IDM4LjE0NDQgMTcuNjc0MiAzOC4xNDA2IDE3LjI4NDFaTTQzLjk5MTUgMjQuMjcyN0M0My42ODQ3IDI0LjI3MjcgNDMuMzk2OCAyNC4yNDgxIDQzLjEyNzggMjQuMTk4OUM0Mi44NjI3IDI0LjE1MzQgNDIuNjQzIDI0LjA5NDcgNDIuNDY4OCAyNC4wMjI3TDQzLjAxNDIgMjIuMjE1OUM0My4y'+
			'OTgzIDIyLjMwMyA0My41NTQgMjIuMzUwNCA0My43ODEyIDIyLjM1OEM0NC4wMTIzIDIyLjM2NTUgNDQuMjExMiAyMi4zMTI1IDQ0LjM3NzggMjIuMTk4OUM0NC41NDgzIDIyLjA4NTIgNDQuNjg2NiAyMS44OTIgNDQuNzkyNiAyMS42MTkzTDQ0LjkzNDcgMjEuMjVMNDEuODA0IDEyLjI3MjdINDQuMzQ5NEw0Ni4xNTYyIDE4LjY4MThINDYuMjQ3Mkw0OC4wNzEgMTIuMjcyN0g1MC42MzM1TDQ3LjI0MTUgMjEuOTQzMkM0Ny4wNzg2IDIyLjQxMjkgNDYuODU3IDIyLjgyMiA0Ni41NzY3IDIzLjE3MDVDNDYuMzAwMiAyMy41MjI3IDQ1Ljk0OTggMjMuNzkzNiA0NS41MjU2IDIzLjk4M0M0NS4xMDEzID'+
			'I0LjE3NjEgNDQuNTkgMjQuMjcyNyA0My45OTE1IDI0LjI3MjdaTTY1LjM1MzcgOS4zNjM2NFYyMUg2My4yMjg3TDU4LjE2NjIgMTMuNjc2MUg1OC4wODFWMjFINTUuNjIwN1Y5LjM2MzY0SDU3Ljc3OThMNjIuODAyNiAxNi42ODE4SDYyLjkwNDhWOS4zNjM2NEg2NS4zNTM3Wk03MS4yODQxIDIxLjE3MDVDNzAuNDAxNSAyMS4xNzA1IDY5LjYzODMgMjAuOTgzIDY4Ljk5NDMgMjAuNjA4QzY4LjM1NDIgMjAuMjI5MiA2Ny44NTk4IDE5LjcwMjcgNjcuNTExNCAxOS4wMjg0QzY3LjE2MjkgMTguMzUwNCA2Ni45ODg2IDE3LjU2NDQgNjYuOTg4NiAxNi42NzA1QzY2Ljk4ODYgMTUuNzY4OSA2Ny4xNjI5'+
			'IDE0Ljk4MTEgNjcuNTExNCAxNC4zMDY4QzY3Ljg1OTggMTMuNjI4OCA2OC4zNTQyIDEzLjEwMjMgNjguOTk0MyAxMi43MjczQzY5LjYzODMgMTIuMzQ4NSA3MC40MDE1IDEyLjE1OTEgNzEuMjg0MSAxMi4xNTkxQzcyLjE2NjcgMTIuMTU5MSA3Mi45MjggMTIuMzQ4NSA3My41NjgyIDEyLjcyNzNDNzQuMjEyMSAxMy4xMDIzIDc0LjcwODMgMTMuNjI4OCA3NS4wNTY4IDE0LjMwNjhDNzUuNDA1MyAxNC45ODExIDc1LjU3OTUgMTUuNzY4OSA3NS41Nzk1IDE2LjY3MDVDNzUuNTc5NSAxNy41NjQ0IDc1LjQwNTMgMTguMzUwNCA3NS4wNTY4IDE5LjAyODRDNzQuNzA4MyAxOS43MDI3IDc0LjIxMjEgMj'+
			'AuMjI5MiA3My41NjgyIDIwLjYwOEM3Mi45MjggMjAuOTgzIDcyLjE2NjcgMjEuMTcwNSA3MS4yODQxIDIxLjE3MDVaTTcxLjI5NTUgMTkuMjk1NUM3MS42OTcgMTkuMjk1NSA3Mi4wMzIyIDE5LjE4MTggNzIuMzAxMSAxOC45NTQ1QzcyLjU3MDEgMTguNzIzNSA3Mi43NzI3IDE4LjQwOTEgNzIuOTA5MSAxOC4wMTE0QzczLjA0OTIgMTcuNjEzNiA3My4xMTkzIDE3LjE2MSA3My4xMTkzIDE2LjY1MzRDNzMuMTE5MyAxNi4xNDU4IDczLjA0OTIgMTUuNjkzMiA3Mi45MDkxIDE1LjI5NTVDNzIuNzcyNyAxNC44OTc3IDcyLjU3MDEgMTQuNTgzMyA3Mi4zMDExIDE0LjM1MjNDNzIuMDMyMiAxNC4xMjEy'+
			'IDcxLjY5NyAxNC4wMDU3IDcxLjI5NTUgMTQuMDA1N0M3MC44OTAyIDE0LjAwNTcgNzAuNTQ5MiAxNC4xMjEyIDcwLjI3MjcgMTQuMzUyM0M3MCAxNC41ODMzIDY5Ljc5MzYgMTQuODk3NyA2OS42NTM0IDE1LjI5NTVDNjkuNTE3IDE1LjY5MzIgNjkuNDQ4OSAxNi4xNDU4IDY5LjQ0ODkgMTYuNjUzNEM2OS40NDg5IDE3LjE2MSA2OS41MTcgMTcuNjEzNiA2OS42NTM0IDE4LjAxMTRDNjkuNzkzNiAxOC40MDkxIDcwIDE4LjcyMzUgNzAuMjcyNyAxOC45NTQ1QzcwLjU0OTIgMTkuMTgxOCA3MC44OTAyIDE5LjI5NTUgNzEuMjk1NSAxOS4yOTU1Wk03OC42NTYyIDIxTDc2LjI4MTIgMTIuMjcyN0g3OC'+
			'43MzAxTDgwLjA4MjQgMTguMTM2NEg4MC4xNjE5TDgxLjU3MSAxMi4yNzI3SDgzLjk3NDRMODUuNDA2MiAxOC4xMDIzSDg1LjQ4MDFMODYuODA5NyAxMi4yNzI3SDg5LjI1MjhMODYuODgzNSAyMUg4NC4zMjFMODIuODIxIDE1LjUxMTRIODIuNzEzMUw4MS4yMTMxIDIxSDc4LjY1NjJaIi8+Cjwvc3ZnPgo=';
		me._svg_116__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._svg_116__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjMwIiB2aWV3Qm94PSIwIDAgMTEwIDMwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMTAiPgogPHJlY3QgZmlsbD0iI0QzMzQzNCIgaGVpZ2h0PSIzMCIgcng9IjE1IiB3aWR0aD0iMTEwIi8+CiA8cGF0aCBmaWxsPSJ3aGl0ZSIgZD0iTTIyLjAxMTQgMjFWOS4zNjM2NEgyNi42NzA1QzI3LjUyNjUgOS4zNjM2NCAyOC4yNDA1IDkuNDkwNTMgMjguODEyNSA5Ljc0NDMyQzI5LjM4NDUgOS45OTgxMSAyOS44MTQ0IDEwLjM1MDQgMzAuMTAyMyAxMC44MDExQzMwLjM5MDIgMTEuMjQ4MSAzMC41MzQxIDExLjc2MzMgMzAuNT'+
			'M0MSAxMi4zNDY2QzMwLjUzNDEgMTIuODAxMSAzMC40NDMyIDEzLjIwMDggMzAuMjYxNCAxMy41NDU1QzMwLjA3OTUgMTMuODg2NCAyOS44Mjk1IDE0LjE2NjcgMjkuNTExNCAxNC4zODY0QzI5LjE5NyAxNC42MDIzIDI4LjgzNzEgMTQuNzU1NyAyOC40MzE4IDE0Ljg0NjZWMTQuOTYwMkMyOC44NzUgMTQuOTc5MiAyOS4yODk4IDE1LjEwNDIgMjkuNjc2MSAxNS4zMzUyQzMwLjA2NjMgMTUuNTY2MyAzMC4zODI2IDE1Ljg5MDIgMzAuNjI1IDE2LjMwNjhDMzAuODY3NCAxNi43MTk3IDMwLjk4ODYgMTcuMjEyMSAzMC45ODg2IDE3Ljc4NDFDMzAuOTg4NiAxOC40MDE1IDMwLjgzNTIgMTguOTUyNyAz'+
			'MC41Mjg0IDE5LjQzNzVDMzAuMjI1NCAxOS45MTg2IDI5Ljc3NjUgMjAuMjk5MiAyOS4xODE4IDIwLjU3OTVDMjguNTg3MSAyMC44NTk4IDI3Ljg1NDIgMjEgMjYuOTgzIDIxSDIyLjAxMTRaTTI0LjQ3MTYgMTguOTg4NkgyNi40NzczQzI3LjE2MjkgMTguOTg4NiAyNy42NjI5IDE4Ljg1OCAyNy45NzczIDE4LjU5NjZDMjguMjkxNyAxOC4zMzE0IDI4LjQ0ODkgMTcuOTc5MiAyOC40NDg5IDE3LjUzOThDMjguNDQ4OSAxNy4yMTc4IDI4LjM3MTIgMTYuOTMzNyAyOC4yMTU5IDE2LjY4NzVDMjguMDYwNiAxNi40NDEzIDI3LjgzOSAxNi4yNDgxIDI3LjU1MTEgMTYuMTA4QzI3LjI2NyAxNS45Njc4ID'+
			'I2LjkyOCAxNS44OTc3IDI2LjUzNDEgMTUuODk3N0gyNC40NzE2VjE4Ljk4ODZaTTI0LjQ3MTYgMTQuMjMzSDI2LjI5NTVDMjYuNjMyNiAxNC4yMzMgMjYuOTMxOCAxNC4xNzQyIDI3LjE5MzIgMTQuMDU2OEMyNy40NTgzIDEzLjkzNTYgMjcuNjY2NyAxMy43NjUyIDI3LjgxODIgMTMuNTQ1NUMyNy45NzM1IDEzLjMyNTggMjguMDUxMSAxMy4wNjI1IDI4LjA1MTEgMTIuNzU1N0MyOC4wNTExIDEyLjMzNTIgMjcuOTAxNSAxMS45OTYyIDI3LjYwMjMgMTEuNzM4NkMyNy4zMDY4IDExLjQ4MTEgMjYuODg2NCAxMS4zNTIzIDI2LjM0MDkgMTEuMzUyM0gyNC40NzE2VjE0LjIzM1pNMzguMTQwNiAxNy4y'+
			'ODQxVjEyLjI3MjdINDAuNTYxMVYyMUgzOC4yMzcyVjE5LjQxNDhIMzguMTQ2M0MzNy45NDkzIDE5LjkyNjEgMzcuNjIxNyAyMC4zMzcxIDM3LjE2MzQgMjAuNjQ3N0MzNi43MDg4IDIwLjk1ODMgMzYuMTUzOSAyMS4xMTM2IDM1LjQ5ODYgMjEuMTEzNkMzNC45MTUyIDIxLjExMzYgMzQuNDAyIDIwLjk4MTEgMzMuOTU4OCAyMC43MTU5QzMzLjUxNTYgMjAuNDUwOCAzMy4xNjkgMjAuMDczOSAzMi45MTkgMTkuNTg1MkMzMi42NzI4IDE5LjA5NjYgMzIuNTQ3OCAxOC41MTE0IDMyLjU0NCAxNy44Mjk1VjEyLjI3MjdIMzQuOTY0NVYxNy4zOTc3QzM0Ljk2ODMgMTcuOTEyOSAzNS4xMDY1IDE4LjMyMD'+
			'EgMzUuMzc5MyAxOC42MTkzQzM1LjY1MiAxOC45MTg2IDM2LjAxNzUgMTkuMDY4MiAzNi40NzU5IDE5LjA2ODJDMzYuNzY3NSAxOS4wNjgyIDM3LjA0MDIgMTkuMDAxOSAzNy4yOTQgMTguODY5M0MzNy41NDc4IDE4LjczMyAzNy43NTI0IDE4LjUzMjIgMzcuOTA3NyAxOC4yNjdDMzguMDY2OCAxOC4wMDE5IDM4LjE0NDQgMTcuNjc0MiAzOC4xNDA2IDE3LjI4NDFaTTQzLjk5MTUgMjQuMjcyN0M0My42ODQ3IDI0LjI3MjcgNDMuMzk2OCAyNC4yNDgxIDQzLjEyNzggMjQuMTk4OUM0Mi44NjI3IDI0LjE1MzQgNDIuNjQzIDI0LjA5NDcgNDIuNDY4OCAyNC4wMjI3TDQzLjAxNDIgMjIuMjE1OUM0My4y'+
			'OTgzIDIyLjMwMyA0My41NTQgMjIuMzUwNCA0My43ODEyIDIyLjM1OEM0NC4wMTIzIDIyLjM2NTUgNDQuMjExMiAyMi4zMTI1IDQ0LjM3NzggMjIuMTk4OUM0NC41NDgzIDIyLjA4NTIgNDQuNjg2NiAyMS44OTIgNDQuNzkyNiAyMS42MTkzTDQ0LjkzNDcgMjEuMjVMNDEuODA0IDEyLjI3MjdINDQuMzQ5NEw0Ni4xNTYyIDE4LjY4MThINDYuMjQ3Mkw0OC4wNzEgMTIuMjcyN0g1MC42MzM1TDQ3LjI0MTUgMjEuOTQzMkM0Ny4wNzg2IDIyLjQxMjkgNDYuODU3IDIyLjgyMiA0Ni41NzY3IDIzLjE3MDVDNDYuMzAwMiAyMy41MjI3IDQ1Ljk0OTggMjMuNzkzNiA0NS41MjU2IDIzLjk4M0M0NS4xMDEzID'+
			'I0LjE3NjEgNDQuNTkgMjQuMjcyNyA0My45OTE1IDI0LjI3MjdaTTY1LjM1MzcgOS4zNjM2NFYyMUg2My4yMjg3TDU4LjE2NjIgMTMuNjc2MUg1OC4wODFWMjFINTUuNjIwN1Y5LjM2MzY0SDU3Ljc3OThMNjIuODAyNiAxNi42ODE4SDYyLjkwNDhWOS4zNjM2NEg2NS4zNTM3Wk03MS4yODQxIDIxLjE3MDVDNzAuNDAxNSAyMS4xNzA1IDY5LjYzODMgMjAuOTgzIDY4Ljk5NDMgMjAuNjA4QzY4LjM1NDIgMjAuMjI5MiA2Ny44NTk4IDE5LjcwMjcgNjcuNTExNCAxOS4wMjg0QzY3LjE2MjkgMTguMzUwNCA2Ni45ODg2IDE3LjU2NDQgNjYuOTg4NiAxNi42NzA1QzY2Ljk4ODYgMTUuNzY4OSA2Ny4xNjI5'+
			'IDE0Ljk4MTEgNjcuNTExNCAxNC4zMDY4QzY3Ljg1OTggMTMuNjI4OCA2OC4zNTQyIDEzLjEwMjMgNjguOTk0MyAxMi43MjczQzY5LjYzODMgMTIuMzQ4NSA3MC40MDE1IDEyLjE1OTEgNzEuMjg0MSAxMi4xNTkxQzcyLjE2NjcgMTIuMTU5MSA3Mi45MjggMTIuMzQ4NSA3My41NjgyIDEyLjcyNzNDNzQuMjEyMSAxMy4xMDIzIDc0LjcwODMgMTMuNjI4OCA3NS4wNTY4IDE0LjMwNjhDNzUuNDA1MyAxNC45ODExIDc1LjU3OTUgMTUuNzY4OSA3NS41Nzk1IDE2LjY3MDVDNzUuNTc5NSAxNy41NjQ0IDc1LjQwNTMgMTguMzUwNCA3NS4wNTY4IDE5LjAyODRDNzQuNzA4MyAxOS43MDI3IDc0LjIxMjEgMj'+
			'AuMjI5MiA3My41NjgyIDIwLjYwOEM3Mi45MjggMjAuOTgzIDcyLjE2NjcgMjEuMTcwNSA3MS4yODQxIDIxLjE3MDVaTTcxLjI5NTUgMTkuMjk1NUM3MS42OTcgMTkuMjk1NSA3Mi4wMzIyIDE5LjE4MTggNzIuMzAxMSAxOC45NTQ1QzcyLjU3MDEgMTguNzIzNSA3Mi43NzI3IDE4LjQwOTEgNzIuOTA5MSAxOC4wMTE0QzczLjA0OTIgMTcuNjEzNiA3My4xMTkzIDE3LjE2MSA3My4xMTkzIDE2LjY1MzRDNzMuMTE5MyAxNi4xNDU4IDczLjA0OTIgMTUuNjkzMiA3Mi45MDkxIDE1LjI5NTVDNzIuNzcyNyAxNC44OTc3IDcyLjU3MDEgMTQuNTgzMyA3Mi4zMDExIDE0LjM1MjNDNzIuMDMyMiAxNC4xMjEy'+
			'IDcxLjY5NyAxNC4wMDU3IDcxLjI5NTUgMTQuMDA1N0M3MC44OTAyIDE0LjAwNTcgNzAuNTQ5MiAxNC4xMjEyIDcwLjI3MjcgMTQuMzUyM0M3MCAxNC41ODMzIDY5Ljc5MzYgMTQuODk3NyA2OS42NTM0IDE1LjI5NTVDNjkuNTE3IDE1LjY5MzIgNjkuNDQ4OSAxNi4xNDU4IDY5LjQ0ODkgMTYuNjUzNEM2OS40NDg5IDE3LjE2MSA2OS41MTcgMTcuNjEzNiA2OS42NTM0IDE4LjAxMTRDNjkuNzkzNiAxOC40MDkxIDcwIDE4LjcyMzUgNzAuMjcyNyAxOC45NTQ1QzcwLjU0OTIgMTkuMTgxOCA3MC44OTAyIDE5LjI5NTUgNzEuMjk1NSAxOS4yOTU1Wk03OC42NTYyIDIxTDc2LjI4MTIgMTIuMjcyN0g3OC'+
			'43MzAxTDgwLjA4MjQgMTguMTM2NEg4MC4xNjE5TDgxLjU3MSAxMi4yNzI3SDgzLjk3NDRMODUuNDA2MiAxOC4xMDIzSDg1LjQ4MDFMODYuODA5NyAxMi4yNzI3SDg5LjI1MjhMODYuODgzNSAyMUg4NC4zMjFMODIuODIxIDE1LjUxMTRIODIuNzEzMUw4MS4yMTMxIDIxSDc4LjY1NjJaIi8+Cjwvc3ZnPgo=';
		me._svg_116__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="Svg 11";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 23px;';
		hs+='position : absolute;';
		hs+='right : 5px;';
		hs+='top : calc(50% - ((23px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 90px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_116.ggIsActive=function() {
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
		me._svg_116.onclick=function (e) {
			if (me._svg_116.isDragging()) return;
			player.openUrl("https:\/\/www.fcpeuro.com\/products\/mercedes-engine-oil-filter-1041800109he","_blank");
			var list=me.findElements("products_list",true);
			while(list.length>0) {
				var e=list.pop();
				e.style.transition='none';
				e.style.visibility='hidden';
				e.ggVisible=false;
			}
		}
		me._svg_116.onmouseover=function (e) {
			me._svg_116__img.style.visibility='hidden';
			me._svg_116__imgo.style.visibility='inherit';
			me.elementMouseOver['svg_116']=true;
		}
		me._svg_116.onmouseout=function (e) {
			me._svg_116__img.style.visibility='inherit';
			me._svg_116__imgo.style.visibility='hidden';
			me.elementMouseOver['svg_116']=false;
		}
		me._svg_116.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['svg_116']) {
				me._svg_116__img.style.visibility='hidden';
				me._svg_116__imgo.style.visibility='inherit';
				me.elementMouseOver['svg_116']=true;
			}
		}
		me._svg_116.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_4_20.appendChild(me._svg_116);
		el=me._svg_136=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._svg_136;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._svg_136__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjMwIiB2aWV3Qm94PSIwIDAgMTEwIDMwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMTAiPgogPHJlY3QgZmlsbD0iI0Y2OTIxRSIgaGVpZ2h0PSIzMCIgcng9IjE1IiB3aWR0aD0iMTEwIi8+CiA8cGF0aCBmaWxsPSJ3aGl0ZSIgZD0iTTM4LjM5NDkgOS4zNjM2NEw0MS4yMDc0IDE4LjIwNDVINDEuMzE1M0w0NC4xMzM1IDkuMzYzNjRINDYuODYwOEw0Mi44NDk0IDIxSDM5LjY3OUwzNS42NjE5IDkuMzYzNjRIMzguMzk0OVpNNDguMjE1OSAyMVYxMi4yNzI3SDUwLjYzNjRWMjFINDguMjE1OVpNNDkuNDMxOCAxMS4xND'+
			'c3QzQ5LjA3MiAxMS4xNDc3IDQ4Ljc2MzMgMTEuMDI4NCA0OC41MDU3IDEwLjc4OThDNDguMjUxOSAxMC41NDczIDQ4LjEyNSAxMC4yNTc2IDQ4LjEyNSA5LjkyMDQ1QzQ4LjEyNSA5LjU4NzEyIDQ4LjI1MTkgOS4zMDExNCA0OC41MDU3IDkuMDYyNUM0OC43NjMzIDguODIwMDggNDkuMDcyIDguNjk4ODYgNDkuNDMxOCA4LjY5ODg2QzQ5Ljc5MTcgOC42OTg4NiA1MC4wOTg1IDguODIwMDggNTAuMzUyMyA5LjA2MjVDNTAuNjA5OCA5LjMwMTE0IDUwLjczODYgOS41ODcxMiA1MC43Mzg2IDkuOTIwNDVDNTAuNzM4NiAxMC4yNTc2IDUwLjYwOTggMTAuNTQ3MyA1MC4zNTIzIDEwLjc4OThDNTAuMDk4'+
			'NSAxMS4wMjg0IDQ5Ljc5MTcgMTEuMTQ3NyA0OS40MzE4IDExLjE0NzdaTTU2LjU1MjYgMjEuMTcwNUM1NS42NTQ4IDIxLjE3MDUgNTQuODgyMSAyMC45ODg2IDU0LjIzNDQgMjAuNjI1QzUzLjU5MDQgMjAuMjU3NiA1My4wOTQyIDE5LjczODYgNTIuNzQ1NyAxOS4wNjgyQzUyLjM5NzMgMTguMzkzOSA1Mi4yMjMgMTcuNTk2NiA1Mi4yMjMgMTYuNjc2MUM1Mi4yMjMgMTUuNzc4NCA1Mi4zOTczIDE0Ljk5MDUgNTIuNzQ1NyAxNC4zMTI1QzUzLjA5NDIgMTMuNjM0NSA1My41ODQ4IDEzLjEwNjEgNTQuMjE3MyAxMi43MjczQzU0Ljg1MzcgMTIuMzQ4NSA1NS41OTk5IDEyLjE1OTEgNTYuNDU2IDEyLj'+
			'E1OTFDNTcuMDMxNyAxMi4xNTkxIDU3LjU2NzcgMTIuMjUxOSA1OC4wNjM5IDEyLjQzNzVDNTguNTYzOSAxMi42MTkzIDU4Ljk5OTUgMTIuODkzOSA1OS4zNzA3IDEzLjI2MTRDNTkuNzQ1NyAxMy42Mjg4IDYwLjAzNzQgMTQuMDkwOSA2MC4yNDU3IDE0LjY0NzdDNjAuNDU0MSAxNS4yMDA4IDYwLjU1ODIgMTUuODQ4NSA2MC41NTgyIDE2LjU5MDlWMTcuMjU1N0g1My4xODg5VjE1Ljc1NTdINTguMjc5OEM1OC4yNzk4IDE1LjQwNzIgNTguMjA0MSAxNS4wOTg1IDU4LjA1MjYgMTQuODI5NUM1Ny45MDEgMTQuNTYwNiA1Ny42OTA4IDE0LjM1MDQgNTcuNDIxOSAxNC4xOTg5QzU3LjE1NjcgMTQuMDQz'+
			'NiA1Ni44NDggMTMuOTY1OSA1Ni40OTU3IDEzLjk2NTlDNTYuMTI4MyAxMy45NjU5IDU1LjgwMjYgMTQuMDUxMSA1NS41MTg1IDE0LjIyMTZDNTUuMjM4MiAxNC4zODgzIDU1LjAxODUgMTQuNjEzNiA1NC44NTk0IDE0Ljg5NzdDNTQuNzAwMyAxNS4xNzggNTQuNjE4OCAxNS40OTA1IDU0LjYxNTEgMTUuODM1MlYxNy4yNjE0QzU0LjYxNTEgMTcuNjkzMiA1NC42OTQ2IDE4LjA2NjMgNTQuODUzNyAxOC4zODA3QzU1LjAxNjYgMTguNjk1MSA1NS4yNDU3IDE4LjkzNzUgNTUuNTQxMiAxOS4xMDhDNTUuODM2NiAxOS4yNzg0IDU2LjE4NyAxOS4zNjM2IDU2LjU5MjMgMTkuMzYzNkM1Ni44NjEzIDE5Lj'+
			'M2MzYgNTcuMTA3NSAxOS4zMjU4IDU3LjMzMSAxOS4yNUM1Ny41NTQ1IDE5LjE3NDIgNTcuNzQ1NyAxOS4wNjA2IDU3LjkwNDggMTguOTA5MUM1OC4wNjM5IDE4Ljc1NzYgNTguMTg1MSAxOC41NzIgNTguMjY4NSAxOC4zNTIzTDYwLjUwNzEgMTguNUM2MC4zOTM1IDE5LjAzNzkgNjAuMTYwNSAxOS41MDc2IDU5LjgwODIgMTkuOTA5MUM1OS40NTk4IDIwLjMwNjggNTkuMDA5IDIwLjYxNzQgNTguNDU2IDIwLjg0MDlDNTcuOTA2NyAyMS4wNjA2IDU3LjI3MjMgMjEuMTcwNSA1Ni41NTI2IDIxLjE3MDVaTTYzLjc5NjkgMjFMNjEuNDIxOSAxMi4yNzI3SDYzLjg3MDdMNjUuMjIzIDE4LjEzNjRINjUu'+
			'MzAyNkw2Ni43MTE2IDEyLjI3MjdINjkuMTE1MUw3MC41NDY5IDE4LjEwMjNINzAuNjIwN0w3MS45NTAzIDEyLjI3MjdINzQuMzkzNUw3Mi4wMjQxIDIxSDY5LjQ2MTZMNjcuOTYxNiAxNS41MTE0SDY3Ljg1MzdMNjYuMzUzNyAyMUg2My43OTY5WiIvPgo8L3N2Zz4K';
		me._svg_136__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._svg_136__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjMwIiB2aWV3Qm94PSIwIDAgMTEwIDMwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMTAiPgogPHJlY3QgZmlsbD0iI0FGNUUwMCIgaGVpZ2h0PSIzMCIgcng9IjE1IiB3aWR0aD0iMTEwIi8+CiA8cGF0aCBmaWxsPSJ3aGl0ZSIgZD0iTTM4LjM5NDkgOS4zNjM2NEw0MS4yMDc0IDE4LjIwNDVINDEuMzE1M0w0NC4xMzM1IDkuMzYzNjRINDYuODYwOEw0Mi44NDk0IDIxSDM5LjY3OUwzNS42NjE5IDkuMzYzNjRIMzguMzk0OVpNNDguMjE1OSAyMVYxMi4yNzI3SDUwLjYzNjRWMjFINDguMjE1OVpNNDkuNDMxOCAxMS4xND'+
			'c3QzQ5LjA3MiAxMS4xNDc3IDQ4Ljc2MzMgMTEuMDI4NCA0OC41MDU3IDEwLjc4OThDNDguMjUxOSAxMC41NDczIDQ4LjEyNSAxMC4yNTc2IDQ4LjEyNSA5LjkyMDQ1QzQ4LjEyNSA5LjU4NzEyIDQ4LjI1MTkgOS4zMDExNCA0OC41MDU3IDkuMDYyNUM0OC43NjMzIDguODIwMDggNDkuMDcyIDguNjk4ODYgNDkuNDMxOCA4LjY5ODg2QzQ5Ljc5MTcgOC42OTg4NiA1MC4wOTg1IDguODIwMDggNTAuMzUyMyA5LjA2MjVDNTAuNjA5OCA5LjMwMTE0IDUwLjczODYgOS41ODcxMiA1MC43Mzg2IDkuOTIwNDVDNTAuNzM4NiAxMC4yNTc2IDUwLjYwOTggMTAuNTQ3MyA1MC4zNTIzIDEwLjc4OThDNTAuMDk4'+
			'NSAxMS4wMjg0IDQ5Ljc5MTcgMTEuMTQ3NyA0OS40MzE4IDExLjE0NzdaTTU2LjU1MjYgMjEuMTcwNUM1NS42NTQ4IDIxLjE3MDUgNTQuODgyMSAyMC45ODg2IDU0LjIzNDQgMjAuNjI1QzUzLjU5MDQgMjAuMjU3NiA1My4wOTQyIDE5LjczODYgNTIuNzQ1NyAxOS4wNjgyQzUyLjM5NzMgMTguMzkzOSA1Mi4yMjMgMTcuNTk2NiA1Mi4yMjMgMTYuNjc2MUM1Mi4yMjMgMTUuNzc4NCA1Mi4zOTczIDE0Ljk5MDUgNTIuNzQ1NyAxNC4zMTI1QzUzLjA5NDIgMTMuNjM0NSA1My41ODQ4IDEzLjEwNjEgNTQuMjE3MyAxMi43MjczQzU0Ljg1MzcgMTIuMzQ4NSA1NS41OTk5IDEyLjE1OTEgNTYuNDU2IDEyLj'+
			'E1OTFDNTcuMDMxNyAxMi4xNTkxIDU3LjU2NzcgMTIuMjUxOSA1OC4wNjM5IDEyLjQzNzVDNTguNTYzOSAxMi42MTkzIDU4Ljk5OTUgMTIuODkzOSA1OS4zNzA3IDEzLjI2MTRDNTkuNzQ1NyAxMy42Mjg4IDYwLjAzNzQgMTQuMDkwOSA2MC4yNDU3IDE0LjY0NzdDNjAuNDU0MSAxNS4yMDA4IDYwLjU1ODIgMTUuODQ4NSA2MC41NTgyIDE2LjU5MDlWMTcuMjU1N0g1My4xODg5VjE1Ljc1NTdINTguMjc5OEM1OC4yNzk4IDE1LjQwNzIgNTguMjA0MSAxNS4wOTg1IDU4LjA1MjYgMTQuODI5NUM1Ny45MDEgMTQuNTYwNiA1Ny42OTA4IDE0LjM1MDQgNTcuNDIxOSAxNC4xOTg5QzU3LjE1NjcgMTQuMDQz'+
			'NiA1Ni44NDggMTMuOTY1OSA1Ni40OTU3IDEzLjk2NTlDNTYuMTI4MyAxMy45NjU5IDU1LjgwMjYgMTQuMDUxMSA1NS41MTg1IDE0LjIyMTZDNTUuMjM4MiAxNC4zODgzIDU1LjAxODUgMTQuNjEzNiA1NC44NTk0IDE0Ljg5NzdDNTQuNzAwMyAxNS4xNzggNTQuNjE4OCAxNS40OTA1IDU0LjYxNTEgMTUuODM1MlYxNy4yNjE0QzU0LjYxNTEgMTcuNjkzMiA1NC42OTQ2IDE4LjA2NjMgNTQuODUzNyAxOC4zODA3QzU1LjAxNjYgMTguNjk1MSA1NS4yNDU3IDE4LjkzNzUgNTUuNTQxMiAxOS4xMDhDNTUuODM2NiAxOS4yNzg0IDU2LjE4NyAxOS4zNjM2IDU2LjU5MjMgMTkuMzYzNkM1Ni44NjEzIDE5Lj'+
			'M2MzYgNTcuMTA3NSAxOS4zMjU4IDU3LjMzMSAxOS4yNUM1Ny41NTQ1IDE5LjE3NDIgNTcuNzQ1NyAxOS4wNjA2IDU3LjkwNDggMTguOTA5MUM1OC4wNjM5IDE4Ljc1NzYgNTguMTg1MSAxOC41NzIgNTguMjY4NSAxOC4zNTIzTDYwLjUwNzEgMTguNUM2MC4zOTM1IDE5LjAzNzkgNjAuMTYwNSAxOS41MDc2IDU5LjgwODIgMTkuOTA5MUM1OS40NTk4IDIwLjMwNjggNTkuMDA5IDIwLjYxNzQgNTguNDU2IDIwLjg0MDlDNTcuOTA2NyAyMS4wNjA2IDU3LjI3MjMgMjEuMTcwNSA1Ni41NTI2IDIxLjE3MDVaTTYzLjc5NjkgMjFMNjEuNDIxOSAxMi4yNzI3SDYzLjg3MDdMNjUuMjIzIDE4LjEzNjRINjUu'+
			'MzAyNkw2Ni43MTE2IDEyLjI3MjdINjkuMTE1MUw3MC41NDY5IDE4LjEwMjNINzAuNjIwN0w3MS45NTAzIDEyLjI3MjdINzQuMzkzNUw3Mi4wMjQxIDIxSDY5LjQ2MTZMNjcuOTYxNiAxNS41MTE0SDY3Ljg1MzdMNjYuMzUzNyAyMUg2My43OTY5WiIvPgo8L3N2Zz4K';
		me._svg_136__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="Svg 13";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 23px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((23px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 90px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_136.ggIsActive=function() {
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
		me._svg_136.onclick=function (e) {
			if (me._svg_136.isDragging()) return;
			player.moveTo("-86.15","-6.49","20.74","18.0000");
			var list=me.findElements("products_list",true);
			while(list.length>0) {
				var e=list.pop();
				e.style.transition='none';
				e.style.visibility='hidden';
				e.ggVisible=false;
			}
		}
		me._svg_136.onmouseover=function (e) {
			me._svg_136__img.style.visibility='hidden';
			me._svg_136__imgo.style.visibility='inherit';
			me.elementMouseOver['svg_136']=true;
		}
		me._svg_136.onmouseout=function (e) {
			me._svg_136__img.style.visibility='inherit';
			me._svg_136__imgo.style.visibility='hidden';
			me.elementMouseOver['svg_136']=false;
		}
		me._svg_136.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['svg_136']) {
				me._svg_136__img.style.visibility='hidden';
				me._svg_136__imgo.style.visibility='inherit';
				me.elementMouseOver['svg_136']=true;
			}
		}
		me._svg_136.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_4_20.appendChild(me._svg_136);
		me._product_list_10418001090.appendChild(me._rectangle_4_20);
		me._scrollarea_1__content.appendChild(me._product_list_10418001090);
		el=me._product_list_sn702070=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._product_list_sn702070;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="product_list_sn70207";
		el.ggDx=-127;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle product_list";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #eeeeee;';
		hs+='border-radius : 5px;';
		hs+='cursor : default;';
		hs+='height : 300px;';
		hs+='left : calc(50% - ((200px + 2px) / 2) - 127px);';
		hs+='position : absolute;';
		hs+='top : 330px;';
		hs+='visibility : inherit;';
		hs+='width : 200px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 0%';
		me._product_list_sn702070.ggIsActive=function() {
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
		me._product_list_sn702070.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_120=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._image_120;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._image_120__img=document.createElement('img');
		els.className='ggskin ggskin_image_120';
		hs=basePath + 'images/image_120.png';
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
		el.ggId="Image 12";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 180px;';
		hs+='left : calc(50% - ((180px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 180px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_120.ggIsActive=function() {
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
		me._image_120.ggUpdatePosition=function (useTransition) {
		}
		me._product_list_sn702070.appendChild(me._image_120);
		el=me._text_6_20=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._text_6_20;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._text_6_20__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 6_2";
		el.ggDy=59;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(102,102,102,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 59px);';
		hs+='visibility : inherit;';
		hs+='width : 95%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+="text-overflow: ellipsis;";
		els.setAttribute('style',hs);
		me._text_6_20.ggUpdateText=function() {
			var params = [];
			var hs = player._("FILTR PALIWA SEPARATOR Z ODSTOJNIKIEM H-232mm fi-103mm 1-14 UNS CASE\/ CLAAS\nMOT. D2862\/\/ DAF 95XF\/ 105\/ CF75\/ CF IV\/ XF106 mot. PE\/ PR\/ PX-7\/ MX\/ MX-11\/\nMX-13\/ XF\/XE\/XM\/VF\/\/ DOOSAN mot. DL\/ DV", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_6_20.ggUpdateText();
		el.appendChild(els);
		me._text_6_20.ggIsActive=function() {
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
		me._text_6_20.ggUpdatePosition=function (useTransition) {
		}
		me._product_list_sn702070.appendChild(me._text_6_20);
		el=me._text_6_1_20=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._text_6_1_20;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._text_6_1_20__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 6_1_2";
		el.ggDy=82;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(0,0,0,1);';
		hs+='cursor : default;';
		hs+='height : 21px;';
		hs+='left : 7px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((21px + 0px) / 2) + 82px);';
		hs+='visibility : inherit;';
		hs+='width : 95%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='bottom: 0px;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+="text-overflow: ellipsis;";
		els.setAttribute('style',hs);
		me._text_6_1_20.ggUpdateText=function() {
			var params = [];
			var hs = player._("<div class=\"ggmarkdown\"><p><strong>$30-$50<\/strong> \/pieces<\/p>\n<div>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_6_1_20.ggUpdateText();
		el.appendChild(els);
		me._text_6_1_20.ggIsActive=function() {
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
		me._text_6_1_20.ggUpdatePosition=function (useTransition) {
		}
		me._product_list_sn702070.appendChild(me._text_6_1_20);
		el=me._text_6_1_1_1_10=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._text_6_1_1_1_10;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._text_6_1_1_1_10__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 6_1_1_1_1";
		el.ggDy=105;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(0,0,0,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 7px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 105px);';
		hs+='visibility : inherit;';
		hs+='width : 40%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='bottom: 0px;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+="text-overflow: ellipsis;";
		els.setAttribute('style',hs);
		me._text_6_1_1_1_10.ggUpdateText=function() {
			var params = [];
			var hs = player._("<div class=\"ggmarkdown\"><p>200 pieces<\/p>\n<div>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_6_1_1_1_10.ggUpdateText();
		el.appendChild(els);
		me._text_6_1_1_1_10.ggIsActive=function() {
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
		me._text_6_1_1_1_10.ggUpdatePosition=function (useTransition) {
		}
		me._product_list_sn702070.appendChild(me._text_6_1_1_1_10);
		el=me._text_6_1_1_20=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._text_6_1_1_20;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._text_6_1_1_20__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 6_1_1_2";
		el.ggDy=105;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(168,168,168,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 85px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 105px);';
		hs+='visibility : inherit;';
		hs+='width : 35%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='bottom: 0px;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+="text-overflow: ellipsis;";
		els.setAttribute('style',hs);
		me._text_6_1_1_20.ggUpdateText=function() {
			var params = [];
			var hs = player._("<div class=\"ggmarkdown\"><p>(MOQ)<\/p>\n<div>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_6_1_1_20.ggUpdateText();
		el.appendChild(els);
		me._text_6_1_1_20.ggIsActive=function() {
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
		me._text_6_1_1_20.ggUpdatePosition=function (useTransition) {
		}
		me._product_list_sn702070.appendChild(me._text_6_1_1_20);
		el=me._rectangle_4_10=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._rectangle_4_10;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="Rectangle 4_1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 5px;';
		hs+='cursor : default;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((95% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 95%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_4_10.ggIsActive=function() {
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
		me._rectangle_4_10.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_115=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._svg_115;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._svg_115__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjMwIiB2aWV3Qm94PSIwIDAgMTEwIDMwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMTAiPgogPHJlY3QgZmlsbD0iIzE5Mjg0NSIgaGVpZ2h0PSIzMCIgcng9IjE1IiB3aWR0aD0iMTEwIi8+CiA8cGF0aCBmaWxsPSJ3aGl0ZSIgZD0iTTIyLjAxMTQgMjFWOS4zNjM2NEgyNi42NzA1QzI3LjUyNjUgOS4zNjM2NCAyOC4yNDA1IDkuNDkwNTMgMjguODEyNSA5Ljc0NDMyQzI5LjM4NDUgOS45OTgxMSAyOS44MTQ0IDEwLjM1MDQgMzAuMTAyMyAxMC44MDExQzMwLjM5MDIgMTEuMjQ4MSAzMC41MzQxIDExLjc2MzMgMzAuNT'+
			'M0MSAxMi4zNDY2QzMwLjUzNDEgMTIuODAxMSAzMC40NDMyIDEzLjIwMDggMzAuMjYxNCAxMy41NDU1QzMwLjA3OTUgMTMuODg2NCAyOS44Mjk1IDE0LjE2NjcgMjkuNTExNCAxNC4zODY0QzI5LjE5NyAxNC42MDIzIDI4LjgzNzEgMTQuNzU1NyAyOC40MzE4IDE0Ljg0NjZWMTQuOTYwMkMyOC44NzUgMTQuOTc5MiAyOS4yODk4IDE1LjEwNDIgMjkuNjc2MSAxNS4zMzUyQzMwLjA2NjMgMTUuNTY2MyAzMC4zODI2IDE1Ljg5MDIgMzAuNjI1IDE2LjMwNjhDMzAuODY3NCAxNi43MTk3IDMwLjk4ODYgMTcuMjEyMSAzMC45ODg2IDE3Ljc4NDFDMzAuOTg4NiAxOC40MDE1IDMwLjgzNTIgMTguOTUyNyAz'+
			'MC41Mjg0IDE5LjQzNzVDMzAuMjI1NCAxOS45MTg2IDI5Ljc3NjUgMjAuMjk5MiAyOS4xODE4IDIwLjU3OTVDMjguNTg3MSAyMC44NTk4IDI3Ljg1NDIgMjEgMjYuOTgzIDIxSDIyLjAxMTRaTTI0LjQ3MTYgMTguOTg4NkgyNi40NzczQzI3LjE2MjkgMTguOTg4NiAyNy42NjI5IDE4Ljg1OCAyNy45NzczIDE4LjU5NjZDMjguMjkxNyAxOC4zMzE0IDI4LjQ0ODkgMTcuOTc5MiAyOC40NDg5IDE3LjUzOThDMjguNDQ4OSAxNy4yMTc4IDI4LjM3MTIgMTYuOTMzNyAyOC4yMTU5IDE2LjY4NzVDMjguMDYwNiAxNi40NDEzIDI3LjgzOSAxNi4yNDgxIDI3LjU1MTEgMTYuMTA4QzI3LjI2NyAxNS45Njc4ID'+
			'I2LjkyOCAxNS44OTc3IDI2LjUzNDEgMTUuODk3N0gyNC40NzE2VjE4Ljk4ODZaTTI0LjQ3MTYgMTQuMjMzSDI2LjI5NTVDMjYuNjMyNiAxNC4yMzMgMjYuOTMxOCAxNC4xNzQyIDI3LjE5MzIgMTQuMDU2OEMyNy40NTgzIDEzLjkzNTYgMjcuNjY2NyAxMy43NjUyIDI3LjgxODIgMTMuNTQ1NUMyNy45NzM1IDEzLjMyNTggMjguMDUxMSAxMy4wNjI1IDI4LjA1MTEgMTIuNzU1N0MyOC4wNTExIDEyLjMzNTIgMjcuOTAxNSAxMS45OTYyIDI3LjYwMjMgMTEuNzM4NkMyNy4zMDY4IDExLjQ4MTEgMjYuODg2NCAxMS4zNTIzIDI2LjM0MDkgMTEuMzUyM0gyNC40NzE2VjE0LjIzM1pNMzguMTQwNiAxNy4y'+
			'ODQxVjEyLjI3MjdINDAuNTYxMVYyMUgzOC4yMzcyVjE5LjQxNDhIMzguMTQ2M0MzNy45NDkzIDE5LjkyNjEgMzcuNjIxNyAyMC4zMzcxIDM3LjE2MzQgMjAuNjQ3N0MzNi43MDg4IDIwLjk1ODMgMzYuMTUzOSAyMS4xMTM2IDM1LjQ5ODYgMjEuMTEzNkMzNC45MTUyIDIxLjExMzYgMzQuNDAyIDIwLjk4MTEgMzMuOTU4OCAyMC43MTU5QzMzLjUxNTYgMjAuNDUwOCAzMy4xNjkgMjAuMDczOSAzMi45MTkgMTkuNTg1MkMzMi42NzI4IDE5LjA5NjYgMzIuNTQ3OCAxOC41MTE0IDMyLjU0NCAxNy44Mjk1VjEyLjI3MjdIMzQuOTY0NVYxNy4zOTc3QzM0Ljk2ODMgMTcuOTEyOSAzNS4xMDY1IDE4LjMyMD'+
			'EgMzUuMzc5MyAxOC42MTkzQzM1LjY1MiAxOC45MTg2IDM2LjAxNzUgMTkuMDY4MiAzNi40NzU5IDE5LjA2ODJDMzYuNzY3NSAxOS4wNjgyIDM3LjA0MDIgMTkuMDAxOSAzNy4yOTQgMTguODY5M0MzNy41NDc4IDE4LjczMyAzNy43NTI0IDE4LjUzMjIgMzcuOTA3NyAxOC4yNjdDMzguMDY2OCAxOC4wMDE5IDM4LjE0NDQgMTcuNjc0MiAzOC4xNDA2IDE3LjI4NDFaTTQzLjk5MTUgMjQuMjcyN0M0My42ODQ3IDI0LjI3MjcgNDMuMzk2OCAyNC4yNDgxIDQzLjEyNzggMjQuMTk4OUM0Mi44NjI3IDI0LjE1MzQgNDIuNjQzIDI0LjA5NDcgNDIuNDY4OCAyNC4wMjI3TDQzLjAxNDIgMjIuMjE1OUM0My4y'+
			'OTgzIDIyLjMwMyA0My41NTQgMjIuMzUwNCA0My43ODEyIDIyLjM1OEM0NC4wMTIzIDIyLjM2NTUgNDQuMjExMiAyMi4zMTI1IDQ0LjM3NzggMjIuMTk4OUM0NC41NDgzIDIyLjA4NTIgNDQuNjg2NiAyMS44OTIgNDQuNzkyNiAyMS42MTkzTDQ0LjkzNDcgMjEuMjVMNDEuODA0IDEyLjI3MjdINDQuMzQ5NEw0Ni4xNTYyIDE4LjY4MThINDYuMjQ3Mkw0OC4wNzEgMTIuMjcyN0g1MC42MzM1TDQ3LjI0MTUgMjEuOTQzMkM0Ny4wNzg2IDIyLjQxMjkgNDYuODU3IDIyLjgyMiA0Ni41NzY3IDIzLjE3MDVDNDYuMzAwMiAyMy41MjI3IDQ1Ljk0OTggMjMuNzkzNiA0NS41MjU2IDIzLjk4M0M0NS4xMDEzID'+
			'I0LjE3NjEgNDQuNTkgMjQuMjcyNyA0My45OTE1IDI0LjI3MjdaTTY1LjM1MzcgOS4zNjM2NFYyMUg2My4yMjg3TDU4LjE2NjIgMTMuNjc2MUg1OC4wODFWMjFINTUuNjIwN1Y5LjM2MzY0SDU3Ljc3OThMNjIuODAyNiAxNi42ODE4SDYyLjkwNDhWOS4zNjM2NEg2NS4zNTM3Wk03MS4yODQxIDIxLjE3MDVDNzAuNDAxNSAyMS4xNzA1IDY5LjYzODMgMjAuOTgzIDY4Ljk5NDMgMjAuNjA4QzY4LjM1NDIgMjAuMjI5MiA2Ny44NTk4IDE5LjcwMjcgNjcuNTExNCAxOS4wMjg0QzY3LjE2MjkgMTguMzUwNCA2Ni45ODg2IDE3LjU2NDQgNjYuOTg4NiAxNi42NzA1QzY2Ljk4ODYgMTUuNzY4OSA2Ny4xNjI5'+
			'IDE0Ljk4MTEgNjcuNTExNCAxNC4zMDY4QzY3Ljg1OTggMTMuNjI4OCA2OC4zNTQyIDEzLjEwMjMgNjguOTk0MyAxMi43MjczQzY5LjYzODMgMTIuMzQ4NSA3MC40MDE1IDEyLjE1OTEgNzEuMjg0MSAxMi4xNTkxQzcyLjE2NjcgMTIuMTU5MSA3Mi45MjggMTIuMzQ4NSA3My41NjgyIDEyLjcyNzNDNzQuMjEyMSAxMy4xMDIzIDc0LjcwODMgMTMuNjI4OCA3NS4wNTY4IDE0LjMwNjhDNzUuNDA1MyAxNC45ODExIDc1LjU3OTUgMTUuNzY4OSA3NS41Nzk1IDE2LjY3MDVDNzUuNTc5NSAxNy41NjQ0IDc1LjQwNTMgMTguMzUwNCA3NS4wNTY4IDE5LjAyODRDNzQuNzA4MyAxOS43MDI3IDc0LjIxMjEgMj'+
			'AuMjI5MiA3My41NjgyIDIwLjYwOEM3Mi45MjggMjAuOTgzIDcyLjE2NjcgMjEuMTcwNSA3MS4yODQxIDIxLjE3MDVaTTcxLjI5NTUgMTkuMjk1NUM3MS42OTcgMTkuMjk1NSA3Mi4wMzIyIDE5LjE4MTggNzIuMzAxMSAxOC45NTQ1QzcyLjU3MDEgMTguNzIzNSA3Mi43NzI3IDE4LjQwOTEgNzIuOTA5MSAxOC4wMTE0QzczLjA0OTIgMTcuNjEzNiA3My4xMTkzIDE3LjE2MSA3My4xMTkzIDE2LjY1MzRDNzMuMTE5MyAxNi4xNDU4IDczLjA0OTIgMTUuNjkzMiA3Mi45MDkxIDE1LjI5NTVDNzIuNzcyNyAxNC44OTc3IDcyLjU3MDEgMTQuNTgzMyA3Mi4zMDExIDE0LjM1MjNDNzIuMDMyMiAxNC4xMjEy'+
			'IDcxLjY5NyAxNC4wMDU3IDcxLjI5NTUgMTQuMDA1N0M3MC44OTAyIDE0LjAwNTcgNzAuNTQ5MiAxNC4xMjEyIDcwLjI3MjcgMTQuMzUyM0M3MCAxNC41ODMzIDY5Ljc5MzYgMTQuODk3NyA2OS42NTM0IDE1LjI5NTVDNjkuNTE3IDE1LjY5MzIgNjkuNDQ4OSAxNi4xNDU4IDY5LjQ0ODkgMTYuNjUzNEM2OS40NDg5IDE3LjE2MSA2OS41MTcgMTcuNjEzNiA2OS42NTM0IDE4LjAxMTRDNjkuNzkzNiAxOC40MDkxIDcwIDE4LjcyMzUgNzAuMjcyNyAxOC45NTQ1QzcwLjU0OTIgMTkuMTgxOCA3MC44OTAyIDE5LjI5NTUgNzEuMjk1NSAxOS4yOTU1Wk03OC42NTYyIDIxTDc2LjI4MTIgMTIuMjcyN0g3OC'+
			'43MzAxTDgwLjA4MjQgMTguMTM2NEg4MC4xNjE5TDgxLjU3MSAxMi4yNzI3SDgzLjk3NDRMODUuNDA2MiAxOC4xMDIzSDg1LjQ4MDFMODYuODA5NyAxMi4yNzI3SDg5LjI1MjhMODYuODgzNSAyMUg4NC4zMjFMODIuODIxIDE1LjUxMTRIODIuNzEzMUw4MS4yMTMxIDIxSDc4LjY1NjJaIi8+Cjwvc3ZnPgo=';
		me._svg_115__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._svg_115__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjMwIiB2aWV3Qm94PSIwIDAgMTEwIDMwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMTAiPgogPHJlY3QgZmlsbD0iI0QzMzQzNCIgaGVpZ2h0PSIzMCIgcng9IjE1IiB3aWR0aD0iMTEwIi8+CiA8cGF0aCBmaWxsPSJ3aGl0ZSIgZD0iTTIyLjAxMTQgMjFWOS4zNjM2NEgyNi42NzA1QzI3LjUyNjUgOS4zNjM2NCAyOC4yNDA1IDkuNDkwNTMgMjguODEyNSA5Ljc0NDMyQzI5LjM4NDUgOS45OTgxMSAyOS44MTQ0IDEwLjM1MDQgMzAuMTAyMyAxMC44MDExQzMwLjM5MDIgMTEuMjQ4MSAzMC41MzQxIDExLjc2MzMgMzAuNT'+
			'M0MSAxMi4zNDY2QzMwLjUzNDEgMTIuODAxMSAzMC40NDMyIDEzLjIwMDggMzAuMjYxNCAxMy41NDU1QzMwLjA3OTUgMTMuODg2NCAyOS44Mjk1IDE0LjE2NjcgMjkuNTExNCAxNC4zODY0QzI5LjE5NyAxNC42MDIzIDI4LjgzNzEgMTQuNzU1NyAyOC40MzE4IDE0Ljg0NjZWMTQuOTYwMkMyOC44NzUgMTQuOTc5MiAyOS4yODk4IDE1LjEwNDIgMjkuNjc2MSAxNS4zMzUyQzMwLjA2NjMgMTUuNTY2MyAzMC4zODI2IDE1Ljg5MDIgMzAuNjI1IDE2LjMwNjhDMzAuODY3NCAxNi43MTk3IDMwLjk4ODYgMTcuMjEyMSAzMC45ODg2IDE3Ljc4NDFDMzAuOTg4NiAxOC40MDE1IDMwLjgzNTIgMTguOTUyNyAz'+
			'MC41Mjg0IDE5LjQzNzVDMzAuMjI1NCAxOS45MTg2IDI5Ljc3NjUgMjAuMjk5MiAyOS4xODE4IDIwLjU3OTVDMjguNTg3MSAyMC44NTk4IDI3Ljg1NDIgMjEgMjYuOTgzIDIxSDIyLjAxMTRaTTI0LjQ3MTYgMTguOTg4NkgyNi40NzczQzI3LjE2MjkgMTguOTg4NiAyNy42NjI5IDE4Ljg1OCAyNy45NzczIDE4LjU5NjZDMjguMjkxNyAxOC4zMzE0IDI4LjQ0ODkgMTcuOTc5MiAyOC40NDg5IDE3LjUzOThDMjguNDQ4OSAxNy4yMTc4IDI4LjM3MTIgMTYuOTMzNyAyOC4yMTU5IDE2LjY4NzVDMjguMDYwNiAxNi40NDEzIDI3LjgzOSAxNi4yNDgxIDI3LjU1MTEgMTYuMTA4QzI3LjI2NyAxNS45Njc4ID'+
			'I2LjkyOCAxNS44OTc3IDI2LjUzNDEgMTUuODk3N0gyNC40NzE2VjE4Ljk4ODZaTTI0LjQ3MTYgMTQuMjMzSDI2LjI5NTVDMjYuNjMyNiAxNC4yMzMgMjYuOTMxOCAxNC4xNzQyIDI3LjE5MzIgMTQuMDU2OEMyNy40NTgzIDEzLjkzNTYgMjcuNjY2NyAxMy43NjUyIDI3LjgxODIgMTMuNTQ1NUMyNy45NzM1IDEzLjMyNTggMjguMDUxMSAxMy4wNjI1IDI4LjA1MTEgMTIuNzU1N0MyOC4wNTExIDEyLjMzNTIgMjcuOTAxNSAxMS45OTYyIDI3LjYwMjMgMTEuNzM4NkMyNy4zMDY4IDExLjQ4MTEgMjYuODg2NCAxMS4zNTIzIDI2LjM0MDkgMTEuMzUyM0gyNC40NzE2VjE0LjIzM1pNMzguMTQwNiAxNy4y'+
			'ODQxVjEyLjI3MjdINDAuNTYxMVYyMUgzOC4yMzcyVjE5LjQxNDhIMzguMTQ2M0MzNy45NDkzIDE5LjkyNjEgMzcuNjIxNyAyMC4zMzcxIDM3LjE2MzQgMjAuNjQ3N0MzNi43MDg4IDIwLjk1ODMgMzYuMTUzOSAyMS4xMTM2IDM1LjQ5ODYgMjEuMTEzNkMzNC45MTUyIDIxLjExMzYgMzQuNDAyIDIwLjk4MTEgMzMuOTU4OCAyMC43MTU5QzMzLjUxNTYgMjAuNDUwOCAzMy4xNjkgMjAuMDczOSAzMi45MTkgMTkuNTg1MkMzMi42NzI4IDE5LjA5NjYgMzIuNTQ3OCAxOC41MTE0IDMyLjU0NCAxNy44Mjk1VjEyLjI3MjdIMzQuOTY0NVYxNy4zOTc3QzM0Ljk2ODMgMTcuOTEyOSAzNS4xMDY1IDE4LjMyMD'+
			'EgMzUuMzc5MyAxOC42MTkzQzM1LjY1MiAxOC45MTg2IDM2LjAxNzUgMTkuMDY4MiAzNi40NzU5IDE5LjA2ODJDMzYuNzY3NSAxOS4wNjgyIDM3LjA0MDIgMTkuMDAxOSAzNy4yOTQgMTguODY5M0MzNy41NDc4IDE4LjczMyAzNy43NTI0IDE4LjUzMjIgMzcuOTA3NyAxOC4yNjdDMzguMDY2OCAxOC4wMDE5IDM4LjE0NDQgMTcuNjc0MiAzOC4xNDA2IDE3LjI4NDFaTTQzLjk5MTUgMjQuMjcyN0M0My42ODQ3IDI0LjI3MjcgNDMuMzk2OCAyNC4yNDgxIDQzLjEyNzggMjQuMTk4OUM0Mi44NjI3IDI0LjE1MzQgNDIuNjQzIDI0LjA5NDcgNDIuNDY4OCAyNC4wMjI3TDQzLjAxNDIgMjIuMjE1OUM0My4y'+
			'OTgzIDIyLjMwMyA0My41NTQgMjIuMzUwNCA0My43ODEyIDIyLjM1OEM0NC4wMTIzIDIyLjM2NTUgNDQuMjExMiAyMi4zMTI1IDQ0LjM3NzggMjIuMTk4OUM0NC41NDgzIDIyLjA4NTIgNDQuNjg2NiAyMS44OTIgNDQuNzkyNiAyMS42MTkzTDQ0LjkzNDcgMjEuMjVMNDEuODA0IDEyLjI3MjdINDQuMzQ5NEw0Ni4xNTYyIDE4LjY4MThINDYuMjQ3Mkw0OC4wNzEgMTIuMjcyN0g1MC42MzM1TDQ3LjI0MTUgMjEuOTQzMkM0Ny4wNzg2IDIyLjQxMjkgNDYuODU3IDIyLjgyMiA0Ni41NzY3IDIzLjE3MDVDNDYuMzAwMiAyMy41MjI3IDQ1Ljk0OTggMjMuNzkzNiA0NS41MjU2IDIzLjk4M0M0NS4xMDEzID'+
			'I0LjE3NjEgNDQuNTkgMjQuMjcyNyA0My45OTE1IDI0LjI3MjdaTTY1LjM1MzcgOS4zNjM2NFYyMUg2My4yMjg3TDU4LjE2NjIgMTMuNjc2MUg1OC4wODFWMjFINTUuNjIwN1Y5LjM2MzY0SDU3Ljc3OThMNjIuODAyNiAxNi42ODE4SDYyLjkwNDhWOS4zNjM2NEg2NS4zNTM3Wk03MS4yODQxIDIxLjE3MDVDNzAuNDAxNSAyMS4xNzA1IDY5LjYzODMgMjAuOTgzIDY4Ljk5NDMgMjAuNjA4QzY4LjM1NDIgMjAuMjI5MiA2Ny44NTk4IDE5LjcwMjcgNjcuNTExNCAxOS4wMjg0QzY3LjE2MjkgMTguMzUwNCA2Ni45ODg2IDE3LjU2NDQgNjYuOTg4NiAxNi42NzA1QzY2Ljk4ODYgMTUuNzY4OSA2Ny4xNjI5'+
			'IDE0Ljk4MTEgNjcuNTExNCAxNC4zMDY4QzY3Ljg1OTggMTMuNjI4OCA2OC4zNTQyIDEzLjEwMjMgNjguOTk0MyAxMi43MjczQzY5LjYzODMgMTIuMzQ4NSA3MC40MDE1IDEyLjE1OTEgNzEuMjg0MSAxMi4xNTkxQzcyLjE2NjcgMTIuMTU5MSA3Mi45MjggMTIuMzQ4NSA3My41NjgyIDEyLjcyNzNDNzQuMjEyMSAxMy4xMDIzIDc0LjcwODMgMTMuNjI4OCA3NS4wNTY4IDE0LjMwNjhDNzUuNDA1MyAxNC45ODExIDc1LjU3OTUgMTUuNzY4OSA3NS41Nzk1IDE2LjY3MDVDNzUuNTc5NSAxNy41NjQ0IDc1LjQwNTMgMTguMzUwNCA3NS4wNTY4IDE5LjAyODRDNzQuNzA4MyAxOS43MDI3IDc0LjIxMjEgMj'+
			'AuMjI5MiA3My41NjgyIDIwLjYwOEM3Mi45MjggMjAuOTgzIDcyLjE2NjcgMjEuMTcwNSA3MS4yODQxIDIxLjE3MDVaTTcxLjI5NTUgMTkuMjk1NUM3MS42OTcgMTkuMjk1NSA3Mi4wMzIyIDE5LjE4MTggNzIuMzAxMSAxOC45NTQ1QzcyLjU3MDEgMTguNzIzNSA3Mi43NzI3IDE4LjQwOTEgNzIuOTA5MSAxOC4wMTE0QzczLjA0OTIgMTcuNjEzNiA3My4xMTkzIDE3LjE2MSA3My4xMTkzIDE2LjY1MzRDNzMuMTE5MyAxNi4xNDU4IDczLjA0OTIgMTUuNjkzMiA3Mi45MDkxIDE1LjI5NTVDNzIuNzcyNyAxNC44OTc3IDcyLjU3MDEgMTQuNTgzMyA3Mi4zMDExIDE0LjM1MjNDNzIuMDMyMiAxNC4xMjEy'+
			'IDcxLjY5NyAxNC4wMDU3IDcxLjI5NTUgMTQuMDA1N0M3MC44OTAyIDE0LjAwNTcgNzAuNTQ5MiAxNC4xMjEyIDcwLjI3MjcgMTQuMzUyM0M3MCAxNC41ODMzIDY5Ljc5MzYgMTQuODk3NyA2OS42NTM0IDE1LjI5NTVDNjkuNTE3IDE1LjY5MzIgNjkuNDQ4OSAxNi4xNDU4IDY5LjQ0ODkgMTYuNjUzNEM2OS40NDg5IDE3LjE2MSA2OS41MTcgMTcuNjEzNiA2OS42NTM0IDE4LjAxMTRDNjkuNzkzNiAxOC40MDkxIDcwIDE4LjcyMzUgNzAuMjcyNyAxOC45NTQ1QzcwLjU0OTIgMTkuMTgxOCA3MC44OTAyIDE5LjI5NTUgNzEuMjk1NSAxOS4yOTU1Wk03OC42NTYyIDIxTDc2LjI4MTIgMTIuMjcyN0g3OC'+
			'43MzAxTDgwLjA4MjQgMTguMTM2NEg4MC4xNjE5TDgxLjU3MSAxMi4yNzI3SDgzLjk3NDRMODUuNDA2MiAxOC4xMDIzSDg1LjQ4MDFMODYuODA5NyAxMi4yNzI3SDg5LjI1MjhMODYuODgzNSAyMUg4NC4zMjFMODIuODIxIDE1LjUxMTRIODIuNzEzMUw4MS4yMTMxIDIxSDc4LjY1NjJaIi8+Cjwvc3ZnPgo=';
		me._svg_115__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="Svg 11";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 23px;';
		hs+='position : absolute;';
		hs+='right : 5px;';
		hs+='top : calc(50% - ((23px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 90px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_115.ggIsActive=function() {
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
		me._svg_115.onclick=function (e) {
			if (me._svg_115.isDragging()) return;
			player.openUrl("https:\/\/autos.com.pl\/pl\/produkt\/filtr-paliwa-separator-unitruck-ut6012b\/132406","_blank");
			var list=me.findElements("products_list",true);
			while(list.length>0) {
				var e=list.pop();
				e.style.transition='none';
				e.style.visibility='hidden';
				e.ggVisible=false;
			}
		}
		me._svg_115.onmouseover=function (e) {
			me._svg_115__img.style.visibility='hidden';
			me._svg_115__imgo.style.visibility='inherit';
			me.elementMouseOver['svg_115']=true;
		}
		me._svg_115.onmouseout=function (e) {
			me._svg_115__img.style.visibility='inherit';
			me._svg_115__imgo.style.visibility='hidden';
			me.elementMouseOver['svg_115']=false;
		}
		me._svg_115.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['svg_115']) {
				me._svg_115__img.style.visibility='hidden';
				me._svg_115__imgo.style.visibility='inherit';
				me.elementMouseOver['svg_115']=true;
			}
		}
		me._svg_115.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_4_10.appendChild(me._svg_115);
		el=me._svg_135=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._svg_135;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._svg_135__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjMwIiB2aWV3Qm94PSIwIDAgMTEwIDMwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMTAiPgogPHJlY3QgZmlsbD0iI0Y2OTIxRSIgaGVpZ2h0PSIzMCIgcng9IjE1IiB3aWR0aD0iMTEwIi8+CiA8cGF0aCBmaWxsPSJ3aGl0ZSIgZD0iTTM4LjM5NDkgOS4zNjM2NEw0MS4yMDc0IDE4LjIwNDVINDEuMzE1M0w0NC4xMzM1IDkuMzYzNjRINDYuODYwOEw0Mi44NDk0IDIxSDM5LjY3OUwzNS42NjE5IDkuMzYzNjRIMzguMzk0OVpNNDguMjE1OSAyMVYxMi4yNzI3SDUwLjYzNjRWMjFINDguMjE1OVpNNDkuNDMxOCAxMS4xND'+
			'c3QzQ5LjA3MiAxMS4xNDc3IDQ4Ljc2MzMgMTEuMDI4NCA0OC41MDU3IDEwLjc4OThDNDguMjUxOSAxMC41NDczIDQ4LjEyNSAxMC4yNTc2IDQ4LjEyNSA5LjkyMDQ1QzQ4LjEyNSA5LjU4NzEyIDQ4LjI1MTkgOS4zMDExNCA0OC41MDU3IDkuMDYyNUM0OC43NjMzIDguODIwMDggNDkuMDcyIDguNjk4ODYgNDkuNDMxOCA4LjY5ODg2QzQ5Ljc5MTcgOC42OTg4NiA1MC4wOTg1IDguODIwMDggNTAuMzUyMyA5LjA2MjVDNTAuNjA5OCA5LjMwMTE0IDUwLjczODYgOS41ODcxMiA1MC43Mzg2IDkuOTIwNDVDNTAuNzM4NiAxMC4yNTc2IDUwLjYwOTggMTAuNTQ3MyA1MC4zNTIzIDEwLjc4OThDNTAuMDk4'+
			'NSAxMS4wMjg0IDQ5Ljc5MTcgMTEuMTQ3NyA0OS40MzE4IDExLjE0NzdaTTU2LjU1MjYgMjEuMTcwNUM1NS42NTQ4IDIxLjE3MDUgNTQuODgyMSAyMC45ODg2IDU0LjIzNDQgMjAuNjI1QzUzLjU5MDQgMjAuMjU3NiA1My4wOTQyIDE5LjczODYgNTIuNzQ1NyAxOS4wNjgyQzUyLjM5NzMgMTguMzkzOSA1Mi4yMjMgMTcuNTk2NiA1Mi4yMjMgMTYuNjc2MUM1Mi4yMjMgMTUuNzc4NCA1Mi4zOTczIDE0Ljk5MDUgNTIuNzQ1NyAxNC4zMTI1QzUzLjA5NDIgMTMuNjM0NSA1My41ODQ4IDEzLjEwNjEgNTQuMjE3MyAxMi43MjczQzU0Ljg1MzcgMTIuMzQ4NSA1NS41OTk5IDEyLjE1OTEgNTYuNDU2IDEyLj'+
			'E1OTFDNTcuMDMxNyAxMi4xNTkxIDU3LjU2NzcgMTIuMjUxOSA1OC4wNjM5IDEyLjQzNzVDNTguNTYzOSAxMi42MTkzIDU4Ljk5OTUgMTIuODkzOSA1OS4zNzA3IDEzLjI2MTRDNTkuNzQ1NyAxMy42Mjg4IDYwLjAzNzQgMTQuMDkwOSA2MC4yNDU3IDE0LjY0NzdDNjAuNDU0MSAxNS4yMDA4IDYwLjU1ODIgMTUuODQ4NSA2MC41NTgyIDE2LjU5MDlWMTcuMjU1N0g1My4xODg5VjE1Ljc1NTdINTguMjc5OEM1OC4yNzk4IDE1LjQwNzIgNTguMjA0MSAxNS4wOTg1IDU4LjA1MjYgMTQuODI5NUM1Ny45MDEgMTQuNTYwNiA1Ny42OTA4IDE0LjM1MDQgNTcuNDIxOSAxNC4xOTg5QzU3LjE1NjcgMTQuMDQz'+
			'NiA1Ni44NDggMTMuOTY1OSA1Ni40OTU3IDEzLjk2NTlDNTYuMTI4MyAxMy45NjU5IDU1LjgwMjYgMTQuMDUxMSA1NS41MTg1IDE0LjIyMTZDNTUuMjM4MiAxNC4zODgzIDU1LjAxODUgMTQuNjEzNiA1NC44NTk0IDE0Ljg5NzdDNTQuNzAwMyAxNS4xNzggNTQuNjE4OCAxNS40OTA1IDU0LjYxNTEgMTUuODM1MlYxNy4yNjE0QzU0LjYxNTEgMTcuNjkzMiA1NC42OTQ2IDE4LjA2NjMgNTQuODUzNyAxOC4zODA3QzU1LjAxNjYgMTguNjk1MSA1NS4yNDU3IDE4LjkzNzUgNTUuNTQxMiAxOS4xMDhDNTUuODM2NiAxOS4yNzg0IDU2LjE4NyAxOS4zNjM2IDU2LjU5MjMgMTkuMzYzNkM1Ni44NjEzIDE5Lj'+
			'M2MzYgNTcuMTA3NSAxOS4zMjU4IDU3LjMzMSAxOS4yNUM1Ny41NTQ1IDE5LjE3NDIgNTcuNzQ1NyAxOS4wNjA2IDU3LjkwNDggMTguOTA5MUM1OC4wNjM5IDE4Ljc1NzYgNTguMTg1MSAxOC41NzIgNTguMjY4NSAxOC4zNTIzTDYwLjUwNzEgMTguNUM2MC4zOTM1IDE5LjAzNzkgNjAuMTYwNSAxOS41MDc2IDU5LjgwODIgMTkuOTA5MUM1OS40NTk4IDIwLjMwNjggNTkuMDA5IDIwLjYxNzQgNTguNDU2IDIwLjg0MDlDNTcuOTA2NyAyMS4wNjA2IDU3LjI3MjMgMjEuMTcwNSA1Ni41NTI2IDIxLjE3MDVaTTYzLjc5NjkgMjFMNjEuNDIxOSAxMi4yNzI3SDYzLjg3MDdMNjUuMjIzIDE4LjEzNjRINjUu'+
			'MzAyNkw2Ni43MTE2IDEyLjI3MjdINjkuMTE1MUw3MC41NDY5IDE4LjEwMjNINzAuNjIwN0w3MS45NTAzIDEyLjI3MjdINzQuMzkzNUw3Mi4wMjQxIDIxSDY5LjQ2MTZMNjcuOTYxNiAxNS41MTE0SDY3Ljg1MzdMNjYuMzUzNyAyMUg2My43OTY5WiIvPgo8L3N2Zz4K';
		me._svg_135__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._svg_135__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjMwIiB2aWV3Qm94PSIwIDAgMTEwIDMwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMTAiPgogPHJlY3QgZmlsbD0iI0FGNUUwMCIgaGVpZ2h0PSIzMCIgcng9IjE1IiB3aWR0aD0iMTEwIi8+CiA8cGF0aCBmaWxsPSJ3aGl0ZSIgZD0iTTM4LjM5NDkgOS4zNjM2NEw0MS4yMDc0IDE4LjIwNDVINDEuMzE1M0w0NC4xMzM1IDkuMzYzNjRINDYuODYwOEw0Mi44NDk0IDIxSDM5LjY3OUwzNS42NjE5IDkuMzYzNjRIMzguMzk0OVpNNDguMjE1OSAyMVYxMi4yNzI3SDUwLjYzNjRWMjFINDguMjE1OVpNNDkuNDMxOCAxMS4xND'+
			'c3QzQ5LjA3MiAxMS4xNDc3IDQ4Ljc2MzMgMTEuMDI4NCA0OC41MDU3IDEwLjc4OThDNDguMjUxOSAxMC41NDczIDQ4LjEyNSAxMC4yNTc2IDQ4LjEyNSA5LjkyMDQ1QzQ4LjEyNSA5LjU4NzEyIDQ4LjI1MTkgOS4zMDExNCA0OC41MDU3IDkuMDYyNUM0OC43NjMzIDguODIwMDggNDkuMDcyIDguNjk4ODYgNDkuNDMxOCA4LjY5ODg2QzQ5Ljc5MTcgOC42OTg4NiA1MC4wOTg1IDguODIwMDggNTAuMzUyMyA5LjA2MjVDNTAuNjA5OCA5LjMwMTE0IDUwLjczODYgOS41ODcxMiA1MC43Mzg2IDkuOTIwNDVDNTAuNzM4NiAxMC4yNTc2IDUwLjYwOTggMTAuNTQ3MyA1MC4zNTIzIDEwLjc4OThDNTAuMDk4'+
			'NSAxMS4wMjg0IDQ5Ljc5MTcgMTEuMTQ3NyA0OS40MzE4IDExLjE0NzdaTTU2LjU1MjYgMjEuMTcwNUM1NS42NTQ4IDIxLjE3MDUgNTQuODgyMSAyMC45ODg2IDU0LjIzNDQgMjAuNjI1QzUzLjU5MDQgMjAuMjU3NiA1My4wOTQyIDE5LjczODYgNTIuNzQ1NyAxOS4wNjgyQzUyLjM5NzMgMTguMzkzOSA1Mi4yMjMgMTcuNTk2NiA1Mi4yMjMgMTYuNjc2MUM1Mi4yMjMgMTUuNzc4NCA1Mi4zOTczIDE0Ljk5MDUgNTIuNzQ1NyAxNC4zMTI1QzUzLjA5NDIgMTMuNjM0NSA1My41ODQ4IDEzLjEwNjEgNTQuMjE3MyAxMi43MjczQzU0Ljg1MzcgMTIuMzQ4NSA1NS41OTk5IDEyLjE1OTEgNTYuNDU2IDEyLj'+
			'E1OTFDNTcuMDMxNyAxMi4xNTkxIDU3LjU2NzcgMTIuMjUxOSA1OC4wNjM5IDEyLjQzNzVDNTguNTYzOSAxMi42MTkzIDU4Ljk5OTUgMTIuODkzOSA1OS4zNzA3IDEzLjI2MTRDNTkuNzQ1NyAxMy42Mjg4IDYwLjAzNzQgMTQuMDkwOSA2MC4yNDU3IDE0LjY0NzdDNjAuNDU0MSAxNS4yMDA4IDYwLjU1ODIgMTUuODQ4NSA2MC41NTgyIDE2LjU5MDlWMTcuMjU1N0g1My4xODg5VjE1Ljc1NTdINTguMjc5OEM1OC4yNzk4IDE1LjQwNzIgNTguMjA0MSAxNS4wOTg1IDU4LjA1MjYgMTQuODI5NUM1Ny45MDEgMTQuNTYwNiA1Ny42OTA4IDE0LjM1MDQgNTcuNDIxOSAxNC4xOTg5QzU3LjE1NjcgMTQuMDQz'+
			'NiA1Ni44NDggMTMuOTY1OSA1Ni40OTU3IDEzLjk2NTlDNTYuMTI4MyAxMy45NjU5IDU1LjgwMjYgMTQuMDUxMSA1NS41MTg1IDE0LjIyMTZDNTUuMjM4MiAxNC4zODgzIDU1LjAxODUgMTQuNjEzNiA1NC44NTk0IDE0Ljg5NzdDNTQuNzAwMyAxNS4xNzggNTQuNjE4OCAxNS40OTA1IDU0LjYxNTEgMTUuODM1MlYxNy4yNjE0QzU0LjYxNTEgMTcuNjkzMiA1NC42OTQ2IDE4LjA2NjMgNTQuODUzNyAxOC4zODA3QzU1LjAxNjYgMTguNjk1MSA1NS4yNDU3IDE4LjkzNzUgNTUuNTQxMiAxOS4xMDhDNTUuODM2NiAxOS4yNzg0IDU2LjE4NyAxOS4zNjM2IDU2LjU5MjMgMTkuMzYzNkM1Ni44NjEzIDE5Lj'+
			'M2MzYgNTcuMTA3NSAxOS4zMjU4IDU3LjMzMSAxOS4yNUM1Ny41NTQ1IDE5LjE3NDIgNTcuNzQ1NyAxOS4wNjA2IDU3LjkwNDggMTguOTA5MUM1OC4wNjM5IDE4Ljc1NzYgNTguMTg1MSAxOC41NzIgNTguMjY4NSAxOC4zNTIzTDYwLjUwNzEgMTguNUM2MC4zOTM1IDE5LjAzNzkgNjAuMTYwNSAxOS41MDc2IDU5LjgwODIgMTkuOTA5MUM1OS40NTk4IDIwLjMwNjggNTkuMDA5IDIwLjYxNzQgNTguNDU2IDIwLjg0MDlDNTcuOTA2NyAyMS4wNjA2IDU3LjI3MjMgMjEuMTcwNSA1Ni41NTI2IDIxLjE3MDVaTTYzLjc5NjkgMjFMNjEuNDIxOSAxMi4yNzI3SDYzLjg3MDdMNjUuMjIzIDE4LjEzNjRINjUu'+
			'MzAyNkw2Ni43MTE2IDEyLjI3MjdINjkuMTE1MUw3MC41NDY5IDE4LjEwMjNINzAuNjIwN0w3MS45NTAzIDEyLjI3MjdINzQuMzkzNUw3Mi4wMjQxIDIxSDY5LjQ2MTZMNjcuOTYxNiAxNS41MTE0SDY3Ljg1MzdMNjYuMzUzNyAyMUg2My43OTY5WiIvPgo8L3N2Zz4K';
		me._svg_135__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="Svg 13";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 23px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((23px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 90px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_135.ggIsActive=function() {
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
		me._svg_135.onclick=function (e) {
			if (me._svg_135.isDragging()) return;
			player.moveTo("-99.97","3.7","20.74","18.0000");
			var list=me.findElements("products_list",true);
			while(list.length>0) {
				var e=list.pop();
				e.style.transition='none';
				e.style.visibility='hidden';
				e.ggVisible=false;
			}
		}
		me._svg_135.onmouseover=function (e) {
			me._svg_135__img.style.visibility='hidden';
			me._svg_135__imgo.style.visibility='inherit';
			me.elementMouseOver['svg_135']=true;
		}
		me._svg_135.onmouseout=function (e) {
			me._svg_135__img.style.visibility='inherit';
			me._svg_135__imgo.style.visibility='hidden';
			me.elementMouseOver['svg_135']=false;
		}
		me._svg_135.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['svg_135']) {
				me._svg_135__img.style.visibility='hidden';
				me._svg_135__imgo.style.visibility='inherit';
				me.elementMouseOver['svg_135']=true;
			}
		}
		me._svg_135.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_4_10.appendChild(me._svg_135);
		me._product_list_sn702070.appendChild(me._rectangle_4_10);
		me._scrollarea_1__content.appendChild(me._product_list_sn702070);
		el=me._product_list_pl2700=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._product_list_pl2700;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="product_list_pl270";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle product_list";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #eeeeee;';
		hs+='border-radius : 5px;';
		hs+='cursor : default;';
		hs+='height : 300px;';
		hs+='position : absolute;';
		hs+='right : 748px;';
		hs+='top : 330px;';
		hs+='visibility : inherit;';
		hs+='width : 200px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 0%';
		me._product_list_pl2700.ggIsActive=function() {
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
		me._product_list_pl2700.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_111=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._image_111;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._image_111__img=document.createElement('img');
		els.className='ggskin ggskin_image_111';
		hs=basePath + 'images/image_111.png';
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
		el.ggId="Image 11";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 180px;';
		hs+='position : absolute;';
		hs+='right : 10px;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 180px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_111.ggIsActive=function() {
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
		me._image_111.ggUpdatePosition=function (useTransition) {
		}
		me._product_list_pl2700.appendChild(me._image_111);
		el=me._text_60=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._text_60;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._text_60__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 6";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(102,102,102,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 5px;';
		hs+='top : 199px;';
		hs+='visibility : inherit;';
		hs+='width : 95%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+="text-overflow: ellipsis;";
		els.setAttribute('style',hs);
		me._text_60.ggUpdateText=function() {
			var params = [];
			var hs = player._("Binko pa system outdoor speak", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_60.ggUpdateText();
		el.appendChild(els);
		me._text_60.ggIsActive=function() {
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
		me._text_60.ggUpdatePosition=function (useTransition) {
		}
		me._product_list_pl2700.appendChild(me._text_60);
		el=me._text_6_10=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._text_6_10;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._text_6_10__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 6_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(0,0,0,1);';
		hs+='cursor : default;';
		hs+='height : 21px;';
		hs+='position : absolute;';
		hs+='right : 3px;';
		hs+='top : 222px;';
		hs+='visibility : inherit;';
		hs+='width : 95%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='bottom: 0px;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+="text-overflow: ellipsis;";
		els.setAttribute('style',hs);
		me._text_6_10.ggUpdateText=function() {
			var params = [];
			var hs = player._("<div class=\"ggmarkdown\"><p><strong>$10-$25<\/strong> \/pieces<\/p>\n<div>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_6_10.ggUpdateText();
		el.appendChild(els);
		me._text_6_10.ggIsActive=function() {
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
		me._text_6_10.ggUpdatePosition=function (useTransition) {
		}
		me._product_list_pl2700.appendChild(me._text_6_10);
		el=me._text_6_1_1_10=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._text_6_1_1_10;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._text_6_1_1_10__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 6_1_1_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(0,0,0,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 113px;';
		hs+='top : 245px;';
		hs+='visibility : inherit;';
		hs+='width : 40%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='bottom: 0px;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+="text-overflow: ellipsis;";
		els.setAttribute('style',hs);
		me._text_6_1_1_10.ggUpdateText=function() {
			var params = [];
			var hs = player._("<div class=\"ggmarkdown\"><p>100 pieces<\/p>\n<div>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_6_1_1_10.ggUpdateText();
		el.appendChild(els);
		me._text_6_1_1_10.ggIsActive=function() {
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
		me._text_6_1_1_10.ggUpdatePosition=function (useTransition) {
		}
		me._product_list_pl2700.appendChild(me._text_6_1_1_10);
		el=me._text_6_1_10=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._text_6_1_10;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._text_6_1_10__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 6_1_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(168,168,168,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 45px;';
		hs+='top : 245px;';
		hs+='visibility : inherit;';
		hs+='width : 35%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='bottom: 0px;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+="text-overflow: ellipsis;";
		els.setAttribute('style',hs);
		me._text_6_1_10.ggUpdateText=function() {
			var params = [];
			var hs = player._("<div class=\"ggmarkdown\"><p>(MOQ)<\/p>\n<div>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_6_1_10.ggUpdateText();
		el.appendChild(els);
		me._text_6_1_10.ggIsActive=function() {
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
		me._text_6_1_10.ggUpdatePosition=function (useTransition) {
		}
		me._product_list_pl2700.appendChild(me._text_6_1_10);
		el=me._rectangle_40=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._rectangle_40;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="Rectangle 4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 30px;';
		hs+='position : absolute;';
		hs+='right : 5px;';
		hs+='top : 265px;';
		hs+='visibility : inherit;';
		hs+='width : 95%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_40.ggIsActive=function() {
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
		me._rectangle_40.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_114=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._svg_114;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._svg_114__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjMwIiB2aWV3Qm94PSIwIDAgMTEwIDMwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMTAiPgogPHJlY3QgZmlsbD0iIzE5Mjg0NSIgaGVpZ2h0PSIzMCIgcng9IjE1IiB3aWR0aD0iMTEwIi8+CiA8cGF0aCBmaWxsPSJ3aGl0ZSIgZD0iTTIyLjAxMTQgMjFWOS4zNjM2NEgyNi42NzA1QzI3LjUyNjUgOS4zNjM2NCAyOC4yNDA1IDkuNDkwNTMgMjguODEyNSA5Ljc0NDMyQzI5LjM4NDUgOS45OTgxMSAyOS44MTQ0IDEwLjM1MDQgMzAuMTAyMyAxMC44MDExQzMwLjM5MDIgMTEuMjQ4MSAzMC41MzQxIDExLjc2MzMgMzAuNT'+
			'M0MSAxMi4zNDY2QzMwLjUzNDEgMTIuODAxMSAzMC40NDMyIDEzLjIwMDggMzAuMjYxNCAxMy41NDU1QzMwLjA3OTUgMTMuODg2NCAyOS44Mjk1IDE0LjE2NjcgMjkuNTExNCAxNC4zODY0QzI5LjE5NyAxNC42MDIzIDI4LjgzNzEgMTQuNzU1NyAyOC40MzE4IDE0Ljg0NjZWMTQuOTYwMkMyOC44NzUgMTQuOTc5MiAyOS4yODk4IDE1LjEwNDIgMjkuNjc2MSAxNS4zMzUyQzMwLjA2NjMgMTUuNTY2MyAzMC4zODI2IDE1Ljg5MDIgMzAuNjI1IDE2LjMwNjhDMzAuODY3NCAxNi43MTk3IDMwLjk4ODYgMTcuMjEyMSAzMC45ODg2IDE3Ljc4NDFDMzAuOTg4NiAxOC40MDE1IDMwLjgzNTIgMTguOTUyNyAz'+
			'MC41Mjg0IDE5LjQzNzVDMzAuMjI1NCAxOS45MTg2IDI5Ljc3NjUgMjAuMjk5MiAyOS4xODE4IDIwLjU3OTVDMjguNTg3MSAyMC44NTk4IDI3Ljg1NDIgMjEgMjYuOTgzIDIxSDIyLjAxMTRaTTI0LjQ3MTYgMTguOTg4NkgyNi40NzczQzI3LjE2MjkgMTguOTg4NiAyNy42NjI5IDE4Ljg1OCAyNy45NzczIDE4LjU5NjZDMjguMjkxNyAxOC4zMzE0IDI4LjQ0ODkgMTcuOTc5MiAyOC40NDg5IDE3LjUzOThDMjguNDQ4OSAxNy4yMTc4IDI4LjM3MTIgMTYuOTMzNyAyOC4yMTU5IDE2LjY4NzVDMjguMDYwNiAxNi40NDEzIDI3LjgzOSAxNi4yNDgxIDI3LjU1MTEgMTYuMTA4QzI3LjI2NyAxNS45Njc4ID'+
			'I2LjkyOCAxNS44OTc3IDI2LjUzNDEgMTUuODk3N0gyNC40NzE2VjE4Ljk4ODZaTTI0LjQ3MTYgMTQuMjMzSDI2LjI5NTVDMjYuNjMyNiAxNC4yMzMgMjYuOTMxOCAxNC4xNzQyIDI3LjE5MzIgMTQuMDU2OEMyNy40NTgzIDEzLjkzNTYgMjcuNjY2NyAxMy43NjUyIDI3LjgxODIgMTMuNTQ1NUMyNy45NzM1IDEzLjMyNTggMjguMDUxMSAxMy4wNjI1IDI4LjA1MTEgMTIuNzU1N0MyOC4wNTExIDEyLjMzNTIgMjcuOTAxNSAxMS45OTYyIDI3LjYwMjMgMTEuNzM4NkMyNy4zMDY4IDExLjQ4MTEgMjYuODg2NCAxMS4zNTIzIDI2LjM0MDkgMTEuMzUyM0gyNC40NzE2VjE0LjIzM1pNMzguMTQwNiAxNy4y'+
			'ODQxVjEyLjI3MjdINDAuNTYxMVYyMUgzOC4yMzcyVjE5LjQxNDhIMzguMTQ2M0MzNy45NDkzIDE5LjkyNjEgMzcuNjIxNyAyMC4zMzcxIDM3LjE2MzQgMjAuNjQ3N0MzNi43MDg4IDIwLjk1ODMgMzYuMTUzOSAyMS4xMTM2IDM1LjQ5ODYgMjEuMTEzNkMzNC45MTUyIDIxLjExMzYgMzQuNDAyIDIwLjk4MTEgMzMuOTU4OCAyMC43MTU5QzMzLjUxNTYgMjAuNDUwOCAzMy4xNjkgMjAuMDczOSAzMi45MTkgMTkuNTg1MkMzMi42NzI4IDE5LjA5NjYgMzIuNTQ3OCAxOC41MTE0IDMyLjU0NCAxNy44Mjk1VjEyLjI3MjdIMzQuOTY0NVYxNy4zOTc3QzM0Ljk2ODMgMTcuOTEyOSAzNS4xMDY1IDE4LjMyMD'+
			'EgMzUuMzc5MyAxOC42MTkzQzM1LjY1MiAxOC45MTg2IDM2LjAxNzUgMTkuMDY4MiAzNi40NzU5IDE5LjA2ODJDMzYuNzY3NSAxOS4wNjgyIDM3LjA0MDIgMTkuMDAxOSAzNy4yOTQgMTguODY5M0MzNy41NDc4IDE4LjczMyAzNy43NTI0IDE4LjUzMjIgMzcuOTA3NyAxOC4yNjdDMzguMDY2OCAxOC4wMDE5IDM4LjE0NDQgMTcuNjc0MiAzOC4xNDA2IDE3LjI4NDFaTTQzLjk5MTUgMjQuMjcyN0M0My42ODQ3IDI0LjI3MjcgNDMuMzk2OCAyNC4yNDgxIDQzLjEyNzggMjQuMTk4OUM0Mi44NjI3IDI0LjE1MzQgNDIuNjQzIDI0LjA5NDcgNDIuNDY4OCAyNC4wMjI3TDQzLjAxNDIgMjIuMjE1OUM0My4y'+
			'OTgzIDIyLjMwMyA0My41NTQgMjIuMzUwNCA0My43ODEyIDIyLjM1OEM0NC4wMTIzIDIyLjM2NTUgNDQuMjExMiAyMi4zMTI1IDQ0LjM3NzggMjIuMTk4OUM0NC41NDgzIDIyLjA4NTIgNDQuNjg2NiAyMS44OTIgNDQuNzkyNiAyMS42MTkzTDQ0LjkzNDcgMjEuMjVMNDEuODA0IDEyLjI3MjdINDQuMzQ5NEw0Ni4xNTYyIDE4LjY4MThINDYuMjQ3Mkw0OC4wNzEgMTIuMjcyN0g1MC42MzM1TDQ3LjI0MTUgMjEuOTQzMkM0Ny4wNzg2IDIyLjQxMjkgNDYuODU3IDIyLjgyMiA0Ni41NzY3IDIzLjE3MDVDNDYuMzAwMiAyMy41MjI3IDQ1Ljk0OTggMjMuNzkzNiA0NS41MjU2IDIzLjk4M0M0NS4xMDEzID'+
			'I0LjE3NjEgNDQuNTkgMjQuMjcyNyA0My45OTE1IDI0LjI3MjdaTTY1LjM1MzcgOS4zNjM2NFYyMUg2My4yMjg3TDU4LjE2NjIgMTMuNjc2MUg1OC4wODFWMjFINTUuNjIwN1Y5LjM2MzY0SDU3Ljc3OThMNjIuODAyNiAxNi42ODE4SDYyLjkwNDhWOS4zNjM2NEg2NS4zNTM3Wk03MS4yODQxIDIxLjE3MDVDNzAuNDAxNSAyMS4xNzA1IDY5LjYzODMgMjAuOTgzIDY4Ljk5NDMgMjAuNjA4QzY4LjM1NDIgMjAuMjI5MiA2Ny44NTk4IDE5LjcwMjcgNjcuNTExNCAxOS4wMjg0QzY3LjE2MjkgMTguMzUwNCA2Ni45ODg2IDE3LjU2NDQgNjYuOTg4NiAxNi42NzA1QzY2Ljk4ODYgMTUuNzY4OSA2Ny4xNjI5'+
			'IDE0Ljk4MTEgNjcuNTExNCAxNC4zMDY4QzY3Ljg1OTggMTMuNjI4OCA2OC4zNTQyIDEzLjEwMjMgNjguOTk0MyAxMi43MjczQzY5LjYzODMgMTIuMzQ4NSA3MC40MDE1IDEyLjE1OTEgNzEuMjg0MSAxMi4xNTkxQzcyLjE2NjcgMTIuMTU5MSA3Mi45MjggMTIuMzQ4NSA3My41NjgyIDEyLjcyNzNDNzQuMjEyMSAxMy4xMDIzIDc0LjcwODMgMTMuNjI4OCA3NS4wNTY4IDE0LjMwNjhDNzUuNDA1MyAxNC45ODExIDc1LjU3OTUgMTUuNzY4OSA3NS41Nzk1IDE2LjY3MDVDNzUuNTc5NSAxNy41NjQ0IDc1LjQwNTMgMTguMzUwNCA3NS4wNTY4IDE5LjAyODRDNzQuNzA4MyAxOS43MDI3IDc0LjIxMjEgMj'+
			'AuMjI5MiA3My41NjgyIDIwLjYwOEM3Mi45MjggMjAuOTgzIDcyLjE2NjcgMjEuMTcwNSA3MS4yODQxIDIxLjE3MDVaTTcxLjI5NTUgMTkuMjk1NUM3MS42OTcgMTkuMjk1NSA3Mi4wMzIyIDE5LjE4MTggNzIuMzAxMSAxOC45NTQ1QzcyLjU3MDEgMTguNzIzNSA3Mi43NzI3IDE4LjQwOTEgNzIuOTA5MSAxOC4wMTE0QzczLjA0OTIgMTcuNjEzNiA3My4xMTkzIDE3LjE2MSA3My4xMTkzIDE2LjY1MzRDNzMuMTE5MyAxNi4xNDU4IDczLjA0OTIgMTUuNjkzMiA3Mi45MDkxIDE1LjI5NTVDNzIuNzcyNyAxNC44OTc3IDcyLjU3MDEgMTQuNTgzMyA3Mi4zMDExIDE0LjM1MjNDNzIuMDMyMiAxNC4xMjEy'+
			'IDcxLjY5NyAxNC4wMDU3IDcxLjI5NTUgMTQuMDA1N0M3MC44OTAyIDE0LjAwNTcgNzAuNTQ5MiAxNC4xMjEyIDcwLjI3MjcgMTQuMzUyM0M3MCAxNC41ODMzIDY5Ljc5MzYgMTQuODk3NyA2OS42NTM0IDE1LjI5NTVDNjkuNTE3IDE1LjY5MzIgNjkuNDQ4OSAxNi4xNDU4IDY5LjQ0ODkgMTYuNjUzNEM2OS40NDg5IDE3LjE2MSA2OS41MTcgMTcuNjEzNiA2OS42NTM0IDE4LjAxMTRDNjkuNzkzNiAxOC40MDkxIDcwIDE4LjcyMzUgNzAuMjcyNyAxOC45NTQ1QzcwLjU0OTIgMTkuMTgxOCA3MC44OTAyIDE5LjI5NTUgNzEuMjk1NSAxOS4yOTU1Wk03OC42NTYyIDIxTDc2LjI4MTIgMTIuMjcyN0g3OC'+
			'43MzAxTDgwLjA4MjQgMTguMTM2NEg4MC4xNjE5TDgxLjU3MSAxMi4yNzI3SDgzLjk3NDRMODUuNDA2MiAxOC4xMDIzSDg1LjQ4MDFMODYuODA5NyAxMi4yNzI3SDg5LjI1MjhMODYuODgzNSAyMUg4NC4zMjFMODIuODIxIDE1LjUxMTRIODIuNzEzMUw4MS4yMTMxIDIxSDc4LjY1NjJaIi8+Cjwvc3ZnPgo=';
		me._svg_114__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._svg_114__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjMwIiB2aWV3Qm94PSIwIDAgMTEwIDMwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMTAiPgogPHJlY3QgZmlsbD0iI0QzMzQzNCIgaGVpZ2h0PSIzMCIgcng9IjE1IiB3aWR0aD0iMTEwIi8+CiA8cGF0aCBmaWxsPSJ3aGl0ZSIgZD0iTTIyLjAxMTQgMjFWOS4zNjM2NEgyNi42NzA1QzI3LjUyNjUgOS4zNjM2NCAyOC4yNDA1IDkuNDkwNTMgMjguODEyNSA5Ljc0NDMyQzI5LjM4NDUgOS45OTgxMSAyOS44MTQ0IDEwLjM1MDQgMzAuMTAyMyAxMC44MDExQzMwLjM5MDIgMTEuMjQ4MSAzMC41MzQxIDExLjc2MzMgMzAuNT'+
			'M0MSAxMi4zNDY2QzMwLjUzNDEgMTIuODAxMSAzMC40NDMyIDEzLjIwMDggMzAuMjYxNCAxMy41NDU1QzMwLjA3OTUgMTMuODg2NCAyOS44Mjk1IDE0LjE2NjcgMjkuNTExNCAxNC4zODY0QzI5LjE5NyAxNC42MDIzIDI4LjgzNzEgMTQuNzU1NyAyOC40MzE4IDE0Ljg0NjZWMTQuOTYwMkMyOC44NzUgMTQuOTc5MiAyOS4yODk4IDE1LjEwNDIgMjkuNjc2MSAxNS4zMzUyQzMwLjA2NjMgMTUuNTY2MyAzMC4zODI2IDE1Ljg5MDIgMzAuNjI1IDE2LjMwNjhDMzAuODY3NCAxNi43MTk3IDMwLjk4ODYgMTcuMjEyMSAzMC45ODg2IDE3Ljc4NDFDMzAuOTg4NiAxOC40MDE1IDMwLjgzNTIgMTguOTUyNyAz'+
			'MC41Mjg0IDE5LjQzNzVDMzAuMjI1NCAxOS45MTg2IDI5Ljc3NjUgMjAuMjk5MiAyOS4xODE4IDIwLjU3OTVDMjguNTg3MSAyMC44NTk4IDI3Ljg1NDIgMjEgMjYuOTgzIDIxSDIyLjAxMTRaTTI0LjQ3MTYgMTguOTg4NkgyNi40NzczQzI3LjE2MjkgMTguOTg4NiAyNy42NjI5IDE4Ljg1OCAyNy45NzczIDE4LjU5NjZDMjguMjkxNyAxOC4zMzE0IDI4LjQ0ODkgMTcuOTc5MiAyOC40NDg5IDE3LjUzOThDMjguNDQ4OSAxNy4yMTc4IDI4LjM3MTIgMTYuOTMzNyAyOC4yMTU5IDE2LjY4NzVDMjguMDYwNiAxNi40NDEzIDI3LjgzOSAxNi4yNDgxIDI3LjU1MTEgMTYuMTA4QzI3LjI2NyAxNS45Njc4ID'+
			'I2LjkyOCAxNS44OTc3IDI2LjUzNDEgMTUuODk3N0gyNC40NzE2VjE4Ljk4ODZaTTI0LjQ3MTYgMTQuMjMzSDI2LjI5NTVDMjYuNjMyNiAxNC4yMzMgMjYuOTMxOCAxNC4xNzQyIDI3LjE5MzIgMTQuMDU2OEMyNy40NTgzIDEzLjkzNTYgMjcuNjY2NyAxMy43NjUyIDI3LjgxODIgMTMuNTQ1NUMyNy45NzM1IDEzLjMyNTggMjguMDUxMSAxMy4wNjI1IDI4LjA1MTEgMTIuNzU1N0MyOC4wNTExIDEyLjMzNTIgMjcuOTAxNSAxMS45OTYyIDI3LjYwMjMgMTEuNzM4NkMyNy4zMDY4IDExLjQ4MTEgMjYuODg2NCAxMS4zNTIzIDI2LjM0MDkgMTEuMzUyM0gyNC40NzE2VjE0LjIzM1pNMzguMTQwNiAxNy4y'+
			'ODQxVjEyLjI3MjdINDAuNTYxMVYyMUgzOC4yMzcyVjE5LjQxNDhIMzguMTQ2M0MzNy45NDkzIDE5LjkyNjEgMzcuNjIxNyAyMC4zMzcxIDM3LjE2MzQgMjAuNjQ3N0MzNi43MDg4IDIwLjk1ODMgMzYuMTUzOSAyMS4xMTM2IDM1LjQ5ODYgMjEuMTEzNkMzNC45MTUyIDIxLjExMzYgMzQuNDAyIDIwLjk4MTEgMzMuOTU4OCAyMC43MTU5QzMzLjUxNTYgMjAuNDUwOCAzMy4xNjkgMjAuMDczOSAzMi45MTkgMTkuNTg1MkMzMi42NzI4IDE5LjA5NjYgMzIuNTQ3OCAxOC41MTE0IDMyLjU0NCAxNy44Mjk1VjEyLjI3MjdIMzQuOTY0NVYxNy4zOTc3QzM0Ljk2ODMgMTcuOTEyOSAzNS4xMDY1IDE4LjMyMD'+
			'EgMzUuMzc5MyAxOC42MTkzQzM1LjY1MiAxOC45MTg2IDM2LjAxNzUgMTkuMDY4MiAzNi40NzU5IDE5LjA2ODJDMzYuNzY3NSAxOS4wNjgyIDM3LjA0MDIgMTkuMDAxOSAzNy4yOTQgMTguODY5M0MzNy41NDc4IDE4LjczMyAzNy43NTI0IDE4LjUzMjIgMzcuOTA3NyAxOC4yNjdDMzguMDY2OCAxOC4wMDE5IDM4LjE0NDQgMTcuNjc0MiAzOC4xNDA2IDE3LjI4NDFaTTQzLjk5MTUgMjQuMjcyN0M0My42ODQ3IDI0LjI3MjcgNDMuMzk2OCAyNC4yNDgxIDQzLjEyNzggMjQuMTk4OUM0Mi44NjI3IDI0LjE1MzQgNDIuNjQzIDI0LjA5NDcgNDIuNDY4OCAyNC4wMjI3TDQzLjAxNDIgMjIuMjE1OUM0My4y'+
			'OTgzIDIyLjMwMyA0My41NTQgMjIuMzUwNCA0My43ODEyIDIyLjM1OEM0NC4wMTIzIDIyLjM2NTUgNDQuMjExMiAyMi4zMTI1IDQ0LjM3NzggMjIuMTk4OUM0NC41NDgzIDIyLjA4NTIgNDQuNjg2NiAyMS44OTIgNDQuNzkyNiAyMS42MTkzTDQ0LjkzNDcgMjEuMjVMNDEuODA0IDEyLjI3MjdINDQuMzQ5NEw0Ni4xNTYyIDE4LjY4MThINDYuMjQ3Mkw0OC4wNzEgMTIuMjcyN0g1MC42MzM1TDQ3LjI0MTUgMjEuOTQzMkM0Ny4wNzg2IDIyLjQxMjkgNDYuODU3IDIyLjgyMiA0Ni41NzY3IDIzLjE3MDVDNDYuMzAwMiAyMy41MjI3IDQ1Ljk0OTggMjMuNzkzNiA0NS41MjU2IDIzLjk4M0M0NS4xMDEzID'+
			'I0LjE3NjEgNDQuNTkgMjQuMjcyNyA0My45OTE1IDI0LjI3MjdaTTY1LjM1MzcgOS4zNjM2NFYyMUg2My4yMjg3TDU4LjE2NjIgMTMuNjc2MUg1OC4wODFWMjFINTUuNjIwN1Y5LjM2MzY0SDU3Ljc3OThMNjIuODAyNiAxNi42ODE4SDYyLjkwNDhWOS4zNjM2NEg2NS4zNTM3Wk03MS4yODQxIDIxLjE3MDVDNzAuNDAxNSAyMS4xNzA1IDY5LjYzODMgMjAuOTgzIDY4Ljk5NDMgMjAuNjA4QzY4LjM1NDIgMjAuMjI5MiA2Ny44NTk4IDE5LjcwMjcgNjcuNTExNCAxOS4wMjg0QzY3LjE2MjkgMTguMzUwNCA2Ni45ODg2IDE3LjU2NDQgNjYuOTg4NiAxNi42NzA1QzY2Ljk4ODYgMTUuNzY4OSA2Ny4xNjI5'+
			'IDE0Ljk4MTEgNjcuNTExNCAxNC4zMDY4QzY3Ljg1OTggMTMuNjI4OCA2OC4zNTQyIDEzLjEwMjMgNjguOTk0MyAxMi43MjczQzY5LjYzODMgMTIuMzQ4NSA3MC40MDE1IDEyLjE1OTEgNzEuMjg0MSAxMi4xNTkxQzcyLjE2NjcgMTIuMTU5MSA3Mi45MjggMTIuMzQ4NSA3My41NjgyIDEyLjcyNzNDNzQuMjEyMSAxMy4xMDIzIDc0LjcwODMgMTMuNjI4OCA3NS4wNTY4IDE0LjMwNjhDNzUuNDA1MyAxNC45ODExIDc1LjU3OTUgMTUuNzY4OSA3NS41Nzk1IDE2LjY3MDVDNzUuNTc5NSAxNy41NjQ0IDc1LjQwNTMgMTguMzUwNCA3NS4wNTY4IDE5LjAyODRDNzQuNzA4MyAxOS43MDI3IDc0LjIxMjEgMj'+
			'AuMjI5MiA3My41NjgyIDIwLjYwOEM3Mi45MjggMjAuOTgzIDcyLjE2NjcgMjEuMTcwNSA3MS4yODQxIDIxLjE3MDVaTTcxLjI5NTUgMTkuMjk1NUM3MS42OTcgMTkuMjk1NSA3Mi4wMzIyIDE5LjE4MTggNzIuMzAxMSAxOC45NTQ1QzcyLjU3MDEgMTguNzIzNSA3Mi43NzI3IDE4LjQwOTEgNzIuOTA5MSAxOC4wMTE0QzczLjA0OTIgMTcuNjEzNiA3My4xMTkzIDE3LjE2MSA3My4xMTkzIDE2LjY1MzRDNzMuMTE5MyAxNi4xNDU4IDczLjA0OTIgMTUuNjkzMiA3Mi45MDkxIDE1LjI5NTVDNzIuNzcyNyAxNC44OTc3IDcyLjU3MDEgMTQuNTgzMyA3Mi4zMDExIDE0LjM1MjNDNzIuMDMyMiAxNC4xMjEy'+
			'IDcxLjY5NyAxNC4wMDU3IDcxLjI5NTUgMTQuMDA1N0M3MC44OTAyIDE0LjAwNTcgNzAuNTQ5MiAxNC4xMjEyIDcwLjI3MjcgMTQuMzUyM0M3MCAxNC41ODMzIDY5Ljc5MzYgMTQuODk3NyA2OS42NTM0IDE1LjI5NTVDNjkuNTE3IDE1LjY5MzIgNjkuNDQ4OSAxNi4xNDU4IDY5LjQ0ODkgMTYuNjUzNEM2OS40NDg5IDE3LjE2MSA2OS41MTcgMTcuNjEzNiA2OS42NTM0IDE4LjAxMTRDNjkuNzkzNiAxOC40MDkxIDcwIDE4LjcyMzUgNzAuMjcyNyAxOC45NTQ1QzcwLjU0OTIgMTkuMTgxOCA3MC44OTAyIDE5LjI5NTUgNzEuMjk1NSAxOS4yOTU1Wk03OC42NTYyIDIxTDc2LjI4MTIgMTIuMjcyN0g3OC'+
			'43MzAxTDgwLjA4MjQgMTguMTM2NEg4MC4xNjE5TDgxLjU3MSAxMi4yNzI3SDgzLjk3NDRMODUuNDA2MiAxOC4xMDIzSDg1LjQ4MDFMODYuODA5NyAxMi4yNzI3SDg5LjI1MjhMODYuODgzNSAyMUg4NC4zMjFMODIuODIxIDE1LjUxMTRIODIuNzEzMUw4MS4yMTMxIDIxSDc4LjY1NjJaIi8+Cjwvc3ZnPgo=';
		me._svg_114__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="Svg 11";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 23px;';
		hs+='position : absolute;';
		hs+='right : 5px;';
		hs+='top : 4px;';
		hs+='visibility : inherit;';
		hs+='width : 90px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_114.ggIsActive=function() {
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
		me._svg_114.onclick=function (e) {
			if (me._svg_114.isDragging()) return;
			player.openUrl("https:\/\/catalog.mann-filter.com\/EU\/eng\/catalog\/MANN-FILTER%20Katalog%20Europa\/Fuel%20Filter\/PL%20270%20x","_blank");
			var list=me.findElements("products_list",true);
			while(list.length>0) {
				var e=list.pop();
				e.style.transition='none';
				e.style.visibility='hidden';
				e.ggVisible=false;
			}
		}
		me._svg_114.onmouseover=function (e) {
			me._svg_114__img.style.visibility='hidden';
			me._svg_114__imgo.style.visibility='inherit';
			me.elementMouseOver['svg_114']=true;
		}
		me._svg_114.onmouseout=function (e) {
			me._svg_114__img.style.visibility='inherit';
			me._svg_114__imgo.style.visibility='hidden';
			me.elementMouseOver['svg_114']=false;
		}
		me._svg_114.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['svg_114']) {
				me._svg_114__img.style.visibility='hidden';
				me._svg_114__imgo.style.visibility='inherit';
				me.elementMouseOver['svg_114']=true;
			}
		}
		me._svg_114.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_40.appendChild(me._svg_114);
		el=me._svg_134=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._svg_134;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._svg_134__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjMwIiB2aWV3Qm94PSIwIDAgMTEwIDMwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMTAiPgogPHJlY3QgZmlsbD0iI0Y2OTIxRSIgaGVpZ2h0PSIzMCIgcng9IjE1IiB3aWR0aD0iMTEwIi8+CiA8cGF0aCBmaWxsPSJ3aGl0ZSIgZD0iTTM4LjM5NDkgOS4zNjM2NEw0MS4yMDc0IDE4LjIwNDVINDEuMzE1M0w0NC4xMzM1IDkuMzYzNjRINDYuODYwOEw0Mi44NDk0IDIxSDM5LjY3OUwzNS42NjE5IDkuMzYzNjRIMzguMzk0OVpNNDguMjE1OSAyMVYxMi4yNzI3SDUwLjYzNjRWMjFINDguMjE1OVpNNDkuNDMxOCAxMS4xND'+
			'c3QzQ5LjA3MiAxMS4xNDc3IDQ4Ljc2MzMgMTEuMDI4NCA0OC41MDU3IDEwLjc4OThDNDguMjUxOSAxMC41NDczIDQ4LjEyNSAxMC4yNTc2IDQ4LjEyNSA5LjkyMDQ1QzQ4LjEyNSA5LjU4NzEyIDQ4LjI1MTkgOS4zMDExNCA0OC41MDU3IDkuMDYyNUM0OC43NjMzIDguODIwMDggNDkuMDcyIDguNjk4ODYgNDkuNDMxOCA4LjY5ODg2QzQ5Ljc5MTcgOC42OTg4NiA1MC4wOTg1IDguODIwMDggNTAuMzUyMyA5LjA2MjVDNTAuNjA5OCA5LjMwMTE0IDUwLjczODYgOS41ODcxMiA1MC43Mzg2IDkuOTIwNDVDNTAuNzM4NiAxMC4yNTc2IDUwLjYwOTggMTAuNTQ3MyA1MC4zNTIzIDEwLjc4OThDNTAuMDk4'+
			'NSAxMS4wMjg0IDQ5Ljc5MTcgMTEuMTQ3NyA0OS40MzE4IDExLjE0NzdaTTU2LjU1MjYgMjEuMTcwNUM1NS42NTQ4IDIxLjE3MDUgNTQuODgyMSAyMC45ODg2IDU0LjIzNDQgMjAuNjI1QzUzLjU5MDQgMjAuMjU3NiA1My4wOTQyIDE5LjczODYgNTIuNzQ1NyAxOS4wNjgyQzUyLjM5NzMgMTguMzkzOSA1Mi4yMjMgMTcuNTk2NiA1Mi4yMjMgMTYuNjc2MUM1Mi4yMjMgMTUuNzc4NCA1Mi4zOTczIDE0Ljk5MDUgNTIuNzQ1NyAxNC4zMTI1QzUzLjA5NDIgMTMuNjM0NSA1My41ODQ4IDEzLjEwNjEgNTQuMjE3MyAxMi43MjczQzU0Ljg1MzcgMTIuMzQ4NSA1NS41OTk5IDEyLjE1OTEgNTYuNDU2IDEyLj'+
			'E1OTFDNTcuMDMxNyAxMi4xNTkxIDU3LjU2NzcgMTIuMjUxOSA1OC4wNjM5IDEyLjQzNzVDNTguNTYzOSAxMi42MTkzIDU4Ljk5OTUgMTIuODkzOSA1OS4zNzA3IDEzLjI2MTRDNTkuNzQ1NyAxMy42Mjg4IDYwLjAzNzQgMTQuMDkwOSA2MC4yNDU3IDE0LjY0NzdDNjAuNDU0MSAxNS4yMDA4IDYwLjU1ODIgMTUuODQ4NSA2MC41NTgyIDE2LjU5MDlWMTcuMjU1N0g1My4xODg5VjE1Ljc1NTdINTguMjc5OEM1OC4yNzk4IDE1LjQwNzIgNTguMjA0MSAxNS4wOTg1IDU4LjA1MjYgMTQuODI5NUM1Ny45MDEgMTQuNTYwNiA1Ny42OTA4IDE0LjM1MDQgNTcuNDIxOSAxNC4xOTg5QzU3LjE1NjcgMTQuMDQz'+
			'NiA1Ni44NDggMTMuOTY1OSA1Ni40OTU3IDEzLjk2NTlDNTYuMTI4MyAxMy45NjU5IDU1LjgwMjYgMTQuMDUxMSA1NS41MTg1IDE0LjIyMTZDNTUuMjM4MiAxNC4zODgzIDU1LjAxODUgMTQuNjEzNiA1NC44NTk0IDE0Ljg5NzdDNTQuNzAwMyAxNS4xNzggNTQuNjE4OCAxNS40OTA1IDU0LjYxNTEgMTUuODM1MlYxNy4yNjE0QzU0LjYxNTEgMTcuNjkzMiA1NC42OTQ2IDE4LjA2NjMgNTQuODUzNyAxOC4zODA3QzU1LjAxNjYgMTguNjk1MSA1NS4yNDU3IDE4LjkzNzUgNTUuNTQxMiAxOS4xMDhDNTUuODM2NiAxOS4yNzg0IDU2LjE4NyAxOS4zNjM2IDU2LjU5MjMgMTkuMzYzNkM1Ni44NjEzIDE5Lj'+
			'M2MzYgNTcuMTA3NSAxOS4zMjU4IDU3LjMzMSAxOS4yNUM1Ny41NTQ1IDE5LjE3NDIgNTcuNzQ1NyAxOS4wNjA2IDU3LjkwNDggMTguOTA5MUM1OC4wNjM5IDE4Ljc1NzYgNTguMTg1MSAxOC41NzIgNTguMjY4NSAxOC4zNTIzTDYwLjUwNzEgMTguNUM2MC4zOTM1IDE5LjAzNzkgNjAuMTYwNSAxOS41MDc2IDU5LjgwODIgMTkuOTA5MUM1OS40NTk4IDIwLjMwNjggNTkuMDA5IDIwLjYxNzQgNTguNDU2IDIwLjg0MDlDNTcuOTA2NyAyMS4wNjA2IDU3LjI3MjMgMjEuMTcwNSA1Ni41NTI2IDIxLjE3MDVaTTYzLjc5NjkgMjFMNjEuNDIxOSAxMi4yNzI3SDYzLjg3MDdMNjUuMjIzIDE4LjEzNjRINjUu'+
			'MzAyNkw2Ni43MTE2IDEyLjI3MjdINjkuMTE1MUw3MC41NDY5IDE4LjEwMjNINzAuNjIwN0w3MS45NTAzIDEyLjI3MjdINzQuMzkzNUw3Mi4wMjQxIDIxSDY5LjQ2MTZMNjcuOTYxNiAxNS41MTE0SDY3Ljg1MzdMNjYuMzUzNyAyMUg2My43OTY5WiIvPgo8L3N2Zz4K';
		me._svg_134__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._svg_134__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjMwIiB2aWV3Qm94PSIwIDAgMTEwIDMwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMTAiPgogPHJlY3QgZmlsbD0iI0FGNUUwMCIgaGVpZ2h0PSIzMCIgcng9IjE1IiB3aWR0aD0iMTEwIi8+CiA8cGF0aCBmaWxsPSJ3aGl0ZSIgZD0iTTM4LjM5NDkgOS4zNjM2NEw0MS4yMDc0IDE4LjIwNDVINDEuMzE1M0w0NC4xMzM1IDkuMzYzNjRINDYuODYwOEw0Mi44NDk0IDIxSDM5LjY3OUwzNS42NjE5IDkuMzYzNjRIMzguMzk0OVpNNDguMjE1OSAyMVYxMi4yNzI3SDUwLjYzNjRWMjFINDguMjE1OVpNNDkuNDMxOCAxMS4xND'+
			'c3QzQ5LjA3MiAxMS4xNDc3IDQ4Ljc2MzMgMTEuMDI4NCA0OC41MDU3IDEwLjc4OThDNDguMjUxOSAxMC41NDczIDQ4LjEyNSAxMC4yNTc2IDQ4LjEyNSA5LjkyMDQ1QzQ4LjEyNSA5LjU4NzEyIDQ4LjI1MTkgOS4zMDExNCA0OC41MDU3IDkuMDYyNUM0OC43NjMzIDguODIwMDggNDkuMDcyIDguNjk4ODYgNDkuNDMxOCA4LjY5ODg2QzQ5Ljc5MTcgOC42OTg4NiA1MC4wOTg1IDguODIwMDggNTAuMzUyMyA5LjA2MjVDNTAuNjA5OCA5LjMwMTE0IDUwLjczODYgOS41ODcxMiA1MC43Mzg2IDkuOTIwNDVDNTAuNzM4NiAxMC4yNTc2IDUwLjYwOTggMTAuNTQ3MyA1MC4zNTIzIDEwLjc4OThDNTAuMDk4'+
			'NSAxMS4wMjg0IDQ5Ljc5MTcgMTEuMTQ3NyA0OS40MzE4IDExLjE0NzdaTTU2LjU1MjYgMjEuMTcwNUM1NS42NTQ4IDIxLjE3MDUgNTQuODgyMSAyMC45ODg2IDU0LjIzNDQgMjAuNjI1QzUzLjU5MDQgMjAuMjU3NiA1My4wOTQyIDE5LjczODYgNTIuNzQ1NyAxOS4wNjgyQzUyLjM5NzMgMTguMzkzOSA1Mi4yMjMgMTcuNTk2NiA1Mi4yMjMgMTYuNjc2MUM1Mi4yMjMgMTUuNzc4NCA1Mi4zOTczIDE0Ljk5MDUgNTIuNzQ1NyAxNC4zMTI1QzUzLjA5NDIgMTMuNjM0NSA1My41ODQ4IDEzLjEwNjEgNTQuMjE3MyAxMi43MjczQzU0Ljg1MzcgMTIuMzQ4NSA1NS41OTk5IDEyLjE1OTEgNTYuNDU2IDEyLj'+
			'E1OTFDNTcuMDMxNyAxMi4xNTkxIDU3LjU2NzcgMTIuMjUxOSA1OC4wNjM5IDEyLjQzNzVDNTguNTYzOSAxMi42MTkzIDU4Ljk5OTUgMTIuODkzOSA1OS4zNzA3IDEzLjI2MTRDNTkuNzQ1NyAxMy42Mjg4IDYwLjAzNzQgMTQuMDkwOSA2MC4yNDU3IDE0LjY0NzdDNjAuNDU0MSAxNS4yMDA4IDYwLjU1ODIgMTUuODQ4NSA2MC41NTgyIDE2LjU5MDlWMTcuMjU1N0g1My4xODg5VjE1Ljc1NTdINTguMjc5OEM1OC4yNzk4IDE1LjQwNzIgNTguMjA0MSAxNS4wOTg1IDU4LjA1MjYgMTQuODI5NUM1Ny45MDEgMTQuNTYwNiA1Ny42OTA4IDE0LjM1MDQgNTcuNDIxOSAxNC4xOTg5QzU3LjE1NjcgMTQuMDQz'+
			'NiA1Ni44NDggMTMuOTY1OSA1Ni40OTU3IDEzLjk2NTlDNTYuMTI4MyAxMy45NjU5IDU1LjgwMjYgMTQuMDUxMSA1NS41MTg1IDE0LjIyMTZDNTUuMjM4MiAxNC4zODgzIDU1LjAxODUgMTQuNjEzNiA1NC44NTk0IDE0Ljg5NzdDNTQuNzAwMyAxNS4xNzggNTQuNjE4OCAxNS40OTA1IDU0LjYxNTEgMTUuODM1MlYxNy4yNjE0QzU0LjYxNTEgMTcuNjkzMiA1NC42OTQ2IDE4LjA2NjMgNTQuODUzNyAxOC4zODA3QzU1LjAxNjYgMTguNjk1MSA1NS4yNDU3IDE4LjkzNzUgNTUuNTQxMiAxOS4xMDhDNTUuODM2NiAxOS4yNzg0IDU2LjE4NyAxOS4zNjM2IDU2LjU5MjMgMTkuMzYzNkM1Ni44NjEzIDE5Lj'+
			'M2MzYgNTcuMTA3NSAxOS4zMjU4IDU3LjMzMSAxOS4yNUM1Ny41NTQ1IDE5LjE3NDIgNTcuNzQ1NyAxOS4wNjA2IDU3LjkwNDggMTguOTA5MUM1OC4wNjM5IDE4Ljc1NzYgNTguMTg1MSAxOC41NzIgNTguMjY4NSAxOC4zNTIzTDYwLjUwNzEgMTguNUM2MC4zOTM1IDE5LjAzNzkgNjAuMTYwNSAxOS41MDc2IDU5LjgwODIgMTkuOTA5MUM1OS40NTk4IDIwLjMwNjggNTkuMDA5IDIwLjYxNzQgNTguNDU2IDIwLjg0MDlDNTcuOTA2NyAyMS4wNjA2IDU3LjI3MjMgMjEuMTcwNSA1Ni41NTI2IDIxLjE3MDVaTTYzLjc5NjkgMjFMNjEuNDIxOSAxMi4yNzI3SDYzLjg3MDdMNjUuMjIzIDE4LjEzNjRINjUu'+
			'MzAyNkw2Ni43MTE2IDEyLjI3MjdINjkuMTE1MUw3MC41NDY5IDE4LjEwMjNINzAuNjIwN0w3MS45NTAzIDEyLjI3MjdINzQuMzkzNUw3Mi4wMjQxIDIxSDY5LjQ2MTZMNjcuOTYxNiAxNS41MTE0SDY3Ljg1MzdMNjYuMzUzNyAyMUg2My43OTY5WiIvPgo8L3N2Zz4K';
		me._svg_134__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="Svg 13";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 23px;';
		hs+='position : absolute;';
		hs+='right : 100px;';
		hs+='top : 4px;';
		hs+='visibility : inherit;';
		hs+='width : 90px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_134.ggIsActive=function() {
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
		me._svg_134.onclick=function (e) {
			if (me._svg_134.isDragging()) return;
			player.moveTo("-87.34","4.51","20.74","18.0000");
			var list=me.findElements("products_list",true);
			while(list.length>0) {
				var e=list.pop();
				e.style.transition='none';
				e.style.visibility='hidden';
				e.ggVisible=false;
			}
		}
		me._svg_134.onmouseover=function (e) {
			me._svg_134__img.style.visibility='hidden';
			me._svg_134__imgo.style.visibility='inherit';
			me.elementMouseOver['svg_134']=true;
		}
		me._svg_134.onmouseout=function (e) {
			me._svg_134__img.style.visibility='inherit';
			me._svg_134__imgo.style.visibility='hidden';
			me.elementMouseOver['svg_134']=false;
		}
		me._svg_134.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['svg_134']) {
				me._svg_134__img.style.visibility='hidden';
				me._svg_134__imgo.style.visibility='inherit';
				me.elementMouseOver['svg_134']=true;
			}
		}
		me._svg_134.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_40.appendChild(me._svg_134);
		me._product_list_pl2700.appendChild(me._rectangle_40);
		me._scrollarea_1__content.appendChild(me._product_list_pl2700);
		el=me._product_list_h12w05=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._product_list_h12w05;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="product_list_h12w05";
		el.ggDx=356;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle product_list";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #eeeeee;';
		hs+='border-radius : 5px;';
		hs+='cursor : default;';
		hs+='height : 300px;';
		hs+='left : calc(50% - ((200px + 2px) / 2) + 356px);';
		hs+='position : absolute;';
		hs+='top : 650px;';
		hs+='visibility : inherit;';
		hs+='width : 200px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 0%';
		me._product_list_h12w05.ggIsActive=function() {
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
		me._product_list_h12w05.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_14=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._image_14;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._image_14__img=document.createElement('img');
		els.className='ggskin ggskin_image_14';
		hs=basePath + 'images/image_14.png';
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
		el.ggId="Image 14";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 180px;';
		hs+='left : calc(50% - ((180px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 180px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_14.ggIsActive=function() {
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
		me._image_14.ggUpdatePosition=function (useTransition) {
		}
		me._product_list_h12w05.appendChild(me._image_14);
		el=me._text_6_4=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._text_6_4;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._text_6_4__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 6_4";
		el.ggDy=59;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(102,102,102,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 59px);';
		hs+='visibility : inherit;';
		hs+='width : 95%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+="text-overflow: ellipsis;";
		els.setAttribute('style',hs);
		me._text_6_4.ggUpdateText=function() {
			var params = [];
			var hs = player._("Factory price, allowing you to have sufficient profits", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_6_4.ggUpdateText();
		el.appendChild(els);
		me._text_6_4.ggIsActive=function() {
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
		me._text_6_4.ggUpdatePosition=function (useTransition) {
		}
		me._product_list_h12w05.appendChild(me._text_6_4);
		el=me._text_6_1_4=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._text_6_1_4;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._text_6_1_4__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 6_1_4";
		el.ggDy=82;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(0,0,0,1);';
		hs+='cursor : default;';
		hs+='height : 21px;';
		hs+='left : 7px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((21px + 0px) / 2) + 82px);';
		hs+='visibility : inherit;';
		hs+='width : 95%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='bottom: 0px;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+="text-overflow: ellipsis;";
		els.setAttribute('style',hs);
		me._text_6_1_4.ggUpdateText=function() {
			var params = [];
			var hs = player._("<div class=\"ggmarkdown\"><p><strong>$7-$12<\/strong> \/pieces<\/p>\n<div>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_6_1_4.ggUpdateText();
		el.appendChild(els);
		me._text_6_1_4.ggIsActive=function() {
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
		me._text_6_1_4.ggUpdatePosition=function (useTransition) {
		}
		me._product_list_h12w05.appendChild(me._text_6_1_4);
		el=me._text_6_1_1_1_3=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._text_6_1_1_1_3;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._text_6_1_1_1_3__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 6_1_1_1_3";
		el.ggDy=105;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(0,0,0,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 7px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 105px);';
		hs+='visibility : inherit;';
		hs+='width : 40%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='bottom: 0px;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+="text-overflow: ellipsis;";
		els.setAttribute('style',hs);
		me._text_6_1_1_1_3.ggUpdateText=function() {
			var params = [];
			var hs = player._("<div class=\"ggmarkdown\"><p>70 pieces<\/p>\n<div>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_6_1_1_1_3.ggUpdateText();
		el.appendChild(els);
		me._text_6_1_1_1_3.ggIsActive=function() {
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
		me._text_6_1_1_1_3.ggUpdatePosition=function (useTransition) {
		}
		me._product_list_h12w05.appendChild(me._text_6_1_1_1_3);
		el=me._text_6_1_1_4=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._text_6_1_1_4;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._text_6_1_1_4__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 6_1_1_4";
		el.ggDy=105;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(168,168,168,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 85px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 105px);';
		hs+='visibility : inherit;';
		hs+='width : 35%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='bottom: 0px;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+="text-overflow: ellipsis;";
		els.setAttribute('style',hs);
		me._text_6_1_1_4.ggUpdateText=function() {
			var params = [];
			var hs = player._("<div class=\"ggmarkdown\"><p>(MOQ)<\/p>\n<div>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_6_1_1_4.ggUpdateText();
		el.appendChild(els);
		me._text_6_1_1_4.ggIsActive=function() {
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
		me._text_6_1_1_4.ggUpdatePosition=function (useTransition) {
		}
		me._product_list_h12w05.appendChild(me._text_6_1_1_4);
		el=me._rectangle_4_3=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._rectangle_4_3;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="Rectangle 4_3";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 5px;';
		hs+='cursor : default;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((95% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 95%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_4_3.ggIsActive=function() {
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
		me._rectangle_4_3.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_113=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._svg_113;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._svg_113__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjMwIiB2aWV3Qm94PSIwIDAgMTEwIDMwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMTAiPgogPHJlY3QgZmlsbD0iIzE5Mjg0NSIgaGVpZ2h0PSIzMCIgcng9IjE1IiB3aWR0aD0iMTEwIi8+CiA8cGF0aCBmaWxsPSJ3aGl0ZSIgZD0iTTIyLjAxMTQgMjFWOS4zNjM2NEgyNi42NzA1QzI3LjUyNjUgOS4zNjM2NCAyOC4yNDA1IDkuNDkwNTMgMjguODEyNSA5Ljc0NDMyQzI5LjM4NDUgOS45OTgxMSAyOS44MTQ0IDEwLjM1MDQgMzAuMTAyMyAxMC44MDExQzMwLjM5MDIgMTEuMjQ4MSAzMC41MzQxIDExLjc2MzMgMzAuNT'+
			'M0MSAxMi4zNDY2QzMwLjUzNDEgMTIuODAxMSAzMC40NDMyIDEzLjIwMDggMzAuMjYxNCAxMy41NDU1QzMwLjA3OTUgMTMuODg2NCAyOS44Mjk1IDE0LjE2NjcgMjkuNTExNCAxNC4zODY0QzI5LjE5NyAxNC42MDIzIDI4LjgzNzEgMTQuNzU1NyAyOC40MzE4IDE0Ljg0NjZWMTQuOTYwMkMyOC44NzUgMTQuOTc5MiAyOS4yODk4IDE1LjEwNDIgMjkuNjc2MSAxNS4zMzUyQzMwLjA2NjMgMTUuNTY2MyAzMC4zODI2IDE1Ljg5MDIgMzAuNjI1IDE2LjMwNjhDMzAuODY3NCAxNi43MTk3IDMwLjk4ODYgMTcuMjEyMSAzMC45ODg2IDE3Ljc4NDFDMzAuOTg4NiAxOC40MDE1IDMwLjgzNTIgMTguOTUyNyAz'+
			'MC41Mjg0IDE5LjQzNzVDMzAuMjI1NCAxOS45MTg2IDI5Ljc3NjUgMjAuMjk5MiAyOS4xODE4IDIwLjU3OTVDMjguNTg3MSAyMC44NTk4IDI3Ljg1NDIgMjEgMjYuOTgzIDIxSDIyLjAxMTRaTTI0LjQ3MTYgMTguOTg4NkgyNi40NzczQzI3LjE2MjkgMTguOTg4NiAyNy42NjI5IDE4Ljg1OCAyNy45NzczIDE4LjU5NjZDMjguMjkxNyAxOC4zMzE0IDI4LjQ0ODkgMTcuOTc5MiAyOC40NDg5IDE3LjUzOThDMjguNDQ4OSAxNy4yMTc4IDI4LjM3MTIgMTYuOTMzNyAyOC4yMTU5IDE2LjY4NzVDMjguMDYwNiAxNi40NDEzIDI3LjgzOSAxNi4yNDgxIDI3LjU1MTEgMTYuMTA4QzI3LjI2NyAxNS45Njc4ID'+
			'I2LjkyOCAxNS44OTc3IDI2LjUzNDEgMTUuODk3N0gyNC40NzE2VjE4Ljk4ODZaTTI0LjQ3MTYgMTQuMjMzSDI2LjI5NTVDMjYuNjMyNiAxNC4yMzMgMjYuOTMxOCAxNC4xNzQyIDI3LjE5MzIgMTQuMDU2OEMyNy40NTgzIDEzLjkzNTYgMjcuNjY2NyAxMy43NjUyIDI3LjgxODIgMTMuNTQ1NUMyNy45NzM1IDEzLjMyNTggMjguMDUxMSAxMy4wNjI1IDI4LjA1MTEgMTIuNzU1N0MyOC4wNTExIDEyLjMzNTIgMjcuOTAxNSAxMS45OTYyIDI3LjYwMjMgMTEuNzM4NkMyNy4zMDY4IDExLjQ4MTEgMjYuODg2NCAxMS4zNTIzIDI2LjM0MDkgMTEuMzUyM0gyNC40NzE2VjE0LjIzM1pNMzguMTQwNiAxNy4y'+
			'ODQxVjEyLjI3MjdINDAuNTYxMVYyMUgzOC4yMzcyVjE5LjQxNDhIMzguMTQ2M0MzNy45NDkzIDE5LjkyNjEgMzcuNjIxNyAyMC4zMzcxIDM3LjE2MzQgMjAuNjQ3N0MzNi43MDg4IDIwLjk1ODMgMzYuMTUzOSAyMS4xMTM2IDM1LjQ5ODYgMjEuMTEzNkMzNC45MTUyIDIxLjExMzYgMzQuNDAyIDIwLjk4MTEgMzMuOTU4OCAyMC43MTU5QzMzLjUxNTYgMjAuNDUwOCAzMy4xNjkgMjAuMDczOSAzMi45MTkgMTkuNTg1MkMzMi42NzI4IDE5LjA5NjYgMzIuNTQ3OCAxOC41MTE0IDMyLjU0NCAxNy44Mjk1VjEyLjI3MjdIMzQuOTY0NVYxNy4zOTc3QzM0Ljk2ODMgMTcuOTEyOSAzNS4xMDY1IDE4LjMyMD'+
			'EgMzUuMzc5MyAxOC42MTkzQzM1LjY1MiAxOC45MTg2IDM2LjAxNzUgMTkuMDY4MiAzNi40NzU5IDE5LjA2ODJDMzYuNzY3NSAxOS4wNjgyIDM3LjA0MDIgMTkuMDAxOSAzNy4yOTQgMTguODY5M0MzNy41NDc4IDE4LjczMyAzNy43NTI0IDE4LjUzMjIgMzcuOTA3NyAxOC4yNjdDMzguMDY2OCAxOC4wMDE5IDM4LjE0NDQgMTcuNjc0MiAzOC4xNDA2IDE3LjI4NDFaTTQzLjk5MTUgMjQuMjcyN0M0My42ODQ3IDI0LjI3MjcgNDMuMzk2OCAyNC4yNDgxIDQzLjEyNzggMjQuMTk4OUM0Mi44NjI3IDI0LjE1MzQgNDIuNjQzIDI0LjA5NDcgNDIuNDY4OCAyNC4wMjI3TDQzLjAxNDIgMjIuMjE1OUM0My4y'+
			'OTgzIDIyLjMwMyA0My41NTQgMjIuMzUwNCA0My43ODEyIDIyLjM1OEM0NC4wMTIzIDIyLjM2NTUgNDQuMjExMiAyMi4zMTI1IDQ0LjM3NzggMjIuMTk4OUM0NC41NDgzIDIyLjA4NTIgNDQuNjg2NiAyMS44OTIgNDQuNzkyNiAyMS42MTkzTDQ0LjkzNDcgMjEuMjVMNDEuODA0IDEyLjI3MjdINDQuMzQ5NEw0Ni4xNTYyIDE4LjY4MThINDYuMjQ3Mkw0OC4wNzEgMTIuMjcyN0g1MC42MzM1TDQ3LjI0MTUgMjEuOTQzMkM0Ny4wNzg2IDIyLjQxMjkgNDYuODU3IDIyLjgyMiA0Ni41NzY3IDIzLjE3MDVDNDYuMzAwMiAyMy41MjI3IDQ1Ljk0OTggMjMuNzkzNiA0NS41MjU2IDIzLjk4M0M0NS4xMDEzID'+
			'I0LjE3NjEgNDQuNTkgMjQuMjcyNyA0My45OTE1IDI0LjI3MjdaTTY1LjM1MzcgOS4zNjM2NFYyMUg2My4yMjg3TDU4LjE2NjIgMTMuNjc2MUg1OC4wODFWMjFINTUuNjIwN1Y5LjM2MzY0SDU3Ljc3OThMNjIuODAyNiAxNi42ODE4SDYyLjkwNDhWOS4zNjM2NEg2NS4zNTM3Wk03MS4yODQxIDIxLjE3MDVDNzAuNDAxNSAyMS4xNzA1IDY5LjYzODMgMjAuOTgzIDY4Ljk5NDMgMjAuNjA4QzY4LjM1NDIgMjAuMjI5MiA2Ny44NTk4IDE5LjcwMjcgNjcuNTExNCAxOS4wMjg0QzY3LjE2MjkgMTguMzUwNCA2Ni45ODg2IDE3LjU2NDQgNjYuOTg4NiAxNi42NzA1QzY2Ljk4ODYgMTUuNzY4OSA2Ny4xNjI5'+
			'IDE0Ljk4MTEgNjcuNTExNCAxNC4zMDY4QzY3Ljg1OTggMTMuNjI4OCA2OC4zNTQyIDEzLjEwMjMgNjguOTk0MyAxMi43MjczQzY5LjYzODMgMTIuMzQ4NSA3MC40MDE1IDEyLjE1OTEgNzEuMjg0MSAxMi4xNTkxQzcyLjE2NjcgMTIuMTU5MSA3Mi45MjggMTIuMzQ4NSA3My41NjgyIDEyLjcyNzNDNzQuMjEyMSAxMy4xMDIzIDc0LjcwODMgMTMuNjI4OCA3NS4wNTY4IDE0LjMwNjhDNzUuNDA1MyAxNC45ODExIDc1LjU3OTUgMTUuNzY4OSA3NS41Nzk1IDE2LjY3MDVDNzUuNTc5NSAxNy41NjQ0IDc1LjQwNTMgMTguMzUwNCA3NS4wNTY4IDE5LjAyODRDNzQuNzA4MyAxOS43MDI3IDc0LjIxMjEgMj'+
			'AuMjI5MiA3My41NjgyIDIwLjYwOEM3Mi45MjggMjAuOTgzIDcyLjE2NjcgMjEuMTcwNSA3MS4yODQxIDIxLjE3MDVaTTcxLjI5NTUgMTkuMjk1NUM3MS42OTcgMTkuMjk1NSA3Mi4wMzIyIDE5LjE4MTggNzIuMzAxMSAxOC45NTQ1QzcyLjU3MDEgMTguNzIzNSA3Mi43NzI3IDE4LjQwOTEgNzIuOTA5MSAxOC4wMTE0QzczLjA0OTIgMTcuNjEzNiA3My4xMTkzIDE3LjE2MSA3My4xMTkzIDE2LjY1MzRDNzMuMTE5MyAxNi4xNDU4IDczLjA0OTIgMTUuNjkzMiA3Mi45MDkxIDE1LjI5NTVDNzIuNzcyNyAxNC44OTc3IDcyLjU3MDEgMTQuNTgzMyA3Mi4zMDExIDE0LjM1MjNDNzIuMDMyMiAxNC4xMjEy'+
			'IDcxLjY5NyAxNC4wMDU3IDcxLjI5NTUgMTQuMDA1N0M3MC44OTAyIDE0LjAwNTcgNzAuNTQ5MiAxNC4xMjEyIDcwLjI3MjcgMTQuMzUyM0M3MCAxNC41ODMzIDY5Ljc5MzYgMTQuODk3NyA2OS42NTM0IDE1LjI5NTVDNjkuNTE3IDE1LjY5MzIgNjkuNDQ4OSAxNi4xNDU4IDY5LjQ0ODkgMTYuNjUzNEM2OS40NDg5IDE3LjE2MSA2OS41MTcgMTcuNjEzNiA2OS42NTM0IDE4LjAxMTRDNjkuNzkzNiAxOC40MDkxIDcwIDE4LjcyMzUgNzAuMjcyNyAxOC45NTQ1QzcwLjU0OTIgMTkuMTgxOCA3MC44OTAyIDE5LjI5NTUgNzEuMjk1NSAxOS4yOTU1Wk03OC42NTYyIDIxTDc2LjI4MTIgMTIuMjcyN0g3OC'+
			'43MzAxTDgwLjA4MjQgMTguMTM2NEg4MC4xNjE5TDgxLjU3MSAxMi4yNzI3SDgzLjk3NDRMODUuNDA2MiAxOC4xMDIzSDg1LjQ4MDFMODYuODA5NyAxMi4yNzI3SDg5LjI1MjhMODYuODgzNSAyMUg4NC4zMjFMODIuODIxIDE1LjUxMTRIODIuNzEzMUw4MS4yMTMxIDIxSDc4LjY1NjJaIi8+Cjwvc3ZnPgo=';
		me._svg_113__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._svg_113__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjMwIiB2aWV3Qm94PSIwIDAgMTEwIDMwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMTAiPgogPHJlY3QgZmlsbD0iI0QzMzQzNCIgaGVpZ2h0PSIzMCIgcng9IjE1IiB3aWR0aD0iMTEwIi8+CiA8cGF0aCBmaWxsPSJ3aGl0ZSIgZD0iTTIyLjAxMTQgMjFWOS4zNjM2NEgyNi42NzA1QzI3LjUyNjUgOS4zNjM2NCAyOC4yNDA1IDkuNDkwNTMgMjguODEyNSA5Ljc0NDMyQzI5LjM4NDUgOS45OTgxMSAyOS44MTQ0IDEwLjM1MDQgMzAuMTAyMyAxMC44MDExQzMwLjM5MDIgMTEuMjQ4MSAzMC41MzQxIDExLjc2MzMgMzAuNT'+
			'M0MSAxMi4zNDY2QzMwLjUzNDEgMTIuODAxMSAzMC40NDMyIDEzLjIwMDggMzAuMjYxNCAxMy41NDU1QzMwLjA3OTUgMTMuODg2NCAyOS44Mjk1IDE0LjE2NjcgMjkuNTExNCAxNC4zODY0QzI5LjE5NyAxNC42MDIzIDI4LjgzNzEgMTQuNzU1NyAyOC40MzE4IDE0Ljg0NjZWMTQuOTYwMkMyOC44NzUgMTQuOTc5MiAyOS4yODk4IDE1LjEwNDIgMjkuNjc2MSAxNS4zMzUyQzMwLjA2NjMgMTUuNTY2MyAzMC4zODI2IDE1Ljg5MDIgMzAuNjI1IDE2LjMwNjhDMzAuODY3NCAxNi43MTk3IDMwLjk4ODYgMTcuMjEyMSAzMC45ODg2IDE3Ljc4NDFDMzAuOTg4NiAxOC40MDE1IDMwLjgzNTIgMTguOTUyNyAz'+
			'MC41Mjg0IDE5LjQzNzVDMzAuMjI1NCAxOS45MTg2IDI5Ljc3NjUgMjAuMjk5MiAyOS4xODE4IDIwLjU3OTVDMjguNTg3MSAyMC44NTk4IDI3Ljg1NDIgMjEgMjYuOTgzIDIxSDIyLjAxMTRaTTI0LjQ3MTYgMTguOTg4NkgyNi40NzczQzI3LjE2MjkgMTguOTg4NiAyNy42NjI5IDE4Ljg1OCAyNy45NzczIDE4LjU5NjZDMjguMjkxNyAxOC4zMzE0IDI4LjQ0ODkgMTcuOTc5MiAyOC40NDg5IDE3LjUzOThDMjguNDQ4OSAxNy4yMTc4IDI4LjM3MTIgMTYuOTMzNyAyOC4yMTU5IDE2LjY4NzVDMjguMDYwNiAxNi40NDEzIDI3LjgzOSAxNi4yNDgxIDI3LjU1MTEgMTYuMTA4QzI3LjI2NyAxNS45Njc4ID'+
			'I2LjkyOCAxNS44OTc3IDI2LjUzNDEgMTUuODk3N0gyNC40NzE2VjE4Ljk4ODZaTTI0LjQ3MTYgMTQuMjMzSDI2LjI5NTVDMjYuNjMyNiAxNC4yMzMgMjYuOTMxOCAxNC4xNzQyIDI3LjE5MzIgMTQuMDU2OEMyNy40NTgzIDEzLjkzNTYgMjcuNjY2NyAxMy43NjUyIDI3LjgxODIgMTMuNTQ1NUMyNy45NzM1IDEzLjMyNTggMjguMDUxMSAxMy4wNjI1IDI4LjA1MTEgMTIuNzU1N0MyOC4wNTExIDEyLjMzNTIgMjcuOTAxNSAxMS45OTYyIDI3LjYwMjMgMTEuNzM4NkMyNy4zMDY4IDExLjQ4MTEgMjYuODg2NCAxMS4zNTIzIDI2LjM0MDkgMTEuMzUyM0gyNC40NzE2VjE0LjIzM1pNMzguMTQwNiAxNy4y'+
			'ODQxVjEyLjI3MjdINDAuNTYxMVYyMUgzOC4yMzcyVjE5LjQxNDhIMzguMTQ2M0MzNy45NDkzIDE5LjkyNjEgMzcuNjIxNyAyMC4zMzcxIDM3LjE2MzQgMjAuNjQ3N0MzNi43MDg4IDIwLjk1ODMgMzYuMTUzOSAyMS4xMTM2IDM1LjQ5ODYgMjEuMTEzNkMzNC45MTUyIDIxLjExMzYgMzQuNDAyIDIwLjk4MTEgMzMuOTU4OCAyMC43MTU5QzMzLjUxNTYgMjAuNDUwOCAzMy4xNjkgMjAuMDczOSAzMi45MTkgMTkuNTg1MkMzMi42NzI4IDE5LjA5NjYgMzIuNTQ3OCAxOC41MTE0IDMyLjU0NCAxNy44Mjk1VjEyLjI3MjdIMzQuOTY0NVYxNy4zOTc3QzM0Ljk2ODMgMTcuOTEyOSAzNS4xMDY1IDE4LjMyMD'+
			'EgMzUuMzc5MyAxOC42MTkzQzM1LjY1MiAxOC45MTg2IDM2LjAxNzUgMTkuMDY4MiAzNi40NzU5IDE5LjA2ODJDMzYuNzY3NSAxOS4wNjgyIDM3LjA0MDIgMTkuMDAxOSAzNy4yOTQgMTguODY5M0MzNy41NDc4IDE4LjczMyAzNy43NTI0IDE4LjUzMjIgMzcuOTA3NyAxOC4yNjdDMzguMDY2OCAxOC4wMDE5IDM4LjE0NDQgMTcuNjc0MiAzOC4xNDA2IDE3LjI4NDFaTTQzLjk5MTUgMjQuMjcyN0M0My42ODQ3IDI0LjI3MjcgNDMuMzk2OCAyNC4yNDgxIDQzLjEyNzggMjQuMTk4OUM0Mi44NjI3IDI0LjE1MzQgNDIuNjQzIDI0LjA5NDcgNDIuNDY4OCAyNC4wMjI3TDQzLjAxNDIgMjIuMjE1OUM0My4y'+
			'OTgzIDIyLjMwMyA0My41NTQgMjIuMzUwNCA0My43ODEyIDIyLjM1OEM0NC4wMTIzIDIyLjM2NTUgNDQuMjExMiAyMi4zMTI1IDQ0LjM3NzggMjIuMTk4OUM0NC41NDgzIDIyLjA4NTIgNDQuNjg2NiAyMS44OTIgNDQuNzkyNiAyMS42MTkzTDQ0LjkzNDcgMjEuMjVMNDEuODA0IDEyLjI3MjdINDQuMzQ5NEw0Ni4xNTYyIDE4LjY4MThINDYuMjQ3Mkw0OC4wNzEgMTIuMjcyN0g1MC42MzM1TDQ3LjI0MTUgMjEuOTQzMkM0Ny4wNzg2IDIyLjQxMjkgNDYuODU3IDIyLjgyMiA0Ni41NzY3IDIzLjE3MDVDNDYuMzAwMiAyMy41MjI3IDQ1Ljk0OTggMjMuNzkzNiA0NS41MjU2IDIzLjk4M0M0NS4xMDEzID'+
			'I0LjE3NjEgNDQuNTkgMjQuMjcyNyA0My45OTE1IDI0LjI3MjdaTTY1LjM1MzcgOS4zNjM2NFYyMUg2My4yMjg3TDU4LjE2NjIgMTMuNjc2MUg1OC4wODFWMjFINTUuNjIwN1Y5LjM2MzY0SDU3Ljc3OThMNjIuODAyNiAxNi42ODE4SDYyLjkwNDhWOS4zNjM2NEg2NS4zNTM3Wk03MS4yODQxIDIxLjE3MDVDNzAuNDAxNSAyMS4xNzA1IDY5LjYzODMgMjAuOTgzIDY4Ljk5NDMgMjAuNjA4QzY4LjM1NDIgMjAuMjI5MiA2Ny44NTk4IDE5LjcwMjcgNjcuNTExNCAxOS4wMjg0QzY3LjE2MjkgMTguMzUwNCA2Ni45ODg2IDE3LjU2NDQgNjYuOTg4NiAxNi42NzA1QzY2Ljk4ODYgMTUuNzY4OSA2Ny4xNjI5'+
			'IDE0Ljk4MTEgNjcuNTExNCAxNC4zMDY4QzY3Ljg1OTggMTMuNjI4OCA2OC4zNTQyIDEzLjEwMjMgNjguOTk0MyAxMi43MjczQzY5LjYzODMgMTIuMzQ4NSA3MC40MDE1IDEyLjE1OTEgNzEuMjg0MSAxMi4xNTkxQzcyLjE2NjcgMTIuMTU5MSA3Mi45MjggMTIuMzQ4NSA3My41NjgyIDEyLjcyNzNDNzQuMjEyMSAxMy4xMDIzIDc0LjcwODMgMTMuNjI4OCA3NS4wNTY4IDE0LjMwNjhDNzUuNDA1MyAxNC45ODExIDc1LjU3OTUgMTUuNzY4OSA3NS41Nzk1IDE2LjY3MDVDNzUuNTc5NSAxNy41NjQ0IDc1LjQwNTMgMTguMzUwNCA3NS4wNTY4IDE5LjAyODRDNzQuNzA4MyAxOS43MDI3IDc0LjIxMjEgMj'+
			'AuMjI5MiA3My41NjgyIDIwLjYwOEM3Mi45MjggMjAuOTgzIDcyLjE2NjcgMjEuMTcwNSA3MS4yODQxIDIxLjE3MDVaTTcxLjI5NTUgMTkuMjk1NUM3MS42OTcgMTkuMjk1NSA3Mi4wMzIyIDE5LjE4MTggNzIuMzAxMSAxOC45NTQ1QzcyLjU3MDEgMTguNzIzNSA3Mi43NzI3IDE4LjQwOTEgNzIuOTA5MSAxOC4wMTE0QzczLjA0OTIgMTcuNjEzNiA3My4xMTkzIDE3LjE2MSA3My4xMTkzIDE2LjY1MzRDNzMuMTE5MyAxNi4xNDU4IDczLjA0OTIgMTUuNjkzMiA3Mi45MDkxIDE1LjI5NTVDNzIuNzcyNyAxNC44OTc3IDcyLjU3MDEgMTQuNTgzMyA3Mi4zMDExIDE0LjM1MjNDNzIuMDMyMiAxNC4xMjEy'+
			'IDcxLjY5NyAxNC4wMDU3IDcxLjI5NTUgMTQuMDA1N0M3MC44OTAyIDE0LjAwNTcgNzAuNTQ5MiAxNC4xMjEyIDcwLjI3MjcgMTQuMzUyM0M3MCAxNC41ODMzIDY5Ljc5MzYgMTQuODk3NyA2OS42NTM0IDE1LjI5NTVDNjkuNTE3IDE1LjY5MzIgNjkuNDQ4OSAxNi4xNDU4IDY5LjQ0ODkgMTYuNjUzNEM2OS40NDg5IDE3LjE2MSA2OS41MTcgMTcuNjEzNiA2OS42NTM0IDE4LjAxMTRDNjkuNzkzNiAxOC40MDkxIDcwIDE4LjcyMzUgNzAuMjcyNyAxOC45NTQ1QzcwLjU0OTIgMTkuMTgxOCA3MC44OTAyIDE5LjI5NTUgNzEuMjk1NSAxOS4yOTU1Wk03OC42NTYyIDIxTDc2LjI4MTIgMTIuMjcyN0g3OC'+
			'43MzAxTDgwLjA4MjQgMTguMTM2NEg4MC4xNjE5TDgxLjU3MSAxMi4yNzI3SDgzLjk3NDRMODUuNDA2MiAxOC4xMDIzSDg1LjQ4MDFMODYuODA5NyAxMi4yNzI3SDg5LjI1MjhMODYuODgzNSAyMUg4NC4zMjFMODIuODIxIDE1LjUxMTRIODIuNzEzMUw4MS4yMTMxIDIxSDc4LjY1NjJaIi8+Cjwvc3ZnPgo=';
		me._svg_113__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="Svg 11";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 23px;';
		hs+='position : absolute;';
		hs+='right : 5px;';
		hs+='top : calc(50% - ((23px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 90px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_113.ggIsActive=function() {
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
		me._svg_113.onclick=function (e) {
			if (me._svg_113.isDragging()) return;
			player.openUrl("https:\/\/www.javiddo.com\/product\/yag-filtri-2105101200500","_blank");
			var list=me.findElements("products_list",true);
			while(list.length>0) {
				var e=list.pop();
				e.style.transition='none';
				e.style.visibility='hidden';
				e.ggVisible=false;
			}
		}
		me._svg_113.onmouseover=function (e) {
			me._svg_113__img.style.visibility='hidden';
			me._svg_113__imgo.style.visibility='inherit';
			me.elementMouseOver['svg_113']=true;
		}
		me._svg_113.onmouseout=function (e) {
			me._svg_113__img.style.visibility='inherit';
			me._svg_113__imgo.style.visibility='hidden';
			me.elementMouseOver['svg_113']=false;
		}
		me._svg_113.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['svg_113']) {
				me._svg_113__img.style.visibility='hidden';
				me._svg_113__imgo.style.visibility='inherit';
				me.elementMouseOver['svg_113']=true;
			}
		}
		me._svg_113.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_4_3.appendChild(me._svg_113);
		el=me._svg_133=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._svg_133;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._svg_133__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjMwIiB2aWV3Qm94PSIwIDAgMTEwIDMwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMTAiPgogPHJlY3QgZmlsbD0iI0Y2OTIxRSIgaGVpZ2h0PSIzMCIgcng9IjE1IiB3aWR0aD0iMTEwIi8+CiA8cGF0aCBmaWxsPSJ3aGl0ZSIgZD0iTTM4LjM5NDkgOS4zNjM2NEw0MS4yMDc0IDE4LjIwNDVINDEuMzE1M0w0NC4xMzM1IDkuMzYzNjRINDYuODYwOEw0Mi44NDk0IDIxSDM5LjY3OUwzNS42NjE5IDkuMzYzNjRIMzguMzk0OVpNNDguMjE1OSAyMVYxMi4yNzI3SDUwLjYzNjRWMjFINDguMjE1OVpNNDkuNDMxOCAxMS4xND'+
			'c3QzQ5LjA3MiAxMS4xNDc3IDQ4Ljc2MzMgMTEuMDI4NCA0OC41MDU3IDEwLjc4OThDNDguMjUxOSAxMC41NDczIDQ4LjEyNSAxMC4yNTc2IDQ4LjEyNSA5LjkyMDQ1QzQ4LjEyNSA5LjU4NzEyIDQ4LjI1MTkgOS4zMDExNCA0OC41MDU3IDkuMDYyNUM0OC43NjMzIDguODIwMDggNDkuMDcyIDguNjk4ODYgNDkuNDMxOCA4LjY5ODg2QzQ5Ljc5MTcgOC42OTg4NiA1MC4wOTg1IDguODIwMDggNTAuMzUyMyA5LjA2MjVDNTAuNjA5OCA5LjMwMTE0IDUwLjczODYgOS41ODcxMiA1MC43Mzg2IDkuOTIwNDVDNTAuNzM4NiAxMC4yNTc2IDUwLjYwOTggMTAuNTQ3MyA1MC4zNTIzIDEwLjc4OThDNTAuMDk4'+
			'NSAxMS4wMjg0IDQ5Ljc5MTcgMTEuMTQ3NyA0OS40MzE4IDExLjE0NzdaTTU2LjU1MjYgMjEuMTcwNUM1NS42NTQ4IDIxLjE3MDUgNTQuODgyMSAyMC45ODg2IDU0LjIzNDQgMjAuNjI1QzUzLjU5MDQgMjAuMjU3NiA1My4wOTQyIDE5LjczODYgNTIuNzQ1NyAxOS4wNjgyQzUyLjM5NzMgMTguMzkzOSA1Mi4yMjMgMTcuNTk2NiA1Mi4yMjMgMTYuNjc2MUM1Mi4yMjMgMTUuNzc4NCA1Mi4zOTczIDE0Ljk5MDUgNTIuNzQ1NyAxNC4zMTI1QzUzLjA5NDIgMTMuNjM0NSA1My41ODQ4IDEzLjEwNjEgNTQuMjE3MyAxMi43MjczQzU0Ljg1MzcgMTIuMzQ4NSA1NS41OTk5IDEyLjE1OTEgNTYuNDU2IDEyLj'+
			'E1OTFDNTcuMDMxNyAxMi4xNTkxIDU3LjU2NzcgMTIuMjUxOSA1OC4wNjM5IDEyLjQzNzVDNTguNTYzOSAxMi42MTkzIDU4Ljk5OTUgMTIuODkzOSA1OS4zNzA3IDEzLjI2MTRDNTkuNzQ1NyAxMy42Mjg4IDYwLjAzNzQgMTQuMDkwOSA2MC4yNDU3IDE0LjY0NzdDNjAuNDU0MSAxNS4yMDA4IDYwLjU1ODIgMTUuODQ4NSA2MC41NTgyIDE2LjU5MDlWMTcuMjU1N0g1My4xODg5VjE1Ljc1NTdINTguMjc5OEM1OC4yNzk4IDE1LjQwNzIgNTguMjA0MSAxNS4wOTg1IDU4LjA1MjYgMTQuODI5NUM1Ny45MDEgMTQuNTYwNiA1Ny42OTA4IDE0LjM1MDQgNTcuNDIxOSAxNC4xOTg5QzU3LjE1NjcgMTQuMDQz'+
			'NiA1Ni44NDggMTMuOTY1OSA1Ni40OTU3IDEzLjk2NTlDNTYuMTI4MyAxMy45NjU5IDU1LjgwMjYgMTQuMDUxMSA1NS41MTg1IDE0LjIyMTZDNTUuMjM4MiAxNC4zODgzIDU1LjAxODUgMTQuNjEzNiA1NC44NTk0IDE0Ljg5NzdDNTQuNzAwMyAxNS4xNzggNTQuNjE4OCAxNS40OTA1IDU0LjYxNTEgMTUuODM1MlYxNy4yNjE0QzU0LjYxNTEgMTcuNjkzMiA1NC42OTQ2IDE4LjA2NjMgNTQuODUzNyAxOC4zODA3QzU1LjAxNjYgMTguNjk1MSA1NS4yNDU3IDE4LjkzNzUgNTUuNTQxMiAxOS4xMDhDNTUuODM2NiAxOS4yNzg0IDU2LjE4NyAxOS4zNjM2IDU2LjU5MjMgMTkuMzYzNkM1Ni44NjEzIDE5Lj'+
			'M2MzYgNTcuMTA3NSAxOS4zMjU4IDU3LjMzMSAxOS4yNUM1Ny41NTQ1IDE5LjE3NDIgNTcuNzQ1NyAxOS4wNjA2IDU3LjkwNDggMTguOTA5MUM1OC4wNjM5IDE4Ljc1NzYgNTguMTg1MSAxOC41NzIgNTguMjY4NSAxOC4zNTIzTDYwLjUwNzEgMTguNUM2MC4zOTM1IDE5LjAzNzkgNjAuMTYwNSAxOS41MDc2IDU5LjgwODIgMTkuOTA5MUM1OS40NTk4IDIwLjMwNjggNTkuMDA5IDIwLjYxNzQgNTguNDU2IDIwLjg0MDlDNTcuOTA2NyAyMS4wNjA2IDU3LjI3MjMgMjEuMTcwNSA1Ni41NTI2IDIxLjE3MDVaTTYzLjc5NjkgMjFMNjEuNDIxOSAxMi4yNzI3SDYzLjg3MDdMNjUuMjIzIDE4LjEzNjRINjUu'+
			'MzAyNkw2Ni43MTE2IDEyLjI3MjdINjkuMTE1MUw3MC41NDY5IDE4LjEwMjNINzAuNjIwN0w3MS45NTAzIDEyLjI3MjdINzQuMzkzNUw3Mi4wMjQxIDIxSDY5LjQ2MTZMNjcuOTYxNiAxNS41MTE0SDY3Ljg1MzdMNjYuMzUzNyAyMUg2My43OTY5WiIvPgo8L3N2Zz4K';
		me._svg_133__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._svg_133__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjMwIiB2aWV3Qm94PSIwIDAgMTEwIDMwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMTAiPgogPHJlY3QgZmlsbD0iI0FGNUUwMCIgaGVpZ2h0PSIzMCIgcng9IjE1IiB3aWR0aD0iMTEwIi8+CiA8cGF0aCBmaWxsPSJ3aGl0ZSIgZD0iTTM4LjM5NDkgOS4zNjM2NEw0MS4yMDc0IDE4LjIwNDVINDEuMzE1M0w0NC4xMzM1IDkuMzYzNjRINDYuODYwOEw0Mi44NDk0IDIxSDM5LjY3OUwzNS42NjE5IDkuMzYzNjRIMzguMzk0OVpNNDguMjE1OSAyMVYxMi4yNzI3SDUwLjYzNjRWMjFINDguMjE1OVpNNDkuNDMxOCAxMS4xND'+
			'c3QzQ5LjA3MiAxMS4xNDc3IDQ4Ljc2MzMgMTEuMDI4NCA0OC41MDU3IDEwLjc4OThDNDguMjUxOSAxMC41NDczIDQ4LjEyNSAxMC4yNTc2IDQ4LjEyNSA5LjkyMDQ1QzQ4LjEyNSA5LjU4NzEyIDQ4LjI1MTkgOS4zMDExNCA0OC41MDU3IDkuMDYyNUM0OC43NjMzIDguODIwMDggNDkuMDcyIDguNjk4ODYgNDkuNDMxOCA4LjY5ODg2QzQ5Ljc5MTcgOC42OTg4NiA1MC4wOTg1IDguODIwMDggNTAuMzUyMyA5LjA2MjVDNTAuNjA5OCA5LjMwMTE0IDUwLjczODYgOS41ODcxMiA1MC43Mzg2IDkuOTIwNDVDNTAuNzM4NiAxMC4yNTc2IDUwLjYwOTggMTAuNTQ3MyA1MC4zNTIzIDEwLjc4OThDNTAuMDk4'+
			'NSAxMS4wMjg0IDQ5Ljc5MTcgMTEuMTQ3NyA0OS40MzE4IDExLjE0NzdaTTU2LjU1MjYgMjEuMTcwNUM1NS42NTQ4IDIxLjE3MDUgNTQuODgyMSAyMC45ODg2IDU0LjIzNDQgMjAuNjI1QzUzLjU5MDQgMjAuMjU3NiA1My4wOTQyIDE5LjczODYgNTIuNzQ1NyAxOS4wNjgyQzUyLjM5NzMgMTguMzkzOSA1Mi4yMjMgMTcuNTk2NiA1Mi4yMjMgMTYuNjc2MUM1Mi4yMjMgMTUuNzc4NCA1Mi4zOTczIDE0Ljk5MDUgNTIuNzQ1NyAxNC4zMTI1QzUzLjA5NDIgMTMuNjM0NSA1My41ODQ4IDEzLjEwNjEgNTQuMjE3MyAxMi43MjczQzU0Ljg1MzcgMTIuMzQ4NSA1NS41OTk5IDEyLjE1OTEgNTYuNDU2IDEyLj'+
			'E1OTFDNTcuMDMxNyAxMi4xNTkxIDU3LjU2NzcgMTIuMjUxOSA1OC4wNjM5IDEyLjQzNzVDNTguNTYzOSAxMi42MTkzIDU4Ljk5OTUgMTIuODkzOSA1OS4zNzA3IDEzLjI2MTRDNTkuNzQ1NyAxMy42Mjg4IDYwLjAzNzQgMTQuMDkwOSA2MC4yNDU3IDE0LjY0NzdDNjAuNDU0MSAxNS4yMDA4IDYwLjU1ODIgMTUuODQ4NSA2MC41NTgyIDE2LjU5MDlWMTcuMjU1N0g1My4xODg5VjE1Ljc1NTdINTguMjc5OEM1OC4yNzk4IDE1LjQwNzIgNTguMjA0MSAxNS4wOTg1IDU4LjA1MjYgMTQuODI5NUM1Ny45MDEgMTQuNTYwNiA1Ny42OTA4IDE0LjM1MDQgNTcuNDIxOSAxNC4xOTg5QzU3LjE1NjcgMTQuMDQz'+
			'NiA1Ni44NDggMTMuOTY1OSA1Ni40OTU3IDEzLjk2NTlDNTYuMTI4MyAxMy45NjU5IDU1LjgwMjYgMTQuMDUxMSA1NS41MTg1IDE0LjIyMTZDNTUuMjM4MiAxNC4zODgzIDU1LjAxODUgMTQuNjEzNiA1NC44NTk0IDE0Ljg5NzdDNTQuNzAwMyAxNS4xNzggNTQuNjE4OCAxNS40OTA1IDU0LjYxNTEgMTUuODM1MlYxNy4yNjE0QzU0LjYxNTEgMTcuNjkzMiA1NC42OTQ2IDE4LjA2NjMgNTQuODUzNyAxOC4zODA3QzU1LjAxNjYgMTguNjk1MSA1NS4yNDU3IDE4LjkzNzUgNTUuNTQxMiAxOS4xMDhDNTUuODM2NiAxOS4yNzg0IDU2LjE4NyAxOS4zNjM2IDU2LjU5MjMgMTkuMzYzNkM1Ni44NjEzIDE5Lj'+
			'M2MzYgNTcuMTA3NSAxOS4zMjU4IDU3LjMzMSAxOS4yNUM1Ny41NTQ1IDE5LjE3NDIgNTcuNzQ1NyAxOS4wNjA2IDU3LjkwNDggMTguOTA5MUM1OC4wNjM5IDE4Ljc1NzYgNTguMTg1MSAxOC41NzIgNTguMjY4NSAxOC4zNTIzTDYwLjUwNzEgMTguNUM2MC4zOTM1IDE5LjAzNzkgNjAuMTYwNSAxOS41MDc2IDU5LjgwODIgMTkuOTA5MUM1OS40NTk4IDIwLjMwNjggNTkuMDA5IDIwLjYxNzQgNTguNDU2IDIwLjg0MDlDNTcuOTA2NyAyMS4wNjA2IDU3LjI3MjMgMjEuMTcwNSA1Ni41NTI2IDIxLjE3MDVaTTYzLjc5NjkgMjFMNjEuNDIxOSAxMi4yNzI3SDYzLjg3MDdMNjUuMjIzIDE4LjEzNjRINjUu'+
			'MzAyNkw2Ni43MTE2IDEyLjI3MjdINjkuMTE1MUw3MC41NDY5IDE4LjEwMjNINzAuNjIwN0w3MS45NTAzIDEyLjI3MjdINzQuMzkzNUw3Mi4wMjQxIDIxSDY5LjQ2MTZMNjcuOTYxNiAxNS41MTE0SDY3Ljg1MzdMNjYuMzUzNyAyMUg2My43OTY5WiIvPgo8L3N2Zz4K';
		me._svg_133__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="Svg 13";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 23px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((23px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 90px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_133.ggIsActive=function() {
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
		me._svg_133.onclick=function (e) {
			if (me._svg_133.isDragging()) return;
			player.moveTo("-101.52","-6.17","23.1","18.0000");
			var list=me.findElements("products_list",true);
			while(list.length>0) {
				var e=list.pop();
				e.style.transition='none';
				e.style.visibility='hidden';
				e.ggVisible=false;
			}
		}
		me._svg_133.onmouseover=function (e) {
			me._svg_133__img.style.visibility='hidden';
			me._svg_133__imgo.style.visibility='inherit';
			me.elementMouseOver['svg_133']=true;
		}
		me._svg_133.onmouseout=function (e) {
			me._svg_133__img.style.visibility='inherit';
			me._svg_133__imgo.style.visibility='hidden';
			me.elementMouseOver['svg_133']=false;
		}
		me._svg_133.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['svg_133']) {
				me._svg_133__img.style.visibility='hidden';
				me._svg_133__imgo.style.visibility='inherit';
				me.elementMouseOver['svg_133']=true;
			}
		}
		me._svg_133.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_4_3.appendChild(me._svg_133);
		me._product_list_h12w05.appendChild(me._rectangle_4_3);
		me._scrollarea_1__content.appendChild(me._product_list_h12w05);
		el=me._product_list_1041800109=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._product_list_1041800109;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="product_list_1041800109";
		el.ggDx=115;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle product_list";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #eeeeee;';
		hs+='border-radius : 5px;';
		hs+='cursor : default;';
		hs+='height : 300px;';
		hs+='left : calc(50% - ((200px + 2px) / 2) + 115px);';
		hs+='position : absolute;';
		hs+='top : 650px;';
		hs+='visibility : inherit;';
		hs+='width : 200px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 0%';
		me._product_list_1041800109.ggIsActive=function() {
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
		me._product_list_1041800109.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_15=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._image_15;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._image_15__img=document.createElement('img');
		els.className='ggskin ggskin_image_15';
		hs=basePath + 'images/image_15.png';
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
		el.ggId="Image 15";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 180px;';
		hs+='left : calc(50% - ((180px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 180px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_15.ggIsActive=function() {
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
		me._image_15.ggUpdatePosition=function (useTransition) {
		}
		me._product_list_1041800109.appendChild(me._image_15);
		el=me._text_6_3=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._text_6_3;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._text_6_3__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 6_3";
		el.ggDy=59;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(102,102,102,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 59px);';
		hs+='visibility : inherit;';
		hs+='width : 95%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+="text-overflow: ellipsis;";
		els.setAttribute('style',hs);
		me._text_6_3.ggUpdateText=function() {
			var params = [];
			var hs = player._("One of the most important components of your vehicle is its oil filter. Early\nengines didn\u2019t have the tight tolerances and fragile technologies as they do\ntoday such as variable valve timing controlled by electronically controlled oil\npressure. Instead, they were less complex, didn\u2019t use oil filters, and ran on\nthe poorest grade oil imaginable. Today there are various types of oil filters\nused and the truth is that they are not all created equal.", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_6_3.ggUpdateText();
		el.appendChild(els);
		me._text_6_3.ggIsActive=function() {
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
		me._text_6_3.ggUpdatePosition=function (useTransition) {
		}
		me._product_list_1041800109.appendChild(me._text_6_3);
		el=me._text_6_1_3=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._text_6_1_3;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._text_6_1_3__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 6_1_3";
		el.ggDy=82;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(0,0,0,1);';
		hs+='cursor : default;';
		hs+='height : 21px;';
		hs+='left : 7px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((21px + 0px) / 2) + 82px);';
		hs+='visibility : inherit;';
		hs+='width : 95%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='bottom: 0px;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+="text-overflow: ellipsis;";
		els.setAttribute('style',hs);
		me._text_6_1_3.ggUpdateText=function() {
			var params = [];
			var hs = player._("<div class=\"ggmarkdown\"><p><strong>$6-$11<\/strong> \/pieces<\/p>\n<div>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_6_1_3.ggUpdateText();
		el.appendChild(els);
		me._text_6_1_3.ggIsActive=function() {
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
		me._text_6_1_3.ggUpdatePosition=function (useTransition) {
		}
		me._product_list_1041800109.appendChild(me._text_6_1_3);
		el=me._text_6_1_1_1_2=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._text_6_1_1_1_2;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._text_6_1_1_1_2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 6_1_1_1_2";
		el.ggDy=105;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(0,0,0,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 7px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 105px);';
		hs+='visibility : inherit;';
		hs+='width : 40%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='bottom: 0px;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+="text-overflow: ellipsis;";
		els.setAttribute('style',hs);
		me._text_6_1_1_1_2.ggUpdateText=function() {
			var params = [];
			var hs = player._("<div class=\"ggmarkdown\"><p>113 pieces<\/p>\n<div>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_6_1_1_1_2.ggUpdateText();
		el.appendChild(els);
		me._text_6_1_1_1_2.ggIsActive=function() {
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
		me._text_6_1_1_1_2.ggUpdatePosition=function (useTransition) {
		}
		me._product_list_1041800109.appendChild(me._text_6_1_1_1_2);
		el=me._text_6_1_1_3=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._text_6_1_1_3;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._text_6_1_1_3__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 6_1_1_3";
		el.ggDy=105;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(168,168,168,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 85px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 105px);';
		hs+='visibility : inherit;';
		hs+='width : 35%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='bottom: 0px;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+="text-overflow: ellipsis;";
		els.setAttribute('style',hs);
		me._text_6_1_1_3.ggUpdateText=function() {
			var params = [];
			var hs = player._("<div class=\"ggmarkdown\"><p>(MOQ)<\/p>\n<div>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_6_1_1_3.ggUpdateText();
		el.appendChild(els);
		me._text_6_1_1_3.ggIsActive=function() {
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
		me._text_6_1_1_3.ggUpdatePosition=function (useTransition) {
		}
		me._product_list_1041800109.appendChild(me._text_6_1_1_3);
		el=me._rectangle_4_2=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._rectangle_4_2;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="Rectangle 4_2";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 5px;';
		hs+='cursor : default;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((95% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 95%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_4_2.ggIsActive=function() {
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
		me._rectangle_4_2.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_112=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._svg_112;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._svg_112__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjMwIiB2aWV3Qm94PSIwIDAgMTEwIDMwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMTAiPgogPHJlY3QgZmlsbD0iIzE5Mjg0NSIgaGVpZ2h0PSIzMCIgcng9IjE1IiB3aWR0aD0iMTEwIi8+CiA8cGF0aCBmaWxsPSJ3aGl0ZSIgZD0iTTIyLjAxMTQgMjFWOS4zNjM2NEgyNi42NzA1QzI3LjUyNjUgOS4zNjM2NCAyOC4yNDA1IDkuNDkwNTMgMjguODEyNSA5Ljc0NDMyQzI5LjM4NDUgOS45OTgxMSAyOS44MTQ0IDEwLjM1MDQgMzAuMTAyMyAxMC44MDExQzMwLjM5MDIgMTEuMjQ4MSAzMC41MzQxIDExLjc2MzMgMzAuNT'+
			'M0MSAxMi4zNDY2QzMwLjUzNDEgMTIuODAxMSAzMC40NDMyIDEzLjIwMDggMzAuMjYxNCAxMy41NDU1QzMwLjA3OTUgMTMuODg2NCAyOS44Mjk1IDE0LjE2NjcgMjkuNTExNCAxNC4zODY0QzI5LjE5NyAxNC42MDIzIDI4LjgzNzEgMTQuNzU1NyAyOC40MzE4IDE0Ljg0NjZWMTQuOTYwMkMyOC44NzUgMTQuOTc5MiAyOS4yODk4IDE1LjEwNDIgMjkuNjc2MSAxNS4zMzUyQzMwLjA2NjMgMTUuNTY2MyAzMC4zODI2IDE1Ljg5MDIgMzAuNjI1IDE2LjMwNjhDMzAuODY3NCAxNi43MTk3IDMwLjk4ODYgMTcuMjEyMSAzMC45ODg2IDE3Ljc4NDFDMzAuOTg4NiAxOC40MDE1IDMwLjgzNTIgMTguOTUyNyAz'+
			'MC41Mjg0IDE5LjQzNzVDMzAuMjI1NCAxOS45MTg2IDI5Ljc3NjUgMjAuMjk5MiAyOS4xODE4IDIwLjU3OTVDMjguNTg3MSAyMC44NTk4IDI3Ljg1NDIgMjEgMjYuOTgzIDIxSDIyLjAxMTRaTTI0LjQ3MTYgMTguOTg4NkgyNi40NzczQzI3LjE2MjkgMTguOTg4NiAyNy42NjI5IDE4Ljg1OCAyNy45NzczIDE4LjU5NjZDMjguMjkxNyAxOC4zMzE0IDI4LjQ0ODkgMTcuOTc5MiAyOC40NDg5IDE3LjUzOThDMjguNDQ4OSAxNy4yMTc4IDI4LjM3MTIgMTYuOTMzNyAyOC4yMTU5IDE2LjY4NzVDMjguMDYwNiAxNi40NDEzIDI3LjgzOSAxNi4yNDgxIDI3LjU1MTEgMTYuMTA4QzI3LjI2NyAxNS45Njc4ID'+
			'I2LjkyOCAxNS44OTc3IDI2LjUzNDEgMTUuODk3N0gyNC40NzE2VjE4Ljk4ODZaTTI0LjQ3MTYgMTQuMjMzSDI2LjI5NTVDMjYuNjMyNiAxNC4yMzMgMjYuOTMxOCAxNC4xNzQyIDI3LjE5MzIgMTQuMDU2OEMyNy40NTgzIDEzLjkzNTYgMjcuNjY2NyAxMy43NjUyIDI3LjgxODIgMTMuNTQ1NUMyNy45NzM1IDEzLjMyNTggMjguMDUxMSAxMy4wNjI1IDI4LjA1MTEgMTIuNzU1N0MyOC4wNTExIDEyLjMzNTIgMjcuOTAxNSAxMS45OTYyIDI3LjYwMjMgMTEuNzM4NkMyNy4zMDY4IDExLjQ4MTEgMjYuODg2NCAxMS4zNTIzIDI2LjM0MDkgMTEuMzUyM0gyNC40NzE2VjE0LjIzM1pNMzguMTQwNiAxNy4y'+
			'ODQxVjEyLjI3MjdINDAuNTYxMVYyMUgzOC4yMzcyVjE5LjQxNDhIMzguMTQ2M0MzNy45NDkzIDE5LjkyNjEgMzcuNjIxNyAyMC4zMzcxIDM3LjE2MzQgMjAuNjQ3N0MzNi43MDg4IDIwLjk1ODMgMzYuMTUzOSAyMS4xMTM2IDM1LjQ5ODYgMjEuMTEzNkMzNC45MTUyIDIxLjExMzYgMzQuNDAyIDIwLjk4MTEgMzMuOTU4OCAyMC43MTU5QzMzLjUxNTYgMjAuNDUwOCAzMy4xNjkgMjAuMDczOSAzMi45MTkgMTkuNTg1MkMzMi42NzI4IDE5LjA5NjYgMzIuNTQ3OCAxOC41MTE0IDMyLjU0NCAxNy44Mjk1VjEyLjI3MjdIMzQuOTY0NVYxNy4zOTc3QzM0Ljk2ODMgMTcuOTEyOSAzNS4xMDY1IDE4LjMyMD'+
			'EgMzUuMzc5MyAxOC42MTkzQzM1LjY1MiAxOC45MTg2IDM2LjAxNzUgMTkuMDY4MiAzNi40NzU5IDE5LjA2ODJDMzYuNzY3NSAxOS4wNjgyIDM3LjA0MDIgMTkuMDAxOSAzNy4yOTQgMTguODY5M0MzNy41NDc4IDE4LjczMyAzNy43NTI0IDE4LjUzMjIgMzcuOTA3NyAxOC4yNjdDMzguMDY2OCAxOC4wMDE5IDM4LjE0NDQgMTcuNjc0MiAzOC4xNDA2IDE3LjI4NDFaTTQzLjk5MTUgMjQuMjcyN0M0My42ODQ3IDI0LjI3MjcgNDMuMzk2OCAyNC4yNDgxIDQzLjEyNzggMjQuMTk4OUM0Mi44NjI3IDI0LjE1MzQgNDIuNjQzIDI0LjA5NDcgNDIuNDY4OCAyNC4wMjI3TDQzLjAxNDIgMjIuMjE1OUM0My4y'+
			'OTgzIDIyLjMwMyA0My41NTQgMjIuMzUwNCA0My43ODEyIDIyLjM1OEM0NC4wMTIzIDIyLjM2NTUgNDQuMjExMiAyMi4zMTI1IDQ0LjM3NzggMjIuMTk4OUM0NC41NDgzIDIyLjA4NTIgNDQuNjg2NiAyMS44OTIgNDQuNzkyNiAyMS42MTkzTDQ0LjkzNDcgMjEuMjVMNDEuODA0IDEyLjI3MjdINDQuMzQ5NEw0Ni4xNTYyIDE4LjY4MThINDYuMjQ3Mkw0OC4wNzEgMTIuMjcyN0g1MC42MzM1TDQ3LjI0MTUgMjEuOTQzMkM0Ny4wNzg2IDIyLjQxMjkgNDYuODU3IDIyLjgyMiA0Ni41NzY3IDIzLjE3MDVDNDYuMzAwMiAyMy41MjI3IDQ1Ljk0OTggMjMuNzkzNiA0NS41MjU2IDIzLjk4M0M0NS4xMDEzID'+
			'I0LjE3NjEgNDQuNTkgMjQuMjcyNyA0My45OTE1IDI0LjI3MjdaTTY1LjM1MzcgOS4zNjM2NFYyMUg2My4yMjg3TDU4LjE2NjIgMTMuNjc2MUg1OC4wODFWMjFINTUuNjIwN1Y5LjM2MzY0SDU3Ljc3OThMNjIuODAyNiAxNi42ODE4SDYyLjkwNDhWOS4zNjM2NEg2NS4zNTM3Wk03MS4yODQxIDIxLjE3MDVDNzAuNDAxNSAyMS4xNzA1IDY5LjYzODMgMjAuOTgzIDY4Ljk5NDMgMjAuNjA4QzY4LjM1NDIgMjAuMjI5MiA2Ny44NTk4IDE5LjcwMjcgNjcuNTExNCAxOS4wMjg0QzY3LjE2MjkgMTguMzUwNCA2Ni45ODg2IDE3LjU2NDQgNjYuOTg4NiAxNi42NzA1QzY2Ljk4ODYgMTUuNzY4OSA2Ny4xNjI5'+
			'IDE0Ljk4MTEgNjcuNTExNCAxNC4zMDY4QzY3Ljg1OTggMTMuNjI4OCA2OC4zNTQyIDEzLjEwMjMgNjguOTk0MyAxMi43MjczQzY5LjYzODMgMTIuMzQ4NSA3MC40MDE1IDEyLjE1OTEgNzEuMjg0MSAxMi4xNTkxQzcyLjE2NjcgMTIuMTU5MSA3Mi45MjggMTIuMzQ4NSA3My41NjgyIDEyLjcyNzNDNzQuMjEyMSAxMy4xMDIzIDc0LjcwODMgMTMuNjI4OCA3NS4wNTY4IDE0LjMwNjhDNzUuNDA1MyAxNC45ODExIDc1LjU3OTUgMTUuNzY4OSA3NS41Nzk1IDE2LjY3MDVDNzUuNTc5NSAxNy41NjQ0IDc1LjQwNTMgMTguMzUwNCA3NS4wNTY4IDE5LjAyODRDNzQuNzA4MyAxOS43MDI3IDc0LjIxMjEgMj'+
			'AuMjI5MiA3My41NjgyIDIwLjYwOEM3Mi45MjggMjAuOTgzIDcyLjE2NjcgMjEuMTcwNSA3MS4yODQxIDIxLjE3MDVaTTcxLjI5NTUgMTkuMjk1NUM3MS42OTcgMTkuMjk1NSA3Mi4wMzIyIDE5LjE4MTggNzIuMzAxMSAxOC45NTQ1QzcyLjU3MDEgMTguNzIzNSA3Mi43NzI3IDE4LjQwOTEgNzIuOTA5MSAxOC4wMTE0QzczLjA0OTIgMTcuNjEzNiA3My4xMTkzIDE3LjE2MSA3My4xMTkzIDE2LjY1MzRDNzMuMTE5MyAxNi4xNDU4IDczLjA0OTIgMTUuNjkzMiA3Mi45MDkxIDE1LjI5NTVDNzIuNzcyNyAxNC44OTc3IDcyLjU3MDEgMTQuNTgzMyA3Mi4zMDExIDE0LjM1MjNDNzIuMDMyMiAxNC4xMjEy'+
			'IDcxLjY5NyAxNC4wMDU3IDcxLjI5NTUgMTQuMDA1N0M3MC44OTAyIDE0LjAwNTcgNzAuNTQ5MiAxNC4xMjEyIDcwLjI3MjcgMTQuMzUyM0M3MCAxNC41ODMzIDY5Ljc5MzYgMTQuODk3NyA2OS42NTM0IDE1LjI5NTVDNjkuNTE3IDE1LjY5MzIgNjkuNDQ4OSAxNi4xNDU4IDY5LjQ0ODkgMTYuNjUzNEM2OS40NDg5IDE3LjE2MSA2OS41MTcgMTcuNjEzNiA2OS42NTM0IDE4LjAxMTRDNjkuNzkzNiAxOC40MDkxIDcwIDE4LjcyMzUgNzAuMjcyNyAxOC45NTQ1QzcwLjU0OTIgMTkuMTgxOCA3MC44OTAyIDE5LjI5NTUgNzEuMjk1NSAxOS4yOTU1Wk03OC42NTYyIDIxTDc2LjI4MTIgMTIuMjcyN0g3OC'+
			'43MzAxTDgwLjA4MjQgMTguMTM2NEg4MC4xNjE5TDgxLjU3MSAxMi4yNzI3SDgzLjk3NDRMODUuNDA2MiAxOC4xMDIzSDg1LjQ4MDFMODYuODA5NyAxMi4yNzI3SDg5LjI1MjhMODYuODgzNSAyMUg4NC4zMjFMODIuODIxIDE1LjUxMTRIODIuNzEzMUw4MS4yMTMxIDIxSDc4LjY1NjJaIi8+Cjwvc3ZnPgo=';
		me._svg_112__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._svg_112__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjMwIiB2aWV3Qm94PSIwIDAgMTEwIDMwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMTAiPgogPHJlY3QgZmlsbD0iI0QzMzQzNCIgaGVpZ2h0PSIzMCIgcng9IjE1IiB3aWR0aD0iMTEwIi8+CiA8cGF0aCBmaWxsPSJ3aGl0ZSIgZD0iTTIyLjAxMTQgMjFWOS4zNjM2NEgyNi42NzA1QzI3LjUyNjUgOS4zNjM2NCAyOC4yNDA1IDkuNDkwNTMgMjguODEyNSA5Ljc0NDMyQzI5LjM4NDUgOS45OTgxMSAyOS44MTQ0IDEwLjM1MDQgMzAuMTAyMyAxMC44MDExQzMwLjM5MDIgMTEuMjQ4MSAzMC41MzQxIDExLjc2MzMgMzAuNT'+
			'M0MSAxMi4zNDY2QzMwLjUzNDEgMTIuODAxMSAzMC40NDMyIDEzLjIwMDggMzAuMjYxNCAxMy41NDU1QzMwLjA3OTUgMTMuODg2NCAyOS44Mjk1IDE0LjE2NjcgMjkuNTExNCAxNC4zODY0QzI5LjE5NyAxNC42MDIzIDI4LjgzNzEgMTQuNzU1NyAyOC40MzE4IDE0Ljg0NjZWMTQuOTYwMkMyOC44NzUgMTQuOTc5MiAyOS4yODk4IDE1LjEwNDIgMjkuNjc2MSAxNS4zMzUyQzMwLjA2NjMgMTUuNTY2MyAzMC4zODI2IDE1Ljg5MDIgMzAuNjI1IDE2LjMwNjhDMzAuODY3NCAxNi43MTk3IDMwLjk4ODYgMTcuMjEyMSAzMC45ODg2IDE3Ljc4NDFDMzAuOTg4NiAxOC40MDE1IDMwLjgzNTIgMTguOTUyNyAz'+
			'MC41Mjg0IDE5LjQzNzVDMzAuMjI1NCAxOS45MTg2IDI5Ljc3NjUgMjAuMjk5MiAyOS4xODE4IDIwLjU3OTVDMjguNTg3MSAyMC44NTk4IDI3Ljg1NDIgMjEgMjYuOTgzIDIxSDIyLjAxMTRaTTI0LjQ3MTYgMTguOTg4NkgyNi40NzczQzI3LjE2MjkgMTguOTg4NiAyNy42NjI5IDE4Ljg1OCAyNy45NzczIDE4LjU5NjZDMjguMjkxNyAxOC4zMzE0IDI4LjQ0ODkgMTcuOTc5MiAyOC40NDg5IDE3LjUzOThDMjguNDQ4OSAxNy4yMTc4IDI4LjM3MTIgMTYuOTMzNyAyOC4yMTU5IDE2LjY4NzVDMjguMDYwNiAxNi40NDEzIDI3LjgzOSAxNi4yNDgxIDI3LjU1MTEgMTYuMTA4QzI3LjI2NyAxNS45Njc4ID'+
			'I2LjkyOCAxNS44OTc3IDI2LjUzNDEgMTUuODk3N0gyNC40NzE2VjE4Ljk4ODZaTTI0LjQ3MTYgMTQuMjMzSDI2LjI5NTVDMjYuNjMyNiAxNC4yMzMgMjYuOTMxOCAxNC4xNzQyIDI3LjE5MzIgMTQuMDU2OEMyNy40NTgzIDEzLjkzNTYgMjcuNjY2NyAxMy43NjUyIDI3LjgxODIgMTMuNTQ1NUMyNy45NzM1IDEzLjMyNTggMjguMDUxMSAxMy4wNjI1IDI4LjA1MTEgMTIuNzU1N0MyOC4wNTExIDEyLjMzNTIgMjcuOTAxNSAxMS45OTYyIDI3LjYwMjMgMTEuNzM4NkMyNy4zMDY4IDExLjQ4MTEgMjYuODg2NCAxMS4zNTIzIDI2LjM0MDkgMTEuMzUyM0gyNC40NzE2VjE0LjIzM1pNMzguMTQwNiAxNy4y'+
			'ODQxVjEyLjI3MjdINDAuNTYxMVYyMUgzOC4yMzcyVjE5LjQxNDhIMzguMTQ2M0MzNy45NDkzIDE5LjkyNjEgMzcuNjIxNyAyMC4zMzcxIDM3LjE2MzQgMjAuNjQ3N0MzNi43MDg4IDIwLjk1ODMgMzYuMTUzOSAyMS4xMTM2IDM1LjQ5ODYgMjEuMTEzNkMzNC45MTUyIDIxLjExMzYgMzQuNDAyIDIwLjk4MTEgMzMuOTU4OCAyMC43MTU5QzMzLjUxNTYgMjAuNDUwOCAzMy4xNjkgMjAuMDczOSAzMi45MTkgMTkuNTg1MkMzMi42NzI4IDE5LjA5NjYgMzIuNTQ3OCAxOC41MTE0IDMyLjU0NCAxNy44Mjk1VjEyLjI3MjdIMzQuOTY0NVYxNy4zOTc3QzM0Ljk2ODMgMTcuOTEyOSAzNS4xMDY1IDE4LjMyMD'+
			'EgMzUuMzc5MyAxOC42MTkzQzM1LjY1MiAxOC45MTg2IDM2LjAxNzUgMTkuMDY4MiAzNi40NzU5IDE5LjA2ODJDMzYuNzY3NSAxOS4wNjgyIDM3LjA0MDIgMTkuMDAxOSAzNy4yOTQgMTguODY5M0MzNy41NDc4IDE4LjczMyAzNy43NTI0IDE4LjUzMjIgMzcuOTA3NyAxOC4yNjdDMzguMDY2OCAxOC4wMDE5IDM4LjE0NDQgMTcuNjc0MiAzOC4xNDA2IDE3LjI4NDFaTTQzLjk5MTUgMjQuMjcyN0M0My42ODQ3IDI0LjI3MjcgNDMuMzk2OCAyNC4yNDgxIDQzLjEyNzggMjQuMTk4OUM0Mi44NjI3IDI0LjE1MzQgNDIuNjQzIDI0LjA5NDcgNDIuNDY4OCAyNC4wMjI3TDQzLjAxNDIgMjIuMjE1OUM0My4y'+
			'OTgzIDIyLjMwMyA0My41NTQgMjIuMzUwNCA0My43ODEyIDIyLjM1OEM0NC4wMTIzIDIyLjM2NTUgNDQuMjExMiAyMi4zMTI1IDQ0LjM3NzggMjIuMTk4OUM0NC41NDgzIDIyLjA4NTIgNDQuNjg2NiAyMS44OTIgNDQuNzkyNiAyMS42MTkzTDQ0LjkzNDcgMjEuMjVMNDEuODA0IDEyLjI3MjdINDQuMzQ5NEw0Ni4xNTYyIDE4LjY4MThINDYuMjQ3Mkw0OC4wNzEgMTIuMjcyN0g1MC42MzM1TDQ3LjI0MTUgMjEuOTQzMkM0Ny4wNzg2IDIyLjQxMjkgNDYuODU3IDIyLjgyMiA0Ni41NzY3IDIzLjE3MDVDNDYuMzAwMiAyMy41MjI3IDQ1Ljk0OTggMjMuNzkzNiA0NS41MjU2IDIzLjk4M0M0NS4xMDEzID'+
			'I0LjE3NjEgNDQuNTkgMjQuMjcyNyA0My45OTE1IDI0LjI3MjdaTTY1LjM1MzcgOS4zNjM2NFYyMUg2My4yMjg3TDU4LjE2NjIgMTMuNjc2MUg1OC4wODFWMjFINTUuNjIwN1Y5LjM2MzY0SDU3Ljc3OThMNjIuODAyNiAxNi42ODE4SDYyLjkwNDhWOS4zNjM2NEg2NS4zNTM3Wk03MS4yODQxIDIxLjE3MDVDNzAuNDAxNSAyMS4xNzA1IDY5LjYzODMgMjAuOTgzIDY4Ljk5NDMgMjAuNjA4QzY4LjM1NDIgMjAuMjI5MiA2Ny44NTk4IDE5LjcwMjcgNjcuNTExNCAxOS4wMjg0QzY3LjE2MjkgMTguMzUwNCA2Ni45ODg2IDE3LjU2NDQgNjYuOTg4NiAxNi42NzA1QzY2Ljk4ODYgMTUuNzY4OSA2Ny4xNjI5'+
			'IDE0Ljk4MTEgNjcuNTExNCAxNC4zMDY4QzY3Ljg1OTggMTMuNjI4OCA2OC4zNTQyIDEzLjEwMjMgNjguOTk0MyAxMi43MjczQzY5LjYzODMgMTIuMzQ4NSA3MC40MDE1IDEyLjE1OTEgNzEuMjg0MSAxMi4xNTkxQzcyLjE2NjcgMTIuMTU5MSA3Mi45MjggMTIuMzQ4NSA3My41NjgyIDEyLjcyNzNDNzQuMjEyMSAxMy4xMDIzIDc0LjcwODMgMTMuNjI4OCA3NS4wNTY4IDE0LjMwNjhDNzUuNDA1MyAxNC45ODExIDc1LjU3OTUgMTUuNzY4OSA3NS41Nzk1IDE2LjY3MDVDNzUuNTc5NSAxNy41NjQ0IDc1LjQwNTMgMTguMzUwNCA3NS4wNTY4IDE5LjAyODRDNzQuNzA4MyAxOS43MDI3IDc0LjIxMjEgMj'+
			'AuMjI5MiA3My41NjgyIDIwLjYwOEM3Mi45MjggMjAuOTgzIDcyLjE2NjcgMjEuMTcwNSA3MS4yODQxIDIxLjE3MDVaTTcxLjI5NTUgMTkuMjk1NUM3MS42OTcgMTkuMjk1NSA3Mi4wMzIyIDE5LjE4MTggNzIuMzAxMSAxOC45NTQ1QzcyLjU3MDEgMTguNzIzNSA3Mi43NzI3IDE4LjQwOTEgNzIuOTA5MSAxOC4wMTE0QzczLjA0OTIgMTcuNjEzNiA3My4xMTkzIDE3LjE2MSA3My4xMTkzIDE2LjY1MzRDNzMuMTE5MyAxNi4xNDU4IDczLjA0OTIgMTUuNjkzMiA3Mi45MDkxIDE1LjI5NTVDNzIuNzcyNyAxNC44OTc3IDcyLjU3MDEgMTQuNTgzMyA3Mi4zMDExIDE0LjM1MjNDNzIuMDMyMiAxNC4xMjEy'+
			'IDcxLjY5NyAxNC4wMDU3IDcxLjI5NTUgMTQuMDA1N0M3MC44OTAyIDE0LjAwNTcgNzAuNTQ5MiAxNC4xMjEyIDcwLjI3MjcgMTQuMzUyM0M3MCAxNC41ODMzIDY5Ljc5MzYgMTQuODk3NyA2OS42NTM0IDE1LjI5NTVDNjkuNTE3IDE1LjY5MzIgNjkuNDQ4OSAxNi4xNDU4IDY5LjQ0ODkgMTYuNjUzNEM2OS40NDg5IDE3LjE2MSA2OS41MTcgMTcuNjEzNiA2OS42NTM0IDE4LjAxMTRDNjkuNzkzNiAxOC40MDkxIDcwIDE4LjcyMzUgNzAuMjcyNyAxOC45NTQ1QzcwLjU0OTIgMTkuMTgxOCA3MC44OTAyIDE5LjI5NTUgNzEuMjk1NSAxOS4yOTU1Wk03OC42NTYyIDIxTDc2LjI4MTIgMTIuMjcyN0g3OC'+
			'43MzAxTDgwLjA4MjQgMTguMTM2NEg4MC4xNjE5TDgxLjU3MSAxMi4yNzI3SDgzLjk3NDRMODUuNDA2MiAxOC4xMDIzSDg1LjQ4MDFMODYuODA5NyAxMi4yNzI3SDg5LjI1MjhMODYuODgzNSAyMUg4NC4zMjFMODIuODIxIDE1LjUxMTRIODIuNzEzMUw4MS4yMTMxIDIxSDc4LjY1NjJaIi8+Cjwvc3ZnPgo=';
		me._svg_112__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="Svg 11";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 23px;';
		hs+='position : absolute;';
		hs+='right : 5px;';
		hs+='top : calc(50% - ((23px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 90px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_112.ggIsActive=function() {
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
		me._svg_112.onclick=function (e) {
			if (me._svg_112.isDragging()) return;
			player.openUrl("https:\/\/www.fcpeuro.com\/products\/mercedes-engine-oil-filter-1041800109he","_blank");
			var list=me.findElements("products_list",true);
			while(list.length>0) {
				var e=list.pop();
				e.style.transition='none';
				e.style.visibility='hidden';
				e.ggVisible=false;
			}
		}
		me._svg_112.onmouseover=function (e) {
			me._svg_112__img.style.visibility='hidden';
			me._svg_112__imgo.style.visibility='inherit';
			me.elementMouseOver['svg_112']=true;
		}
		me._svg_112.onmouseout=function (e) {
			me._svg_112__img.style.visibility='inherit';
			me._svg_112__imgo.style.visibility='hidden';
			me.elementMouseOver['svg_112']=false;
		}
		me._svg_112.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['svg_112']) {
				me._svg_112__img.style.visibility='hidden';
				me._svg_112__imgo.style.visibility='inherit';
				me.elementMouseOver['svg_112']=true;
			}
		}
		me._svg_112.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_4_2.appendChild(me._svg_112);
		el=me._svg_132=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._svg_132;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._svg_132__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjMwIiB2aWV3Qm94PSIwIDAgMTEwIDMwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMTAiPgogPHJlY3QgZmlsbD0iI0Y2OTIxRSIgaGVpZ2h0PSIzMCIgcng9IjE1IiB3aWR0aD0iMTEwIi8+CiA8cGF0aCBmaWxsPSJ3aGl0ZSIgZD0iTTM4LjM5NDkgOS4zNjM2NEw0MS4yMDc0IDE4LjIwNDVINDEuMzE1M0w0NC4xMzM1IDkuMzYzNjRINDYuODYwOEw0Mi44NDk0IDIxSDM5LjY3OUwzNS42NjE5IDkuMzYzNjRIMzguMzk0OVpNNDguMjE1OSAyMVYxMi4yNzI3SDUwLjYzNjRWMjFINDguMjE1OVpNNDkuNDMxOCAxMS4xND'+
			'c3QzQ5LjA3MiAxMS4xNDc3IDQ4Ljc2MzMgMTEuMDI4NCA0OC41MDU3IDEwLjc4OThDNDguMjUxOSAxMC41NDczIDQ4LjEyNSAxMC4yNTc2IDQ4LjEyNSA5LjkyMDQ1QzQ4LjEyNSA5LjU4NzEyIDQ4LjI1MTkgOS4zMDExNCA0OC41MDU3IDkuMDYyNUM0OC43NjMzIDguODIwMDggNDkuMDcyIDguNjk4ODYgNDkuNDMxOCA4LjY5ODg2QzQ5Ljc5MTcgOC42OTg4NiA1MC4wOTg1IDguODIwMDggNTAuMzUyMyA5LjA2MjVDNTAuNjA5OCA5LjMwMTE0IDUwLjczODYgOS41ODcxMiA1MC43Mzg2IDkuOTIwNDVDNTAuNzM4NiAxMC4yNTc2IDUwLjYwOTggMTAuNTQ3MyA1MC4zNTIzIDEwLjc4OThDNTAuMDk4'+
			'NSAxMS4wMjg0IDQ5Ljc5MTcgMTEuMTQ3NyA0OS40MzE4IDExLjE0NzdaTTU2LjU1MjYgMjEuMTcwNUM1NS42NTQ4IDIxLjE3MDUgNTQuODgyMSAyMC45ODg2IDU0LjIzNDQgMjAuNjI1QzUzLjU5MDQgMjAuMjU3NiA1My4wOTQyIDE5LjczODYgNTIuNzQ1NyAxOS4wNjgyQzUyLjM5NzMgMTguMzkzOSA1Mi4yMjMgMTcuNTk2NiA1Mi4yMjMgMTYuNjc2MUM1Mi4yMjMgMTUuNzc4NCA1Mi4zOTczIDE0Ljk5MDUgNTIuNzQ1NyAxNC4zMTI1QzUzLjA5NDIgMTMuNjM0NSA1My41ODQ4IDEzLjEwNjEgNTQuMjE3MyAxMi43MjczQzU0Ljg1MzcgMTIuMzQ4NSA1NS41OTk5IDEyLjE1OTEgNTYuNDU2IDEyLj'+
			'E1OTFDNTcuMDMxNyAxMi4xNTkxIDU3LjU2NzcgMTIuMjUxOSA1OC4wNjM5IDEyLjQzNzVDNTguNTYzOSAxMi42MTkzIDU4Ljk5OTUgMTIuODkzOSA1OS4zNzA3IDEzLjI2MTRDNTkuNzQ1NyAxMy42Mjg4IDYwLjAzNzQgMTQuMDkwOSA2MC4yNDU3IDE0LjY0NzdDNjAuNDU0MSAxNS4yMDA4IDYwLjU1ODIgMTUuODQ4NSA2MC41NTgyIDE2LjU5MDlWMTcuMjU1N0g1My4xODg5VjE1Ljc1NTdINTguMjc5OEM1OC4yNzk4IDE1LjQwNzIgNTguMjA0MSAxNS4wOTg1IDU4LjA1MjYgMTQuODI5NUM1Ny45MDEgMTQuNTYwNiA1Ny42OTA4IDE0LjM1MDQgNTcuNDIxOSAxNC4xOTg5QzU3LjE1NjcgMTQuMDQz'+
			'NiA1Ni44NDggMTMuOTY1OSA1Ni40OTU3IDEzLjk2NTlDNTYuMTI4MyAxMy45NjU5IDU1LjgwMjYgMTQuMDUxMSA1NS41MTg1IDE0LjIyMTZDNTUuMjM4MiAxNC4zODgzIDU1LjAxODUgMTQuNjEzNiA1NC44NTk0IDE0Ljg5NzdDNTQuNzAwMyAxNS4xNzggNTQuNjE4OCAxNS40OTA1IDU0LjYxNTEgMTUuODM1MlYxNy4yNjE0QzU0LjYxNTEgMTcuNjkzMiA1NC42OTQ2IDE4LjA2NjMgNTQuODUzNyAxOC4zODA3QzU1LjAxNjYgMTguNjk1MSA1NS4yNDU3IDE4LjkzNzUgNTUuNTQxMiAxOS4xMDhDNTUuODM2NiAxOS4yNzg0IDU2LjE4NyAxOS4zNjM2IDU2LjU5MjMgMTkuMzYzNkM1Ni44NjEzIDE5Lj'+
			'M2MzYgNTcuMTA3NSAxOS4zMjU4IDU3LjMzMSAxOS4yNUM1Ny41NTQ1IDE5LjE3NDIgNTcuNzQ1NyAxOS4wNjA2IDU3LjkwNDggMTguOTA5MUM1OC4wNjM5IDE4Ljc1NzYgNTguMTg1MSAxOC41NzIgNTguMjY4NSAxOC4zNTIzTDYwLjUwNzEgMTguNUM2MC4zOTM1IDE5LjAzNzkgNjAuMTYwNSAxOS41MDc2IDU5LjgwODIgMTkuOTA5MUM1OS40NTk4IDIwLjMwNjggNTkuMDA5IDIwLjYxNzQgNTguNDU2IDIwLjg0MDlDNTcuOTA2NyAyMS4wNjA2IDU3LjI3MjMgMjEuMTcwNSA1Ni41NTI2IDIxLjE3MDVaTTYzLjc5NjkgMjFMNjEuNDIxOSAxMi4yNzI3SDYzLjg3MDdMNjUuMjIzIDE4LjEzNjRINjUu'+
			'MzAyNkw2Ni43MTE2IDEyLjI3MjdINjkuMTE1MUw3MC41NDY5IDE4LjEwMjNINzAuNjIwN0w3MS45NTAzIDEyLjI3MjdINzQuMzkzNUw3Mi4wMjQxIDIxSDY5LjQ2MTZMNjcuOTYxNiAxNS41MTE0SDY3Ljg1MzdMNjYuMzUzNyAyMUg2My43OTY5WiIvPgo8L3N2Zz4K';
		me._svg_132__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._svg_132__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjMwIiB2aWV3Qm94PSIwIDAgMTEwIDMwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMTAiPgogPHJlY3QgZmlsbD0iI0FGNUUwMCIgaGVpZ2h0PSIzMCIgcng9IjE1IiB3aWR0aD0iMTEwIi8+CiA8cGF0aCBmaWxsPSJ3aGl0ZSIgZD0iTTM4LjM5NDkgOS4zNjM2NEw0MS4yMDc0IDE4LjIwNDVINDEuMzE1M0w0NC4xMzM1IDkuMzYzNjRINDYuODYwOEw0Mi44NDk0IDIxSDM5LjY3OUwzNS42NjE5IDkuMzYzNjRIMzguMzk0OVpNNDguMjE1OSAyMVYxMi4yNzI3SDUwLjYzNjRWMjFINDguMjE1OVpNNDkuNDMxOCAxMS4xND'+
			'c3QzQ5LjA3MiAxMS4xNDc3IDQ4Ljc2MzMgMTEuMDI4NCA0OC41MDU3IDEwLjc4OThDNDguMjUxOSAxMC41NDczIDQ4LjEyNSAxMC4yNTc2IDQ4LjEyNSA5LjkyMDQ1QzQ4LjEyNSA5LjU4NzEyIDQ4LjI1MTkgOS4zMDExNCA0OC41MDU3IDkuMDYyNUM0OC43NjMzIDguODIwMDggNDkuMDcyIDguNjk4ODYgNDkuNDMxOCA4LjY5ODg2QzQ5Ljc5MTcgOC42OTg4NiA1MC4wOTg1IDguODIwMDggNTAuMzUyMyA5LjA2MjVDNTAuNjA5OCA5LjMwMTE0IDUwLjczODYgOS41ODcxMiA1MC43Mzg2IDkuOTIwNDVDNTAuNzM4NiAxMC4yNTc2IDUwLjYwOTggMTAuNTQ3MyA1MC4zNTIzIDEwLjc4OThDNTAuMDk4'+
			'NSAxMS4wMjg0IDQ5Ljc5MTcgMTEuMTQ3NyA0OS40MzE4IDExLjE0NzdaTTU2LjU1MjYgMjEuMTcwNUM1NS42NTQ4IDIxLjE3MDUgNTQuODgyMSAyMC45ODg2IDU0LjIzNDQgMjAuNjI1QzUzLjU5MDQgMjAuMjU3NiA1My4wOTQyIDE5LjczODYgNTIuNzQ1NyAxOS4wNjgyQzUyLjM5NzMgMTguMzkzOSA1Mi4yMjMgMTcuNTk2NiA1Mi4yMjMgMTYuNjc2MUM1Mi4yMjMgMTUuNzc4NCA1Mi4zOTczIDE0Ljk5MDUgNTIuNzQ1NyAxNC4zMTI1QzUzLjA5NDIgMTMuNjM0NSA1My41ODQ4IDEzLjEwNjEgNTQuMjE3MyAxMi43MjczQzU0Ljg1MzcgMTIuMzQ4NSA1NS41OTk5IDEyLjE1OTEgNTYuNDU2IDEyLj'+
			'E1OTFDNTcuMDMxNyAxMi4xNTkxIDU3LjU2NzcgMTIuMjUxOSA1OC4wNjM5IDEyLjQzNzVDNTguNTYzOSAxMi42MTkzIDU4Ljk5OTUgMTIuODkzOSA1OS4zNzA3IDEzLjI2MTRDNTkuNzQ1NyAxMy42Mjg4IDYwLjAzNzQgMTQuMDkwOSA2MC4yNDU3IDE0LjY0NzdDNjAuNDU0MSAxNS4yMDA4IDYwLjU1ODIgMTUuODQ4NSA2MC41NTgyIDE2LjU5MDlWMTcuMjU1N0g1My4xODg5VjE1Ljc1NTdINTguMjc5OEM1OC4yNzk4IDE1LjQwNzIgNTguMjA0MSAxNS4wOTg1IDU4LjA1MjYgMTQuODI5NUM1Ny45MDEgMTQuNTYwNiA1Ny42OTA4IDE0LjM1MDQgNTcuNDIxOSAxNC4xOTg5QzU3LjE1NjcgMTQuMDQz'+
			'NiA1Ni44NDggMTMuOTY1OSA1Ni40OTU3IDEzLjk2NTlDNTYuMTI4MyAxMy45NjU5IDU1LjgwMjYgMTQuMDUxMSA1NS41MTg1IDE0LjIyMTZDNTUuMjM4MiAxNC4zODgzIDU1LjAxODUgMTQuNjEzNiA1NC44NTk0IDE0Ljg5NzdDNTQuNzAwMyAxNS4xNzggNTQuNjE4OCAxNS40OTA1IDU0LjYxNTEgMTUuODM1MlYxNy4yNjE0QzU0LjYxNTEgMTcuNjkzMiA1NC42OTQ2IDE4LjA2NjMgNTQuODUzNyAxOC4zODA3QzU1LjAxNjYgMTguNjk1MSA1NS4yNDU3IDE4LjkzNzUgNTUuNTQxMiAxOS4xMDhDNTUuODM2NiAxOS4yNzg0IDU2LjE4NyAxOS4zNjM2IDU2LjU5MjMgMTkuMzYzNkM1Ni44NjEzIDE5Lj'+
			'M2MzYgNTcuMTA3NSAxOS4zMjU4IDU3LjMzMSAxOS4yNUM1Ny41NTQ1IDE5LjE3NDIgNTcuNzQ1NyAxOS4wNjA2IDU3LjkwNDggMTguOTA5MUM1OC4wNjM5IDE4Ljc1NzYgNTguMTg1MSAxOC41NzIgNTguMjY4NSAxOC4zNTIzTDYwLjUwNzEgMTguNUM2MC4zOTM1IDE5LjAzNzkgNjAuMTYwNSAxOS41MDc2IDU5LjgwODIgMTkuOTA5MUM1OS40NTk4IDIwLjMwNjggNTkuMDA5IDIwLjYxNzQgNTguNDU2IDIwLjg0MDlDNTcuOTA2NyAyMS4wNjA2IDU3LjI3MjMgMjEuMTcwNSA1Ni41NTI2IDIxLjE3MDVaTTYzLjc5NjkgMjFMNjEuNDIxOSAxMi4yNzI3SDYzLjg3MDdMNjUuMjIzIDE4LjEzNjRINjUu'+
			'MzAyNkw2Ni43MTE2IDEyLjI3MjdINjkuMTE1MUw3MC41NDY5IDE4LjEwMjNINzAuNjIwN0w3MS45NTAzIDEyLjI3MjdINzQuMzkzNUw3Mi4wMjQxIDIxSDY5LjQ2MTZMNjcuOTYxNiAxNS41MTE0SDY3Ljg1MzdMNjYuMzUzNyAyMUg2My43OTY5WiIvPgo8L3N2Zz4K';
		me._svg_132__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="Svg 13";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 23px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((23px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 90px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_132.ggIsActive=function() {
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
		me._svg_132.onclick=function (e) {
			if (me._svg_132.isDragging()) return;
			player.moveTo("-86.15","-6.49","20.74","18.0000");
			var list=me.findElements("products_list",true);
			while(list.length>0) {
				var e=list.pop();
				e.style.transition='none';
				e.style.visibility='hidden';
				e.ggVisible=false;
			}
		}
		me._svg_132.onmouseover=function (e) {
			me._svg_132__img.style.visibility='hidden';
			me._svg_132__imgo.style.visibility='inherit';
			me.elementMouseOver['svg_132']=true;
		}
		me._svg_132.onmouseout=function (e) {
			me._svg_132__img.style.visibility='inherit';
			me._svg_132__imgo.style.visibility='hidden';
			me.elementMouseOver['svg_132']=false;
		}
		me._svg_132.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['svg_132']) {
				me._svg_132__img.style.visibility='hidden';
				me._svg_132__imgo.style.visibility='inherit';
				me.elementMouseOver['svg_132']=true;
			}
		}
		me._svg_132.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_4_2.appendChild(me._svg_132);
		me._product_list_1041800109.appendChild(me._rectangle_4_2);
		me._scrollarea_1__content.appendChild(me._product_list_1041800109);
		el=me._product_list_sn70207=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._product_list_sn70207;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="product_list_sn70207";
		el.ggDx=-127;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle product_list";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #eeeeee;';
		hs+='border-radius : 5px;';
		hs+='cursor : default;';
		hs+='height : 300px;';
		hs+='left : calc(50% - ((200px + 2px) / 2) - 127px);';
		hs+='position : absolute;';
		hs+='top : 650px;';
		hs+='visibility : inherit;';
		hs+='width : 200px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 0%';
		me._product_list_sn70207.ggIsActive=function() {
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
		me._product_list_sn70207.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_12=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._image_12;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._image_12__img=document.createElement('img');
		els.className='ggskin ggskin_image_12';
		hs=basePath + 'images/image_12.png';
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
		el.ggId="Image 12";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 180px;';
		hs+='left : calc(50% - ((180px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 180px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_12.ggIsActive=function() {
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
		me._image_12.ggUpdatePosition=function (useTransition) {
		}
		me._product_list_sn70207.appendChild(me._image_12);
		el=me._text_6_2=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._text_6_2;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._text_6_2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 6_2";
		el.ggDy=59;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(102,102,102,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 59px);';
		hs+='visibility : inherit;';
		hs+='width : 95%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+="text-overflow: ellipsis;";
		els.setAttribute('style',hs);
		me._text_6_2.ggUpdateText=function() {
			var params = [];
			var hs = player._("FILTR PALIWA SEPARATOR Z ODSTOJNIKIEM H-232mm fi-103mm 1-14 UNS CASE\/ CLAAS\nMOT. D2862\/\/ DAF 95XF\/ 105\/ CF75\/ CF IV\/ XF106 mot. PE\/ PR\/ PX-7\/ MX\/ MX-11\/\nMX-13\/ XF\/XE\/XM\/VF\/\/ DOOSAN mot. DL\/ DV", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_6_2.ggUpdateText();
		el.appendChild(els);
		me._text_6_2.ggIsActive=function() {
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
		me._text_6_2.ggUpdatePosition=function (useTransition) {
		}
		me._product_list_sn70207.appendChild(me._text_6_2);
		el=me._text_6_1_2=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._text_6_1_2;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._text_6_1_2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 6_1_2";
		el.ggDy=82;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(0,0,0,1);';
		hs+='cursor : default;';
		hs+='height : 21px;';
		hs+='left : 7px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((21px + 0px) / 2) + 82px);';
		hs+='visibility : inherit;';
		hs+='width : 95%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='bottom: 0px;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+="text-overflow: ellipsis;";
		els.setAttribute('style',hs);
		me._text_6_1_2.ggUpdateText=function() {
			var params = [];
			var hs = player._("<div class=\"ggmarkdown\"><p><strong>$30-$50<\/strong> \/pieces<\/p>\n<div>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_6_1_2.ggUpdateText();
		el.appendChild(els);
		me._text_6_1_2.ggIsActive=function() {
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
		me._text_6_1_2.ggUpdatePosition=function (useTransition) {
		}
		me._product_list_sn70207.appendChild(me._text_6_1_2);
		el=me._text_6_1_1_1_1=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._text_6_1_1_1_1;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._text_6_1_1_1_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 6_1_1_1_1";
		el.ggDy=105;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(0,0,0,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 7px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 105px);';
		hs+='visibility : inherit;';
		hs+='width : 40%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='bottom: 0px;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+="text-overflow: ellipsis;";
		els.setAttribute('style',hs);
		me._text_6_1_1_1_1.ggUpdateText=function() {
			var params = [];
			var hs = player._("<div class=\"ggmarkdown\"><p>200 pieces<\/p>\n<div>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_6_1_1_1_1.ggUpdateText();
		el.appendChild(els);
		me._text_6_1_1_1_1.ggIsActive=function() {
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
		me._text_6_1_1_1_1.ggUpdatePosition=function (useTransition) {
		}
		me._product_list_sn70207.appendChild(me._text_6_1_1_1_1);
		el=me._text_6_1_1_2=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._text_6_1_1_2;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._text_6_1_1_2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 6_1_1_2";
		el.ggDy=105;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(168,168,168,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 85px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 105px);';
		hs+='visibility : inherit;';
		hs+='width : 35%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='bottom: 0px;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+="text-overflow: ellipsis;";
		els.setAttribute('style',hs);
		me._text_6_1_1_2.ggUpdateText=function() {
			var params = [];
			var hs = player._("<div class=\"ggmarkdown\"><p>(MOQ)<\/p>\n<div>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_6_1_1_2.ggUpdateText();
		el.appendChild(els);
		me._text_6_1_1_2.ggIsActive=function() {
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
		me._text_6_1_1_2.ggUpdatePosition=function (useTransition) {
		}
		me._product_list_sn70207.appendChild(me._text_6_1_1_2);
		el=me._rectangle_4_1=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._rectangle_4_1;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="Rectangle 4_1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 5px;';
		hs+='cursor : default;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((95% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 95%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_4_1.ggIsActive=function() {
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
		me._rectangle_4_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_111=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._svg_111;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._svg_111__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjMwIiB2aWV3Qm94PSIwIDAgMTEwIDMwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMTAiPgogPHJlY3QgZmlsbD0iIzE5Mjg0NSIgaGVpZ2h0PSIzMCIgcng9IjE1IiB3aWR0aD0iMTEwIi8+CiA8cGF0aCBmaWxsPSJ3aGl0ZSIgZD0iTTIyLjAxMTQgMjFWOS4zNjM2NEgyNi42NzA1QzI3LjUyNjUgOS4zNjM2NCAyOC4yNDA1IDkuNDkwNTMgMjguODEyNSA5Ljc0NDMyQzI5LjM4NDUgOS45OTgxMSAyOS44MTQ0IDEwLjM1MDQgMzAuMTAyMyAxMC44MDExQzMwLjM5MDIgMTEuMjQ4MSAzMC41MzQxIDExLjc2MzMgMzAuNT'+
			'M0MSAxMi4zNDY2QzMwLjUzNDEgMTIuODAxMSAzMC40NDMyIDEzLjIwMDggMzAuMjYxNCAxMy41NDU1QzMwLjA3OTUgMTMuODg2NCAyOS44Mjk1IDE0LjE2NjcgMjkuNTExNCAxNC4zODY0QzI5LjE5NyAxNC42MDIzIDI4LjgzNzEgMTQuNzU1NyAyOC40MzE4IDE0Ljg0NjZWMTQuOTYwMkMyOC44NzUgMTQuOTc5MiAyOS4yODk4IDE1LjEwNDIgMjkuNjc2MSAxNS4zMzUyQzMwLjA2NjMgMTUuNTY2MyAzMC4zODI2IDE1Ljg5MDIgMzAuNjI1IDE2LjMwNjhDMzAuODY3NCAxNi43MTk3IDMwLjk4ODYgMTcuMjEyMSAzMC45ODg2IDE3Ljc4NDFDMzAuOTg4NiAxOC40MDE1IDMwLjgzNTIgMTguOTUyNyAz'+
			'MC41Mjg0IDE5LjQzNzVDMzAuMjI1NCAxOS45MTg2IDI5Ljc3NjUgMjAuMjk5MiAyOS4xODE4IDIwLjU3OTVDMjguNTg3MSAyMC44NTk4IDI3Ljg1NDIgMjEgMjYuOTgzIDIxSDIyLjAxMTRaTTI0LjQ3MTYgMTguOTg4NkgyNi40NzczQzI3LjE2MjkgMTguOTg4NiAyNy42NjI5IDE4Ljg1OCAyNy45NzczIDE4LjU5NjZDMjguMjkxNyAxOC4zMzE0IDI4LjQ0ODkgMTcuOTc5MiAyOC40NDg5IDE3LjUzOThDMjguNDQ4OSAxNy4yMTc4IDI4LjM3MTIgMTYuOTMzNyAyOC4yMTU5IDE2LjY4NzVDMjguMDYwNiAxNi40NDEzIDI3LjgzOSAxNi4yNDgxIDI3LjU1MTEgMTYuMTA4QzI3LjI2NyAxNS45Njc4ID'+
			'I2LjkyOCAxNS44OTc3IDI2LjUzNDEgMTUuODk3N0gyNC40NzE2VjE4Ljk4ODZaTTI0LjQ3MTYgMTQuMjMzSDI2LjI5NTVDMjYuNjMyNiAxNC4yMzMgMjYuOTMxOCAxNC4xNzQyIDI3LjE5MzIgMTQuMDU2OEMyNy40NTgzIDEzLjkzNTYgMjcuNjY2NyAxMy43NjUyIDI3LjgxODIgMTMuNTQ1NUMyNy45NzM1IDEzLjMyNTggMjguMDUxMSAxMy4wNjI1IDI4LjA1MTEgMTIuNzU1N0MyOC4wNTExIDEyLjMzNTIgMjcuOTAxNSAxMS45OTYyIDI3LjYwMjMgMTEuNzM4NkMyNy4zMDY4IDExLjQ4MTEgMjYuODg2NCAxMS4zNTIzIDI2LjM0MDkgMTEuMzUyM0gyNC40NzE2VjE0LjIzM1pNMzguMTQwNiAxNy4y'+
			'ODQxVjEyLjI3MjdINDAuNTYxMVYyMUgzOC4yMzcyVjE5LjQxNDhIMzguMTQ2M0MzNy45NDkzIDE5LjkyNjEgMzcuNjIxNyAyMC4zMzcxIDM3LjE2MzQgMjAuNjQ3N0MzNi43MDg4IDIwLjk1ODMgMzYuMTUzOSAyMS4xMTM2IDM1LjQ5ODYgMjEuMTEzNkMzNC45MTUyIDIxLjExMzYgMzQuNDAyIDIwLjk4MTEgMzMuOTU4OCAyMC43MTU5QzMzLjUxNTYgMjAuNDUwOCAzMy4xNjkgMjAuMDczOSAzMi45MTkgMTkuNTg1MkMzMi42NzI4IDE5LjA5NjYgMzIuNTQ3OCAxOC41MTE0IDMyLjU0NCAxNy44Mjk1VjEyLjI3MjdIMzQuOTY0NVYxNy4zOTc3QzM0Ljk2ODMgMTcuOTEyOSAzNS4xMDY1IDE4LjMyMD'+
			'EgMzUuMzc5MyAxOC42MTkzQzM1LjY1MiAxOC45MTg2IDM2LjAxNzUgMTkuMDY4MiAzNi40NzU5IDE5LjA2ODJDMzYuNzY3NSAxOS4wNjgyIDM3LjA0MDIgMTkuMDAxOSAzNy4yOTQgMTguODY5M0MzNy41NDc4IDE4LjczMyAzNy43NTI0IDE4LjUzMjIgMzcuOTA3NyAxOC4yNjdDMzguMDY2OCAxOC4wMDE5IDM4LjE0NDQgMTcuNjc0MiAzOC4xNDA2IDE3LjI4NDFaTTQzLjk5MTUgMjQuMjcyN0M0My42ODQ3IDI0LjI3MjcgNDMuMzk2OCAyNC4yNDgxIDQzLjEyNzggMjQuMTk4OUM0Mi44NjI3IDI0LjE1MzQgNDIuNjQzIDI0LjA5NDcgNDIuNDY4OCAyNC4wMjI3TDQzLjAxNDIgMjIuMjE1OUM0My4y'+
			'OTgzIDIyLjMwMyA0My41NTQgMjIuMzUwNCA0My43ODEyIDIyLjM1OEM0NC4wMTIzIDIyLjM2NTUgNDQuMjExMiAyMi4zMTI1IDQ0LjM3NzggMjIuMTk4OUM0NC41NDgzIDIyLjA4NTIgNDQuNjg2NiAyMS44OTIgNDQuNzkyNiAyMS42MTkzTDQ0LjkzNDcgMjEuMjVMNDEuODA0IDEyLjI3MjdINDQuMzQ5NEw0Ni4xNTYyIDE4LjY4MThINDYuMjQ3Mkw0OC4wNzEgMTIuMjcyN0g1MC42MzM1TDQ3LjI0MTUgMjEuOTQzMkM0Ny4wNzg2IDIyLjQxMjkgNDYuODU3IDIyLjgyMiA0Ni41NzY3IDIzLjE3MDVDNDYuMzAwMiAyMy41MjI3IDQ1Ljk0OTggMjMuNzkzNiA0NS41MjU2IDIzLjk4M0M0NS4xMDEzID'+
			'I0LjE3NjEgNDQuNTkgMjQuMjcyNyA0My45OTE1IDI0LjI3MjdaTTY1LjM1MzcgOS4zNjM2NFYyMUg2My4yMjg3TDU4LjE2NjIgMTMuNjc2MUg1OC4wODFWMjFINTUuNjIwN1Y5LjM2MzY0SDU3Ljc3OThMNjIuODAyNiAxNi42ODE4SDYyLjkwNDhWOS4zNjM2NEg2NS4zNTM3Wk03MS4yODQxIDIxLjE3MDVDNzAuNDAxNSAyMS4xNzA1IDY5LjYzODMgMjAuOTgzIDY4Ljk5NDMgMjAuNjA4QzY4LjM1NDIgMjAuMjI5MiA2Ny44NTk4IDE5LjcwMjcgNjcuNTExNCAxOS4wMjg0QzY3LjE2MjkgMTguMzUwNCA2Ni45ODg2IDE3LjU2NDQgNjYuOTg4NiAxNi42NzA1QzY2Ljk4ODYgMTUuNzY4OSA2Ny4xNjI5'+
			'IDE0Ljk4MTEgNjcuNTExNCAxNC4zMDY4QzY3Ljg1OTggMTMuNjI4OCA2OC4zNTQyIDEzLjEwMjMgNjguOTk0MyAxMi43MjczQzY5LjYzODMgMTIuMzQ4NSA3MC40MDE1IDEyLjE1OTEgNzEuMjg0MSAxMi4xNTkxQzcyLjE2NjcgMTIuMTU5MSA3Mi45MjggMTIuMzQ4NSA3My41NjgyIDEyLjcyNzNDNzQuMjEyMSAxMy4xMDIzIDc0LjcwODMgMTMuNjI4OCA3NS4wNTY4IDE0LjMwNjhDNzUuNDA1MyAxNC45ODExIDc1LjU3OTUgMTUuNzY4OSA3NS41Nzk1IDE2LjY3MDVDNzUuNTc5NSAxNy41NjQ0IDc1LjQwNTMgMTguMzUwNCA3NS4wNTY4IDE5LjAyODRDNzQuNzA4MyAxOS43MDI3IDc0LjIxMjEgMj'+
			'AuMjI5MiA3My41NjgyIDIwLjYwOEM3Mi45MjggMjAuOTgzIDcyLjE2NjcgMjEuMTcwNSA3MS4yODQxIDIxLjE3MDVaTTcxLjI5NTUgMTkuMjk1NUM3MS42OTcgMTkuMjk1NSA3Mi4wMzIyIDE5LjE4MTggNzIuMzAxMSAxOC45NTQ1QzcyLjU3MDEgMTguNzIzNSA3Mi43NzI3IDE4LjQwOTEgNzIuOTA5MSAxOC4wMTE0QzczLjA0OTIgMTcuNjEzNiA3My4xMTkzIDE3LjE2MSA3My4xMTkzIDE2LjY1MzRDNzMuMTE5MyAxNi4xNDU4IDczLjA0OTIgMTUuNjkzMiA3Mi45MDkxIDE1LjI5NTVDNzIuNzcyNyAxNC44OTc3IDcyLjU3MDEgMTQuNTgzMyA3Mi4zMDExIDE0LjM1MjNDNzIuMDMyMiAxNC4xMjEy'+
			'IDcxLjY5NyAxNC4wMDU3IDcxLjI5NTUgMTQuMDA1N0M3MC44OTAyIDE0LjAwNTcgNzAuNTQ5MiAxNC4xMjEyIDcwLjI3MjcgMTQuMzUyM0M3MCAxNC41ODMzIDY5Ljc5MzYgMTQuODk3NyA2OS42NTM0IDE1LjI5NTVDNjkuNTE3IDE1LjY5MzIgNjkuNDQ4OSAxNi4xNDU4IDY5LjQ0ODkgMTYuNjUzNEM2OS40NDg5IDE3LjE2MSA2OS41MTcgMTcuNjEzNiA2OS42NTM0IDE4LjAxMTRDNjkuNzkzNiAxOC40MDkxIDcwIDE4LjcyMzUgNzAuMjcyNyAxOC45NTQ1QzcwLjU0OTIgMTkuMTgxOCA3MC44OTAyIDE5LjI5NTUgNzEuMjk1NSAxOS4yOTU1Wk03OC42NTYyIDIxTDc2LjI4MTIgMTIuMjcyN0g3OC'+
			'43MzAxTDgwLjA4MjQgMTguMTM2NEg4MC4xNjE5TDgxLjU3MSAxMi4yNzI3SDgzLjk3NDRMODUuNDA2MiAxOC4xMDIzSDg1LjQ4MDFMODYuODA5NyAxMi4yNzI3SDg5LjI1MjhMODYuODgzNSAyMUg4NC4zMjFMODIuODIxIDE1LjUxMTRIODIuNzEzMUw4MS4yMTMxIDIxSDc4LjY1NjJaIi8+Cjwvc3ZnPgo=';
		me._svg_111__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._svg_111__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjMwIiB2aWV3Qm94PSIwIDAgMTEwIDMwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMTAiPgogPHJlY3QgZmlsbD0iI0QzMzQzNCIgaGVpZ2h0PSIzMCIgcng9IjE1IiB3aWR0aD0iMTEwIi8+CiA8cGF0aCBmaWxsPSJ3aGl0ZSIgZD0iTTIyLjAxMTQgMjFWOS4zNjM2NEgyNi42NzA1QzI3LjUyNjUgOS4zNjM2NCAyOC4yNDA1IDkuNDkwNTMgMjguODEyNSA5Ljc0NDMyQzI5LjM4NDUgOS45OTgxMSAyOS44MTQ0IDEwLjM1MDQgMzAuMTAyMyAxMC44MDExQzMwLjM5MDIgMTEuMjQ4MSAzMC41MzQxIDExLjc2MzMgMzAuNT'+
			'M0MSAxMi4zNDY2QzMwLjUzNDEgMTIuODAxMSAzMC40NDMyIDEzLjIwMDggMzAuMjYxNCAxMy41NDU1QzMwLjA3OTUgMTMuODg2NCAyOS44Mjk1IDE0LjE2NjcgMjkuNTExNCAxNC4zODY0QzI5LjE5NyAxNC42MDIzIDI4LjgzNzEgMTQuNzU1NyAyOC40MzE4IDE0Ljg0NjZWMTQuOTYwMkMyOC44NzUgMTQuOTc5MiAyOS4yODk4IDE1LjEwNDIgMjkuNjc2MSAxNS4zMzUyQzMwLjA2NjMgMTUuNTY2MyAzMC4zODI2IDE1Ljg5MDIgMzAuNjI1IDE2LjMwNjhDMzAuODY3NCAxNi43MTk3IDMwLjk4ODYgMTcuMjEyMSAzMC45ODg2IDE3Ljc4NDFDMzAuOTg4NiAxOC40MDE1IDMwLjgzNTIgMTguOTUyNyAz'+
			'MC41Mjg0IDE5LjQzNzVDMzAuMjI1NCAxOS45MTg2IDI5Ljc3NjUgMjAuMjk5MiAyOS4xODE4IDIwLjU3OTVDMjguNTg3MSAyMC44NTk4IDI3Ljg1NDIgMjEgMjYuOTgzIDIxSDIyLjAxMTRaTTI0LjQ3MTYgMTguOTg4NkgyNi40NzczQzI3LjE2MjkgMTguOTg4NiAyNy42NjI5IDE4Ljg1OCAyNy45NzczIDE4LjU5NjZDMjguMjkxNyAxOC4zMzE0IDI4LjQ0ODkgMTcuOTc5MiAyOC40NDg5IDE3LjUzOThDMjguNDQ4OSAxNy4yMTc4IDI4LjM3MTIgMTYuOTMzNyAyOC4yMTU5IDE2LjY4NzVDMjguMDYwNiAxNi40NDEzIDI3LjgzOSAxNi4yNDgxIDI3LjU1MTEgMTYuMTA4QzI3LjI2NyAxNS45Njc4ID'+
			'I2LjkyOCAxNS44OTc3IDI2LjUzNDEgMTUuODk3N0gyNC40NzE2VjE4Ljk4ODZaTTI0LjQ3MTYgMTQuMjMzSDI2LjI5NTVDMjYuNjMyNiAxNC4yMzMgMjYuOTMxOCAxNC4xNzQyIDI3LjE5MzIgMTQuMDU2OEMyNy40NTgzIDEzLjkzNTYgMjcuNjY2NyAxMy43NjUyIDI3LjgxODIgMTMuNTQ1NUMyNy45NzM1IDEzLjMyNTggMjguMDUxMSAxMy4wNjI1IDI4LjA1MTEgMTIuNzU1N0MyOC4wNTExIDEyLjMzNTIgMjcuOTAxNSAxMS45OTYyIDI3LjYwMjMgMTEuNzM4NkMyNy4zMDY4IDExLjQ4MTEgMjYuODg2NCAxMS4zNTIzIDI2LjM0MDkgMTEuMzUyM0gyNC40NzE2VjE0LjIzM1pNMzguMTQwNiAxNy4y'+
			'ODQxVjEyLjI3MjdINDAuNTYxMVYyMUgzOC4yMzcyVjE5LjQxNDhIMzguMTQ2M0MzNy45NDkzIDE5LjkyNjEgMzcuNjIxNyAyMC4zMzcxIDM3LjE2MzQgMjAuNjQ3N0MzNi43MDg4IDIwLjk1ODMgMzYuMTUzOSAyMS4xMTM2IDM1LjQ5ODYgMjEuMTEzNkMzNC45MTUyIDIxLjExMzYgMzQuNDAyIDIwLjk4MTEgMzMuOTU4OCAyMC43MTU5QzMzLjUxNTYgMjAuNDUwOCAzMy4xNjkgMjAuMDczOSAzMi45MTkgMTkuNTg1MkMzMi42NzI4IDE5LjA5NjYgMzIuNTQ3OCAxOC41MTE0IDMyLjU0NCAxNy44Mjk1VjEyLjI3MjdIMzQuOTY0NVYxNy4zOTc3QzM0Ljk2ODMgMTcuOTEyOSAzNS4xMDY1IDE4LjMyMD'+
			'EgMzUuMzc5MyAxOC42MTkzQzM1LjY1MiAxOC45MTg2IDM2LjAxNzUgMTkuMDY4MiAzNi40NzU5IDE5LjA2ODJDMzYuNzY3NSAxOS4wNjgyIDM3LjA0MDIgMTkuMDAxOSAzNy4yOTQgMTguODY5M0MzNy41NDc4IDE4LjczMyAzNy43NTI0IDE4LjUzMjIgMzcuOTA3NyAxOC4yNjdDMzguMDY2OCAxOC4wMDE5IDM4LjE0NDQgMTcuNjc0MiAzOC4xNDA2IDE3LjI4NDFaTTQzLjk5MTUgMjQuMjcyN0M0My42ODQ3IDI0LjI3MjcgNDMuMzk2OCAyNC4yNDgxIDQzLjEyNzggMjQuMTk4OUM0Mi44NjI3IDI0LjE1MzQgNDIuNjQzIDI0LjA5NDcgNDIuNDY4OCAyNC4wMjI3TDQzLjAxNDIgMjIuMjE1OUM0My4y'+
			'OTgzIDIyLjMwMyA0My41NTQgMjIuMzUwNCA0My43ODEyIDIyLjM1OEM0NC4wMTIzIDIyLjM2NTUgNDQuMjExMiAyMi4zMTI1IDQ0LjM3NzggMjIuMTk4OUM0NC41NDgzIDIyLjA4NTIgNDQuNjg2NiAyMS44OTIgNDQuNzkyNiAyMS42MTkzTDQ0LjkzNDcgMjEuMjVMNDEuODA0IDEyLjI3MjdINDQuMzQ5NEw0Ni4xNTYyIDE4LjY4MThINDYuMjQ3Mkw0OC4wNzEgMTIuMjcyN0g1MC42MzM1TDQ3LjI0MTUgMjEuOTQzMkM0Ny4wNzg2IDIyLjQxMjkgNDYuODU3IDIyLjgyMiA0Ni41NzY3IDIzLjE3MDVDNDYuMzAwMiAyMy41MjI3IDQ1Ljk0OTggMjMuNzkzNiA0NS41MjU2IDIzLjk4M0M0NS4xMDEzID'+
			'I0LjE3NjEgNDQuNTkgMjQuMjcyNyA0My45OTE1IDI0LjI3MjdaTTY1LjM1MzcgOS4zNjM2NFYyMUg2My4yMjg3TDU4LjE2NjIgMTMuNjc2MUg1OC4wODFWMjFINTUuNjIwN1Y5LjM2MzY0SDU3Ljc3OThMNjIuODAyNiAxNi42ODE4SDYyLjkwNDhWOS4zNjM2NEg2NS4zNTM3Wk03MS4yODQxIDIxLjE3MDVDNzAuNDAxNSAyMS4xNzA1IDY5LjYzODMgMjAuOTgzIDY4Ljk5NDMgMjAuNjA4QzY4LjM1NDIgMjAuMjI5MiA2Ny44NTk4IDE5LjcwMjcgNjcuNTExNCAxOS4wMjg0QzY3LjE2MjkgMTguMzUwNCA2Ni45ODg2IDE3LjU2NDQgNjYuOTg4NiAxNi42NzA1QzY2Ljk4ODYgMTUuNzY4OSA2Ny4xNjI5'+
			'IDE0Ljk4MTEgNjcuNTExNCAxNC4zMDY4QzY3Ljg1OTggMTMuNjI4OCA2OC4zNTQyIDEzLjEwMjMgNjguOTk0MyAxMi43MjczQzY5LjYzODMgMTIuMzQ4NSA3MC40MDE1IDEyLjE1OTEgNzEuMjg0MSAxMi4xNTkxQzcyLjE2NjcgMTIuMTU5MSA3Mi45MjggMTIuMzQ4NSA3My41NjgyIDEyLjcyNzNDNzQuMjEyMSAxMy4xMDIzIDc0LjcwODMgMTMuNjI4OCA3NS4wNTY4IDE0LjMwNjhDNzUuNDA1MyAxNC45ODExIDc1LjU3OTUgMTUuNzY4OSA3NS41Nzk1IDE2LjY3MDVDNzUuNTc5NSAxNy41NjQ0IDc1LjQwNTMgMTguMzUwNCA3NS4wNTY4IDE5LjAyODRDNzQuNzA4MyAxOS43MDI3IDc0LjIxMjEgMj'+
			'AuMjI5MiA3My41NjgyIDIwLjYwOEM3Mi45MjggMjAuOTgzIDcyLjE2NjcgMjEuMTcwNSA3MS4yODQxIDIxLjE3MDVaTTcxLjI5NTUgMTkuMjk1NUM3MS42OTcgMTkuMjk1NSA3Mi4wMzIyIDE5LjE4MTggNzIuMzAxMSAxOC45NTQ1QzcyLjU3MDEgMTguNzIzNSA3Mi43NzI3IDE4LjQwOTEgNzIuOTA5MSAxOC4wMTE0QzczLjA0OTIgMTcuNjEzNiA3My4xMTkzIDE3LjE2MSA3My4xMTkzIDE2LjY1MzRDNzMuMTE5MyAxNi4xNDU4IDczLjA0OTIgMTUuNjkzMiA3Mi45MDkxIDE1LjI5NTVDNzIuNzcyNyAxNC44OTc3IDcyLjU3MDEgMTQuNTgzMyA3Mi4zMDExIDE0LjM1MjNDNzIuMDMyMiAxNC4xMjEy'+
			'IDcxLjY5NyAxNC4wMDU3IDcxLjI5NTUgMTQuMDA1N0M3MC44OTAyIDE0LjAwNTcgNzAuNTQ5MiAxNC4xMjEyIDcwLjI3MjcgMTQuMzUyM0M3MCAxNC41ODMzIDY5Ljc5MzYgMTQuODk3NyA2OS42NTM0IDE1LjI5NTVDNjkuNTE3IDE1LjY5MzIgNjkuNDQ4OSAxNi4xNDU4IDY5LjQ0ODkgMTYuNjUzNEM2OS40NDg5IDE3LjE2MSA2OS41MTcgMTcuNjEzNiA2OS42NTM0IDE4LjAxMTRDNjkuNzkzNiAxOC40MDkxIDcwIDE4LjcyMzUgNzAuMjcyNyAxOC45NTQ1QzcwLjU0OTIgMTkuMTgxOCA3MC44OTAyIDE5LjI5NTUgNzEuMjk1NSAxOS4yOTU1Wk03OC42NTYyIDIxTDc2LjI4MTIgMTIuMjcyN0g3OC'+
			'43MzAxTDgwLjA4MjQgMTguMTM2NEg4MC4xNjE5TDgxLjU3MSAxMi4yNzI3SDgzLjk3NDRMODUuNDA2MiAxOC4xMDIzSDg1LjQ4MDFMODYuODA5NyAxMi4yNzI3SDg5LjI1MjhMODYuODgzNSAyMUg4NC4zMjFMODIuODIxIDE1LjUxMTRIODIuNzEzMUw4MS4yMTMxIDIxSDc4LjY1NjJaIi8+Cjwvc3ZnPgo=';
		me._svg_111__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="Svg 11";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 23px;';
		hs+='position : absolute;';
		hs+='right : 5px;';
		hs+='top : calc(50% - ((23px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 90px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_111.ggIsActive=function() {
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
		me._svg_111.onclick=function (e) {
			if (me._svg_111.isDragging()) return;
			player.openUrl("https:\/\/autos.com.pl\/pl\/produkt\/filtr-paliwa-separator-unitruck-ut6012b\/132406","_blank");
			var list=me.findElements("products_list",true);
			while(list.length>0) {
				var e=list.pop();
				e.style.transition='none';
				e.style.visibility='hidden';
				e.ggVisible=false;
			}
		}
		me._svg_111.onmouseover=function (e) {
			me._svg_111__img.style.visibility='hidden';
			me._svg_111__imgo.style.visibility='inherit';
			me.elementMouseOver['svg_111']=true;
		}
		me._svg_111.onmouseout=function (e) {
			me._svg_111__img.style.visibility='inherit';
			me._svg_111__imgo.style.visibility='hidden';
			me.elementMouseOver['svg_111']=false;
		}
		me._svg_111.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['svg_111']) {
				me._svg_111__img.style.visibility='hidden';
				me._svg_111__imgo.style.visibility='inherit';
				me.elementMouseOver['svg_111']=true;
			}
		}
		me._svg_111.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_4_1.appendChild(me._svg_111);
		el=me._svg_131=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._svg_131;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._svg_131__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjMwIiB2aWV3Qm94PSIwIDAgMTEwIDMwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMTAiPgogPHJlY3QgZmlsbD0iI0Y2OTIxRSIgaGVpZ2h0PSIzMCIgcng9IjE1IiB3aWR0aD0iMTEwIi8+CiA8cGF0aCBmaWxsPSJ3aGl0ZSIgZD0iTTM4LjM5NDkgOS4zNjM2NEw0MS4yMDc0IDE4LjIwNDVINDEuMzE1M0w0NC4xMzM1IDkuMzYzNjRINDYuODYwOEw0Mi44NDk0IDIxSDM5LjY3OUwzNS42NjE5IDkuMzYzNjRIMzguMzk0OVpNNDguMjE1OSAyMVYxMi4yNzI3SDUwLjYzNjRWMjFINDguMjE1OVpNNDkuNDMxOCAxMS4xND'+
			'c3QzQ5LjA3MiAxMS4xNDc3IDQ4Ljc2MzMgMTEuMDI4NCA0OC41MDU3IDEwLjc4OThDNDguMjUxOSAxMC41NDczIDQ4LjEyNSAxMC4yNTc2IDQ4LjEyNSA5LjkyMDQ1QzQ4LjEyNSA5LjU4NzEyIDQ4LjI1MTkgOS4zMDExNCA0OC41MDU3IDkuMDYyNUM0OC43NjMzIDguODIwMDggNDkuMDcyIDguNjk4ODYgNDkuNDMxOCA4LjY5ODg2QzQ5Ljc5MTcgOC42OTg4NiA1MC4wOTg1IDguODIwMDggNTAuMzUyMyA5LjA2MjVDNTAuNjA5OCA5LjMwMTE0IDUwLjczODYgOS41ODcxMiA1MC43Mzg2IDkuOTIwNDVDNTAuNzM4NiAxMC4yNTc2IDUwLjYwOTggMTAuNTQ3MyA1MC4zNTIzIDEwLjc4OThDNTAuMDk4'+
			'NSAxMS4wMjg0IDQ5Ljc5MTcgMTEuMTQ3NyA0OS40MzE4IDExLjE0NzdaTTU2LjU1MjYgMjEuMTcwNUM1NS42NTQ4IDIxLjE3MDUgNTQuODgyMSAyMC45ODg2IDU0LjIzNDQgMjAuNjI1QzUzLjU5MDQgMjAuMjU3NiA1My4wOTQyIDE5LjczODYgNTIuNzQ1NyAxOS4wNjgyQzUyLjM5NzMgMTguMzkzOSA1Mi4yMjMgMTcuNTk2NiA1Mi4yMjMgMTYuNjc2MUM1Mi4yMjMgMTUuNzc4NCA1Mi4zOTczIDE0Ljk5MDUgNTIuNzQ1NyAxNC4zMTI1QzUzLjA5NDIgMTMuNjM0NSA1My41ODQ4IDEzLjEwNjEgNTQuMjE3MyAxMi43MjczQzU0Ljg1MzcgMTIuMzQ4NSA1NS41OTk5IDEyLjE1OTEgNTYuNDU2IDEyLj'+
			'E1OTFDNTcuMDMxNyAxMi4xNTkxIDU3LjU2NzcgMTIuMjUxOSA1OC4wNjM5IDEyLjQzNzVDNTguNTYzOSAxMi42MTkzIDU4Ljk5OTUgMTIuODkzOSA1OS4zNzA3IDEzLjI2MTRDNTkuNzQ1NyAxMy42Mjg4IDYwLjAzNzQgMTQuMDkwOSA2MC4yNDU3IDE0LjY0NzdDNjAuNDU0MSAxNS4yMDA4IDYwLjU1ODIgMTUuODQ4NSA2MC41NTgyIDE2LjU5MDlWMTcuMjU1N0g1My4xODg5VjE1Ljc1NTdINTguMjc5OEM1OC4yNzk4IDE1LjQwNzIgNTguMjA0MSAxNS4wOTg1IDU4LjA1MjYgMTQuODI5NUM1Ny45MDEgMTQuNTYwNiA1Ny42OTA4IDE0LjM1MDQgNTcuNDIxOSAxNC4xOTg5QzU3LjE1NjcgMTQuMDQz'+
			'NiA1Ni44NDggMTMuOTY1OSA1Ni40OTU3IDEzLjk2NTlDNTYuMTI4MyAxMy45NjU5IDU1LjgwMjYgMTQuMDUxMSA1NS41MTg1IDE0LjIyMTZDNTUuMjM4MiAxNC4zODgzIDU1LjAxODUgMTQuNjEzNiA1NC44NTk0IDE0Ljg5NzdDNTQuNzAwMyAxNS4xNzggNTQuNjE4OCAxNS40OTA1IDU0LjYxNTEgMTUuODM1MlYxNy4yNjE0QzU0LjYxNTEgMTcuNjkzMiA1NC42OTQ2IDE4LjA2NjMgNTQuODUzNyAxOC4zODA3QzU1LjAxNjYgMTguNjk1MSA1NS4yNDU3IDE4LjkzNzUgNTUuNTQxMiAxOS4xMDhDNTUuODM2NiAxOS4yNzg0IDU2LjE4NyAxOS4zNjM2IDU2LjU5MjMgMTkuMzYzNkM1Ni44NjEzIDE5Lj'+
			'M2MzYgNTcuMTA3NSAxOS4zMjU4IDU3LjMzMSAxOS4yNUM1Ny41NTQ1IDE5LjE3NDIgNTcuNzQ1NyAxOS4wNjA2IDU3LjkwNDggMTguOTA5MUM1OC4wNjM5IDE4Ljc1NzYgNTguMTg1MSAxOC41NzIgNTguMjY4NSAxOC4zNTIzTDYwLjUwNzEgMTguNUM2MC4zOTM1IDE5LjAzNzkgNjAuMTYwNSAxOS41MDc2IDU5LjgwODIgMTkuOTA5MUM1OS40NTk4IDIwLjMwNjggNTkuMDA5IDIwLjYxNzQgNTguNDU2IDIwLjg0MDlDNTcuOTA2NyAyMS4wNjA2IDU3LjI3MjMgMjEuMTcwNSA1Ni41NTI2IDIxLjE3MDVaTTYzLjc5NjkgMjFMNjEuNDIxOSAxMi4yNzI3SDYzLjg3MDdMNjUuMjIzIDE4LjEzNjRINjUu'+
			'MzAyNkw2Ni43MTE2IDEyLjI3MjdINjkuMTE1MUw3MC41NDY5IDE4LjEwMjNINzAuNjIwN0w3MS45NTAzIDEyLjI3MjdINzQuMzkzNUw3Mi4wMjQxIDIxSDY5LjQ2MTZMNjcuOTYxNiAxNS41MTE0SDY3Ljg1MzdMNjYuMzUzNyAyMUg2My43OTY5WiIvPgo8L3N2Zz4K';
		me._svg_131__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._svg_131__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjMwIiB2aWV3Qm94PSIwIDAgMTEwIDMwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMTAiPgogPHJlY3QgZmlsbD0iI0FGNUUwMCIgaGVpZ2h0PSIzMCIgcng9IjE1IiB3aWR0aD0iMTEwIi8+CiA8cGF0aCBmaWxsPSJ3aGl0ZSIgZD0iTTM4LjM5NDkgOS4zNjM2NEw0MS4yMDc0IDE4LjIwNDVINDEuMzE1M0w0NC4xMzM1IDkuMzYzNjRINDYuODYwOEw0Mi44NDk0IDIxSDM5LjY3OUwzNS42NjE5IDkuMzYzNjRIMzguMzk0OVpNNDguMjE1OSAyMVYxMi4yNzI3SDUwLjYzNjRWMjFINDguMjE1OVpNNDkuNDMxOCAxMS4xND'+
			'c3QzQ5LjA3MiAxMS4xNDc3IDQ4Ljc2MzMgMTEuMDI4NCA0OC41MDU3IDEwLjc4OThDNDguMjUxOSAxMC41NDczIDQ4LjEyNSAxMC4yNTc2IDQ4LjEyNSA5LjkyMDQ1QzQ4LjEyNSA5LjU4NzEyIDQ4LjI1MTkgOS4zMDExNCA0OC41MDU3IDkuMDYyNUM0OC43NjMzIDguODIwMDggNDkuMDcyIDguNjk4ODYgNDkuNDMxOCA4LjY5ODg2QzQ5Ljc5MTcgOC42OTg4NiA1MC4wOTg1IDguODIwMDggNTAuMzUyMyA5LjA2MjVDNTAuNjA5OCA5LjMwMTE0IDUwLjczODYgOS41ODcxMiA1MC43Mzg2IDkuOTIwNDVDNTAuNzM4NiAxMC4yNTc2IDUwLjYwOTggMTAuNTQ3MyA1MC4zNTIzIDEwLjc4OThDNTAuMDk4'+
			'NSAxMS4wMjg0IDQ5Ljc5MTcgMTEuMTQ3NyA0OS40MzE4IDExLjE0NzdaTTU2LjU1MjYgMjEuMTcwNUM1NS42NTQ4IDIxLjE3MDUgNTQuODgyMSAyMC45ODg2IDU0LjIzNDQgMjAuNjI1QzUzLjU5MDQgMjAuMjU3NiA1My4wOTQyIDE5LjczODYgNTIuNzQ1NyAxOS4wNjgyQzUyLjM5NzMgMTguMzkzOSA1Mi4yMjMgMTcuNTk2NiA1Mi4yMjMgMTYuNjc2MUM1Mi4yMjMgMTUuNzc4NCA1Mi4zOTczIDE0Ljk5MDUgNTIuNzQ1NyAxNC4zMTI1QzUzLjA5NDIgMTMuNjM0NSA1My41ODQ4IDEzLjEwNjEgNTQuMjE3MyAxMi43MjczQzU0Ljg1MzcgMTIuMzQ4NSA1NS41OTk5IDEyLjE1OTEgNTYuNDU2IDEyLj'+
			'E1OTFDNTcuMDMxNyAxMi4xNTkxIDU3LjU2NzcgMTIuMjUxOSA1OC4wNjM5IDEyLjQzNzVDNTguNTYzOSAxMi42MTkzIDU4Ljk5OTUgMTIuODkzOSA1OS4zNzA3IDEzLjI2MTRDNTkuNzQ1NyAxMy42Mjg4IDYwLjAzNzQgMTQuMDkwOSA2MC4yNDU3IDE0LjY0NzdDNjAuNDU0MSAxNS4yMDA4IDYwLjU1ODIgMTUuODQ4NSA2MC41NTgyIDE2LjU5MDlWMTcuMjU1N0g1My4xODg5VjE1Ljc1NTdINTguMjc5OEM1OC4yNzk4IDE1LjQwNzIgNTguMjA0MSAxNS4wOTg1IDU4LjA1MjYgMTQuODI5NUM1Ny45MDEgMTQuNTYwNiA1Ny42OTA4IDE0LjM1MDQgNTcuNDIxOSAxNC4xOTg5QzU3LjE1NjcgMTQuMDQz'+
			'NiA1Ni44NDggMTMuOTY1OSA1Ni40OTU3IDEzLjk2NTlDNTYuMTI4MyAxMy45NjU5IDU1LjgwMjYgMTQuMDUxMSA1NS41MTg1IDE0LjIyMTZDNTUuMjM4MiAxNC4zODgzIDU1LjAxODUgMTQuNjEzNiA1NC44NTk0IDE0Ljg5NzdDNTQuNzAwMyAxNS4xNzggNTQuNjE4OCAxNS40OTA1IDU0LjYxNTEgMTUuODM1MlYxNy4yNjE0QzU0LjYxNTEgMTcuNjkzMiA1NC42OTQ2IDE4LjA2NjMgNTQuODUzNyAxOC4zODA3QzU1LjAxNjYgMTguNjk1MSA1NS4yNDU3IDE4LjkzNzUgNTUuNTQxMiAxOS4xMDhDNTUuODM2NiAxOS4yNzg0IDU2LjE4NyAxOS4zNjM2IDU2LjU5MjMgMTkuMzYzNkM1Ni44NjEzIDE5Lj'+
			'M2MzYgNTcuMTA3NSAxOS4zMjU4IDU3LjMzMSAxOS4yNUM1Ny41NTQ1IDE5LjE3NDIgNTcuNzQ1NyAxOS4wNjA2IDU3LjkwNDggMTguOTA5MUM1OC4wNjM5IDE4Ljc1NzYgNTguMTg1MSAxOC41NzIgNTguMjY4NSAxOC4zNTIzTDYwLjUwNzEgMTguNUM2MC4zOTM1IDE5LjAzNzkgNjAuMTYwNSAxOS41MDc2IDU5LjgwODIgMTkuOTA5MUM1OS40NTk4IDIwLjMwNjggNTkuMDA5IDIwLjYxNzQgNTguNDU2IDIwLjg0MDlDNTcuOTA2NyAyMS4wNjA2IDU3LjI3MjMgMjEuMTcwNSA1Ni41NTI2IDIxLjE3MDVaTTYzLjc5NjkgMjFMNjEuNDIxOSAxMi4yNzI3SDYzLjg3MDdMNjUuMjIzIDE4LjEzNjRINjUu'+
			'MzAyNkw2Ni43MTE2IDEyLjI3MjdINjkuMTE1MUw3MC41NDY5IDE4LjEwMjNINzAuNjIwN0w3MS45NTAzIDEyLjI3MjdINzQuMzkzNUw3Mi4wMjQxIDIxSDY5LjQ2MTZMNjcuOTYxNiAxNS41MTE0SDY3Ljg1MzdMNjYuMzUzNyAyMUg2My43OTY5WiIvPgo8L3N2Zz4K';
		me._svg_131__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="Svg 13";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 23px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((23px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 90px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_131.ggIsActive=function() {
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
		me._svg_131.onclick=function (e) {
			if (me._svg_131.isDragging()) return;
			player.moveTo("-99.97","3.7","20.74","18.0000");
			var list=me.findElements("products_list",true);
			while(list.length>0) {
				var e=list.pop();
				e.style.transition='none';
				e.style.visibility='hidden';
				e.ggVisible=false;
			}
		}
		me._svg_131.onmouseover=function (e) {
			me._svg_131__img.style.visibility='hidden';
			me._svg_131__imgo.style.visibility='inherit';
			me.elementMouseOver['svg_131']=true;
		}
		me._svg_131.onmouseout=function (e) {
			me._svg_131__img.style.visibility='inherit';
			me._svg_131__imgo.style.visibility='hidden';
			me.elementMouseOver['svg_131']=false;
		}
		me._svg_131.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['svg_131']) {
				me._svg_131__img.style.visibility='hidden';
				me._svg_131__imgo.style.visibility='inherit';
				me.elementMouseOver['svg_131']=true;
			}
		}
		me._svg_131.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_4_1.appendChild(me._svg_131);
		me._product_list_sn70207.appendChild(me._rectangle_4_1);
		me._scrollarea_1__content.appendChild(me._product_list_sn70207);
		el=me._product_list_pl270=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._product_list_pl270;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="product_list_pl270";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle product_list";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #eeeeee;';
		hs+='border-radius : 5px;';
		hs+='cursor : default;';
		hs+='height : 300px;';
		hs+='position : absolute;';
		hs+='right : 748px;';
		hs+='top : 650px;';
		hs+='visibility : inherit;';
		hs+='width : 200px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 0%';
		me._product_list_pl270.ggIsActive=function() {
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
		me._product_list_pl270.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_110=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._image_110;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._image_110__img=document.createElement('img');
		els.className='ggskin ggskin_image_110';
		hs=basePath + 'images/image_110.png';
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
		el.ggId="Image 11";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 180px;';
		hs+='position : absolute;';
		hs+='right : 10px;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 180px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_110.ggIsActive=function() {
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
		me._image_110.ggUpdatePosition=function (useTransition) {
		}
		me._product_list_pl270.appendChild(me._image_110);
		el=me._text_6=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._text_6;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._text_6__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 6";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(102,102,102,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 5px;';
		hs+='top : 199px;';
		hs+='visibility : inherit;';
		hs+='width : 95%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+="text-overflow: ellipsis;";
		els.setAttribute('style',hs);
		me._text_6.ggUpdateText=function() {
			var params = [];
			var hs = player._("Binko pa system outdoor speak", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_6.ggUpdateText();
		el.appendChild(els);
		me._text_6.ggIsActive=function() {
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
		me._text_6.ggUpdatePosition=function (useTransition) {
		}
		me._product_list_pl270.appendChild(me._text_6);
		el=me._text_6_1=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._text_6_1;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._text_6_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 6_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(0,0,0,1);';
		hs+='cursor : default;';
		hs+='height : 21px;';
		hs+='position : absolute;';
		hs+='right : 3px;';
		hs+='top : 222px;';
		hs+='visibility : inherit;';
		hs+='width : 95%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='bottom: 0px;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+="text-overflow: ellipsis;";
		els.setAttribute('style',hs);
		me._text_6_1.ggUpdateText=function() {
			var params = [];
			var hs = player._("<div class=\"ggmarkdown\"><p><strong>$10-$25<\/strong> \/pieces<\/p>\n<div>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_6_1.ggUpdateText();
		el.appendChild(els);
		me._text_6_1.ggIsActive=function() {
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
		me._text_6_1.ggUpdatePosition=function (useTransition) {
		}
		me._product_list_pl270.appendChild(me._text_6_1);
		el=me._text_6_1_1_1=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._text_6_1_1_1;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._text_6_1_1_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 6_1_1_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(0,0,0,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 113px;';
		hs+='top : 245px;';
		hs+='visibility : inherit;';
		hs+='width : 40%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='bottom: 0px;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+="text-overflow: ellipsis;";
		els.setAttribute('style',hs);
		me._text_6_1_1_1.ggUpdateText=function() {
			var params = [];
			var hs = player._("<div class=\"ggmarkdown\"><p>100 pieces<\/p>\n<div>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_6_1_1_1.ggUpdateText();
		el.appendChild(els);
		me._text_6_1_1_1.ggIsActive=function() {
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
		me._text_6_1_1_1.ggUpdatePosition=function (useTransition) {
		}
		me._product_list_pl270.appendChild(me._text_6_1_1_1);
		el=me._text_6_1_1=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._text_6_1_1;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._text_6_1_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 6_1_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(168,168,168,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 45px;';
		hs+='top : 245px;';
		hs+='visibility : inherit;';
		hs+='width : 35%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='bottom: 0px;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+="text-overflow: ellipsis;";
		els.setAttribute('style',hs);
		me._text_6_1_1.ggUpdateText=function() {
			var params = [];
			var hs = player._("<div class=\"ggmarkdown\"><p>(MOQ)<\/p>\n<div>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_6_1_1.ggUpdateText();
		el.appendChild(els);
		me._text_6_1_1.ggIsActive=function() {
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
		me._text_6_1_1.ggUpdatePosition=function (useTransition) {
		}
		me._product_list_pl270.appendChild(me._text_6_1_1);
		el=me._rectangle_4=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._rectangle_4;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="Rectangle 4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 30px;';
		hs+='position : absolute;';
		hs+='right : 5px;';
		hs+='top : 265px;';
		hs+='visibility : inherit;';
		hs+='width : 95%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_4.ggIsActive=function() {
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
		me._rectangle_4.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_110=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._svg_110;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._svg_110__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjMwIiB2aWV3Qm94PSIwIDAgMTEwIDMwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMTAiPgogPHJlY3QgZmlsbD0iIzE5Mjg0NSIgaGVpZ2h0PSIzMCIgcng9IjE1IiB3aWR0aD0iMTEwIi8+CiA8cGF0aCBmaWxsPSJ3aGl0ZSIgZD0iTTIyLjAxMTQgMjFWOS4zNjM2NEgyNi42NzA1QzI3LjUyNjUgOS4zNjM2NCAyOC4yNDA1IDkuNDkwNTMgMjguODEyNSA5Ljc0NDMyQzI5LjM4NDUgOS45OTgxMSAyOS44MTQ0IDEwLjM1MDQgMzAuMTAyMyAxMC44MDExQzMwLjM5MDIgMTEuMjQ4MSAzMC41MzQxIDExLjc2MzMgMzAuNT'+
			'M0MSAxMi4zNDY2QzMwLjUzNDEgMTIuODAxMSAzMC40NDMyIDEzLjIwMDggMzAuMjYxNCAxMy41NDU1QzMwLjA3OTUgMTMuODg2NCAyOS44Mjk1IDE0LjE2NjcgMjkuNTExNCAxNC4zODY0QzI5LjE5NyAxNC42MDIzIDI4LjgzNzEgMTQuNzU1NyAyOC40MzE4IDE0Ljg0NjZWMTQuOTYwMkMyOC44NzUgMTQuOTc5MiAyOS4yODk4IDE1LjEwNDIgMjkuNjc2MSAxNS4zMzUyQzMwLjA2NjMgMTUuNTY2MyAzMC4zODI2IDE1Ljg5MDIgMzAuNjI1IDE2LjMwNjhDMzAuODY3NCAxNi43MTk3IDMwLjk4ODYgMTcuMjEyMSAzMC45ODg2IDE3Ljc4NDFDMzAuOTg4NiAxOC40MDE1IDMwLjgzNTIgMTguOTUyNyAz'+
			'MC41Mjg0IDE5LjQzNzVDMzAuMjI1NCAxOS45MTg2IDI5Ljc3NjUgMjAuMjk5MiAyOS4xODE4IDIwLjU3OTVDMjguNTg3MSAyMC44NTk4IDI3Ljg1NDIgMjEgMjYuOTgzIDIxSDIyLjAxMTRaTTI0LjQ3MTYgMTguOTg4NkgyNi40NzczQzI3LjE2MjkgMTguOTg4NiAyNy42NjI5IDE4Ljg1OCAyNy45NzczIDE4LjU5NjZDMjguMjkxNyAxOC4zMzE0IDI4LjQ0ODkgMTcuOTc5MiAyOC40NDg5IDE3LjUzOThDMjguNDQ4OSAxNy4yMTc4IDI4LjM3MTIgMTYuOTMzNyAyOC4yMTU5IDE2LjY4NzVDMjguMDYwNiAxNi40NDEzIDI3LjgzOSAxNi4yNDgxIDI3LjU1MTEgMTYuMTA4QzI3LjI2NyAxNS45Njc4ID'+
			'I2LjkyOCAxNS44OTc3IDI2LjUzNDEgMTUuODk3N0gyNC40NzE2VjE4Ljk4ODZaTTI0LjQ3MTYgMTQuMjMzSDI2LjI5NTVDMjYuNjMyNiAxNC4yMzMgMjYuOTMxOCAxNC4xNzQyIDI3LjE5MzIgMTQuMDU2OEMyNy40NTgzIDEzLjkzNTYgMjcuNjY2NyAxMy43NjUyIDI3LjgxODIgMTMuNTQ1NUMyNy45NzM1IDEzLjMyNTggMjguMDUxMSAxMy4wNjI1IDI4LjA1MTEgMTIuNzU1N0MyOC4wNTExIDEyLjMzNTIgMjcuOTAxNSAxMS45OTYyIDI3LjYwMjMgMTEuNzM4NkMyNy4zMDY4IDExLjQ4MTEgMjYuODg2NCAxMS4zNTIzIDI2LjM0MDkgMTEuMzUyM0gyNC40NzE2VjE0LjIzM1pNMzguMTQwNiAxNy4y'+
			'ODQxVjEyLjI3MjdINDAuNTYxMVYyMUgzOC4yMzcyVjE5LjQxNDhIMzguMTQ2M0MzNy45NDkzIDE5LjkyNjEgMzcuNjIxNyAyMC4zMzcxIDM3LjE2MzQgMjAuNjQ3N0MzNi43MDg4IDIwLjk1ODMgMzYuMTUzOSAyMS4xMTM2IDM1LjQ5ODYgMjEuMTEzNkMzNC45MTUyIDIxLjExMzYgMzQuNDAyIDIwLjk4MTEgMzMuOTU4OCAyMC43MTU5QzMzLjUxNTYgMjAuNDUwOCAzMy4xNjkgMjAuMDczOSAzMi45MTkgMTkuNTg1MkMzMi42NzI4IDE5LjA5NjYgMzIuNTQ3OCAxOC41MTE0IDMyLjU0NCAxNy44Mjk1VjEyLjI3MjdIMzQuOTY0NVYxNy4zOTc3QzM0Ljk2ODMgMTcuOTEyOSAzNS4xMDY1IDE4LjMyMD'+
			'EgMzUuMzc5MyAxOC42MTkzQzM1LjY1MiAxOC45MTg2IDM2LjAxNzUgMTkuMDY4MiAzNi40NzU5IDE5LjA2ODJDMzYuNzY3NSAxOS4wNjgyIDM3LjA0MDIgMTkuMDAxOSAzNy4yOTQgMTguODY5M0MzNy41NDc4IDE4LjczMyAzNy43NTI0IDE4LjUzMjIgMzcuOTA3NyAxOC4yNjdDMzguMDY2OCAxOC4wMDE5IDM4LjE0NDQgMTcuNjc0MiAzOC4xNDA2IDE3LjI4NDFaTTQzLjk5MTUgMjQuMjcyN0M0My42ODQ3IDI0LjI3MjcgNDMuMzk2OCAyNC4yNDgxIDQzLjEyNzggMjQuMTk4OUM0Mi44NjI3IDI0LjE1MzQgNDIuNjQzIDI0LjA5NDcgNDIuNDY4OCAyNC4wMjI3TDQzLjAxNDIgMjIuMjE1OUM0My4y'+
			'OTgzIDIyLjMwMyA0My41NTQgMjIuMzUwNCA0My43ODEyIDIyLjM1OEM0NC4wMTIzIDIyLjM2NTUgNDQuMjExMiAyMi4zMTI1IDQ0LjM3NzggMjIuMTk4OUM0NC41NDgzIDIyLjA4NTIgNDQuNjg2NiAyMS44OTIgNDQuNzkyNiAyMS42MTkzTDQ0LjkzNDcgMjEuMjVMNDEuODA0IDEyLjI3MjdINDQuMzQ5NEw0Ni4xNTYyIDE4LjY4MThINDYuMjQ3Mkw0OC4wNzEgMTIuMjcyN0g1MC42MzM1TDQ3LjI0MTUgMjEuOTQzMkM0Ny4wNzg2IDIyLjQxMjkgNDYuODU3IDIyLjgyMiA0Ni41NzY3IDIzLjE3MDVDNDYuMzAwMiAyMy41MjI3IDQ1Ljk0OTggMjMuNzkzNiA0NS41MjU2IDIzLjk4M0M0NS4xMDEzID'+
			'I0LjE3NjEgNDQuNTkgMjQuMjcyNyA0My45OTE1IDI0LjI3MjdaTTY1LjM1MzcgOS4zNjM2NFYyMUg2My4yMjg3TDU4LjE2NjIgMTMuNjc2MUg1OC4wODFWMjFINTUuNjIwN1Y5LjM2MzY0SDU3Ljc3OThMNjIuODAyNiAxNi42ODE4SDYyLjkwNDhWOS4zNjM2NEg2NS4zNTM3Wk03MS4yODQxIDIxLjE3MDVDNzAuNDAxNSAyMS4xNzA1IDY5LjYzODMgMjAuOTgzIDY4Ljk5NDMgMjAuNjA4QzY4LjM1NDIgMjAuMjI5MiA2Ny44NTk4IDE5LjcwMjcgNjcuNTExNCAxOS4wMjg0QzY3LjE2MjkgMTguMzUwNCA2Ni45ODg2IDE3LjU2NDQgNjYuOTg4NiAxNi42NzA1QzY2Ljk4ODYgMTUuNzY4OSA2Ny4xNjI5'+
			'IDE0Ljk4MTEgNjcuNTExNCAxNC4zMDY4QzY3Ljg1OTggMTMuNjI4OCA2OC4zNTQyIDEzLjEwMjMgNjguOTk0MyAxMi43MjczQzY5LjYzODMgMTIuMzQ4NSA3MC40MDE1IDEyLjE1OTEgNzEuMjg0MSAxMi4xNTkxQzcyLjE2NjcgMTIuMTU5MSA3Mi45MjggMTIuMzQ4NSA3My41NjgyIDEyLjcyNzNDNzQuMjEyMSAxMy4xMDIzIDc0LjcwODMgMTMuNjI4OCA3NS4wNTY4IDE0LjMwNjhDNzUuNDA1MyAxNC45ODExIDc1LjU3OTUgMTUuNzY4OSA3NS41Nzk1IDE2LjY3MDVDNzUuNTc5NSAxNy41NjQ0IDc1LjQwNTMgMTguMzUwNCA3NS4wNTY4IDE5LjAyODRDNzQuNzA4MyAxOS43MDI3IDc0LjIxMjEgMj'+
			'AuMjI5MiA3My41NjgyIDIwLjYwOEM3Mi45MjggMjAuOTgzIDcyLjE2NjcgMjEuMTcwNSA3MS4yODQxIDIxLjE3MDVaTTcxLjI5NTUgMTkuMjk1NUM3MS42OTcgMTkuMjk1NSA3Mi4wMzIyIDE5LjE4MTggNzIuMzAxMSAxOC45NTQ1QzcyLjU3MDEgMTguNzIzNSA3Mi43NzI3IDE4LjQwOTEgNzIuOTA5MSAxOC4wMTE0QzczLjA0OTIgMTcuNjEzNiA3My4xMTkzIDE3LjE2MSA3My4xMTkzIDE2LjY1MzRDNzMuMTE5MyAxNi4xNDU4IDczLjA0OTIgMTUuNjkzMiA3Mi45MDkxIDE1LjI5NTVDNzIuNzcyNyAxNC44OTc3IDcyLjU3MDEgMTQuNTgzMyA3Mi4zMDExIDE0LjM1MjNDNzIuMDMyMiAxNC4xMjEy'+
			'IDcxLjY5NyAxNC4wMDU3IDcxLjI5NTUgMTQuMDA1N0M3MC44OTAyIDE0LjAwNTcgNzAuNTQ5MiAxNC4xMjEyIDcwLjI3MjcgMTQuMzUyM0M3MCAxNC41ODMzIDY5Ljc5MzYgMTQuODk3NyA2OS42NTM0IDE1LjI5NTVDNjkuNTE3IDE1LjY5MzIgNjkuNDQ4OSAxNi4xNDU4IDY5LjQ0ODkgMTYuNjUzNEM2OS40NDg5IDE3LjE2MSA2OS41MTcgMTcuNjEzNiA2OS42NTM0IDE4LjAxMTRDNjkuNzkzNiAxOC40MDkxIDcwIDE4LjcyMzUgNzAuMjcyNyAxOC45NTQ1QzcwLjU0OTIgMTkuMTgxOCA3MC44OTAyIDE5LjI5NTUgNzEuMjk1NSAxOS4yOTU1Wk03OC42NTYyIDIxTDc2LjI4MTIgMTIuMjcyN0g3OC'+
			'43MzAxTDgwLjA4MjQgMTguMTM2NEg4MC4xNjE5TDgxLjU3MSAxMi4yNzI3SDgzLjk3NDRMODUuNDA2MiAxOC4xMDIzSDg1LjQ4MDFMODYuODA5NyAxMi4yNzI3SDg5LjI1MjhMODYuODgzNSAyMUg4NC4zMjFMODIuODIxIDE1LjUxMTRIODIuNzEzMUw4MS4yMTMxIDIxSDc4LjY1NjJaIi8+Cjwvc3ZnPgo=';
		me._svg_110__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._svg_110__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjMwIiB2aWV3Qm94PSIwIDAgMTEwIDMwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMTAiPgogPHJlY3QgZmlsbD0iI0QzMzQzNCIgaGVpZ2h0PSIzMCIgcng9IjE1IiB3aWR0aD0iMTEwIi8+CiA8cGF0aCBmaWxsPSJ3aGl0ZSIgZD0iTTIyLjAxMTQgMjFWOS4zNjM2NEgyNi42NzA1QzI3LjUyNjUgOS4zNjM2NCAyOC4yNDA1IDkuNDkwNTMgMjguODEyNSA5Ljc0NDMyQzI5LjM4NDUgOS45OTgxMSAyOS44MTQ0IDEwLjM1MDQgMzAuMTAyMyAxMC44MDExQzMwLjM5MDIgMTEuMjQ4MSAzMC41MzQxIDExLjc2MzMgMzAuNT'+
			'M0MSAxMi4zNDY2QzMwLjUzNDEgMTIuODAxMSAzMC40NDMyIDEzLjIwMDggMzAuMjYxNCAxMy41NDU1QzMwLjA3OTUgMTMuODg2NCAyOS44Mjk1IDE0LjE2NjcgMjkuNTExNCAxNC4zODY0QzI5LjE5NyAxNC42MDIzIDI4LjgzNzEgMTQuNzU1NyAyOC40MzE4IDE0Ljg0NjZWMTQuOTYwMkMyOC44NzUgMTQuOTc5MiAyOS4yODk4IDE1LjEwNDIgMjkuNjc2MSAxNS4zMzUyQzMwLjA2NjMgMTUuNTY2MyAzMC4zODI2IDE1Ljg5MDIgMzAuNjI1IDE2LjMwNjhDMzAuODY3NCAxNi43MTk3IDMwLjk4ODYgMTcuMjEyMSAzMC45ODg2IDE3Ljc4NDFDMzAuOTg4NiAxOC40MDE1IDMwLjgzNTIgMTguOTUyNyAz'+
			'MC41Mjg0IDE5LjQzNzVDMzAuMjI1NCAxOS45MTg2IDI5Ljc3NjUgMjAuMjk5MiAyOS4xODE4IDIwLjU3OTVDMjguNTg3MSAyMC44NTk4IDI3Ljg1NDIgMjEgMjYuOTgzIDIxSDIyLjAxMTRaTTI0LjQ3MTYgMTguOTg4NkgyNi40NzczQzI3LjE2MjkgMTguOTg4NiAyNy42NjI5IDE4Ljg1OCAyNy45NzczIDE4LjU5NjZDMjguMjkxNyAxOC4zMzE0IDI4LjQ0ODkgMTcuOTc5MiAyOC40NDg5IDE3LjUzOThDMjguNDQ4OSAxNy4yMTc4IDI4LjM3MTIgMTYuOTMzNyAyOC4yMTU5IDE2LjY4NzVDMjguMDYwNiAxNi40NDEzIDI3LjgzOSAxNi4yNDgxIDI3LjU1MTEgMTYuMTA4QzI3LjI2NyAxNS45Njc4ID'+
			'I2LjkyOCAxNS44OTc3IDI2LjUzNDEgMTUuODk3N0gyNC40NzE2VjE4Ljk4ODZaTTI0LjQ3MTYgMTQuMjMzSDI2LjI5NTVDMjYuNjMyNiAxNC4yMzMgMjYuOTMxOCAxNC4xNzQyIDI3LjE5MzIgMTQuMDU2OEMyNy40NTgzIDEzLjkzNTYgMjcuNjY2NyAxMy43NjUyIDI3LjgxODIgMTMuNTQ1NUMyNy45NzM1IDEzLjMyNTggMjguMDUxMSAxMy4wNjI1IDI4LjA1MTEgMTIuNzU1N0MyOC4wNTExIDEyLjMzNTIgMjcuOTAxNSAxMS45OTYyIDI3LjYwMjMgMTEuNzM4NkMyNy4zMDY4IDExLjQ4MTEgMjYuODg2NCAxMS4zNTIzIDI2LjM0MDkgMTEuMzUyM0gyNC40NzE2VjE0LjIzM1pNMzguMTQwNiAxNy4y'+
			'ODQxVjEyLjI3MjdINDAuNTYxMVYyMUgzOC4yMzcyVjE5LjQxNDhIMzguMTQ2M0MzNy45NDkzIDE5LjkyNjEgMzcuNjIxNyAyMC4zMzcxIDM3LjE2MzQgMjAuNjQ3N0MzNi43MDg4IDIwLjk1ODMgMzYuMTUzOSAyMS4xMTM2IDM1LjQ5ODYgMjEuMTEzNkMzNC45MTUyIDIxLjExMzYgMzQuNDAyIDIwLjk4MTEgMzMuOTU4OCAyMC43MTU5QzMzLjUxNTYgMjAuNDUwOCAzMy4xNjkgMjAuMDczOSAzMi45MTkgMTkuNTg1MkMzMi42NzI4IDE5LjA5NjYgMzIuNTQ3OCAxOC41MTE0IDMyLjU0NCAxNy44Mjk1VjEyLjI3MjdIMzQuOTY0NVYxNy4zOTc3QzM0Ljk2ODMgMTcuOTEyOSAzNS4xMDY1IDE4LjMyMD'+
			'EgMzUuMzc5MyAxOC42MTkzQzM1LjY1MiAxOC45MTg2IDM2LjAxNzUgMTkuMDY4MiAzNi40NzU5IDE5LjA2ODJDMzYuNzY3NSAxOS4wNjgyIDM3LjA0MDIgMTkuMDAxOSAzNy4yOTQgMTguODY5M0MzNy41NDc4IDE4LjczMyAzNy43NTI0IDE4LjUzMjIgMzcuOTA3NyAxOC4yNjdDMzguMDY2OCAxOC4wMDE5IDM4LjE0NDQgMTcuNjc0MiAzOC4xNDA2IDE3LjI4NDFaTTQzLjk5MTUgMjQuMjcyN0M0My42ODQ3IDI0LjI3MjcgNDMuMzk2OCAyNC4yNDgxIDQzLjEyNzggMjQuMTk4OUM0Mi44NjI3IDI0LjE1MzQgNDIuNjQzIDI0LjA5NDcgNDIuNDY4OCAyNC4wMjI3TDQzLjAxNDIgMjIuMjE1OUM0My4y'+
			'OTgzIDIyLjMwMyA0My41NTQgMjIuMzUwNCA0My43ODEyIDIyLjM1OEM0NC4wMTIzIDIyLjM2NTUgNDQuMjExMiAyMi4zMTI1IDQ0LjM3NzggMjIuMTk4OUM0NC41NDgzIDIyLjA4NTIgNDQuNjg2NiAyMS44OTIgNDQuNzkyNiAyMS42MTkzTDQ0LjkzNDcgMjEuMjVMNDEuODA0IDEyLjI3MjdINDQuMzQ5NEw0Ni4xNTYyIDE4LjY4MThINDYuMjQ3Mkw0OC4wNzEgMTIuMjcyN0g1MC42MzM1TDQ3LjI0MTUgMjEuOTQzMkM0Ny4wNzg2IDIyLjQxMjkgNDYuODU3IDIyLjgyMiA0Ni41NzY3IDIzLjE3MDVDNDYuMzAwMiAyMy41MjI3IDQ1Ljk0OTggMjMuNzkzNiA0NS41MjU2IDIzLjk4M0M0NS4xMDEzID'+
			'I0LjE3NjEgNDQuNTkgMjQuMjcyNyA0My45OTE1IDI0LjI3MjdaTTY1LjM1MzcgOS4zNjM2NFYyMUg2My4yMjg3TDU4LjE2NjIgMTMuNjc2MUg1OC4wODFWMjFINTUuNjIwN1Y5LjM2MzY0SDU3Ljc3OThMNjIuODAyNiAxNi42ODE4SDYyLjkwNDhWOS4zNjM2NEg2NS4zNTM3Wk03MS4yODQxIDIxLjE3MDVDNzAuNDAxNSAyMS4xNzA1IDY5LjYzODMgMjAuOTgzIDY4Ljk5NDMgMjAuNjA4QzY4LjM1NDIgMjAuMjI5MiA2Ny44NTk4IDE5LjcwMjcgNjcuNTExNCAxOS4wMjg0QzY3LjE2MjkgMTguMzUwNCA2Ni45ODg2IDE3LjU2NDQgNjYuOTg4NiAxNi42NzA1QzY2Ljk4ODYgMTUuNzY4OSA2Ny4xNjI5'+
			'IDE0Ljk4MTEgNjcuNTExNCAxNC4zMDY4QzY3Ljg1OTggMTMuNjI4OCA2OC4zNTQyIDEzLjEwMjMgNjguOTk0MyAxMi43MjczQzY5LjYzODMgMTIuMzQ4NSA3MC40MDE1IDEyLjE1OTEgNzEuMjg0MSAxMi4xNTkxQzcyLjE2NjcgMTIuMTU5MSA3Mi45MjggMTIuMzQ4NSA3My41NjgyIDEyLjcyNzNDNzQuMjEyMSAxMy4xMDIzIDc0LjcwODMgMTMuNjI4OCA3NS4wNTY4IDE0LjMwNjhDNzUuNDA1MyAxNC45ODExIDc1LjU3OTUgMTUuNzY4OSA3NS41Nzk1IDE2LjY3MDVDNzUuNTc5NSAxNy41NjQ0IDc1LjQwNTMgMTguMzUwNCA3NS4wNTY4IDE5LjAyODRDNzQuNzA4MyAxOS43MDI3IDc0LjIxMjEgMj'+
			'AuMjI5MiA3My41NjgyIDIwLjYwOEM3Mi45MjggMjAuOTgzIDcyLjE2NjcgMjEuMTcwNSA3MS4yODQxIDIxLjE3MDVaTTcxLjI5NTUgMTkuMjk1NUM3MS42OTcgMTkuMjk1NSA3Mi4wMzIyIDE5LjE4MTggNzIuMzAxMSAxOC45NTQ1QzcyLjU3MDEgMTguNzIzNSA3Mi43NzI3IDE4LjQwOTEgNzIuOTA5MSAxOC4wMTE0QzczLjA0OTIgMTcuNjEzNiA3My4xMTkzIDE3LjE2MSA3My4xMTkzIDE2LjY1MzRDNzMuMTE5MyAxNi4xNDU4IDczLjA0OTIgMTUuNjkzMiA3Mi45MDkxIDE1LjI5NTVDNzIuNzcyNyAxNC44OTc3IDcyLjU3MDEgMTQuNTgzMyA3Mi4zMDExIDE0LjM1MjNDNzIuMDMyMiAxNC4xMjEy'+
			'IDcxLjY5NyAxNC4wMDU3IDcxLjI5NTUgMTQuMDA1N0M3MC44OTAyIDE0LjAwNTcgNzAuNTQ5MiAxNC4xMjEyIDcwLjI3MjcgMTQuMzUyM0M3MCAxNC41ODMzIDY5Ljc5MzYgMTQuODk3NyA2OS42NTM0IDE1LjI5NTVDNjkuNTE3IDE1LjY5MzIgNjkuNDQ4OSAxNi4xNDU4IDY5LjQ0ODkgMTYuNjUzNEM2OS40NDg5IDE3LjE2MSA2OS41MTcgMTcuNjEzNiA2OS42NTM0IDE4LjAxMTRDNjkuNzkzNiAxOC40MDkxIDcwIDE4LjcyMzUgNzAuMjcyNyAxOC45NTQ1QzcwLjU0OTIgMTkuMTgxOCA3MC44OTAyIDE5LjI5NTUgNzEuMjk1NSAxOS4yOTU1Wk03OC42NTYyIDIxTDc2LjI4MTIgMTIuMjcyN0g3OC'+
			'43MzAxTDgwLjA4MjQgMTguMTM2NEg4MC4xNjE5TDgxLjU3MSAxMi4yNzI3SDgzLjk3NDRMODUuNDA2MiAxOC4xMDIzSDg1LjQ4MDFMODYuODA5NyAxMi4yNzI3SDg5LjI1MjhMODYuODgzNSAyMUg4NC4zMjFMODIuODIxIDE1LjUxMTRIODIuNzEzMUw4MS4yMTMxIDIxSDc4LjY1NjJaIi8+Cjwvc3ZnPgo=';
		me._svg_110__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="Svg 11";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 23px;';
		hs+='position : absolute;';
		hs+='right : 5px;';
		hs+='top : 4px;';
		hs+='visibility : inherit;';
		hs+='width : 90px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_110.ggIsActive=function() {
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
		me._svg_110.onclick=function (e) {
			if (me._svg_110.isDragging()) return;
			player.openUrl("https:\/\/catalog.mann-filter.com\/EU\/eng\/catalog\/MANN-FILTER%20Katalog%20Europa\/Fuel%20Filter\/PL%20270%20x","_blank");
			var list=me.findElements("products_list",true);
			while(list.length>0) {
				var e=list.pop();
				e.style.transition='none';
				e.style.visibility='hidden';
				e.ggVisible=false;
			}
		}
		me._svg_110.onmouseover=function (e) {
			me._svg_110__img.style.visibility='hidden';
			me._svg_110__imgo.style.visibility='inherit';
			me.elementMouseOver['svg_110']=true;
		}
		me._svg_110.onmouseout=function (e) {
			me._svg_110__img.style.visibility='inherit';
			me._svg_110__imgo.style.visibility='hidden';
			me.elementMouseOver['svg_110']=false;
		}
		me._svg_110.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['svg_110']) {
				me._svg_110__img.style.visibility='hidden';
				me._svg_110__imgo.style.visibility='inherit';
				me.elementMouseOver['svg_110']=true;
			}
		}
		me._svg_110.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_4.appendChild(me._svg_110);
		el=me._svg_130=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._svg_130;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._svg_130__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjMwIiB2aWV3Qm94PSIwIDAgMTEwIDMwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMTAiPgogPHJlY3QgZmlsbD0iI0Y2OTIxRSIgaGVpZ2h0PSIzMCIgcng9IjE1IiB3aWR0aD0iMTEwIi8+CiA8cGF0aCBmaWxsPSJ3aGl0ZSIgZD0iTTM4LjM5NDkgOS4zNjM2NEw0MS4yMDc0IDE4LjIwNDVINDEuMzE1M0w0NC4xMzM1IDkuMzYzNjRINDYuODYwOEw0Mi44NDk0IDIxSDM5LjY3OUwzNS42NjE5IDkuMzYzNjRIMzguMzk0OVpNNDguMjE1OSAyMVYxMi4yNzI3SDUwLjYzNjRWMjFINDguMjE1OVpNNDkuNDMxOCAxMS4xND'+
			'c3QzQ5LjA3MiAxMS4xNDc3IDQ4Ljc2MzMgMTEuMDI4NCA0OC41MDU3IDEwLjc4OThDNDguMjUxOSAxMC41NDczIDQ4LjEyNSAxMC4yNTc2IDQ4LjEyNSA5LjkyMDQ1QzQ4LjEyNSA5LjU4NzEyIDQ4LjI1MTkgOS4zMDExNCA0OC41MDU3IDkuMDYyNUM0OC43NjMzIDguODIwMDggNDkuMDcyIDguNjk4ODYgNDkuNDMxOCA4LjY5ODg2QzQ5Ljc5MTcgOC42OTg4NiA1MC4wOTg1IDguODIwMDggNTAuMzUyMyA5LjA2MjVDNTAuNjA5OCA5LjMwMTE0IDUwLjczODYgOS41ODcxMiA1MC43Mzg2IDkuOTIwNDVDNTAuNzM4NiAxMC4yNTc2IDUwLjYwOTggMTAuNTQ3MyA1MC4zNTIzIDEwLjc4OThDNTAuMDk4'+
			'NSAxMS4wMjg0IDQ5Ljc5MTcgMTEuMTQ3NyA0OS40MzE4IDExLjE0NzdaTTU2LjU1MjYgMjEuMTcwNUM1NS42NTQ4IDIxLjE3MDUgNTQuODgyMSAyMC45ODg2IDU0LjIzNDQgMjAuNjI1QzUzLjU5MDQgMjAuMjU3NiA1My4wOTQyIDE5LjczODYgNTIuNzQ1NyAxOS4wNjgyQzUyLjM5NzMgMTguMzkzOSA1Mi4yMjMgMTcuNTk2NiA1Mi4yMjMgMTYuNjc2MUM1Mi4yMjMgMTUuNzc4NCA1Mi4zOTczIDE0Ljk5MDUgNTIuNzQ1NyAxNC4zMTI1QzUzLjA5NDIgMTMuNjM0NSA1My41ODQ4IDEzLjEwNjEgNTQuMjE3MyAxMi43MjczQzU0Ljg1MzcgMTIuMzQ4NSA1NS41OTk5IDEyLjE1OTEgNTYuNDU2IDEyLj'+
			'E1OTFDNTcuMDMxNyAxMi4xNTkxIDU3LjU2NzcgMTIuMjUxOSA1OC4wNjM5IDEyLjQzNzVDNTguNTYzOSAxMi42MTkzIDU4Ljk5OTUgMTIuODkzOSA1OS4zNzA3IDEzLjI2MTRDNTkuNzQ1NyAxMy42Mjg4IDYwLjAzNzQgMTQuMDkwOSA2MC4yNDU3IDE0LjY0NzdDNjAuNDU0MSAxNS4yMDA4IDYwLjU1ODIgMTUuODQ4NSA2MC41NTgyIDE2LjU5MDlWMTcuMjU1N0g1My4xODg5VjE1Ljc1NTdINTguMjc5OEM1OC4yNzk4IDE1LjQwNzIgNTguMjA0MSAxNS4wOTg1IDU4LjA1MjYgMTQuODI5NUM1Ny45MDEgMTQuNTYwNiA1Ny42OTA4IDE0LjM1MDQgNTcuNDIxOSAxNC4xOTg5QzU3LjE1NjcgMTQuMDQz'+
			'NiA1Ni44NDggMTMuOTY1OSA1Ni40OTU3IDEzLjk2NTlDNTYuMTI4MyAxMy45NjU5IDU1LjgwMjYgMTQuMDUxMSA1NS41MTg1IDE0LjIyMTZDNTUuMjM4MiAxNC4zODgzIDU1LjAxODUgMTQuNjEzNiA1NC44NTk0IDE0Ljg5NzdDNTQuNzAwMyAxNS4xNzggNTQuNjE4OCAxNS40OTA1IDU0LjYxNTEgMTUuODM1MlYxNy4yNjE0QzU0LjYxNTEgMTcuNjkzMiA1NC42OTQ2IDE4LjA2NjMgNTQuODUzNyAxOC4zODA3QzU1LjAxNjYgMTguNjk1MSA1NS4yNDU3IDE4LjkzNzUgNTUuNTQxMiAxOS4xMDhDNTUuODM2NiAxOS4yNzg0IDU2LjE4NyAxOS4zNjM2IDU2LjU5MjMgMTkuMzYzNkM1Ni44NjEzIDE5Lj'+
			'M2MzYgNTcuMTA3NSAxOS4zMjU4IDU3LjMzMSAxOS4yNUM1Ny41NTQ1IDE5LjE3NDIgNTcuNzQ1NyAxOS4wNjA2IDU3LjkwNDggMTguOTA5MUM1OC4wNjM5IDE4Ljc1NzYgNTguMTg1MSAxOC41NzIgNTguMjY4NSAxOC4zNTIzTDYwLjUwNzEgMTguNUM2MC4zOTM1IDE5LjAzNzkgNjAuMTYwNSAxOS41MDc2IDU5LjgwODIgMTkuOTA5MUM1OS40NTk4IDIwLjMwNjggNTkuMDA5IDIwLjYxNzQgNTguNDU2IDIwLjg0MDlDNTcuOTA2NyAyMS4wNjA2IDU3LjI3MjMgMjEuMTcwNSA1Ni41NTI2IDIxLjE3MDVaTTYzLjc5NjkgMjFMNjEuNDIxOSAxMi4yNzI3SDYzLjg3MDdMNjUuMjIzIDE4LjEzNjRINjUu'+
			'MzAyNkw2Ni43MTE2IDEyLjI3MjdINjkuMTE1MUw3MC41NDY5IDE4LjEwMjNINzAuNjIwN0w3MS45NTAzIDEyLjI3MjdINzQuMzkzNUw3Mi4wMjQxIDIxSDY5LjQ2MTZMNjcuOTYxNiAxNS41MTE0SDY3Ljg1MzdMNjYuMzUzNyAyMUg2My43OTY5WiIvPgo8L3N2Zz4K';
		me._svg_130__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._svg_130__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjMwIiB2aWV3Qm94PSIwIDAgMTEwIDMwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMTAiPgogPHJlY3QgZmlsbD0iI0FGNUUwMCIgaGVpZ2h0PSIzMCIgcng9IjE1IiB3aWR0aD0iMTEwIi8+CiA8cGF0aCBmaWxsPSJ3aGl0ZSIgZD0iTTM4LjM5NDkgOS4zNjM2NEw0MS4yMDc0IDE4LjIwNDVINDEuMzE1M0w0NC4xMzM1IDkuMzYzNjRINDYuODYwOEw0Mi44NDk0IDIxSDM5LjY3OUwzNS42NjE5IDkuMzYzNjRIMzguMzk0OVpNNDguMjE1OSAyMVYxMi4yNzI3SDUwLjYzNjRWMjFINDguMjE1OVpNNDkuNDMxOCAxMS4xND'+
			'c3QzQ5LjA3MiAxMS4xNDc3IDQ4Ljc2MzMgMTEuMDI4NCA0OC41MDU3IDEwLjc4OThDNDguMjUxOSAxMC41NDczIDQ4LjEyNSAxMC4yNTc2IDQ4LjEyNSA5LjkyMDQ1QzQ4LjEyNSA5LjU4NzEyIDQ4LjI1MTkgOS4zMDExNCA0OC41MDU3IDkuMDYyNUM0OC43NjMzIDguODIwMDggNDkuMDcyIDguNjk4ODYgNDkuNDMxOCA4LjY5ODg2QzQ5Ljc5MTcgOC42OTg4NiA1MC4wOTg1IDguODIwMDggNTAuMzUyMyA5LjA2MjVDNTAuNjA5OCA5LjMwMTE0IDUwLjczODYgOS41ODcxMiA1MC43Mzg2IDkuOTIwNDVDNTAuNzM4NiAxMC4yNTc2IDUwLjYwOTggMTAuNTQ3MyA1MC4zNTIzIDEwLjc4OThDNTAuMDk4'+
			'NSAxMS4wMjg0IDQ5Ljc5MTcgMTEuMTQ3NyA0OS40MzE4IDExLjE0NzdaTTU2LjU1MjYgMjEuMTcwNUM1NS42NTQ4IDIxLjE3MDUgNTQuODgyMSAyMC45ODg2IDU0LjIzNDQgMjAuNjI1QzUzLjU5MDQgMjAuMjU3NiA1My4wOTQyIDE5LjczODYgNTIuNzQ1NyAxOS4wNjgyQzUyLjM5NzMgMTguMzkzOSA1Mi4yMjMgMTcuNTk2NiA1Mi4yMjMgMTYuNjc2MUM1Mi4yMjMgMTUuNzc4NCA1Mi4zOTczIDE0Ljk5MDUgNTIuNzQ1NyAxNC4zMTI1QzUzLjA5NDIgMTMuNjM0NSA1My41ODQ4IDEzLjEwNjEgNTQuMjE3MyAxMi43MjczQzU0Ljg1MzcgMTIuMzQ4NSA1NS41OTk5IDEyLjE1OTEgNTYuNDU2IDEyLj'+
			'E1OTFDNTcuMDMxNyAxMi4xNTkxIDU3LjU2NzcgMTIuMjUxOSA1OC4wNjM5IDEyLjQzNzVDNTguNTYzOSAxMi42MTkzIDU4Ljk5OTUgMTIuODkzOSA1OS4zNzA3IDEzLjI2MTRDNTkuNzQ1NyAxMy42Mjg4IDYwLjAzNzQgMTQuMDkwOSA2MC4yNDU3IDE0LjY0NzdDNjAuNDU0MSAxNS4yMDA4IDYwLjU1ODIgMTUuODQ4NSA2MC41NTgyIDE2LjU5MDlWMTcuMjU1N0g1My4xODg5VjE1Ljc1NTdINTguMjc5OEM1OC4yNzk4IDE1LjQwNzIgNTguMjA0MSAxNS4wOTg1IDU4LjA1MjYgMTQuODI5NUM1Ny45MDEgMTQuNTYwNiA1Ny42OTA4IDE0LjM1MDQgNTcuNDIxOSAxNC4xOTg5QzU3LjE1NjcgMTQuMDQz'+
			'NiA1Ni44NDggMTMuOTY1OSA1Ni40OTU3IDEzLjk2NTlDNTYuMTI4MyAxMy45NjU5IDU1LjgwMjYgMTQuMDUxMSA1NS41MTg1IDE0LjIyMTZDNTUuMjM4MiAxNC4zODgzIDU1LjAxODUgMTQuNjEzNiA1NC44NTk0IDE0Ljg5NzdDNTQuNzAwMyAxNS4xNzggNTQuNjE4OCAxNS40OTA1IDU0LjYxNTEgMTUuODM1MlYxNy4yNjE0QzU0LjYxNTEgMTcuNjkzMiA1NC42OTQ2IDE4LjA2NjMgNTQuODUzNyAxOC4zODA3QzU1LjAxNjYgMTguNjk1MSA1NS4yNDU3IDE4LjkzNzUgNTUuNTQxMiAxOS4xMDhDNTUuODM2NiAxOS4yNzg0IDU2LjE4NyAxOS4zNjM2IDU2LjU5MjMgMTkuMzYzNkM1Ni44NjEzIDE5Lj'+
			'M2MzYgNTcuMTA3NSAxOS4zMjU4IDU3LjMzMSAxOS4yNUM1Ny41NTQ1IDE5LjE3NDIgNTcuNzQ1NyAxOS4wNjA2IDU3LjkwNDggMTguOTA5MUM1OC4wNjM5IDE4Ljc1NzYgNTguMTg1MSAxOC41NzIgNTguMjY4NSAxOC4zNTIzTDYwLjUwNzEgMTguNUM2MC4zOTM1IDE5LjAzNzkgNjAuMTYwNSAxOS41MDc2IDU5LjgwODIgMTkuOTA5MUM1OS40NTk4IDIwLjMwNjggNTkuMDA5IDIwLjYxNzQgNTguNDU2IDIwLjg0MDlDNTcuOTA2NyAyMS4wNjA2IDU3LjI3MjMgMjEuMTcwNSA1Ni41NTI2IDIxLjE3MDVaTTYzLjc5NjkgMjFMNjEuNDIxOSAxMi4yNzI3SDYzLjg3MDdMNjUuMjIzIDE4LjEzNjRINjUu'+
			'MzAyNkw2Ni43MTE2IDEyLjI3MjdINjkuMTE1MUw3MC41NDY5IDE4LjEwMjNINzAuNjIwN0w3MS45NTAzIDEyLjI3MjdINzQuMzkzNUw3Mi4wMjQxIDIxSDY5LjQ2MTZMNjcuOTYxNiAxNS41MTE0SDY3Ljg1MzdMNjYuMzUzNyAyMUg2My43OTY5WiIvPgo8L3N2Zz4K';
		me._svg_130__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="Svg 13";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 23px;';
		hs+='position : absolute;';
		hs+='right : 100px;';
		hs+='top : 4px;';
		hs+='visibility : inherit;';
		hs+='width : 90px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_130.ggIsActive=function() {
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
		me._svg_130.onclick=function (e) {
			if (me._svg_130.isDragging()) return;
			player.moveTo("-87.34","4.51","20.74","18.0000");
			var list=me.findElements("products_list",true);
			while(list.length>0) {
				var e=list.pop();
				e.style.transition='none';
				e.style.visibility='hidden';
				e.ggVisible=false;
			}
		}
		me._svg_130.onmouseover=function (e) {
			me._svg_130__img.style.visibility='hidden';
			me._svg_130__imgo.style.visibility='inherit';
			me.elementMouseOver['svg_130']=true;
		}
		me._svg_130.onmouseout=function (e) {
			me._svg_130__img.style.visibility='inherit';
			me._svg_130__imgo.style.visibility='hidden';
			me.elementMouseOver['svg_130']=false;
		}
		me._svg_130.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['svg_130']) {
				me._svg_130__img.style.visibility='hidden';
				me._svg_130__imgo.style.visibility='inherit';
				me.elementMouseOver['svg_130']=true;
			}
		}
		me._svg_130.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_4.appendChild(me._svg_130);
		me._product_list_pl270.appendChild(me._rectangle_4);
		me._scrollarea_1__content.appendChild(me._product_list_pl270);
		me._products_list.appendChild(me._scrollarea_1);
		me._navbar.appendChild(me._products_list);
		me.divSkin.appendChild(me._navbar);
		el=me._information=document.createElement('div');
		el.ggId="Information";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 2;';
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
		el=me._svg_34=document.createElement('div');
		els=me._svg_34__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjUwIiB2aWV3Qm94PSIwIDAgNTAgNTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjUwIj4KIDxwYXRoIGZpbGw9IiNGNjkyMUUiIGQ9Ik00Mi42ODU2IDcuMzE0MzlDMzIuOTMxIC0yLjQzODEzIDE3LjA2NzQgLTIuNDM4MTMgNy4zMTI3OCA3LjMxNDM5Qy0yLjQzNzU5IDE3LjA2NjkgLTIuNDM3NTkgMzIuOTM0NyA3LjMxMjc4IDQyLjY4NzJDMTIuMTkwMSA0Ny41NjI1IDE4LjU5NTEgNDkuOTk4OSAyNS4wMDAzIDQ5Ljk5ODlDMzEuNDA1NCA0OS45OTg5IDM3LjgwODMgNDcuNTYyNCA0Mi42ODU2IDQyLjY4NzJDNTIuND'+
			'M4MSAzMi45MzQ4IDUyLjQzODEgMTcuMDY2OSA0Mi42ODU2IDcuMzE0MzlaTTM1LjMxNTUgMzIuMzY5OUMzNi4xMzA0IDMzLjE4NDggMzYuMTMwNCAzNC41MDIxIDM1LjMxNTUgMzUuMzE3MUMzNC45MDkgMzUuNzIzNSAzNC4zNzU1IDM1LjkyNzggMzMuODQxOCAzNS45Mjc4QzMzLjMwODMgMzUuOTI3OCAzMi43NzQ2IDM1LjcyMzUgMzIuMzY4MiAzNS4zMTcxTDI1LjAwMDIgMjcuOTQ2OUwxNy42MzQyIDM1LjMxNDlDMTcuMjI1NyAzNS43MjE0IDE2LjY5MjEgMzUuOTI1NyAxNi4xNjA2IDM1LjkyNTdDMTUuNjI3IDM1LjkyNTcgMTUuMDkzNCAzNS43MjE0IDE0LjY4NjkgMzUuMzE0OUMxMy44NzIg'+
			'MzQuNSAxMy44NzIgMzMuMTgwNiAxNC42ODY5IDMyLjM2NzdMMjIuMDUyOSAyNC45OTk3TDE0LjY4NDkgMTcuNjMxN0MxMy44NyAxNi44MTY4IDEzLjg3IDE1LjQ5NzQgMTQuNjg0OSAxNC42ODQ1QzE1LjQ5NzggMTMuODY5NiAxNi44MTcxIDEzLjg2OTYgMTcuNjMyMSAxNC42ODQ1TDI1LjAwMDEgMjIuMDUyNUwzMi4zNjgxIDE0LjY4NDVDMzMuMTgzIDEzLjg2OTYgMzQuNTAwMyAxMy44Njk2IDM1LjMxNTMgMTQuNjg0NUMzNi4xMzAyIDE1LjQ5NzQgMzYuMTMwMiAxNi44MTY4IDM1LjMxNTMgMTcuNjMxN0wyNy45NDczIDI0Ljk5OTdMMzUuMzE1NSAzMi4zNjk5WiIvPgo8L3N2Zz4K';
		me._svg_34__img.setAttribute('src',hs);
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
		me._svg_34.ggIsActive=function() {
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
		me._svg_34.onclick=function (e) {
			me._info1.style.transition='none';
			me._info1.style.visibility='hidden';
			me._info1.ggVisible=false;
		}
		me._svg_34.ggUpdatePosition=function (useTransition) {
		}
		me._info1.appendChild(me._svg_34);
		me._information.appendChild(me._info1);
		me.divSkin.appendChild(me._information);
		el=me._header_3=document.createElement('div');
		el.ggId="Header_3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 2;';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._header_3.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._header_3.ggUpdatePosition=function (useTransition) {
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
		me._header_3.appendChild(me._floorplan01);
		el=me._svg_20=document.createElement('div');
		els=me._svg_20__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjI0Ij4KIDxwYXRoIGQ9Ik0xNSAzbDIuMyAyLjMtMi44OSAyLjg3IDEuNDIgMS40MkwxOC43IDYuNyAyMSA5VjN6TTMgOWwyLjMtMi4zIDIuODcgMi44OSAxLjQyLTEuNDJMNi43IDUuMyA5IDNIM3ptNiAxMmwtMi4zLTIuMyAyLjg5LTIuODctMS40Mi0xLjQyTDUuMyAxNy4zIDMgMTV2NnptMTItNmwtMi4zIDIuMy0yLjg3LTIuODktMS40MiAxLjQyIDIuODkgMi44N0wxNSAyMWg2eiIvPgo8L3N2Zz4K';
		me._svg_20__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._svg_20__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjI0Ij4KIDxwYXRoIGZpbGw9IiNGNjkyMUUiIGQ9Ik0xNSAzTDE3LjMgNS4zTDE0LjQxIDguMTdMMTUuODMgOS41OUwxOC43IDYuN0wyMSA5VjNIMTVaTTMgOUw1LjMgNi43TDguMTcgOS41OUw5LjU5IDguMTdMNi43IDUuM0w5IDNIM1Y5Wk05IDIxTDYuNyAxOC43TDkuNTkgMTUuODNMOC4xNyAxNC40MUw1LjMgMTcuM0wzIDE1VjIxSDlaTTIxIDE1TDE4LjcgMTcuM0wxNS44MyAxNC40MUwxNC40MSAxNS44M0wxNy4zIDE4LjdMMTUgMj'+
			'FIMjFWMTVaIi8+Cjwvc3ZnPgo=';
		me._svg_20__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		ela=me._svg_20__imga=document.createElement('img');
		ela.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjI0Ij4KIDxwYXRoIGZpbGw9IiNGNjkyMUUiIGQ9Ik0xNSAzTDE3LjMgNS4zTDE0LjQxIDguMTdMMTUuODMgOS41OUwxOC43IDYuN0wyMSA5VjNIMTVaTTMgOUw1LjMgNi43TDguMTcgOS41OUw5LjU5IDguMTdMNi43IDUuM0w5IDNIM1Y5Wk05IDIxTDYuNyAxOC43TDkuNTkgMTUuODNMOC4xNyAxNC40MUw1LjMgMTcuM0wzIDE1VjIxSDlaTTIxIDE1TDE4LjcgMTcuM0wxNS44MyAxNC40MUwxNC40MSAxNS44M0wxNy4zIDE4LjdMMTUgMj'+
			'FIMjFWMTVaIi8+Cjwvc3ZnPgo=';
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
		me._header_3.appendChild(me._svg_20);
		el=me._svg_33=document.createElement('div');
		els=me._svg_33__img=document.createElement('img');
		els.className='ggskin ggskin_svg_33';
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
		me._svg_33__img.ggOverSrc=hs;
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
		me._svg_33.ggIsActive=function() {
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
		me._svg_33.onclick=function (e) {
			player.exitFullscreen();
		}
		me._svg_33.onmouseover=function (e) {
			me._svg_33__img.src=me._svg_33__img.ggOverSrc;
			me.elementMouseOver['svg_33']=true;
		}
		me._svg_33.onmouseout=function (e) {
			me._svg_33__img.src=me._svg_33__img.ggNormalSrc;
			me.elementMouseOver['svg_33']=false;
		}
		me._svg_33.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['svg_33']) {
				me._svg_33__img.src=me._svg_33__img.ggOverSrc;
				me.elementMouseOver['svg_33']=true;
			}
		}
		me._svg_33.ggUpdatePosition=function (useTransition) {
		}
		me._header_3.appendChild(me._svg_33);
		me.divSkin.appendChild(me._header_3);
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
		el.ggDx=-40;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 2;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) - 40px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
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
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0%);';
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
		el.ggDx=0.16;
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
		hs+='height : 75%;';
		hs+='left : calc(50% - ((33% + 2px) / 2) + 0.16%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((75% + 2px) / 2) + 0%);';
		hs+='visibility : hidden;';
		hs+='width : 33%;';
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
		me._product1.onmouseover=function (e) {
			var list=me.findElements("Product1_hover",true);
			while(list.length>0) {
				var e=list.pop();
				e.style.transition='none';
				e.style.visibility='hidden';
				e.ggVisible=false;
			}
			me.elementMouseOver['product1']=true;
		}
		me._product1.onmouseout=function (e) {
			me.elementMouseOver['product1']=false;
		}
		me._product1.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['product1']) {
				var list=me.findElements("Product1_hover",true);
				while(list.length>0) {
					var e=list.pop();
					e.style.transition='none';
					e.style.visibility='hidden';
					e.ggVisible=false;
				}
				me.elementMouseOver['product1']=true;
			}
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
		hs+='left : calc(50% - ((99.9053% + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='top : 5%;';
		hs+='visibility : inherit;';
		hs+='width : 99.9053%;';
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
		el=me._svg_32=document.createElement('div');
		els=me._svg_32__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjUwIiB2aWV3Qm94PSIwIDAgNTAgNTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjUwIj4KIDxwYXRoIGZpbGw9IiNGNjkyMUUiIGQ9Ik00Mi42ODU2IDcuMzE0MzlDMzIuOTMxIC0yLjQzODEzIDE3LjA2NzQgLTIuNDM4MTMgNy4zMTI3OCA3LjMxNDM5Qy0yLjQzNzU5IDE3LjA2NjkgLTIuNDM3NTkgMzIuOTM0NyA3LjMxMjc4IDQyLjY4NzJDMTIuMTkwMSA0Ny41NjI1IDE4LjU5NTEgNDkuOTk4OSAyNS4wMDAzIDQ5Ljk5ODlDMzEuNDA1NCA0OS45OTg5IDM3LjgwODMgNDcuNTYyNCA0Mi42ODU2IDQyLjY4NzJDNTIuND'+
			'M4MSAzMi45MzQ4IDUyLjQzODEgMTcuMDY2OSA0Mi42ODU2IDcuMzE0MzlaTTM1LjMxNTUgMzIuMzY5OUMzNi4xMzA0IDMzLjE4NDggMzYuMTMwNCAzNC41MDIxIDM1LjMxNTUgMzUuMzE3MUMzNC45MDkgMzUuNzIzNSAzNC4zNzU1IDM1LjkyNzggMzMuODQxOCAzNS45Mjc4QzMzLjMwODMgMzUuOTI3OCAzMi43NzQ2IDM1LjcyMzUgMzIuMzY4MiAzNS4zMTcxTDI1LjAwMDIgMjcuOTQ2OUwxNy42MzQyIDM1LjMxNDlDMTcuMjI1NyAzNS43MjE0IDE2LjY5MjEgMzUuOTI1NyAxNi4xNjA2IDM1LjkyNTdDMTUuNjI3IDM1LjkyNTcgMTUuMDkzNCAzNS43MjE0IDE0LjY4NjkgMzUuMzE0OUMxMy44NzIg'+
			'MzQuNSAxMy44NzIgMzMuMTgwNiAxNC42ODY5IDMyLjM2NzdMMjIuMDUyOSAyNC45OTk3TDE0LjY4NDkgMTcuNjMxN0MxMy44NyAxNi44MTY4IDEzLjg3IDE1LjQ5NzQgMTQuNjg0OSAxNC42ODQ1QzE1LjQ5NzggMTMuODY5NiAxNi44MTcxIDEzLjg2OTYgMTcuNjMyMSAxNC42ODQ1TDI1LjAwMDEgMjIuMDUyNUwzMi4zNjgxIDE0LjY4NDVDMzMuMTgzIDEzLjg2OTYgMzQuNTAwMyAxMy44Njk2IDM1LjMxNTMgMTQuNjg0NUMzNi4xMzAyIDE1LjQ5NzQgMzYuMTMwMiAxNi44MTY4IDM1LjMxNTMgMTcuNjMxN0wyNy45NDczIDI0Ljk5OTdMMzUuMzE1NSAzMi4zNjk5WiIvPgo8L3N2Zz4K';
		me._svg_32__img.setAttribute('src',hs);
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
		me._svg_32.ggIsActive=function() {
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
		me._svg_32.onclick=function (e) {
			me._product1.style.transition='none';
			me._product1.style.visibility='hidden';
			me._product1.ggVisible=false;
		}
		me._svg_32.ggUpdatePosition=function (useTransition) {
		}
		me._product1.appendChild(me._svg_32);
		el=me._svg_4=document.createElement('div');
		els=me._svg_4__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjU0IiB2aWV3Qm94PSIwIDAgNTQgNTQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjU0Ij4KIDxwYXRoIGZpbGw9IiNGNjkyMUUiIGQ9Ik0yOC42NzUgNTEuNzI0NEM0Mi40NDA3IDUwLjY4ODkgNTIuNzYwNSAzOC42OTAyIDUxLjcyNSAyNC45MjQ3QzUwLjY4OTUgMTEuMTU5MiAzOC42OTA3IDAuODM5NDY2IDI0LjkyNSAxLjg3NUMxMS4xNTkzIDIuOTEwNTMgMC44Mzk0NTYgMTQuOTA5MiAxLjg3NDk4IDI4LjY3NDdDMi45MTA1IDQyLjQ0MDIgMTQuOTA5MyA1Mi43NiAyOC42NzUgNTEuNzI0NFoiLz4KIDxwYXRoIGZpbG'+
			'w9IndoaXRlIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zOC42MDI2IDIxLjQzODNIMTkuMTgzMkwyMS43NjE0IDMyLjI2MzdIMzQuOTY1OEwzOC42MDI2IDIxLjQzODNaTTQxLjE4NCAxOS41ODE4QzQxLjQwNCAxOS44ODU4IDQxLjQ2MzQgMjAuMjgyIDQxLjM0MzUgMjAuNjM2N0wzNi45MTk1IDMzLjgwNjhDMzYuNzU5MiAzNC4yODU5IDM2LjMxMiAzNC42MDg0IDM1LjgwODYgMzQuNjA4NEgyMC44MzU3QzIwLjI5MzEgMzQuNjA4NCAxOS44MjE0IDM0LjIzNTMgMTkuNjk1OCAzMy43MDU2TDE1LjI3NjYgMTUuMTUwNEgxMy4zNzcxQzEyLjcyOTggMTUuMTUwNCAxMi4yMDUxIDE0LjYyNTIgMTIu'+
			'MjA1MSAxMy45NzU3QzEyLjIwNTEgMTMuMzMwOCAxMi43Mjk4IDEyLjgwNTcgMTMuMzc3MSAxMi44MDU3SDE2LjIwMjFDMTYuNzQ0NiAxMi44MDU3IDE3LjIxNjUgMTMuMTc4OCAxNy4zNDIzIDEzLjcwMzlMMTguNjI0NCAxOS4wODlMNDAuMjMyNiAxOS4wOTM2QzQwLjYwOTYgMTkuMDkzNiA0MC45NjM3IDE5LjI3MzIgNDEuMTg0IDE5LjU4MThaTTM0LjY5OSAzNy4xMDk4QzMzLjQ2NjIgMzcuMTA5OCAzMi40NjA4IDM4LjExNCAzMi40NjA4IDM5LjM0ODVDMzIuNDYwOCA0MC41ODMxIDMzLjQ2NjIgNDEuNTg3MyAzNC42OTkgNDEuNTg3M0MzNS45MzE2IDQxLjU4NzMgMzYuOTM2OCA0MC41ODMxID'+
			'M2LjkzNjggMzkuMzQ4NUMzNi45MzY3IDM4LjExNDEgMzUuOTMxNiAzNy4xMDk4IDM0LjY5OSAzNy4xMDk4Wk0yMy42NTE5IDM5LjM0ODVDMjMuNjUxOSA0MC41ODMxIDIyLjY0NjcgNDEuNTg3MyAyMS40MTQxIDQxLjU4NzNDMjAuMTgxNCA0MS41ODczIDE5LjE3NiA0MC41ODMxIDE5LjE3NiAzOS4zNDg1QzE5LjE3NiAzOC4xMTQgMjAuMTgxNCAzNy4xMDk4IDIxLjQxNDEgMzcuMTA5OEMyMi42NDY3IDM3LjEwOTggMjMuNjUxOSAzOC4xMTQxIDIzLjY1MTkgMzkuMzQ4NVoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K';
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
		hs='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUWFRgVFhYYGBgYGBgYHBoZHBwcHBoaHBwZHBwcGR4cJC4lHh4rIRkaJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHz0rJSs0NDQ0MTQ6NDQ0NDQ0NDQ0NDQ2NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABQIDBAYHAQj/xABIEAABAwEEBQcHCAkEAwEAAAABAAIRAwQSITEFQVFhkSJxgaGxwdIGBxNCU5PRFBYyUlRikvAVQ2NygqKj4fEXM3ODJLLCI//EABkBAQADAQEAAAAAAAAAAAAAAAABAgMEBf/EACMRAQEAAgEEAwADAQAAAAAAAAABAhEDEiExUQQTQS'+
			'IyYYH/2gAMAwEAAhEDEQA/AOzIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiIPERRlp05Z6ZLX1A0gwcHHHnAhNbEmihm+U1lOAqgn91/hV1mn7OTAeSdgY8ngGpqz8RuJVFHN0zROReY2U6h/+VV+lqf7T3VXwolnoo52mKIzLxz06nhVB09Q+s78D/CglEUWNO2f65/A/wodO0PrO/A/woJRFFnT1n+ufwP8ACvG6es5yeT/A/wAKaEoiwBpWl9/3VTwq1W0/Z2mHPLTscx47WpJRKIob5zWT2w/C74L35zWT2w4O+CnpvpG57TCKG+c1k9sODvgnznsntm8HfBOm+kdU9plFDfOaye2HB3wT5z2T2w4O+Cnpy9HVj7TK'+
			'KG+dFk9s3g74Lz502P2zeDvgnTl6OvH2mkUNT8p7I4hortkkADESSYAxG1TIUWWeUyy+HqIihIiIgIiIPFp2kdGisHO9KW3X1ZacW4PfjngeK3Bc6tFImpUOMGrVP9R624Jbl2umXLZMe7LsdGlZrr/S3nwJa0A74BzHP+RsFh0l6Um4whsA3nYSdg24a1rFxxEYDPINnHrUvYbfUa26GXg2BhqG/BbcuHbfmqYZa7fice98Tdk7ARPXgo+u6oYaWPx2Fh44rGs+mCJvtkzhjkN6k7PbbwvQAOfE9ELnuNx8xtLL4qn9GtMF73TvI7lZfols5nBV1qznYl1wTsMrxlW8MCXYY4/FV1U9lmtZWMEXiDCw32MRLnnHLUsoVXMP+0TvV1lsa4gFkH85Qnc7Imm2MG3j0T2rMs1RzQQGN6RClQ4kQ0lvOAoW306vrOwGsH'+
			'PnV8ceq6VyvT3XbRpFwnIc0SAsWpbg8Bjmh85SJA3xEkrEbZ8ZInnParjaZmcjtGC3nFjiyudqbp6Oa5ovicMAQABzAR1p+iaWpmMRewnisWx1QyS5ziSdZJwVx+kBP0B2rKzPfatN467rn6Oo5RJgAkkmefUVH6T0NeEtAOoCBP8AhZY0j9zoWPXtj3YDkjcrYfZLtXK4Waau+yFpgiCqXWfcpw2ecTiqTZ9y7JyOW8aCNlVt1lU86zblbdZlacqt40EyhDmnY5p4EFdhC5rXs0NcYyBPALpIK4/l3dldHxsdSqkRFyOoREQEREHi0ynZSZMHF73cXuPetzWt2S3Maxl7AlrTjImRPSr8dsvZXOSzusUabATfaXdWvcs9tqaIDW3RrgQf7q0zSVFxiWSZwkThuzKy21WRMN4K+WW/MVxx14Y5qMLgSydpIE/3WT8r'+
			'Zs6jgqvlQu4NP7t34wIVoUy7EsDN2vpxhV3vynw8baGC8Q0gu9bCf8blQa8nN0bNvOrgs69+TqeyO6l1sM4NgK0+u4n89yyBZ1ULKn8T+TENV52cF46i53q9P+VnCiW7OpetZtjpTqk8J1vyjX2UjMfnoXrLKSs9wGXXil3ap+yo6YwDY+bihsZ3cQs/DOeJGSANTrp0xgfIzs7F4bGdhUjHP0Jfga066dMRhsp2HgvDZjs6lmms2Zz3TCpdWnW3mDpKnryR0xgmzfk4Kk2fZCzKlRgEuexo3kIdJMb69PoEnqKnqy/IjpxR1Wzi66fqu7Ctso4tadw7FrFS203TNRsmcxdWx2AzTYdrGn+ULPktutr4anhkoiLNcREQEREHhXELFpKnVwa8uc0CRLpwGoHMDgu21DAJ2Ar5SouN1rmm64AGRmDuIxCvhydF2rlj1R'+
			'0RjXmeSC0azgOhZVmtVRvJa97IwAD3dWK02w+UtdkBxDwPrievAzvJKmKHlc04PotzxLIOH7pAM9K6L8rC+YynBZ+tkbabTifSvxEHlE4bplKVvrNk+mccI2npnUol2nC9sse0ycYaBcH3sJndzr2lbS2L5L2kTLsHQdcgYZZFZz5vHf7TX/E342U8VPM03XOPpHY4YYcAMF6NP13EzUcBMTdw6hCwKb6ZAAvQczIw6dfCMlbqPszCQ8vwPqkHDacPiujDPhz/AK92OWPLj5Z50xXBltVxOeYIIO7X0LMs3lBVzdjGsBQYt9iHqv8A4p+Kt/L6D3AMLwDhAHacVpcML+M5nlG3UtIufHLG2HSO1Xa+kjTbL3MAy5RgfzFa491xsNa+TlLQ7s7VrNvpvce97mg8CVT6pb2i/wB0k71u9s8pmjKoMPqEZc849Csu0w14'+
			'Drz3A4G9PCJOK0RrbuZbO28wjgCZXjKzr4JfMGRrTLjuPiJx5ccvNbo+3OdNxxjaOuZ6FYa57wYdeJjEHDPhOCw9HVL7SJETysBhwzKzalZrG3R6owbhA3nf18y5MuXLG6dWOGOU2obbakFsuI1w7DiCrQt9QYXngDHAkbP8rBq2kMILnlgxO4jmzOPOqqelmP8AokncSBxxMDdCt9114R9U35ZbdLvbMvJAzEXo55kgZ9So+cDwIORzMRw1QtZtdIOJc0gYnJ04zjErEbUumQ54P3XQt8cpYyyxu2yP0q6QRB4nFP0xUJDWifugY5RqyUBS089pxuvbrD2tJ2/Si8DvUvozyjpskHkYyWuHY5kDqCtlyWTxtnMZvzpkuqWgDFpA2CCdWY155b12HQjps9A7aVM8Whcwbpag4SXQ7ZeMZTOAK6boBwNmoEZeipxjPq'+
			'jXrXLy5ZXW5p0YTGf1u0kiIsWgiIgIiIMa3Oim87GOPAFfLdKgQ0YZADqX05p58WaudlGqeDHL5oY8DblGErPktmlot+jKpJjORvWWKm8cxCHHLDgQeKpMk6WadRwN4EyBqz46wpSzabPJD2Xg3Dk4OOGEzgclgsYdgg9HBemyg7Rz92tRl05dqmbnhP0NLMuyHsaRiAbw52Qcszismlb6dRt1+YJF5rZI65j4Zhao+i5uq8OvoIxV6y1IOHJI1HP4EKk45j3xqbd9q22yMLCPR2hjWkwZx7gcfyVN2mnVgAODsNTnEdF4rRntDyDAB1g5HnHNrU/oi03QGS6crryeTh6jxmNx6lvj8zPCfy7sc/j45+OzLNJ8YuMbA6OpYNayjOeJCzbXWcTgQT9WAHc41O6IUe+oDmY59fMu/g+Zhn/lcfL8XLH/AFhVabBrlY7n'+
			'7I4DvWZaKZALiDA3FYF4bD+eeF1XnxnmuWfGyy8RdZanAQ1zhzEjsXrLVUbk6OfHtVoParrqPJvEYbVGXJx5edLY8XJj42wbSHOJc5xJOslY1wjIqTq0brbxEDaenUMdR4LDc9pyIP52FUl472mmlnLJvu8oFw2HpyXhpE5kK04L2DmHdav04+md5M/a5UoSZMY7o7FUyyMzMlWhUd9YKplbaQrSYz8Z5XO/rJAAwAXd/I502Gz/APCwcBHcuAuqDUV3fyCfNgs5+4Rwc4dy5/l3cjp+HLLdtjREXC9AREQEREEN5Wvu2G1u2Wauf6bl83McI/P5C+i/Lh0aPtUY/wD4VBG2WkR1r5/EuAwgn7oKx5brS+MY7QDtjirjQN/RH52q65jWnlTJ1iYw5pVTabTjfDds4jDgVjtfS0IynuK9bTgQHHPXz7VcdSOp7SYwkO'+
			'AjrCo+TOcJLWuB2GexNmi88Hbzx3qkPBwc2Dty5lWHEYEOHPDv7rxz2z8MO1NoXRUuj6Q6QYUlZNJGA2QQOnrOKiWuO7sPBU+kaMsCouMy8pl03SzWpj+ThqlrsQTtAOvfgrlbRbYhuWx+IH7rjlxK0+jaY1kcxUlZtKPbAa+9udJHQdSx+vLHvjVpZfLItdgcMCwwI5c3iBERhgdW/rXjNBvxcw+kZhN08sfwvwndJWU3ygZgCx2+HB3U4ErMsVtog3mva07CA3nmB3K8+RySd4j68bUM+wgPuMvueYF0sLIM55zPRxWdZvJ60uBD2NaNV8guJ3XSY6eCmf0gx3+6GOY48kiDHOMxntXrLewYMqluuHODg3mvEYblpPkW/h9cjXdIaJtDGlzhLQMSx16BvBx6lGejviNXN2rdqdotAMuuVGaiwgkc5bnwUDbdC1Jf'+
			'Va5jZd/tgxGGQxJxOoxuWuPJ/qmWOvCDq2UDNwM84PQZVhlkDpAJkbu3dvUhVDmtl1N5wkcmZ6lcs9pAYHPY0Xs7odtmIOzuW05spO1ZXiwyvhCVrMWYkgDbyuvDBWTSOEEGcoxW1U6zH8mByoEHWsUMpulrKbmukiWhhBGGJF2c5ynUrY/LynlXL42H415zSDGAOyYPArvnmzdOjbPOY9IOFV645pDyacOVf1EuLgJyJEC9j1Re5117zXNA0dTaHXrrqokiP1jzlJ27VbLnnLOyuHDcLtuKIio1EREBERBrXnBqFujrSRn6OB0lo718/U78Y3Tv1LvHnSq3dF2k7qY41GL58o2oOkE80dP9llyza2LPe9owc6coAA71de8ACAZOGrLeMBtVhlFoE5gbfzmrVSkCRdcQdixmO12WwGRynNjYIHVIXrqpGLiGtBwIEn'+
			'pnuWJRpvAN7ITyv7K4+0iJADhEHDHelk8G2dSqNwIcDOYOP91W5jTu2+sD0ZwsE0y4YZ45ASNaqo2Z8ySMNesZZKkx/wBW2rFnBmHDPIAx0g696pNlHrYScxIV11pgw5nfPZivA9rsniRnA4TKbqNRS2zs+semO5eM5JkNvAHUZncQCDCuOw1E72T1jvC8czZ1YdqmU0G0uJkMIBOV0iMTuBWZTdhF1rjsdAHXdI4lYDrQRgcRs2fBel5OIxGsIM61U2YFgifpNc5nJO5wcJHQsYvb93ocD3qy5++D09iodJ13u3rwTSWcy3OAAa8iMZBg46pnLcqn6VqkQ55cMMHGcjIw5xKiZBwIHZ2Ki65uLT0HFT0xG6nLLpK4ZDGwcwxz2Ts9Yjbq1qVp6Zs5by2VWkmZNx+sHCYjJad6dnrsc07WfAkTxV0VKY+jVeP4DP8A'+
			'7wovHsmTerDpigGlt9rgSTFRhaccwCMANWeSw7bahB9G9lP91zYPOBitMdaWffdnHKDeODkFoPqsA3uc49MSAo+qy72dUv4z7VTfJmo1+Mkh849Oa7J5pz/4AEzFWoOJB71wx1pI+kGD+Ge2V2rzPVL1ifqi0PwgD1aZyC6OO99M7jJ3jf0RFsqIiICIiDVfOJoqvabG6hQZfc57C5pc1stabxxcQMw1cmHmx0gMRZm+8p+JfQaIOA/6daT9gPeU/Eqx5vtKewb7yl4l3pFGonbhI8gNJ+xHvKXiXrPIDSQ/UD3lLxLuqKOmejbhY8gNIfZx7yl4l6fIDSB/Uf1KfjXc0Tpno24aPIDSH2f+pT8afMHSEz8nE/8AJS8S7kidM9G64WfN9b5J+TiT+0p+NUV/Iy3UwHOoQCQPp0zP867uoXyoMUh++E6Z6N1yCh5G2u'+
			'oTcoSBqv0xHF/OrzfN9bxlZwP+yn411HyUdIfzhbEp6Z6N1w13kDpA52ce8peJeHzfW/7OPeU/Gu5oo6Z6N1ws+b+3/Zx7yl4lT/p5b/sw95S8a7sinU9G3B3ebq3kQbMI/wCSl41aPm0t/wBmb7yn4135E1EOAf6baQ+zN95T8a9Pm60nl6Bur9ZT8S76iahtwE+bjSWfyduH7Sn4l0jzaaFtFlo1adoYGXqge0BzXeqATySdgW7omoCIikEREBERAREQEREBERARFbrVLrS7YJQUvrtGBcB0qy7SNIZvHWewKGZZb73PdaCwGBdaWYxrkiVeGiLPrqvd/wBh7igzHaboj1ieZp71E6ZtotDAymBN4El5uiN0Ss1uhrLrAdzvJ7Srg0NZPZ00EXoeobNfFW6Q4ggsde4yAphmnKJ1uHO09yoOh7J7OnwCoOh7J9Vo'+
			'5nEdhQZrNJUjk8cCO0K+20MOTgelQ7tEWfVUc3mqHvKxrRYmtuuZXLrrgbhLTOrOJ1oNnRWLLUvNB/OGtX0BERAREQEREBERAREQEREBERAREQEREBWq1O8CJInWI71dRBCjQf7R/BnhV0aJPtHcGeFSqII1uj3D9Y7gzwqsWN3tHfhZ4VnogwDY3+1d+FnhVDtHvP613BnhUkiCJOiT7V3BnhVs6DPtX8GeFTSIMeyULjQ28XRrMdwCyERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREH/2Q==';
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
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 230px;';
		hs+='left : calc(50% - ((259px + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='top : 17%;';
		hs+='visibility : inherit;';
		hs+='width : 259px;';
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
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 230px;';
		hs+='left : calc(50% - ((300px + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='top : 17%;';
		hs+='visibility : inherit;';
		hs+='width : 300px;';
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
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='z-index: 3;';
		hs+='height : 230px;';
		hs+='left : calc(50% - ((280px + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='top : 17%;';
		hs+='visibility : inherit;';
		hs+='width : 280px;';
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
		hs='data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLWFycm93LXJpZ2h0LWNpcmNsZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMjQiPgogPGNpcmNsZSByPSIxMCIgY3k9IjEyIiBjeD0iMTIiLz4KIDxwb2x5bGluZSBwb2ludHM9IjEyIDE2IDE2IDEyIDEyIDgiLz4KIDxsaW5lIHgxPSI4IiB4Mj0iMTYiIHkxPSIxMiIgeTI9IjEyIi'+
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
		hs='data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLWFycm93LWxlZnQtY2lyY2xlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCI+CiA8Y2lyY2xlIHI9IjEwIiBjeT0iMTIiIGN4PSIxMiIvPgogPHBvbHlsaW5lIHBvaW50cz0iMTIgOCA4IDEyIDEyIDE2Ii8+CiA8bGluZSB4MT0iMTYiIHgyPSI4IiB5MT0iMTIiIHkyPSIxMiIvPg'+
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
		el=me._pl270=document.createElement('div');
		el.ggId="PL270";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle product_pop_up_active";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #f6921e;';
		hs+='border-radius : 5px;';
		hs+='cursor : default;';
		hs+='height : 75%;';
		hs+='left : calc(50% - ((33% + 2px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((75% + 2px) / 2) + 0%);';
		hs+='visibility : hidden;';
		hs+='width : 33%;';
		hs+='pointer-events:auto;';
		hs+='position: fixed;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pl270.ggIsActive=function() {
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
		me._pl270.onmouseover=function (e) {
			var list=me.findElements("PL270_hover",true);
			while(list.length>0) {
				var e=list.pop();
				e.style.transition='none';
				e.style.visibility='hidden';
				e.ggVisible=false;
			}
			me.elementMouseOver['pl270']=true;
		}
		me._pl270.onmouseout=function (e) {
			me.elementMouseOver['pl270']=false;
		}
		me._pl270.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['pl270']) {
				var list=me.findElements("PL270_hover",true);
				while(list.length>0) {
					var e=list.pop();
					e.style.transition='none';
					e.style.visibility='hidden';
					e.ggVisible=false;
				}
				me.elementMouseOver['pl270']=true;
			}
		}
		me._pl270.ggUpdatePosition=function (useTransition) {
		}
		el=me._header_2=document.createElement('div');
		els=me._header_2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Header_2";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(0,0,0,1);';
		hs+='cursor : default;';
		hs+='height : 46px;';
		hs+='left : calc(50% - ((99.9053% + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='top : 5%;';
		hs+='visibility : inherit;';
		hs+='width : 99.9053%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._header_2.ggUpdateText=function() {
			var params = [];
			var hs = player._("<div class=\"ggmarkdown\"><h2>Mann Filter PL270X Fuel\/Water Separator<\/h2>\n<div>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._header_2.ggUpdateText();
		el.appendChild(els);
		me._header_2.ggIsActive=function() {
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
		me._header_2.ggUpdatePosition=function (useTransition) {
		}
		me._pl270.appendChild(me._header_2);
		el=me._video_1_2=document.createElement('div');
		me._video_1_2.seekbars = [];
			me._video_1_2.ggYoutubeApiReady = function() { skin.ggYoutubeApiLoaded = true;}
		me._video_1_2.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._video_1_2.seekbars.length; i++) {
					var seekbar = me.findElements(me._video_1_2.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me._video_1_2.hasChildNodes()) {
				me._video_1_2.removeChild(me._video_1_2.lastChild);
			}
			if(media == '') {
				notifySeekbars();
				if (me._video_1_2.ggVideoNotLoaded == false && me._video_1_2.ggDeactivate && player.isPlaying('video_1_2')) { me._video_1_2.ggDeactivate(); }
				me._video_1_2.ggVideoNotLoaded = true;
				return;
			}
			me._video_1_2.ggVideoNotLoaded = false;
			me._video_1_2__vid=document.createElement('iframe');
			me._video_1_2__vid.className='ggskin ggskin_video';
			var ggYoutubeMedia = media;
			var ggTimeParam = '';
			if (ggYoutubeMedia.indexOf('&') != -1) {
				ggTimeParam = 'start' + media.slice(ggYoutubeMedia.indexOf('&') + 2) + '&amp;';
				ggYoutubeMedia = ggYoutubeMedia.slice(0, ggYoutubeMedia.indexOf('&'));
			}
			var ggVideoParams = '?' + ggTimeParam + 'autoplay=0&amp;controls=0&amp;loop=1&amp;enablejsapi=0&amp;rel=0';
			var ggVideoUrl = 'https://www.youtube.com/embed/' + ggYoutubeMedia + ggVideoParams;
			me._video_1_2__vid.setAttribute('src', ggVideoUrl);
			me._video_1_2__vid.setAttribute('width', '100%');
			me._video_1_2__vid.setAttribute('height', '100%');
			me._video_1_2__vid.setAttribute('allow', 'autoplay');
			me._video_1_2__vid.setAttribute('allowfullscreen', 'true');
			me._video_1_2__vid.setAttribute('style', 'border:none; ; ;');
			me._video_1_2.appendChild(me._video_1_2__vid);
			me._video_1_2.ggVideoSource = media;
			if (skin.ggYoutubeApiLoaded && skin.ggYoutubeApiLoaded == true) {me._video_1_2.ggYoutubeApiReady();}
		}
		el.ggId="Video 1_2";
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
		me._video_1_2.ggIsActive=function() {
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
		me._video_1_2.ggUpdatePosition=function (useTransition) {
		}
		me._pl270.appendChild(me._video_1_2);
		el=me._svg_3_2=document.createElement('div');
		els=me._svg_3_2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjUwIiB2aWV3Qm94PSIwIDAgNTAgNTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjUwIj4KIDxwYXRoIGZpbGw9IiNGNjkyMUUiIGQ9Ik00Mi42ODU2IDcuMzE0MzlDMzIuOTMxIC0yLjQzODEzIDE3LjA2NzQgLTIuNDM4MTMgNy4zMTI3OCA3LjMxNDM5Qy0yLjQzNzU5IDE3LjA2NjkgLTIuNDM3NTkgMzIuOTM0NyA3LjMxMjc4IDQyLjY4NzJDMTIuMTkwMSA0Ny41NjI1IDE4LjU5NTEgNDkuOTk4OSAyNS4wMDAzIDQ5Ljk5ODlDMzEuNDA1NCA0OS45OTg5IDM3LjgwODMgNDcuNTYyNCA0Mi42ODU2IDQyLjY4NzJDNTIuND'+
			'M4MSAzMi45MzQ4IDUyLjQzODEgMTcuMDY2OSA0Mi42ODU2IDcuMzE0MzlaTTM1LjMxNTUgMzIuMzY5OUMzNi4xMzA0IDMzLjE4NDggMzYuMTMwNCAzNC41MDIxIDM1LjMxNTUgMzUuMzE3MUMzNC45MDkgMzUuNzIzNSAzNC4zNzU1IDM1LjkyNzggMzMuODQxOCAzNS45Mjc4QzMzLjMwODMgMzUuOTI3OCAzMi43NzQ2IDM1LjcyMzUgMzIuMzY4MiAzNS4zMTcxTDI1LjAwMDIgMjcuOTQ2OUwxNy42MzQyIDM1LjMxNDlDMTcuMjI1NyAzNS43MjE0IDE2LjY5MjEgMzUuOTI1NyAxNi4xNjA2IDM1LjkyNTdDMTUuNjI3IDM1LjkyNTcgMTUuMDkzNCAzNS43MjE0IDE0LjY4NjkgMzUuMzE0OUMxMy44NzIg'+
			'MzQuNSAxMy44NzIgMzMuMTgwNiAxNC42ODY5IDMyLjM2NzdMMjIuMDUyOSAyNC45OTk3TDE0LjY4NDkgMTcuNjMxN0MxMy44NyAxNi44MTY4IDEzLjg3IDE1LjQ5NzQgMTQuNjg0OSAxNC42ODQ1QzE1LjQ5NzggMTMuODY5NiAxNi44MTcxIDEzLjg2OTYgMTcuNjMyMSAxNC42ODQ1TDI1LjAwMDEgMjIuMDUyNUwzMi4zNjgxIDE0LjY4NDVDMzMuMTgzIDEzLjg2OTYgMzQuNTAwMyAxMy44Njk2IDM1LjMxNTMgMTQuNjg0NUMzNi4xMzAyIDE1LjQ5NzQgMzYuMTMwMiAxNi44MTY4IDM1LjMxNTMgMTcuNjMxN0wyNy45NDczIDI0Ljk5OTdMMzUuMzE1NSAzMi4zNjk5WiIvPgo8L3N2Zz4K';
		me._svg_3_2__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 3_2";
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
		me._svg_3_2.ggIsActive=function() {
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
		me._svg_3_2.onclick=function (e) {
			me._pl270.style.transition='none';
			me._pl270.style.visibility='hidden';
			me._pl270.ggVisible=false;
			(function() {
    var elementsBeforeTarget = document.querySelectorAll('.product_pop_up_active');
    elementsBeforeTarget.forEach(function(element) {
        element.style.visibility = 'hidden';
    });
})();
		}
		me._svg_3_2.ggUpdatePosition=function (useTransition) {
		}
		me._pl270.appendChild(me._svg_3_2);
		el=me._svg_4_2=document.createElement('div');
		els=me._svg_4_2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjU0IiB2aWV3Qm94PSIwIDAgNTQgNTQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjU0Ij4KIDxwYXRoIGZpbGw9IiNGNjkyMUUiIGQ9Ik0yOC42NzUgNTEuNzI0NEM0Mi40NDA3IDUwLjY4ODkgNTIuNzYwNSAzOC42OTAyIDUxLjcyNSAyNC45MjQ3QzUwLjY4OTUgMTEuMTU5MiAzOC42OTA3IDAuODM5NDY2IDI0LjkyNSAxLjg3NUMxMS4xNTkzIDIuOTEwNTMgMC44Mzk0NTYgMTQuOTA5MiAxLjg3NDk4IDI4LjY3NDdDMi45MTA1IDQyLjQ0MDIgMTQuOTA5MyA1Mi43NiAyOC42NzUgNTEuNzI0NFoiLz4KIDxwYXRoIGZpbG'+
			'w9IndoaXRlIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zOC42MDI2IDIxLjQzODNIMTkuMTgzMkwyMS43NjE0IDMyLjI2MzdIMzQuOTY1OEwzOC42MDI2IDIxLjQzODNaTTQxLjE4NCAxOS41ODE4QzQxLjQwNCAxOS44ODU4IDQxLjQ2MzQgMjAuMjgyIDQxLjM0MzUgMjAuNjM2N0wzNi45MTk1IDMzLjgwNjhDMzYuNzU5MiAzNC4yODU5IDM2LjMxMiAzNC42MDg0IDM1LjgwODYgMzQuNjA4NEgyMC44MzU3QzIwLjI5MzEgMzQuNjA4NCAxOS44MjE0IDM0LjIzNTMgMTkuNjk1OCAzMy43MDU2TDE1LjI3NjYgMTUuMTUwNEgxMy4zNzcxQzEyLjcyOTggMTUuMTUwNCAxMi4yMDUxIDE0LjYyNTIgMTIu'+
			'MjA1MSAxMy45NzU3QzEyLjIwNTEgMTMuMzMwOCAxMi43Mjk4IDEyLjgwNTcgMTMuMzc3MSAxMi44MDU3SDE2LjIwMjFDMTYuNzQ0NiAxMi44MDU3IDE3LjIxNjUgMTMuMTc4OCAxNy4zNDIzIDEzLjcwMzlMMTguNjI0NCAxOS4wODlMNDAuMjMyNiAxOS4wOTM2QzQwLjYwOTYgMTkuMDkzNiA0MC45NjM3IDE5LjI3MzIgNDEuMTg0IDE5LjU4MThaTTM0LjY5OSAzNy4xMDk4QzMzLjQ2NjIgMzcuMTA5OCAzMi40NjA4IDM4LjExNCAzMi40NjA4IDM5LjM0ODVDMzIuNDYwOCA0MC41ODMxIDMzLjQ2NjIgNDEuNTg3MyAzNC42OTkgNDEuNTg3M0MzNS45MzE2IDQxLjU4NzMgMzYuOTM2OCA0MC41ODMxID'+
			'M2LjkzNjggMzkuMzQ4NUMzNi45MzY3IDM4LjExNDEgMzUuOTMxNiAzNy4xMDk4IDM0LjY5OSAzNy4xMDk4Wk0yMy42NTE5IDM5LjM0ODVDMjMuNjUxOSA0MC41ODMxIDIyLjY0NjcgNDEuNTg3MyAyMS40MTQxIDQxLjU4NzNDMjAuMTgxNCA0MS41ODczIDE5LjE3NiA0MC41ODMxIDE5LjE3NiAzOS4zNDg1QzE5LjE3NiAzOC4xMTQgMjAuMTgxNCAzNy4xMDk4IDIxLjQxNDEgMzcuMTA5OEMyMi42NDY3IDM3LjEwOTggMjMuNjUxOSAzOC4xMTQxIDIzLjY1MTkgMzkuMzQ4NVoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K';
		me._svg_4_2__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 4_2";
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
		me._svg_4_2.ggIsActive=function() {
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
		me._svg_4_2.onclick=function (e) {
			player.openUrl("https:\/\/catalog.mann-filter.com\/EU\/eng\/catalog\/MANN-FILTER%20Katalog%20Europa\/Fuel%20Filter\/PL%20270%20x","_blank");
		}
		me._svg_4_2.ggUpdatePosition=function (useTransition) {
		}
		me._pl270.appendChild(me._svg_4_2);
		el=me._image_1_2=document.createElement('div');
		els=me._image_1_2__img=document.createElement('img');
		els.className='ggskin ggskin_image_1_2';
		hs=basePath + 'images/image_1_2.png';
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
		el.ggId="Image 1_2";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 230px;';
		hs+='left : calc(50% - ((168px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 17%;';
		hs+='visibility : inherit;';
		hs+='width : 168px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_1_2.ggIsActive=function() {
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
		me._image_1_2.ggUpdatePosition=function (useTransition) {
		}
		me._pl270.appendChild(me._image_1_2);
		el=me._image_2_2=document.createElement('div');
		els=me._image_2_2__img=document.createElement('img');
		els.className='ggskin ggskin_image_2_2';
		hs=basePath + 'images/image_2_2.png';
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
		el.ggId="Image 2_2";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 230px;';
		hs+='left : calc(50% - ((230px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 17%;';
		hs+='visibility : hidden;';
		hs+='width : 230px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_2_2.ggIsActive=function() {
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
		me._image_2_2.ggUpdatePosition=function (useTransition) {
		}
		me._pl270.appendChild(me._image_2_2);
		el=me._svg_2_2=document.createElement('div');
		els=me._svg_2_2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLWFycm93LXJpZ2h0LWNpcmNsZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMjQiPgogPGNpcmNsZSByPSIxMCIgY3k9IjEyIiBjeD0iMTIiLz4KIDxwb2x5bGluZSBwb2ludHM9IjEyIDE2IDE2IDEyIDEyIDgiLz4KIDxsaW5lIHgxPSI4IiB4Mj0iMTYiIHkxPSIxMiIgeTI9IjEyIi'+
			'8+Cjwvc3ZnPgo=';
		me._svg_2_2__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 2_2";
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
		me._svg_2_2.ggIsActive=function() {
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
		me._svg_2_2.onclick=function (e) {
			me._image_2_2.style.transition='none';
			me._image_2_2.style.visibility=(Number(me._image_2_2.style.opacity)>0||!me._image_2_2.style.opacity)?'inherit':'hidden';
			me._image_2_2.ggVisible=true;
			me._image_1_2.style.transition='none';
			me._image_1_2.style.visibility='hidden';
			me._image_1_2.ggVisible=false;
		}
		me._svg_2_2.ggUpdatePosition=function (useTransition) {
		}
		me._pl270.appendChild(me._svg_2_2);
		el=me._svg_5_2=document.createElement('div');
		els=me._svg_5_2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLWFycm93LWxlZnQtY2lyY2xlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCI+CiA8Y2lyY2xlIHI9IjEwIiBjeT0iMTIiIGN4PSIxMiIvPgogPHBvbHlsaW5lIHBvaW50cz0iMTIgOCA4IDEyIDEyIDE2Ii8+CiA8bGluZSB4MT0iMTYiIHgyPSI4IiB5MT0iMTIiIHkyPSIxMiIvPg'+
			'o8L3N2Zz4K';
		me._svg_5_2__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 5_2";
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
		me._svg_5_2.ggIsActive=function() {
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
		me._svg_5_2.onclick=function (e) {
			me._image_1_2.style.transition='none';
			me._image_1_2.style.visibility=(Number(me._image_1_2.style.opacity)>0||!me._image_1_2.style.opacity)?'inherit':'hidden';
			me._image_1_2.ggVisible=true;
			me._image_2_2.style.transition='none';
			me._image_2_2.style.visibility='hidden';
			me._image_2_2.ggVisible=false;
		}
		me._svg_5_2.ggUpdatePosition=function (useTransition) {
		}
		me._pl270.appendChild(me._svg_5_2);
		me._products.appendChild(me._pl270);
		el=me._ut6012=document.createElement('div');
		el.ggId="UT6012";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle product_pop_up_active";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #f6921e;';
		hs+='border-radius : 5px;';
		hs+='cursor : default;';
		hs+='height : 75%;';
		hs+='left : calc(50% - ((33% + 2px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((75% + 2px) / 2) + 0%);';
		hs+='visibility : hidden;';
		hs+='width : 33%;';
		hs+='pointer-events:auto;';
		hs+='position: fixed;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ut6012.ggIsActive=function() {
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
		me._ut6012.onmouseover=function (e) {
			var list=me.findElements("UT6012_hover",true);
			while(list.length>0) {
				var e=list.pop();
				e.style.transition='none';
				e.style.visibility='hidden';
				e.ggVisible=false;
			}
			me.elementMouseOver['ut6012']=true;
		}
		me._ut6012.onmouseout=function (e) {
			me.elementMouseOver['ut6012']=false;
		}
		me._ut6012.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['ut6012']) {
				var list=me.findElements("UT6012_hover",true);
				while(list.length>0) {
					var e=list.pop();
					e.style.transition='none';
					e.style.visibility='hidden';
					e.ggVisible=false;
				}
				me.elementMouseOver['ut6012']=true;
			}
		}
		me._ut6012.ggUpdatePosition=function (useTransition) {
		}
		el=me._header_1_1=document.createElement('div');
		els=me._header_1_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Header_1_1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(0,0,0,1);';
		hs+='cursor : default;';
		hs+='height : 46px;';
		hs+='left : calc(50% - ((99.9053% + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='top : 5%;';
		hs+='visibility : inherit;';
		hs+='width : 99.9053%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._header_1_1.ggUpdateText=function() {
			var params = [];
			var hs = player._("<div class=\"ggmarkdown\"><h2>HIFI FILTER SN 70207 B - Compatible reference FONHO UT 6012<\/h2>\n<div>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._header_1_1.ggUpdateText();
		el.appendChild(els);
		me._header_1_1.ggIsActive=function() {
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
		me._header_1_1.ggUpdatePosition=function (useTransition) {
		}
		me._ut6012.appendChild(me._header_1_1);
		el=me._video_1_1_1=document.createElement('div');
		me._video_1_1_1.seekbars = [];
			me._video_1_1_1.ggYoutubeApiReady = function() { skin.ggYoutubeApiLoaded = true;}
		me._video_1_1_1.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._video_1_1_1.seekbars.length; i++) {
					var seekbar = me.findElements(me._video_1_1_1.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me._video_1_1_1.hasChildNodes()) {
				me._video_1_1_1.removeChild(me._video_1_1_1.lastChild);
			}
			if(media == '') {
				notifySeekbars();
				if (me._video_1_1_1.ggVideoNotLoaded == false && me._video_1_1_1.ggDeactivate && player.isPlaying('video_1_1_1')) { me._video_1_1_1.ggDeactivate(); }
				me._video_1_1_1.ggVideoNotLoaded = true;
				return;
			}
			me._video_1_1_1.ggVideoNotLoaded = false;
			me._video_1_1_1__vid=document.createElement('iframe');
			me._video_1_1_1__vid.className='ggskin ggskin_video';
			var ggYoutubeMedia = media;
			var ggTimeParam = '';
			if (ggYoutubeMedia.indexOf('&') != -1) {
				ggTimeParam = 'start' + media.slice(ggYoutubeMedia.indexOf('&') + 2) + '&amp;';
				ggYoutubeMedia = ggYoutubeMedia.slice(0, ggYoutubeMedia.indexOf('&'));
			}
			var ggVideoParams = '?' + ggTimeParam + 'autoplay=0&amp;controls=0&amp;loop=1&amp;enablejsapi=0&amp;rel=0';
			var ggVideoUrl = 'https://www.youtube.com/embed/' + ggYoutubeMedia + ggVideoParams;
			me._video_1_1_1__vid.setAttribute('src', ggVideoUrl);
			me._video_1_1_1__vid.setAttribute('width', '100%');
			me._video_1_1_1__vid.setAttribute('height', '100%');
			me._video_1_1_1__vid.setAttribute('allow', 'autoplay');
			me._video_1_1_1__vid.setAttribute('allowfullscreen', 'true');
			me._video_1_1_1__vid.setAttribute('style', 'border:none; ; ;');
			me._video_1_1_1.appendChild(me._video_1_1_1__vid);
			me._video_1_1_1.ggVideoSource = media;
			if (skin.ggYoutubeApiLoaded && skin.ggYoutubeApiLoaded == true) {me._video_1_1_1.ggYoutubeApiReady();}
		}
		el.ggId="Video 1_1_1";
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
		me._video_1_1_1.ggIsActive=function() {
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
		me._video_1_1_1.ggUpdatePosition=function (useTransition) {
		}
		me._ut6012.appendChild(me._video_1_1_1);
		el=me._svg_3_1_1=document.createElement('div');
		els=me._svg_3_1_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjUwIiB2aWV3Qm94PSIwIDAgNTAgNTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjUwIj4KIDxwYXRoIGZpbGw9IiNGNjkyMUUiIGQ9Ik00Mi42ODU2IDcuMzE0MzlDMzIuOTMxIC0yLjQzODEzIDE3LjA2NzQgLTIuNDM4MTMgNy4zMTI3OCA3LjMxNDM5Qy0yLjQzNzU5IDE3LjA2NjkgLTIuNDM3NTkgMzIuOTM0NyA3LjMxMjc4IDQyLjY4NzJDMTIuMTkwMSA0Ny41NjI1IDE4LjU5NTEgNDkuOTk4OSAyNS4wMDAzIDQ5Ljk5ODlDMzEuNDA1NCA0OS45OTg5IDM3LjgwODMgNDcuNTYyNCA0Mi42ODU2IDQyLjY4NzJDNTIuND'+
			'M4MSAzMi45MzQ4IDUyLjQzODEgMTcuMDY2OSA0Mi42ODU2IDcuMzE0MzlaTTM1LjMxNTUgMzIuMzY5OUMzNi4xMzA0IDMzLjE4NDggMzYuMTMwNCAzNC41MDIxIDM1LjMxNTUgMzUuMzE3MUMzNC45MDkgMzUuNzIzNSAzNC4zNzU1IDM1LjkyNzggMzMuODQxOCAzNS45Mjc4QzMzLjMwODMgMzUuOTI3OCAzMi43NzQ2IDM1LjcyMzUgMzIuMzY4MiAzNS4zMTcxTDI1LjAwMDIgMjcuOTQ2OUwxNy42MzQyIDM1LjMxNDlDMTcuMjI1NyAzNS43MjE0IDE2LjY5MjEgMzUuOTI1NyAxNi4xNjA2IDM1LjkyNTdDMTUuNjI3IDM1LjkyNTcgMTUuMDkzNCAzNS43MjE0IDE0LjY4NjkgMzUuMzE0OUMxMy44NzIg'+
			'MzQuNSAxMy44NzIgMzMuMTgwNiAxNC42ODY5IDMyLjM2NzdMMjIuMDUyOSAyNC45OTk3TDE0LjY4NDkgMTcuNjMxN0MxMy44NyAxNi44MTY4IDEzLjg3IDE1LjQ5NzQgMTQuNjg0OSAxNC42ODQ1QzE1LjQ5NzggMTMuODY5NiAxNi44MTcxIDEzLjg2OTYgMTcuNjMyMSAxNC42ODQ1TDI1LjAwMDEgMjIuMDUyNUwzMi4zNjgxIDE0LjY4NDVDMzMuMTgzIDEzLjg2OTYgMzQuNTAwMyAxMy44Njk2IDM1LjMxNTMgMTQuNjg0NUMzNi4xMzAyIDE1LjQ5NzQgMzYuMTMwMiAxNi44MTY4IDM1LjMxNTMgMTcuNjMxN0wyNy45NDczIDI0Ljk5OTdMMzUuMzE1NSAzMi4zNjk5WiIvPgo8L3N2Zz4K';
		me._svg_3_1_1__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 3_1_1";
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
		me._svg_3_1_1.ggIsActive=function() {
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
		me._svg_3_1_1.onclick=function (e) {
			me._ut6012.style.transition='none';
			me._ut6012.style.visibility='hidden';
			me._ut6012.ggVisible=false;
			(function() {
    var elementsBeforeTarget = document.querySelectorAll('.product_pop_up_active');
    elementsBeforeTarget.forEach(function(element) {
        element.style.visibility = 'hidden';
    });
})();
		}
		me._svg_3_1_1.ggUpdatePosition=function (useTransition) {
		}
		me._ut6012.appendChild(me._svg_3_1_1);
		el=me._svg_4_1=document.createElement('div');
		els=me._svg_4_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjU0IiB2aWV3Qm94PSIwIDAgNTQgNTQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjU0Ij4KIDxwYXRoIGZpbGw9IiNGNjkyMUUiIGQ9Ik0yOC42NzUgNTEuNzI0NEM0Mi40NDA3IDUwLjY4ODkgNTIuNzYwNSAzOC42OTAyIDUxLjcyNSAyNC45MjQ3QzUwLjY4OTUgMTEuMTU5MiAzOC42OTA3IDAuODM5NDY2IDI0LjkyNSAxLjg3NUMxMS4xNTkzIDIuOTEwNTMgMC44Mzk0NTYgMTQuOTA5MiAxLjg3NDk4IDI4LjY3NDdDMi45MTA1IDQyLjQ0MDIgMTQuOTA5MyA1Mi43NiAyOC42NzUgNTEuNzI0NFoiLz4KIDxwYXRoIGZpbG'+
			'w9IndoaXRlIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zOC42MDI2IDIxLjQzODNIMTkuMTgzMkwyMS43NjE0IDMyLjI2MzdIMzQuOTY1OEwzOC42MDI2IDIxLjQzODNaTTQxLjE4NCAxOS41ODE4QzQxLjQwNCAxOS44ODU4IDQxLjQ2MzQgMjAuMjgyIDQxLjM0MzUgMjAuNjM2N0wzNi45MTk1IDMzLjgwNjhDMzYuNzU5MiAzNC4yODU5IDM2LjMxMiAzNC42MDg0IDM1LjgwODYgMzQuNjA4NEgyMC44MzU3QzIwLjI5MzEgMzQuNjA4NCAxOS44MjE0IDM0LjIzNTMgMTkuNjk1OCAzMy43MDU2TDE1LjI3NjYgMTUuMTUwNEgxMy4zNzcxQzEyLjcyOTggMTUuMTUwNCAxMi4yMDUxIDE0LjYyNTIgMTIu'+
			'MjA1MSAxMy45NzU3QzEyLjIwNTEgMTMuMzMwOCAxMi43Mjk4IDEyLjgwNTcgMTMuMzc3MSAxMi44MDU3SDE2LjIwMjFDMTYuNzQ0NiAxMi44MDU3IDE3LjIxNjUgMTMuMTc4OCAxNy4zNDIzIDEzLjcwMzlMMTguNjI0NCAxOS4wODlMNDAuMjMyNiAxOS4wOTM2QzQwLjYwOTYgMTkuMDkzNiA0MC45NjM3IDE5LjI3MzIgNDEuMTg0IDE5LjU4MThaTTM0LjY5OSAzNy4xMDk4QzMzLjQ2NjIgMzcuMTA5OCAzMi40NjA4IDM4LjExNCAzMi40NjA4IDM5LjM0ODVDMzIuNDYwOCA0MC41ODMxIDMzLjQ2NjIgNDEuNTg3MyAzNC42OTkgNDEuNTg3M0MzNS45MzE2IDQxLjU4NzMgMzYuOTM2OCA0MC41ODMxID'+
			'M2LjkzNjggMzkuMzQ4NUMzNi45MzY3IDM4LjExNDEgMzUuOTMxNiAzNy4xMDk4IDM0LjY5OSAzNy4xMDk4Wk0yMy42NTE5IDM5LjM0ODVDMjMuNjUxOSA0MC41ODMxIDIyLjY0NjcgNDEuNTg3MyAyMS40MTQxIDQxLjU4NzNDMjAuMTgxNCA0MS41ODczIDE5LjE3NiA0MC41ODMxIDE5LjE3NiAzOS4zNDg1QzE5LjE3NiAzOC4xMTQgMjAuMTgxNCAzNy4xMDk4IDIxLjQxNDEgMzcuMTA5OEMyMi42NDY3IDM3LjEwOTggMjMuNjUxOSAzOC4xMTQxIDIzLjY1MTkgMzkuMzQ4NVoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K';
		me._svg_4_1__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 4_1";
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
		me._svg_4_1.ggIsActive=function() {
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
		me._svg_4_1.onclick=function (e) {
			player.openUrl("https:\/\/autos.com.pl\/pl\/produkt\/filtr-paliwa-separator-unitruck-ut6012b\/132406","_blank");
		}
		me._svg_4_1.ggUpdatePosition=function (useTransition) {
		}
		me._ut6012.appendChild(me._svg_4_1);
		el=me._svg_2_1=document.createElement('div');
		els=me._svg_2_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLWFycm93LXJpZ2h0LWNpcmNsZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMjQiPgogPGNpcmNsZSByPSIxMCIgY3k9IjEyIiBjeD0iMTIiLz4KIDxwb2x5bGluZSBwb2ludHM9IjEyIDE2IDE2IDEyIDEyIDgiLz4KIDxsaW5lIHgxPSI4IiB4Mj0iMTYiIHkxPSIxMiIgeTI9IjEyIi'+
			'8+Cjwvc3ZnPgo=';
		me._svg_2_1__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 2_1";
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
		me._svg_2_1.ggIsActive=function() {
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
		me._svg_2_1.onclick=function (e) {
			me._image_1_1.style.transition='none';
			me._image_1_1.style.visibility=(Number(me._image_1_1.style.opacity)>0||!me._image_1_1.style.opacity)?'inherit':'hidden';
			me._image_1_1.ggVisible=true;
			me._image_2_1.style.transition='none';
			me._image_2_1.style.visibility='hidden';
			me._image_2_1.ggVisible=false;
		}
		me._svg_2_1.ggUpdatePosition=function (useTransition) {
		}
		me._ut6012.appendChild(me._svg_2_1);
		el=me._svg_5_1=document.createElement('div');
		els=me._svg_5_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLWFycm93LWxlZnQtY2lyY2xlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCI+CiA8Y2lyY2xlIHI9IjEwIiBjeT0iMTIiIGN4PSIxMiIvPgogPHBvbHlsaW5lIHBvaW50cz0iMTIgOCA4IDEyIDEyIDE2Ii8+CiA8bGluZSB4MT0iMTYiIHgyPSI4IiB5MT0iMTIiIHkyPSIxMiIvPg'+
			'o8L3N2Zz4K';
		me._svg_5_1__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 5_1";
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
		me._svg_5_1.ggIsActive=function() {
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
		me._svg_5_1.onclick=function (e) {
			me._image_2_1.style.transition='none';
			me._image_2_1.style.visibility=(Number(me._image_2_1.style.opacity)>0||!me._image_2_1.style.opacity)?'inherit':'hidden';
			me._image_2_1.ggVisible=true;
			me._image_1_1.style.transition='none';
			me._image_1_1.style.visibility='hidden';
			me._image_1_1.ggVisible=false;
		}
		me._svg_5_1.ggUpdatePosition=function (useTransition) {
		}
		me._ut6012.appendChild(me._svg_5_1);
		el=me._image_1_1=document.createElement('div');
		els=me._image_1_1__img=document.createElement('img');
		els.className='ggskin ggskin_image_1_1';
		hs=basePath + 'images/image_1_1.png';
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
		el.ggId="Image 1_1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 230px;';
		hs+='left : calc(50% - ((229px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 17%;';
		hs+='visibility : inherit;';
		hs+='width : 229px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_1_1.ggIsActive=function() {
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
		me._image_1_1.ggUpdatePosition=function (useTransition) {
		}
		me._ut6012.appendChild(me._image_1_1);
		el=me._image_2_1=document.createElement('div');
		els=me._image_2_1__img=document.createElement('img');
		els.className='ggskin ggskin_image_2_1';
		hs=basePath + 'images/image_2_1.png';
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
		el.ggId="Image 2_1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 230px;';
		hs+='left : calc(50% - ((229px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 17%;';
		hs+='visibility : inherit;';
		hs+='width : 229px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_2_1.ggIsActive=function() {
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
		me._image_2_1.ggUpdatePosition=function (useTransition) {
		}
		me._ut6012.appendChild(me._image_2_1);
		me._products.appendChild(me._ut6012);
		el=me.__1041800109=document.createElement('div');
		el.ggId="1041800109";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle product_pop_up_active";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #f6921e;';
		hs+='border-radius : 5px;';
		hs+='cursor : default;';
		hs+='height : 75%;';
		hs+='left : calc(50% - ((33% + 2px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((75% + 2px) / 2) + 0%);';
		hs+='visibility : hidden;';
		hs+='width : 33%;';
		hs+='pointer-events:auto;';
		hs+='position: fixed;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1041800109.ggIsActive=function() {
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
		me.__1041800109.onmouseover=function (e) {
			var list=me.findElements("1041800109_hover",true);
			while(list.length>0) {
				var e=list.pop();
				e.style.transition='none';
				e.style.visibility='hidden';
				e.ggVisible=false;
			}
			me.elementMouseOver['_1041800109']=true;
		}
		me.__1041800109.onmouseout=function (e) {
			me.elementMouseOver['_1041800109']=false;
		}
		me.__1041800109.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_1041800109']) {
				var list=me.findElements("1041800109_hover",true);
				while(list.length>0) {
					var e=list.pop();
					e.style.transition='none';
					e.style.visibility='hidden';
					e.ggVisible=false;
				}
				me.elementMouseOver['_1041800109']=true;
			}
		}
		me.__1041800109.ggUpdatePosition=function (useTransition) {
		}
		el=me._header_2_1=document.createElement('div');
		els=me._header_2_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Header_2_1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(0,0,0,1);';
		hs+='cursor : default;';
		hs+='height : 46px;';
		hs+='left : calc(50% - ((99.9053% + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='top : 5%;';
		hs+='visibility : inherit;';
		hs+='width : 99.9053%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._header_2_1.ggUpdateText=function() {
			var params = [];
			var hs = player._("<div class=\"ggmarkdown\"><h2>2105101200500 HENGST FILTER H12W05<\/h2>\n<div>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._header_2_1.ggUpdateText();
		el.appendChild(els);
		me._header_2_1.ggIsActive=function() {
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
		me._header_2_1.ggUpdatePosition=function (useTransition) {
		}
		me.__1041800109.appendChild(me._header_2_1);
		el=me._video_1_2_1=document.createElement('div');
		me._video_1_2_1.seekbars = [];
			me._video_1_2_1.ggYoutubeApiReady = function() { skin.ggYoutubeApiLoaded = true;}
		me._video_1_2_1.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._video_1_2_1.seekbars.length; i++) {
					var seekbar = me.findElements(me._video_1_2_1.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me._video_1_2_1.hasChildNodes()) {
				me._video_1_2_1.removeChild(me._video_1_2_1.lastChild);
			}
			if(media == '') {
				notifySeekbars();
				if (me._video_1_2_1.ggVideoNotLoaded == false && me._video_1_2_1.ggDeactivate && player.isPlaying('video_1_2_1')) { me._video_1_2_1.ggDeactivate(); }
				me._video_1_2_1.ggVideoNotLoaded = true;
				return;
			}
			me._video_1_2_1.ggVideoNotLoaded = false;
			me._video_1_2_1__vid=document.createElement('iframe');
			me._video_1_2_1__vid.className='ggskin ggskin_video';
			var ggYoutubeMedia = media;
			var ggTimeParam = '';
			if (ggYoutubeMedia.indexOf('&') != -1) {
				ggTimeParam = 'start' + media.slice(ggYoutubeMedia.indexOf('&') + 2) + '&amp;';
				ggYoutubeMedia = ggYoutubeMedia.slice(0, ggYoutubeMedia.indexOf('&'));
			}
			var ggVideoParams = '?' + ggTimeParam + 'autoplay=0&amp;controls=0&amp;loop=1&amp;enablejsapi=0&amp;rel=0';
			var ggVideoUrl = 'https://www.youtube.com/embed/' + ggYoutubeMedia + ggVideoParams;
			me._video_1_2_1__vid.setAttribute('src', ggVideoUrl);
			me._video_1_2_1__vid.setAttribute('width', '100%');
			me._video_1_2_1__vid.setAttribute('height', '100%');
			me._video_1_2_1__vid.setAttribute('allow', 'autoplay');
			me._video_1_2_1__vid.setAttribute('allowfullscreen', 'true');
			me._video_1_2_1__vid.setAttribute('style', 'border:none; ; ;');
			me._video_1_2_1.appendChild(me._video_1_2_1__vid);
			me._video_1_2_1.ggVideoSource = media;
			if (skin.ggYoutubeApiLoaded && skin.ggYoutubeApiLoaded == true) {me._video_1_2_1.ggYoutubeApiReady();}
		}
		el.ggId="Video 1_2_1";
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
		me._video_1_2_1.ggIsActive=function() {
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
		me._video_1_2_1.ggUpdatePosition=function (useTransition) {
		}
		me.__1041800109.appendChild(me._video_1_2_1);
		el=me._svg_3_2_1=document.createElement('div');
		els=me._svg_3_2_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjUwIiB2aWV3Qm94PSIwIDAgNTAgNTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjUwIj4KIDxwYXRoIGZpbGw9IiNGNjkyMUUiIGQ9Ik00Mi42ODU2IDcuMzE0MzlDMzIuOTMxIC0yLjQzODEzIDE3LjA2NzQgLTIuNDM4MTMgNy4zMTI3OCA3LjMxNDM5Qy0yLjQzNzU5IDE3LjA2NjkgLTIuNDM3NTkgMzIuOTM0NyA3LjMxMjc4IDQyLjY4NzJDMTIuMTkwMSA0Ny41NjI1IDE4LjU5NTEgNDkuOTk4OSAyNS4wMDAzIDQ5Ljk5ODlDMzEuNDA1NCA0OS45OTg5IDM3LjgwODMgNDcuNTYyNCA0Mi42ODU2IDQyLjY4NzJDNTIuND'+
			'M4MSAzMi45MzQ4IDUyLjQzODEgMTcuMDY2OSA0Mi42ODU2IDcuMzE0MzlaTTM1LjMxNTUgMzIuMzY5OUMzNi4xMzA0IDMzLjE4NDggMzYuMTMwNCAzNC41MDIxIDM1LjMxNTUgMzUuMzE3MUMzNC45MDkgMzUuNzIzNSAzNC4zNzU1IDM1LjkyNzggMzMuODQxOCAzNS45Mjc4QzMzLjMwODMgMzUuOTI3OCAzMi43NzQ2IDM1LjcyMzUgMzIuMzY4MiAzNS4zMTcxTDI1LjAwMDIgMjcuOTQ2OUwxNy42MzQyIDM1LjMxNDlDMTcuMjI1NyAzNS43MjE0IDE2LjY5MjEgMzUuOTI1NyAxNi4xNjA2IDM1LjkyNTdDMTUuNjI3IDM1LjkyNTcgMTUuMDkzNCAzNS43MjE0IDE0LjY4NjkgMzUuMzE0OUMxMy44NzIg'+
			'MzQuNSAxMy44NzIgMzMuMTgwNiAxNC42ODY5IDMyLjM2NzdMMjIuMDUyOSAyNC45OTk3TDE0LjY4NDkgMTcuNjMxN0MxMy44NyAxNi44MTY4IDEzLjg3IDE1LjQ5NzQgMTQuNjg0OSAxNC42ODQ1QzE1LjQ5NzggMTMuODY5NiAxNi44MTcxIDEzLjg2OTYgMTcuNjMyMSAxNC42ODQ1TDI1LjAwMDEgMjIuMDUyNUwzMi4zNjgxIDE0LjY4NDVDMzMuMTgzIDEzLjg2OTYgMzQuNTAwMyAxMy44Njk2IDM1LjMxNTMgMTQuNjg0NUMzNi4xMzAyIDE1LjQ5NzQgMzYuMTMwMiAxNi44MTY4IDM1LjMxNTMgMTcuNjMxN0wyNy45NDczIDI0Ljk5OTdMMzUuMzE1NSAzMi4zNjk5WiIvPgo8L3N2Zz4K';
		me._svg_3_2_1__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 3_2_1";
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
		me._svg_3_2_1.ggIsActive=function() {
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
		me._svg_3_2_1.onclick=function (e) {
			me.__1041800109.style.transition='none';
			me.__1041800109.style.visibility='hidden';
			me.__1041800109.ggVisible=false;
			(function() {
    var elementsBeforeTarget = document.querySelectorAll('.product_pop_up_active');
    elementsBeforeTarget.forEach(function(element) {
        element.style.visibility = 'hidden';
    });
})();
		}
		me._svg_3_2_1.ggUpdatePosition=function (useTransition) {
		}
		me.__1041800109.appendChild(me._svg_3_2_1);
		el=me._svg_4_2_1=document.createElement('div');
		els=me._svg_4_2_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjU0IiB2aWV3Qm94PSIwIDAgNTQgNTQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjU0Ij4KIDxwYXRoIGZpbGw9IiNGNjkyMUUiIGQ9Ik0yOC42NzUgNTEuNzI0NEM0Mi40NDA3IDUwLjY4ODkgNTIuNzYwNSAzOC42OTAyIDUxLjcyNSAyNC45MjQ3QzUwLjY4OTUgMTEuMTU5MiAzOC42OTA3IDAuODM5NDY2IDI0LjkyNSAxLjg3NUMxMS4xNTkzIDIuOTEwNTMgMC44Mzk0NTYgMTQuOTA5MiAxLjg3NDk4IDI4LjY3NDdDMi45MTA1IDQyLjQ0MDIgMTQuOTA5MyA1Mi43NiAyOC42NzUgNTEuNzI0NFoiLz4KIDxwYXRoIGZpbG'+
			'w9IndoaXRlIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zOC42MDI2IDIxLjQzODNIMTkuMTgzMkwyMS43NjE0IDMyLjI2MzdIMzQuOTY1OEwzOC42MDI2IDIxLjQzODNaTTQxLjE4NCAxOS41ODE4QzQxLjQwNCAxOS44ODU4IDQxLjQ2MzQgMjAuMjgyIDQxLjM0MzUgMjAuNjM2N0wzNi45MTk1IDMzLjgwNjhDMzYuNzU5MiAzNC4yODU5IDM2LjMxMiAzNC42MDg0IDM1LjgwODYgMzQuNjA4NEgyMC44MzU3QzIwLjI5MzEgMzQuNjA4NCAxOS44MjE0IDM0LjIzNTMgMTkuNjk1OCAzMy43MDU2TDE1LjI3NjYgMTUuMTUwNEgxMy4zNzcxQzEyLjcyOTggMTUuMTUwNCAxMi4yMDUxIDE0LjYyNTIgMTIu'+
			'MjA1MSAxMy45NzU3QzEyLjIwNTEgMTMuMzMwOCAxMi43Mjk4IDEyLjgwNTcgMTMuMzc3MSAxMi44MDU3SDE2LjIwMjFDMTYuNzQ0NiAxMi44MDU3IDE3LjIxNjUgMTMuMTc4OCAxNy4zNDIzIDEzLjcwMzlMMTguNjI0NCAxOS4wODlMNDAuMjMyNiAxOS4wOTM2QzQwLjYwOTYgMTkuMDkzNiA0MC45NjM3IDE5LjI3MzIgNDEuMTg0IDE5LjU4MThaTTM0LjY5OSAzNy4xMDk4QzMzLjQ2NjIgMzcuMTA5OCAzMi40NjA4IDM4LjExNCAzMi40NjA4IDM5LjM0ODVDMzIuNDYwOCA0MC41ODMxIDMzLjQ2NjIgNDEuNTg3MyAzNC42OTkgNDEuNTg3M0MzNS45MzE2IDQxLjU4NzMgMzYuOTM2OCA0MC41ODMxID'+
			'M2LjkzNjggMzkuMzQ4NUMzNi45MzY3IDM4LjExNDEgMzUuOTMxNiAzNy4xMDk4IDM0LjY5OSAzNy4xMDk4Wk0yMy42NTE5IDM5LjM0ODVDMjMuNjUxOSA0MC41ODMxIDIyLjY0NjcgNDEuNTg3MyAyMS40MTQxIDQxLjU4NzNDMjAuMTgxNCA0MS41ODczIDE5LjE3NiA0MC41ODMxIDE5LjE3NiAzOS4zNDg1QzE5LjE3NiAzOC4xMTQgMjAuMTgxNCAzNy4xMDk4IDIxLjQxNDEgMzcuMTA5OEMyMi42NDY3IDM3LjEwOTggMjMuNjUxOSAzOC4xMTQxIDIzLjY1MTkgMzkuMzQ4NVoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K';
		me._svg_4_2_1__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 4_2_1";
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
		me._svg_4_2_1.ggIsActive=function() {
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
		me._svg_4_2_1.onclick=function (e) {
			player.openUrl("https:\/\/www.fcpeuro.com\/products\/mercedes-engine-oil-filter-1041800109he","_blank");
		}
		me._svg_4_2_1.ggUpdatePosition=function (useTransition) {
		}
		me.__1041800109.appendChild(me._svg_4_2_1);
		el=me.__1041800109_picture_1=document.createElement('div');
		els=me.__1041800109_picture_1__img=document.createElement('img');
		els.className='ggskin ggskin__1041800109_picture_1';
		hs=basePath + 'images/_1041800109_picture_1.png';
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
		el.ggId="1041800109_picture_1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 230px;';
		hs+='left : calc(50% - ((230px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 17%;';
		hs+='visibility : inherit;';
		hs+='width : 230px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1041800109_picture_1.ggIsActive=function() {
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
		me.__1041800109_picture_1.ggUpdatePosition=function (useTransition) {
		}
		me.__1041800109.appendChild(me.__1041800109_picture_1);
		el=me.__1041800109_picture_2=document.createElement('div');
		els=me.__1041800109_picture_2__img=document.createElement('img');
		els.className='ggskin ggskin__1041800109_picture_2';
		hs=basePath + 'images/_1041800109_picture_2.png';
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
		el.ggId="1041800109_picture_2";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 237px;';
		hs+='left : calc(50% - ((237px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 17%;';
		hs+='visibility : hidden;';
		hs+='width : 237px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1041800109_picture_2.ggIsActive=function() {
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
		me.__1041800109_picture_2.ggUpdatePosition=function (useTransition) {
		}
		me.__1041800109.appendChild(me.__1041800109_picture_2);
		el=me._svg_2_2_1=document.createElement('div');
		els=me._svg_2_2_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLWFycm93LXJpZ2h0LWNpcmNsZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMjQiPgogPGNpcmNsZSByPSIxMCIgY3k9IjEyIiBjeD0iMTIiLz4KIDxwb2x5bGluZSBwb2ludHM9IjEyIDE2IDE2IDEyIDEyIDgiLz4KIDxsaW5lIHgxPSI4IiB4Mj0iMTYiIHkxPSIxMiIgeTI9IjEyIi'+
			'8+Cjwvc3ZnPgo=';
		me._svg_2_2_1__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 2_2_1";
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
		me._svg_2_2_1.ggIsActive=function() {
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
		me._svg_2_2_1.onclick=function (e) {
			me.__1041800109_picture_2.style.transition='none';
			me.__1041800109_picture_2.style.visibility=(Number(me.__1041800109_picture_2.style.opacity)>0||!me.__1041800109_picture_2.style.opacity)?'inherit':'hidden';
			me.__1041800109_picture_2.ggVisible=true;
			me.__1041800109_picture_1.style.transition='none';
			me.__1041800109_picture_1.style.visibility='hidden';
			me.__1041800109_picture_1.ggVisible=false;
		}
		me._svg_2_2_1.ggUpdatePosition=function (useTransition) {
		}
		me.__1041800109.appendChild(me._svg_2_2_1);
		el=me._svg_5_2_1=document.createElement('div');
		els=me._svg_5_2_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLWFycm93LWxlZnQtY2lyY2xlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCI+CiA8Y2lyY2xlIHI9IjEwIiBjeT0iMTIiIGN4PSIxMiIvPgogPHBvbHlsaW5lIHBvaW50cz0iMTIgOCA4IDEyIDEyIDE2Ii8+CiA8bGluZSB4MT0iMTYiIHgyPSI4IiB5MT0iMTIiIHkyPSIxMiIvPg'+
			'o8L3N2Zz4K';
		me._svg_5_2_1__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 5_2_1";
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
		me._svg_5_2_1.ggIsActive=function() {
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
		me._svg_5_2_1.onclick=function (e) {
			me.__1041800109_picture_1.style.transition='none';
			me.__1041800109_picture_1.style.visibility=(Number(me.__1041800109_picture_1.style.opacity)>0||!me.__1041800109_picture_1.style.opacity)?'inherit':'hidden';
			me.__1041800109_picture_1.ggVisible=true;
			me.__1041800109_picture_2.style.transition='none';
			me.__1041800109_picture_2.style.visibility='hidden';
			me.__1041800109_picture_2.ggVisible=false;
		}
		me._svg_5_2_1.ggUpdatePosition=function (useTransition) {
		}
		me.__1041800109.appendChild(me._svg_5_2_1);
		me._products.appendChild(me.__1041800109);
		el=me.__2105101200500=document.createElement('div');
		el.ggId="2105101200500";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle product_pop_up_active";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #f6921e;';
		hs+='border-radius : 5px;';
		hs+='cursor : default;';
		hs+='height : 75%;';
		hs+='left : calc(50% - ((33% + 2px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((75% + 2px) / 2) + 0%);';
		hs+='visibility : hidden;';
		hs+='width : 33%;';
		hs+='pointer-events:auto;';
		hs+='position: fixed;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__2105101200500.ggIsActive=function() {
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
		me.__2105101200500.onmouseover=function (e) {
			var list=me.findElements("2105101200500_hover",true);
			while(list.length>0) {
				var e=list.pop();
				e.style.transition='none';
				e.style.visibility='hidden';
				e.ggVisible=false;
			}
			me.elementMouseOver['_2105101200500']=true;
		}
		me.__2105101200500.onmouseout=function (e) {
			me.elementMouseOver['_2105101200500']=false;
		}
		me.__2105101200500.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['_2105101200500']) {
				var list=me.findElements("2105101200500_hover",true);
				while(list.length>0) {
					var e=list.pop();
					e.style.transition='none';
					e.style.visibility='hidden';
					e.ggVisible=false;
				}
				me.elementMouseOver['_2105101200500']=true;
			}
		}
		me.__2105101200500.ggUpdatePosition=function (useTransition) {
		}
		el=me._header_1=document.createElement('div');
		els=me._header_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Header_1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(0,0,0,1);';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((90% + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='top : 5%;';
		hs+='visibility : inherit;';
		hs+='width : 90%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._header_1.ggUpdateText=function() {
			var params = [];
			var hs = player._("<div class=\"ggmarkdown\"><h2>2105101200500 - Oil filter OE number by LADA<\/h2>\n<div>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._header_1.ggUpdateText();
		el.appendChild(els);
		me._header_1.ggIsActive=function() {
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
		me._header_1.ggUpdatePosition=function (useTransition) {
		}
		me.__2105101200500.appendChild(me._header_1);
		el=me._video_1_1=document.createElement('div');
		me._video_1_1.seekbars = [];
			me._video_1_1.ggYoutubeApiReady = function() { skin.ggYoutubeApiLoaded = true;}
		me._video_1_1.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._video_1_1.seekbars.length; i++) {
					var seekbar = me.findElements(me._video_1_1.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me._video_1_1.hasChildNodes()) {
				me._video_1_1.removeChild(me._video_1_1.lastChild);
			}
			if(media == '') {
				notifySeekbars();
				if (me._video_1_1.ggVideoNotLoaded == false && me._video_1_1.ggDeactivate && player.isPlaying('video_1_1')) { me._video_1_1.ggDeactivate(); }
				me._video_1_1.ggVideoNotLoaded = true;
				return;
			}
			me._video_1_1.ggVideoNotLoaded = false;
			me._video_1_1__vid=document.createElement('iframe');
			me._video_1_1__vid.className='ggskin ggskin_video';
			var ggYoutubeMedia = media;
			var ggTimeParam = '';
			if (ggYoutubeMedia.indexOf('&') != -1) {
				ggTimeParam = 'start' + media.slice(ggYoutubeMedia.indexOf('&') + 2) + '&amp;';
				ggYoutubeMedia = ggYoutubeMedia.slice(0, ggYoutubeMedia.indexOf('&'));
			}
			var ggVideoParams = '?' + ggTimeParam + 'autoplay=0&amp;controls=0&amp;loop=1&amp;enablejsapi=0&amp;rel=0';
			var ggVideoUrl = 'https://www.youtube.com/embed/' + ggYoutubeMedia + ggVideoParams;
			me._video_1_1__vid.setAttribute('src', ggVideoUrl);
			me._video_1_1__vid.setAttribute('width', '100%');
			me._video_1_1__vid.setAttribute('height', '100%');
			me._video_1_1__vid.setAttribute('allow', 'autoplay');
			me._video_1_1__vid.setAttribute('allowfullscreen', 'true');
			me._video_1_1__vid.setAttribute('style', 'border:none; ; ;');
			me._video_1_1.appendChild(me._video_1_1__vid);
			me._video_1_1.ggVideoSource = media;
			if (skin.ggYoutubeApiLoaded && skin.ggYoutubeApiLoaded == true) {me._video_1_1.ggYoutubeApiReady();}
		}
		el.ggId="Video 1_1";
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
		me._video_1_1.ggIsActive=function() {
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
		me._video_1_1.ggUpdatePosition=function (useTransition) {
		}
		me.__2105101200500.appendChild(me._video_1_1);
		el=me._svg_3_1=document.createElement('div');
		els=me._svg_3_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjUwIiB2aWV3Qm94PSIwIDAgNTAgNTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjUwIj4KIDxwYXRoIGZpbGw9IiNGNjkyMUUiIGQ9Ik00Mi42ODU2IDcuMzE0MzlDMzIuOTMxIC0yLjQzODEzIDE3LjA2NzQgLTIuNDM4MTMgNy4zMTI3OCA3LjMxNDM5Qy0yLjQzNzU5IDE3LjA2NjkgLTIuNDM3NTkgMzIuOTM0NyA3LjMxMjc4IDQyLjY4NzJDMTIuMTkwMSA0Ny41NjI1IDE4LjU5NTEgNDkuOTk4OSAyNS4wMDAzIDQ5Ljk5ODlDMzEuNDA1NCA0OS45OTg5IDM3LjgwODMgNDcuNTYyNCA0Mi42ODU2IDQyLjY4NzJDNTIuND'+
			'M4MSAzMi45MzQ4IDUyLjQzODEgMTcuMDY2OSA0Mi42ODU2IDcuMzE0MzlaTTM1LjMxNTUgMzIuMzY5OUMzNi4xMzA0IDMzLjE4NDggMzYuMTMwNCAzNC41MDIxIDM1LjMxNTUgMzUuMzE3MUMzNC45MDkgMzUuNzIzNSAzNC4zNzU1IDM1LjkyNzggMzMuODQxOCAzNS45Mjc4QzMzLjMwODMgMzUuOTI3OCAzMi43NzQ2IDM1LjcyMzUgMzIuMzY4MiAzNS4zMTcxTDI1LjAwMDIgMjcuOTQ2OUwxNy42MzQyIDM1LjMxNDlDMTcuMjI1NyAzNS43MjE0IDE2LjY5MjEgMzUuOTI1NyAxNi4xNjA2IDM1LjkyNTdDMTUuNjI3IDM1LjkyNTcgMTUuMDkzNCAzNS43MjE0IDE0LjY4NjkgMzUuMzE0OUMxMy44NzIg'+
			'MzQuNSAxMy44NzIgMzMuMTgwNiAxNC42ODY5IDMyLjM2NzdMMjIuMDUyOSAyNC45OTk3TDE0LjY4NDkgMTcuNjMxN0MxMy44NyAxNi44MTY4IDEzLjg3IDE1LjQ5NzQgMTQuNjg0OSAxNC42ODQ1QzE1LjQ5NzggMTMuODY5NiAxNi44MTcxIDEzLjg2OTYgMTcuNjMyMSAxNC42ODQ1TDI1LjAwMDEgMjIuMDUyNUwzMi4zNjgxIDE0LjY4NDVDMzMuMTgzIDEzLjg2OTYgMzQuNTAwMyAxMy44Njk2IDM1LjMxNTMgMTQuNjg0NUMzNi4xMzAyIDE1LjQ5NzQgMzYuMTMwMiAxNi44MTY4IDM1LjMxNTMgMTcuNjMxN0wyNy45NDczIDI0Ljk5OTdMMzUuMzE1NSAzMi4zNjk5WiIvPgo8L3N2Zz4K';
		me._svg_3_1__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 3_1";
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
		me._svg_3_1.ggIsActive=function() {
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
		me._svg_3_1.onclick=function (e) {
			me.__2105101200500.style.transition='none';
			me.__2105101200500.style.visibility='hidden';
			me.__2105101200500.ggVisible=false;
			(function() {
    var elementsBeforeTarget = document.querySelectorAll('.product_pop_up_active');
    elementsBeforeTarget.forEach(function(element) {
        element.style.visibility = 'hidden';
    });
})();
		}
		me._svg_3_1.ggUpdatePosition=function (useTransition) {
		}
		me.__2105101200500.appendChild(me._svg_3_1);
		el=me._svg_4_1_1=document.createElement('div');
		els=me._svg_4_1_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjU0IiB2aWV3Qm94PSIwIDAgNTQgNTQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjU0Ij4KIDxwYXRoIGZpbGw9IiNGNjkyMUUiIGQ9Ik0yOC42NzUgNTEuNzI0NEM0Mi40NDA3IDUwLjY4ODkgNTIuNzYwNSAzOC42OTAyIDUxLjcyNSAyNC45MjQ3QzUwLjY4OTUgMTEuMTU5MiAzOC42OTA3IDAuODM5NDY2IDI0LjkyNSAxLjg3NUMxMS4xNTkzIDIuOTEwNTMgMC44Mzk0NTYgMTQuOTA5MiAxLjg3NDk4IDI4LjY3NDdDMi45MTA1IDQyLjQ0MDIgMTQuOTA5MyA1Mi43NiAyOC42NzUgNTEuNzI0NFoiLz4KIDxwYXRoIGZpbG'+
			'w9IndoaXRlIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zOC42MDI2IDIxLjQzODNIMTkuMTgzMkwyMS43NjE0IDMyLjI2MzdIMzQuOTY1OEwzOC42MDI2IDIxLjQzODNaTTQxLjE4NCAxOS41ODE4QzQxLjQwNCAxOS44ODU4IDQxLjQ2MzQgMjAuMjgyIDQxLjM0MzUgMjAuNjM2N0wzNi45MTk1IDMzLjgwNjhDMzYuNzU5MiAzNC4yODU5IDM2LjMxMiAzNC42MDg0IDM1LjgwODYgMzQuNjA4NEgyMC44MzU3QzIwLjI5MzEgMzQuNjA4NCAxOS44MjE0IDM0LjIzNTMgMTkuNjk1OCAzMy43MDU2TDE1LjI3NjYgMTUuMTUwNEgxMy4zNzcxQzEyLjcyOTggMTUuMTUwNCAxMi4yMDUxIDE0LjYyNTIgMTIu'+
			'MjA1MSAxMy45NzU3QzEyLjIwNTEgMTMuMzMwOCAxMi43Mjk4IDEyLjgwNTcgMTMuMzc3MSAxMi44MDU3SDE2LjIwMjFDMTYuNzQ0NiAxMi44MDU3IDE3LjIxNjUgMTMuMTc4OCAxNy4zNDIzIDEzLjcwMzlMMTguNjI0NCAxOS4wODlMNDAuMjMyNiAxOS4wOTM2QzQwLjYwOTYgMTkuMDkzNiA0MC45NjM3IDE5LjI3MzIgNDEuMTg0IDE5LjU4MThaTTM0LjY5OSAzNy4xMDk4QzMzLjQ2NjIgMzcuMTA5OCAzMi40NjA4IDM4LjExNCAzMi40NjA4IDM5LjM0ODVDMzIuNDYwOCA0MC41ODMxIDMzLjQ2NjIgNDEuNTg3MyAzNC42OTkgNDEuNTg3M0MzNS45MzE2IDQxLjU4NzMgMzYuOTM2OCA0MC41ODMxID'+
			'M2LjkzNjggMzkuMzQ4NUMzNi45MzY3IDM4LjExNDEgMzUuOTMxNiAzNy4xMDk4IDM0LjY5OSAzNy4xMDk4Wk0yMy42NTE5IDM5LjM0ODVDMjMuNjUxOSA0MC41ODMxIDIyLjY0NjcgNDEuNTg3MyAyMS40MTQxIDQxLjU4NzNDMjAuMTgxNCA0MS41ODczIDE5LjE3NiA0MC41ODMxIDE5LjE3NiAzOS4zNDg1QzE5LjE3NiAzOC4xMTQgMjAuMTgxNCAzNy4xMDk4IDIxLjQxNDEgMzcuMTA5OEMyMi42NDY3IDM3LjEwOTggMjMuNjUxOSAzOC4xMTQxIDIzLjY1MTkgMzkuMzQ4NVoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K';
		me._svg_4_1_1__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 4_1_1";
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
		me._svg_4_1_1.ggIsActive=function() {
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
		me._svg_4_1_1.onclick=function (e) {
			player.openUrl("https:\/\/www.javiddo.com\/product\/yag-filtri-2105101200500","_blank");
		}
		me._svg_4_1_1.ggUpdatePosition=function (useTransition) {
		}
		me.__2105101200500.appendChild(me._svg_4_1_1);
		el=me._svg_2_1_1=document.createElement('div');
		els=me._svg_2_1_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLWFycm93LXJpZ2h0LWNpcmNsZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMjQiPgogPGNpcmNsZSByPSIxMCIgY3k9IjEyIiBjeD0iMTIiLz4KIDxwb2x5bGluZSBwb2ludHM9IjEyIDE2IDE2IDEyIDEyIDgiLz4KIDxsaW5lIHgxPSI4IiB4Mj0iMTYiIHkxPSIxMiIgeTI9IjEyIi'+
			'8+Cjwvc3ZnPgo=';
		me._svg_2_1_1__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 2_1_1";
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
		me._svg_2_1_1.ggIsActive=function() {
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
		me._svg_2_1_1.onclick=function (e) {
			me.__2105101200500_picture_2.style.transition='none';
			me.__2105101200500_picture_2.style.visibility=(Number(me.__2105101200500_picture_2.style.opacity)>0||!me.__2105101200500_picture_2.style.opacity)?'inherit':'hidden';
			me.__2105101200500_picture_2.ggVisible=true;
			me.__2105101200500_picture_1.style.transition='none';
			me.__2105101200500_picture_1.style.visibility='hidden';
			me.__2105101200500_picture_1.ggVisible=false;
		}
		me._svg_2_1_1.ggUpdatePosition=function (useTransition) {
		}
		me.__2105101200500.appendChild(me._svg_2_1_1);
		el=me._svg_5_1_1=document.createElement('div');
		els=me._svg_5_1_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLWFycm93LWxlZnQtY2lyY2xlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCI+CiA8Y2lyY2xlIHI9IjEwIiBjeT0iMTIiIGN4PSIxMiIvPgogPHBvbHlsaW5lIHBvaW50cz0iMTIgOCA4IDEyIDEyIDE2Ii8+CiA8bGluZSB4MT0iMTYiIHgyPSI4IiB5MT0iMTIiIHkyPSIxMiIvPg'+
			'o8L3N2Zz4K';
		me._svg_5_1_1__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 5_1_1";
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
		me._svg_5_1_1.ggIsActive=function() {
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
		me._svg_5_1_1.onclick=function (e) {
			me.__2105101200500_picture_1.style.transition='none';
			me.__2105101200500_picture_1.style.visibility=(Number(me.__2105101200500_picture_1.style.opacity)>0||!me.__2105101200500_picture_1.style.opacity)?'inherit':'hidden';
			me.__2105101200500_picture_1.ggVisible=true;
			me.__2105101200500_picture_2.style.transition='none';
			me.__2105101200500_picture_2.style.visibility='hidden';
			me.__2105101200500_picture_2.ggVisible=false;
		}
		me._svg_5_1_1.ggUpdatePosition=function (useTransition) {
		}
		me.__2105101200500.appendChild(me._svg_5_1_1);
		el=me.__2105101200500_picture_1=document.createElement('div');
		els=me.__2105101200500_picture_1__img=document.createElement('img');
		els.className='ggskin ggskin__2105101200500_picture_1';
		hs=basePath + 'images/_2105101200500_picture_1.png';
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
		el.ggId="2105101200500_picture_1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 230px;';
		hs+='left : calc(50% - ((230px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 17%;';
		hs+='visibility : inherit;';
		hs+='width : 230px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__2105101200500_picture_1.ggIsActive=function() {
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
		me.__2105101200500_picture_1.ggUpdatePosition=function (useTransition) {
		}
		me.__2105101200500.appendChild(me.__2105101200500_picture_1);
		el=me.__2105101200500_picture_2=document.createElement('div');
		els=me.__2105101200500_picture_2__img=document.createElement('img');
		els.className='ggskin ggskin__2105101200500_picture_2';
		hs=basePath + 'images/_2105101200500_picture_2.png';
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
		el.ggId="2105101200500_picture_2";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 230px;';
		hs+='left : calc(50% - ((240px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 17%;';
		hs+='visibility : hidden;';
		hs+='width : 240px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__2105101200500_picture_2.ggIsActive=function() {
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
		me.__2105101200500_picture_2.ggUpdatePosition=function (useTransition) {
		}
		me.__2105101200500.appendChild(me.__2105101200500_picture_2);
		me._products.appendChild(me.__2105101200500);
		me._popups.appendChild(me._products);
		me.divSkin.appendChild(me._popups);
		el=me._hide_system_cursor=document.createElement('div');
		el.ggId="hide_system_cursor";
		el.ggDx=5;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 1;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 5%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
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
					var markerClass = new SkinElement_image_11_Class(me, markerParent);
					me._floorplan01.ggMarkerInstances.push(markerClass);
					var marker = markerClass._image_11;
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
		me._video_1_2.ggInitMedia('mk2dlNRm5G4');
		me._video_1_1_1.ggInitMedia('nkctnQcz55w');
		me._video_1_2_1.ggInitMedia('AoS_1JJugws');
		me._video_1_1.ggInitMedia('gomCYZg9Grs');
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
			me._scrollarea_1.ggUpdatePosition();
			me._floorplan01.ggClearMap();
			me._floorplan01.ggInitMap(false);
			me._floorplan01.ggInitMapMarkers(true);
			me._float_cursor.logicBlock_visible();
			me._ring_white.logicBlock_bordercolor();
			me._float_tt.logicBlock_visible();
		});
	};
	function SkinHotspotClass_ht_oil_filter_2105101200500(parentScope,hotspot) {
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
		el=me._ht_oil_filter_2105101200500=document.createElement('div');
		el.ggId="ht_oil_filter_2105101200500";
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
		me._ht_oil_filter_2105101200500.ggIsActive=function() {
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
		me._ht_oil_filter_2105101200500.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_oil_filter_2105101200500.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_oil_filter_2105101200500.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_oil_filter_2105101200500']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_oil_filter_2105101200500.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_oil_filter_2105101200500']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_oil_filter_2105101200500.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['ht_oil_filter_2105101200500']) {
				player.setActiveHotspot(me.hotspot);
				me.elementMouseOver['ht_oil_filter_2105101200500']=true;
			}
		}
		me._ht_oil_filter_2105101200500.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_1=document.createElement('div');
		els=me._svg_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjUwIiB2aWV3Qm94PSIwIDAgNTAgNTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjUwIj4KIDxwYXRoIGZpbGw9IiNGNjkyMUUiIGQ9Ik01MCAyNUM1MCAxMS4xOTI5IDM4LjgwNzEgMCAyNSAwQzExLjE5MjkgMCAwIDExLjE5MjkgMCAyNUMwIDM4LjgwNzEgMTEuMTkyOSA1MCAyNSA1MEMzOC44MDcxIDUwIDUwIDM4LjgwNzEgNTAgMjVaIi8+CiA8cGF0aCBmaWxsPSJ3aGl0ZSIgZD0iTTE5LjgyOTIgMzYuMDkyM0MxOS40MTExIDM2LjA5MjMgMTkuMDAxIDM2LjAxNTQgMTguNjEwNSAzNS44NjM5TDkuMTMwODYgMzIuMT'+
			'g0MVYzOC4zNjIyQzkuMTMwODYgMzguODU2MiA5LjQ0MDc4IDM5LjI5NzMgOS45MDU2MSAzOS40NjQ3TDIzLjkzODcgNDQuNTE5VjMyLjM1NjNMMjIuNzQyNSAzNC40MTU1QzIyLjE0MTggMzUuNDQ5OCAyMS4wMjU0IDM2LjA5MjMgMTkuODI5MiAzNi4wOTIzWiIvPgogPHBhdGggZmlsbD0id2hpdGUiIGQ9Ik0zMC4xNzEgMzYuMDkyM0MyOC45NzQ4IDM2LjA5MjMgMjcuODU4NSAzNS40NDk4IDI3LjI1NzYgMzQuNDE1NUwyNi4yODMyIDMyLjczNzlWNDQuNTMxTDQwLjM0OTcgMzkuNDY0NkM0MC44MTQ1IDM5LjI5NzIgNDEuMTI0NSAzOC44NTYyIDQxLjEyNDUgMzguMzYyMVYzMi4wODVMMzEuMzg5'+
			'NyAzNS44NjM4QzMwLjk5OTEgMzYuMDE1NCAzMC41ODkyIDM2LjA5MjMgMzAuMTcxIDM2LjA5MjNaIi8+CiA8cGF0aCBmaWxsPSJ3aGl0ZSIgZD0iTTE3LjAzMTkgMTkuNTc0NkMxNi4zMzM3IDE4LjcyNDEgMTUuNzY5MSAxNy43NjAzIDE1LjM2OTQgMTYuNzE1NUwxMi4yNDYxIDE3Ljg0MDNMMTcuMDMxOSAxOS41NzQ2WiIvPgogPHBhdGggZmlsbD0id2hpdGUiIGQ9Ik0zNy43NzY5IDE3LjgzM0wzNC42NDQ4IDE2LjY4NTJDMzQuMjQ0NSAxNy43NDE3IDMzLjY3NTcgMTguNzE2IDMyLjk3MDcgMTkuNTc0NkwzNy43NzY5IDE3LjgzM1oiLz4KIDxwYXRoIGZpbGw9IndoaXRlIiBkPSJNNDQuODU0ID'+
			'I2Ljg0NjVMNDAuOTY1MSAyMC4wNTg5QzQwLjY5ODUgMTkuNTkzOCA0MC4xMzYgMTkuMzg3NSAzOS42MzIgMTkuNTcwMkwyNS4wMDAzIDI0Ljg3MTFMMTAuMzY4NyAxOS41NzAyQzkuODY0NiAxOS4zODc1IDkuMzAyMTEgMTkuNTkzOCA5LjAzNTU1IDIwLjA1ODlMNS4xNTkyOSAyNi44MjQzQzUuMDUyMSAyNy4wMTE0IDQuOTkxMzIgMjcuMjI0MSA1LjAwMTAxIDI3LjQzOTVDNS4wMjEzMiAyNy44OSA1LjMwNDQ0IDI4LjI2OCA1LjcwNDU5IDI4LjQyMzNMMTkuNDMwOSAzMy43NTE2QzE5LjU2MTUgMzMuODAyMyAxOS42OTY1IDMzLjgyNjUgMTkuODI5OCAzMy44MjY1QzIwLjIxMzIgMzMuODI2NSAy'+
			'MC41ODE2IDMzLjYyNTggMjAuNzg0IDMzLjI3NzJMMjUuMDAwMiAyNS43MzM4TDI5LjIxNjQgMzMuMjc3MkMyOS40MTg5IDMzLjYyNTggMjkuNzg3MyAzMy44MjY1IDMwLjE3MDcgMzMuODI2NUMzMC4zMDQgMzMuODI2NSAzMC40MzkgMzMuODAyMyAzMC41Njk2IDMzLjc1MTZMNDQuMjk1OSAyOC40MjMzQzQ0LjU5NTUgMjguMzA3IDQ0LjgyOTUgMjguMDY1OCA0NC45MzY2IDI3Ljc2MjlDNDUuMDQ0MSAyNy40NiA0NS4wMTM4IDI3LjEyNTQgNDQuODU0IDI2Ljg0NjVaIi8+CiA8cGF0aCBmaWxsPSJ3aGl0ZSIgZD0iTTI1LjAwMDEgMjEuMDg2MkMyOS40MzUxIDIxLjA4NjIgMzMuMDQzMyAxNy40Nz'+
			'gxIDMzLjA0MzMgMTMuMDQzMUMzMy4wNDMzIDguNjA4MDcgMjkuNDM1MSA1IDI1LjAwMDEgNUMyMC41NjUxIDUgMTYuOTU3IDguNjA4MTUgMTYuOTU3IDEzLjA0MzJDMTYuOTU3IDE3LjQ3ODIgMjAuNTY1MSAyMS4wODYyIDI1LjAwMDEgMjEuMDg2MlpNMjEuNjcxNiAxNC4yNzQ1QzIxLjIxMzkgMTMuODE2OSAyMS4yMTM5IDEzLjA3NSAyMS42NzE2IDEyLjYxNzNDMjIuMTI5MiAxMi4xNTk3IDIyLjg3MTIgMTIuMTU5NyAyMy4zMjg4IDEyLjYxNzNMMjMuOTg5OCAxMy4yNzgzTDI2LjcxMSAxMC41NTcxQzI3LjE2ODYgMTAuMDk5NSAyNy45MTA2IDEwLjA5OTUgMjguMzY4MyAxMC41NTcxQzI4Ljgy'+
			'NTkgMTEuMDE0OCAyOC44MjU5IDExLjc1NjcgMjguMzY4MyAxMi4yMTQzTDI0LjgxODUgMTUuNzY0MUMyNC41ODk2IDE1Ljk5MyAyNC4yODk3IDE2LjEwNzQgMjMuOTg5OSAxNi4xMDc0QzIzLjY5MDEgMTYuMTA3NCAyMy4zOTAxIDE1Ljk5MyAyMy4xNjEzIDE1Ljc2NDJMMjEuNjcxNiAxNC4yNzQ1WiIvPgo8L3N2Zz4K';
		me._svg_1__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : 96px;';
		hs+='position : absolute;';
		hs+='top : -121px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
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
		me._svg_1.onclick=function (e) {
			skin.__2105101200500.style.transition='none';
			skin.__2105101200500.style.visibility=(Number(skin.__2105101200500.style.opacity)>0||!skin.__2105101200500.style.opacity)?'inherit':'hidden';
			skin.__2105101200500.ggVisible=true;
		}
		me._svg_1.onmouseover=function (e) {
			me.__2105101200500_hover.style.transition='none';
			me.__2105101200500_hover.style.visibility=(Number(me.__2105101200500_hover.style.opacity)>0||!me.__2105101200500_hover.style.opacity)?'inherit':'hidden';
			me.__2105101200500_hover.ggVisible=true;
			var list=me.findElements("1041800109_hover",true);
			while(list.length>0) {
				var e=list.pop();
				e.style.transition='none';
				e.style.visibility='hidden';
				e.ggVisible=false;
			}
			me.elementMouseOver['svg_1']=true;
		}
		me._svg_1.onmouseout=function (e) {
			me.elementMouseOver['svg_1']=false;
		}
		me._svg_1.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['svg_1']) {
				me.__2105101200500_hover.style.transition='none';
				me.__2105101200500_hover.style.visibility=(Number(me.__2105101200500_hover.style.opacity)>0||!me.__2105101200500_hover.style.opacity)?'inherit':'hidden';
				me.__2105101200500_hover.ggVisible=true;
				var list=me.findElements("1041800109_hover",true);
				while(list.length>0) {
					var e=list.pop();
					e.style.transition='none';
					e.style.visibility='hidden';
					e.ggVisible=false;
				}
				me.elementMouseOver['svg_1']=true;
			}
		}
		me._svg_1.ggUpdatePosition=function (useTransition) {
		}
		me._ht_oil_filter_2105101200500.appendChild(me._svg_1);
		el=me._svg_6=document.createElement('div');
		els=me._svg_6__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjY0IiB2aWV3Qm94PSIwIDAgNjggNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjY4Ij4KIDxyZWN0IGZpbGw9IiNGNjkyMUUiIGhlaWdodD0iMSIgeT0iNjMuMDc5MSIgdHJhbnNmb3JtPSJyb3RhdGUoLTQzLjI4NjEgMCA2My4wNzkxKSIgd2lkdGg9IjkyIi8+Cjwvc3ZnPgo=';
		me._svg_6__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 6";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 94px;';
		hs+='left : 4px;';
		hs+='position : absolute;';
		hs+='top : -96px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_6.ggIsActive=function() {
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
		me._svg_6.ggUpdatePosition=function (useTransition) {
		}
		me._ht_oil_filter_2105101200500.appendChild(me._svg_6);
		el=me.__2105101200500_hover=document.createElement('div');
		el.ggId="2105101200500_hover";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -58px;';
		hs+='cursor : default;';
		hs+='height : 150px;';
		hs+='position : absolute;';
		hs+='right : -585px;';
		hs+='visibility : hidden;';
		hs+='width : 453px;';
		hs+='pointer-events:auto;';
		hs+='border-radius: 10px; background-color: #ffffffdb; transition: 2s;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__2105101200500_hover.ggIsActive=function() {
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
		me.__2105101200500_hover.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_2=document.createElement('div');
		els=me._text_2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 83px;';
		hs+='position : absolute;';
		hs+='right : 45px;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 51.4349%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		hs+="text-align: justify;";
		els.setAttribute('style',hs);
		me._text_2.ggUpdateText=function() {
			var params = [];
			var hs = player._("<div class=\"ggmarkdown\"><p>Our Advantages:<\/p>\n<ol>\n<li>\n<p>Factory price, allowing you to have sufficient profits<\/p>\n<\/li>\n<li>\n<p>Oil filter in stock, fast delivery, 15000+oil filter product models, meeting\nthe original specifications<\/p>\n<\/li>\n<\/ol>\n<div>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_2.ggUpdateText();
		el.appendChild(els);
		me._text_2.ggIsActive=function() {
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
		me._text_2.ggUpdatePosition=function (useTransition) {
		}
		me.__2105101200500_hover.appendChild(me._text_2);
		el=me._text_3=document.createElement('div');
		els=me._text_3__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 13px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 36px;';
		hs+='left : 176px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 50.9934%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 18px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_3.ggUpdateText=function() {
			var params = [];
			var hs = player._("<div class=\"ggmarkdown\"><p>$7 - $12<\/p>\n<div>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_3.ggUpdateText();
		el.appendChild(els);
		me._text_3.ggIsActive=function() {
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
		me._text_3.ggUpdatePosition=function (useTransition) {
		}
		me.__2105101200500_hover.appendChild(me._text_3);
		el=me._text_4=document.createElement('div');
		els=me._text_4__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 10px;';
		hs+='color : rgba(103,103,103,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 177px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 10px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_4.ggUpdateText=function() {
			var params = [];
			var hs = player._("For peaces", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_4.ggUpdateText();
		el.appendChild(els);
		me._text_4.ggIsActive=function() {
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
		me._text_4.ggUpdatePosition=function (useTransition) {
		}
		me.__2105101200500_hover.appendChild(me._text_4);
		el=me._svg_3_4=document.createElement('div');
		els=me._svg_3_4__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjUwIiB2aWV3Qm94PSIwIDAgNTAgNTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjUwIj4KIDxwYXRoIGZpbGw9IiNGNjkyMUUiIGQ9Ik00Mi42ODU2IDcuMzE0MzlDMzIuOTMxIC0yLjQzODEzIDE3LjA2NzQgLTIuNDM4MTMgNy4zMTI3OCA3LjMxNDM5Qy0yLjQzNzU5IDE3LjA2NjkgLTIuNDM3NTkgMzIuOTM0NyA3LjMxMjc4IDQyLjY4NzJDMTIuMTkwMSA0Ny41NjI1IDE4LjU5NTEgNDkuOTk4OSAyNS4wMDAzIDQ5Ljk5ODlDMzEuNDA1NCA0OS45OTg5IDM3LjgwODMgNDcuNTYyNCA0Mi42ODU2IDQyLjY4NzJDNTIuND'+
			'M4MSAzMi45MzQ4IDUyLjQzODEgMTcuMDY2OSA0Mi42ODU2IDcuMzE0MzlaTTM1LjMxNTUgMzIuMzY5OUMzNi4xMzA0IDMzLjE4NDggMzYuMTMwNCAzNC41MDIxIDM1LjMxNTUgMzUuMzE3MUMzNC45MDkgMzUuNzIzNSAzNC4zNzU1IDM1LjkyNzggMzMuODQxOCAzNS45Mjc4QzMzLjMwODMgMzUuOTI3OCAzMi43NzQ2IDM1LjcyMzUgMzIuMzY4MiAzNS4zMTcxTDI1LjAwMDIgMjcuOTQ2OUwxNy42MzQyIDM1LjMxNDlDMTcuMjI1NyAzNS43MjE0IDE2LjY5MjEgMzUuOTI1NyAxNi4xNjA2IDM1LjkyNTdDMTUuNjI3IDM1LjkyNTcgMTUuMDkzNCAzNS43MjE0IDE0LjY4NjkgMzUuMzE0OUMxMy44NzIg'+
			'MzQuNSAxMy44NzIgMzMuMTgwNiAxNC42ODY5IDMyLjM2NzdMMjIuMDUyOSAyNC45OTk3TDE0LjY4NDkgMTcuNjMxN0MxMy44NyAxNi44MTY4IDEzLjg3IDE1LjQ5NzQgMTQuNjg0OSAxNC42ODQ1QzE1LjQ5NzggMTMuODY5NiAxNi44MTcxIDEzLjg2OTYgMTcuNjMyMSAxNC42ODQ1TDI1LjAwMDEgMjIuMDUyNUwzMi4zNjgxIDE0LjY4NDVDMzMuMTgzIDEzLjg2OTYgMzQuNTAwMyAxMy44Njk2IDM1LjMxNTMgMTQuNjg0NUMzNi4xMzAyIDE1LjQ5NzQgMzYuMTMwMiAxNi44MTY4IDM1LjMxNTMgMTcuNjMxN0wyNy45NDczIDI0Ljk5OTdMMzUuMzE1NSAzMi4zNjk5WiIvPgo8L3N2Zz4K';
		me._svg_3_4__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 3_4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 5px;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_3_4.ggIsActive=function() {
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
		me._svg_3_4.onclick=function (e) {
			me.__2105101200500_hover.style.transition='none';
			me.__2105101200500_hover.style.visibility='hidden';
			me.__2105101200500_hover.ggVisible=false;
		}
		me._svg_3_4.ggUpdatePosition=function (useTransition) {
		}
		me.__2105101200500_hover.appendChild(me._svg_3_4);
		el=me._svg_7=document.createElement('div');
		els=me._svg_7__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjUwIiB2aWV3Qm94PSIwIDAgNTAgNTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjUwIj4KIDxyZWN0IGZpbGw9IiNGNjkyMUUiIGhlaWdodD0iNTAiIHJ4PSIyNSIgd2lkdGg9IjUwIi8+CiA8cGF0aCBmaWxsPSJ3aGl0ZSIgZD0iTTYuNjg1MjcgMjYuMDc3OEM4Ljg5MTU0IDE4Ljk4OCAxNS44OTQxIDE0LjE0OTcgMjQuMjg3NSAxNC4wMDZWNS43MTg1NkMyNC4yODc1IDUuMzM1MzMgMjQuNjIzMyA1IDI1LjAwNyA1QzI1LjE1MDggNSAyNS4yOTQ3IDUuMDQ3OSAyNS40Mzg2IDUuMTQzNzFMNDYuNzgxOSAyMC41Njg5Qz'+
			'Q3LjExNzcgMjAuODA4NCA0Ny4xNjU2IDIxLjIzOTUgNDYuOTI1OCAyMS41NzQ5QzQ2Ljg3NzkgMjEuNjIyOCA0Ni44Mjk5IDIxLjY3MDcgNDYuNzgxOSAyMS43MTg2TDI1LjQzODYgMzcuMDQ3OUMyNS4xMDI5IDM3LjI4NzQgMjQuNjcxMiAzNy4xOTE2IDI0LjQzMTQgMzYuOTA0MkMyNC4zMzU1IDM2Ljc2MDUgMjQuMjg3NSAzNi42MTY4IDI0LjI4NzUgMzYuNDczMVYyOC4yMzM1QzE5LjEwNzYgMjguMjMzNSAxNC43NDMgMzAuNjc2NiAxMy4yMDgyIDM0LjM2NTNDMTEuOTEzMiAzNy41MjY5IDEyLjk2ODQgNDAuOTI4MSAxNi4wMzggNDMuNzU0NUMxNi4zMjU3IDQ0LjA0MTkgMTYuMzczNyA0NC40'+
			'NzMxIDE2LjA4NTkgNDQuNzYwNUMxNS45NDIgNDQuOTA0MiAxNS43NTAyIDQ1IDE1LjU1ODMgNDVIMTQuOTgyOEMxNC44Mzg5IDQ1IDE0LjY5NSA0NC45NTIxIDE0LjU5OTEgNDQuODU2M0M3LjU0ODU5IDQwLjIwOTYgNC41MjY5NSAzMi45NzYgNi42ODUyNyAyNi4wNzc4WiIvPgo8L3N2Zz4K';
		me._svg_7__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 7";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 5px;';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_7.ggIsActive=function() {
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
		me._svg_7.onclick=function (e) {
			player.openUrl("https:\/\/www.javiddo.com\/product\/yag-filtri-2105101200500","_blank");
		}
		me._svg_7.ggUpdatePosition=function (useTransition) {
		}
		me.__2105101200500_hover.appendChild(me._svg_7);
		el=me._image_10=document.createElement('div');
		els=me._image_10__img=document.createElement('img');
		els.className='ggskin ggskin_image_10';
		hs=basePath + 'images/image_10.png';
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
		el.ggId="Image 10";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 137px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((137px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 137px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_10.ggIsActive=function() {
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
		me._image_10.ggUpdatePosition=function (useTransition) {
		}
		me.__2105101200500_hover.appendChild(me._image_10);
		me._ht_oil_filter_2105101200500.appendChild(me.__2105101200500_hover);
			me.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				me._ht_oil_filter_2105101200500.ggUpdateConditionTimer();
				me._svg_1.ggUpdateConditionTimer();
			}
			me.hotspotTimerEvent();
			me.__div = me._ht_oil_filter_2105101200500;
	};
	function SkinHotspotClass_ht_air_filter_1041800109(parentScope,hotspot) {
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
		el=me._ht_air_filter_1041800109=document.createElement('div');
		el.ggId="ht_air_filter_1041800109";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='z-index: 2;';
		hs+='height : 0px;';
		hs+='left : 5%;';
		hs+='position : absolute;';
		hs+='top : 4px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_air_filter_1041800109.ggIsActive=function() {
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
		me._ht_air_filter_1041800109.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_air_filter_1041800109.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_air_filter_1041800109.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_air_filter_1041800109']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_air_filter_1041800109.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_air_filter_1041800109']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_air_filter_1041800109.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['ht_air_filter_1041800109']) {
				player.setActiveHotspot(me.hotspot);
				me.elementMouseOver['ht_air_filter_1041800109']=true;
			}
		}
		me._ht_air_filter_1041800109.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_10=document.createElement('div');
		els=me._svg_10__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjUwIiB2aWV3Qm94PSIwIDAgNTAgNTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjUwIj4KIDxwYXRoIGZpbGw9IiNGNjkyMUUiIGQ9Ik01MCAyNUM1MCAxMS4xOTI5IDM4LjgwNzEgMCAyNSAwQzExLjE5MjkgMCAwIDExLjE5MjkgMCAyNUMwIDM4LjgwNzEgMTEuMTkyOSA1MCAyNSA1MEMzOC44MDcxIDUwIDUwIDM4LjgwNzEgNTAgMjVaIi8+CiA8cGF0aCBmaWxsPSJ3aGl0ZSIgZD0iTTE5LjgyOTIgMzYuMDkyM0MxOS40MTExIDM2LjA5MjMgMTkuMDAxIDM2LjAxNTQgMTguNjEwNSAzNS44NjM5TDkuMTMwODYgMzIuMT'+
			'g0MVYzOC4zNjIyQzkuMTMwODYgMzguODU2MiA5LjQ0MDc4IDM5LjI5NzMgOS45MDU2MSAzOS40NjQ3TDIzLjkzODcgNDQuNTE5VjMyLjM1NjNMMjIuNzQyNSAzNC40MTU1QzIyLjE0MTggMzUuNDQ5OCAyMS4wMjU0IDM2LjA5MjMgMTkuODI5MiAzNi4wOTIzWiIvPgogPHBhdGggZmlsbD0id2hpdGUiIGQ9Ik0zMC4xNzEgMzYuMDkyM0MyOC45NzQ4IDM2LjA5MjMgMjcuODU4NSAzNS40NDk4IDI3LjI1NzYgMzQuNDE1NUwyNi4yODMyIDMyLjczNzlWNDQuNTMxTDQwLjM0OTcgMzkuNDY0NkM0MC44MTQ1IDM5LjI5NzIgNDEuMTI0NSAzOC44NTYyIDQxLjEyNDUgMzguMzYyMVYzMi4wODVMMzEuMzg5'+
			'NyAzNS44NjM4QzMwLjk5OTEgMzYuMDE1NCAzMC41ODkyIDM2LjA5MjMgMzAuMTcxIDM2LjA5MjNaIi8+CiA8cGF0aCBmaWxsPSJ3aGl0ZSIgZD0iTTE3LjAzMTkgMTkuNTc0NkMxNi4zMzM3IDE4LjcyNDEgMTUuNzY5MSAxNy43NjAzIDE1LjM2OTQgMTYuNzE1NUwxMi4yNDYxIDE3Ljg0MDNMMTcuMDMxOSAxOS41NzQ2WiIvPgogPHBhdGggZmlsbD0id2hpdGUiIGQ9Ik0zNy43NzY5IDE3LjgzM0wzNC42NDQ4IDE2LjY4NTJDMzQuMjQ0NSAxNy43NDE3IDMzLjY3NTcgMTguNzE2IDMyLjk3MDcgMTkuNTc0NkwzNy43NzY5IDE3LjgzM1oiLz4KIDxwYXRoIGZpbGw9IndoaXRlIiBkPSJNNDQuODU0ID'+
			'I2Ljg0NjVMNDAuOTY1MSAyMC4wNTg5QzQwLjY5ODUgMTkuNTkzOCA0MC4xMzYgMTkuMzg3NSAzOS42MzIgMTkuNTcwMkwyNS4wMDAzIDI0Ljg3MTFMMTAuMzY4NyAxOS41NzAyQzkuODY0NiAxOS4zODc1IDkuMzAyMTEgMTkuNTkzOCA5LjAzNTU1IDIwLjA1ODlMNS4xNTkyOSAyNi44MjQzQzUuMDUyMSAyNy4wMTE0IDQuOTkxMzIgMjcuMjI0MSA1LjAwMTAxIDI3LjQzOTVDNS4wMjEzMiAyNy44OSA1LjMwNDQ0IDI4LjI2OCA1LjcwNDU5IDI4LjQyMzNMMTkuNDMwOSAzMy43NTE2QzE5LjU2MTUgMzMuODAyMyAxOS42OTY1IDMzLjgyNjUgMTkuODI5OCAzMy44MjY1QzIwLjIxMzIgMzMuODI2NSAy'+
			'MC41ODE2IDMzLjYyNTggMjAuNzg0IDMzLjI3NzJMMjUuMDAwMiAyNS43MzM4TDI5LjIxNjQgMzMuMjc3MkMyOS40MTg5IDMzLjYyNTggMjkuNzg3MyAzMy44MjY1IDMwLjE3MDcgMzMuODI2NUMzMC4zMDQgMzMuODI2NSAzMC40MzkgMzMuODAyMyAzMC41Njk2IDMzLjc1MTZMNDQuMjk1OSAyOC40MjMzQzQ0LjU5NTUgMjguMzA3IDQ0LjgyOTUgMjguMDY1OCA0NC45MzY2IDI3Ljc2MjlDNDUuMDQ0MSAyNy40NiA0NS4wMTM4IDI3LjEyNTQgNDQuODU0IDI2Ljg0NjVaIi8+CiA8cGF0aCBmaWxsPSJ3aGl0ZSIgZD0iTTI1LjAwMDEgMjEuMDg2MkMyOS40MzUxIDIxLjA4NjIgMzMuMDQzMyAxNy40Nz'+
			'gxIDMzLjA0MzMgMTMuMDQzMUMzMy4wNDMzIDguNjA4MDcgMjkuNDM1MSA1IDI1LjAwMDEgNUMyMC41NjUxIDUgMTYuOTU3IDguNjA4MTUgMTYuOTU3IDEzLjA0MzJDMTYuOTU3IDE3LjQ3ODIgMjAuNTY1MSAyMS4wODYyIDI1LjAwMDEgMjEuMDg2MlpNMjEuNjcxNiAxNC4yNzQ1QzIxLjIxMzkgMTMuODE2OSAyMS4yMTM5IDEzLjA3NSAyMS42NzE2IDEyLjYxNzNDMjIuMTI5MiAxMi4xNTk3IDIyLjg3MTIgMTIuMTU5NyAyMy4zMjg4IDEyLjYxNzNMMjMuOTg5OCAxMy4yNzgzTDI2LjcxMSAxMC41NTcxQzI3LjE2ODYgMTAuMDk5NSAyNy45MTA2IDEwLjA5OTUgMjguMzY4MyAxMC41NTcxQzI4Ljgy'+
			'NTkgMTEuMDE0OCAyOC44MjU5IDExLjc1NjcgMjguMzY4MyAxMi4yMTQzTDI0LjgxODUgMTUuNzY0MUMyNC41ODk2IDE1Ljk5MyAyNC4yODk3IDE2LjEwNzQgMjMuOTg5OSAxNi4xMDc0QzIzLjY5MDEgMTYuMTA3NCAyMy4zOTAxIDE1Ljk5MyAyMy4xNjEzIDE1Ljc2NDJMMjEuNjcxNiAxNC4yNzQ1WiIvPgo8L3N2Zz4K';
		me._svg_10__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : 96px;';
		hs+='position : absolute;';
		hs+='top : -121px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_10.ggIsActive=function() {
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
		me._svg_10.onclick=function (e) {
			skin.__1041800109.style.transition='none';
			skin.__1041800109.style.visibility=(Number(skin.__1041800109.style.opacity)>0||!skin.__1041800109.style.opacity)?'inherit':'hidden';
			skin.__1041800109.ggVisible=true;
		}
		me._svg_10.onmouseover=function (e) {
			me.__1041800109_hover.style.transition='none';
			me.__1041800109_hover.style.visibility=(Number(me.__1041800109_hover.style.opacity)>0||!me.__1041800109_hover.style.opacity)?'inherit':'hidden';
			me.__1041800109_hover.ggVisible=true;
			var list=me.findElements("2105101200500_hover",true);
			while(list.length>0) {
				var e=list.pop();
				e.style.transition='none';
				e.style.visibility='hidden';
				e.ggVisible=false;
			}
			me.elementMouseOver['svg_10']=true;
		}
		me._svg_10.onmouseout=function (e) {
			me.elementMouseOver['svg_10']=false;
		}
		me._svg_10.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['svg_10']) {
				me.__1041800109_hover.style.transition='none';
				me.__1041800109_hover.style.visibility=(Number(me.__1041800109_hover.style.opacity)>0||!me.__1041800109_hover.style.opacity)?'inherit':'hidden';
				me.__1041800109_hover.ggVisible=true;
				var list=me.findElements("2105101200500_hover",true);
				while(list.length>0) {
					var e=list.pop();
					e.style.transition='none';
					e.style.visibility='hidden';
					e.ggVisible=false;
				}
				me.elementMouseOver['svg_10']=true;
			}
		}
		me._svg_10.ggUpdatePosition=function (useTransition) {
		}
		me._ht_air_filter_1041800109.appendChild(me._svg_10);
		el=me._svg_60=document.createElement('div');
		els=me._svg_60__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjY0IiB2aWV3Qm94PSIwIDAgNjggNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjY4Ij4KIDxyZWN0IGZpbGw9IiNGNjkyMUUiIGhlaWdodD0iMSIgeT0iNjMuMDc5MSIgdHJhbnNmb3JtPSJyb3RhdGUoLTQzLjI4NjEgMCA2My4wNzkxKSIgd2lkdGg9IjkyIi8+Cjwvc3ZnPgo=';
		me._svg_60__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 6";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 94px;';
		hs+='left : 4px;';
		hs+='position : absolute;';
		hs+='top : -96px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_60.ggIsActive=function() {
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
		me._svg_60.ggUpdatePosition=function (useTransition) {
		}
		me._ht_air_filter_1041800109.appendChild(me._svg_60);
		el=me.__1041800109_hover=document.createElement('div');
		el.ggId="1041800109_hover";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -58px;';
		hs+='cursor : default;';
		hs+='height : 150px;';
		hs+='position : absolute;';
		hs+='right : -585px;';
		hs+='visibility : hidden;';
		hs+='width : 453px;';
		hs+='pointer-events:auto;';
		hs+='border-radius: 10px; background-color: #ffffffdb; transition: 2s;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1041800109_hover.ggIsActive=function() {
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
		me.__1041800109_hover.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_20=document.createElement('div');
		els=me._text_20__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 83px;';
		hs+='position : absolute;';
		hs+='right : 45px;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 51.4349%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		hs+="text-align: justify;";
		els.setAttribute('style',hs);
		me._text_20.ggUpdateText=function() {
			var params = [];
			var hs = player._("<div class=\"ggmarkdown\"><p>One of the most important components of your vehicle is its oil filter. Early\nengines didn\u2019t have the tight tolerances and fragile technologies as they do\ntoday such as variable valve timing controlled by electronically controlled oil\npressure. Instead, they were less complex, didn\u2019t use oil filters, and ran on\nthe poorest grade oil imaginable. Today there are various types of oil filters\nused and the truth is that they are not all created equal.<\/p>\n<div>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_20.ggUpdateText();
		el.appendChild(els);
		me._text_20.ggIsActive=function() {
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
		me._text_20.ggUpdatePosition=function (useTransition) {
		}
		me.__1041800109_hover.appendChild(me._text_20);
		el=me._text_30=document.createElement('div');
		els=me._text_30__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 13px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 36px;';
		hs+='left : 176px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 50.9934%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 18px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_30.ggUpdateText=function() {
			var params = [];
			var hs = player._("<div class=\"ggmarkdown\"><p>$6 - $11<\/p>\n<div>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_30.ggUpdateText();
		el.appendChild(els);
		me._text_30.ggIsActive=function() {
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
		me._text_30.ggUpdatePosition=function (useTransition) {
		}
		me.__1041800109_hover.appendChild(me._text_30);
		el=me._text_40=document.createElement('div');
		els=me._text_40__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 10px;';
		hs+='color : rgba(103,103,103,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 177px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 10px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_40.ggUpdateText=function() {
			var params = [];
			var hs = player._("For peaces", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_40.ggUpdateText();
		el.appendChild(els);
		me._text_40.ggIsActive=function() {
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
		me._text_40.ggUpdatePosition=function (useTransition) {
		}
		me.__1041800109_hover.appendChild(me._text_40);
		el=me._svg_3_3=document.createElement('div');
		els=me._svg_3_3__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjUwIiB2aWV3Qm94PSIwIDAgNTAgNTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjUwIj4KIDxwYXRoIGZpbGw9IiNGNjkyMUUiIGQ9Ik00Mi42ODU2IDcuMzE0MzlDMzIuOTMxIC0yLjQzODEzIDE3LjA2NzQgLTIuNDM4MTMgNy4zMTI3OCA3LjMxNDM5Qy0yLjQzNzU5IDE3LjA2NjkgLTIuNDM3NTkgMzIuOTM0NyA3LjMxMjc4IDQyLjY4NzJDMTIuMTkwMSA0Ny41NjI1IDE4LjU5NTEgNDkuOTk4OSAyNS4wMDAzIDQ5Ljk5ODlDMzEuNDA1NCA0OS45OTg5IDM3LjgwODMgNDcuNTYyNCA0Mi42ODU2IDQyLjY4NzJDNTIuND'+
			'M4MSAzMi45MzQ4IDUyLjQzODEgMTcuMDY2OSA0Mi42ODU2IDcuMzE0MzlaTTM1LjMxNTUgMzIuMzY5OUMzNi4xMzA0IDMzLjE4NDggMzYuMTMwNCAzNC41MDIxIDM1LjMxNTUgMzUuMzE3MUMzNC45MDkgMzUuNzIzNSAzNC4zNzU1IDM1LjkyNzggMzMuODQxOCAzNS45Mjc4QzMzLjMwODMgMzUuOTI3OCAzMi43NzQ2IDM1LjcyMzUgMzIuMzY4MiAzNS4zMTcxTDI1LjAwMDIgMjcuOTQ2OUwxNy42MzQyIDM1LjMxNDlDMTcuMjI1NyAzNS43MjE0IDE2LjY5MjEgMzUuOTI1NyAxNi4xNjA2IDM1LjkyNTdDMTUuNjI3IDM1LjkyNTcgMTUuMDkzNCAzNS43MjE0IDE0LjY4NjkgMzUuMzE0OUMxMy44NzIg'+
			'MzQuNSAxMy44NzIgMzMuMTgwNiAxNC42ODY5IDMyLjM2NzdMMjIuMDUyOSAyNC45OTk3TDE0LjY4NDkgMTcuNjMxN0MxMy44NyAxNi44MTY4IDEzLjg3IDE1LjQ5NzQgMTQuNjg0OSAxNC42ODQ1QzE1LjQ5NzggMTMuODY5NiAxNi44MTcxIDEzLjg2OTYgMTcuNjMyMSAxNC42ODQ1TDI1LjAwMDEgMjIuMDUyNUwzMi4zNjgxIDE0LjY4NDVDMzMuMTgzIDEzLjg2OTYgMzQuNTAwMyAxMy44Njk2IDM1LjMxNTMgMTQuNjg0NUMzNi4xMzAyIDE1LjQ5NzQgMzYuMTMwMiAxNi44MTY4IDM1LjMxNTMgMTcuNjMxN0wyNy45NDczIDI0Ljk5OTdMMzUuMzE1NSAzMi4zNjk5WiIvPgo8L3N2Zz4K';
		me._svg_3_3__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 3_3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 5px;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_3_3.ggIsActive=function() {
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
		me._svg_3_3.onclick=function (e) {
			me.__1041800109_hover.style.transition='none';
			me.__1041800109_hover.style.visibility='hidden';
			me.__1041800109_hover.ggVisible=false;
		}
		me._svg_3_3.ggUpdatePosition=function (useTransition) {
		}
		me.__1041800109_hover.appendChild(me._svg_3_3);
		el=me._svg_70=document.createElement('div');
		els=me._svg_70__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjUwIiB2aWV3Qm94PSIwIDAgNTAgNTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjUwIj4KIDxyZWN0IGZpbGw9IiNGNjkyMUUiIGhlaWdodD0iNTAiIHJ4PSIyNSIgd2lkdGg9IjUwIi8+CiA8cGF0aCBmaWxsPSJ3aGl0ZSIgZD0iTTYuNjg1MjcgMjYuMDc3OEM4Ljg5MTU0IDE4Ljk4OCAxNS44OTQxIDE0LjE0OTcgMjQuMjg3NSAxNC4wMDZWNS43MTg1NkMyNC4yODc1IDUuMzM1MzMgMjQuNjIzMyA1IDI1LjAwNyA1QzI1LjE1MDggNSAyNS4yOTQ3IDUuMDQ3OSAyNS40Mzg2IDUuMTQzNzFMNDYuNzgxOSAyMC41Njg5Qz'+
			'Q3LjExNzcgMjAuODA4NCA0Ny4xNjU2IDIxLjIzOTUgNDYuOTI1OCAyMS41NzQ5QzQ2Ljg3NzkgMjEuNjIyOCA0Ni44Mjk5IDIxLjY3MDcgNDYuNzgxOSAyMS43MTg2TDI1LjQzODYgMzcuMDQ3OUMyNS4xMDI5IDM3LjI4NzQgMjQuNjcxMiAzNy4xOTE2IDI0LjQzMTQgMzYuOTA0MkMyNC4zMzU1IDM2Ljc2MDUgMjQuMjg3NSAzNi42MTY4IDI0LjI4NzUgMzYuNDczMVYyOC4yMzM1QzE5LjEwNzYgMjguMjMzNSAxNC43NDMgMzAuNjc2NiAxMy4yMDgyIDM0LjM2NTNDMTEuOTEzMiAzNy41MjY5IDEyLjk2ODQgNDAuOTI4MSAxNi4wMzggNDMuNzU0NUMxNi4zMjU3IDQ0LjA0MTkgMTYuMzczNyA0NC40'+
			'NzMxIDE2LjA4NTkgNDQuNzYwNUMxNS45NDIgNDQuOTA0MiAxNS43NTAyIDQ1IDE1LjU1ODMgNDVIMTQuOTgyOEMxNC44Mzg5IDQ1IDE0LjY5NSA0NC45NTIxIDE0LjU5OTEgNDQuODU2M0M3LjU0ODU5IDQwLjIwOTYgNC41MjY5NSAzMi45NzYgNi42ODUyNyAyNi4wNzc4WiIvPgo8L3N2Zz4K';
		me._svg_70__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 7";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 5px;';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_70.ggIsActive=function() {
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
		me._svg_70.onclick=function (e) {
			player.openUrl("https:\/\/www.fcpeuro.com\/products\/mercedes-engine-oil-filter-1041800109he","_blank");
		}
		me._svg_70.ggUpdatePosition=function (useTransition) {
		}
		me.__1041800109_hover.appendChild(me._svg_70);
		el=me._image_9=document.createElement('div');
		els=me._image_9__img=document.createElement('img');
		els.className='ggskin ggskin_image_9';
		hs=basePath + 'images/image_9.png';
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
		el.ggId="Image 9";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 137px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((137px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 154px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_9.ggIsActive=function() {
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
		me._image_9.ggUpdatePosition=function (useTransition) {
		}
		me.__1041800109_hover.appendChild(me._image_9);
		me._ht_air_filter_1041800109.appendChild(me.__1041800109_hover);
			me.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				me._ht_air_filter_1041800109.ggUpdateConditionTimer();
				me._svg_10.ggUpdateConditionTimer();
			}
			me.hotspotTimerEvent();
			me.__div = me._ht_air_filter_1041800109;
	};
	function SkinHotspotClass_ht_fuel_filter_ut_6012(parentScope,hotspot) {
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
		el=me._ht_fuel_filter_ut_6012=document.createElement('div');
		el.ggId="ht_fuel_filter_ut_6012";
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
		me._ht_fuel_filter_ut_6012.ggIsActive=function() {
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
		me._ht_fuel_filter_ut_6012.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_fuel_filter_ut_6012.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_fuel_filter_ut_6012.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_fuel_filter_ut_6012']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_fuel_filter_ut_6012.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_fuel_filter_ut_6012']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_fuel_filter_ut_6012.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['ht_fuel_filter_ut_6012']) {
				player.setActiveHotspot(me.hotspot);
				me.elementMouseOver['ht_fuel_filter_ut_6012']=true;
			}
		}
		me._ht_fuel_filter_ut_6012.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_11=document.createElement('div');
		els=me._svg_11__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjUwIiB2aWV3Qm94PSIwIDAgNTAgNTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjUwIj4KIDxwYXRoIGZpbGw9IiNGNjkyMUUiIGQ9Ik01MCAyNUM1MCAxMS4xOTI5IDM4LjgwNzEgMCAyNSAwQzExLjE5MjkgMCAwIDExLjE5MjkgMCAyNUMwIDM4LjgwNzEgMTEuMTkyOSA1MCAyNSA1MEMzOC44MDcxIDUwIDUwIDM4LjgwNzEgNTAgMjVaIi8+CiA8cGF0aCBmaWxsPSJ3aGl0ZSIgZD0iTTE5LjgyOTIgMzYuMDkyM0MxOS40MTExIDM2LjA5MjMgMTkuMDAxIDM2LjAxNTQgMTguNjEwNSAzNS44NjM5TDkuMTMwODYgMzIuMT'+
			'g0MVYzOC4zNjIyQzkuMTMwODYgMzguODU2MiA5LjQ0MDc4IDM5LjI5NzMgOS45MDU2MSAzOS40NjQ3TDIzLjkzODcgNDQuNTE5VjMyLjM1NjNMMjIuNzQyNSAzNC40MTU1QzIyLjE0MTggMzUuNDQ5OCAyMS4wMjU0IDM2LjA5MjMgMTkuODI5MiAzNi4wOTIzWiIvPgogPHBhdGggZmlsbD0id2hpdGUiIGQ9Ik0zMC4xNzEgMzYuMDkyM0MyOC45NzQ4IDM2LjA5MjMgMjcuODU4NSAzNS40NDk4IDI3LjI1NzYgMzQuNDE1NUwyNi4yODMyIDMyLjczNzlWNDQuNTMxTDQwLjM0OTcgMzkuNDY0NkM0MC44MTQ1IDM5LjI5NzIgNDEuMTI0NSAzOC44NTYyIDQxLjEyNDUgMzguMzYyMVYzMi4wODVMMzEuMzg5'+
			'NyAzNS44NjM4QzMwLjk5OTEgMzYuMDE1NCAzMC41ODkyIDM2LjA5MjMgMzAuMTcxIDM2LjA5MjNaIi8+CiA8cGF0aCBmaWxsPSJ3aGl0ZSIgZD0iTTE3LjAzMTkgMTkuNTc0NkMxNi4zMzM3IDE4LjcyNDEgMTUuNzY5MSAxNy43NjAzIDE1LjM2OTQgMTYuNzE1NUwxMi4yNDYxIDE3Ljg0MDNMMTcuMDMxOSAxOS41NzQ2WiIvPgogPHBhdGggZmlsbD0id2hpdGUiIGQ9Ik0zNy43NzY5IDE3LjgzM0wzNC42NDQ4IDE2LjY4NTJDMzQuMjQ0NSAxNy43NDE3IDMzLjY3NTcgMTguNzE2IDMyLjk3MDcgMTkuNTc0NkwzNy43NzY5IDE3LjgzM1oiLz4KIDxwYXRoIGZpbGw9IndoaXRlIiBkPSJNNDQuODU0ID'+
			'I2Ljg0NjVMNDAuOTY1MSAyMC4wNTg5QzQwLjY5ODUgMTkuNTkzOCA0MC4xMzYgMTkuMzg3NSAzOS42MzIgMTkuNTcwMkwyNS4wMDAzIDI0Ljg3MTFMMTAuMzY4NyAxOS41NzAyQzkuODY0NiAxOS4zODc1IDkuMzAyMTEgMTkuNTkzOCA5LjAzNTU1IDIwLjA1ODlMNS4xNTkyOSAyNi44MjQzQzUuMDUyMSAyNy4wMTE0IDQuOTkxMzIgMjcuMjI0MSA1LjAwMTAxIDI3LjQzOTVDNS4wMjEzMiAyNy44OSA1LjMwNDQ0IDI4LjI2OCA1LjcwNDU5IDI4LjQyMzNMMTkuNDMwOSAzMy43NTE2QzE5LjU2MTUgMzMuODAyMyAxOS42OTY1IDMzLjgyNjUgMTkuODI5OCAzMy44MjY1QzIwLjIxMzIgMzMuODI2NSAy'+
			'MC41ODE2IDMzLjYyNTggMjAuNzg0IDMzLjI3NzJMMjUuMDAwMiAyNS43MzM4TDI5LjIxNjQgMzMuMjc3MkMyOS40MTg5IDMzLjYyNTggMjkuNzg3MyAzMy44MjY1IDMwLjE3MDcgMzMuODI2NUMzMC4zMDQgMzMuODI2NSAzMC40MzkgMzMuODAyMyAzMC41Njk2IDMzLjc1MTZMNDQuMjk1OSAyOC40MjMzQzQ0LjU5NTUgMjguMzA3IDQ0LjgyOTUgMjguMDY1OCA0NC45MzY2IDI3Ljc2MjlDNDUuMDQ0MSAyNy40NiA0NS4wMTM4IDI3LjEyNTQgNDQuODU0IDI2Ljg0NjVaIi8+CiA8cGF0aCBmaWxsPSJ3aGl0ZSIgZD0iTTI1LjAwMDEgMjEuMDg2MkMyOS40MzUxIDIxLjA4NjIgMzMuMDQzMyAxNy40Nz'+
			'gxIDMzLjA0MzMgMTMuMDQzMUMzMy4wNDMzIDguNjA4MDcgMjkuNDM1MSA1IDI1LjAwMDEgNUMyMC41NjUxIDUgMTYuOTU3IDguNjA4MTUgMTYuOTU3IDEzLjA0MzJDMTYuOTU3IDE3LjQ3ODIgMjAuNTY1MSAyMS4wODYyIDI1LjAwMDEgMjEuMDg2MlpNMjEuNjcxNiAxNC4yNzQ1QzIxLjIxMzkgMTMuODE2OSAyMS4yMTM5IDEzLjA3NSAyMS42NzE2IDEyLjYxNzNDMjIuMTI5MiAxMi4xNTk3IDIyLjg3MTIgMTIuMTU5NyAyMy4zMjg4IDEyLjYxNzNMMjMuOTg5OCAxMy4yNzgzTDI2LjcxMSAxMC41NTcxQzI3LjE2ODYgMTAuMDk5NSAyNy45MTA2IDEwLjA5OTUgMjguMzY4MyAxMC41NTcxQzI4Ljgy'+
			'NTkgMTEuMDE0OCAyOC44MjU5IDExLjc1NjcgMjguMzY4MyAxMi4yMTQzTDI0LjgxODUgMTUuNzY0MUMyNC41ODk2IDE1Ljk5MyAyNC4yODk3IDE2LjEwNzQgMjMuOTg5OSAxNi4xMDc0QzIzLjY5MDEgMTYuMTA3NCAyMy4zOTAxIDE1Ljk5MyAyMy4xNjEzIDE1Ljc2NDJMMjEuNjcxNiAxNC4yNzQ1WiIvPgo8L3N2Zz4K';
		me._svg_11__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : 96px;';
		hs+='position : absolute;';
		hs+='top : -121px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_11.ggIsActive=function() {
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
		me._svg_11.onclick=function (e) {
			skin._ut6012.style.transition='none';
			skin._ut6012.style.visibility=(Number(skin._ut6012.style.opacity)>0||!skin._ut6012.style.opacity)?'inherit':'hidden';
			skin._ut6012.ggVisible=true;
		}
		me._svg_11.onmouseover=function (e) {
			me._ut6012_hover.style.transition='none';
			me._ut6012_hover.style.visibility=(Number(me._ut6012_hover.style.opacity)>0||!me._ut6012_hover.style.opacity)?'inherit':'hidden';
			me._ut6012_hover.ggVisible=true;
			var list=me.findElements("PL270_hover",true);
			while(list.length>0) {
				var e=list.pop();
				e.style.transition='none';
				e.style.visibility='hidden';
				e.ggVisible=false;
			}
			me.elementMouseOver['svg_11']=true;
		}
		me._svg_11.onmouseout=function (e) {
			me.elementMouseOver['svg_11']=false;
		}
		me._svg_11.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['svg_11']) {
				me._ut6012_hover.style.transition='none';
				me._ut6012_hover.style.visibility=(Number(me._ut6012_hover.style.opacity)>0||!me._ut6012_hover.style.opacity)?'inherit':'hidden';
				me._ut6012_hover.ggVisible=true;
				var list=me.findElements("PL270_hover",true);
				while(list.length>0) {
					var e=list.pop();
					e.style.transition='none';
					e.style.visibility='hidden';
					e.ggVisible=false;
				}
				me.elementMouseOver['svg_11']=true;
			}
		}
		me._svg_11.ggUpdatePosition=function (useTransition) {
		}
		me._ht_fuel_filter_ut_6012.appendChild(me._svg_11);
		el=me._svg_61=document.createElement('div');
		els=me._svg_61__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjY0IiB2aWV3Qm94PSIwIDAgNjggNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjY4Ij4KIDxyZWN0IGZpbGw9IiNGNjkyMUUiIGhlaWdodD0iMSIgeT0iNjMuMDc5MSIgdHJhbnNmb3JtPSJyb3RhdGUoLTQzLjI4NjEgMCA2My4wNzkxKSIgd2lkdGg9IjkyIi8+Cjwvc3ZnPgo=';
		me._svg_61__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 6";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 94px;';
		hs+='left : 4px;';
		hs+='position : absolute;';
		hs+='top : -96px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_61.ggIsActive=function() {
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
		me._svg_61.ggUpdatePosition=function (useTransition) {
		}
		me._ht_fuel_filter_ut_6012.appendChild(me._svg_61);
		el=me._ut6012_hover=document.createElement('div');
		el.ggId="UT6012_hover";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -58px;';
		hs+='cursor : default;';
		hs+='height : 150px;';
		hs+='position : absolute;';
		hs+='right : -585px;';
		hs+='visibility : hidden;';
		hs+='width : 453px;';
		hs+='pointer-events:auto;';
		hs+='border-radius: 10px; background-color: #ffffffdb; transition: 2s;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ut6012_hover.ggIsActive=function() {
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
		me._ut6012_hover.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_21=document.createElement('div');
		els=me._text_21__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 83px;';
		hs+='position : absolute;';
		hs+='right : 45px;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 51.4349%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		hs+="text-align: justify;";
		els.setAttribute('style',hs);
		me._text_21.ggUpdateText=function() {
			var params = [];
			var hs = player._("<div class=\"ggmarkdown\"><p>FILTR PALIWA SEPARATOR Z ODSTOJNIKIEM H-232mm fi-103mm 1-14 UNS CASE\/ CLAAS\nMOT. D2862\/\/ DAF 95XF\/ 105\/ CF75\/ CF IV\/ XF106 mot. PE\/ PR\/ PX-7\/ MX\/ MX-11\/\nMX-13\/ XF\/XE\/XM\/VF\/\/ DOOSAN mot. DL\/ DV<\/p>\n<div>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_21.ggUpdateText();
		el.appendChild(els);
		me._text_21.ggIsActive=function() {
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
		me._text_21.ggUpdatePosition=function (useTransition) {
		}
		me._ut6012_hover.appendChild(me._text_21);
		el=me._text_31=document.createElement('div');
		els=me._text_31__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 13px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 36px;';
		hs+='left : 176px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 50.9934%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 18px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_31.ggUpdateText=function() {
			var params = [];
			var hs = player._("<div class=\"ggmarkdown\"><p>$30 - $50<\/p>\n<div>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_31.ggUpdateText();
		el.appendChild(els);
		me._text_31.ggIsActive=function() {
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
		me._text_31.ggUpdatePosition=function (useTransition) {
		}
		me._ut6012_hover.appendChild(me._text_31);
		el=me._text_41=document.createElement('div');
		els=me._text_41__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 10px;';
		hs+='color : rgba(103,103,103,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 177px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 10px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_41.ggUpdateText=function() {
			var params = [];
			var hs = player._("For peaces", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_41.ggUpdateText();
		el.appendChild(els);
		me._text_41.ggIsActive=function() {
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
		me._text_41.ggUpdatePosition=function (useTransition) {
		}
		me._ut6012_hover.appendChild(me._text_41);
		el=me._svg_3=document.createElement('div');
		els=me._svg_3__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjUwIiB2aWV3Qm94PSIwIDAgNTAgNTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjUwIj4KIDxwYXRoIGZpbGw9IiNGNjkyMUUiIGQ9Ik00Mi42ODU2IDcuMzE0MzlDMzIuOTMxIC0yLjQzODEzIDE3LjA2NzQgLTIuNDM4MTMgNy4zMTI3OCA3LjMxNDM5Qy0yLjQzNzU5IDE3LjA2NjkgLTIuNDM3NTkgMzIuOTM0NyA3LjMxMjc4IDQyLjY4NzJDMTIuMTkwMSA0Ny41NjI1IDE4LjU5NTEgNDkuOTk4OSAyNS4wMDAzIDQ5Ljk5ODlDMzEuNDA1NCA0OS45OTg5IDM3LjgwODMgNDcuNTYyNCA0Mi42ODU2IDQyLjY4NzJDNTIuND'+
			'M4MSAzMi45MzQ4IDUyLjQzODEgMTcuMDY2OSA0Mi42ODU2IDcuMzE0MzlaTTM1LjMxNTUgMzIuMzY5OUMzNi4xMzA0IDMzLjE4NDggMzYuMTMwNCAzNC41MDIxIDM1LjMxNTUgMzUuMzE3MUMzNC45MDkgMzUuNzIzNSAzNC4zNzU1IDM1LjkyNzggMzMuODQxOCAzNS45Mjc4QzMzLjMwODMgMzUuOTI3OCAzMi43NzQ2IDM1LjcyMzUgMzIuMzY4MiAzNS4zMTcxTDI1LjAwMDIgMjcuOTQ2OUwxNy42MzQyIDM1LjMxNDlDMTcuMjI1NyAzNS43MjE0IDE2LjY5MjEgMzUuOTI1NyAxNi4xNjA2IDM1LjkyNTdDMTUuNjI3IDM1LjkyNTcgMTUuMDkzNCAzNS43MjE0IDE0LjY4NjkgMzUuMzE0OUMxMy44NzIg'+
			'MzQuNSAxMy44NzIgMzMuMTgwNiAxNC42ODY5IDMyLjM2NzdMMjIuMDUyOSAyNC45OTk3TDE0LjY4NDkgMTcuNjMxN0MxMy44NyAxNi44MTY4IDEzLjg3IDE1LjQ5NzQgMTQuNjg0OSAxNC42ODQ1QzE1LjQ5NzggMTMuODY5NiAxNi44MTcxIDEzLjg2OTYgMTcuNjMyMSAxNC42ODQ1TDI1LjAwMDEgMjIuMDUyNUwzMi4zNjgxIDE0LjY4NDVDMzMuMTgzIDEzLjg2OTYgMzQuNTAwMyAxMy44Njk2IDM1LjMxNTMgMTQuNjg0NUMzNi4xMzAyIDE1LjQ5NzQgMzYuMTMwMiAxNi44MTY4IDM1LjMxNTMgMTcuNjMxN0wyNy45NDczIDI0Ljk5OTdMMzUuMzE1NSAzMi4zNjk5WiIvPgo8L3N2Zz4K';
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
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 5px;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
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
			return me.ggNodeId;
		}
		me._svg_3.onclick=function (e) {
			me._ut6012_hover.style.transition='none';
			me._ut6012_hover.style.visibility='hidden';
			me._ut6012_hover.ggVisible=false;
		}
		me._svg_3.ggUpdatePosition=function (useTransition) {
		}
		me._ut6012_hover.appendChild(me._svg_3);
		el=me._svg_71=document.createElement('div');
		els=me._svg_71__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjUwIiB2aWV3Qm94PSIwIDAgNTAgNTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjUwIj4KIDxyZWN0IGZpbGw9IiNGNjkyMUUiIGhlaWdodD0iNTAiIHJ4PSIyNSIgd2lkdGg9IjUwIi8+CiA8cGF0aCBmaWxsPSJ3aGl0ZSIgZD0iTTYuNjg1MjcgMjYuMDc3OEM4Ljg5MTU0IDE4Ljk4OCAxNS44OTQxIDE0LjE0OTcgMjQuMjg3NSAxNC4wMDZWNS43MTg1NkMyNC4yODc1IDUuMzM1MzMgMjQuNjIzMyA1IDI1LjAwNyA1QzI1LjE1MDggNSAyNS4yOTQ3IDUuMDQ3OSAyNS40Mzg2IDUuMTQzNzFMNDYuNzgxOSAyMC41Njg5Qz'+
			'Q3LjExNzcgMjAuODA4NCA0Ny4xNjU2IDIxLjIzOTUgNDYuOTI1OCAyMS41NzQ5QzQ2Ljg3NzkgMjEuNjIyOCA0Ni44Mjk5IDIxLjY3MDcgNDYuNzgxOSAyMS43MTg2TDI1LjQzODYgMzcuMDQ3OUMyNS4xMDI5IDM3LjI4NzQgMjQuNjcxMiAzNy4xOTE2IDI0LjQzMTQgMzYuOTA0MkMyNC4zMzU1IDM2Ljc2MDUgMjQuMjg3NSAzNi42MTY4IDI0LjI4NzUgMzYuNDczMVYyOC4yMzM1QzE5LjEwNzYgMjguMjMzNSAxNC43NDMgMzAuNjc2NiAxMy4yMDgyIDM0LjM2NTNDMTEuOTEzMiAzNy41MjY5IDEyLjk2ODQgNDAuOTI4MSAxNi4wMzggNDMuNzU0NUMxNi4zMjU3IDQ0LjA0MTkgMTYuMzczNyA0NC40'+
			'NzMxIDE2LjA4NTkgNDQuNzYwNUMxNS45NDIgNDQuOTA0MiAxNS43NTAyIDQ1IDE1LjU1ODMgNDVIMTQuOTgyOEMxNC44Mzg5IDQ1IDE0LjY5NSA0NC45NTIxIDE0LjU5OTEgNDQuODU2M0M3LjU0ODU5IDQwLjIwOTYgNC41MjY5NSAzMi45NzYgNi42ODUyNyAyNi4wNzc4WiIvPgo8L3N2Zz4K';
		me._svg_71__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 7";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 5px;';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_71.ggIsActive=function() {
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
		me._svg_71.onclick=function (e) {
			player.openUrl("https:\/\/autos.com.pl\/pl\/produkt\/filtr-paliwa-separator-unitruck-ut6012b\/132406","_blank");
		}
		me._svg_71.ggUpdatePosition=function (useTransition) {
		}
		me._ut6012_hover.appendChild(me._svg_71);
		el=me._image_8=document.createElement('div');
		els=me._image_8__img=document.createElement('img');
		els.className='ggskin ggskin_image_8';
		hs=basePath + 'images/image_8.png';
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
		el.ggId="Image 8";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 137px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((137px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 137px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_8.ggIsActive=function() {
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
		me._image_8.ggUpdatePosition=function (useTransition) {
		}
		me._ut6012_hover.appendChild(me._image_8);
		me._ht_fuel_filter_ut_6012.appendChild(me._ut6012_hover);
			me.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				me._ht_fuel_filter_ut_6012.ggUpdateConditionTimer();
				me._svg_11.ggUpdateConditionTimer();
			}
			me.hotspotTimerEvent();
			me.__div = me._ht_fuel_filter_ut_6012;
	};
	function SkinHotspotClass_ht_fuel_filter_pl_270(parentScope,hotspot) {
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
		el=me._ht_fuel_filter_pl_270=document.createElement('div');
		el.ggId="ht_fuel_filter_pl_270";
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
		me._ht_fuel_filter_pl_270.ggIsActive=function() {
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
		me._ht_fuel_filter_pl_270.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_fuel_filter_pl_270.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_fuel_filter_pl_270.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_fuel_filter_pl_270']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_fuel_filter_pl_270.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_fuel_filter_pl_270']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_fuel_filter_pl_270.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['ht_fuel_filter_pl_270']) {
				player.setActiveHotspot(me.hotspot);
				me.elementMouseOver['ht_fuel_filter_pl_270']=true;
			}
		}
		me._ht_fuel_filter_pl_270.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_12=document.createElement('div');
		els=me._svg_12__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjUwIiB2aWV3Qm94PSIwIDAgNTAgNTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjUwIj4KIDxwYXRoIGZpbGw9IiNGNjkyMUUiIGQ9Ik01MCAyNUM1MCAxMS4xOTI5IDM4LjgwNzEgMCAyNSAwQzExLjE5MjkgMCAwIDExLjE5MjkgMCAyNUMwIDM4LjgwNzEgMTEuMTkyOSA1MCAyNSA1MEMzOC44MDcxIDUwIDUwIDM4LjgwNzEgNTAgMjVaIi8+CiA8cGF0aCBmaWxsPSJ3aGl0ZSIgZD0iTTE5LjgyOTIgMzYuMDkyM0MxOS40MTExIDM2LjA5MjMgMTkuMDAxIDM2LjAxNTQgMTguNjEwNSAzNS44NjM5TDkuMTMwODYgMzIuMT'+
			'g0MVYzOC4zNjIyQzkuMTMwODYgMzguODU2MiA5LjQ0MDc4IDM5LjI5NzMgOS45MDU2MSAzOS40NjQ3TDIzLjkzODcgNDQuNTE5VjMyLjM1NjNMMjIuNzQyNSAzNC40MTU1QzIyLjE0MTggMzUuNDQ5OCAyMS4wMjU0IDM2LjA5MjMgMTkuODI5MiAzNi4wOTIzWiIvPgogPHBhdGggZmlsbD0id2hpdGUiIGQ9Ik0zMC4xNzEgMzYuMDkyM0MyOC45NzQ4IDM2LjA5MjMgMjcuODU4NSAzNS40NDk4IDI3LjI1NzYgMzQuNDE1NUwyNi4yODMyIDMyLjczNzlWNDQuNTMxTDQwLjM0OTcgMzkuNDY0NkM0MC44MTQ1IDM5LjI5NzIgNDEuMTI0NSAzOC44NTYyIDQxLjEyNDUgMzguMzYyMVYzMi4wODVMMzEuMzg5'+
			'NyAzNS44NjM4QzMwLjk5OTEgMzYuMDE1NCAzMC41ODkyIDM2LjA5MjMgMzAuMTcxIDM2LjA5MjNaIi8+CiA8cGF0aCBmaWxsPSJ3aGl0ZSIgZD0iTTE3LjAzMTkgMTkuNTc0NkMxNi4zMzM3IDE4LjcyNDEgMTUuNzY5MSAxNy43NjAzIDE1LjM2OTQgMTYuNzE1NUwxMi4yNDYxIDE3Ljg0MDNMMTcuMDMxOSAxOS41NzQ2WiIvPgogPHBhdGggZmlsbD0id2hpdGUiIGQ9Ik0zNy43NzY5IDE3LjgzM0wzNC42NDQ4IDE2LjY4NTJDMzQuMjQ0NSAxNy43NDE3IDMzLjY3NTcgMTguNzE2IDMyLjk3MDcgMTkuNTc0NkwzNy43NzY5IDE3LjgzM1oiLz4KIDxwYXRoIGZpbGw9IndoaXRlIiBkPSJNNDQuODU0ID'+
			'I2Ljg0NjVMNDAuOTY1MSAyMC4wNTg5QzQwLjY5ODUgMTkuNTkzOCA0MC4xMzYgMTkuMzg3NSAzOS42MzIgMTkuNTcwMkwyNS4wMDAzIDI0Ljg3MTFMMTAuMzY4NyAxOS41NzAyQzkuODY0NiAxOS4zODc1IDkuMzAyMTEgMTkuNTkzOCA5LjAzNTU1IDIwLjA1ODlMNS4xNTkyOSAyNi44MjQzQzUuMDUyMSAyNy4wMTE0IDQuOTkxMzIgMjcuMjI0MSA1LjAwMTAxIDI3LjQzOTVDNS4wMjEzMiAyNy44OSA1LjMwNDQ0IDI4LjI2OCA1LjcwNDU5IDI4LjQyMzNMMTkuNDMwOSAzMy43NTE2QzE5LjU2MTUgMzMuODAyMyAxOS42OTY1IDMzLjgyNjUgMTkuODI5OCAzMy44MjY1QzIwLjIxMzIgMzMuODI2NSAy'+
			'MC41ODE2IDMzLjYyNTggMjAuNzg0IDMzLjI3NzJMMjUuMDAwMiAyNS43MzM4TDI5LjIxNjQgMzMuMjc3MkMyOS40MTg5IDMzLjYyNTggMjkuNzg3MyAzMy44MjY1IDMwLjE3MDcgMzMuODI2NUMzMC4zMDQgMzMuODI2NSAzMC40MzkgMzMuODAyMyAzMC41Njk2IDMzLjc1MTZMNDQuMjk1OSAyOC40MjMzQzQ0LjU5NTUgMjguMzA3IDQ0LjgyOTUgMjguMDY1OCA0NC45MzY2IDI3Ljc2MjlDNDUuMDQ0MSAyNy40NiA0NS4wMTM4IDI3LjEyNTQgNDQuODU0IDI2Ljg0NjVaIi8+CiA8cGF0aCBmaWxsPSJ3aGl0ZSIgZD0iTTI1LjAwMDEgMjEuMDg2MkMyOS40MzUxIDIxLjA4NjIgMzMuMDQzMyAxNy40Nz'+
			'gxIDMzLjA0MzMgMTMuMDQzMUMzMy4wNDMzIDguNjA4MDcgMjkuNDM1MSA1IDI1LjAwMDEgNUMyMC41NjUxIDUgMTYuOTU3IDguNjA4MTUgMTYuOTU3IDEzLjA0MzJDMTYuOTU3IDE3LjQ3ODIgMjAuNTY1MSAyMS4wODYyIDI1LjAwMDEgMjEuMDg2MlpNMjEuNjcxNiAxNC4yNzQ1QzIxLjIxMzkgMTMuODE2OSAyMS4yMTM5IDEzLjA3NSAyMS42NzE2IDEyLjYxNzNDMjIuMTI5MiAxMi4xNTk3IDIyLjg3MTIgMTIuMTU5NyAyMy4zMjg4IDEyLjYxNzNMMjMuOTg5OCAxMy4yNzgzTDI2LjcxMSAxMC41NTcxQzI3LjE2ODYgMTAuMDk5NSAyNy45MTA2IDEwLjA5OTUgMjguMzY4MyAxMC41NTcxQzI4Ljgy'+
			'NTkgMTEuMDE0OCAyOC44MjU5IDExLjc1NjcgMjguMzY4MyAxMi4yMTQzTDI0LjgxODUgMTUuNzY0MUMyNC41ODk2IDE1Ljk5MyAyNC4yODk3IDE2LjEwNzQgMjMuOTg5OSAxNi4xMDc0QzIzLjY5MDEgMTYuMTA3NCAyMy4zOTAxIDE1Ljk5MyAyMy4xNjEzIDE1Ljc2NDJMMjEuNjcxNiAxNC4yNzQ1WiIvPgo8L3N2Zz4K';
		me._svg_12__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : 96px;';
		hs+='position : absolute;';
		hs+='top : -121px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_12.ggIsActive=function() {
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
		me._svg_12.onclick=function (e) {
			skin._pl270.style.transition='none';
			skin._pl270.style.visibility=(Number(skin._pl270.style.opacity)>0||!skin._pl270.style.opacity)?'inherit':'hidden';
			skin._pl270.ggVisible=true;
		}
		me._svg_12.onmouseover=function (e) {
			me._pl270_hover.style.transition='none';
			me._pl270_hover.style.visibility=(Number(me._pl270_hover.style.opacity)>0||!me._pl270_hover.style.opacity)?'inherit':'hidden';
			me._pl270_hover.ggVisible=true;
			var list=me.findElements("UT6012_hover",true);
			while(list.length>0) {
				var e=list.pop();
				e.style.transition='none';
				e.style.visibility='hidden';
				e.ggVisible=false;
			}
			me.elementMouseOver['svg_12']=true;
		}
		me._svg_12.onmouseout=function (e) {
			me.elementMouseOver['svg_12']=false;
		}
		me._svg_12.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['svg_12']) {
				me._pl270_hover.style.transition='none';
				me._pl270_hover.style.visibility=(Number(me._pl270_hover.style.opacity)>0||!me._pl270_hover.style.opacity)?'inherit':'hidden';
				me._pl270_hover.ggVisible=true;
				var list=me.findElements("UT6012_hover",true);
				while(list.length>0) {
					var e=list.pop();
					e.style.transition='none';
					e.style.visibility='hidden';
					e.ggVisible=false;
				}
				me.elementMouseOver['svg_12']=true;
			}
		}
		me._svg_12.ggUpdatePosition=function (useTransition) {
		}
		me._ht_fuel_filter_pl_270.appendChild(me._svg_12);
		el=me._svg_62=document.createElement('div');
		els=me._svg_62__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjY0IiB2aWV3Qm94PSIwIDAgNjggNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjY4Ij4KIDxyZWN0IGZpbGw9IiNGNjkyMUUiIGhlaWdodD0iMSIgeT0iNjMuMDc5MSIgdHJhbnNmb3JtPSJyb3RhdGUoLTQzLjI4NjEgMCA2My4wNzkxKSIgd2lkdGg9IjkyIi8+Cjwvc3ZnPgo=';
		me._svg_62__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 6";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 94px;';
		hs+='left : 4px;';
		hs+='position : absolute;';
		hs+='top : -96px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_62.ggIsActive=function() {
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
		me._svg_62.ggUpdatePosition=function (useTransition) {
		}
		me._ht_fuel_filter_pl_270.appendChild(me._svg_62);
		el=me._pl270_hover=document.createElement('div');
		el.ggId="PL270_hover";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -58px;';
		hs+='cursor : default;';
		hs+='height : 150px;';
		hs+='position : absolute;';
		hs+='right : -585px;';
		hs+='visibility : hidden;';
		hs+='width : 453px;';
		hs+='pointer-events:auto;';
		hs+='border-radius: 10px; background-color: #ffffffdb; transition: 2s;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pl270_hover.ggIsActive=function() {
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
		me._pl270_hover.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_22=document.createElement('div');
		els=me._text_22__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 83px;';
		hs+='position : absolute;';
		hs+='right : 45px;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 51.4349%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		hs+="text-align: justify;";
		els.setAttribute('style',hs);
		me._text_22.ggUpdateText=function() {
			var params = [];
			var hs = player._("<div class=\"ggmarkdown\"><p>Products with electrical plugs are designed for use in the US. Outlets and\nvoltage differ internationally and this product may require an adapter or\nconverter for use in your destination. Please check compatibility before\npurchasing.<\/p>\n<div>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_22.ggUpdateText();
		el.appendChild(els);
		me._text_22.ggIsActive=function() {
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
		me._text_22.ggUpdatePosition=function (useTransition) {
		}
		me._pl270_hover.appendChild(me._text_22);
		el=me._text_32=document.createElement('div');
		els=me._text_32__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 13px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 36px;';
		hs+='left : 176px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 50.9934%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 18px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_32.ggUpdateText=function() {
			var params = [];
			var hs = player._("<div class=\"ggmarkdown\"><p>$10 - $25<\/p>\n<div>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_32.ggUpdateText();
		el.appendChild(els);
		me._text_32.ggIsActive=function() {
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
		me._text_32.ggUpdatePosition=function (useTransition) {
		}
		me._pl270_hover.appendChild(me._text_32);
		el=me._text_42=document.createElement('div');
		els=me._text_42__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 10px;';
		hs+='color : rgba(103,103,103,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 177px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 10px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_42.ggUpdateText=function() {
			var params = [];
			var hs = player._("For peaces", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_42.ggUpdateText();
		el.appendChild(els);
		me._text_42.ggIsActive=function() {
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
		me._text_42.ggUpdatePosition=function (useTransition) {
		}
		me._pl270_hover.appendChild(me._text_42);
		el=me._svg_30=document.createElement('div');
		els=me._svg_30__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjUwIiB2aWV3Qm94PSIwIDAgNTAgNTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjUwIj4KIDxwYXRoIGZpbGw9IiNGNjkyMUUiIGQ9Ik00Mi42ODU2IDcuMzE0MzlDMzIuOTMxIC0yLjQzODEzIDE3LjA2NzQgLTIuNDM4MTMgNy4zMTI3OCA3LjMxNDM5Qy0yLjQzNzU5IDE3LjA2NjkgLTIuNDM3NTkgMzIuOTM0NyA3LjMxMjc4IDQyLjY4NzJDMTIuMTkwMSA0Ny41NjI1IDE4LjU5NTEgNDkuOTk4OSAyNS4wMDAzIDQ5Ljk5ODlDMzEuNDA1NCA0OS45OTg5IDM3LjgwODMgNDcuNTYyNCA0Mi42ODU2IDQyLjY4NzJDNTIuND'+
			'M4MSAzMi45MzQ4IDUyLjQzODEgMTcuMDY2OSA0Mi42ODU2IDcuMzE0MzlaTTM1LjMxNTUgMzIuMzY5OUMzNi4xMzA0IDMzLjE4NDggMzYuMTMwNCAzNC41MDIxIDM1LjMxNTUgMzUuMzE3MUMzNC45MDkgMzUuNzIzNSAzNC4zNzU1IDM1LjkyNzggMzMuODQxOCAzNS45Mjc4QzMzLjMwODMgMzUuOTI3OCAzMi43NzQ2IDM1LjcyMzUgMzIuMzY4MiAzNS4zMTcxTDI1LjAwMDIgMjcuOTQ2OUwxNy42MzQyIDM1LjMxNDlDMTcuMjI1NyAzNS43MjE0IDE2LjY5MjEgMzUuOTI1NyAxNi4xNjA2IDM1LjkyNTdDMTUuNjI3IDM1LjkyNTcgMTUuMDkzNCAzNS43MjE0IDE0LjY4NjkgMzUuMzE0OUMxMy44NzIg'+
			'MzQuNSAxMy44NzIgMzMuMTgwNiAxNC42ODY5IDMyLjM2NzdMMjIuMDUyOSAyNC45OTk3TDE0LjY4NDkgMTcuNjMxN0MxMy44NyAxNi44MTY4IDEzLjg3IDE1LjQ5NzQgMTQuNjg0OSAxNC42ODQ1QzE1LjQ5NzggMTMuODY5NiAxNi44MTcxIDEzLjg2OTYgMTcuNjMyMSAxNC42ODQ1TDI1LjAwMDEgMjIuMDUyNUwzMi4zNjgxIDE0LjY4NDVDMzMuMTgzIDEzLjg2OTYgMzQuNTAwMyAxMy44Njk2IDM1LjMxNTMgMTQuNjg0NUMzNi4xMzAyIDE1LjQ5NzQgMzYuMTMwMiAxNi44MTY4IDM1LjMxNTMgMTcuNjMxN0wyNy45NDczIDI0Ljk5OTdMMzUuMzE1NSAzMi4zNjk5WiIvPgo8L3N2Zz4K';
		me._svg_30__img.setAttribute('src',hs);
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
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 5px;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
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
			return me.ggNodeId;
		}
		me._svg_30.onclick=function (e) {
			me._pl270_hover.style.transition='none';
			me._pl270_hover.style.visibility='hidden';
			me._pl270_hover.ggVisible=false;
		}
		me._svg_30.ggUpdatePosition=function (useTransition) {
		}
		me._pl270_hover.appendChild(me._svg_30);
		el=me._svg_72=document.createElement('div');
		els=me._svg_72__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjUwIiB2aWV3Qm94PSIwIDAgNTAgNTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjUwIj4KIDxyZWN0IGZpbGw9IiNGNjkyMUUiIGhlaWdodD0iNTAiIHJ4PSIyNSIgd2lkdGg9IjUwIi8+CiA8cGF0aCBmaWxsPSJ3aGl0ZSIgZD0iTTYuNjg1MjcgMjYuMDc3OEM4Ljg5MTU0IDE4Ljk4OCAxNS44OTQxIDE0LjE0OTcgMjQuMjg3NSAxNC4wMDZWNS43MTg1NkMyNC4yODc1IDUuMzM1MzMgMjQuNjIzMyA1IDI1LjAwNyA1QzI1LjE1MDggNSAyNS4yOTQ3IDUuMDQ3OSAyNS40Mzg2IDUuMTQzNzFMNDYuNzgxOSAyMC41Njg5Qz'+
			'Q3LjExNzcgMjAuODA4NCA0Ny4xNjU2IDIxLjIzOTUgNDYuOTI1OCAyMS41NzQ5QzQ2Ljg3NzkgMjEuNjIyOCA0Ni44Mjk5IDIxLjY3MDcgNDYuNzgxOSAyMS43MTg2TDI1LjQzODYgMzcuMDQ3OUMyNS4xMDI5IDM3LjI4NzQgMjQuNjcxMiAzNy4xOTE2IDI0LjQzMTQgMzYuOTA0MkMyNC4zMzU1IDM2Ljc2MDUgMjQuMjg3NSAzNi42MTY4IDI0LjI4NzUgMzYuNDczMVYyOC4yMzM1QzE5LjEwNzYgMjguMjMzNSAxNC43NDMgMzAuNjc2NiAxMy4yMDgyIDM0LjM2NTNDMTEuOTEzMiAzNy41MjY5IDEyLjk2ODQgNDAuOTI4MSAxNi4wMzggNDMuNzU0NUMxNi4zMjU3IDQ0LjA0MTkgMTYuMzczNyA0NC40'+
			'NzMxIDE2LjA4NTkgNDQuNzYwNUMxNS45NDIgNDQuOTA0MiAxNS43NTAyIDQ1IDE1LjU1ODMgNDVIMTQuOTgyOEMxNC44Mzg5IDQ1IDE0LjY5NSA0NC45NTIxIDE0LjU5OTEgNDQuODU2M0M3LjU0ODU5IDQwLjIwOTYgNC41MjY5NSAzMi45NzYgNi42ODUyNyAyNi4wNzc4WiIvPgo8L3N2Zz4K';
		me._svg_72__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 7";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 5px;';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_72.ggIsActive=function() {
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
		me._svg_72.onclick=function (e) {
			player.openUrl("https:\/\/catalog.mann-filter.com\/EU\/eng\/catalog\/MANN-FILTER%20Katalog%20Europa\/Fuel%20Filter\/PL%20270%20x","_blank");
		}
		me._svg_72.ggUpdatePosition=function (useTransition) {
		}
		me._pl270_hover.appendChild(me._svg_72);
		el=me._image_6=document.createElement('div');
		els=me._image_6__img=document.createElement('img');
		els.className='ggskin ggskin_image_6';
		hs=basePath + 'images/image_6.png';
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
		el.ggId="Image 6";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 140px;';
		hs+='left : 15px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((140px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 113px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_6.ggIsActive=function() {
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
		me._image_6.ggUpdatePosition=function (useTransition) {
		}
		me._pl270_hover.appendChild(me._image_6);
		me._ht_fuel_filter_pl_270.appendChild(me._pl270_hover);
			me.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				me._ht_fuel_filter_pl_270.ggUpdateConditionTimer();
				me._svg_12.ggUpdateConditionTimer();
			}
			me.hotspotTimerEvent();
			me.__div = me._ht_fuel_filter_pl_270;
	};
	function SkinHotspotClass_ht_product1(parentScope,hotspot) {
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
		el=me._ht_product1=document.createElement('div');
		el.ggId="ht_product1";
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
		me._ht_product1.ggIsActive=function() {
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
		me._ht_product1.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_product1.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_product1.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_product1']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_product1.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_product1']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_product1.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['ht_product1']) {
				player.setActiveHotspot(me.hotspot);
				me.elementMouseOver['ht_product1']=true;
			}
		}
		me._ht_product1.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_13=document.createElement('div');
		els=me._svg_13__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjUwIiB2aWV3Qm94PSIwIDAgNTAgNTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjUwIj4KIDxwYXRoIGZpbGw9IiNGNjkyMUUiIGQ9Ik01MCAyNUM1MCAxMS4xOTI5IDM4LjgwNzEgMCAyNSAwQzExLjE5MjkgMCAwIDExLjE5MjkgMCAyNUMwIDM4LjgwNzEgMTEuMTkyOSA1MCAyNSA1MEMzOC44MDcxIDUwIDUwIDM4LjgwNzEgNTAgMjVaIi8+CiA8cGF0aCBmaWxsPSJ3aGl0ZSIgZD0iTTE5LjgyOTIgMzYuMDkyM0MxOS40MTExIDM2LjA5MjMgMTkuMDAxIDM2LjAxNTQgMTguNjEwNSAzNS44NjM5TDkuMTMwODYgMzIuMT'+
			'g0MVYzOC4zNjIyQzkuMTMwODYgMzguODU2MiA5LjQ0MDc4IDM5LjI5NzMgOS45MDU2MSAzOS40NjQ3TDIzLjkzODcgNDQuNTE5VjMyLjM1NjNMMjIuNzQyNSAzNC40MTU1QzIyLjE0MTggMzUuNDQ5OCAyMS4wMjU0IDM2LjA5MjMgMTkuODI5MiAzNi4wOTIzWiIvPgogPHBhdGggZmlsbD0id2hpdGUiIGQ9Ik0zMC4xNzEgMzYuMDkyM0MyOC45NzQ4IDM2LjA5MjMgMjcuODU4NSAzNS40NDk4IDI3LjI1NzYgMzQuNDE1NUwyNi4yODMyIDMyLjczNzlWNDQuNTMxTDQwLjM0OTcgMzkuNDY0NkM0MC44MTQ1IDM5LjI5NzIgNDEuMTI0NSAzOC44NTYyIDQxLjEyNDUgMzguMzYyMVYzMi4wODVMMzEuMzg5'+
			'NyAzNS44NjM4QzMwLjk5OTEgMzYuMDE1NCAzMC41ODkyIDM2LjA5MjMgMzAuMTcxIDM2LjA5MjNaIi8+CiA8cGF0aCBmaWxsPSJ3aGl0ZSIgZD0iTTE3LjAzMTkgMTkuNTc0NkMxNi4zMzM3IDE4LjcyNDEgMTUuNzY5MSAxNy43NjAzIDE1LjM2OTQgMTYuNzE1NUwxMi4yNDYxIDE3Ljg0MDNMMTcuMDMxOSAxOS41NzQ2WiIvPgogPHBhdGggZmlsbD0id2hpdGUiIGQ9Ik0zNy43NzY5IDE3LjgzM0wzNC42NDQ4IDE2LjY4NTJDMzQuMjQ0NSAxNy43NDE3IDMzLjY3NTcgMTguNzE2IDMyLjk3MDcgMTkuNTc0NkwzNy43NzY5IDE3LjgzM1oiLz4KIDxwYXRoIGZpbGw9IndoaXRlIiBkPSJNNDQuODU0ID'+
			'I2Ljg0NjVMNDAuOTY1MSAyMC4wNTg5QzQwLjY5ODUgMTkuNTkzOCA0MC4xMzYgMTkuMzg3NSAzOS42MzIgMTkuNTcwMkwyNS4wMDAzIDI0Ljg3MTFMMTAuMzY4NyAxOS41NzAyQzkuODY0NiAxOS4zODc1IDkuMzAyMTEgMTkuNTkzOCA5LjAzNTU1IDIwLjA1ODlMNS4xNTkyOSAyNi44MjQzQzUuMDUyMSAyNy4wMTE0IDQuOTkxMzIgMjcuMjI0MSA1LjAwMTAxIDI3LjQzOTVDNS4wMjEzMiAyNy44OSA1LjMwNDQ0IDI4LjI2OCA1LjcwNDU5IDI4LjQyMzNMMTkuNDMwOSAzMy43NTE2QzE5LjU2MTUgMzMuODAyMyAxOS42OTY1IDMzLjgyNjUgMTkuODI5OCAzMy44MjY1QzIwLjIxMzIgMzMuODI2NSAy'+
			'MC41ODE2IDMzLjYyNTggMjAuNzg0IDMzLjI3NzJMMjUuMDAwMiAyNS43MzM4TDI5LjIxNjQgMzMuMjc3MkMyOS40MTg5IDMzLjYyNTggMjkuNzg3MyAzMy44MjY1IDMwLjE3MDcgMzMuODI2NUMzMC4zMDQgMzMuODI2NSAzMC40MzkgMzMuODAyMyAzMC41Njk2IDMzLjc1MTZMNDQuMjk1OSAyOC40MjMzQzQ0LjU5NTUgMjguMzA3IDQ0LjgyOTUgMjguMDY1OCA0NC45MzY2IDI3Ljc2MjlDNDUuMDQ0MSAyNy40NiA0NS4wMTM4IDI3LjEyNTQgNDQuODU0IDI2Ljg0NjVaIi8+CiA8cGF0aCBmaWxsPSJ3aGl0ZSIgZD0iTTI1LjAwMDEgMjEuMDg2MkMyOS40MzUxIDIxLjA4NjIgMzMuMDQzMyAxNy40Nz'+
			'gxIDMzLjA0MzMgMTMuMDQzMUMzMy4wNDMzIDguNjA4MDcgMjkuNDM1MSA1IDI1LjAwMDEgNUMyMC41NjUxIDUgMTYuOTU3IDguNjA4MTUgMTYuOTU3IDEzLjA0MzJDMTYuOTU3IDE3LjQ3ODIgMjAuNTY1MSAyMS4wODYyIDI1LjAwMDEgMjEuMDg2MlpNMjEuNjcxNiAxNC4yNzQ1QzIxLjIxMzkgMTMuODE2OSAyMS4yMTM5IDEzLjA3NSAyMS42NzE2IDEyLjYxNzNDMjIuMTI5MiAxMi4xNTk3IDIyLjg3MTIgMTIuMTU5NyAyMy4zMjg4IDEyLjYxNzNMMjMuOTg5OCAxMy4yNzgzTDI2LjcxMSAxMC41NTcxQzI3LjE2ODYgMTAuMDk5NSAyNy45MTA2IDEwLjA5OTUgMjguMzY4MyAxMC41NTcxQzI4Ljgy'+
			'NTkgMTEuMDE0OCAyOC44MjU5IDExLjc1NjcgMjguMzY4MyAxMi4yMTQzTDI0LjgxODUgMTUuNzY0MUMyNC41ODk2IDE1Ljk5MyAyNC4yODk3IDE2LjEwNzQgMjMuOTg5OSAxNi4xMDc0QzIzLjY5MDEgMTYuMTA3NCAyMy4zOTAxIDE1Ljk5MyAyMy4xNjEzIDE1Ljc2NDJMMjEuNjcxNiAxNC4yNzQ1WiIvPgo8L3N2Zz4K';
		me._svg_13__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : 96px;';
		hs+='position : absolute;';
		hs+='top : -121px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_13.ggIsActive=function() {
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
		me._svg_13.onclick=function (e) {
			skin._product1.style.transition='none';
			skin._product1.style.visibility=(Number(skin._product1.style.opacity)>0||!skin._product1.style.opacity)?'inherit':'hidden';
			skin._product1.ggVisible=true;
		}
		me._svg_13.onmouseover=function (e) {
			me._product1_hover.style.transition='none';
			me._product1_hover.style.visibility=(Number(me._product1_hover.style.opacity)>0||!me._product1_hover.style.opacity)?'inherit':'hidden';
			me._product1_hover.ggVisible=true;
			me.elementMouseOver['svg_13']=true;
		}
		me._svg_13.onmouseout=function (e) {
			me.elementMouseOver['svg_13']=false;
		}
		me._svg_13.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['svg_13']) {
				me._product1_hover.style.transition='none';
				me._product1_hover.style.visibility=(Number(me._product1_hover.style.opacity)>0||!me._product1_hover.style.opacity)?'inherit':'hidden';
				me._product1_hover.ggVisible=true;
				me.elementMouseOver['svg_13']=true;
			}
		}
		me._svg_13.ggUpdatePosition=function (useTransition) {
		}
		me._ht_product1.appendChild(me._svg_13);
		el=me._svg_63=document.createElement('div');
		els=me._svg_63__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjY0IiB2aWV3Qm94PSIwIDAgNjggNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjY4Ij4KIDxyZWN0IGZpbGw9IiNGNjkyMUUiIGhlaWdodD0iMSIgeT0iNjMuMDc5MSIgdHJhbnNmb3JtPSJyb3RhdGUoLTQzLjI4NjEgMCA2My4wNzkxKSIgd2lkdGg9IjkyIi8+Cjwvc3ZnPgo=';
		me._svg_63__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 6";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 94px;';
		hs+='left : 4px;';
		hs+='position : absolute;';
		hs+='top : -96px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_63.ggIsActive=function() {
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
		me._svg_63.ggUpdatePosition=function (useTransition) {
		}
		me._ht_product1.appendChild(me._svg_63);
		el=me._product1_hover=document.createElement('div');
		el.ggId="Product1_hover";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -58px;';
		hs+='cursor : default;';
		hs+='height : 150px;';
		hs+='position : absolute;';
		hs+='right : -585px;';
		hs+='visibility : hidden;';
		hs+='width : 453px;';
		hs+='pointer-events:auto;';
		hs+='border-radius: 10px; background-color: #ffffffdb; transition: 2s;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._product1_hover.ggIsActive=function() {
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
		me._product1_hover.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_23=document.createElement('div');
		els=me._text_23__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 83px;';
		hs+='position : absolute;';
		hs+='right : 45px;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 51.4349%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		hs+="text-align: justify;";
		els.setAttribute('style',hs);
		me._text_23.ggUpdateText=function() {
			var params = [];
			var hs = player._("<div class=\"ggmarkdown\"><p>Pano2VR \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0440\u0430\u0437\u043d\u043e\u043e\u0431\u0440\u0430\u0437\u043d\u044b\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u0432\u0438\u0440\u0442\u0443\u0430\u043b\u044c\u043d\u044b\u043c\u0438 \u0442\u0443\u0440\u0430\u043c\u0438,\n\u043d\u043e \u043d\u0435 \u043e\u0431\u043b\u0430\u0434\u0430\u0435\u0442 \u0432\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u043e\u0439 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u043e\u0439 \u0441\u043b\u043e\u0436\u043d\u044b\u0445 \u0443\u0441\u043b\u043e\u0432\u0438\u0439 \u0438\u043b\u0438 \u0441\u0446\u0435\u043d\u0430\u0440\u0438\u0435\u0432, \u0442\u0430\u043a\u0438\u0445 \u043a\u0430\u043a\n\u0437\u0430\u043a\u0440\u044b\u0442\u0438\u0435 \u0434\u0440\u0443\u0433\u0438\u0445 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 \u043f\u0440\u0438 \u043e\u0442\u043a\u0440\u044b\u0442\u0438\u0438 \u043e\u0434\u043d\u043e\u0433\u043e.<\/p>\n<div>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_23.ggUpdateText();
		el.appendChild(els);
		me._text_23.ggIsActive=function() {
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
		me._text_23.ggUpdatePosition=function (useTransition) {
		}
		me._product1_hover.appendChild(me._text_23);
		el=me._image_7=document.createElement('div');
		els=me._image_7__img=document.createElement('img');
		els.className='ggskin ggskin_image_7';
		hs=basePath + 'images/image_7.png';
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
		el.ggId="Image 7";
		el.ggDy=-1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 137px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((137px + 0px) / 2) - 1px);';
		hs+='visibility : inherit;';
		hs+='width : 175px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_7.ggIsActive=function() {
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
		me._image_7.ggUpdatePosition=function (useTransition) {
		}
		me._product1_hover.appendChild(me._image_7);
		el=me._text_33=document.createElement('div');
		els=me._text_33__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 13px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 36px;';
		hs+='left : 176px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 50.9934%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 18px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_33.ggUpdateText=function() {
			var params = [];
			var hs = player._("<div class=\"ggmarkdown\"><p>$300 - $500<\/p>\n<div>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_33.ggUpdateText();
		el.appendChild(els);
		me._text_33.ggIsActive=function() {
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
		me._text_33.ggUpdatePosition=function (useTransition) {
		}
		me._product1_hover.appendChild(me._text_33);
		el=me._text_43=document.createElement('div');
		els=me._text_43__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 10px;';
		hs+='color : rgba(103,103,103,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 177px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 10px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_43.ggUpdateText=function() {
			var params = [];
			var hs = player._("For peaces", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_43.ggUpdateText();
		el.appendChild(els);
		me._text_43.ggIsActive=function() {
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
		me._text_43.ggUpdatePosition=function (useTransition) {
		}
		me._product1_hover.appendChild(me._text_43);
		el=me._svg_31=document.createElement('div');
		els=me._svg_31__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjUwIiB2aWV3Qm94PSIwIDAgNTAgNTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjUwIj4KIDxwYXRoIGZpbGw9IiNGNjkyMUUiIGQ9Ik00Mi42ODU2IDcuMzE0MzlDMzIuOTMxIC0yLjQzODEzIDE3LjA2NzQgLTIuNDM4MTMgNy4zMTI3OCA3LjMxNDM5Qy0yLjQzNzU5IDE3LjA2NjkgLTIuNDM3NTkgMzIuOTM0NyA3LjMxMjc4IDQyLjY4NzJDMTIuMTkwMSA0Ny41NjI1IDE4LjU5NTEgNDkuOTk4OSAyNS4wMDAzIDQ5Ljk5ODlDMzEuNDA1NCA0OS45OTg5IDM3LjgwODMgNDcuNTYyNCA0Mi42ODU2IDQyLjY4NzJDNTIuND'+
			'M4MSAzMi45MzQ4IDUyLjQzODEgMTcuMDY2OSA0Mi42ODU2IDcuMzE0MzlaTTM1LjMxNTUgMzIuMzY5OUMzNi4xMzA0IDMzLjE4NDggMzYuMTMwNCAzNC41MDIxIDM1LjMxNTUgMzUuMzE3MUMzNC45MDkgMzUuNzIzNSAzNC4zNzU1IDM1LjkyNzggMzMuODQxOCAzNS45Mjc4QzMzLjMwODMgMzUuOTI3OCAzMi43NzQ2IDM1LjcyMzUgMzIuMzY4MiAzNS4zMTcxTDI1LjAwMDIgMjcuOTQ2OUwxNy42MzQyIDM1LjMxNDlDMTcuMjI1NyAzNS43MjE0IDE2LjY5MjEgMzUuOTI1NyAxNi4xNjA2IDM1LjkyNTdDMTUuNjI3IDM1LjkyNTcgMTUuMDkzNCAzNS43MjE0IDE0LjY4NjkgMzUuMzE0OUMxMy44NzIg'+
			'MzQuNSAxMy44NzIgMzMuMTgwNiAxNC42ODY5IDMyLjM2NzdMMjIuMDUyOSAyNC45OTk3TDE0LjY4NDkgMTcuNjMxN0MxMy44NyAxNi44MTY4IDEzLjg3IDE1LjQ5NzQgMTQuNjg0OSAxNC42ODQ1QzE1LjQ5NzggMTMuODY5NiAxNi44MTcxIDEzLjg2OTYgMTcuNjMyMSAxNC42ODQ1TDI1LjAwMDEgMjIuMDUyNUwzMi4zNjgxIDE0LjY4NDVDMzMuMTgzIDEzLjg2OTYgMzQuNTAwMyAxMy44Njk2IDM1LjMxNTMgMTQuNjg0NUMzNi4xMzAyIDE1LjQ5NzQgMzYuMTMwMiAxNi44MTY4IDM1LjMxNTMgMTcuNjMxN0wyNy45NDczIDI0Ljk5OTdMMzUuMzE1NSAzMi4zNjk5WiIvPgo8L3N2Zz4K';
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
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 5px;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
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
			return me.ggNodeId;
		}
		me._svg_31.onclick=function (e) {
			me._product1_hover.style.transition='none';
			me._product1_hover.style.visibility='hidden';
			me._product1_hover.ggVisible=false;
		}
		me._svg_31.ggUpdatePosition=function (useTransition) {
		}
		me._product1_hover.appendChild(me._svg_31);
		el=me._svg_73=document.createElement('div');
		els=me._svg_73__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjUwIiB2aWV3Qm94PSIwIDAgNTAgNTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjUwIj4KIDxyZWN0IGZpbGw9IiNGNjkyMUUiIGhlaWdodD0iNTAiIHJ4PSIyNSIgd2lkdGg9IjUwIi8+CiA8cGF0aCBmaWxsPSJ3aGl0ZSIgZD0iTTYuNjg1MjcgMjYuMDc3OEM4Ljg5MTU0IDE4Ljk4OCAxNS44OTQxIDE0LjE0OTcgMjQuMjg3NSAxNC4wMDZWNS43MTg1NkMyNC4yODc1IDUuMzM1MzMgMjQuNjIzMyA1IDI1LjAwNyA1QzI1LjE1MDggNSAyNS4yOTQ3IDUuMDQ3OSAyNS40Mzg2IDUuMTQzNzFMNDYuNzgxOSAyMC41Njg5Qz'+
			'Q3LjExNzcgMjAuODA4NCA0Ny4xNjU2IDIxLjIzOTUgNDYuOTI1OCAyMS41NzQ5QzQ2Ljg3NzkgMjEuNjIyOCA0Ni44Mjk5IDIxLjY3MDcgNDYuNzgxOSAyMS43MTg2TDI1LjQzODYgMzcuMDQ3OUMyNS4xMDI5IDM3LjI4NzQgMjQuNjcxMiAzNy4xOTE2IDI0LjQzMTQgMzYuOTA0MkMyNC4zMzU1IDM2Ljc2MDUgMjQuMjg3NSAzNi42MTY4IDI0LjI4NzUgMzYuNDczMVYyOC4yMzM1QzE5LjEwNzYgMjguMjMzNSAxNC43NDMgMzAuNjc2NiAxMy4yMDgyIDM0LjM2NTNDMTEuOTEzMiAzNy41MjY5IDEyLjk2ODQgNDAuOTI4MSAxNi4wMzggNDMuNzU0NUMxNi4zMjU3IDQ0LjA0MTkgMTYuMzczNyA0NC40'+
			'NzMxIDE2LjA4NTkgNDQuNzYwNUMxNS45NDIgNDQuOTA0MiAxNS43NTAyIDQ1IDE1LjU1ODMgNDVIMTQuOTgyOEMxNC44Mzg5IDQ1IDE0LjY5NSA0NC45NTIxIDE0LjU5OTEgNDQuODU2M0M3LjU0ODU5IDQwLjIwOTYgNC41MjY5NSAzMi45NzYgNi42ODUyNyAyNi4wNzc4WiIvPgo8L3N2Zz4K';
		me._svg_73__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 7";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 5px;';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_73.ggIsActive=function() {
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
		me._svg_73.onclick=function (e) {
			player.openUrl("https:\/\/www.hp.com\/us-en\/shop\/pdp\/hp-m27fwa-fhd-monitor","_blank");
		}
		me._svg_73.ggUpdatePosition=function (useTransition) {
		}
		me._product1_hover.appendChild(me._svg_73);
		me._ht_product1.appendChild(me._product1_hover);
			me.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				me._ht_product1.ggUpdateConditionTimer();
				me._svg_13.ggUpdateConditionTimer();
			}
			me.hotspotTimerEvent();
			me.__div = me._ht_product1;
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
	function SkinElement_image_11_Class(parentScope,ggParent) {
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
		
		el=me._image_11=document.createElement('div');
		els=me._image_11__img=document.createElement('img');
		els.className='ggskin ggskin_image_11';
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
		me._image_11__img.ggOverSrc=hs;
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPzSURBVHgBpVe9ctNAEN49xcTMwOACBqhQaIAK0dEhmDBDFx4heYKEJ4jT0ZG8gR/BaRjAGaI8QZwqLjJEaUgyk8IFhUJiLbuST7qzJVsOO5NYpzvdfvv33R5CRWm4fqNev7UEMPCJ0FMKXSBoJJMI/TimEJG6PAqiaLDdD4N+lX1x2oJHz32XaG6VFS5nCisIQdxiQM3Tw58ncBMAYvHt23PrQLgG/yEE1Dzr7WzALADEaoDaLk+61mJ2NRF0+as2QHzCoejnc/iS1fkM+OM4CODwDPwib2AV5aI4JtqMouutabHVuYJsORh7lIHAacpF8eXl9UbVpMr3+u'+
			'Bywq7zXsuTQIwAeH+MFuri+PG6N+wVjyj2htuE/Bec9Tp742sXGQQ2TRBRdPVKG4TlC23lqWvnVjnWa2XVIJvz/9Yo6NG9Y6TN88OdTxkAcT1C7djYiDfprOQbFCdlmRS5+vGLxS9WReHAlXmVjpx143v+uNa8qfKhVcwdTvD4xbsn+t38/PWGJLMex7FKwCjX8xsIajlHj0weX41MnU35KAgJXWJVN0gqSc+z5csyp6LIWTI/jKK/2/o5jd3syk0Qkjd6XK9fb2VeQOSccpYkBL5ewAjbdrkx/U5WweGC7sQVBFnch14w1itfISrPWB7op6TUyq0PuUrenvZ+LPw+7LwicBYgqYAiBNiQvfIhtvNn8JTNeHSQf8m0WmpWzedSC/TwrPeNAeWEMypM356hI8wmYnIVlZ5w6Ba/hq6dpBpEQkJh4SeYA4jj/PwQ7yiY'+
			'VSYdyUaZVRVl1iYp5162V3lyuWZMtSR8YbjaFsPt1mvqKzLdNojdfG5idrdMkkkB1XYnrM/OCDMcbH6oTEWcINlZLjHFEpcmiUtO+PDZ4v7wAAsmVYyZsJx4vn4U3cpCxy7UzJWuzZmrSDh+3jSi4nJt6WdhXbbSaFgwUPX6VdtmJ5u5oKy+q0lonoxFrKuEnUyUwlwmfzPJvL0hiFD4Qg/SQ0019VhOXGHdpAy5693KPmMvzEszOpSUZGYGkSi3+cJZt0kvPXEd+ffn4qh/98FTthpfJ5P8e+f+U37/a0/P8/OWvOM52aSQC5KmFegz944rF0edc8isl0NNreXWS7PzfTvVNRRJkMuotg+VWrJFn3/eqBQM9xnQJaIDK9st5Xk3JN457XUWMtD24g/cGQ12bRDVLhijUnKvGAsNjiMuAiHxj5tVrlwTeseCvCi9mI'+
			'yD0CI9A1/TApPA2P0NuSvy70dW7BWcF4XKSwHkQMbiN7NMu1fgtA2KLhjTRKphEFNLqVubRVbPBEBLfj0nbqOSA8XVvcSQSUN2fTdmaueLR7vqTeofvbcdYBAW8g0AAAAASUVORK5CYII=';
		me._image_11__img.ggDownSrc=hs;
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
		me._image_11.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_11.onclick=function (e) {
			player.openUrl("{"+me.ggNodeId+"}",player.hotspot.target);
		}
		me._image_11.onmouseover=function (e) {
			me._image_11__img.src=me._image_11__img.ggOverSrc;
			me.elementMouseOver['image_11']=true;
		}
		me._image_11.onmousedown=function (e) {
			me._image_11__img.src=me._image_11__img.ggDownSrc;
		}
		me._image_11.onmouseup=function (e) {
			if (skin.player.getHasTouch()) {
				me._image_11__img.src = me._image_11__img.ggNormalSrc;
			} else {
				me._image_11__img.src = me._image_11__img.ggOverSrc;
			}
		}
		me._image_11.onmouseout=function (e) {
			me._image_11__img.src=me._image_11__img.ggNormalSrc;
			me.elementMouseOver['image_11']=false;
		}
		me._image_11.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['image_11']) {
				me._image_11__img.src=me._image_11__img.ggOverSrc;
				me.elementMouseOver['image_11']=true;
			}
		}
		me._image_11.ggUpdatePosition=function (useTransition) {
		}
	player.addListener('timer', function() { me._image_11.ggUpdateConditionTimer(); });
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
	function SkinHotspotClass_test(parentScope,hotspot) {
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
		el=me._test=document.createElement('div');
		el.ggId="test";
		el.ggDx=0.78125;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0.78125%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._test.ggIsActive=function() {
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
		me._test.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._test.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._test.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['test']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._test.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['test']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._test.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['test']) {
				player.setActiveHotspot(me.hotspot);
				me.elementMouseOver['test']=true;
			}
		}
		me._test.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_8=document.createElement('div');
		els=me._svg_8__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjUwIiB2aWV3Qm94PSIwIDAgNTAgNTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjUwIj4KIDxyZWN0IGZpbGw9IndoaXRlIiB4PSIxMCIgaGVpZ2h0PSIzMCIgeT0iMTAiIHJ4PSIxNSIgd2lkdGg9IjMwIi8+CiA8cGF0aCBmaWxsPSIjRjY5MjFFIiBkPSJNMjUgMEMyMC4wNTU1IDAgMTUuMjIyIDEuNDY2MjIgMTEuMTEwOCA0LjIxMzI2QzYuOTk5NTMgNi45NjAyOSAzLjc5NTIxIDEwLjg2NDggMS45MDMwMiAxNS40MzI5QzAuMDEwODMyMSAyMC4wMDExIC0wLjQ4NDI1MSAyNS4wMjc3IDAuNDgwMzc5IDI5Ljg3NzNDMS'+
			'40NDUwMSAzNC43MjY4IDMuODI2MDMgMzkuMTgxMyA3LjMyMjM0IDQyLjY3NzdDMTAuODE4NyA0Ni4xNzQgMTUuMjczMiA0OC41NTUgMjAuMTIyNyA0OS41MTk2QzI0Ljk3MjMgNTAuNDg0MiAyOS45OTg5IDQ5Ljk4OTIgMzQuNTY3MSA0OC4wOTdDMzkuMTM1MiA0Ni4yMDQ4IDQzLjAzOTcgNDMuMDAwNSA0NS43ODY3IDM4Ljg4OTJDNDguNTMzOCAzNC43NzggNTAgMjkuOTQ0NSA1MCAyNUM0OS45OTEgMTguMzcyMyA0Ny4zNTQyIDEyLjAxODcgNDIuNjY3OCA3LjMzMjIzQzM3Ljk4MTMgMi42NDU3NyAzMS42Mjc3IDAuMDA4OTY4NDIgMjUgMFpNMjQuMzcyOSAzOC45MTUyQzIzLjg3MDEgMzguOTE1'+
			'MiAyMy4zNzg1IDM4Ljc2NjEgMjIuOTYwNCAzOC40ODY4QzIyLjU0MjMgMzguMjA3NCAyMi4yMTY1IDM3LjgxMDQgMjIuMDI0IDM3LjM0NThDMjEuODMxNiAzNi44ODEyIDIxLjc4MTMgMzYuMzcwMSAyMS44Nzk0IDM1Ljg3NjlDMjEuOTc3NSAzNS4zODM3IDIyLjIxOTYgMzQuOTMwNyAyMi41NzUyIDM0LjU3NTFDMjIuOTMwNyAzNC4yMTk2IDIzLjM4MzcgMzMuOTc3NSAyMy44NzY5IDMzLjg3OTRDMjQuMzcwMSAzMy43ODEzIDI0Ljg4MTMgMzMuODMxNiAyNS4zNDU4IDM0LjAyNEMyNS44MTA0IDM0LjIxNjUgMjYuMjA3NCAzNC41NDIzIDI2LjQ4NjggMzQuOTYwNEMyNi43NjYyIDM1LjM3ODUgMj'+
			'YuOTE1MyAzNS44NyAyNi45MTUzIDM2LjM3MjlDMjYuOTE1MyAzNy4wNDcyIDI2LjY0NzQgMzcuNjkzOCAyNi4xNzA2IDM4LjE3MDZDMjUuNjkzOCAzOC42NDc0IDI1LjA0NzIgMzguOTE1MiAyNC4zNzI5IDM4LjkxNTJaTTI4LjcyODggMjYuNzIwM0MyOC4wNzgyIDI2LjkyMTkgMjcuNTA5NSAyNy4zMjczIDI3LjEwNjcgMjcuODc2NkMyNi43MDM5IDI4LjQyNTkgMjYuNDg4MyAyOS4wOSAyNi40OTE1IDI5Ljc3MTJDMjYuNDkxNSAzMC4zMzMxIDI2LjI2ODMgMzAuODcyIDI1Ljg3MSAzMS4yNjkzQzI1LjQ3MzcgMzEuNjY2NiAyNC45MzQ4IDMxLjg4OTggMjQuMzcyOSAzMS44ODk4QzIzLjgxMSAz'+
			'MS44ODk4IDIzLjI3MjEgMzEuNjY2NiAyMi44NzQ4IDMxLjI2OTNDMjIuNDc3NSAzMC44NzIgMjIuMjU0MiAzMC4zMzMxIDIyLjI1NDIgMjkuNzcxMkMyMi4yNDc1IDI4LjE4NDEgMjIuNzUxNCAyNi42MzY5IDIzLjY5MTQgMjUuMzU4MUMyNC42MzE1IDI0LjA3OTMgMjUuOTU3OCAyMy4xMzY3IDI3LjQ3NDYgMjIuNjY5NUMyOC4xMjYxIDIyLjQ2ODIgMjguNjk1OCAyMi4wNjMyIDI5LjEwMDEgMjEuNTE0QzI5LjUwNDMgMjAuOTY0OSAyOS43MjE3IDIwLjMwMDUgMjkuNzIwMyAxOS42MTg2QzI5LjY2ODggMTguNDAyNCAyOS4xNDk0IDE3LjI1MzIgMjguMjcwNiAxNi40MTA5QzI3LjM5MTggMTUuNT'+
			'Y4NSAyNi4yMjE1IDE1LjA5ODMgMjUuMDA0MiAxNS4wOTgzQzIzLjc4NyAxNS4wOTgzIDIyLjYxNjcgMTUuNTY4NSAyMS43Mzc5IDE2LjQxMDlDMjAuODU5MSAxNy4yNTMyIDIwLjMzOTcgMTguNDAyNCAyMC4yODgxIDE5LjYxODZDMjAuMjg4MSAyMC4xODA1IDIwLjA2NDkgMjAuNzE5NCAxOS42Njc2IDIxLjExNjdDMTkuMjcwMyAyMS41MTQxIDE4LjczMTQgMjEuNzM3MyAxOC4xNjk1IDIxLjczNzNDMTcuNjA3NiAyMS43MzczIDE3LjA2ODcgMjEuNTE0MSAxNi42NzE0IDIxLjExNjdDMTYuMjc0MSAyMC43MTk0IDE2LjA1MDkgMjAuMTgwNSAxNi4wNTA5IDE5LjYxODZDMTYuMTIyNSAxNy4yOTE3'+
			'IDE3LjA5NzEgMTUuMDg0MSAxOC43Njg0IDEzLjQ2MzVDMjAuNDM5NyAxMS44NDI4IDIyLjY3NjIgMTAuOTM2NSAyNS4wMDQyIDEwLjkzNjVDMjcuMzMyMyAxMC45MzY1IDI5LjU2ODggMTEuODQyOCAzMS4yNDAxIDEzLjQ2MzVDMzIuOTExNCAxNS4wODQxIDMzLjg4NiAxNy4yOTE3IDMzLjk1NzYgMTkuNjE4NkMzMy45NjI0IDIxLjIwNjUgMzMuNDU2OCAyMi43NTM4IDMyLjUxNTQgMjQuMDMyNUMzMS41NzM5IDI1LjMxMTIgMzAuMjQ2NSAyNi4yNTM0IDI4LjcyODggMjYuNzIwM1oiLz4KPC9zdmc+Cg==';
		me._svg_8__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : -25px;';
		hs+='position : absolute;';
		hs+='top : -57px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_8.ggIsActive=function() {
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
		me._svg_8.ggUpdatePosition=function (useTransition) {
		}
		me._test.appendChild(me._svg_8);
			me.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				me._test.ggUpdateConditionTimer();
			}
			me.hotspotTimerEvent();
			me.__div = me._test;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
			if (hotspot.skinid=='test') {
				hotspot.skinid = 'test';
				hsinst = new SkinHotspotClass_test(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ht_info_pop_up') {
				hotspot.skinid = 'ht_info_pop_up';
				hsinst = new SkinHotspotClass_ht_info_pop_up(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='preview-image') {
				hotspot.skinid = 'preview-image';
				hsinst = new SkinHotspotClass_previewimage(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ht_product1') {
				hotspot.skinid = 'ht_product1';
				hsinst = new SkinHotspotClass_ht_product1(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ht_fuel_filter_pl_270') {
				hotspot.skinid = 'ht_fuel_filter_pl_270';
				hsinst = new SkinHotspotClass_ht_fuel_filter_pl_270(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ht_fuel_filter_ut_6012') {
				hotspot.skinid = 'ht_fuel_filter_ut_6012';
				hsinst = new SkinHotspotClass_ht_fuel_filter_ut_6012(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ht_air_filter_1041800109') {
				hotspot.skinid = 'ht_air_filter_1041800109';
				hsinst = new SkinHotspotClass_ht_air_filter_1041800109(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		{
				hotspot.skinid = 'ht_oil_filter_2105101200500';
				hsinst = new SkinHotspotClass_ht_oil_filter_2105101200500(me, hotspot);
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
		me._svg_1111.ggUpdateConditionTimer();
		me._svg_1311.ggUpdateConditionTimer();
		me._svg_1110.ggUpdateConditionTimer();
		me._svg_1310.ggUpdateConditionTimer();
		me._svg_119.ggUpdateConditionTimer();
		me._svg_139.ggUpdateConditionTimer();
		me._svg_118.ggUpdateConditionTimer();
		me._svg_138.ggUpdateConditionTimer();
		me._svg_117.ggUpdateConditionTimer();
		me._svg_137.ggUpdateConditionTimer();
		me._svg_116.ggUpdateConditionTimer();
		me._svg_136.ggUpdateConditionTimer();
		me._svg_115.ggUpdateConditionTimer();
		me._svg_135.ggUpdateConditionTimer();
		me._svg_114.ggUpdateConditionTimer();
		me._svg_134.ggUpdateConditionTimer();
		me._svg_113.ggUpdateConditionTimer();
		me._svg_133.ggUpdateConditionTimer();
		me._svg_112.ggUpdateConditionTimer();
		me._svg_132.ggUpdateConditionTimer();
		me._svg_111.ggUpdateConditionTimer();
		me._svg_131.ggUpdateConditionTimer();
		me._svg_110.ggUpdateConditionTimer();
		me._svg_130.ggUpdateConditionTimer();
		me._svg_20.ggUpdateConditionTimer();
		me._svg_33.ggUpdateConditionTimer();
		me._product1.ggUpdateConditionTimer();
		me._pl270.ggUpdateConditionTimer();
		me._ut6012.ggUpdateConditionTimer();
		me.__1041800109.ggUpdateConditionTimer();
		me.__2105101200500.ggUpdateConditionTimer();
	};
	player.addListener('timer', me.skinTimerEvent);
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px; line-height: normal; } .ggmarkdown p,.ggmarkdown h1,.ggmarkdown h2,.ggmarkdown h3,.ggmarkdown h4 { margin-top: 0px } .ggmarkdown { white-space:normal } .ggskin_subelement { width: 100% !important; } .product_list_scroll { width: 100% !important; } ::-webkit-scrollbar { width: 12px; /* Ширина скролл-бара */ } ::-webkit-scrollbar-thumb { background-color: #333; /* Цвет ползунка скролл-бара */ border-radius: 10px; /* Скругление углов ползунка */ } ::-webkit-scrollbar-track { background-color: #eee; /* Цвет трека скролл-бара */ border-radius: 10px; /* Скругление углов трека */ }'));
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