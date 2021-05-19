export default {
  bar:[
      {
        name:'基础柱状图',
        icon:'icontubiao2',
        src:"../../../static/img/echartsIcon/jichu-bar.png",
        data: {
          "series": [{
            "name": "20-35岁用户职业",
            "data": [
              ["程序员", 10],
              ["律师", 3],
              ["快递员", 12],
              ["管理", 7],
              ["滴滴司机", 5],
              ["直播从业者", 15],
              ["产品经理", 3],
              ["小领导", 4],
              ["手工艺人", 1]
            ]
          }]
        },
        option:{
          "fontSize": 20,
          "chart": {
            "type": "column",
            "backgroundColor": "rgba(0,0,0,0)",
            "margin": 75,
            "options3d": {
              "enabled": true,
              "alpha": 10,
              "beta": 25,
              "depth": 70,
              "viewDistance": 100,
              "frame": {
                "bottom": {
                  "size": 10
                },
                "side": {
                  "size": 1,
                  "color": "transparent"
                },
                "back": {
                  "size": 1,
                  "color": "transparent"
                }
              }
            }
          },
          "credits": {
            "enabled": false
          },
          "plotOptions": {
            "column": {
              "depth": 25
            },
            "series": {
              "maxPointWidth": 10,
              "minPointLength": 0,
              "dataLabels": {
                "enabled": true,
                "style": {
                  "color": "#ffffff",
                  "fontSize": 20,
                  "fontWeight": "normal"
                }
              }
            }
          },
          "series": [{
            "name": "销售",
            "data": [2, 3, 0, 4, 0, 5, 1, 4, 6, 3],
            "color": {
              "fillOpacity": 0.05,
              "linearGradient": {
                "x1": 0,
                "y1": 0,
                "x2": 0,
                "y2": 1
              },
              "stops": [
                [0, "rgb(0,214,255)"],
                [1, "rgb(126,255,170)"]
              ]
            }
          }],
          "xAxis": {
            "categories": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            "title": {
              "text": "",
              "tempText": "",
              "style": {
                "color": "#ffffff",
                "fontSize": 20
              }
            },
            "lineColor": "#ffffff",
            "lineWidth": 1,
            "gridLineWidth": 0,
            "gridLineColor": "#ffffff",
            "reversed": false,
            "labels": {
              "style": {
                "color": "#ffffff",
                "fontSize": 20
              }
            }
          },
          "yAxis": {
            "title": {
              "text": "",
              "tempText": "",
              "style": {
                "color": "#ffffff",
                "fontSize": 20
              }
            },
            "lineColor": "#ffffff",
            "lineWidth": 1,
            "gridLineWidth": 0,
            "reversed": false,
            "labels": {
              "style": {
                "color": "#ffffff",
                "fontSize": 20
              }
            }
          },
          "title": {
            "text": "",
            "tempText": "",
            "style": {
              "color": "#ffffff",
              "fontSize": 20
            }
          },
          "subtitle": {
            "text": "",
            "tempText": "",
            "style": {
              "color": "",
              "fontSize": 20
            }
          },
          "tooltip": {
            "enabled": true,
            "backgroundColor": "rgba(247,247,247,0.85)",
            "style": {
              "color": "#ffffff",
              "fontSize": 20,
              "fontWeight": "normal"
            }
          },
          "legend": {
            "enabled": true,
            "align": "center",
            "verticalAlign": "center",
            "layout": "horizontal",
            "itemStyle": {
              "color": "#ffffff",
              "fontSize": 20
            },
            "x": 0,
            "y": 20
          },
          "categories": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        }
      },
    {
      name:'基础圆柱图',
      icon:'icontubiao2',
      src:"../../../static/img/echartsIcon/jichu-bar.png",
      data: {
        "series": [{
          "data": [29.9, 71.5, 106.4, 129.2, 144, 176, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
          "name": "Cylinders",
          "color": {
            "fillOpacity": 0.05,
            "linearGradient": {
              "x1": 0,
              "y1": 0,
              "x2": 0,
              "y2": 1
            },
            "stops": [
              [0, "rgb(0,214,255)"],
              [1, "rgb(126,255,170)"]
            ]
          }
        }]
      },
      option:{
        "xAxis": {
          "title": {
            "text": "",
            "tempText": "",
            "style": {
              "color": "#ffffff",
              "fontSize": 20
            }
          },
          "lineColor": "#ffffff",
          "lineWidth": 1,
          "gridLineWidth": 0,
          "gridLineColor": "#ffffff",
          "reversed": false,
          "labels": {
            "style": {
              "color": "#ffffff",
              "fontSize": 20
            }
          }
        },
        "yAxis": {
          "title": {
            "text": "",
            "tempText": "",
            "style": {
              "color": "#ffffff",
              "fontSize": 20
            }
          },
          "lineColor": "#ffffff",
          "lineWidth": 1,
          "gridLineWidth": 0,
          "reversed": false,
          "labels": {
            "style": {
              "color": "#ffffff",
              "fontSize": 20
            }
          }
        },
        "tooltip": {
          "enabled": true,
          "backgroundColor": "rgba(247,247,247,0.85)",
          "style": {
            "color": "#ffffff",
            "fontSize": 20,
            "fontWeight": "normal"
          }
        },
        "legend": {
          "enabled": true,
          "align": "center",
          "verticalAlign": "center",
          "layout": "horizontal",
          "itemStyle": {
            "color": "#ffffff",
            "fontSize": 20
          },
          "x": 0,
          "y": 20
        },
        "title": {
          "text": "",
          "tempText": "",
          "style": {
            "color": "#ffffff",
            "fontSize": 20
          }
        },
        "subtitle": {
          "text": "",
          "tempText": "",
          "style": {
            "color": "",
            "fontSize": 20
          }
        },
        "fontSize": 20,
        "chart": {
          "type": "cylinder",
          "backgroundColor": "rgba(0,0,0,0)",
          "options3d": {
            "enabled": true,
            "alpha": 15,
            "beta": 15,
            "depth": 50,
            "viewDistance": 25
          },
          "marginBottom": 40,
          "marginTop": 40,
          "marginRight": 40,
          "marginLeft": 50,
          "inverted": false
        },
        "credits": {
          "enabled": false
        },
        "plotOptions": {
          "series": {
            "depth": 25,
            "maxPointWidth": 10,
            "minPointLength": 0,
            "dataLabels": {
              "enabled": true,
              "style": {
                "color": "#ffffff",
                "fontSize": 20,
                "fontWeight": "normal"
              }
            }
          }
        },
        "series": [{
          "data": [29.9, 71.5, 106.4, 129.2, 144, 176, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
          "name": "Cylinders",
          "color": {
            "fillOpacity": 0.05,
            "linearGradient": {
              "x1": 0,
              "y1": 0,
              "x2": 0,
              "y2": 1
            },
            "stops": [
              [0, "rgb(0,214,255)"],
              [1, "rgb(126,255,170)"]
            ]
          }
        }]
      }
    },
  ]
}
