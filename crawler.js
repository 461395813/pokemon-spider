const { host, targetDict } = require('./config');
const Crawler = require("crawler");
const fs = require('fs');
class Spider {
    constructor() {
        this.crawler = new Crawler({
            maxConnections: 10,
        })
    }
    async run() {
        this.getList()
    }
    async getList() {
        for (let name in targetDict) {
            let target = targetDict[name]
            this.crawler.queue({
                url: host + target.url,
                callback: function (error, res, done) {
                    if (error) {
                        reject(error)
                    } else {
                        // $默认使用Cheerio
                        // 这是为服务端设计的轻量级jQuery核心实现
                        let $ = res.$;
                        let list = $(target.tag).map((index, item) => ({
                            no: index + 1,
                            name: item.children[0].data,
                            url: host + item.attribs.href
                        }))

                        var file = fs.createWriteStream(`${name}.txt`);
                        file.on('error', (err) => { console.log('error', error) });
                        list.map((index, item) => { file.write(`${item.no} ${item.name} ${item.url}\n`); });
                        file.end()
                    }
                }
            })
        }
    }
}

const spider = new Spider()
spider.run()