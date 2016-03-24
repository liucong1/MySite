var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/mytest/:pageCode', function(req, res, next) {
    var pageCode = req.params.pageCode;
    var data = {
        'title':'个人测试'
    };
    res.render("mypage/page/mytest/"+ pageCode +".vash",data);
});

module.exports = router;
