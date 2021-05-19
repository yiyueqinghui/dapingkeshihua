<template>
  <div v-show="optionObj.showStatus" style="z-index:10">
    <VueDraggableResizable
      :w="initW"
      :h="initH"
      :x="0"
      :y="0"
      :active="optionObj.domId === $Store.state.activeDragId"
      class-name-active="my_active_class"
      :prevent-deactivation="preventDeactivation"
      @resizestop="onResizestop"
      @dragstop="onDragstop"
      @deactivated="onDeactivated"
      @activated="onActivated"
    >
      <slot></slot>
    </VueDraggableResizable>
  </div>
</template>

<script>
import VueDraggableResizable from "vue-draggable-resizable";
import "vue-draggable-resizable/dist/VueDraggableResizable.css";
import * as echarts from "echarts";
export default {
  inject:['getCurrentOption'],
  props: {
    optionObj: {
      type: Object,
    },
  },
  data() {
    return {
      myChart: null,
      initW: 300,
      initH:300,
      isActive:false,
      preventDeactivation1:false,
      zIndex:10,

    };
  },
  methods: {
    initData(){
      if(!this.optionObj.css){
         this.optionObj.css = {
          left: '0px',
          top: '0px',
          "z-index":10,  
          width:this.caculateSizeX(this.initW)+'px',
          height:this.caculateSizeY(this.initH)+'px'
        };
      }
      console.log(JSON.stringify(this.optionObj.css))
    },
    caculateSizeX(num){
      return (this.$parent.rowSize * num).toFixed(1);
    },
    caculateSizeY(num){
      return (this.$parent.colSize * num).toFixed(1);
    },
    //缩放
    onResizestop(x, y, width, height) {
      if (this.optionObj.css) {
        this.optionObj.css.left = this.caculateSizeX(x)+'px';
        this.optionObj.css.top = this.caculateSizeY(y)+'px';
        this.optionObj.css.width = this.caculateSizeX(width)+'px';
        this.optionObj.css.height = this.caculateSizeY(height)+'px';
      }
      this.myChart.resize();
    },
    //平移
    onDragstop(x, y) {
      if (this.optionObj.css) {
        this.optionObj.css.left = this.caculateSizeX(x)+'px';
        this.optionObj.css.top = this.caculateSizeY(y)+'px';
      }
    },
    //失去焦点时
    onDeactivated(){
      //  this.isActive = false;
       this.$Store.state.activeDragId = '';
    },
    //获取焦点时
    onActivated(){
      // this.isActive = true;
      this.$Store.state.activeDragId = this.optionObj.domId;
      this.getCurrentOption(this.optionObj)
    },
    //鼠标右键点击时，激活窗口
    activeDrag(id){
      this.$Store.state.activeDragId = id;
    },
    initEcharts(){
      this.myChart = echarts.init(
        document.getElementById(this.optionObj.domId)
      );
      this.myChart.setOption(this.optionObj.option);
    },
    updateEcharts(){
      console.log('更新图表',this.optionObj.option) 
      this.myChart.setOption(this.optionObj.option);
    },
    
  },
  watch:{
     optionObj:{
       handler(val,oldVal){
          this.updateEcharts()
       },
       deep:true
     }
  },
  components: {
    VueDraggableResizable,
  },
  computed:{
     preventDeactivation:function(){
      //  console.log('是否禁止修改状态',this.$Store.state.preventDeactivation);
       return this.$Store.state.preventDeactivation;
     }
  },
  mounted() {
    this.$nextTick(() => {
      this.initData();
      this.initEcharts();
    });
  },
};
</script>

<style scoped >
.drag_box {
  width: 100%;
  height: 100%;
}
.my_active_class{
  /* background: rgba(64,158,255,.3); */
}

</style>