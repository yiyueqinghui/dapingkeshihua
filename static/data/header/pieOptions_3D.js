export default {
  pie:[
    {
      name:'基础饼状图',
      icon:'iconline-piechartbingtu-01',
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
          "type": "pie",
          "backgroundColor": "rgba(75,90,107,0)",
          "options3d": {
            "enabled": true,
            "alpha": 45
          }
        },
        "credits": {
          "enabled": false
        },
        "plotOptions": {
          "pie": {
            "innerSize": 100,
            "depth": 45,
            "showInLegend": true
          },
          "series": {
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
        }],
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
        "colors": ["rgb(0,214,255)", "rgb(86,221,108)", "rgb(234,125,89)", "rgb(144,38,72)", "rgb(53,38,144)", "rgb(228,211,84)", "rgb(128,133,232)", "rgb(141,70,83)", "rgb(145,232,225)"]

      }
    },
  ]
}
