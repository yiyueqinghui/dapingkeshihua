import * as echarts from "echarts";
export default {
  line: [
    {
      name: '基础折线图',
      icon: 'iconline',
      src: "../../../static/img/echartsIcon/jichu-bar.png",
      option: {
        backgroundColor:'#000000',
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          nameTextStyle: {
            "fontSize": 15,
            "color": "#ffffff"
          },
          axisLabel: {
            "textStyle": {
              "color": "#ffffff",
              "fontSize": 15
            },
          }
        },
        yAxis: {
          type: 'value',
          nameTextStyle: {
            "fontSize": 15,
            "color": "#ffffff"
          },
          axisLabel: {
            "textStyle": {
              "color": "#ffffff",
              "fontSize": 15
            },
          },
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        series: [{
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line',
          smooth: false
        }]
      }
    },
    {
      name: '基础面积图',
      icon: 'iconline',
      src: "../../../static/img/echartsIcon/jichu-bar.png",
      option: {
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          nameTextStyle: {
            "fontSize": 15,
            "color": "#ffffff"
          },
          axisLabel: {
            "textStyle": {
              "color": "#ffffff",
              "fontSize": 15
            },
          },
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        yAxis: {
          type: 'value',
          nameTextStyle: {
            "fontSize": 15,
            "color": "#ffffff"
          },
          axisLabel: {
            "textStyle": {
              "color": "#ffffff",
              "fontSize": 15
            },
          },
        },
        series: [{
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line',
          areaStyle: {},
          smooth: true
        }]
      }
    },
    {
      name: '堆叠面积图',
      icon: 'iconline',
      src: "../../../static/img/echartsIcon/jichu-bar.png",
      option: {
        color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        legend: {
          show: true,
          textStyle: {
            color: '#ffffff'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          boundaryGap: false,
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
          nameTextStyle: {
            "fontSize": 15,
            "color": "#ffffff"
          },
          axisLabel: {
            "textStyle": {
              "color": "#ffffff",
              "fontSize": 15
            },
          },
        }],
        yAxis: [{
          type: 'value',
          nameTextStyle: {
            "fontSize": 15,
            "color": "#ffffff"
          },
          axisLabel: {
            "textStyle": {
              "color": "#ffffff",
              "fontSize": 15
            },
          },
        }],
        series: [{
            name: 'Line 1',
            type: 'line',
            stack: '总量',
            smooth: true,
            lineStyle: {
              width: 0
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(128, 255, 165)'
              }, {
                offset: 1,
                color: 'rgba(1, 191, 236)'
              }])
            },
            emphasis: {
              focus: 'series'
            },
            data: [140, 232, 101, 264, 90, 340, 250]
          },
          {
            name: 'Line 2',
            type: 'line',
            stack: '总量',
            smooth: true,
            lineStyle: {
              width: 0
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(0, 221, 255)'
              }, {
                offset: 1,
                color: 'rgba(77, 119, 255)'
              }])
            },
            emphasis: {
              focus: 'series'
            },
            data: [120, 282, 111, 234, 220, 340, 310]
          },

        ]
      }
    },
    {
      name: '折线柱状图',
      icon: 'iconline',
      src: "../../../static/img/echartsIcon/jichu-bar.png",
      option: {
        "showLinkDialog": false,
        "btnFontSize": 30,
        "btnColor": "#fff",
        "btnBackground": "",
        "btnX": 0,
        "btnY": 0,
        "linkTarget": "dialog",
        "linkHref": "https://www.baidu.com/",
        "forceShowDialog": false,
        "titleHeight": 54,
        "titleColor": "#fff",
        "titleFontSize": 14,
        "dialogBackground": "#1b1e25",
        "iframeTitle": "标题",
        "iframeWidth": 500,
        "iframeHeight": 200,
        "iframeX": 0,
        "iframeY": 0,
        "areaStyle": false,
        "barRadius": 50,
        "lineWidth": 2,
        "lineStyleType": "solid",
        "symbolSize": 12,
        "isShowYY": true,
        "formatterShow": false,
        "formatterText": "{b}：{c}",
        "barColor": [{
          "color1": "#00D6FF",
          "color2": "#7EFFAA",
          "postion": 90,
          "$index": 0,
          "_show": true
        }, {
          "color1": "#00D6FF",
          "color2": "#7EFFAA",
          "postion": 50,
          "$index": 1,
          "_show": true
        }],
        "nameColor": "",
        "lineColor": "",
        "seriesTypes": ["line", "bar"],
        "showDirection": true,
        "title": {
          "show": false,
          "text": "",
          "textStyle": {
            "color": "#ffffff",
            "fontSize": 18
          },
          "top": "top",
          "x": "center",
          "subtext": "",
          "subtextStyle": {
            "color": "#ffffff",
            "fontSize": 15
          }
        },
        "grid": {
          "top": 10,
          "left": 10,
          "bottom": 10,
          "right": 10,
          "containLabel": true
        },
        "tooltip": {
          "show": true,
          "textStyle": {
            "color": "#000000",
            "fontSize": 5,
            "fontWeight": "normal"
          },
          "trigger": "axis",
          "axisPointer": {
            "type": "shadow"
          }
        },
        "formatter": "",
        "legend": {
          "show": true,
          "left": "center",
          "orient": "horizontal",
          "textStyle": {
            "fontSize": 12,
            "color": "#fff"
          }
        },
        "yAxis": [
          {
          "show": true,
          "type": "value",
          "data": null,
          "name": "",
          "nameTextStyle": {
            "fontSize": 12,
            "color": "#ffffff"
          },
          "axisLine": {
            "show": true,
            "lineStyle": {
              "color": "#ffffff"
            }
          },
          "inverse": false,
          "axisLabel": {
            "textStyle": {
              "color": "#ffffff",
              "fontSize": 20
            }
          },
          "splitLine": {
            "show": false,
            "lineStyle": {
              "color": "#ffffff"
            }
          },
          "axisTick": {
            "show": false
          }
        }, {
          "show": true,
          "type": "value",
          "data": null,
          "name": "",
          "nameTextStyle": {
            "fontSize": 12,
            "color": "#ffffff"
          },
          "axisLine": {
            "show": true,
            "lineStyle": {
              "color": "#ffffff"
            }
          },
          "inverse": false,
          "axisLabel": {
            "textStyle": {
              "color": "#ffffff",
              "fontSize": 20
            }
          },
          "splitLine": {
            "show": false,
            "lineStyle": {
              "color": "#ffffff"
            }
          },
          "axisTick": {
            "show": false
          }
        }],
        "xAxis": [{
          "type": "category",
          "data": ["1km", "2km", "3km", "4km", "5km", "6km", "7km"],
          "name": "",
          "show": true,
          "axisLine": {
            "show": true,
            "lineStyle": {
              "color": "#ffffff"
            }
          },
          "inverse": false,
          "nameTextStyle": {
            "fontSize": 12,
            "color": "#ffffff"
          },
          "axisLabel": {
            "rotate": 0,
            "textStyle": {
              "color": "#ffffff",
              "fontSize": 20
            },
            "margin": 20
          },
          "splitLine": {
            "show": false,
            "lineStyle": {
              "color": "#ffffff"
            }
          },
          "axisTick": {
            "show": false
          }
        }],
        "series": [{
          "name": "供温",
          "type": "line",
          "smooth": true,
          "showSymbol": true,
          "symbol": "circle",
          "symbolSize": 12,
          "yAxisIndex": 0,
          "lineStyle": {
            "normal": {
              "color": {
                "x": 0,
                "y": 0,
                "x2": 0,
                "y2": 1,
                "type": "linear",
                "global": false,
                "colorStops": [{
                  "offset": 0,
                  "color": "#00D6FF"
                }, {
                  "offset": 1,
                  "color": "#7EFFAA"
                }]
              }
            }
          },
          "itemStyle": {
            "normal": {
              "color": "#dddddd"
            }
          },
          "data": [1, 2, 3, 4, 9, 3, 2]
        }, {
          "name": "压力值",
          "type": "bar",
          "barWidth": 30,
          "yAxisIndex": 1,
          "label": {
            "normal": {
              "show": true,
              "position": "insideRight",
              "fontSize": 14,
              "fontWeight": "bold",
              "color": "#fff"
            }
          },
          "itemStyle": {
            "normal": {
              "color": {
                "x": 0,
                "y": 0,
                "x2": 0,
                "y2": 1,
                "type": "linear",
                "global": false,
                "colorStops": [{
                  "offset": 0,
                  "color": "#00D6FF"
                }, {
                  "offset": 1,
                  "color": "#7EFFAA"
                }]
              },
              "barBorderRadius": [50, 50, 0, 0]
            }
          },
          "data": [6, 3, 5, 4, 9, 3, 2]
        }]
      }
    },
  ],
}
