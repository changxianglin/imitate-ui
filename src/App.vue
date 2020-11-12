<template>
  <div id="app">
    <div class="row">
      <lin-button>按钮</lin-button>
      <lin-button type="primary">按钮</lin-button>
      <lin-button type="sucess">按钮</lin-button>
      <lin-button type="info">按钮</lin-button>
      <lin-button type="warning">按钮</lin-button>
      <lin-button type="danger">按钮</lin-button>
    </div>

    <div class="row">
      <lin-button plain>按钮</lin-button>
      <lin-button plain type="primary">按钮</lin-button>
      <lin-button plain type="sucess">按钮</lin-button>
      <lin-button plain type="info">按钮</lin-button>
      <lin-button plain type="warning">按钮</lin-button>
      <lin-button plain type="danger">按钮</lin-button>
    </div>

     <div class="row">
      <lin-button plain round>按钮</lin-button>
      <lin-button plain round type="primary">按钮</lin-button>
      <lin-button plain round type="sucess">按钮</lin-button>
      <lin-button plain round type="info">按钮</lin-button>
      <lin-button plain round type="warning">按钮</lin-button>
      <lin-button plain round type="danger">按钮</lin-button>
    </div>

    <div class="row">
      <lin-button plain circle>按钮</lin-button>
      <lin-button plain circle type="primary">按钮</lin-button>
      <lin-button plain circle type="sucess">按钮</lin-button>
      <lin-button plain circle type="info">按钮</lin-button>
      <lin-button plain circle type="warning">按钮</lin-button>
      <lin-button plain circle type="danger">按钮</lin-button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.row {
  margin-bottom: 20px;
  .lin-button {
    margin-right: 20px;
  }
}
</style>
