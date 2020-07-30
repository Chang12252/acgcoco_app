<template>
	<view>
		<view style="padding-top: 10%;" class="flexClumn width94 centre">
			<u-swiper :list="list" height="650" mode="number" border-radius="0"></u-swiper>
			<view style="background-color: #FFFFFF;" class="flexClumn width100 center">
				<view style="width: 94%; margin-bottom: 5%;" class="mtop2">
					<view style="color: red;font-size: 40rpx;">￥<text>55-105</text></view>
					<view class="flexRow mtop2">
						<text style="color: red; font-size: 25rpx; background-color: gray;margin-right: 2%;">包邮</text>
						<text style="color: red;font-size: 25rpx;  background-color:gray;margin-right: 2%;">限时优惠</text>
					</view>
					<view style="font-size: 40rpx; font-weight: 650; font-family: SimHei;">
						从零开始的异世界生活 蕾姆雷莱姆手办 周边摆件玩偶机箱 白无垢
					</view>
				</view>
			</view>

			<view style="background-color: #FFFFFF; padding-bottom: 4%; " class="flexClumn width100 center mtop2">
				<view style="width: 94%;" class="mtop2 flexRow">
					<view style="margin-right: 2%; color: #CCCCCC;">发货</view>
					<view>北京 | 快递：免运费</view>
				</view>
				<view style="width: 94%; " class="mtop2 flexRow">
					<view style="margin-right: 2%; color: #CCCCCC;">保障</view>
					<view>隔日达 现在下单，预计7月3日送达，大品牌好货</view>
				</view>
			</view>

			<view style="background-color: #FFFFFF; padding-bottom: 4%; " class="flexClumn width100 center mtop2">
				<view style="width: 94%; " class="mtop2 flexRow">
					<view style="margin-right: 2%; color: #CCCCCC;">选择</view>
					<view>共5中颜色分类可选</view>
				</view>
				<view style="width: 94%;" class="mtop2 flexRow">
					<view style="margin-right: 2%; color: #CCCCCC;">参数</view>
					<view>品牌型号</view>
				</view>
			</view>
			<view class="flexClumn width100 center mtop2">
				<view>详情哦~</view>
			</view>
		</view>
		
		
		<view class="flexClumn width100 center mtop5">
			<image src="https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg"  style="width: 100%;" mode="widthFix" />
			<image src="https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg"  style="width: 100%;" mode="widthFix" />
			<image src="https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg"  style="width: 100%;" mode="widthFix" />
			<image src="https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg"  style="width: 100%;" mode="widthFix" />
			<image src="https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg"  style="width: 100%;" mode="widthFix" />
			<image src="https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg"  style="width: 100%;" mode="widthFix" />
			<image src="https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg"  style="width: 100%;" mode="widthFix" />
		</view>
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
						image: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg',
						title: '蒹葭苍苍，白露为霜。所谓伊人，在水一方'
					},
					{
						image: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg',
						title: '溯洄从之，道阻且长。溯游从之，宛在水中央'
					},
					{
						image: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg',
						title: '蒹葭萋萋，白露未晞。所谓伊人，在水之湄'
					},
					{
						image: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg',
						title: '蒹葭萋萋，白露未晞。所谓伊人，在水之湄'
					},
					{
						image: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg',
						title: '蒹葭萋萋，白露未晞。所谓伊人，在水之湄'
					}
				]
			}
		},
		methods: {

		}
	}
</script>
<style>
	body {
		background-color: #C0C4CC;
	}

	.center {
		display: flex;
		align-items: center;
	}

	.ptop2 {
		padding-top: 2%;
	}

	.ptop5 {
		padding-top: 5%;
	}

	.mleft4 {
		margin-left: 4%;
	}

	.mbottom5 {
		margin-bottom: 5%;
	}

	.mtop2 {
		margin-top: 2%;
	}

	.mtop5 {
		margin-top: 5%;
	}

	.mtop10 {
		margin-top: 10%;
	}

	.width3 {
		width: 4%;
	}

	.width13 {
		width: 13%;
	}

	.width15 {
		width: 15%;
	}

	.width20 {
		width: 20%;
	}

	.width25 {
		width: 25%;
	}


	.width30 {
		width: 30%;
	}

	.width40 {
		width: 40%;
	}

	.width48 {
		width: 48%;
	}

	.width60 {
		width: 60%;
	}

	.width70 {
		width: 70%;
	}

	.width88 {
		width: 88%;
	}


	.width80 {
		width: 80%;
	}

	.width85 {
		width: 85%;
	}

	.width90 {
		width: 90%;
	}

	.width92 {
		width: 92%;
	}

	.width95 {
		width: 95%;
	}

	.width99 {
		width: 99%;
	}

	.width100 {
		width: 100%;
	}

	.flexClumn {
		display: flex;
		flex-direction: column;
	}

	.flexRow {
		display: flex;
		flex-direction: row;
	}

	.between {
		justify-content: space-between;
	}

	.title {
		font-family: SimHei;
		font-size: 30rpx;
		font-weight: 600;
	}

	.more {
		color: #909399;
		align-self: flex-end;
	}

	.cover {
		height: 180rpx;

	}

	.wrap {
		flex-wrap: wrap;
	}

	.intro {
		font-family: SimHei;
		font-size: 26rpx;
	}

	.priceBg {
		color: #DCDFE6;
		font-size: 28rpx;
	}

	.price {
		font-family: SimHei;
		font-size: 30rpx;
		color: red;
	}

	.finish {
		color: #C0C4CC;
		font-size: 25rpx;
	}


	.original {
		text-decoration: line-through;
		font-size: 20rpx;
		margin-left: 2%;
	}

	.radius {
		border-radius: 10rpx;
	}

	.swiperclass {
		height: 120rpx;
	}

	.row {
		height: 150rpx;
	}

	.imagRadius {
		border-radius: 10rpx 10rpx 0rpx 0rpx;
	}

	.bgf {
		background-color: #FFFFFF;
	}

	.label {
		border: 1rpx #ED1C24 solid;
		color: #ED1C24;
		font-size: 20rpx;
		margin-right: 2%;
	}
</style>
