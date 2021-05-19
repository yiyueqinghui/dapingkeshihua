<template>
  <div id="right_option_setting">
    <el-collapse v-model="activeName" accordion v-if="this.settingType === 'echart'">
        <el-collapse-item title="基础信息" name="basic">
            <el-form class="form_common" size="small" :model="currentOption" label-width="100px" label-position="left">
                <el-form-item label="活动名称">
                    <el-input v-model="currentOption.name" clearable></el-input>
                </el-form-item>
                <el-form-item label="背景颜色" >
                    <el-input class="show_color" v-model="currentOption.background" type="text"></el-input>
                    <el-color-picker class="select_color" v-model="currentOption.background"></el-color-picker>
                </el-form-item>
            </el-form>
        </el-collapse-item>
        <el-collapse-item title="x轴设置" name="xAxis" v-if="this.xAxisShow.indexOf(this.echartType)>=0">
            <SettingXAxisComp v-if="xAxisVisible" :xAxis="xAxis" @updateCurrentOption="updateCurrentOption"></SettingXAxisComp>
        </el-collapse-item>
        <el-collapse-item title="y轴设置" name="yAxis" v-if="this.yAxisShow.indexOf(this.echartType)>=0">
             <SettingYAxisComp v-if="yAxisVisible" :yAxis="yAxis" @updateCurrentOption="updateCurrentOption"></SettingYAxisComp>
        </el-collapse-item>
        <el-collapse-item title="边距设置" name="grid"  v-if="this.gridShow.indexOf(this.echartType)>=0">
             <SettingGridComp v-if="gridVisible" :grid="grid" @updateCurrentOption="updateCurrentOption"></SettingGridComp>
        </el-collapse-item>
        <el-collapse-item title="图例设置">
             <SettingLegendComp v-if="legendVisible" :legend="legend" @updateCurrentOption="updateCurrentOption"></SettingLegendComp>
        </el-collapse-item>
    </el-collapse>
    <div class="global_set" v-if="this.settingType === 'global'">
        <el-form class="form_common " size="small" :model="globalOption" label-width="110px" label-position="left">
            <el-form-item label="屏幕宽度(像素)">
                <el-input v-model="globalOption.width" type="number"></el-input>
            </el-form-item>
            <el-form-item label="屏幕高度(像素)">
                <el-input v-model="globalOption.height" type="number"></el-input>
            </el-form-item>
        </el-form>
    </div>

  </div>
</template>

<script>
export default {
    props:{
       currentOption:{
           type:Object
       } 
    },
    data(){
        return {
            activeName:'yAxis',
            basic:{},
            xAxis:{},
            xAxisVisible:false,

            yAxis:{},
            yAxisVisible:false,

            grid:{},
            gridVisible:false,

            legend:{},
            legendVisible:false,
            settingType:'',
            globalOption:null,

            echartType:'',
            xAxisShow:['line','bar'],
            yAxisShow:['line','bar'],
            gridShow:['line','bar','pie'],
            

        }
    },
    methods:{
        filterDataType(val){
           let num = val.replace('px','');
           return Number(num)
        },
        divideOption(data){
            //全局样式修改
            data.css.background = data.background;

            let option = data.option;
            //xAxis
            this.xAxis = Array.isArray(option.xAxis) ? option.xAxis[0] : option.xAxis;
            this.$nextTick(()=>{
                this.xAxisVisible = true;
            })
            //xAxis
            this.yAxis = Array.isArray(option.yAxis) ? option.yAxis[0] : option.yAxis;
            this.$nextTick(()=>{
                this.yAxisVisible = true;
            })
            //grid
            this.grid = option.grid ? option.grid : {};
            this.$nextTick(()=>{
                this.gridVisible = true;
            })

            //legend
            this.legend = option.legend ? option.legend : {show:false};
            this.$nextTick(()=>{
                this.legendVisible = true;
            })
            
        },
        updateCurrentOption(type,val){
            if(this.settingType === 'echart') {
                if(type === 'xAxis'){
                    this.currentOption.option.xAxis = Array.isArray(this.currentOption.option.xAxis) ? [val] : val;
                }
                
            }else if(this.settingType === 'global'){
                console.log('全局配制的修改')
            }

        },
        initOption(val){
            this.settingType = val.domId.split('_')[0];
            if(this.settingType === 'echart'){
                this.divideOption(val)
            }else if(this.settingType === 'global'){
                this.globalOption = this.$Store.state.globalOption;
            } 
        }

    },
    watch:{
       currentOption:{
           handler(val,oldVal){
              this.echartType = this.common.getType(val.option) === 'Object' && Array.isArray(val.option.series) ? val.option.series[0]['type'] : '';
              this.initOption(val);
           },
           deep:true
       },
       //更新全局配制
       globalOption:{
           handler(val,oldVal){
                this.$Store.state.globalOption = val;
           },
           deep:true
       }
    },
    components:{
        'SettingXAxisComp':()=>import('./setting/xAxis.vue'),
        'SettingYAxisComp':()=>import('./setting/yAxis.vue'),
        'SettingGridComp':()=>import('./setting/grid.vue'),
        'SettingLegendComp':()=>import('./setting/legend.vue')
    },
    mounted(){
        //初始化设置类型
        this.initOption(this.currentOption);

    }

}
</script>

<style scoped>
#right_option_setting{
    width:100%;
    height:100%;
}
#right_option_setting >>> .el-collapse{
    border:none;
}
#right_option_setting >>> .el-collapse-item__header{
   background-color: #282e3a;
   color: #ffffff;
   border-bottom: 1px solid #3b3c3e;
   padding: 0 5px 0 15px;
}
#right_option_setting >>> .el-collapse-item__wrap{
   background-color: transparent;
   border-bottom: none;
}
#right_option_setting >>> .el-collapse-item__content{
   color: #ffffff;
   padding: 10px;
}

.global_set{
    padding:10px;
}




</style>