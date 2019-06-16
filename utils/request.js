module.exports = (ctx = null, obj={}, callback)=>{
  if(!ctx){
    console.error('调用封装的request 需要 this 上下文参数！！！');
    return;
  }
  if(!obj){
    console.error('请求配置参数缺失...');
    return;
  }
  if(typeof callback != 'function'){
    console.error('callback 参数必须是函数')
    return;
  }
  wx.showLoading({
      title: '加载中....',
      mask: true
  });
  let type = obj.type || 'json';
  let loadMore = obj.loadMore || false;
  //发起请求
  wx.request({
    url: obj.url,
    data: {},
    header: {'content-type':type},
    success: (result)=>{
      console.log(result.data)
      result.loadMore = loadMore;
      callback(result);
    },
    fail: ()=>{
      wx.showToast({
        title: '请求数据失败',
        icon: 'none'
      });
      setTimeout(()=>{
        wx.hideToast();
      },3500)
    },
    complete: ()=>{
      wx.hideLoading(); 
    }
  });
};
