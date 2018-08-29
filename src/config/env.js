let baseUrl = '';
let routerMode = 'hash';

if(process.env.NODE_ENV == 'development'){
    baseUrl = '/littleStar'
}else {
}

export {
    baseUrl,
    routerMode,
}