var app = new Vue({
	el: '#app',
	data:{
		message: 'Hello Vue!'
	}
})

var appTwo = new Vue({
	el: '#appTwo',
	data:{
		message:'You loaded this page on ' + new Date()
	}
})