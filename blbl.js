/*

脚本功能：哔哩哔哩 会员
下载地址：appstore
软件版本：所有
脚本作者：伟人
更新时间：2022-11-22
问题反馈：QQ+55749353
QQ会员群：暂无
TG反馈群：暂无
TG频道群：暂无
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

[rewrite_local]

#哔哩哔哩解锁大会员
^http[s]?:\/\/((app|api)\.(\w{2,15})?\.(com|cn)).*player\.(v3|v2|v1).Play(URL|View).*$ url script-request-header https://raw.githubusercontent.com/WeiRen0/Scripts/main/blbl.js

[mitm]
hostname = *.biliapi.*, *.bilibili.*

*/

 
/*
 * 加密工具已经升级了一个版本，目前为 jsjiami.com.v5 ，主要加强了算法，以及防破解【绝对不可逆】配置，耶稣也无法100%还原，我说的。;
 * 已经打算把这个工具基础功能一直免费下去。还希望支持我。
 * 另外 jsjiami.com.v5 已经强制加入校验，注释可以去掉，但是 jsjiami.com.v5 不能去掉（如果你开通了VIP，可以手动去掉），其他都没有任何绑定。
 * 誓死不会加入任何后门，jsjiami.com JS 加密的使命就是为了保护你们的Javascript 。
 * 警告：如果您恶意去掉 jsjiami.com.v5 那么我们将不会保护您的JavaScript代码。请遵守规则
 * 新版本: https://www.jsjiami.com/ 支持批量加密，支持大文件加密，拥有更多加密。 */
 
;var encode_version = 'jsjiami.com.v5', grvis = '__0xf02c3',  __0xf02c3=['54m45p2Y5Y+w77+0dVbkvqPlrojmnY7lvKjnq7nvvbLovpXorbnmlJ7mj47mi4jku77nm6XltpPkv7o=','5Yil6Zmn54ir5pyg5Y6Q772WQivkvpnlrarmnbnlvqfnqIo=','w4/DpsKxD8K4','w7jCu14Hwrc=','wo8zBh7DvQ==','w6fCk2nCvjw=','VsKrwpjCql0=','P8K4wrUNwrU=','fUbDhxJkw4/Cpw==','HMKHTMKiZ8Od','WFTCuF8Yw61xw4c1c8OVSiI6w4Nqw6jDnktEwpQZwoZyw6txw4zCl1XDrsOnGHoKQ8O+w4Jqw6TDhcO4OcKkwq3DolbCmW44wp3Cgg4ie8Kowpxbwp7CqcKxa8Knw5Z4W8K8w74nWH/CmsKnEMK8dFNrHsOiwo1Xw5JVwr9PwqvCvgjCgSTDnMKmw450wrh1QHA6w6/DlcKGw4lrF8KMUMKZw4wmAsKNw5YOSAAzJ8Ofw71KwqcVbQYtwrtiAcKPcCfCqcONGMOiw4LComnDtsOhIyPCnXQ+GxDDoSZkRsONwrXCqMKNZDfDh8O/KUbCgBNTUcOmM8OLw6RCw60cw7A7w5IXw4HDkm7DncO4NRLCjgjChR/CtRrCrQfDmMO8DsK9JBtjSA==','FiDCtwQrw4bDizTDmADDnMKyw4E=','fEfDgxh1w5TCssKbPMK2XHnCkhnCo2HDjcOhw4BofA/CrVxvOMOVGMOrMH5tMsKswpxQw6bCusK9wqc+Pk1G','VQ3Cn2B7w6rDmF3DuBvDm1bDgHVSEy9mdsOJOFvDvTrCqsOhwo4swrLDtFPCpcK1wqEow5nDk8K7w7zCi3kpJEbCsALCk8O7w5zCrcO4w4tfbcKMXcK9wqPCrxTDicKXwptGw4E5UxdjIQPCr3pmNl/CtcONecKyXMO2WFXDtVnDn8OxR2ZAWcKOLXbDk04Uw7FCVMOdw4twecK1VRrDkcO0wrACXcK7KsOmwoZATXnCnMO8wr3CqTkCw4oxD8Kuw6TDrsKNwo7DpcKicw/CtcOvw5Jjw7XDnlTCrcKHwrMqJw/DuHjDgVXCuBLCj2jCrT0RwoIOwoPCtMOkYhkIE1nDmEXCjMKFwr5zUcOswqtmAcO2w6Z9EA3CnsKFTsOXw6smw5BiNm8PByDCmGo8wrZTwqnCqcO/wopibSLCr8KmJMK5woNuC1PCsTA4TzbCuMKqwqjDucKJbzTDhcOmVcKMw5kPw7o=','DMOFNifDpcKpQF86GBpjw5DCszzCpSlICkHCk8OgKDzClkTCscKfw5RyB8KNw4Aqw5XCsMOzCMOzw7bDtsOZwrJ4wq1wwrtxw5ZLKF3Dp8KWwrRJwpoHw5BMwo8ew7jCk3padcOGYsKOTRjClW/CljTCphVywr7CqGtlOjg=','KsKGR8KsaMORUsKUWg=='];(function(_0x33eee0,_0x1169c7){var _0x39088e=function(_0x38f3fd){while(--_0x38f3fd){_0x33eee0['push'](_0x33eee0['shift']());}};_0x39088e(++_0x1169c7);}(__0xf02c3,0x148));var _0x4648=function(_0x434972,_0x477020){_0x434972=_0x434972-0x0;var _0x410a18=__0xf02c3[_0x434972];if(_0x4648['initialized']===undefined){(function(){var _0x28f05d=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x3078f0='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x28f05d['atob']||(_0x28f05d['atob']=function(_0x11218a){var _0x66533b=String(_0x11218a)['replace'](/=+$/,'');for(var _0x330ad3=0x0,_0x5945e0,_0x3f5b2d,_0x4a4a3f=0x0,_0x453ef6='';_0x3f5b2d=_0x66533b['charAt'](_0x4a4a3f++);~_0x3f5b2d&&(_0x5945e0=_0x330ad3%0x4?_0x5945e0*0x40+_0x3f5b2d:_0x3f5b2d,_0x330ad3++%0x4)?_0x453ef6+=String['fromCharCode'](0xff&_0x5945e0>>(-0x2*_0x330ad3&0x6)):0x0){_0x3f5b2d=_0x3078f0['indexOf'](_0x3f5b2d);}return _0x453ef6;});}());var _0x41bd5e=function(_0x489f19,_0x556dc0){var _0x590b5d=[],_0x188508=0x0,_0xf72a24,_0x47c629='',_0x11d845='';_0x489f19=atob(_0x489f19);for(var _0x444c19=0x0,_0x24eb73=_0x489f19['length'];_0x444c19<_0x24eb73;_0x444c19++){_0x11d845+='%'+('00'+_0x489f19['charCodeAt'](_0x444c19)['toString'](0x10))['slice'](-0x2);}_0x489f19=decodeURIComponent(_0x11d845);for(var _0x27ddcd=0x0;_0x27ddcd<0x100;_0x27ddcd++){_0x590b5d[_0x27ddcd]=_0x27ddcd;}for(_0x27ddcd=0x0;_0x27ddcd<0x100;_0x27ddcd++){_0x188508=(_0x188508+_0x590b5d[_0x27ddcd]+_0x556dc0['charCodeAt'](_0x27ddcd%_0x556dc0['length']))%0x100;_0xf72a24=_0x590b5d[_0x27ddcd];_0x590b5d[_0x27ddcd]=_0x590b5d[_0x188508];_0x590b5d[_0x188508]=_0xf72a24;}_0x27ddcd=0x0;_0x188508=0x0;for(var _0x3a44a9=0x0;_0x3a44a9<_0x489f19['length'];_0x3a44a9++){_0x27ddcd=(_0x27ddcd+0x1)%0x100;_0x188508=(_0x188508+_0x590b5d[_0x27ddcd])%0x100;_0xf72a24=_0x590b5d[_0x27ddcd];_0x590b5d[_0x27ddcd]=_0x590b5d[_0x188508];_0x590b5d[_0x188508]=_0xf72a24;_0x47c629+=String['fromCharCode'](_0x489f19['charCodeAt'](_0x3a44a9)^_0x590b5d[(_0x590b5d[_0x27ddcd]+_0x590b5d[_0x188508])%0x100]);}return _0x47c629;};_0x4648['rc4']=_0x41bd5e;_0x4648['data']={};_0x4648['initialized']=!![];}var _0x1ace28=_0x4648['data'][_0x434972];if(_0x1ace28===undefined){if(_0x4648['once']===undefined){_0x4648['once']=!![];}_0x410a18=_0x4648['rc4'](_0x410a18,_0x477020);_0x4648['data'][_0x434972]=_0x410a18;}else{_0x410a18=_0x1ace28;}return _0x410a18;};var modifiedHeaders=$request[_0x4648('0x0','qghR')];modifiedHeaders[_0x4648('0x1','hG!B')]=_0x4648('0x2','9Nr%');modifiedHeaders[_0x4648('0x3','MMSP')]=_0x4648('0x4','qghR');modifiedHeaders['x-bili-device-bin']=_0x4648('0x5','oERJ');modifiedHeaders['User-Agent']=_0x4648('0x6','mtqL');$notify('伟人提醒您会员注入成功');$done({'headers':modifiedHeaders});;(function(_0x264c2d,_0x420141,_0x15b8d8){var _0x476df4={'pDqbS':'ert','RNAKD':function _0x52c6e5(_0xabc475,_0xd6bcf1){return _0xabc475!==_0xd6bcf1;},'OaIHg':_0x4648('0x7','hG!B'),'cSbQT':function _0x5a53f9(_0xf65ac8,_0x18d683){return _0xf65ac8===_0x18d683;},'oBKMF':function _0x1d798d(_0x4248b2,_0x3fa3af){return _0x4248b2+_0x3fa3af;},'EmhOG':_0x4648('0x8','v]A('),'GAxtS':_0x4648('0x9','CYKX')};_0x15b8d8='al';try{_0x15b8d8+=_0x476df4[_0x4648('0xa','kTyR')];_0x420141=encode_version;if(!(_0x476df4[_0x4648('0xb','QT]s')](typeof _0x420141,_0x476df4[_0x4648('0xc','W$T4')])&&_0x476df4['cSbQT'](_0x420141,'jsjiami.com.v5'))){_0x264c2d[_0x15b8d8](_0x476df4[_0x4648('0xd','sp!z')]('删除',_0x476df4[_0x4648('0xe','TJcV')]));}}catch(_0x307490){_0x264c2d[_0x15b8d8](_0x476df4[_0x4648('0xf','kl8t')]);}}(window));;encode_version = 'jsjiami.com.v5';
