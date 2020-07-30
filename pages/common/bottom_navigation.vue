<template>
	<gracePage :customHeader="false">
		
		<view class="grace-footer grace-grids grace-nowrap" slot="gFooter">
			<view class="grace-grids-items grace-relative" v-for="(item, index) in footerItems" :key="index" @tap="changeFooter(index)">
				<text class="grace-grids-icon grace-icons" :class="[item[0], footerCurrent == index ? 'grace-footer-active' : '']"></text>
				<text class="grace-grids-text" :class="[footerCurrent == index ? 'grace-footer-active' : '']">{{ item[1] }}</text>
			</view>
		</view>
	</gracePage>
</template>
<script>
import gracePage from '@/graceUI/components/gracePage.vue';
export default {
	data() {
		return {
			footerCurrent: 1,
			footerItems: [
				//数据格式
				// 图标样式 名称 消息数量
				['icon-wifi', '首页', 0],
				['icon-weibo', '资讯', 0],
				['icon-weixin', '发帖', 0],
				['icon-qq', '道具', 0],
				['icon-help1', '我的', 0]
			]
		};
	},
	methods: {
		changeFooter: function(index) {
			this.footerCurrent = index;
			this.$emit('childFn', this.footerCurrent);
		}
	},
	components: {
		gracePage
	}
};
</script>
<style lang="scss" scoped>
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
