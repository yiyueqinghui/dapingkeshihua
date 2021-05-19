<template>
  <div id="code_edit">
    <!-- 头部 -->
    <div class="header">
      <header>代码编辑</header>
      <i
        class="iconfont iconclose-bold iconfont_self"
        title="关闭"
        @click="close"
      ></i>
    </div>
    <!-- 代码编辑器 -->
    <div class="content" id="monaco" ></div>
    <!-- 底部按钮 -->
    <div class="footer">
        <el-button type="primary" size="small " @click="close" >取消</el-button>
        <el-button type="primary" size="small " @click="confirmContent">确定</el-button>
    </div>
  </div>
</template>

<script>
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js';
import 'monaco-editor/esm/vs/basic-languages/javascript/javascript.contribution';
import 'monaco-editor/esm/vs/editor/contrib/find/findController.js';
export default {
  props: {
    value: {
      type: String,
      default:'{}'
    },
  },
  data() {
    return {
      monacoInstance: null,
      

    };
  },
  methods: {
    //关闭窗口
    close() {
      this.$emit('close')
    },
    //实例化编辑器
    initMonaco() {
      let me = this;
      me.monacoInstance = monaco.editor.create(document.getElementById("monaco"), {
        value:me.value,
        theme: "vs-dark",   //vs是白色主题，vs-dark黑色
        automaticLayout: true,    // 自动布局
        foldingStrategy: 'indentation', //代码可分小段折叠
        language: 'javascript',            // json,html,css,javascript 
        selectOnLineNumbers:true, // 查询
        cursorStyle: 'line', // 光标样式
        fontSize: 18, // 字体大小
        autoIndent: false //自动布局
      });

      //监听内容的改变
      // me.monacoInstance.onDidChangeModelContent((event)=>{
      //   const newValue=monacoInstance.getValue();
      //   console.log(newValue)
      // })

    },
    //确定修改内容
    confirmContent(){
      let newValue = this.monacoInstance.getValue();
      try{
         let valueObj = JSON.parse(newValue);
         this.$emit('updateData',valueObj);
      }catch(e){
         this.$message.warning('数据格式不正确,提示：JSON中key必须用双引号包裹！')
         return;
      }
    }
  },
  mounted() {
    this.initMonaco();
  },
};
</script>

<style scoped >
#code_edit {
  width: 800px;
  height: 600px;
  padding: 20px;
  background: #000000;
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 200;
  transform: translate(-50%, -50%);
  border-radius: 10px;
}
.header {
  height: 25px;
  line-height: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.content {
  height: calc(100% - 65px);
  margin: 10px 0;
}
.iconfont_self {
  font-size: 20px;
  color: #ffffff;
}
.footer{
    height: 30px;
    line-height: 30px;
    text-align: right;
}
</style>