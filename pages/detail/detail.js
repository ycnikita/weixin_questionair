const app = getApp();
// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    page: {},
    resultData: {},
    showMask: 0,
    tip: '',
    topicNum: 0
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
    this.setData({ "page": data, topicNum: order - 1 });
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
    const _this = this;
    const answer = Object.assign({}, this.data.resultData, e.detail.value);
    const token = app.globalData.token;
    // 验证数据是否填完
    if (Object.keys(answer).some(key => {
      return !answer[key];
    })) {
      this.tipShow(2, '请完成问卷再提交～');
      return;
    }
    const answerTotal = this.groupData(app.globalData.userInfo, answer);
    wx.request({
      url: 'https://qs.chirsen.com/api/uploadAnswer?_csrf=' + token, //仅为示例，并非真实的接口地址
      data: {
        id: app.globalData.detailData._id,
        answer: JSON.stringify(answerTotal)
      },
      header: {
        'content-type': 'application/json', // 默认值
        '_csrf': token
      },
      success: function (res) {
        if(+res.data.code === 200) {
          app.globalData.detailData = null;
          _this.tipShow(1, '感谢您的参与', () => {
            wx.navigateTo({
              url: '../list/list'
            });
          });
        } else {
          _this.tipShow(3, '系统忙，请稍后提交');
        }
      }
    })
  },
  /**
   * 隐藏mask
   */
  hideMask: function() {
    this.setData({
      showMask: false
    });
  },
  /**
   * 用于收集选项数据
   */
  collectData: function(id, val) {
    this.data.resultData[id] = val;
  },
  /**
   * 用于组装上行数据
   */
  groupData: function(userInfo, answer) {
    const answerInfo = { answer: answer };
    // 填装userInfo
    answerInfo.userNickname = userInfo.nickName;
    answerInfo.city = userInfo.nickName+','+userInfo.city;
    answerInfo.imgId = userInfo.avatarUrl.split('/').slice(-2).join('').substr(-8);
    return answerInfo;
  },
  /**
   * 展示提示
   */
  tipShow: function (type, text, cb) {
    this.setData({
      showMask: type,
      tip: text
    });
    setTimeout(() => {
      this.setData({
        showMask: 0,
        tip: ''
      });
      cb && cb();
    }, 2000);
  }
})