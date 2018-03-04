// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    page: {
      title: '问卷标题',
      des: '问卷描述',
      topics: [
        {
          content: '段落描述',
          'type': 'prograph'
        }, {
          content: '段落描述',
          'type': 'prograph'
        }, {
          content: '段落描述',
          'type': 'prograph'
        }, {
          content: '段落描述',
          'type': 'prograph'
        }, {
          index: 1,
          content: '填空题',
          'type': 'text'
        }, {
          index: 2,
          content: '单选题',
          'type': 'radio',
          items:[
            {
              content: '选项1',
              'type': 'radio'
            }, {
              content: '选项2',
              'type': 'radio'
            }
          ]
        }, {
          index: 3,
          content: '多选题',
          'type': 'checkbox',
          items: [
            {
              content: '选项1',
              'type': 'checkbox'
            }, {
              content: '选项2',
              'type': 'checkbox'
            }
          ]
        }, {
          index: 4,
          content: '填空题',
          'type': 'text'
        }, {
          index: 5,
          content: '单选题',
          'type': 'radio',
          items: [
            {
              content: '选项1',
              'type': 'radio'
            }, {
              content: '选项2',
              'type': 'radio'
            }
          ]
        }
      ]
    },
    topicIndex: 1,
    resultData: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.dataInit();
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
   * 对获取到的数据进行初始化处理
   */
  dataInit: function(data) {
    return data;
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
    Object.assign(this.data.resultData, e.detail.value);
    console.log(this.data.resultData);
  },
  /**
   * 用于收集选项数据
   */
  collectData: function(id, val) {
    this.data.resultData[id] = val;
  }
})