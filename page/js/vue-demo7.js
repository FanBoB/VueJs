var appFilter = new Vue({
	el:"#appFilter",
	data:{
		message:"fan"
	},
	filters: {
		capitalize:function(value){
			if(!value) return ''
			value = value.toString()
			return value.charAt(0).toUpperCase() + value.slice(1)
		}
	}
})