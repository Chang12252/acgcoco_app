<template>
	<view>
		<view class="flexClumn mleft4 width92 mtop5">
			<u-waterfall v-model="flowList">
				<template v-slot:left="{leftList}">
					<view v-for="(item, index) in leftList" :key="index" class="ptop5">
						<view class="width95 flexClumn center radius bgf">
							<view class="width100">
								<image :src="item.image" mode="widthFix" class="imagRadius width100" />
							</view>
							<view class="width90">
								<view class="title">国产手办蕾姆限定</view>
								<view class="flexRow width100">
									<text class="price width40">￥150</text>
									<text class="width60 priceBg">限时抢购中</text>
								</view>
								<view class="mbottom5">
									<text class="label">包邮</text>
									<text class="label">新品</text>
								</view>
							</view>
						</view>
					</view>
				</template>
				<template v-slot:right="{rightList}">
					<view v-for="(item, index) in rightList" :key="index" class="ptop5">
						<view class="width95 flexClumn center radius bgf">
							<view class="width100">
								<image :src="item.image" mode="widthFix" class="imagRadius width100" />
							</view>
							<view class="width90">
								<view class="title">国产手办蕾姆限定</view>
								<view class="flexRow width100">
									<text class="price width40">￥150</text>
									<text class="width60 priceBg">限时抢购中</text>
								</view>
								<view class="mbottom5">
									<text class="label">包邮</text>
									<text class="label">新品</text>
								</view>
							</view>
						</view>
					</view>
				</template>
			</u-waterfall>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				loadStatus: 'loadmore',
				flowList: [],
				list: [{
						price: 35,
						title: '北国风光，千里冰封，万里雪飘',
						shop: '李白杜甫白居易旗舰店',
						image: 'http://pic.sc.chinaz.com/Files/pic/pic9/202002/zzpic23327_s.jpg',
					},
					{
						price: 75,
						title: '望长城内外，惟余莽莽',
						shop: '李白杜甫白居易旗舰店',
						image: 'http://pic.sc.chinaz.com/Files/pic/pic9/202002/zzpic23325_s.jpg',
					},
					{
						price: 385,
						title: '大河上下，顿失滔滔',
						shop: '李白杜甫白居易旗舰店',
						image: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg',
					},
					{
						price: 784,
						title: '欲与天公试比高',
						shop: '李白杜甫白居易旗舰店',
						image: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/zzpic23369_s.jpg',
					},
					{
						price: 7891,
						title: '须晴日，看红装素裹，分外妖娆',
						shop: '李白杜甫白居易旗舰店',
						image: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2130_s.jpg',
					},
					{
						price: 2341,
						shop: '李白杜甫白居易旗舰店',
						title: '江山如此多娇，引无数英雄竞折腰',
						image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23346_s.jpg',
					},
					{
						price: 661,
						shop: '李白杜甫白居易旗舰店',
						title: '惜秦皇汉武，略输文采',
						image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23344_s.jpg',
					},
					{
						price: 1654,
						title: '唐宗宋祖，稍逊风骚',
						shop: '李白杜甫白居易旗舰店',
						image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23343_s.jpg',
					},
					{
						price: 1678,
						title: '一代天骄，成吉思汗',
						shop: '李白杜甫白居易旗舰店',
						image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23343_s.jpg',
					},
					{
						price: 924,
						title: '只识弯弓射大雕',
						shop: '李白杜甫白居易旗舰店',
						image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23343_s.jpg',
					},
					{
						price: 8243,
						title: '俱往矣，数风流人物，还看今朝',
						shop: '李白杜甫白居易旗舰店',
						image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23343_s.jpg',
					},
				]
			}
		},
		onLoad() {
			this.addRandomData();
		},
		onReachBottom() {
			this.loadStatus = 'loading';
			// 模拟数据加载
			setTimeout(() => {
				this.addRandomData();
				this.loadStatus = 'loadmore';
			}, 1000)
		},
		methods: {
			addRandomData() {
				for (let i = 0; i < 10; i++) {
					let index = this.$u.random(0, this.list.length - 1);
					// 先转成字符串再转成对象，避免数组对象引用导致数据混乱
					let item = JSON.parse(JSON.stringify(this.list[index]))
					item.id = this.$u.guid();
					this.flowList.push(item);
				}
			},
			remove(id) {
				this.$refs.uWaterfall.remove(id);
			},
			clear() {
				this.$refs.uWaterfall.clear();
			}
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
