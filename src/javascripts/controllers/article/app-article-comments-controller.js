const {getRepliesCount, Num} = require('../../models/article/app-article-comments-model')
/* 定义点击请求留言时间的开关 */
let prevRenderBool = false
/* 定义记录留言条数标志 */
let commentNum = 0
/* 定义总留言条数标志 */
let replies_count


const render = async () => {
  let appArtocleRepliesCountView = require('../../views/article/article-comments.html')
  let template = Handlebars.compile(appArtocleRepliesCountView)
  
  /* 获取id */
  let id = location.href.split('?')[1].split('=')[1]
  
  /* 请求留言借口数据 */
  let commentList_first = await getRepliesCount('/science_api/article/' + id + '/replies?limit=5&page=1')

  /* 记录当前请求到的留言数目 */
  commentNum = commentList_first.length

  /* 请求文章接口数据以获取留言条数 */
  let articleInfo = JSON.parse(localStorage.pressDetail)
  replies_count = articleInfo.replies_count

  $('#app #comments-box').html(template({comments: commentList_first}))
  $('.comments-title').html(replies_count + '条评论')

  /* 为查看更多绑定点击事件，点击之后请求更多留言 */
  $('.comments-more').click(clickHandler)
}


function clickHandler (e) {
  prevRender()
}

const prevRender = async () => {
  if ( prevRenderBool ) return;//如果已经开始加载则跳出,防止重复执行
  prevRenderBool =true;

  /* 获取后续留言视图 */
  let prevRepliesCountView = require('../../views/article/article-comments_prev.html');
  let template = Handlebars.compile(prevRepliesCountView)
  
  /* 后续请求留言借口数据 */
  let commentList_first = await getRepliesCount(getUrl())
  commentNum += commentList_first.length
  $('.finish').before(template({comments: commentList_first}))
  if (commentNum === replies_count || commentNum % 5 !== 0) {
    $('.comments-more').addClass('hide')
    $('.comments-finish').removeClass('hide')
    return
  }
  prevRenderBool = false;
}

function getUrl(){
  if (! new Num().num) {
    new Num().init()
  }
  let url;
  let id = location.href.split('?')[1].split('=')[1]
  url = '/science_api/article/' + id + '/replies?limit=5&page=' + new Num().add()
  return url;
}



module.exports = {render}