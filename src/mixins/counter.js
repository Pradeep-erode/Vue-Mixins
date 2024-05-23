//like layout mixins can be utilized in multiple components for code reusability

export default {
    name:'counter',
    data(){
        return{
            count:3
        }
    },
    methods:{
        increasecount(){
            this.count += 1
        }
     
    }
    }