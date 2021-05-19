<template>
  <div id="header">
    <el-row>
      <el-col :span="12" :offset="6">
          <div class="nav_item" v-for="(item,key) in headerData.list" :key="key">
            <p :class="{'nav_item_box':true,'active_nav':key === activeNavIndex }" @click.stop="openNav(item,key)">
               <i :class="['iconfont','icon_ffffff',item.icon]" :style="{color: key === activeNavIndex ? '#00baff' : ''}"></i>
               <span class="item">{{item.type}}</span>
            </p>
          </div>
          <div class="nav_item_f">
              <p class="nav_item_opt" @click="saveOption">
                 <i class="iconfont iconsave icon_ffffff"></i>
                 <span class="item">保存</span>
              </p>
          </div>
          <div class="nav_item_f">
              <p class="nav_item_opt" @click="previewPage">
                 <i class="iconfont iconyulan icon_ffffff"></i>
                 <span class="item">预览</span>
              </p>
          </div>
      </el-col>
    </el-row>
    <div class="nav_content" v-for="(item,key) in headerData.list" :key="key" v-show="activeNavIndex === key" :style="{left:leftPos,height:60*(item.child.length+1)+'px',minHeight:'300px'}">
        <div class="left_nav">
          <div class="second_nav_item"  v-for="(children,keyChild) in item.child" :key="keyChild"  :class="{active_child_nav:keyChild === aciveChildIndex }"  @click.stop="changeTab(children,keyChild)">
              <el-tooltip class="item" effect="dark" :content="children.type" placement="left">
                 <i :class="['iconfont','icon_ffffff', children.icon]"></i>
              </el-tooltip>
          </div>
        </div>
        <div class="right_content self_scroll" v-if="grandBoxVisible">
            <div class="right_content_item" v-for="(grandSon,keyGrandSon) in grandData" :key="keyGrandSon" @click.stop="addOption(grandSon)">
              <div class="img_box">
                <img :src="grandSon.src" />
              </div>
              <span>{{ grandSon.name }}</span>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import HeaderData from '../../../static/data/header/index'
export default {
  data() {
    return {
      activeNavIndex:-1,
      aciveChildIndex:-1,
      headerData:HeaderData,
      grandBoxVisible:false,
      grandData:[],
      leftPos:0,
    };
  },
  methods: {
    // 切换tab
    changeTab(data,index){
        this.aciveChildIndex = index;
        this.grandBoxVisible = false;
        this.grandData = data.child;
        this.grandBoxVisible = true;
    },
    // 打开导航
    openNav(data,id){
        this.leftPos = 'calc(25% + ' + id*80 + 'px)';
        this.activeNavIndex = id;
        let defaultData = data['child'][0];
        this.changeTab(defaultData,0)
    },
    // 新增配制
    addOption(option){
        this.$parent.addOption(option);
        this.activeNavIndex = -1;
       
    },
    saveOption(){
        this.$emit('saveOption');
    },
    previewPage(){
        this.$emit('preview');
    }

  },
  components: {},
  watch:{
    "$Store.state.closeNav":{
       handler(val){
         this.activeNavIndex = -1
       },
       deep:true
    }
  },
  mounted() {
    let me = this;
    document.onclick=function(){
       me.activeNavIndex = -1
    }
  },
};
</script>

<style scoped lang="less">
#header {
  width: 100%;
  height: 100%;
  position: relative;
  .el-row {
    width: 100%;
    height: 100%;
    .el-col {
      height: 100%;
      .nav_item{
        display: inline-block;
        width:80px;
        height:100%;
        .nav_item_box{
           width:100%;
           height: 100%;
           display: flex;
           justify-content: center;
           align-items: center;
           flex-direction: column;
           border-bottom:2px solid transparent;
          .item{
            font-size: 13px;
            padding-top:4px;
          }
          .iconfont{
            font-size: 20px;
          }
        }
      }  
        
    }
  }
  .nav_content{
    width:500px;
    position: absolute;
    top: 100%;
    left:25%;
    z-index:9999;
    border:1px solid red;
    overflow: hidden;
    display: flex;
    justify-content: flex-start;
    .left_nav{
      width:60px;
      background: #272e35;
    }
    .right_content{
      flex: 1;
      background: #1f252c;
      padding: 10px;
      overflow-y: auto;
      .right_content_item{
        display:inline-block;
        width:33.3%;
        padding:10px;
        text-align: center;
        .img_box{
          padding:10px;
          background-color:#171c22;
          margin-bottom: 10px;
          font-size: 14px;
          img{
            width:100%;
            height:80px;
          }
        }



      }
    }
    .second_nav_item{
      padding:8px 0;
      text-align: center;
      color:#ffffff;
      margin:10px 0;
      border-left:2px solid transparent;
    }
    .second_nav_content{
      height: 100%;
    }
    
  }
}

.active_nav{
  border-bottom:2px solid #00baff!important;
  color:#00baff;
}
.nav_item_box:hover{
  border-bottom:2px solid #00baff!important;
  color:#00baff;
}
.nav_item_box:hover i{
  color:#00baff!important;
}
.active_child_nav{
  border-left:2px solid #00baff!important;
  background-color: #1f252c;
}
.active_child_nav i{
  color:#00baff!important;
}
.second_nav_item:hover{
  border-left:2px solid #00baff!important;
  background-color: #1f252c;
}
.second_nav_item:hover i{
  color:#00baff!important;
}
.nav_item_f{
  width:60px;
  height:100%;
  float: right;
}
.nav_item_f .nav_item_opt{
    width:100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-bottom:2px solid transparent;
}
.nav_item_f .nav_item_opt .item{
  font-size: 13px;
  padding-top:4px;
}
.nav_item_f .nav_item_opt .iconfont{
  font-size: 20px;
}
</style>