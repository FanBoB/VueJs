var static = new Vue({
	el:'.static',
	data:{
		isActive: true,
		hasError: false
	}
})
//v-bind 绑定class  与原class不冲突

var textClassObj = new Vue({
	el:'.textClassObj',
	data:{
		classObject:{
			active:true,
			'text-danger':false
		}
	}
})
//

var testActive = new Vue({
	el:'.testActive',
	data:{
		isActive:true,
		error:null
	},
	computed:{
		classObject:function(){
			return {
				active: this.isActive && !this.error,
				'text-danger':this.error && this.error.type === 'fatal',
			}
		}
	}
})


var classArray = new Vue({
	el:'.classArray',
	data:{
		activeClass:'active',
		errorClass:'text-danger'
	}
})