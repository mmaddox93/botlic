const a26_0x471f=['setDate','66831aHFgje','_id','68687Hezzcq','2721SYFQXx','findOneAndUpdate','null','551142TUHEST','7NPGVQn','ip_list','1048463flkQgS','ip_expires','359ivvXrO','9716kppIud','1QmEaSi','886391KPLqxI','../../models/licenseModel','42kdaWAS','exports'];const a26_0x7350fb=a26_0x143f;function a26_0x143f(_0xde7e18,_0x1b7e58){return a26_0x143f=function(_0x471f98,_0x143f65){_0x471f98=_0x471f98-0x74;let _0x273743=a26_0x471f[_0x471f98];return _0x273743;},a26_0x143f(_0xde7e18,_0x1b7e58);}(function(_0x2eef0c,_0x26e67b){const _0x231d51=a26_0x143f;while(!![]){try{const _0x27f2ee=parseInt(_0x231d51(0x75))+-parseInt(_0x231d51(0x7a))+-parseInt(_0x231d51(0x85))+parseInt(_0x231d51(0x77))*parseInt(_0x231d51(0x82))+parseInt(_0x231d51(0x78))*parseInt(_0x231d51(0x7c))+parseInt(_0x231d51(0x79))*parseInt(_0x231d51(0x7f))+parseInt(_0x231d51(0x86))*-parseInt(_0x231d51(0x81));if(_0x27f2ee===_0x26e67b)break;else _0x2eef0c['push'](_0x2eef0c['shift']());}catch(_0x42c5c3){_0x2eef0c['push'](_0x2eef0c['shift']());}}}(a26_0x471f,0x8e0e7));const Licenses=require(a26_0x7350fb(0x7b)),ipObject=async(_0x3a25be,_0x5d49b7)=>{const _0x31c27f=a26_0x7350fb;function _0xb7deff(_0x31af37,_0x2dae1b){const _0x3fdfb0=a26_0x143f,_0x267a26=new Date(_0x31af37);return _0x267a26[_0x3fdfb0(0x7e)](_0x267a26['getDate']()+_0x2dae1b),_0x267a26;}for(let _0x47c3b2=0x0;_0x47c3b2<_0x5d49b7[_0x31c27f(0x74)]['length'];_0x47c3b2++){const _0x2b88c1=_0x5d49b7[_0x31c27f(0x74)][_0x47c3b2];if(_0x2b88c1['ip']===_0x3a25be)return undefined;}if(!_0x5d49b7[_0x31c27f(0x76)]||_0x5d49b7[_0x31c27f(0x76)]===_0x31c27f(0x84)){const _0x580f61={'ip':_0x3a25be,'created_at':new Date(),'expires_in':null};await Licenses[_0x31c27f(0x83)]({'_id':_0x5d49b7[_0x31c27f(0x80)]},{'$push':{'ip_list':_0x580f61}});}else{const _0x187dc5=await _0xb7deff(new Date(),_0x5d49b7[_0x31c27f(0x76)]),_0x3870b8={'ip':_0x3a25be,'created_at':new Date(),'expires_in':_0x187dc5};await Licenses[_0x31c27f(0x83)]({'_id':_0x5d49b7['_id']},{'$push':{'ip_list':_0x3870b8}});}};module[a26_0x7350fb(0x7d)]={'ipObject':ipObject};