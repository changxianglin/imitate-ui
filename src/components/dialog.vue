<template>
  <div class="lin-dialog_wrapper">
    <div class="lin-dialog">
      <div class="lin-dialog_header">
        <slot name="title">
          <span class="lin-dialog_title">{{title}}</span>
        </slot>
        <button class="lin-dialog_headerbtn">
          <i class="lin-icon-delete"></i>
        </button>
      </div>
      <div class="lin-dialog_body">
        <span>这是一段信息</span>
      </div>
      <div class="lin-dialog_footer">
        <lin-button>取消</lin-button>
        <lin-button type="primary">确定</lin-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LinDialog',
  props: {
    title: {
      type: String,
      default: '提示'
    }
  }
}
</script>

<style lange="scss"  scoped>
.lin-dialog_wrapper{
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index: 2001;
  background-color: rgba(0,0,0,0.5);
  .lin-dialog{
    position: relative;
    margin: 15vh auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.3);
    box-sizing: border-box;
    width: 30%;
    &_header{
      padding: 20px 20px 10px;
      .lin-dialog_title{
        line-height: 24px;
        font-size: 18px;
        color: #303133;
      }
      .lin-dialog_headerbtn{
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 0;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;
        .lin-icon-close{
          color:909399
        }
      }
    }
    &_body{
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;
      word-break: break-all;
    }
    &_footer{
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;
      ::v-deep .lin-button:first-child{
        margin-right: 20px;
      }
    }
  }
}
.dialog-fade-enter-active{
  animation: fade .3s;
}
.dialog-fade-leave-active{
  animation: fade .3s reverse;
}
@keyframes fade{
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100%{
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
