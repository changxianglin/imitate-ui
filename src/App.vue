<template>
  <div id="app">
    <div class="row">
      <lin-button @click="fn">按钮</lin-button>
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
      <lin-button plain icon="lin-icon-delete" round>按钮</lin-button>
      <lin-button plain icon="lin-icon-delete" round type="primary">按钮</lin-button>
      <lin-button plain icon="lin-icon-delete" round type="sucess">按钮</lin-button>
      <lin-button plain icon="lin-icon-delete" round type="info">按钮</lin-button>
      <lin-button plain icon="lin-icon-delete" round type="warning">按钮</lin-button>
      <lin-button plain icon="lin-icon-delete" round type="danger">按钮</lin-button>
    </div>

    <div class="row">
      <lin-button plain circle>按钮</lin-button>
      <lin-button plain circle type="primary">按钮</lin-button>
      <lin-button plain circle type="sucess">按钮</lin-button>
      <lin-button plain circle type="info">按钮</lin-button>
      <lin-button plain circle type="warning">按钮</lin-button>
      <lin-button plain circle type="danger">按钮</lin-button>
    </div>

    <div class="row">
      <lin-button plain icon="lin-icon-delete" circle></lin-button>
      <lin-button plain icon="lin-icon-delete" circle type="primary"></lin-button>
      <lin-button plain icon="lin-icon-delete" circle type="sucess"></lin-button>
      <lin-button plain icon="lin-icon-delete" circle type="info"></lin-button>
      <lin-button plain icon="lin-icon-delete" circle type="warning"></lin-button>
      <lin-button plain icon="lin-icon-delete" circle type="danger"></lin-button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    fn () {
      console.log(123)
    }
  }
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
