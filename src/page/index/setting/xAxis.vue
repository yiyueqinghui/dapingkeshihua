<template>
  <div id="x_setting">
    <el-form class="form_common" size="small" :model="xAxis" label-width="110px" label-position="left">
        <el-form-item label="名称">
            <el-input v-model="xAxis.name" clearable></el-input>
        </el-form-item>
        <el-form-item label="名称字体颜色" v-if="xAxis.nameTextStyle">
            <el-input class="show_color" v-model="xAxis.nameTextStyle.color"></el-input>
            <el-color-picker class="select_color" v-model="xAxis.nameTextStyle.color"></el-color-picker>
        </el-form-item>
        <el-form-item label="名称字体大小"  v-if="xAxis.nameTextStyle">
            <el-input v-model="xAxis.nameTextStyle.fontSize" type="number"></el-input>
        </el-form-item>
        <el-form-item label="显示轴线">
            <el-switch v-model="xAxis.show" active-color="#13ce66" inactive-color="#000000"></el-switch>
        </el-form-item>
        <el-form-item label="轴线颜色"  v-if="xAxis.axisLine && xAxis.axisLine.lineStyle">
            <el-input class="show_color" v-model="xAxis.axisLine.lineStyle.color" type="text"></el-input>
            <el-color-picker class="select_color" v-model="xAxis.axisLine.lineStyle.color"></el-color-picker>
        </el-form-item>
        <el-form-item label="文本大小"  v-if="xAxis.axisLabel && xAxis.axisLabel.textStyle">
            <el-input v-model=" xAxis.axisLabel.textStyle.fontSize" type="number"></el-input>
        </el-form-item>
        <el-form-item label="文本颜色"  v-if="xAxis.axisLabel && xAxis.axisLabel.textStyle">
            <el-input class="show_color" v-model="xAxis.axisLabel.textStyle.color"></el-input>
            <el-color-picker class="select_color" v-model="xAxis.axisLabel.textStyle.color"></el-color-picker>
        </el-form-item>
        <el-form-item label="显示分割线" v-if="xAxis.splitLine">
            <el-switch v-model="xAxis.splitLine.show" active-color="#13ce66" inactive-color="#000000"></el-switch>
        </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
    props:{
        xAxis:{
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
        xAxis:{
           handler(val,oldVal){
               console.log(val);
               this.$emit('updateCurrentOption','xAxis',val)
           },
           deep:true
       }
       
    },
    mounted(){
    }

}
</script>

<style scoped>
#x_setting{
    width: 100%;
    height: 100%;
}

</style>