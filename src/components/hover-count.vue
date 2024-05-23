

<script>

import counterMixin from '../mixins/counter'
import counterMixin2 from '../mixins/counter2'
import {usecomposablecounter} from '../composable/incrementcounter'

export default {
 name:'hover-count',
 mixins:[counterMixin,counterMixin2],
  setup(){

    const  {counter} = usecomposablecounter()

    return{
      counter
    }
  }
}
// setup(){
//   const  {incrementcount,counter} = usecomposablecounter()
// }


// export default {
// name:'hover-count',
// mixins:[counterMixin,counterMixin2]

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
// }
</script>
<template>
  <h1 @mouseover="increasecount">Hoverd {{count}} times</h1>
  <h2 @mouseover="increasecount">Hoverd two {{counts}} times</h2>
  <h3 @mouseover="incrementcount">Hoverd by composables {{counter}} times</h3>
</template>
<style>

</style>