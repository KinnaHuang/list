// var app = new Vue({
//     el:'#app',
//     data:{
//     newAddText:'',
//     newAddText2:'',
//     newAddText3:'',
        // itemList:[
        //     {
        //         id:'1',
        //         itemName:'咖啡紅茶',
        //         price:'20',
        //         count:'1'
        //     },
        //     {
        //         id:'2',
        //         itemName:'茉香綠茶',
        //         price:'30',
        //         count:'4'
        //     },
        //     {
        //         id:'3',
        //         itemName:'珍珠奶茶',
        //         price:'45',
        //         count:'2'
        //     },
        // ],
//         nextTodoId: 4
//     },
//     method:{
//         addNewList: function(item){
//             this.itemList.push({
//                 id:this.nextTodoId++,
//                 itemName:this.newAddText,
//                 price:this.newAddText2,
//                 count:this.newAddText3
//             })
//             this.newAddText=''
//             this.newAddText2=''
//             this.newAddText3=''
//         }
//     },	
//     computed:{

//     }
// })

var vm = new Vue({
    el: '#app',
    data: {
    newAddText:'',
    newAddText2:'',
    newAddText3:'',
    itemList:[
        {
            id:'1',
            itemName:'咖啡紅茶',
            price:'20',
            count:'1'
        },
        {
            id:'2',
            itemName:'茉香綠茶',
            price:'30',
            count:'4'
        },
        {
            id:'3',
            itemName:'珍珠奶茶',
            price:'45',
            count:'2'
        },
    ],
        nextTodoId: 4
    },
    methods:{
        addNewList:function(){
            this.itemList.push({
                id:this.nextTodoId++,
                itemName:this.newAddText,
                price:this.newAddText2,
                count:this.newAddText3
            })
            this.newAddText=''
            this.newAddText2=''
            this.newAddText3=''
        }
    }	
   })