const koa = require('koa');
const app = new koa();
const cacheData = [];
const Cache = require('./cache');
const cacheObj = new Cache(cacheData);

app.use((ctx,next)=>{
  const url = ctx.url;
  if (url ==='/api/data/list') {
    if (cacheData[url]&&cacheData[url].length>0) {
      console.log('缓存数据')
      ctx.body=cacheData.url;
      cacheData[url] = cacheObj.clearCache(ctx);
    } else {
      // 获取数据
      const data = [{
        name:'小明',
        age:'19'
      }]
      ctx.body = data;
      cacheData[url] = data;
    }
  }
})
app.listen(3000,function () {
  console.log('程序已经启动');
})
