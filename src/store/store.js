import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

var store = new Vuex.Store({
  state: {
  	name:'cj',
    screenWidth:1920,
    screenHeight:1080,
    preventDeactivation:false,
    globalOption:{
      width:1920,
      height:1080
    },
    activeDragId:'',

    echartsPosition:{        //echarts位置
      row:[
          {
            value: 'left',
            label: '靠左'
          },
          {
            value: 'right',
            label: '靠右'
          },
          {
            value: 'center',
            label: '居中'
          }
      ],
      col:[
        {
          value: 'top',
          label: '顶部'
        },
        {
          value: 'bottom',
          label: '底部'
        },
        {
          value: 'middle',
          label: '居中'
        }
      ],
      orient:[
        {
          value: 'horizontal',
          label: '水平'
        },
        {
          value: 'vertical',
          label: '垂直'
        },
      ]

    },

    maskVisible:false,     //全局遮照层是否显示
    closeNav:0,   //不论什么值，统一关闭导航
    
  },
  mutations: {

  },
  aciton:{
  	
  }
  
})

export default store

