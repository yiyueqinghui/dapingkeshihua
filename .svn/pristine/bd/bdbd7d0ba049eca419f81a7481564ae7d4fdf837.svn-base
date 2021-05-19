<template>
  <div id="y_setting">
    <el-form class="form_common" size="small" :model="yAxis" label-width="110px" label-position="left">
        <el-form-item label="名称">
            <el-input v-model="yAxis.name" clearable></el-input>
        </el-form-item>
        <el-form-item label="名称字体颜色" v-if="yAxis.nameTextStyle">
            <el-input class="show_color" v-model="yAxis.nameTextStyle.color"></el-input>
            <el-color-picker class="select_color" v-model="yAxis.nameTextStyle.color"></el-color-picker>
        </el-form-item>
        <el-form-item label="名称字体大小"  v-if="yAxis.nameTextStyle">
            <el-input v-model="yAxis.nameTextStyle.fontSize" type="number"></el-input>
        </el-form-item>
        <el-form-item label="显示轴线">
            <el-switch v-model="yAxis.show" active-color="#13ce66" inactive-color="#000000"></el-switch>
        </el-form-item>
        <el-form-item label="轴线颜色"  v-if="yAxis.axisLine && yAxis.axisLine.lineStyle">
            <el-input class="show_color" v-model="yAxis.axisLine.lineStyle.color" type="text"></el-input>
            <el-color-picker class="select_color" v-model="yAxis.axisLine.lineStyle.color"></el-color-picker>
        </el-form-item>
        <el-form-item label="文本大小"  v-if="yAxis.axisLabel && yAxis.axisLabel.textStyle">
            <el-input v-model=" yAxis.axisLabel.textStyle.fontSize" type="number"></el-input>
        </el-form-item>
        <el-form-item label="文本颜色"  v-if="yAxis.axisLabel && yAxis.axisLabel.textStyle">
            <el-input class="show_color" v-model="yAxis.axisLabel.textStyle.color"></el-input>
            <el-color-picker class="select_color" v-model="yAxis.axisLabel.textStyle.color"></el-color-picker>
        </el-form-item>
        <el-form-item label="显示分割线" v-if="yAxis.splitLine">
            <el-switch v-model="yAxis.splitLine.show" active-color="#13ce66" inactive-color="#000000"></el-switch>
        </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
    props:{
        yAxis:{
            type:Object,
            default(){
                return {}
            }
        }

    },
    data(){
        return {

        }
    },
    methods:{

    },
    watch:{
        yAxis:{
           handler(val,oldVal){
               this.$emit('updateCurrentOption','yAxis',val)
           },
           deep:true
       }
       
    },
    mounted(){
    }

}
</script>

<style scoped>
#y_setting{
    width: 100%;
    height: 100%;
}

</style>