const _0x6abf62=_0x37e2;(function(_0xab9564,_0x3a3f5e){const _0x2d35bb=_0x37e2,_0x1a3716=_0xab9564();while(!![]){try{const _0x189702=parseInt(_0x2d35bb(0x1a8))/0x1+parseInt(_0x2d35bb(0x1a6))/0x2*(parseInt(_0x2d35bb(0x199))/0x3)+parseInt(_0x2d35bb(0x1a5))/0x4+-parseInt(_0x2d35bb(0x19e))/0x5*(-parseInt(_0x2d35bb(0x1a9))/0x6)+parseInt(_0x2d35bb(0x1af))/0x7*(-parseInt(_0x2d35bb(0x198))/0x8)+parseInt(_0x2d35bb(0x19f))/0x9*(parseInt(_0x2d35bb(0x1a4))/0xa)+-parseInt(_0x2d35bb(0x1b3))/0xb;if(_0x189702===_0x3a3f5e)break;else _0x1a3716['push'](_0x1a3716['shift']());}catch(_0x3731b0){_0x1a3716['push'](_0x1a3716['shift']());}}}(_0x39ed,0x83726));function _0x39ed(){const _0x516f9b=['../controllers/devCtrl','105QLdECC','75204eXXbfz','clearIPs','../utils/rateLimiter','/licenses/clear-hwids','createlicense','480FhkveQ','2149848qnKARt','3104LzxclP','deleteLicense','477255hhPdvU','115848WlVttg','/blacklist/add','/licenses/delete','/licenses/clear-ips','express','delete','608083cDCPIk','exports','../middleware/devAuth','get','7644560ZzhLeI','/licenses/create','post','56mQzgZi','39Gyuovl','getlicenses','/licenses/get','/blacklist/delete'];_0x39ed=function(){return _0x516f9b;};return _0x39ed();}const router=require(_0x6abf62(0x1ad))['Router'](),devCtrl=require(_0x6abf62(0x19d)),devAuth=require(_0x6abf62(0x1b1)),{developerApiLimiter}=require(_0x6abf62(0x1a1));function _0x37e2(_0x50feec,_0xc29fa4){const _0x39ed0f=_0x39ed();return _0x37e2=function(_0x37e2dc,_0x88d4cc){_0x37e2dc=_0x37e2dc-0x196;let _0xb54168=_0x39ed0f[_0x37e2dc];return _0xb54168;},_0x37e2(_0x50feec,_0xc29fa4);}router[_0x6abf62(0x1b2)](_0x6abf62(0x19b),devAuth,developerApiLimiter,devCtrl[_0x6abf62(0x19a)]),router[_0x6abf62(0x197)](_0x6abf62(0x196),devAuth,developerApiLimiter,devCtrl[_0x6abf62(0x1a3)]),router[_0x6abf62(0x1ae)](_0x6abf62(0x1ab),devAuth,developerApiLimiter,devCtrl[_0x6abf62(0x1a7)]),router[_0x6abf62(0x1ae)](_0x6abf62(0x1ac),devAuth,developerApiLimiter,devCtrl[_0x6abf62(0x1a0)]),router[_0x6abf62(0x1ae)](_0x6abf62(0x1a2),devAuth,developerApiLimiter,devCtrl['clearHWIDs']),router['post'](_0x6abf62(0x1aa),devAuth,developerApiLimiter,devCtrl['blacklistAdd']),router['delete'](_0x6abf62(0x19c),devAuth,developerApiLimiter,devCtrl['blacklistDelete']),module[_0x6abf62(0x1b0)]=router;