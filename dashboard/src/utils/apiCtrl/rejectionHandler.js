const a27_0x6de8=['6XrMrnq','87rtVGrT','clientname','4yxICRN','136055yiitqM','533574FDOWYc','1787mNQunp','381941NXHlLb','259tGnYLo','toLocaleDateString','findOneAndUpdate','3710QVgAvt','64653WuwwqL','exports','unknown','11OGXpvA','save','25879KGawLs','findOne'];const a27_0x563a25=a27_0x4c87;function a27_0x4c87(_0x14cf88,_0x3d741a){return a27_0x4c87=function(_0x6de85a,_0x4c8724){_0x6de85a=_0x6de85a-0x84;let _0x349f2a=a27_0x6de8[_0x6de85a];return _0x349f2a;},a27_0x4c87(_0x14cf88,_0x3d741a);}(function(_0xbe1528,_0x546aae){const _0x14f19c=a27_0x4c87;while(!![]){try{const _0x292e9c=-parseInt(_0x14f19c(0x89))*parseInt(_0x14f19c(0x8b))+parseInt(_0x14f19c(0x84))*parseInt(_0x14f19c(0x8e))+parseInt(_0x14f19c(0x87))*parseInt(_0x14f19c(0x86))+-parseInt(_0x14f19c(0x92))*parseInt(_0x14f19c(0x94))+-parseInt(_0x14f19c(0x88))+parseInt(_0x14f19c(0x8a))+-parseInt(_0x14f19c(0x96))*-parseInt(_0x14f19c(0x8f));if(_0x292e9c===_0x546aae)break;else _0xbe1528['push'](_0xbe1528['shift']());}catch(_0xe84b93){_0xbe1528['push'](_0xbe1528['shift']());}}}(a27_0x6de8,0x56dbd));const Requests=require('../../models/requestsModel'),rejectionHandler=async(_0x47988a,_0x633649,_0xe7c75)=>{const _0x119b4e=a27_0x4c87;if(_0x47988a){const _0x350f5d=new Date()[_0x119b4e(0x8c)](),_0x459f8e=await Requests[_0x119b4e(0x95)]({'date':_0x350f5d});if(!_0x459f8e){const _0x788b78=new Requests({'date':_0x350f5d,'successful_requests':0x0,'rejected_requests':0x1,'requests':[{'ip':_0x633649,'client':_0xe7c75?.[_0x119b4e(0x85)]||_0x119b4e(0x91),'date':new Date(),'rejected':_0x47988a}]});await _0x788b78[_0x119b4e(0x93)]();}else await Requests[_0x119b4e(0x8d)]({'date':_0x350f5d},{'$inc':{'rejected_requests':0x1},'$push':{'requests':{'ip':_0x633649,'client':_0xe7c75?.[_0x119b4e(0x85)]||_0x119b4e(0x91),'date':new Date(),'rejected':_0x47988a}}});}else{const _0x46f115=new Date()['toLocaleDateString'](),_0x3e6c49=await Requests['findOne']({'date':_0x46f115});if(!_0x3e6c49){const _0x17359d=new Requests({'date':_0x46f115,'successful_requests':0x1,'rejected_requests':0x0,'requests':[{'ip':_0x633649,'client':_0xe7c75['clientname'],'date':new Date(),'rejected':_0x47988a}]});await _0x17359d['save']();}else await Requests[_0x119b4e(0x8d)]({'date':_0x46f115},{'$inc':{'successful_requests':0x1},'$push':{'requests':{'ip':_0x633649,'client':_0xe7c75[_0x119b4e(0x85)],'date':new Date(),'rejected':_0x47988a}}});}};module[a27_0x563a25(0x90)]={'rejectionHandler':rejectionHandler};