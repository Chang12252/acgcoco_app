<template>
	<view>
		<view>
			<video class="width100" src="https://vdept.bdstatic.com/5a66636551725a6551756a6e6b557935/55797a58504e5a68/cfcb03d85e61df7d8f3a808b7908f441a13995296c30072baea6c965830aacdd0e45d9ac3f72154dda6aa1f3c4e00d33.mp4?auth_key=1593341535-0-0-0758873666d20642558b196d2e9e98e5">
			</video>
			<u-tabs :list="list" :is-scroll="false" :current="current" @change="change"></u-tabs>
			<view class="dataBg">
				<view class="godup">
					<view class="mtop2 flex">
						<view class="width13">
							<u-avatar src="http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg" style="width: 80rpx;	height: 80rpx;"></u-avatar>
						</view>
						<view class="flex flexGrow flexColumn">
							<view class="height50">神偷</view>
							<view class="flex">
								<!-- <view class="height50 mright2 bgcolorA56">热评</view> -->
								<view class="height50">共5个视频</view>
							</view>
						</view>
						<view class="width20 flex between">
							<view>关注</view>
						</view>
					</view>
					<veiw>
						<text>10小时前 1000次浏览 1条评论</text>
						<text>英雄联盟</text>
					</veiw>
					<veiw>
						<rich-text nodes="爹照着打半天的子全TM的丢了。爹照着打半天的子全TM的丢了。爹照着打半天的子全TM的丢了。爹照着打半天的子全TM的丢了。爹照着打半天的子全TM的丢了。爹照着打半天的子全TM的丢了。">
						</rich-text>
					</veiw>
					<view class="flex flexColumn mtop2">
						<view  class="flex justify-between">
							<view class="flex jcenter">
								<view class="bubble ">点赞</view>
								<view class="bubble">踩</view>
							</view>
							<view class="flex">
								<view class="bubble">收藏</view>
								<view class="bubble">分享</view>
							</view>
						</view>
						<view class="reply">
							<text>阅读1.5W</text>
						</view>
					</view>
					
				</view>
				<view></view>
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
</template>

<script>
	export default {
		data() {
			return {
				list: [{
					name: '简介'
				}, {
					name: '评论'
				}],
				current: 0
			}
		},
		methods: {
			change(index) {
				this.current = index;
			}
		}
	}
</script>

<style>
	.bubble{
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
		justify-content:flex-end;
		margin-right: 2%;
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
