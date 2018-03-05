const app = getApp();
// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    touching: false,
    mockList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    const requestTask = wx.request({
      url: 'https://qs.chirsen.com/api/paperList', //仅为示例，并非真实的接口地址
      data: {
        uid: 'a',
        imgId: 'b'
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res, a, b) {
        if (+res.data.code === 200) {
          _this.setData({
            mockList: res.data.data
          });
        }
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

  },
  /**
   * 点击答题
   */
  toAnswer: function(e) {
    wx.request({
      url: 'https://qs.chirsen.com/api/paper',
      data: {
        id: e.currentTarget.id
      },
      success: (e) => {
        app.globalData.token = e.header['set-cookie'];
        if(+e.data.code === 200) {
          app.globalData.detailData = e.data.data;
          wx.navigateTo({
            url: '../detail/detail'
          })
        }
      }
    });
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