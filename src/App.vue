<template>
    <div>
     <button>原生的button</button> 
     <input type="text">

     <atguigu-row>
      <atguigu-button>Default</atguigu-button>
      <atguigu-button type="primary">Primary</atguigu-button>
      <atguigu-button type="success">Success</atguigu-button>
      <atguigu-button type="info">Info</atguigu-button>
      <atguigu-button type="warning">Warning</atguigu-button>
      <atguigu-button type="danger">Danger</atguigu-button>
    </atguigu-row>
    <atguigu-date-picker
      type="date"
      placeholder="Pick a day">
    </atguigu-date-picker>
    <atguigu-row>
      <atguigu-button icon="el-icon-search" circle></atguigu-button>
      <atguigu-button type="primary" icon="el-icon-edit" circle></atguigu-button>
      <atguigu-button type="success" icon="el-icon-check" circle></atguigu-button>
      <atguigu-button type="info" icon="el-icon-message" circle></atguigu-button>
      <atguigu-button type="warning" icon="el-icon-star-off" circle></atguigu-button>
      <atguigu-button type="danger" icon="el-icon-delete" circle></atguigu-button>
    </atguigu-row>
    </div>
</template>

<script>
export default {
    name:'App'
}
</script>