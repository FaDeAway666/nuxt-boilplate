import axios from 'axios'
import api from '@/api'
import Vue from 'vue'

const baseUrl = process.env.NODE_ENV === 'production' ?
  '/api' : '/apis'

// API类最后要整合成的结构
/**
 * {
 *    user: {
 *      GET_USER: axios(get_user_config)
 *    },
 *    article: {
 *      POST_ARTICLE: axios(post_article_config)
 *    }
 * }
 */

const request = axios.create({
  baseURL: baseUrl
})

const setApiConfig = config => {

  const result = {}

  Object.keys(config).forEach(key => {

    result[key] = {}
    config[key].forEach(item => {
      const {
        name,
        method,
        path
      } = item
      result[key][name] = (params, headers) => request({
        url: path,
        method: method,
        data: params,
        headers: headers || []
      })
    })
  })

  return result
}


Vue.prototype.$api = setApiConfig(api)
