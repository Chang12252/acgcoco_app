import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
const store = new Vuex.Store({
	state: { //唯一数据源，可以理解为声明全局变量
		screenHeight: 1,  //屏幕高度
		bottomHeight: 1,   // 底部导航高度
		informHeight: 1    ,// 通知栏高度 
		
	},
	mutations: {  //逻辑处理，但Mutation 必须是同步函数
		
	},
	actions:{ //Action 类似于 mutation,Action 提交的是 mutation，而不是直接变更状态;Action 可以包含任意异步操作.
			
	}
	
});
export default store
