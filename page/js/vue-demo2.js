var appThree = new Vue({
	el: '#appThree',
	data:{
		seen: true
	}
})
//appThree.seen = false  就会隐藏

var appFour = new Vue({
	el:"#appFour",
	data:{
		todos:[
			{text:"One"},
			{text:"Two"},
			{text:"Three"}
		]
	}
})
//appFour.todos.push({ text: 'New item' })。你会发现列表中多了一栏新内容