var appMu = new Vue({
	el:"#appMu",
	data:{
		msg:"<h2>H2</h2>"
	}
})
//v-html  把h2解析为html  不会解析成字符串

var appTest = new Vue({
	el:"#appTest",
	data:{
		status:false
	}
})

var appTestTwo = new Vue({
	el:"#appTestTwo",
	data:{
		num:5
	}
})

var appTestThree = new Vue({
	el:"#appTestThree",
	data:{
		text:"My Life"
	}
})