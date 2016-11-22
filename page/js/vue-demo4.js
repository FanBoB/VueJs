var data = {a: 1}
var vm = new Vue({
	el:'#example',
	data:data
})
//每个Vue的实例 都会代理其 data对象所有属性
vm.a === data.a  //true

//设置属性也会影响到原始数据
vm.a = 2;
console.log(data.a);	//data.a = 2

data.a = 3;
console.log(vm.a);		//vm.a = 3

//Vue实例暴露一些实例属性与方法 这些属性与方法都有前缀【$】以便于代理的data属性区分
vm.$data === data 		//true
vm.$el === document.getElementById('example')	//true

vm.$watch('a',function(newVal,oldVal){	
	console.log(newVal,oldVal);
})
//监控【a】  是否改变  则改变 就调取$watch方法
//newVal 代表改变后的值 oldVal代表改变前的数值


