import {ref,onMounted} from 'vue'

export function usecomposablecounter(){
    const counter= ref(0)

    function incrementcount () {
        counter.value +=2
    }

    onMounted(() => window.addEventListener('mouseover', incrementcount))
    
    return{
        counter
    }
}