const app = getApp();
import util from '../../utils/util';
import request  from '../../utils/request'
//Page Object
Page({
  data: {
    searchType:'q',
    inputVal:'',
    filmList:[],
    f_start:0,
    f_count:10,
    f_total:0
  },
  searchGo(ev){
    this.setData({inputVal:ev.detail.value});
    let url = `https://api.douban.com/v2/movie/search?${this.data.searchType}=${this.data.inputVal}&apikey=${app.globalData.apiKey}&start=${this.data.f_start * this.data.f_count}&count=${this.data.f_count}`;
    request(app,{url}, res=>{
      if(res.data.code == 1001){
        wx.showToast({
          title: '数据请求返回1001错误码',
          icon:'none',
          duration: 3500,
          mask:false
        });
        setTimeout(()=>{
          wx.hideToast();
        },3500)
        
      }else{
        this.setData({
          filmList: res.data.subjects
        })
      }
    })

  },
  radioChange(ev){
    this.setData({
      searchType:'q',
      inputVal:'',
      filmList:[]
    })
  }
});