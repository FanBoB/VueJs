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

var appWatch = new Vue({
	el:'#appWatch',
	data:{
		firstName:'Foo',
		lastName:'Bar',
		fullName:'Foo Bar'
	},
	watch:{
		firstName:function(val){
			this.fullName = val + ' ' + this.lastName
		},
		lastName:function(val){
			this.fullName = this.firstName + ' ' + val
		}
	}
})
// 监控firtsName lastName  若改变 则动态改变数值 并传递给fullName



/* var appWatchTwo = new Vue({
	el:'#appWatch',
	data:{
		firstName:'Foo',
		lastName:'Bar'
	},
	computed:{
		fullName:function(){
			return this.firstName + ' ' + this.lastName
		}
	}
}) */
//计算属性 可通过This来获取data内的值



var appGetter = new Vue({
	el:'#appGetter',
	data:{
		firstName:'Foo',
		lastName:'Bar'
	},
	computed:{
		fullNameTwo:{
			get:function(){
				return this.firstName + ' ' + this.lastName
			},
			set:function(newValue){
				var names = newValue.split(' ')
				this.firstName = names[0]
				this.lastName = names[names.length - 1]
			}
		}
	}
})

//计算属性  get获取 set设置  computed  默认只有get 
//运行 appGetter.fullNameTwo = 'John Doe' 时， set 会被调用、 appGetter.firstName 和 appGetter.lastName 也会被对应更新
//




















