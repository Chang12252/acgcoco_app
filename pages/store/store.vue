<template>
	<view>
		<scroll-view scroll-x class="bg-white nav" scroll-with-animation>
			<view class="cu-item" :class="0==TabCur?'text-green cur':''" key="0" @tap="tabSelect" :data-id="0">
				装备交易
			</view>
			<view class="cu-item" :class="1==TabCur?'text-green cur':''" key="1" @tap="tabSelect" :data-id="1">
				自由回收
			</view>
		</scroll-view>
		<view class="wrap ptop5">
			<u-swiper :list="list" border-radius="8" height="350" effect3d></u-swiper>
		</view>
		<view class="flexClumn mleft4 width92">
			<view class="mtop5">
				<view class="flexRow between">
					<view class="title">为您推荐</view>
					<view class="more">更多 ></view>
				</view>
				<view class="mtop2 flexRow between wrap">
					<view class="flexClumn width48 mtop5" v-for="(item,index) in 4" :key="index">
						<image src="https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg" class="cover radius" />
						<text class="intro mtop2">彩虹六号：无敌闪光盾</text>
						<view class="mtop2 flexRow">
							<view class="price priceBg">￥500</view>
							<view class="original priceBg">￥600</view>
						</view>
					</view>
				</view>
			</view>

			<view class="mtop10">
				<view class="flexRow between">
					<view class="title">道具商城</view>
					<view class="more">更多 ></view>
				</view>
				<view class="mtop2 flexRow between wrap">
					<view class="flexClumn width48 mtop5" v-for="(item,index) in 4" :key="index">
						<image src="https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg" class="cover radius" />
						<text class="intro mtop2">彩虹六号：无敌闪光盾</text>
						<view class="mtop2 flexRow">
							<view class="price priceBg">￥500</view>
							<view class="original priceBg">￥600</view>
						</view>
					</view>
				</view>
			</view>


			<view class="mtop10">
				<view class="flexRow between">
					<view class="title">周边商城</view>
					<view class="more">更多 ></view>
				</view>
				<view class="mtop2 flexRow between wrap">
					<view class="flexClumn width48 mtop5" v-for="(item,index) in 4" :key="index">
						<image src="https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg" class="cover radius" />
						<text class="intro mtop2">彩虹六号：无敌闪光盾</text>
						<view class="mtop2 flexRow">
							<view class="price priceBg">￥500</view>
							<view class="original priceBg">￥600</view>
						</view>
					</view>
				</view>
			</view>


			<view class="mtop10">
				<view class="flexRow between">
					<view class="title">最新上架</view>
					<view class="more">更多 ></view>
				</view>
				<view class="mtop2 flexRow between wrap">
					<view class="flexClumn width48 mtop5" v-for="(item,index) in 4" :key="index">
						<image src="https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg" class="cover radius" />
						<text class="intro mtop2">彩虹六号：无敌闪光盾</text>
						<view class="mtop2 flexRow">
							<view class="price priceBg">￥500</view>
							<view class="original priceBg">￥600</view>
						</view>
					</view>
				</view>
			</view>

		</view>

		<view class="mtop10 mleft4">
			<view class="flexRow between">
				<view class="title">成功案例</view>
			</view>
			<view class="swiperView">
				<swiper class="swiper mtop5 swiperclass width100" :duration="duration" circular="true" next-margin="20rpx">
					<swiper-item>
						<image src="https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg" class="radius width99 swiperclass" />
					</swiper-item>
					<swiper-item>
						<image src="https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg" class="radius width99 swiperclass" />
					</swiper-item>
					<swiper-item>
						<image src="https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg" class="radius width99 swiperclass" />
					</swiper-item>
				</swiper>
			</view>
		</view>


	</view>
</template>

<script>
	export default {
		data() {
			return {
				TabCur: 0,
				scrollLeft: 0,
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
				],
				background: ['color1', 'color2', 'color3'],
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500
			}
		},
		methods: {
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
			}
		}
	}
</script>

<style>
	body {
		background-color: #ecf5ff;
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

	.width48 {
		width: 48%;
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
		font-size: 40rpx;
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
		background-color: #DCDFE6;
	}

	.price {
		font-family: SimHei;
		font-size: 20rpx;
	}

	.original {
		text-decoration: line-through;
		font-size: 20rpx;
		margin-left: 2%;
	}

	.radius {
		border-radius: 10rpx;
	}

	.swiperView {
		height: 500rpx;
	}

	.swiperclass {
		height: 350rpx;
	}
</style>
