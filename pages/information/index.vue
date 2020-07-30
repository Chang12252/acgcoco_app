<template>
	<gracePage headerBG="#FFFFFF" loadingBG="rgba(255,255,255,1)" :isLoading="pageLoading">
		<!-- 菜单 -->
		<view id="enum" slot="gHeader" style="padding:0 25rpx;"><graceNavBar :items="tabs" :currentIndex="currentIndex" @change="navChange"></graceNavBar></view>
		<!-- 正文内容 -->
		<view slot="gBody" class="grace-flex-v1" id="gBody">
			<swiper :style="{ height: mainHeight + 'px' }" class="width100" :current="currentIndex" @change="swiperChange">
				<swiper-item v-for="(item, index) in tabs" :key="index">
					<scroll-view scroll-y="true" :style="{ height: mainHeight + 'px' }">
						<!-- 轮播图 -->
						<u-swiper :list="swiperList" name="url" height="350" border-radius="0" v-show="currentIndex == 1" class="mbottom5"></u-swiper>
						<!-- 数据 -->
						<view class="flexRow borBottom1 height200r" v-for="(index, item) in 22" :key="index">
							<view class="flexColumn width60 mainCenter">
								<view class="flexRow alignCenter font30r flexGrow3"><text>彩虹六号玩家当排位</text></view>
								<view class="flexRow flexGrow1 colorGrey between font20r">
									<text>彩虹六号:2020-06-20</text>
									<text class="mright5">55</text>
								</view>
							</view>
							<view class="width40 center">
								<image src="https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg" class="postitionBelow width90 height170r radius10r" />
								<image src="../../static/app-icon.png" class="width50r height50r postitionUp" />
							</view>
						</view>

						<view class="height550r flexColumn borBottom1">
							<view class="flexRow mtop2 between">
								<view class="flexRow alignCenter">
									<view><u-avatar src="http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg"></u-avatar></view>
									<view class="flexColumn mleft2">
										<view class="font40r">SPURSS</view>
										<view class="font20r colorGrey">彩虹六号-围攻</view>
									</view>
								</view>
								<view class="width20 font20r colorGrey flexRow mainCenter height80">
									<text class="width50">550</text>
									<text class="width50">1055</text>
								</view>
							</view>
							<view class="flexGrow2 lineh40r">
								<view class="font30r mtop2">求大佬们的花园教学车</view>
								<view class="font25r height150r colorGrey mtop2">
									之前发帖被一群打过就是没打过再次发帖澄清下没打过就是没打过再次发帖澄清下。玩了300小时了，真就什么突袭都没打过，一直和三两个小伙伴天天各种白给。
									，一直和三两个小伙伴天天各种白给，一直和三两个小伙伴天天各种白给
								</view>
								<view class="mtop3">
									<image src="https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg" class="radius10r width31 mright2 height170r" />
									<image src="https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg" class="radius10r width31 mright2 height170r" />
									<image src="https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg" class="radius10r width31 mright2 height170r" />
								</view>
							</view>
						</view>
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
	</gracePage>
</template>
<script>
import gracePage from '../../graceUI/components/gracePage.vue';
import graceNavBar from '../../graceUI/components/graceNavBar.vue';
export default {
	data() {
		return {
			currentIndex: 1,
			tabs: ['关注', '全部', '动漫', '游戏', '小说', '专栏', '专栏', '专栏', '专栏', '专栏'],
			dataTable: [],
			mainHeight: 500,
			pageLoading: false,
			swiperList: [
				{
					id: 0,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg'
				},
				{
					id: 2,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
				},
				{
					id: 3,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
				},
				{
					id: 4,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg'
				},
				{
					id: 5,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg'
				},
				{
					id: 6,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg'
				}
			]
		};
	},
	created: function() {
		
		let that = this;
		setTimeout(() => {
			uni.createSelectorQuery()
				.select('#enum')
				.fields({ size: true }, res => {
					that.mainHeight= that.$store.state.screenHeight - that.$store.state.bottomHeight - that.$store.state.informHeight - res.height;
					console.log("导航高度",res.height);
				})
				.exec();
		}, 500);
		
		setTimeout(() => {
			console.log("屏幕高度",that.$store.state.screenHeight);
			console.log("底部导航",that.$store.state.bottomHeight);
			console.log("通知栏高度",that.$store.state.informHeight);
			console.log("屏幕高度",that.$store.state.screenHeight);
			console.log("内容高度",that.mainHeight);
		},1500);
	},
	methods: {
		navChange: function(e) {
			this.currentIndex = e;
			console.log('顶部导航', e);
		},
		swiperChange: function(e) {
			var index = e.detail.current;
			this.currentIndex = index;
			console.log('index', index);
		}
	},

	components: { gracePage, graceNavBar }
};
</script>