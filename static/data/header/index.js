import barOptions from './barOptions.js'
import lineOptions from './lineOptions.js'
import pieOptions from './pieOptions.js'
import radarOptions from './radarOptions.js'
import heatmapOptions from './heatmapOptions.js'
import otherOptions from './otherOptions.js'
import barOptions_3D from './barOptions_3D.js'
import pieOptions_3D from './pieOptions_3D.js'
import otherOptions_3D from './otherOptions_3D.js'

export default {
    list:[
        {
            type:'2D图表',
            icon:'icontubiao',
            child:[
                {
                    type:'柱状图',
                    icon:'icontubiao2',
                    child:barOptions.bar
                },
                {
                    type:'折线图',
                    icon:'iconline',
                    child:lineOptions.line
                },
                {
                  type:'饼图',
                  icon:'iconline-piechartbingtu-01',
                  child:pieOptions.pie
                },
                {
                  type:'雷达图',
                  icon:'iconleida',
                  child:radarOptions.radar
                },
                // {
                //   type:'热力图',
                //   icon:'iconrelitu',
                //   child:heatmapOptions.heatmap
                // },
                {
                  type:'其他',
                  icon:'iconqita',
                  child:otherOptions.other
                },
            ]
        },
        // {
        //     type:'3D图表',
        //     icon:'icontubiao',
        //     child:[
        //         {
        //             type:'柱状图',
        //             icon:'iconzhuzhuangtu',
        //             child:barOptions_3D.bar
        //         },
        //         {
        //             type:'饼状图',
        //             icon:'iconyuanbingtutubiao',
        //             child:pieOptions_3D.pie
        //         },
        //         {
        //             type:'其他',
        //             icon:'iconqita',
        //             child:otherOptions_3D.line
        //         }
        //     ]

        // }
    ]
}
