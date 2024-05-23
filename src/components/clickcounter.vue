<template>
  <button @click="increasecount">Clicked {{count}} times</button>
</template>

<script>

import counterMixin from '../mixins/counter'

export default {
name:'click-counter',
mixins:[counterMixin]

//rather than using repeated code in clickcounter and hovercounter page we can use mixins (like layout page) 

// data(){
//     return{
//         count:0
//     }
// },
// methods:{
//     increasecount(){
//         this.count += 1
//     } 
// }
}
</script>

<style>

</style>