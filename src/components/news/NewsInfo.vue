<template>
    <div>
        <h3>新闻详情页面------{{id}}</h3>
        <comment v-bind:idNum="id"></comment>
    </div>
</template>
<script>
   import comment  from '../subcomponents/Comment'
    export default{
        data(){
            return{
                id:this.$route.params.id
            }
        },
        components:{
            comment
        }
    }
</script>
<style scoped>

</style>

