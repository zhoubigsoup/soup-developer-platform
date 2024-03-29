<?php
// +----------------------------------------------------------------------
// | ThinkPHP [ WE CAN DO IT JUST THINK ]
// +----------------------------------------------------------------------
// | Copyright (c) 2006~2018 http://thinkphp.cn All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: liu21st <liu21st@gmail.com>
// +----------------------------------------------------------------------

return [
	'database'	=>[
		// 数据库类型
		'type'            => 'mysql',
		// 服务器地址
		'hostname'        => '127.0.0.1',
		// 数据库名
		'database'        => 'tp',
		// 用户名
		'username'        => 'root',
		// 密码
		'password'        => 'root',
	],
	'cache'  => [
        'type'      => 'redis',
        'host'      => '127.0.0.1',
        'port'      => '6379',//你redis的端口号，可以在配置文件设置其他的
        'password'  => '', //这里是你redis配置的密码，如果没有则留空
        'timeout'   => 3600 //缓存时间
    ],
];