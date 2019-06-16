const app = getApp();
import util from '../../utils/util';
import request from '../../utils/request';

//Page Object
Page({
  data: {
    title: 'hello',
    //城市选择
    region: ['广东省', '深圳市', '全部'],
    customItem: '全部',
    // 电影列表
    filmList: [],
    typeTitle: '',
    page: 0,
    count: 5,
    city: '深圳',
    total:0,
    isShowCitySelect: true,
  },
  //请求电影数据回调函数
  reqDataCallback(res) {
    const movieType = app.globalData.movieType;
    let total = res.data.total;
    let data = res.data.subjects;
    if (this.data.typeTitle == movieType.weekly || this.data.typeTitle == movieType.usBox) {
      data.forEach(item => {
        Object.assign(item, item.subject);
      });
      total = data.length;
    }
    if (this.data.typeTitle == movieType.newMovies || this.data.typeTitle == movieType.usBox) {
      this.setData({
        isShowCitySelect: false
      })
      total = data.length;
    }
    let tmpData = [];
    if(res.loadMore){
      tmpData = this.data.filmList;
      tmpData.push(...data);
    }else{
      tmpData = data;
    }
    this.setData({
      filmList: tmpData,
      total
    });
  },
  //改变区域城市重新请求数据
  bindRegionChange(e) {
    let city = e.detail.value[1].substring(0, e.detail.value[1].length - 1);
    let region = e.detail.value;
    if (city === '全部') {
      city = '深圳';
      region = ['广东省', '深圳市', '全部'];
    }
    this.setData({
      region,
      city,
      page: 0
    });
    let url = util.buildReqUrl(app, this.data.typeTitle, this.data.city, this.data.page, this.data.count);
    request(this, { url }, this.reqDataCallback);

  },
  //声明周期
  onLoad(params) {
    this.setData({
      title: params.name,
      typeTitle: params.type
    });
    let url = util.buildReqUrl(app, this.data.typeTitle, this.data.city, this.data.page, this.data.count);
    request(this, { url }, this.reqDataCallback);
  },
  onReachBottom() {
    //开发完去掉 return
    // return;
    if(this.data.filmList.length >= this.data.total){
      wx.showToast({
        title: '已加载所有数据',
        icon: 'none',
        duration: 1500,
        mask: true
      });
      setTimeout(()=>{
        wx.hideToast();
      },3500);
      return;
    }
    this.setData({
      page:this.data.page + 1
    });
    let url = util.buildReqUrl(app, this.data.typeTitle, this.data.city, this.data.page, this.data.count);
    request(this, { url ,loadMore:true}, this.reqDataCallback);
    
  },
  onShareAppMessage() {

  }
});