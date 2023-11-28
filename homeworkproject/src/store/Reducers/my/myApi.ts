import axios from 'axios';
import {FoodItem} from '../../../models/foodModel';
export const fetchMyDataApi = async (): Promise<FoodItem[]> => {
  try {
    const response = await axios.get<FoodItem[]>(
      'http://localhost:3004/example',
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

// export const fetchMyDataApi = async () => {
//   try {
//     // 通过 require 直接引入本地 JSON 文件
//     const data = require('../../../../server/data.json');
//     return data.example;
//   } catch (error) {
//     throw error;
//   }
// };
