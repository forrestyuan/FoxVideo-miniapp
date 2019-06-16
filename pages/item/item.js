import util from '../../utils/util';
import request from '../../utils/request';
const app = getApp();

//Page Object
Page({
  data: {
    mvInfo:{},
    lights:0,
    halfs:0,
    grays:5,
    isAllDes:false,
    
    tabShowType:0,

    //reivew
    r_start:0,
    r_count:5,
    r_total:0,
    //comment
    c_start:0,
    c_count:5,
    c_total:0
  },
  showAllPubdates(){
    wx.showModal({
      title: '所有上映日期',
      content: `${this.data.mvInfo.pubdates}`,
      showCancel: false,
      confirmText: '确定',
      confirmColor: '#3CC51F'
    });
  },
  showLgPoster(){
    wx.previewImage({
      urls: [this.data.mvInfo.images.large]
    })
  },
  showMoreDesc(){
    this.setData({
      isAllDesc:true
    })
  },
  showLongReview(ev){
    let index = +ev.target.dataset.index;
    let tmpObj = JSON.parse(JSON.stringify(this.data.mvInfo));
    tmpObj.popular_reviews[index].isShow = !tmpObj.popular_reviews[index].isShow;
    this.setData({
      mvInfo:tmpObj
    })
  },
  hideMoreDesc(){
    this.setData({
      isAllDesc:false
    })
  },
  changeTab(ev){
    console.log(typeof ev.target.dataset.tid);
    switch(+ev.target.dataset.tid){
      case 0: this.setData({tabShowType:0}); break;
      case 1: this.setData({tabShowType:1}); break;
      case 2: this.setData({tabShowType:2}); break;
      case 3: this.setData({tabShowType:3}); break;
    }
  },
  onLoad(params){
    console.log(params);
    //请求电影详细信息
    let url = util.buildMovieDetailUrl(app,params.movie_id, params.city);
    request(this, {url}, (res)=>{
      console.log(res);
      request(this, {url:`https://api.douban.com/v2/movie/subject/${res.data.id}/reviews?apikey=${app.globalData.apiKey}&start=${this.data.r_start * this.data.r_count}&count=${this.data.r_count}&client=&udid=`}, (resObj)=>{
        res.data.popular_reviews = resObj.data.reviews;
        res.data.popular_reviews.forEach(item=>{
          item.isShow = false;
        });
        request(this, {url:`https://api.douban.com/v2/movie/subject/${res.data.id}/comments?apikey=${app.globalData.apiKey}&start=${this.data.c_start * this.data.c_count}&count=${this.data.c_count}&client=&udid=`}, (resCObj)=>{
          res.data.popular_comments = resCObj.data.comments;
          
          let data = res.data;
          let rating = data.rating.average;
          let lights = Math.floor(rating / 2);
          let halfs = rating % 1 == 0? 0 : 1;
          let grays = 5 - lights - halfs;
          this.setData({
            mvInfo:res.data,
            lights,
            halfs,
            grays,
            r_total:resObj.data.total,
            c_total:resCObj.data.total
          });
        });
      });
    })
  },
  showMoreComment(){
    this.setData({
      c_start: this.data.c_start + 1
    });
    if(this.data.mvInfo.popular_comments.length == this.data.c_total){
      wx.showToast({
        title: '已加载所有',
        icon: 'none',
        duration: 2500,
        mask: true,
        complete:()=>{
          wx.hideToast();
        }
      });
      return;
    }
    request(this, {url:`https://api.douban.com/v2/movie/subject/${this.data.mvInfo.id}/comments?apikey=${app.globalData.apiKey}&start=${this.data.c_start * this.data.c_count}&count=${this.data.c_count}&client=&udid=`}, (resCObj)=>{
      let tmpData = this.data.mvInfo;
      tmpData.popular_comments.push(...resCObj.data.comments);
      this.setData({
        mvInfo:tmpData
      });
    });
  },
  showMoreReview(){
    this.setData({
      r_start: this.data.r_start + 1
    });
    if(this.data.mvInfo.popular_reviews.length == this.data.r_total){
      wx.showToast({
        title: '已加载所有',
        icon: 'none',
        duration: 2500,
        mask: true,
        complete:()=>{
          wx.hideToast();
        }
      });
      return;
    }
    request(this, {url:`https://api.douban.com/v2/movie/subject/${this.data.mvInfo.id}/reviews?apikey=${app.globalData.apiKey}&start=${this.data.r_start * this.data.r_count}&count=${this.data.r_count}&client=&udid=`}, (resObj)=>{
      resObj.data.reviews.forEach(item=>{
        item.isShow = false;
      });
      let tmpData = this.data.mvInfo;
      tmpData.popular_reviews.push(...resObj.data.reviews);
      this.setData({
        mvInfo:tmpData,
      });
    });
  }
});