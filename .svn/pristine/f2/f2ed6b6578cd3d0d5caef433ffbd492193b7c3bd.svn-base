<template>
  <div id="build">
       <i v-if="this.routeName === 'index'" class="iconfont iconclose close_pos" title="关闭预览" @click="closePreview"></i>
       <div class="box" v-for="item in allOptions" :id="item.domId" :style="item.css" :key="item.domId" v-show="item.showStatus" >
           
       </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
    data(){
        return {
            allOptions:[],
            routeName:'',
            timeoutObj:{}

        }
    },
    methods:{
        getOption(){
            this.common.axiosPost('/page/get/option',{
                id:this.$route.params.id
            }).then(res=>{
                debugger;
                if(res.allOptions && res.allOptions.option){
                   this.allOptions = JSON.parse(res.allOptions.option);
                   this.initOption();
                }else{
                   this.$message.warning('暂无数据!')
                }

            })
        },
        preview(){
            let allOptions = this.common.deepClone(this.$parent.optionList);
            /*
            * 由于同一个页面，无法同时存在两个相同的echarts实例，即不能拥有两个相同的id,所有这里修改数据id。
            * echarts中，如果同一个页面，有两个相同的id,则浏览器警告如下：
            * There is a chart instance already initialized on the dom.'
            */
            allOptions.forEach(item=>{
                item.domId = 'preview_'+item.domId;
            })
            this.allOptions = allOptions;
            this.initOption();
               
        },
        initOption(){
             this.$nextTick(()=>{
                 this.allOptions.forEach(item=>{
                    console.log(item)
                    //echarts图表初始化
                    var myChart = echarts.init(document.getElementById(item.domId)); 
                    var option = item.option;
                    myChart.setOption(option);
                    if(item.hasOwnProperty('asyncData') && this.common.getType(item.asyncData) === 'Object' && item.asyncData.url){
                        this.asyncUpdate(myChart,option,item.asyncData)
                    }
                   

                })
             })
        },
        asyncUpdate(myChart,option,asyncData){
            this.common.echartAxios(asyncData).then(res=>{
                let asyncOption = res.option;
                //当x轴为类型时，修改x轴
                if(Array.isArray(option.xAxis) && option.xAxis[0]['type'] === 'category' && Array.isArray(asyncOption.xAxis) ){
                    option.xAxis.forEach((item,index)=>{
                        item.data = asyncOption.xAxis[index]['data'];
                    })
                }else if(this.common.getType(option.xAxis) === 'Object' && option.xAxis['type'] === 'category' && this.common.getType(asyncOption.xAxis) === 'Array'){
                    option.xAxis.data = asyncOption.xAxis[0]['data']
                }

                //当y轴为类型时，修改y轴
                if(Array.isArray(option.yAxis) && option.yAxis[0]['type'] === 'category' && Array.isArray(asyncOption.yAxis) ){
                    option.yAxis.forEach((item,index)=>{
                        item.data = asyncOption.yAxis[index]['data'];
                    })
                }else if(this.common.getType(option.yAxis) === 'Object' && option.yAxis['type'] === 'category' && this.common.getType(asyncOption.yAxis) === 'Array'){
                    option.yAxis.data = asyncOption.yAxis[0]['data']
                }

                //修改series中的数据
                if(Array.isArray(option.series) && Array.isArray(asyncOption.series)){
                    option.series.forEach((item,index)=>{
                        if(index < asyncOption.series.length){
                            if(item.type === 'radar' || item.type === 'funnel'){
                                item.data = asyncOption.series;
                            }else{
                                item.data = asyncOption.series[index]['data'];
                                item.name = asyncOption.series[index]['name'];
                            }
                           
                        }
                    })
                    let min = Math.min(asyncOption.series.length,option.series.length);
                    option.series.splice(min)
                }else if(this.common.getType(option.series) === 'Object' && this.common.getType(asyncOption.series) === 'Array'){
                    option.data = asyncOption.series['data'];
                    option.name = asyncOption.series['name'];

                }

                //雷达图，indicator
               if(this.common.getType(option.radar) === 'Object' && this.common.getType(asyncOption.indicator) === 'Array'){
                    option.radar['indicator'] = asyncOption.indicator;
                }

                console.log(option)

                myChart.setOption(option,true);

                //如果时间>0,开启定时器
                if(asyncData.updateTime>0){
                    this.timeoutObj[myChart._dom.id] = setTimeout(()=>{
                        this.asyncUpdate(myChart,option,asyncData);
                    },asyncData.updateTime*1000)
                }
            })
        },
        
        closePreview(){
            this.$parent.closePreview();
        }
        

    },
    destroyed(){
        console.log(this.timeoutObj)
        Object.keys(this.timeoutObj).forEach(item=>{
            clearTimeout(this.timeoutObj[item])
        })
    },
    mounted(){
        let routeName = this.$route.name;
        this.routeName = routeName;
        if( routeName === 'build'){
           this.getOption();
        }else if(routeName === 'index'){
           this.preview();
        }
    },

}
</script>

<style scoped >
#build{
    width:100%;
    height: 100%;
    position: relative;
}
#build .box{
    position: absolute;
    border:1px solid red;
}
.close_pos{
    position:fixed;
    top: 20px;
    right:20px;
    z-index:1000;
    font-size:35px;
    color: #ffffff;
}



</style>