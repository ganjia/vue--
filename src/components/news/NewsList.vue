<template>
    <div>
        <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="(item,index) in newslist" :key="index">
					<router-link :to='"/home/newsinfo/"+item.id'>
						<img class="mui-media-object mui-pull-left" :src="item.logo">
						<div class="mui-media-body">
							<h3>{{item.title}}</h3>
							<p class="mui-ellipsis">
                                <span>发表时间：{{item.time}}</span>
                                <span>点击次数：{{item.cishu}}次</span>
                            </p>
						</div>
					</router-link>
				</li>
			</ul>
    </div>
</template>
<script>
import {Toast } from 'mint-ui';
export default{
    data () {
        return {
            newslist:[]
        }
    },
    created() {
        this.getNewsList()
    },
    methods: {
        getNewsList(){
            var that = this;
            this.$http.get('home.json').then(function(res) {
                console.log(res)
                if (res.status == 200) {
                    that.newslist = res.data.newslist
                    console.log(that.newslist)
                } else {
                    Toast('获取失败');
                }

            })
        }
    }
}
</script>
<style scoped>
.mui-media-body h3{
    font-size: 14px
}
.mui-ellipsis {
    font-size: 12px;
    color: #226aff;
    display: flex;
    justify-content: space-between
}
</style>
