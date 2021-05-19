<template>
  <div id="left_layer">
      <h3 class="title">图层</h3>
      <ul class="layer_list self_scroll">
          <li v-for="(item,index) in optionList" :key="index">
               <i :class="['iconfont','icon_ffffff',item.icon]" ></i>
               <span>{{item.name}}</span>
               <i  @click="showOrHideLayer(index)" class="eyes iconfont iconchakan icon_ffffff" :style="{color:item.showStatus ? '#ffffff' : '#868585' }"></i>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    props:{
        optionList:{
            type:Array,
            default:()=>{
                return []
            }
        }
    },
    data(){
        return {
            

        }
    },
    methods:{
        showOrHideLayer(index){
            this.$parent.showOrHideLayer(index)
        }

    },
    mounted(){

    }

}
</script>

<style scoped>
#left_layer{
    height: 100%;
}
.title{
    border-bottom: 1px solid #409eff;
    padding: 10px;
    font-size: 17px;
    color: #409eff;
}
.layer_list{
    padding: 0 10px 10px 10px;
    margin-top: 10px;
    height: calc(100% - 45px);
}
.layer_list li{
    margin:2px 0;
    padding:5px 0;
    overflow: hidden;
}
.layer_list li .iconfont{
    margin-right: 5px;
}
.layer_list li:hover{
    background-color: #1f252c;
}
.layer_list .eyes{
    float: right;
    font-size: 20px;
}



</style>>