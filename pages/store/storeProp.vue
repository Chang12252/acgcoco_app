<template>
	<view>
		<scroll-view scroll-x class="bg-white nav" scroll-with-animation>
			<view class="cu-item" :class="0==TabCur?'text-green cur':''" key="0" @tap="tabSelect" :data-id="0">
				为您推荐
			</view>
		</scroll-view>

		<view class="flexClumn mleft4 width92 mtop5">
			<view class="flexRow row" v-for="(item , index) in  10" :key="index" >
				<view class="width40 center">
					<image src="https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg" class="radius width95 swiperclass" />
				</view>
				<view class="center width60">
					<view class="flexClumn width100">
						<view class="title">
							绝地求生
						</view>
						<view class="flexRow between mtop2">
							<view class="priceBg">
								<text class="price">￥500</text>
								<text class="original">￥600</text>
							</view>
							<view class="finish">
								07-09 截止
							</view>
						</view>
					</view>
				</view>
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
		background-color: #FFFFFF;
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
		background-color: #DCDFE6;
		font-size: 15rpx;
		width: 30%;
	}

	.price {
		font-family: SimHei;
		font-size: 20rpx;
		font-weight: 700;
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
</style>
