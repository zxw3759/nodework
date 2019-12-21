class Cache{
  constructor(params) {
    this.url = '';
    this.cacheData = params.cacheData
    this.timer = [];
    this.currentTime = new Date(new Date()).getTime();
    this.clearTime = new Date(new Date().toLocaleDateString()).getTime();
  }
  clearCache (ctx) {
    this.url = ctx.url
    // 到达零点即清空缓存和计时器
    if (this.currentTime === this.clearTime) {
      return '';
    } else {
      return this.cacheData;
    }
  }
}
module.exports = Cache;