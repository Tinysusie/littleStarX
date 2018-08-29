import fetch from '../../config/fetch.js'

export default {
    getArticle(data) {
        return fetch('/article/getList',data)
    },
    getPostDetail(data) {
        return fetch('/article/getPost',data)
    },
    addPost(data) {
        return fetch('/article/addPost',data)
    }
} 