const Mock = require("mockjs");
module.exports = [
  Mock.mock('/api/getFirst', 'get', {
    'data': [{
      'key': 0,
      'name': '初识加法',
      'number': '6',
      'rate': 4.7,
    }, {
      'key': 1,
      'name': '初识减法',
      'number': '6',
      'rate': 4.6
    }]
  }),
  Mock.mock('/api/getSecond', 'get', {
    'data': [{
      'key': 2,
      'name': '进阶加减',
      'number': '6',
      'rate': 4.9
    }, {
      'key': 3,
      'name': '表内乘法',
      'number': '6',
      'rate': 3.7
    }]
  }),
  Mock.mock('/api/getThird', 'get', {
    'data': [{
      'key': 4,
      'name': '万内加减',
      'number': '6',
      'rate': 4.9
    }, {
      'key': 5,
      'name': '多位乘一位',
      'number': '6',
      'rate': 3.7
    }]
  }),
  Mock.mock('/api/getFour', 'get', {
    'data': [{
      'key': 6,
      'name': '两位乘除',
      'number': '6',
      'rate': 4.9
    }, {
      'key': 7,
      'name': '亿万加减',
      'number': '6',
      'rate': 3.7
    }]
  }),
  Mock.mock('/api/getFive', 'get', {
    'data': [{
      'key': 8,
      'name': '小数乘除',
      'number': '12',
      'rate': 4.9
    }]
  }),
  Mock.mock('/api/getSix', 'get', {
    'data': [{
      'key': 9,
      'name': '分数运算',
      'number': '12',
      'rate': 4.9
    }]
  }),
  Mock.mock('/api/getQuestion', 'post', function (req) {
    let data = JSON.parse(req.body);
    switch (data.grade) {
      case '1':
        return Mock.mock({
          [`data|${data.num}`]: [{
            "key|+1": 1,
            "I|1": ["@integer(1, 9)"],
            "O|1": ["@integer(1, 9)"],
            'type|1': ["+", '-'],
          }]
        });
      case '2':
        return Mock.mock({
          [`data|6`]: [{
            "key|+1": 1,
            "I|1": ["@integer(50, 81)"],
            "O|1": ["@integer(1, 81)"],
            'type|1': ['-', '+'],
          }, {
            "key|+1": 7,
            "I|1": ["@integer(1, 9)"],
            "O|1": ["@integer(1, 9)"],
            'type|1': ["*"],
          }]
        });
      case '3':
        return Mock.mock({
          [`data|6`]: [{
            "key|+1": 1,
            "I|1": ["@integer(100, 1000)"],
            "O|1": ["@integer(1, 9)"],
            'type|1': ['*'],
          }, {
            "key|+1": 7,
            "I|1": ["@integer(1000, 9999)"],
            "O|1": ["@integer(100, 9999)"],
            'type|1': ["+", '-'],
          }]
        });
      case '5':
        return Mock.mock({
          [`data|12`]: [{
            "key|+1": 1,
            "I|1": ["@float(1, 50, 1, 2)"],
            "O|1": ["@float(1, 50, 1, 2)"],
            'type|1': ["*", '/'],
          }]
        });
      case '6':
        return Mock.mock({
          [`data|12`]: [{
            "key|+1": 1,
            "I|1": ["@integer(1, 50)/ @integer(50, 99)"],
            "O|1": ["@integer(1, 50) / @integer(50, 99)"],
            'type|1': ["+", '-', '*'],
          }]
        });
    }
  }),
  Mock.mock('/api/getAchievement', 'get', {
    'Sname|22': ['@cname()'],
    'Scount|22': ['@integer(50, 100)'],
  }),
  Mock.mock('/api/getUser', 'get', {
    'data|23': [{
      "key|+1": 1,
      'name|1': ['@cname()'],
      'userType|1': ['学生', '学生', '学生', '学生', '学生', '学生', '老师'],
      'root|1': ['最高', '测试', '测试', '测试', '测试', '测试', '测试'],
    }]
  }),
  Mock.mock('/api/userlogin', 'post', function (req) {
    let data = JSON.parse(req.body);
    if (data.username === 'admin') {
      return Mock.mock({
        res: true,
        type: 'admin',
        msg: '管理员登录成功'
      })
    }
    if (data.username === 'usr') {
      return Mock.mock({
        res: true,
        type: 'usr',
        msg: '用户登录成功'
      })
    }
    return Mock.mock({
      res: false,
      msg: '用户不存在'
    })
  })
]
