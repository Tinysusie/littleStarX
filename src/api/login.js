import fetch from '../config/fetch.js'

export default {
    helloForm() {
        let form =  new FormData();
        form.append('name',"susie");
        return fetch('/helloForm',form,'formData')
    },
    helloPost(){
        return fetch('/helloPost',{'name':"susie"})
    },
    helloGet(){
        return fetch('/helloGet',{'name':"susie1"},"get")
    },
    getUser(){
        return fetch('/user/getUser',{'id':"1111"})
    }
} 