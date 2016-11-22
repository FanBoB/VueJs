var vm = new Vue({
	data: {
		a:1
	},
	created:function(){		//实例已经创建完成之后被调用
		console.log('a is:'+this.a)
		//this  指向vm
	}
})