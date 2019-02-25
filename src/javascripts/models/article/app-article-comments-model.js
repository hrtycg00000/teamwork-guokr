const api = require('../../api')
/* 根据id获取留言借口数据 */
const getRepliesCount = (_url) => {
  return api.request({
    /* url: '/science_api/article/' + _id + '/replies?limit=5&page=' + _page */
    url: _url
  })
}

class Num{
  constructor (){
      return Num.instance || this.init();
  }
  init (){
      if( !Num.instance ){
        Num.instance = new NumInstance();
      }
  }
}

class NumInstance{
  constructor (){
      if ( !this.num ) {
          this.init();
      }

      return this.num;
  }
  init (){
      return this.num = 1;
  }
  add (){
      return ++this.num ;
  }
}

module.exports = {
  getRepliesCount,
  Num
}