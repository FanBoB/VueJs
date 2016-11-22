Vue.component('todo-item', {
	props:['todo3'],
  	template: '<li>{{ todos.text }}</li>'
})

var appSeven = new Vue({
	el: '#appSeven',
	data:{
		todos:[
			{text:'One'},
			{text:'Two'},
			{text:'Three'}
		]
	}
})
