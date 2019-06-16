const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

// 构建请求电影列表url
const buildReqUrl = (app, type, city, page, count)=>{
  return  `${app.globalData.apiUrlPrefix}${type}?apikey=${app.globalData.apiKey}&city=${city}&start=${page * count}&count=${count}&client=&udid=`;
}

//构建请求电影详情内容url
const buildMovieDetailUrl = (app,movieId,city)=>{
  return  `${app.globalData.apiUrlPrefix}subject/${movieId}?apikey=${app.globalData.apiKey}&city=${city}&client=&udid=`;
}

module.exports = {
  formatTime: formatTime,
  buildReqUrl,
  buildMovieDetailUrl
}
