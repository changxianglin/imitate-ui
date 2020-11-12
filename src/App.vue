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
