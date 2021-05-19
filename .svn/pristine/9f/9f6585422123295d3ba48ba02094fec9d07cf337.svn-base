<template>
  <div id="legend_setting">
    <el-form class="form_common" size="small" :model="legend" label-width="110px" label-position="left">
        <el-form-item label="显示">
            <el-switch v-model="legend.show" active-color="#13ce66" inactive-color="#000000"></el-switch>
        </el-form-item>
        <el-form-item label="水平位置">
            <el-select v-model="legend.left" placeholder="请选择">
                <el-option
                    v-for="item in rowList"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="垂直位置">
            <el-select v-model="legend.top" placeholder="请选择">
                <el-option
                    v-for="item in colList"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="排列方式">
            <el-select v-model="legend.orient" placeholder="请选择">
                <el-option
                    v-for="item in orientList"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
            </el-select>
        </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
    props:{
        legend:{
            type:Object,
            default(){
                return {}
            }
        }

    },
    data(){
        return {
            rowList:this.$Store.state.echartsPosition.row,
            colList:this.$Store.state.echartsPosition.col,
            orientList:this.$Store.state.echartsPosition.orient,
        }
    },
    methods:{

    },
    watch:{
        legend:{
           handler(val,oldVal){
               this.$emit('updateCurrentOption','legend',val)
           },
           deep:true
       }
       
    },
    mounted(){
    }

}
</script>

<style scoped>
#legend_setting{
    width: 100%;
    height: 100%;
}

</style>