var fs = require('fs');

module.exports = {
    indexPage: function(req, res) {
        var data = {
            'title':'我的个人网站'
        };
        res.render("mypage/page/index/index.vash",data);
    },
    person_intro: function(req, res){
        console.log("*********************************************************");
        var data = {
            'title':'个人简介'
        };
        res.render("mypage/page/person_info.vash",data);
    },
    mypages: function(req, res){
        var data = {
            'title':'个人作品',
            'content':'<h1></h1>'
        };
        res.render("mypage/mypages.ejs",data);
    },
    mytest: function(req, res){
        var data = {
            'title':'个人测试'
        };
        res.render("mypage/page/mytest/index.vash",data);
    },
    testPage: function(req, res){
        console.log(req.params.page_id);
        var data = {
            'title':'个人测试'
        };
        res.render("mypage/page/mytest/index.vash",data);
    }
};