
(async () => {

    var Crawler = require("crawler");

    var c = new Crawler({
        maxConnections: 10,
    });

    let list = await new Promise(resolve => {
        c.queue({
            url: 'http://wiki.52poke.com/wiki/%E5%AE%9D%E5%8F%AF%E6%A2%A6%E5%88%97%E8%A1%A8%EF%BC%88%E6%8C%89%E5%85%A8%E5%9B%BD%E5%9B%BE%E9%89%B4%E7%BC%96%E5%8F%B7%EF%BC%89/%E7%AE%80%E5%8D%95%E7%89%88',
            callback: function (error, res, done) {
                if (error) {
                    console.log(error);
                } else {
                    var $ = res.$;
                    // $默认使用Cheerio
                    // 这是为服务端设计的轻量级jQuery核心实现
                    var list = []
                    $(".eplist tbody tr td:nth-child(2) a").map((index, item) => {
                        // console.log(item.attribs.title, item.attribs.href)
                        list.push('http://wiki.52poke.com' + item.attribs.href)
                    })
                }
                resolve(list)
            }
        })
    })

    list.map(item => {
        c.queue({
            url: item,
            callback: function (error, res, done) {
                console.log(res)
            }
        })
    })
})()
