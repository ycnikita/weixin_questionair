const app = getApp();
// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    page: {},
    topicIndex: 1,
    resultData: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.initData(app.globalData.detailData);
  },

  /**
   * 初始化数据
   * 给题目加上编号
   */
  initData: function(data) {
    let order = 1;
    const topics = data.topics.map((item) => {
      if(item.type !== 'prograph') {
        item.index = order++;
      }
      return item;
    });
    data.topics = topics;
    this.setData({ "page": data });
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
   * radioChange函数
   */
  radioChange: function (e) {
    this.collectData(e.target.id, e.detail.value);
  },
  /**
   * checkBoxChange函数
   */
  checkboxChange: function (e) {
    this.collectData(e.target.id, e.detail.value);
  },
  /**
   * 提交表单
   * 遍历detail中的值，放到resultData中
   */
  bindFormSubmit: function (e) {
    const answer = Object.assign({}, this.data.resultData, e.detail.value);
    console.log(answer)
    // wx.request({
    //   url: 'https://qs.chirsen.com/api/uploadAnswer', //仅为示例，并非真实的接口地址
    //   data: {
    //     id: app.globalData.detailData._id,
    //     answer: answer
    //   },
    //   header: {
    //     'content-type': 'application/json' // 默认值
    //   },
    //   success: function (res) {
    //     if(+res.data.code === 200) {
    //       app.app.globalData.detailData = null;
    //       wx.navigateTo({
    //         url: '../list/list'
    //       });
    //     } else {

    //     }
    //   }
    // })
  },
  /**
   * 用于收集选项数据
   */
  collectData: function(id, val) {
    this.data.resultData[id] = val;
  }
})