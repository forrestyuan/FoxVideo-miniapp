const app  = getApp();

//Page Object
Page({
  data: {
    imgUrls: [
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    
    //榜单列表
    boardList:[{
      url:`../list/list?type=${app.globalData.movieType.inTheaters}&name=正在热映`,
      iconPath:'../../images/remen.png',
      title:'正在热映'
    },
    {
      url:`../list/list?type=${app.globalData.movieType.comingSoon}&name=即将上映`,
      iconPath:'../../images/jijiangdaoqi.png',
      title:'即将上映'
    },
    {
      url:`../list/list?type=${app.globalData.movieType.top250}&name=Top250`,
      iconPath:'../../images/paiming.png',
      title:'Top250'
    },
    {
      url:`../list/list?type=${app.globalData.movieType.weekly}&name=口碑榜`,
      iconPath:'../../images/koubei.png',
      title:'口碑榜'
    },
    {
      url:`../list/list?type=${app.globalData.movieType.usBox}&name=北美票房榜`,
      iconPath:'../../images/rank.png',
      title:'北美票房榜'
    },
    {
      url:`../list/list?type=${app.globalData.movieType.newMovies}&name=新片榜`,
      iconPath:'../../images/news.png',
      title:'新片榜'
    }]
  }
});