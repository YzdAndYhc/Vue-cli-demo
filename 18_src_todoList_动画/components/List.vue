<template>
    <ul class="todo-main">
      <transition-group name="todo" appear>
        <item 
          v-for="todoObj in todos" 
          :key="todoObj.id" 
          :todo="todoObj" 
        />
      </transition-group>
    </ul>
</template>

<script>
    import Item from '../components/Item.vue'
    export default {
        name:'List',
        components:{Item},
        props:['todos']
    }
</script>

<style scoped>
      /*main*/
  .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }

  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }
  .todo-enter-active{
    animation: cartoon 1s;
  }
  .todo-leave-active{
    animation: cartoon 1s reverse;
  }
  @keyframes cartoon{
    from{
        transform: translateX(100%);
    }
    to{
        transform: translateX(0px);
    }
  }
</style>