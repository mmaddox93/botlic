const a5_0x3249a2=a5_0x3e90;(function(_0x13d7dd,_0x3aab48){const _0x177d42=a5_0x3e90,_0xa6f66e=_0x13d7dd();while(!![]){try{const _0x46adc6=parseInt(_0x177d42(0x108))/0x1*(parseInt(_0x177d42(0x138))/0x2)+-parseInt(_0x177d42(0x133))/0x3+-parseInt(_0x177d42(0x13d))/0x4*(parseInt(_0x177d42(0x10b))/0x5)+parseInt(_0x177d42(0x114))/0x6+-parseInt(_0x177d42(0x153))/0x7+-parseInt(_0x177d42(0x12d))/0x8+-parseInt(_0x177d42(0x113))/0x9*(-parseInt(_0x177d42(0x120))/0xa);if(_0x46adc6===_0x3aab48)break;else _0xa6f66e['push'](_0xa6f66e['shift']());}catch(_0x273f0c){_0xa6f66e['push'](_0xa6f66e['shift']());}}}(a5_0x1519,0x4fa80));function a5_0x3e90(_0x9f3155,_0x7422b6){const _0x151907=a5_0x1519();return a5_0x3e90=function(_0x3e9052,_0x903f29){_0x3e9052=_0x3e9052-0x107;let _0x186d42=_0x151907[_0x3e9052];return _0x186d42;},a5_0x3e90(_0x9f3155,_0x7422b6);}const {SlashCommandBuilder}=require(a5_0x3249a2(0x146)),Licenses=require(a5_0x3249a2(0x127)),Dashboard=require('../models/dashboardModel'),{decrypt}=require(a5_0x3249a2(0x12a)),{baseEmbed}=require(a5_0x3249a2(0x112)),paginationHandler=require(a5_0x3249a2(0x10a));module[a5_0x3249a2(0x10d)]={'data':new SlashCommandBuilder()[a5_0x3249a2(0x117)]('self')[a5_0x3249a2(0x148)]('Commands\x20for\x20clients\x20to\x20use!')[a5_0x3249a2(0x123)](!![])[a5_0x3249a2(0x14e)](_0x30e3bf=>_0x30e3bf['setName'](a5_0x3249a2(0x11b))['setDescription'](a5_0x3249a2(0x134))[a5_0x3249a2(0x13a)](_0x14b881=>_0x14b881[a5_0x3249a2(0x117)](a5_0x3249a2(0x110))[a5_0x3249a2(0x136)](!![])['setDescription'](a5_0x3249a2(0x159))))[a5_0x3249a2(0x14e)](_0x2c1fdd=>_0x2c1fdd[a5_0x3249a2(0x117)](a5_0x3249a2(0x155))[a5_0x3249a2(0x148)](a5_0x3249a2(0x157))),async 'execute'(_0xc83a75,_0x4aa54c,_0x3b3d20){const _0x3e83ff=a5_0x3249a2,_0x51cea3=_0xc83a75['options'][_0x3e83ff(0x12f)](),_0x3fb901=_0xc83a75['options'][_0x3e83ff(0x116)](_0x3e83ff(0x110)),_0x4bab1a=baseEmbed(_0x4aa54c,_0xc83a75,_0x3e83ff(0x131),_0x3b3d20['error']);if(_0x51cea3===_0x3e83ff(0x11b)){const _0x576e0d=await Dashboard[_0x3e83ff(0x107)]({'self_verify':!![]});if(!_0x576e0d)return _0x4bab1a[_0x3e83ff(0x135)](_0x3e83ff(0x10c),_0x3e83ff(0x125)),_0xc83a75['reply']({'embeds':[_0x4bab1a],'ephemeral':!![]});const _0x1f5bc9=await Licenses[_0x3e83ff(0x132)](),_0x542237=async()=>{const _0xc4bd1e=_0x3e83ff;for(let _0x20f2b2=0x0;_0x20f2b2<_0x1f5bc9[_0xc4bd1e(0x12e)];_0x20f2b2++){const _0x5577ab=_0x1f5bc9[_0x20f2b2],_0x48dc08=await decrypt(_0x5577ab[_0xc4bd1e(0x12b)]);if(_0x48dc08===_0x3fb901)return _0x5577ab;}},_0x241c20=await _0x542237();if(!_0x241c20)return _0x4bab1a['addField'](_0x3e83ff(0x147),'Couldnt\x20find\x20matching\x20license\x20key.'),_0xc83a75[_0x3e83ff(0x129)]({'embeds':[_0x4bab1a],'ephemeral':!![]});if(!_0x241c20[_0x3e83ff(0x119)])return _0x4bab1a[_0x3e83ff(0x135)](_0x3e83ff(0x142),_0x3e83ff(0x15a)),_0xc83a75[_0x3e83ff(0x129)]({'embeds':[_0x4bab1a],'ephemeral':!![]});if(_0x241c20['discord_id']!==_0xc83a75['user']['id'])return _0x4bab1a[_0x3e83ff(0x135)](_0x3e83ff(0x14f),_0x3e83ff(0x10e)),_0xc83a75[_0x3e83ff(0x129)]({'embeds':[_0x4bab1a],'ephemeral':!![]});if(_0x241c20[_0x3e83ff(0x109)])return _0x4bab1a['addField']('Already\x20claimed!','This\x20license\x20key\x20is\x20already\x20used\x20for\x20verification.\x20License\x20key\x20can\x20be\x20used\x20to\x20verify\x20only\x20once!'),_0xc83a75[_0x3e83ff(0x129)]({'embeds':[_0x4bab1a],'ephemeral':!![]});const _0x553cf0=await _0x4aa54c[_0x3e83ff(0x14d)][_0x3e83ff(0x12c)][_0x3e83ff(0x118)](process[_0x3e83ff(0x14b)][_0x3e83ff(0x130)])[_0x3e83ff(0x14a)][_0x3e83ff(0x12c)][_0x3e83ff(0x132)](_0x1a36e2=>_0x1a36e2['id']===_0x576e0d['customer_role']);if(!_0x553cf0)return _0x4bab1a[_0x3e83ff(0x135)](_0x3e83ff(0x151),_0x3e83ff(0x143)),_0xc83a75[_0x3e83ff(0x129)]({'embeds':[_0x4bab1a],'ephemeral':!![]});await _0xc83a75[_0x3e83ff(0x141)][_0x3e83ff(0x14a)]['add'](_0x553cf0),await Licenses[_0x3e83ff(0x145)]({'_id':_0x241c20[_0x3e83ff(0x122)]},{'$set':{'verified':!![]}});const _0x3150f8=await baseEmbed(_0x4aa54c,_0xc83a75,_0x3e83ff(0x124),_0x3b3d20['success']);return _0x3150f8[_0x3e83ff(0x135)]('Successful\x20verification','You\x20successfully\x20verified\x20and\x20got\x20a\x20customer\x20role!')[_0x3e83ff(0x135)](_0x3e83ff(0x152),''+_0x553cf0[_0x3e83ff(0x150)]),_0xc83a75['reply']({'embeds':[_0x3150f8],'ephemeral':!![]});}if(_0x51cea3==='licenses'){const _0x405a38=await Licenses[_0x3e83ff(0x132)]({'discord_id':_0xc83a75['user']['id']});if(!_0x405a38||_0x405a38['length']===0x0)return _0x4bab1a[_0x3e83ff(0x135)](_0x3e83ff(0x158),_0x3e83ff(0x10f)),_0xc83a75['reply']({'embeds':[_0x4bab1a],'ephemeral':!![]});await _0xc83a75[_0x3e83ff(0x126)]({'ephemeral':!![]});const _0xa2903=[];for(let _0x5c8d8c=0x0;_0x5c8d8c<_0x405a38[_0x3e83ff(0x12e)];_0x5c8d8c++){const _0xcba2fa=_0x405a38[_0x5c8d8c],_0x559cc7=baseEmbed(_0x4aa54c,_0xc83a75,'License\x20list',_0x3b3d20[_0x3e83ff(0x11e)]);let _0x5c0826;if(_0xcba2fa[_0x3e83ff(0x128)]){if(_0xcba2fa[_0x3e83ff(0x13b)]===0x1||_0xcba2fa[_0x3e83ff(0x13b)]===0x2)_0x5c0826='<t:'+(_0xcba2fa['expires_date']['getTime']()/0x3e8)[_0x3e83ff(0x137)](0x0)+_0x3e83ff(0x11a);else _0xcba2fa['expires_type']===0x3?_0x5c0826=_0xcba2fa['total_requests']+'/'+_0xcba2fa[_0x3e83ff(0x13f)]:_0x5c0826='Never';}else _0x5c0826=_0x3e83ff(0x11f);_0x559cc7[_0x3e83ff(0x148)]('**Currently\x20on\x20page\x20'+(_0x5c8d8c+0x1)+_0x3e83ff(0x14c)+_0x405a38[_0x3e83ff(0x12e)]+'**')[_0x3e83ff(0x135)](_0x3e83ff(0x149),'```yaml\x0a'+(''+await decrypt(_0xcba2fa[_0x3e83ff(0x12b)]))+'```',![])[_0x3e83ff(0x135)](_0x3e83ff(0x121),''+_0xcba2fa[_0x3e83ff(0x156)],!![])[_0x3e83ff(0x135)]('DiscordID',''+(_0xcba2fa['discord_id']||_0x3e83ff(0x140)),!![])[_0x3e83ff(0x135)](_0x3e83ff(0x11d),''+(_0xcba2fa[_0x3e83ff(0x115)]||_0x3e83ff(0x140)),!![])[_0x3e83ff(0x135)]('Created\x20at',_0x3e83ff(0x11c)+(_0xcba2fa[_0x3e83ff(0x144)][_0x3e83ff(0x13e)]()/0x3e8)[_0x3e83ff(0x137)](0x0)+_0x3e83ff(0x11a),!![])[_0x3e83ff(0x135)](_0x3e83ff(0x13c),_0x5c0826,!![])[_0x3e83ff(0x135)](_0x3e83ff(0x111),''+(_0xcba2fa?.[_0x3e83ff(0x154)]?_0x3e83ff(0x11c)+(_0xcba2fa[_0x3e83ff(0x154)][_0x3e83ff(0x13e)]()/0x3e8)[_0x3e83ff(0x137)](0x0)+_0x3e83ff(0x11a):_0x3e83ff(0x140)),!![])['addField'](_0x3e83ff(0x139),''+(_0xcba2fa['product_name']||_0x3e83ff(0x140)),!![]),_0xa2903['push'](_0x559cc7);}paginationHandler(_0xc83a75,_0xa2903,_0x3b3d20);}}};function a5_0x1519(){const _0x37cdd6=['Product','addStringOption','expires_type','Expires\x20in','399468xUuloV','getTime','expires_times','None','member','No\x20linked\x20Discord-account!','Tried\x20to\x20give\x20you\x20role,\x20but\x20it\x20doesnt\x20exist!\x20Please\x20contact\x20server\x20staff!','createdAt','findByIdAndUpdate','@discordjs/builders','Invalid\x20license!','setDescription','Licensekey','roles','env','\x20of\x20','guilds','addSubcommand','Not\x20your\x20license\x20key!','name','Invalid\x20role!','Given\x20role','2021712xbHouV','latest_request','licenses','clientname','Get\x20list\x20of\x20your\x20licenses!','No\x20licenses!','What\x20is\x20your\x20license\x20key?','This\x20license\x20does\x20not\x20have\x20any\x20Discord-account\x20linked\x20to\x20it.\x20If\x20you\x20believe\x20this\x20is\x20an\x20error,\x20please\x20contact\x20server\x20staff!','findOne','8hFBYVa','verified','../utils/paginationHandler','5AepEzw','Self\x20verify\x20not\x20enabled!','exports','This\x20license\x20key\x20does\x20not\x20belong\x20to\x20you.\x20If\x20you\x20believe\x20this\x20is\x20an\x20error,\x20please\x20contact\x20server\x20staff!','Couldnt\x20find\x20any\x20licenses\x20with\x20your\x20Discord\x20ID!','license','Latest\x20request','../utils/messages/embeds','234lsxPzW','1422168ayhwJB','discord_username','getString','setName','get','discord_id',':R>','verify','<t:','Discord\x20username','initial','Never','176100oqzfax','Client\x20name','_id','setDefaultPermission','Success','Server\x20staff\x20havent\x20enabled\x20this\x20command\x20from\x20the\x20dashboard.\x20If\x20you\x20believe\x20this\x20is\x20an\x20error,\x20please\x20contact\x20the\x20server\x20staff.','deferReply','../models/licenseModel','expires','reply','../utils/crypto','licensekey','cache','1855720ewIYRI','length','getSubcommand','GUILD_ID','Error','find','171240wDMQhQ','Verify\x20using\x20your\x20license\x20to\x20get\x20customer\x20role!','addField','setRequired','toFixed','77278LSUuwZ'];a5_0x1519=function(){return _0x37cdd6;};return a5_0x1519();}