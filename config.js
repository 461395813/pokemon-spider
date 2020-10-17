const config = {
    host: 'http://wiki.52poke.com/wiki',
    targetDict: {
        poke: {
            url:'/%E5%AE%9D%E5%8F%AF%E6%A2%A6%E5%88%97%E8%A1%A8%EF%BC%88%E6%8C%89%E5%85%A8%E5%9B%BD%E5%9B%BE%E9%89%B4%E7%BC%96%E5%8F%B7%EF%BC%89/%E7%AE%80%E5%8D%95%E7%89%88',
            tag:'.eplist tbody tr td:nth-child(2) a'
        },
        skill: {
            url:'/%E6%8B%9B%E5%BC%8F%E5%88%97%E8%A1%A8',
            tag:'.hvlist tbody tr td:nth-child(2) a'
        },
        tool: {
            url:'/%E9%81%93%E5%85%B7%E5%88%97%E8%A1%A8',
            tag:'.hvlist tbody tr td:nth-child(1) a'
        }
    }
}
module.exports = config