<template>
  <div id="app">
    <Header :title="title"/>
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
      title: "Todo",
      todos: firebase.database().ref("test").once("value",function(obj){
        return obj.val();
      }),
    }
  },
  methods:{
    handleParentAddTodo(value){
      if(value){
        firebase.database().ref("test/").push(
          {text: value, complete: false}
        ).then(response => {
          console.log(response , "登録成功！");
        })
      }
    },
    handleParentDeleteTodo(index){
      firebase.database().ref("test/").child(index).remove();
    },
    handleParentCompleteTodo(index){
      firebase.database().ref("test/").child(index).on("value",snapshot=>{
        console.log(snapshot.val().complete);
      })
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
