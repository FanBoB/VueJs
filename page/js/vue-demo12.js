var exampleOne = new Vue({
	el:'#exampleOne',
	data:{
		items:[
			{message:'One'},
			{message:'Two'}
		]
	}
})

var exampleTwo = new Vue({
	el:'#exampleTwo',
	data:{
		parentMessage:'Parent',
		items:[
			{message:'One'},
			{message:'Two'}
		]
	}
})