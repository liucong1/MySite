fis.config.init({
    project : {
        charset : 'utf8',
        md5Length : 7 ,
        md5Connector : '_'
    }
});

fis.config.set('project.charset', 'gbk');

//后缀名的less的文件使用fis-parser-less编译
//modules.parser.less表示设置后缀名为less的文件的parser，第二个less表示使用fis-parser-less进行编译
fis.config.set('modules.parser.css', 'less');

fis.config.merge({
    roadmap : {
        path : [
            {
                //所有的js文件
                reg : '**.js',
                //发布到/static/js/xxx目录下
                release : '/static/js$&',
                url:'/MyProject/output/static/js$&'
            },
            {
                //所有的css文件
                reg : '**.css',
                //发布到/static/css/xxx目录下
                release : '/static/css$&',
                url:'/MyProject/output/static/css$&'
            },
            {
                //所有image目录下的.png，.gif文件
                reg : '**.jpg',
                //发布到/static/pic/xxx目录下
                release : '/static/pic$&',
                url:'/MyProject/output/static/pic$&'
            },
            {
                //所有image目录下的.png，.gif文件
                reg : '**.png',
                //发布到/static/pic/xxx目录下
                release : '/static/pic$&',
                url:'/MyProject/output/static/pic$&'
            }
        ]
    }
});