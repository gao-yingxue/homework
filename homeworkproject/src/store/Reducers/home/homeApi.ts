import api from '../../../services/api';

// 添加类型声明
interface ExampleData {
  id: number;
  name: string;
}

// 发起 GET 请求
api
  .get<ExampleData>('/endpoint')
  .then(response => {
    // 处理成功响应
    console.log(response);
  })
  .catch(error => {
    // 处理错误
    console.error(error);
  });
