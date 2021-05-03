<template>
  <div id="app">
    <Header/>
    <Form @handleParentAddTodo="handleParentAddTodo"/>
    <List :todos="todos"
          @handleParentDeleteTodo="handleParentDeleteTodo"
          @handleParentCompleteTodo="handleParentCompleteTodo" />
  </div>
</template>

<script>
import Header from './components/header.vue';
import Form from './components/form.vue';
import List from './components/list.vue';
import firebase from 'firebase';

export default {
  name: 'App',
  components: {
    Header,
    Form,
    List
  },
  data(){
    return {
      todos: firebase.database().ref("test").once("child_added",function(obj){
        console.log(obj.key);
        console.log(obj.val());
      })
    }
  },
  methods:{
    handleParentAddTodo(value){
      const db = firebase.database();
      if(value){
        db.ref("test/").push(
          {text: value, complete: false}
        )
        // this.todos.unshift({text: value, complete: false});
      }
    },
    handleParentDeleteTodo(index){
      this.todos.splice(index,1);
    },
    handleParentCompleteTodo(index){
      this.todos[index].complete = !this.todos[index].complete;
    }
  }
}
</script>

<style>
#app {

}
.btn{
  border: 1px solid #000;
  border-radius: 5px;
  padding: 3px;
}
</style>
