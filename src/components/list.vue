<template>
  <div>
    <li v-for="(todo, index) in todos" :key="index">
      <span>{{ todo.text }}</span>
      <button @click="handleCompleteTodo(index)">{{ todo.complete ? '完了' : '未完了' }}</button>
      <button @click="handleDeleteTodo(index)">削除</button>
    </li>
  </div>
</template>

<script>
export default {
  name: "TodoList",
  props:['todos'],
  methods: {
    handleDeleteTodo(index){
      console.log(index);
      this.$emit('handleParentDeleteTodo',index);
    },
    handleCompleteTodo(index){
      console.log(index);
      this.$emit('handleParentCompleteTodo',index);
    }
  },
};
</script>

<style>

</style>