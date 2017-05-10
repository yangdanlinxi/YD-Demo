var detailPage = {

  axisColors: ['#8e9eab'],

  mockDate01: [],
  mockDate02: [],
  mockData01: [],
  mockData02: [],
  compareChart01: null,
  compareChartOption01: null,
  selfChangeChart01: null,
  selfChangeChartOption01: null,

  compareChart02: null,
  compareChartOption02: null,
  selfChangeChart02: null,
  selfChangeChartOption02: null,

  compareChart03: null,
  compareChartOption03: null,
  selfChangeChart03: null,
  selfChangeChartOption03: null,

  compareChart04: null,
  compareChartOption04: null,
  selfChangeChart04: null,
  selfChangeChartOption04: null,

  toolboxOption01: {
    right: 50,
    feature: {
      saveAsImage: {
        'title': '保存',
      }
    }
  },

  toolboxOption02: {
    right: 50,
    bottom: 324,
    feature: {
      saveAsImage: {
        'title': '保存',
      }
    }
  },

  gridOption01: {
    left: '20',
    right: '60',
    bottom: '0',
    containLabel: true
  },

  gridOption02: {
    top: '0',
    left: '30',
    right: '60',
    bottom: '0',
    containLabel: true
  },

  gridOption03: {
    top: '100',
    left: '20',
    right: '60',
    bottom: '0',
    containLabel: true
  },

  init: function () {
    var self = this;
    // fix window scroll
    $(window).unbind();
    control.goTop();

    self.initMockData();
    self.initSlider();
    self.initTabs();
    self.initBtnTabs();
    self.initCompareChart01();
    self.initCompareChart02();
    self.initCompareChart03();
    self.initCompareChart04();
    self.initSelfChangeChart01();
    self.initSelfChangeChart02();
    self.initSelfChangeChart03();
    self.initSelfChangeChart04();
    self.initHolderChart();
    self.initScaleChart();
    self.initBtnRec01();
    self.initBtnRec02();
    self.initBtnRec03();
    self.initBtnRec04();
  },

  initMockData: function () {
    var self = this;
    var tabNum = 7;
    var step = 500;
    var base = +new Date(2015, 9, 3);
    var oneDay = 24 * 3600 * 1000;

    for (var j = 0; j < tabNum; j++) {
      self.mockDate01.push([]);
      self.mockDate02.push([]);
      self.mockData01.push([[Math.random()], [Math.random()], [Math.random()]]);
      self.mockData02.push([[Math.random()], [Math.random()], [Math.random()]]);
    }

    for (var i = 0; i < step; i++) {
      var now = new Date(base += oneDay);
      var dateStr = [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('-');
      for (var j = 0; j < tabNum; j++) {
        self.mockDate01[j].push(dateStr);
        self.mockDate02[j].push(dateStr);
      }
    }

    for (var i = 0; i < step; i++) {
      for (var j = 0; j < tabNum; j++) {
        self.mockData01[j][0].push(Math.round(((Math.random() - 0.5) * 4 + self.mockData01[j][0][i]) * 100) / 100);
        self.mockData01[j][1].push(Math.round(((Math.random() - 0.5) * 4 + self.mockData01[j][1][i]) * 100) / 100);
        self.mockData01[j][2].push(Math.round(((Math.random() - 0.5) * 4 + self.mockData01[j][2][i]) * 100) / 100);
        self.mockData02[j][0].push(Math.round(((Math.random() - 0.5) * 4 + self.mockData02[j][0][i]) * 10000) / 10000);
        self.mockData02[j][1].push(Math.round(((Math.random() - 0.5) * 4 + self.mockData02[j][1][i]) * 10000) / 10000);
        self.mockData02[j][2].push(Math.round(((Math.random() - 0.5) * 4 + self.mockData02[j][2][i]) * 10000) / 10000);
      }
    }
  },

  initSlider: function () {
    // var width = parseInt($('.ul-normal').css('width')) - 182 + 'px';
    // $('.ul-alt').css('width', '');
    $('#change-main').on('mouseenter', function () {
      $('.alt-wrapper').css({
        width: '80%',
        transition: 'width .1s'
      });
    });
    $('#change-main').on('mouseleave', function () {
      $('.alt-wrapper').css({
        width: '0',
        transition: 'width .1s'
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
      $("#" + tab_id).addClass('current').trigger('tabShow');
    });
  },

  initBtnTabs: function () {
    $('.btn-tabs a.btn-tab').click(function () {
      var jqthis = $(this);
      var tab_id = jqthis.attr('data-tab');
      var parent = jqthis.parents('.btn-tabs').parent();
      parent.find('.btn-tabs a.btn-tab').removeClass('current');
      parent.find('.btn-tab-content').removeClass('current');
      $(this).addClass('current');
      $("#" + tab_id).addClass('current').trigger('tabShow');
    });
  },

  // initCompareTable: function () {
  //   var self = this;
  //   self.compareChart = echarts.init(document.getElementById('compareTable'));
  //
  //   var colors = ['#376BEF', '#A71DF2', '#FFBB44'];
  //
  //   self.compareChartOption = {
  //     color: colors,
  //     tooltip: {
  //       trigger: 'axis'
  //     },
  //     legend: {
  //       left: 15,
  //       itemGap: 40,
  //       textStyle: {
  //         color: self.axisColors[0]
  //       },
  //       data: ['本基金', '基准(沪深300)', '其他基金'],
  //     },
  //     toolbox: {
  //       right: 50,
  //       feature: {
  //         saveAsImage: {
  //           'title': '保存',
  //         }
  //       }
  //     },
  //     grid: {
  //       left: '20',
  //       right: '60',
  //       bottom: 0,
  //       containLabel: true
  //     },
  //     xAxis: [
  //       {
  //         type: 'category',
  //         boundaryGap: false,
  //         axisLine: {
  //           lineStyle: {
  //             color: self.axisColors[0]
  //           }
  //         },
  //         data: ['2016-11-01', '2016-11-01', '2016-11-01', '2016-11-01', '2016-11-01', '2016-11-01'],
  //       }
  //     ],
  //     yAxis: [
  //       {
  //         type: 'value',
  //         axisLabel: {
  //           show: true,
  //           interval: 'auto',
  //           formatter: '{value}%'
  //         },
  //         axisLine: {
  //           lineStyle: {
  //             color: self.axisColors[0]
  //           }
  //         },
  //       }
  //     ],
  //     series: [
  //       {
  //         name: '本基金',
  //         type: 'line',
  //         symbol: 'emptyCircle', // [王工注], circle为实心小圆点, 不过强烈建议用空心小圆点, 更美观
  //         symbolSize: 7,
  //         data: self.mockData01[5][0],
  //         itemStyle: {
  //           normal: {
  //             lineStyle: {
  //               width: 3
  //             }
  //           }
  //         }
  //       },
  //       {
  //         name: '基准(沪深300)',
  //         type: 'line',
  //         symbol: 'emptyCircle', // [王工注], circle为实心小圆点, 不过强烈建议用空心小圆点, 更美观
  //         symbolSize: 7,
  //         data: self.mockData01[5][1],
  //         itemStyle: {
  //           normal: {
  //             lineStyle: {
  //               width: 3
  //             }
  //           }
  //         }
  //       },
  //       {
  //         name: '其他基金',
  //         type: 'line',
  //         symbol: 'emptyCircle', // [王工注], circle为实心小圆点, 不过强烈建议用空心小圆点, 更美观
  //         symbolSize: 7,
  //         data: self.mockData01[5][2],
  //         itemStyle: {
  //           normal: {
  //             lineStyle: {
  //               width: 3
  //             }
  //           }
  //         }
  //       }
  //     ]
  //   };
  //
  //   self.compareChart.setOption(self.compareChartOption);
  // },

  initCompareChart01: function () {
    var self = this;
    
    if(!document.getElementById('compareChart01')) {
      return;
    }

    self.compareChart01 = echarts.init(document.getElementById('compareChart01'));
    $('#change-tab-1').on('tabShow', function () {
      self.compareChart01.resize();
    });

    var colors = ['#376BEF', '#A71DF2', '#FFBB44'];

    self.compareChartOption01 = {
      color: colors,
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        left: 15,
        itemGap: 40,
        textStyle: {
          color: self.axisColors[0]
        },
        data: ['本基金', '基准(沪深300)', '其他基金'],
      },
      toolbox: self.toolboxOption01,
      grid: self.gridOption01,
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          axisLine: {
            lineStyle: {
              color: self.axisColors[0]
            }
          },
          data: self.mockDate01[5],
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
          symbol: 'none',
          sampling: 'average',
          // smooth: true,
          data: self.mockData01[5][0],
          itemStyle: {
            normal: {
              lineStyle: {
                width: 2
              }
            }
          }
        },
        {
          name: '基准(沪深300)',
          type: 'line',
          symbol: 'none',
          sampling: 'average',
          data: self.mockData01[5][1],
          itemStyle: {
            normal: {
              lineStyle: {
                width: 2
              }
            }
          }
        },
        {
          name: '其他基金',
          type: 'line',
          symbol: 'none',
          sampling: 'average',
          data: self.mockData01[5][2],
          itemStyle: {
            normal: {
              lineStyle: {
                width: 2
              }
            }
          }
        }
      ]
    };

    self.compareChart01.setOption(self.compareChartOption01);
  },

  initCompareChart02: function () {
    var self = this;

    if(!document.getElementById('compareChart02')) {
      return;
    }

    self.compareChart02 = echarts.init(document.getElementById('compareChart02'));
    $('#change-tab-2').on('tabShow', function () {
      self.compareChart02.resize();
    });

    var colors = ['#376BEF', '#A71DF2', '#FFBB44'];

    self.compareChartOption02 = {
      color: colors,
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        left: 15,
        itemGap: 40,
        textStyle: {
          color: self.axisColors[0]
        },
        data: ['本基金', '基准(沪深300)', '其他基金'],
      },
      toolbox: self.toolboxOption01,
      grid: self.gridOption01,
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          axisLine: {
            lineStyle: {
              color: self.axisColors[0]
            }
          },
          data: self.mockDate02[5]
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
          symbol: 'none',
          sampling: 'average',
          data: self.mockData02[5][0],
          itemStyle: {
            normal: {
              lineStyle: {
                width: 2
              }
            }
          }
        },
        {
          name: '基准(沪深300)',
          type: 'line',
          symbol: 'none',
          sampling: 'average',
          data: self.mockData02[5][1],
          itemStyle: {
            normal: {
              lineStyle: {
                width: 2
              }
            }
          }
        },
        {
          name: '其他基金',
          type: 'line',
          symbol: 'none',
          sampling: 'average',
          data: self.mockData02[5][2],
          itemStyle: {
            normal: {
              lineStyle: {
                width: 2
              }
            }
          }
        }
      ]
    };

    self.compareChart02.setOption(self.compareChartOption02);
  },

  initCompareChart03: function () {
    var self = this;

    if(!document.getElementById('compareChart03')) {
      return;
    }

    self.compareChart03 = echarts.init(document.getElementById('compareChart03'));
    $('#change-tab-1').on('tabShow', function () {
      self.compareChart03.resize();
    });

    var colors = ['#A71DF2'];

    self.compareChartOption03 = {
      color: colors,
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        left: 15,
        itemGap: 40,
        textStyle: {
          color: self.axisColors[0]
        },
        data: ['万份收益'],
      },
      toolbox: self.toolboxOption01,
      grid: self.gridOption01,
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          axisLine: {
            lineStyle: {
              color: self.axisColors[0]
            }
          },
          data: self.mockDate01[5]
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
          name: '万份收益',
          type: 'line',
          symbol: 'none',
          sampling: 'average',
          data: self.mockData01[5][0],
          itemStyle: {
            normal: {
              lineStyle: {
                width: 2
              }
            }
          }
        }
      ]
    };

    self.compareChart03.setOption(self.compareChartOption03);
  },

  initCompareChart04: function () {
    var self = this;

    if(!document.getElementById('compareChart04')) {
      return;
    }

    self.compareChart04 = echarts.init(document.getElementById('compareChart04'));
    $('#change-tab-2').on('tabShow', function () {
      self.compareChart04.resize();
    });

    var colors = ['#376BEF', '#A71DF2', '#FFBB44'];

    self.compareChartOption04 = {
      color: colors,
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        left: 15,
        itemGap: 40,
        textStyle: {
          color: self.axisColors[0]
        },
        data: ['7日年化'],
      },
      toolbox: self.toolboxOption01,
      grid: self.gridOption01,
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          axisLine: {
            lineStyle: {
              color: self.axisColors[0]
            }
          },
          data: self.mockDate02[5]
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
          name: '7日年化',
          type: 'line',
          symbol: 'none',
          sampling: 'average',
          data: self.mockData02[5][0],
          itemStyle: {
            normal: {
              lineStyle: {
                width: 2
              }
            }
          }
        }
      ]
    };

    self.compareChart04.setOption(self.compareChartOption04);
  },

  initSelfChangeChart01: function () {
    var self = this;

    if(!document.getElementById('selfChangeChart01')) {
      return;
    }

    self.selfChangeChart01 = echarts.init(document.getElementById('selfChangeChart01'));

    var colors = ['#1A77F3'];

    self.selfChangeChartOption01 = {
      color: colors,
      grid: self.gridOption02,
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          animation: false
        }
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          splitLine: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: self.axisColors[0]
            }
          },
          data: self.mockDate01[5],
        }
      ],
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
        name: '本基金',
        type: 'line',
        symbol: 'none',
        sampling: 'average',
        showSymbol: false,
        hoverAnimation: false,
        // smooth: true,
        data: self.mockData01[5][0],
        itemStyle: {
          normal: {
            lineStyle: {
              width: 2
            }
          }
        }
      }]
    };
    self.selfChangeChart01.setOption(self.selfChangeChartOption01);
  },

  initSelfChangeChart02: function () {
    var self = this;

    if(!document.getElementById('selfChangeChart02')) {
      return;
    }

    self.selfChangeChart02 = echarts.init(document.getElementById('selfChangeChart02'));

    var colors = ['#1A77F3'];

    self.selfChangeChartOption02 = {
      color: colors,
      grid: self.gridOption02,
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          animation: false
        }
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          splitLine: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: self.axisColors[0]
            }
          },
          data: self.mockDate02[5],
        }
      ],
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
        name: '本基金',
        type: 'line',
        symbol: 'none',
        sampling: 'average',
        showSymbol: false,
        hoverAnimation: false,
        // smooth: true,
        data: self.mockData02[5][0],
        itemStyle: {
          normal: {
            lineStyle: {
              width: 2
            }
          }
        }
      }]
    };
    self.selfChangeChart02.setOption(self.selfChangeChartOption02);
  },

  initSelfChangeChart03: function () {
    var self = this;

    if(!document.getElementById('selfChangeChart03')) {
      return;
    }

    self.selfChangeChart03 = echarts.init(document.getElementById('selfChangeChart03'));

    var colors = ['#A71DF2'];

    self.selfChangeChartOption03 = {
      color: colors,
      grid: self.gridOption02,
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          animation: false
        }
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          splitLine: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: self.axisColors[0]
            }
          },
          data: self.mockDate01[5],
        }
      ],
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
        name: '万份收益',
        type: 'line',
        symbol: 'none',
        sampling: 'average',
        showSymbol: false,
        hoverAnimation: false,
        // smooth: true,
        data: self.mockData01[5][0],
        itemStyle: {
          normal: {
            lineStyle: {
              width: 2
            }
          }
        }
      }]
    };
    self.selfChangeChart03.setOption(self.selfChangeChartOption03);
  },

  initSelfChangeChart04: function () {
    var self = this;

    if(!document.getElementById('selfChangeChart04')) {
      return;
    }

    self.selfChangeChart04 = echarts.init(document.getElementById('selfChangeChart04'));

    var colors = ['#1A77F3'];

    self.selfChangeChartOption04 = {
      color: colors,
      grid: self.gridOption02,
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          animation: false
        }
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          splitLine: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: self.axisColors[0]
            }
          },
          data: self.mockDate02[5],
        }
      ],
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
        name: '7日年化',
        type: 'line',
        symbol: 'none',
        sampling: 'average',
        showSymbol: false,
        hoverAnimation: false,
        // smooth: true,
        data: self.mockData02[5][0],
        itemStyle: {
          normal: {
            lineStyle: {
              width: 2
            }
          }
        }
      }]
    };
    self.selfChangeChart04.setOption(self.selfChangeChartOption04);
  },

  initHolderChart: function () {
    var self = this;

    if(!document.getElementById('holderChart')) {
      return;
    }

    var myChart = echarts.init(document.getElementById('holderChart'));

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
        bottom: 324,
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
      toolbox: self.toolboxOption02,
      grid: self.gridOption03,
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
        }
      ]
    };

    myChart.setOption(option);
  },

  initScaleChart: function () {
    var self = this;

    if(!document.getElementById('scaleChart')) {
      return;
    }

    var myChart = echarts.init(document.getElementById('scaleChart'));
    $('#portfolio-tab-5').on('tabShow', function () {
      myChart.resize();
    });

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
        bottom: 324,
        itemGap: 40,
        textStyle: {
          color: self.axisColors[0]
        },
        data: [
          {
            name: '期间申购(份)',
            icon: 'pin',
          },
          {
            name: '期间赎回(份)',
            icon: 'pin',
          },
          {
            name: '期末总份额(份)',
            icon: 'pin',
          },
          {
            name: '期末净资产(元)',
//          icon: 'circle',
          }]
      },
      toolbox: self.toolboxOption02,
      grid: self.gridOption03,
      xAxis: [
        {
          type: 'category',
          data: ['2015年三季报', '2015年年报', '2016年一季报', '2016年中报', '2016年三季报'],
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
          name: '份额',
          position: 'left',
          axisLine: {
            lineStyle: {
              color: self.axisColors[0]
            }
          },
          axisLabel: {
            formatter: '{value}G'
          }
        },
        {
          type: 'value',
          name: '资产',
          position: 'right',
          axisLine: {
            lineStyle: {
              color: self.axisColors[0]
            }
          },
          axisLabel: {
            formatter: '{value}M'
          }
        },
      ],
      series: [
        {
          name: '期间申购(份)',
          type: 'bar',
          barWidth: 24,
          data: [1, 3, 2, 6, 6]
        },
        {
          name: '期间赎回(份)',
          type: 'bar',
          barWidth: 24,
          data: [5, 2, 3, 1, 2]
        },
        {
          name: '期末总份额(份)',
          type: 'bar',
          barWidth: 24,
          data: [3, 5, 4, 4, 3]
        },
        {
          name: '期末净资产(元)',
          type: 'line',
          symbol: 'emptyCircle', // [王工注], circle为实心小圆点, 不过强烈建议用空心小圆点, 更美观
          symbolSize: 6,
          yAxisIndex: 1,
          smooth: true,
          data: [1200, 3000, 4500, 3400, 5500]
        }
      ]
    };

    myChart.setOption(option);
  },

  initBtnRec01: function () {
    var self = this;

    if(!document.getElementById('compareChart01')) {
      return;
    }

    $('#change-tab-1').on('click', '.btn-rec', function () {
      var jqthis = $(this);
      jqthis.parent().find('.btn-rec').removeClass('current');
      jqthis.addClass('current');
      var idx = parseInt(jqthis.data('idx'));
      for (var i = 0; i < self.compareChartOption01.series.length; i++) {
        self.compareChartOption01.series[i].data = self.mockData01[idx][i];
      }
      self.selfChangeChartOption01.series[0].data = self.mockData01[idx][0];
      self.compareChart01.setOption(self.compareChartOption01);
      self.selfChangeChart01.setOption(self.selfChangeChartOption01);
    });
  },

  initBtnRec02: function () {
    var self = this;

    if(!document.getElementById('compareChart02')) {
      return;
    }

    $('#change-tab-2').on('click', '.btn-rec', function () {
      var jqthis = $(this);
      jqthis.parent().find('.btn-rec').removeClass('current');
      jqthis.addClass('current');
      var idx = parseInt(jqthis.data('idx'));
      for (var i = 0; i < self.compareChartOption02.series.length; i++) {
        self.compareChartOption02.series[i].data = self.mockData02[idx][i];
      }
      self.selfChangeChartOption02.series[0].data = self.mockData02[idx][0];
      self.compareChart02.setOption(self.compareChartOption02);
      self.selfChangeChart02.setOption(self.selfChangeChartOption02);
    });
  },

  initBtnRec03: function () {
    var self = this;

    if(!document.getElementById('compareChart03')) {
      return;
    }

    $('#change-tab-1').on('click', '.btn-rec', function () {
      var jqthis = $(this);
      jqthis.parent().find('.btn-rec').removeClass('current');
      jqthis.addClass('current');
      var idx = parseInt(jqthis.data('idx'));
      for (var i = 0; i < self.compareChartOption03.series.length; i++) {
        self.compareChartOption03.series[i].data = self.mockData01[idx][i];
      }
      self.selfChangeChartOption03.series[0].data = self.mockData01[idx][0];
      self.compareChart03.setOption(self.compareChartOption03);
      self.selfChangeChart03.setOption(self.selfChangeChartOption03);
    });
  },

  initBtnRec04: function () {
    var self = this;

    if(!document.getElementById('compareChart04')) {
      return;
    }

    $('#change-tab-2').on('click', '.btn-rec', function () {
      var jqthis = $(this);
      jqthis.parent().find('.btn-rec').removeClass('current');
      jqthis.addClass('current');
      var idx = parseInt(jqthis.data('idx'));
      for (var i = 0; i < self.compareChartOption04.series.length; i++) {
        self.compareChartOption04.series[i].data = self.mockData02[idx][i];
      }
      self.selfChangeChartOption04.series[0].data = self.mockData02[idx][0];
      self.compareChart04.setOption(self.compareChartOption04);
      self.selfChangeChart04.setOption(self.selfChangeChartOption04);
    });
  }

};

detailPage.init();
