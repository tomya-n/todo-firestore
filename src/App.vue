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
      todos: firebase.database().ref("test").once("value",function(obj){
        return obj.val();
      }),
    }
  },
  methods:{
    handleParentAddTodo(value){
      const db = firebase.database();
      if(value){
        db.ref("test/").push(
          {text: value, complete: false}
        ).then(response => {
          console.log(response , "登録成功！");
        })
        // this.todos.unshift({text: value, complete: false});
      }
    },
    handleParentDeleteTodo(index){
      // this.todos.splice(index,1);
      const db = firebase.database();
      db.ref("test/").child(index).remove();
    },
    handleParentCompleteTodo(index){
      this.todos[index].complete = !this.todos[index].complete;
    }
  },
  mounted(){
    firebase.database().ref("test")
      .on("value", snapshot => (this.todos = snapshot.val()));
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
