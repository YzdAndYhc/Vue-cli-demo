<template>
    <div id="app">
        <div class="container">
            <Search/>
            <List/>
        </div>
    </div>
</template>

<script>
import Search from './components/Search'
import List from './components/List'
    export default {
        name:'App',
        components: { Search,List },
    }
</script>