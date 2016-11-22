var vm = new Vue({
	el:'#example',
	data:{
		message: 'Hello'
	},
	computed:{		//计算
		reversedMessage:function(){		//声明了计算属性
			return this.message.split('').reverse().join('')
		}
	}
})