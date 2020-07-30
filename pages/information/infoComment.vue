<template>
	<view>
		<view class="cu-bar bg-white">
			<cu-custom bgColor="bg-gradual-green" :isBack="false">
				<block slot="content">菜单滚动条</block>
			</cu-custom>
		</view>
		<view>
			<view class="dataBg">
				<view class="godup">
					<view>
						<image src="https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg" class="bgimg radius" />
					</view>
					<view class="titleText">
						<text>《逃离塔芙卡》 停机维护通知</text>
					</view>
					<!-- 头像 名称  -->
					<view class="height25 ptop5 flex">
						<view class="width15">
							<u-avatar src="http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg"></u-avatar>
						</view>
						<view class="flex flexGrow flexColumn">
							<view class="height50 uname">SPURS</view>
							<view class="height50 topic">彩虹六号-围攻</view>
						</view>
						<view class="width25 attention">
							<text class="cuIcon-comment">关注</text>
						</view>
					</view>
					<!-- 标签 -->
					<view class="flex">
						<view class="label">
							PC游戏
						</view>
						<view class="label">
							FPX游戏
						</view>
					</view>
					<view class="ptop5">
						<text >
							nodes="这里是TM的富文本啊积分卡收到啦和房间美少女尽可能高卡马拉松DNF尽可能地建国门可那地方开了个借记卡浪费你打开发你的麦克风暖即使那份接口了党内法规吗，。水电费进口量进口量马卡洛夫你手动结克难奋进可视电话梦里啥都解放军克莱德曼率你们，徐女模吗，处女进口量的价格麦理浩径房工具开了房就每个风口浪尖发几个考虑到放假付款教练的设计费积分咖豆鸡肤鹤发抗裂砂浆焚枯食淡开了房解放军开始懂了就反馈辣椒粉injection
								的数据库老妇女上课了的房间刻录机空间发犒劳三军发快乐圣诞节佛犒劳三军发困了就睡的哦 莱克斯顿荆防颗粒送积分看两三点"
						</text>
					</view>

				</view>
			</view>

			<!-- 评论 -->
			<view class="dataBg mtop2">
				<view class="godup">
					<view>
						<text class="allComp">全部评论</text>
					</view>
					<view class="mtop2 flex">
						<view class="width13">
							<u-avatar src="http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg" style="width: 80rpx;	height: 80rpx;"></u-avatar>
						</view>
						<view class="flex flexGrow flexColumn">
							<view class="height50">神偷</view>
							<view class="flex">
								<view class="height50 mright2 bgcolorA56">热评</view>
								<view class="height50">6小时前</view>
							</view>
						</view>
						<view class="width20 flex between">
							<view><text class="cuIcon-comment"></text>10400</view>
							<view><text class="cuIcon-comment"></text></view>
						</view>
					</view>
					<view class="width85 mleft13">
						<view class="mtop2">这里是文字评论这里是文字评论这里是文字评论这里是文字评论这里是文字评论这里是文字评论这里是文字评论这里是文字评论这里是文字评论这里是文字评论这里是文字评论这里是文字评论</view>
						<view class="mtop2 flex wrap width80">
							<image src="https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg" class="comImg radius" />
							<image src="https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg" class="comImg radius" />
							<image src="https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg" class="comImg radius" />
							<image src="https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg" class="comImg radius" />
							<image src="https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg" class="comImg radius" />
							<image src="https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg" class="comImg radius" />
							<image src="https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg" class="comImg radius" />
							<image src="https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg" class="comImg radius" />
							<image src="https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg" class="comImg radius" />
						</view>

						<view class="width90 fixed flexColumn bgcolrEB">
							<view class="flex wrap">
								<view class="user">伊万诺夫斯基</view>
								<view class="reply">回复</view>
								<view class="replyUser">scesimple：</view>
								<view>我们是军舰，实在不行不行来asdfasd条龙也行啊qaq,</view>
							</view>
							<view class="queryAll flex jcenter">
								<view>查看全部</view>
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

			}
		},
		methods: {

		}
	}
</script>

<style>
	.bubble {
		background-color: #909399;
		width: 100rpx;
		margin-right: 2%;
		margin-bottom: 2%;
	}

	body {
		background-color: #ecf5ff;
	}

	.dataBg {
		width: 100%;
		flex-direction: column;
		background-color: #FFFFFF;
		margin-top: 2%;
	}

	.godup {
		width: 94%;
		margin-left: 3%;
		display: flex;
		flex-direction: column;
		padding-bottom: 5%;
	}

	.titleText {
		font-size: 40rpx;
	}

	.radius {
		border-radius: 8rpx;
	}

	.label {
		background-color: #8799A3;
		border-radius: 10rpx;
		margin-right: 15rpx;
		margin-top: 2%;
	}

	.bgimg {
		width: 100%;
		height: 400rpx;
	}

	.ptop5 {
		padding-top: 5%;
	}

	.width3 {
		width: 3%;
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

	.width88 {
		width: 88%;
	}

	.width94 {
		width: 94%;
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

	.width100 {
		width: 100%;
	}

	.flex {
		display: flex;
	}

	.flexColumn {
		flex-direction: column;
	}

	.flexGrow {
		flex-grow: 1
	}

	.uname {
		font-family: SimHei;
		font-weight: bold;
		font-size: 40rpx;
	}

	.topic {

		color: #8799A3;
		font-size: 20rpx;
	}

	.attention {

		color: #8799A3;
		font-size: 20rpx;

		font-size: 30rpx;
		justify-content: flex-end;
		display: flex;
	}

	.pleft10 {
		padding-left: 50%;
	}




	/* 评论css */

	.mtop2 {
		margin-top: 2%;
	}

	.allComp {
		font-size: 30rpx;
		border-bottom: 1px solid #19BE6B;
		font-weight: 700rpx;
	}

	.mright2 {
		margin-right: 2%;
	}

	.mleft13 {
		margin-left: 13%;
	}

	.bgcolorA56 {
		background-color: #DD514C;
	}

	.between {
		justify-content: space-between;
	}

	.wrap {
		flex-wrap: wrap;
	}

	.comImg {
		width: 30%;
		height: 150rpx;
		margin-right: 1%;
		margin-bottom: 1%;
	}

	.bgcolrEB {
		background-color: #EBEEF5;
	}

	.user {
		color: #0081FF;
		margin-right: 2%;
	}

	.replyUser {
		margin-left: 2%;
	}

	.reply {
		color: #8799A3;
	}

	.queryAll {
		color: #8799A3;
	}

	.jcenter {
		justify-content: center;
	}
</style>
