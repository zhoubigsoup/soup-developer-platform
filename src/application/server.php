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
		'type'            => 'mysql',
		// 数据库类型
	    'hostname'        => 'rm-uf698o4i5n926xi918o.mysql.rds.aliyuncs.com',
		// 数据库名
		'database'        => 'soup-developer-platform',
		// 用户名
		'username'        => 'root',
		// 密码
		'password'        => '_S4aj@4id#5sDSA2',
	],
	'cache'  => [
        'type'      => 'redis',
        'host'      => '127.0.0.1',
        'port'      => '6379',//你redis的端口号，可以在配置文件设置其他的
        'password'  => '', //这里是你redis配置的密码，如果没有则留空
        'timeout'   => 3600 //缓存时间
    ],
];
?>