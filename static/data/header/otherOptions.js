export default {
  other:[
    {
      name:'漏斗图',
      icon:'iconloudoutu',
      src:"../../../static/img/echartsIcon/jichu-bar.png",
      option:{
        title: {
          text: '',
          subtext: ''
        },
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c}%"
        },
        legend: {
          show:true,
          textStyle:{
              color:'#ffffff'
          }
        },

        series: [
          {
            name:'漏斗图',
            type:'funnel',
            min: 0,
            max: 100,
            minSize: '0%',
            maxSize: '100%',
            sort: 'descending',
            gap: 2,
            label: {
              show: true,
              position: 'inside'
            },
            labelLine: {
              length: 10,
              lineStyle: {
                width: 1,
                type: 'solid'
              }
            },
            itemStyle: {
              borderColor: '#fff',
              borderWidth: 1
            },
            emphasis: {
              label: {
                fontSize: 20
              }
            },
            data: [
              {value: 60, name: '访问'},
              {value: 40, name: '咨询'},
              {value: 20, name: '订单'},
              {value: 80, name: '点击'},
              {value: 100, name: '展现'}
            ]
          }
        ]
      }
    }
  ]
}
