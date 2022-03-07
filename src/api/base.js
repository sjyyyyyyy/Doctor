/**
 * 公共的请求的接口
 * 
 */
const base ={
    host:'http://api.tianapi.com',//天行数据 --疫情病毒
    baseUrl:'https://yupn.api.storeapi.net',//挖数据---国内疫情
    covInfo:'/ncov/index?key=2a31d1dbf0296430c063cffb5ce80c7b',//疫情病毒信息
    chinaData:'/api/94/219?format=json&appid=14628&sign=acf65753f644e0536527542539468239',//国内疫情接口
    worldData:'/api/94/220?format=json&appid=14628&sign=acf65753f644e0536527542539468239',//世界疫情数据
    city:'/api/94/221',//城市接口
    //format=json&appid=6938&city_name=城市名称&sign=md5加密字符串 
    allData:'/api/94/222?format=json&appid=14628&sign=acf65753f644e0536527542539468239',//全球接口
    swiperBanner:'http://iwenwiki.com/wapicovid19/ncovimg.php',//轮播图疫情
    // travel:'http://apis.juhe.cn/springTravel/citys?key=171e165a7d991c5f6ecd5194c54778ef',
    travel:'/api/springTravel/citys?key=9270adcd2f27af2af025ffc599b90fa2',
    travelQuery:'/api/springTravel/query?key=9270adcd2f27af2af025ffc599b90fa2',//城市疫情&from=10191&to=10349

}

export default base;
