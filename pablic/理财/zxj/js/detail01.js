var detailPage = {

  axisColors: ['#8e9eab'],

  mockData01: [
    [[-2, -3, 2, -5, 5, 0], [5, -2, 5, 3, -1, 7], [5, 0, -1, 2, 6, -1]],
    [[-2, -7, 0, 3, 7, 4], [2, 5, 3, 5, -1, 0], [-7, 8, 3, 1, 5, -2]],
    [[-3, -1, 2, -5, 5, -1], [3, -5, 3, 5, -2, 1], [3, 0, -1, 6, 4, 1]],
    [[-2, -3, 3, -5, 5, 0], [5, -2, 5, 3, 2, 7], [5, 0, -1, 2, 6, -1]],
    [[-2, -3, 2, -5, 5, 0], [5, -2, -6, 3, 5, 7], [5, 0, -1, 2, 6, -1]],
    [[-2, -1, 2, -2, 5, 0], [5, -4, 5, 3, -1, 2], [0, 3, -1, 3, 9, -2]],
    [[0, -1, 2, 7, 3, 0], [2, 5, 3, -4, -1, -2], [-7, 2, -1, 5, 8, 3]],
  ],
  compareChart: null,
  compareChartOption: null,

  init: function () {
    var self = this;
    // fix window scroll
    $(window).unbind();
    control.goTop();

    self.initSlider();
    self.initTabs();
    self.initCompareTable01();
    self.initSelfChangeTable();
    self.initHolderTable();
    self.initBtnRec();
  },

  initSlider: function () {
    var width = parseInt($('.ul-normal').css('width')) - 182 + 'px';
    $('.ul-alt').css('width', width);
    $('#change-main').on('mouseenter', function () {
      $('.alt-wrapper').css({
        width: width,
        transition: 'width .2s'
      });
    });
    $('#change-main').on('mouseleave', function () {
      $('.alt-wrapper').css({
        width: '0',
        transition: 'width .2s'
      })
    });
  },

  initTabs: function () {
    $('.tabs li.tab-link').click(function () {
      var jqthis = $(this);
      var tab_id = jqthis.attr('data-tab');
      var parent = jqthis.parents('.tabs').parent();
      parent.find('.tabs li.tab-link').removeClass('current');
      parent.find('.tab-content').removeClass('current');
      $(this).addClass('current');
      $("#" + tab_id).addClass('current');
    });
  },

  initCompareTable01: function () {
    var self = this;
    self.compareChart = echarts.init(document.getElementById('compareTable01'));

    var colors = ['#376BEF'];

    self.compareChartOption = {
      color: colors,
      tooltip: {
        trigger: 'axis'
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      grid: {
        left: 20,
        right: 20,
        bottom: 0,
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          axisLine: {
            lineStyle: {
              color: self.axisColors[0]
            }
          },
          data: ['2016-11-01', '2016-11-01', '2016-11-01', '2016-11-01', '2016-11-01', '2016-11-01'],
        }
      ],
      yAxis: [
        {
          type: 'value',
          axisLabel: {
            show: true,
            interval: 'auto',
            formatter: '{value}%'
          },
          axisLine: {
            lineStyle: {
              color: self.axisColors[0]
            }
          },
        }
      ],
      series: [
        {
          name: '本基金',
          type: 'line',
          symbol: 'emptyCircle', // [王工注], circle为实心小圆点, 不过强烈建议用空心小圆点, 更美观
          symbolSize: 7,
          data: [-2, -1, 2, -2, 5, 0],
          itemStyle: {
            normal: {
              lineStyle: {
                width: 3
              }
            }
          }
        },
      ]
    };

    self.compareChart.setOption(self.compareChartOption);
  },

  initSelfChangeTable: function () {
    var self = this;
    var myChart = echarts.init(document.getElementById('selfChangeTable'));

    var colors = ['#1A77F3'];

    function randomData() {
      now = new Date(+now + oneDay);
      value = value + Math.random() * 21 - 10;
      return {
        name: now.toString(),
        value: [
          [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
          Math.round(value)
        ]
      }
    }

    var data = [];
    var now = +new Date(2015, 24, 0);
    var oneDay = 24 * 3600 * 1000;
    var value = Math.random() * 1000;
    for (var i = 0; i < 1000; i++) {
      data.push(randomData());
    }

    var option = {
      color: colors,
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          animation: false
        }
      },
      xAxis: {
        type: 'time',
        splitLine: {
          show: false
        },
        axisLine: {
          lineStyle: {
            color: self.axisColors[0]
          }
        },
        axisLabel: {
          formatter: function (value) {
            var date = new Date(value);
            var month = date.getMonth() + 1;
            var date = date.getDate();
            var monthStr = month;
            var dateStr = date;
            if (month < 10) {
              var monthStr = '0' + month;
            }
            if (date < 10) {
              var dateStr = '0' + date;
            }
            return monthStr + '-' + dateStr;
          }
        }

      },
      yAxis: [{
        type: 'value',
        boundaryGap: [0, '100%'],
        splitLine: {
          show: false
        },
        axisLine: {
          show: false,
          lineStyle: {
            color: self.axisColors[0]
          }
        },
        axisLabel: {
          show: false
        },
        axisTick: {
          show: false
        }
      }],
      series: [{
        name: '模拟数据',
        type: 'line',
        showSymbol: false,
        hoverAnimation: false,
        data: data
      }]
    };
    myChart.setOption(option);
  },

  initHolderTable: function () {
    var self = this;
    var myChart = echarts.init(document.getElementById('holderTable'));

    var colors = ['#1A77F3', '#F8A81C', '#5AB627', '#FF5230'];

    var option = {
      color: colors,
      tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
          type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      legend: {
        left: 15,
        itemGap: 40,
        textStyle: {
          color: self.axisColors[0]
        },
        data: [
          {
            name: '员工份额占比',
            icon: 'pin',
          },
          {
            name: '机构份额占比',
            icon: 'pin',
          },
          {
            name: '个人份额占比',
            icon: 'pin',
          },
          {
            name: '持有人户数',
//          icon: 'circle',
          }]
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      grid: {
        left: 20,
        right: 20,
        bottom: 0,
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          data: ['2013年年报', '2014年年报', '2015年年报', '2016年年报', '2017年年报'],
          axisLine: {
            lineStyle: {
              color: self.axisColors[0]
            }
          },
        }
      ],
      yAxis: [
        {
          type: 'value',
          name: '     持有者比例(%)',
          position: 'left',
          axisLine: {
            lineStyle: {
              color: self.axisColors[0]
            }
          },
        },
        {
          type: 'value',
          name: '持有人户数(户)',
          position: 'right',
          axisLine: {
            lineStyle: {
              color: self.axisColors[0]
            }
          },
          axisLabel: {
            formatter: '{value}k'
          }
        },
      ],
      series: [
        {
          name: '员工份额占比',
          type: 'bar',
          barWidth: 24,
          data: [95, 70, 38, 64, 43]
        },
        {
          name: '机构份额占比',
          type: 'bar',
          barWidth: 24,
          data: [61, 38, 81, 81, 61]
        },
        {
          name: '个人份额占比',
          type: 'bar',
          barWidth: 24,
          data: [78, 52, 63, 33, 60]
        },
        {
          name: '持有人户数',
          type: 'line',
          symbol: 'emptyCircle', // [王工注], circle为实心小圆点, 不过强烈建议用空心小圆点, 更美观
          symbolSize: 7,
          yAxisIndex: 1,
          smooth: true,
          data: [250, 350, 200, 480, 430]
        },
      ]
    };

    myChart.setOption(option);
  },

  initBtnRec: function () {
    var self = this;
    $('#change-tab-2').on('click', '.btn-rec', function () {
      var jqthis = $(this);
      jqthis.parent().find('.btn-rec').removeClass('current');
      jqthis.addClass('current');
      var idx = parseInt(jqthis.data('idx'));
      for (var i = 0; i < self.compareChartOption.series.length; i++) {
        self.compareChartOption.series[i].data = self.mockData01[idx][i];
      }
      self.compareChart.setOption(self.compareChartOption);
    });
  },

};

detailPage.init();
