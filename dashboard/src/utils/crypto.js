const a31_0x53d5=['base64','606287zTwBOw','**uLicense**','substr','4AhAZVO','363837PgVVJJ','createCipheriv','createDecipheriv','ascii','crypto','1314952AkPvlR','35iSzyQq','2qJjYKd','concat','exports','./dateHandler','sha256','from','env','ENCRYPT_SECRET','116931fzYwHW','digest','3YpFVMX','493266yYJtgA','239849PPGjna','split','18617bjXxbk','toString','update','content','1BhwzWl','hex'];const a31_0x4111cf=a31_0x526b;(function(_0x2cbe6d,_0x462607){const _0x5df5f6=a31_0x526b;while(!![]){try{const _0x2b9585=-parseInt(_0x5df5f6(0x18b))*parseInt(_0x5df5f6(0x192))+-parseInt(_0x5df5f6(0x199))*-parseInt(_0x5df5f6(0x198))+parseInt(_0x5df5f6(0x18c))*-parseInt(_0x5df5f6(0x1a0))+parseInt(_0x5df5f6(0x19f))*parseInt(_0x5df5f6(0x18e))+-parseInt(_0x5df5f6(0x18a))*-parseInt(_0x5df5f6(0x188))+-parseInt(_0x5df5f6(0x19e))+parseInt(_0x5df5f6(0x195));if(_0x2b9585===_0x462607)break;else _0x2cbe6d['push'](_0x2cbe6d['shift']());}catch(_0x3372f4){_0x2cbe6d['push'](_0x2cbe6d['shift']());}}}(a31_0x53d5,0xbd7ab));const crypto=require(a31_0x4111cf(0x19d)),algorithm='aes-256-ctr',secretKey=process[a31_0x4111cf(0x186)][a31_0x4111cf(0x187)],key=crypto['createHash'](a31_0x4111cf(0x1a4))['update'](String(secretKey))[a31_0x4111cf(0x189)](a31_0x4111cf(0x194))[a31_0x4111cf(0x197)](0x0,0x20),iv=crypto['randomBytes'](0x10),{joensuu}=require(a31_0x4111cf(0x1a3)),encrypt=_0x51e329=>{const _0x6441d4=a31_0x4111cf,_0x1f6ae4=crypto[_0x6441d4(0x19a)](algorithm,key,iv),_0x4b7001=Buffer[_0x6441d4(0x1a1)]([_0x1f6ae4['update'](_0x51e329),_0x1f6ae4['final']()]),_0xa04322=iv[_0x6441d4(0x18f)](_0x6441d4(0x193))+_0x6441d4(0x196)+_0x4b7001['toString'](_0x6441d4(0x193));return Buffer['from'](_0xa04322)[_0x6441d4(0x18f)](_0x6441d4(0x194));},decrypt=_0x108436=>{const _0x4f6741=a31_0x4111cf,_0x4d403b=Buffer[_0x4f6741(0x185)](_0x108436,_0x4f6741(0x194))[_0x4f6741(0x18f)](_0x4f6741(0x19c)),_0x315a3f=_0x4d403b[_0x4f6741(0x18d)](_0x4f6741(0x196)),_0x2ffaaa={'iv':_0x315a3f[0x0],'content':_0x315a3f[0x1]},_0x3effb8=crypto[_0x4f6741(0x19b)](algorithm,key,Buffer['from'](_0x2ffaaa['iv'],_0x4f6741(0x193))),_0x11f160=Buffer[_0x4f6741(0x1a1)]([_0x3effb8[_0x4f6741(0x190)](Buffer[_0x4f6741(0x185)](_0x2ffaaa[_0x4f6741(0x191)],_0x4f6741(0x193))),_0x3effb8['final']()]);return _0x11f160['toString']();};function a31_0x526b(_0x41b3ea,_0x2a1b24){return a31_0x526b=function(_0x53d566,_0x526b7b){_0x53d566=_0x53d566-0x185;let _0x5c029d=a31_0x53d5[_0x53d566];return _0x5c029d;},a31_0x526b(_0x41b3ea,_0x2a1b24);}module[a31_0x4111cf(0x1a2)]={'encrypt':encrypt,'decrypt':decrypt};