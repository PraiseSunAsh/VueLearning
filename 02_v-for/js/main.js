var app = new Vue({
    el:'#app',
    //暂时理解为数据池
    data:{
        interest:['sing','jump','rap'],
        foodlist:[
            {
                name:"葱",
                price:10,
                discount:0.4
            },
            {
                name:"姜",
                price:5,
                discount:0.4
            },
            {
                name:'蒜',
                price:4.5,
            }
        ],
    },
});