
import { IApiMessage } from './api_interface';

export interface IAPIprops {
 token: string;
}
export const getProduct = async({ token}:IAPIprops): Promise<IApiMessage> => {
 try{
  const url = `https://api.divar.ir/v5/posts/${token}`;
  const response = await fetch(url);
        if (response.status === 404) return { success: false, message: '404' };
        const data = await response.json();
        return {
         success: true,
         productData: data,
        }
 }catch (error) {
        return { success: false, message: error };
    }

 }