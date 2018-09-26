<template>
    <div>
        <mt-swipe :auto="4000">
            <!-- 在组件中，使用v-for循环的话，一定要使用 key -->
            <mt-swipe-item v-for="(item,index) in lunbotuList" :key="index">
                <img :src="item" alt="">
            </mt-swipe-item>
        </mt-swipe>
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
                    <span class="mui-icon mui-icon-extra mui-icon-extra-new"></span>
                    <div class="mui-media-body">新闻资讯</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
                    <span class="mui-icon mui-icon-extra mui-icon-extra-share"><span class="mui-badge">5</span></span>
                    <div class="mui-media-body">图片分享</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
                    <span class="mui-icon mui-icon-extra mui-icon-extra-order"></span>
                    <div class="mui-media-body">商购买品</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
                    <span class="mui-icon mui-icon-chatboxes"></span>
                    <div class="mui-media-body">留言反馈</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
                    <span class="mui-icon mui-icon-extra mui-icon-extra-computer"></span>
                    <div class="mui-media-body">视频专区</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
                    <span class="mui-icon mui-icon-phone"></span>
                    <div class="mui-media-body">联系我们</div></a></li>
        </ul>
        <h3>
            home
        </h3>
    </div>
</template>
<script>
import { Toast } from 'mint-ui';
export default {
    data(){
        return {
            lunbotuList:[]
        }
    },
    created () {
        this.getLunbotu()
    },
    methods: {
        getLunbotu(){  //获取轮播图数据的方法
           var that = this;
           this.$http.get('static/data/home.json').then(function (res) {
               console.log(res)
               if(res.status == 200){
                   that.lunbotuList = res.data.baner
                   console.log(that.lunbotuList)
               }else{
                   Toast('获取失败');
               }
               
           })
        }
    }
}
</script>
<style scoped>
.mint-swipe{
    height: 200px;
}
.mint-swipe-item img{
    width: 100%;
    height: 100%;
    display: inline-block
}
.mui-grid-view.mui-grid-9{
    background: #ffffff;
    border: 0
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
    border: 0
}
.mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body{
    font-size: 13px
}
</style>


