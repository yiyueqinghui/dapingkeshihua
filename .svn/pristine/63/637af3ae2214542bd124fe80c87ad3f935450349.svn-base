export default {
  bar: [
    {
      name: '基础柱状图',
      icon: 'icontubiao2',
      src: "../../../static/img/echartsIcon/1-bar.jpg",
      option: {
        backgroundColor:'red',
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
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
          splitLine: {
            lineStyle: {
              color: "#ffffff",
              opacity: 0.2
            }
          }
        },
        series: [{
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar',
          showBackground: true,
          backgroundStyle: {
            color: 'rgba(180, 180, 180, 0.2)'
          }
        }]
      }
    },
    {
      name: '堆叠柱状图',
      icon: 'icontubiao2',
      src: "../../../static/img/echartsIcon/jichu-bar.png",
      option: {
        "maxPointWidth": 30,
        "barColors": ["#00D6FF", "#CFF568"],
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
        "barRadius": 8,
        "grid": {
          "top": 20,
          "left": 20,
          "bottom": 20,
          "right": 20,
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
        "legend": {
          "data": ["直接访问", "邮件营销"],
          "show": false,
          "left": "center",
          "orient": "horizontal",
          "textStyle": {
            "fontSize": 12,
            "color": "#fff"
          }
        },
        "yAxis": [{
          "show": true,
          "type": "value",
          "data": null,
          "name": "",
          "nameTextStyle": {
            "fontSize": 20,
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
          "data": ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
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
          "name": "直接访问",
          "type": "bar",
          "stack": "总量",
          "label": {
            "normal": {
              "show": false,
              "position": "insideRight",
              "fontSize": 14,
              "fontWeight": "bold",
              "color": "#fff"
            }
          },
          "itemStyle": {
            "normal": {
              "color": "#00D6FF",
              "barBorderRadius": [0, 0, 8, 8]
            }
          },
          "data": [320, 302, 301, 334, 390, 330, 320]
        }, {
          "name": "邮件营销",
          "type": "bar",
          "stack": "总量",
          "label": {
            "normal": {
              "show": false,
              "position": "insideRight",
              "fontSize": 14,
              "fontWeight": "bold",
              "color": "#fff"
            }
          },
          "itemStyle": {
            "normal": {
              "color": "#CFF568",
              "barBorderRadius": [8, 8, 0, 0]
            }
          },
          "data": [120, 132, 101, 134, 90, 230, 210],
        }]
      }
    },
    {
      name: '条形图',
      icon: 'icontubiao2',
      src: "../../../static/img/echartsIcon/jichu-bar.png",
      option: {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          data: ['2011年'],
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
        xAxis: {
          type: 'value',
          boundaryGap: [0, 0.01],
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
          splitLine: {
            show:true,
            lineStyle: {
              color: "#ffffff",
              opacity: 0.5
            }
          }
        },
        yAxis: {
          type: 'category',
          data: ['巴西', '印尼', '美国', '印度', '中国', '世界(万)'],
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
        series: [{
          name: '2011年',
          type: 'bar',
          data: [18203, 23489, 29034, 104970, 131744, 630230]
        }]
      }
    },
    {
      name: '堆叠条形图',
      icon: 'icontubiao2',
      src: "../../../static/img/echartsIcon/jichu-bar.png",
      option: {
        tooltip: {
          trigger: 'axis',
          axisPointer: { // Use axis to trigger tooltip
            type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
          }
        },
        legend: {
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
        xAxis: {
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
          }
        },
        yAxis: {
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
        series: [{
            name: 'Direct',
            type: 'bar',
            stack: 'total',
            label: {
              show: true
            },
            emphasis: {
              focus: 'series'
            },
            data: [320, 302, 301, 334, 390, 330, 320]
          },
          {
            name: 'Mail Ad',
            type: 'bar',
            stack: 'total',
            label: {
              show: true
            },
            emphasis: {
              focus: 'series'
            },
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: 'Affiliate Ad',
            type: 'bar',
            stack: 'total',
            label: {
              show: true
            },
            emphasis: {
              focus: 'series'
            },
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: 'Video Ad',
            type: 'bar',
            stack: 'total',
            label: {
              show: true
            },
            emphasis: {
              focus: 'series'
            },
            data: [150, 212, 201, 154, 190, 330, 410]
          },
          {
            name: 'Search Engine',
            type: 'bar',
            stack: 'total',
            label: {
              show: true
            },
            emphasis: {
              focus: 'series'
            },
            data: [820, 832, 901, 934, 1290, 1330, 1320]
          }
        ]
      }
    },
  ],
}
