import assign from 'object-assign'

import { config } from './config'

const {HTTP_TIME_OUT, BFF_HOST} = config

/**
 * 封装公共的fetch服务
 */
const Fetch = (url, req, host = BFF_HOST) => {

	//默认参数
	let request = {
		method: 'GET',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		}
	}

	//对header做单独合并
	if (req && req.headers) {
		request.headers = assign({}, request.headers, req.headers)
		delete req.headers
	}

	//merge
	const merge = assign({}, request, req)

	url = host + url

	console.log('请求->', url, '\n', JSON.stringify(merge, null, 2))

	return new Promise((resolve, reject) => {
		let isServerOk = true

		//超时优化
		let httpTimeout = setTimeout(() => {
			const err = {
				code: 'S-000002',
				message: '网络超时'
			}
			resolve(err)
		}, 1000 * HTTP_TIME_OUT)

		fetch(url, merge)
			.then(res => {
				//清除网络超时
				clearTimeout(httpTimeout)
				//判断server是不是异常状态404，500等
				isServerOk = (res.status >= 200 && res.status < 300)
				//promise
				return res.json()
			})
			.then((res) => {
				if (isServerOk) {
					//数据正确返回
					resolve(res)
				} else {
					console.info('响应->', url, res.code, '\n', res)
					reject(res)
				}
			})
			.catch((err) => {
				//清除网络超时
				clearTimeout(httpTimeout)
				reject({
					code: 'K-000001',
					message: '网络错误'
				})
			})
	})
}

export default Fetch
