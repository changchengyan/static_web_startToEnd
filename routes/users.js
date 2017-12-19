let express = require('express');
let router = express.Router();
let fortune=require('../lib/fortune');

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
    let user_id=req.param('id');
    let name=req.param('name');
    let token=req.param('token');
    // res.render('users',{
    //     fortune:fortune.getFortune(),
    //     pageTestScript:'qa/tests-about.js',
    //     user_id,
    //     name,
    //     token
    //     })

    res.send({sucess:true,data:[
            {id:1,name:'ycc',age:23},
            {id:2,name:'laowang',age:11},
            {id:3,name:'huhao',age:32},
            {id:4,name:'daliang',age:12}
        ]});
});

module.exports = router;
