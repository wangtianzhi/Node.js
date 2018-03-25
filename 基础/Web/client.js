var http = require('http');

// 用于请求的选项
var options = {
	host: 'localhost',
	port: '8080',
	path: '/index.html'
};

// 处理相应的回调函数
var callback = function (response) {
	// 不断更新数据
	var body = '';
	response.on('data', function (data) {
		body += data;
	});
	response.on('end', function () {
		// 数据接受完成
		console.log(body);
	});
};

// 向服务器请求数据
var req = http.request(options, callback);
req.end();