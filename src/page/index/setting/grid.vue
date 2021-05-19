<template>
  <div id="grid_setting">
    <el-form class="form_common" size="small" :model="grid" label-width="110px" label-position="left">
        <el-form-item label="左侧距离(像素)">
            <el-input v-model="grid.left" type="number"></el-input>
        </el-form-item>
        <el-form-item label="右侧距离(像素)">
            <el-input v-model="grid.right" type="number"></el-input>
        </el-form-item>
        <el-form-item label="顶部距离(像素)">
            <el-input v-model="grid.top" type="number"></el-input>
        </el-form-item>
        <el-form-item label="底部距离(像素)">
            <el-input v-model="grid.bottom" type="number"></el-input>
        </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
    props:{
        grid:{
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
        grid:{
           handler(val,oldVal){
               this.$emit('updateCurrentOption','grid',val)
           },
           deep:true
       }
       
    },
    mounted(){
        
    }

}
</script>

<style scoped>
#grid_setting{
    width: 100%;
    height: 100%;
}

</style>