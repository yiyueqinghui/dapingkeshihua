import axios from 'axios';
import qs from 'qs';
import { Message } from 'element-ui';

export default {
	// get 请求
	axiosGet(url,params={}){
		url = `${process.env.WEPAPI}${url}`; 
		return new Promise((resolve, reject) => {
			axios.get(url, { params }).then((res) => {
				resolve(res.data)
			}).catch(err => {
				Message({
					message:err,
					type: 'warning'
				})
				reject(err)
			})
		})
	},
	// post请求
	axiosPost(url,data){
		url = `${process.env.WEPAPI}${url}`; 
		return new Promise((resolve, reject) => {
			axios({
				url:url,
				method: 'post',
				headers:{
					'Content-Type':'application/x-www-form-urlencoded;charset=utf-8'
				},
			    data: qs.stringify(data)   //注意，这里参数提交方式是x-www-form-urlencoded
			}).then(res => {
				resolve(res.data)
			}).catch(err=>{
				Message({
					message:err,
					type: 'warning'
				})
				reject(err);
			})
		})
	},
    //axios请求
	echartAxios({url,type,data,header}){
       return new Promise((resolve,reject)=>{
		   let axiosOpiton = {
				method:type,
				url:url,
				header:header
		   }
		   if(type === 'GET') axiosOpiton['params'] = data;
		   else if(type === 'POST') axiosOpiton['data'] = data;

		   axios(axiosOpiton).then(res=>{
               resolve(res.data)
		   }).catch(err=>{
				Message({
					message:err,
					type: 'warning'
				})
				reject(err);
		   })
	   })
	},

	//保留小数点后几位(不进行四舍五入)
	toDecimal(num,fixed = 2){
		if(typeof num != 'number'){
			throw new Error('num is not number!');
		}else if(typeof fixed !== 'number'){
			throw new Error('fixed is not number!');
		}

		let multiple = Math.pow(10,fixed),
		    fixedNum = num*multiple;
		fixedNum = parseInt(fixedNum)/multiple
		return fixedNum;
	},
	//深度克隆对象
	deepClone(target){
		const targetType = typeof target;
		if(targetType === 'object' || targetType === 'function'){
			let clone = null;
			//日期
			if(Object.prototype.toString.call(target) === '[object Date]') {
				clone = new Date(target)
			}
			//正则
			if(Object.prototype.toString.call(target) === '[object RegExp]') {
				clone = target
			}
			//函数
			if(Object.prototype.toString.call(target) === '[object Function]') {
				clone = target
			}
			//对象、数据
			if(Object.prototype.toString.call(target) === '[object Object]' ||
				Object.prototype.toString.call(target) === '[object Array]') {
				clone = Array.isArray(target) ? [] : {};
				for(const key in target) {
					clone[key] = this.deepClone(target[key])
				}
			}
	
			return clone;
		}
		return target;
	},
	//获取数据类型   "String" 、"Number" 、"Boolean"、"Undefined"、Null"、"Array"、"Object"、"function" 、
	getType(obj){
		let type  = typeof obj;
		if (type !== "object") {    // 先进行typeof判断，如果是基础数据类型，直接返回
		  //这里为了统一返回格式，将返回的类型字符串的首字母统一改为大写 
		  return type.trim().toLowerCase().replace(type[0], type[0].toUpperCase());
		}
		// 对于typeof返回结果是object的，再进行如下的判断，正则返回结果
		return Object.prototype.toString.call(obj).replace(/^\[object (\S+)\]$/, '$1'); 
	}


}