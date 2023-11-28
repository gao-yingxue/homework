import Axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';

// 创建 Axios 实例
const api: AxiosInstance = Axios.create({
  baseURL: 'https://api.example.com', // 你的 API 基本路径
  timeout: 10000, // 请求超时时间（毫秒）
  headers: {
    'Content-Type': 'application/json',
    // 可以在这里添加其他默认的请求头
  },
});

// 添加类型声明
interface ApiResponse<T> {
  data: T;
  // 可以根据需要添加其他字段
}

// 请求拦截器
api.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // 在发送请求之前做些什么
    // 可以在这里处理请求头、token等
    return config;
  },
  error => {
    // 对请求错误做些什么
    return Promise.reject(error);
  },
);

// 响应拦截器
api.interceptors.response.use(
  (response: AxiosResponse<ApiResponse<any>>) => {
    // 对响应数据做些什么
    return response.data;
  },
  error => {
    // 对响应错误做些什么
    return Promise.reject(error);
  },
);

export default api;

// 封装 GET 请求
export const getRequest = <T>(url: string, params: T): Promise<T> => {
  return api.get<ApiResponse<T>>(url, { params });
};
// 封装 POST 请求
export const postRequest = <T>(url: string, data: T): Promise<T> => {
  return api.post<ApiResponse<T>>(url, data);
};
