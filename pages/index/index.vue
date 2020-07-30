<template>
	<gracePage :customHeader="false">
		<!-- 页面主体 -->
		<view slot="gBody" class="grace-body ">
			<information v-show="footerCurrent == 1"></information>
			
			<!-- 防止底部导航遮挡内容 -->
			<view class="width100" :style="{ height: bottonHight + 'px' }"></view>
		</view>
		<!-- 底部导航 -->
		<view class="grace-footer grace-grids grace-nowrap" slot="gFooter" id="btom">
			<view class="grace-grids-items grace-relative" v-for="(item, index) in footerItems" :key="index" @tap="changeFooter(index)">
				<text class="grace-grids-icon grace-icons" :class="[item[0], footerCurrent == index ? 'grace-footer-active' : '']"></text>
				<text class="grace-grids-text" :class="[footerCurrent == index ? 'grace-footer-active' : '']">{{ item[1] }}</text>
				<view class="grace-badge grace-bg-red grace-badge-absolute grace-white" v-if="item[2] > 0" style="top:15rpx; right:15rpx;">8</view>
			</view>
		</view>
	</gracePage>
</template>
<script>
import gracePage from '../../graceUI/components/gracePage.vue';
import information from '../information/index.vue';
export default {
	data() {
		return {
			footerCurrent: 1,
			footerItems: [
				//数据格式
				// 图标样式 名称 消息数量
				['icon-wifi', 'wifi', 0],
				['icon-weibo', '微博', 0],
				['icon-weixin', '微信', 0],
				['icon-qq', 'QQ', 0],
				['icon-help1', '帮助', 0]
			],
			bottonHight: 68
		};
	},
	created: function() {
		let that=this;
		uni.getSystemInfo({
			success: function(res) {
				that.$store.state.screenHeight=res.screenHeight;
				that.$store.state.informHeight=res.statusBarHeight;
			}
		});
		setTimeout(() => {
			uni.createSelectorQuery()
				.select('#btom')
				.fields({ size: true }, res => {
					console.log(res.height);
					that.$store.state.bottomHeight=res.height;
						console.log(that.$store.state.bottomHeight);
				})
				.exec();
		}, 5);
		
	},
	methods: {
		changeFooter: function(index) {
			this.footerCurrent = index;
			console.log('底部导航index', index);
		}
	},
	components: {
		gracePage,
		information
	}
};
</script>
<style>
/* 调整宫格大小 */
.grace-grids-items {
	width: 150rpx;
}
.grace-grids-icon {
	height: 60rpx;
	line-height: 60rpx;
	font-size: 50rpx;
	color: #6b7375;
}
.grace-grids-text {
	line-height: 30rpx;
	font-size: 20rpx;
	margin-top: 2px;
	color: #6b7375;
}
.grace-footer-active {
	color: #3688ff !important;
}

.grace-grids-items2 {
	padding: 6rpx 0;
	width: 120rpx;
}
.grace-grids-icon2 {
	height: 50rpx;
	line-height: 50rpx;
	font-size: 40rpx;
	color: #6b7375;
}
.grace-grids-text2 {
	line-height: 28rpx;
	font-size: 20rpx;
	margin-top: 2px;
	color: #6b7375;
}
</style>
