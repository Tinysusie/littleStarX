let baseUrl = '';
let routerMode = 'hash';

if(process.env.NODE_ENV == 'development'){
    baseUrl = '/littleStart'
}else {
}

export {
    baseUrl,
    routerMode,
}