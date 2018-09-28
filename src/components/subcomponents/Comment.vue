<template>
    <div>
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="请输入BB的内容（最多吐槽120个字）" maxlength="120" v-model="content"></textarea>
        <mt-button type="primary" size="large" @click="fabiao">发表评论</mt-button>
        <div class="cmt-list">
            <div class="cmt-item" v-for="(item, index) in comments" :key="index">
                <div class="cmt-title">
                    第{{index+1}}楼&nbsp;&nbsp;用户：{{item.userName}}&nbsp;&nbsp;发表时间：{{item.time}}
                </div>
                <div class="cmt-body">
                    {{item.content}}
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            comments:[],
            content:null
        }
    },
    props: ['idNum'],
    created() {
        this.getComments()
        console.log(this.idNum)
    },
    methods:{
        getComments(){
            var that = this;
            this.$http.get('home.json').then(function(res) {
                console.log(res)
                if (res.status == 200) {
                    that.comments = res.data.comments
                    console.log(that.comments)
                } else {
                    Toast('获取失败');
                }

            })
        },
        fabiao(){
            var json = {};
            json.userName = '匿名用户'+this.idNum;
            json.time = this.getFormatDate();
            json.content = this.content;
            this.comments.push(json)
            this.content=null
            console.log(json)
            console.log(this.comments)
        },
        getFormatDate() {
            var date = new Date();
            var month = date.getMonth() + 1;
            var strDate = date.getDate();
            if (month >= 1 && month <= 9) {
                month = "0" + month;
            }
            if (strDate >= 0 && strDate <= 9) {
                strDate = "0" + strDate;
            }
            var currentDate = date.getFullYear() + "-" + month + "-" + strDate
                    + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
            return currentDate;
        }

    }
}
</script>
<style scoped>
h3{
    font-size: 18px;
}
textarea{
    font-size: 14px;
    height: 100px;
    margin: 0
}
.cmt-list,.cmt-item{
    width: 100%;
    height: auto;
}
.cmt-title{
    background: #ccc;
    font-size: 13px;
    line-height: 25px;
    margin: 5px 0
}
.cmt-body{
    font-size: 13px;
    text-indent: 8%
}
</style>

