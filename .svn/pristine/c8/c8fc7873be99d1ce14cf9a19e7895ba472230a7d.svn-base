<template>
  <div id="home">
    <DragResizeComp
      v-for="(item) in optionList"
      :key="item.domId"
      :ref="item.domId"
      :optionObj="item"
    >
      <div
        :id="item.domId"
        class="echarts_box"
        :style="{background:item.background}"
        @contextmenu.prevent="onContextmenu"
      ></div>
    </DragResizeComp>
  </div>
</template>

<script>
export default {
  props: {
    optionList: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  data() {
    return {
      rowSize: 1,
      colSize: 1

    };
  },
  methods: {
    initPageSize() {
      let homeDom = document.getElementById("home"),
        pageW = Number(
          window.getComputedStyle(homeDom).width.replace("px", "")
        ),
        pageH = Number(
          window.getComputedStyle(homeDom).height.replace("px", "")
        );
      this.rowSize = this.common.toDecimal(this.screenWidth / pageW, 4);
      this.colSize = this.common.toDecimal(this.screenHeight / pageH, 4);
    },
    //右键菜单
    onContextmenu(event) {
      console.log(event);  
      let id = this.activeDragResize(event);
      this.$contextmenu({
        items: [
          {
            label: "删除图层",
            icon:'iconfont iconclose-bold',
            onClick: this.deleteMenu.bind(this,id)
          },
          {
            label: "上移一层",
            icon:'iconfont icontop1',
            onClick: this.posUpMenu.bind(this,id,event)
          },
          {
            label: "下移一层",
            icon:'iconfont iconbottom',
            onClick: this.posDownMenu.bind(this,id,event)
          },
          {
            label: "置顶图层",
            icon:'iconfont icontop1',
            onClick: this.posTopMenu.bind(this,id,event)
          },
          {
            label: "置底图层",
            icon:'iconfont iconbottom',
            onClick: this.posBottomMenu.bind(this,id,event)
          }
        ],
        event,
        customClass: "right_menu",
        zIndex: 300,
        minWidth: 110,
      });
      return false;
    },
    // 删除图层
    deleteMenu(id){
      this.$parent.removeOption(id);
      this.$message.success('删除成功!')
    },
    // 上移图层
    posUpMenu(id,event){
      let zIndex = this.$parent.upRemoveOption(id);
      this.moveLayer(event,zIndex);
    },
    // 下移图层
    posDownMenu(id,event){
      let zIndex = this.$parent.downRemoveOption(id);
      this.moveLayer(event,zIndex);
    },
     // 置顶图层
    posTopMenu(id,event){
      let zIndex = this.$parent.topRemoveOption(id);
      this.moveLayer(event,zIndex);
    },
    // 置底图层
    posBottomMenu(id,event){
      let zIndex = this.$parent.bottomRemoveOption(id);
      this.moveLayer(event,zIndex);
    },
    moveLayer(event,zIndex){
      //把所有默认是zIndex:auto的统一修改为zIndex:10
      let allDrags = document.getElementsByClassName('draggable resizable');
      for(let k = 0;k<allDrags.length;k++){
        let everyDom = allDrags[k];
        let currentZindex = everyDom.style.zIndex;
        if(currentZindex === 'auto') everyDom.style.zIndex = 10;
      }
      //变动相应层级
      let className = ''; 
      let dom = event.path.find(item=>{
         className = item.className ? item.className : '';
         return className.indexOf('draggable resizable')>=0
      }) 
      console.log(zIndex)
      dom.style.zIndex = zIndex;
    },
    // 激活缩放窗口
    activeDragResize(target){
      let dragDom = target.path.find(ele=>{ 
         return ele.className === 'echarts_box'
      });
      let id = dragDom.id;
      this.$refs[id][0].activeDrag(id)
      return id;
    }
  },
  computed: {
    screenWidth() {
      return this.$Store.state.globalOption.width;
    },
    screenHeight() {
      return this.$Store.state.globalOption.height;
    },
  },
  components: {
    DragResizeComp: () => import("./dragResizeComp.vue"),
  },
  watch:{
   
    
  },
  mounted() {
    this.initPageSize();
  },
};
</script>

<style scoped >
#home {
  width: 100%;
  height: 100%;
  background: url("../../../static/img/home/bg.png") repeat left top;
  position: relative;
}
.echarts_box {
  width: 100%;
  height: 100%;
}

</style>