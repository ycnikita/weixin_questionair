// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    touching: false,
    mockList: [{
      id: 1,
      title: '测试1',
      hot: 1,
      date: '2018-03-01',
      name: '颜生',
      cost: 1,
      time: 1
    }, {
      id: 1,
      title: '测试1',
      hot: 1,
      date: '2018-03-01',
      name: '颜生',
      cost: 1,
      time: 1
    }, {
        id: 1,
        title: '测试1',
        hot: 1,
        date: '2018-03-01',
        name: '颜生',
        cost: 0,
        time: 1
    }, {
      id: 2,
      title: '测试1',
      hot: 1,
      date: '2018-03-01',
      name: '颜生',
      cost: 0,
      time: 1
    }, {
      id: 2,
      title: '测试1',
      hot: 1,
      date: '2018-03-01',
      name: '颜生',
      cost: 0,
      time: 1
    }, {
      id: 2,
      title: '测试1',
      hot: 1,
      date: '2018-03-01',
      name: '颜生',
      cost: 0,
      time: 1
    }, {
      id: 2,
      title: '测试1',
      hot: 1,
      date: '2018-03-01',
      name: '颜生',
      cost: 0,
      time: 1
    }, {
      id: 2,
      title: '测试1',
      hot: 1,
      date: '2018-03-01',
      name: '颜生',
      cost: 0,
      time: 1
    }, {
      id: 2,
      title: '测试1',
      hot: 1,
      date: '2018-03-01',
      name: '颜生',
      cost: 0,
      time: 1
    }, {
      id: 2,
      title: '测试1',
      hot: 1,
      date: '2018-03-01',
      name: '颜生',
      cost: 0,
      time: 1
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  },
  /**
   * 点击答题
   */
  toAnswer: function(e) {
    wx.navigateTo({
      url: '../detail/detail',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  /**
   * 触摸开始和结束
   */
  touchStart: function(e) {
    this.data.touching = true;
  },
  touchEnd: function(e) {
    this.data.touching = false;
  }
})