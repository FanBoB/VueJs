module.exports = function(grunt){
	grunt.initConfig({
		pkg:grunt.file.readJSON('package.json'),

		uglify:{
			options:{
				stripBanners:true,
				banner:'/*! <%=pkg.name%>-<%=pkg.version%>.js <%=grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			build:{
				src:'js/*.js',
				dest:'build/*-<%=pkg.version%>.min.js'
			}
		}
	});

	//使用插件
	grunt.loadNpmTasks('grunt-contrib-uglify');

	//在终端输入 grunt 需要做些什么
	grunt.registerTask('default',['uglify']);
}