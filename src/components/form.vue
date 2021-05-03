<template>
  <div>
    <input type="text" v-model="value">
    <span id="submit" @click="handleAddTodo()" class="btn">登録</span>
  </div>
</template>

<script>
export default {
  name: 'Form',
  data(){
    return{
      value: ""
    }
  },
  methods: {
    handleAddTodo(){
      this.$emit('handleParentAddTodo',this.value);
      this.value = "";
    }
  }
}
</script>

<style>
  #submit{
    cursor: pointer;
    margin-left: 10px;
  }
</style>