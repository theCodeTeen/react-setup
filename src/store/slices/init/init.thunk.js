import {
  getDemoApi
} from "../../../utils/apis.utils";

export const demoHandler = async (__,thunkApi) =>{
    try{
        const { user } = thunkApi.extra.apiService;

        //make api calls using user
        await user.get(getDemoApi);

        return {value:"somedata"};
    }catch(err){
        return Promise.reject(err);
    }
}