<template>
  <div id="right_option_data">
    <el-form class="form_common" size="small" :model="currentOption" label-width="110px" label-position="left">
        <el-form-item label="数据类型">
            <el-select v-model="dataType" placeholder="请选择">
                <el-option
                v-for="item in typeList"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
        </el-form-item>
    </el-form>
    <!-- 静态数据 -->
    <el-form v-show="dataType === 1" class="form_common" size="small" :model="currentOption" label-width="110px" label-position="left">
        <el-form-item label="数据值">
            <el-button type="primary" size="mini" @click="openCodeEdit('static')">编辑</el-button>
        </el-form-item>
    </el-form>
    <!-- 动态数据 -->
    <el-form v-show="dataType === 2" class="form_common" size="small" :model="asyncData" label-width="110px" label-position="left">
        <el-form-item label="接口地址">
            <el-input class="api_url" type="textarea" v-model="asyncData.url" :autosize="{ minRows: 2, maxRows: 4}"></el-input>
        </el-form-item>
        <el-form-item label="请求方式">
            <el-radio-group v-model="asyncData.type">
                <el-radio label="GET">GET</el-radio>
                <el-radio label="POST">POST</el-radio>
            </el-radio-group>
        </el-form-item>
        <el-form-item label="接口参数">
            <el-radio-group v-model="asyncData.type">
               <el-button type="primary" size="mini" @click="openCodeEdit('asyncData')">编辑</el-button>
            </el-radio-group>
        </el-form-item>
        <el-form-item label="请求头header">
            <el-radio-group v-model="asyncData.type">
               <el-button type="primary" size="mini" @click="openCodeEdit('asyncHeader')">编辑</el-button>
            </el-radio-group>
        </el-form-item>
        <el-form-item label="更新频率(秒)" title="更新频率为0时，表示不自动更新">
            <el-input type="number" v-model="asyncData.updateTime" />
        </el-form-item>
        <el-row class="submit_btn">
            <el-button style="width:80%" type="primary" size="mini" width="80%" @click="submitForm">提交</el-button>
        </el-row>
    </el-form>

    <!-- 代码编辑窗口 -->
    <CodeEdit v-if="codeEditVisible" :value="code"  @close="closeCodeEdit" @updateData="updateData"></CodeEdit>
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
            dataType:2,      //动静态数据
            typeList:[
                {
                    label:'静态数据',
                    value:1
                },
                {
                    label:'动态数据',
                    value:2
                }
            ],

            codeEditVisible:false,
            code:'',
            openCodeEditType:'',

            asyncData:{
                url:'',
                type:'POST',
                data:{},
                header:{},
                updateTime:0
            }


        }
    },
    methods:{
        // 打开代码编辑组件
        openCodeEdit(type){
            this.openCodeEditType = type;
            //分类传入参数
            if(type === 'static'){
                this.filterData();
            }else if(type === 'asyncData'){
                this.code = JSON.stringify(this.asyncData.data,null,"\t");
            }else if(type === 'asyncHeader'){
                this.code = JSON.stringify(this.asyncData.header,null,"\t");
            }
            this.codeEditVisible = true;
            this.$Store.state.maskVisible = true;
        },
        //关闭代码编辑组件
        closeCodeEdit(){
            this.codeEditVisible = false;
            this.$Store.state.maskVisible = false;
        },
        // 更新数据
        updateData(val){
            //分类更新数据
            if(this.openCodeEditType === 'static'){
                this.filterData('update',val);
            }else if(this.openCodeEditType === 'asyncData'){
                this.asyncData.data = val;
            }else if(this.openCodeEditType === 'asyncHeader'){
               this.asyncData.header = val;
            }
            this.closeCodeEdit();
        },
        // 筛选出只需修改的数据
        filterData(status='filter',newOption){
            let option = this.currentOption.option;
            if(!option) return;
            let code = {};
            //legend图例修改
            if(option.legend && option.legend.data){
                if(status === 'filter'){
                    code['legend'] = {
                        data:option.legend.data
                    }
                }else{
                    option.legend.data = newOption.legend.data;
                }
            }

            //x轴修改
            if(option.xAxis){
                let type = this.common.getType(option.xAxis);
                if(type === 'Array'){
                    code['xAxis'] = [];
                    option.xAxis.forEach((item,index)=>{
                        if(status === 'filter'){
                            code['xAxis'].push({
                                data:item.data,
                                name:item.name
                            })
                        }else{
                            option.xAxis[index]['data'] = newOption.xAxis[index]['data'];
                            option.xAxis[index]['name'] = newOption.xAxis[index]['name'];
                        }
                    })

                }else if(type === 'Object'){
                    if(status === 'filter'){
                        code['xAxis'] = {
                            data:option.xAxis.data,
                            name:option.xAxis.name
                        }
                    }else{
                        option.xAxis['data'] = newOption.xAxis['data'];
                        option.xAxis['name'] = newOption.xAxis['name'];
                    }


                }
                
            }

             //y轴修改
            if(option.yAxis){
                let type = this.common.getType(option.yAxis);
                if(type === 'Array'){
                    code['yAxis'] = [];
                    option.yAxis.forEach((item,index)=>{
                        if(status === 'filter'){
                            code['yAxis'].push({
                                data:item.data,
                                name:item.name
                            })
                        }else{
                            option.yAxis[index]['data'] = newOption.yAxis[index]['data'];
                            option.yAxis[index]['name'] = newOption.yAxis[index]['name'];
                        }
                    })

                }else if(type === 'Object'){
                    if(status === 'filter'){
                        code['yAxis'] = {
                            data:option.yAxis.data,
                            name:option.yAxis.name
                        }
                    }else{
                        option.yAxis['data'] = newOption.yAxis['data'];
                        option.yAxis['name'] = newOption.yAxis['name'];
                    }

                }
                
            }

             //series修改
            if(option.series){
                let type = this.common.getType(option.series);
                if(type === 'Array'){
                    code['series'] = [];
                    option.series.forEach((item,index)=>{
                        if(status === 'filter'){
                            code['series'].push({
                                data:item.data,
                                name:item.name
                            })
                        }else{
                            option.series[index]['data'] = newOption.series[index]['data'];
                            option.series[index]['name'] = newOption.series[index]['name'];
                        }
                    })

                }else if(type === 'Object'){
                    if(status === 'filter'){
                        code['series'] = {
                            data:option.series.data,
                            name:option.series.name
                        }
                    }else{
                        option.series['data'] = newOption.series['data'];
                        option.series['name'] = newOption.series['name'];
                    }

                }
                
            }

            if(status === 'filter'){
                this.code = JSON.stringify(code,null,"\t");
                console.log(this.code)
            }

        },
        //新增异步请求数据
        submitForm(){
            if(this.asyncData.url){
               this.$set(this.currentOption,"asyncData",this.asyncData);
               this.$message.success('异步更新设置完成,请在预览中查看效果!')
            }else{
                this.$message.error('请求地址不能为空！')
            }            
        }

    },
    components:{
       "CodeEdit":()=>import('../common/codeEdit.vue')
    },
    mounted(){
        console.log('data',this.currentOption) 


        

    }

}
</script>

<style scoped>
#right_option_data{
    width:100%;
    height:100%;
    color: #fff;
    padding: 10px;
}
.submit_btn{
    text-align:center;
    margin-top:20px;
}
.api_url >>> textarea{
    background-color: transparent;
    border: 1px solid #6b6b6d;
    color: #c5c5c7;
}


</style>