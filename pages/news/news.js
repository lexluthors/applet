// pages/home/home.js
var newsdata = require("../data/newsdata.js")
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatDot: true,
    intral: 1000,
    useData: []
  },

  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  goNewsDetail: function (event) {
    console.log(event)
    var newsId = event.currentTarget.dataset.newsid;
    wx.navigateTo({
      url: 'news-detail/news-detail?newsid=' + newsId
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(newsdata);
    this.setData({
      useData: newsdata.initData
    })

    var inTheaters = "/v2/movie/in_theaters";
    // this.httpCommon(inTheaters,5);
    this.http2();
  },

  /* 封装的http请求  */
  httpCommon: function (category, page) {
    wx.request({
      url: app.globalUrl.doubanUrl + category + "?count=" + page,
      data: {},
      // method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: { 'content-type': 'application/xml' }, // 设置请求的 header
      success: function (res) {
        // success
        console.log(res.data)
      },
    })
  },

  http2: function () {
    wx.request({
      url: 'https://apecoder.top/getAllArticles'+'?page=1&pageSize=10',
      data: {},
      method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: { 'content-type': 'application/x-www-form-urlencoded' }, // 设置请求的 header
      success: function (res) {
        // success
        console.log(res);
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})

