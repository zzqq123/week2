 let login = function(){
    let arr = ['admin','123'];
       let vm = new Vue({
            el:'#app',
            data:{
                user:'',
                pasw:''
            },
            methods:{
                login:function(user,pasw){

                        if(user === arr[0] && pasw === arr[1]){
                           return  alert('登陆成功');
                        }else{
                           return  alert('账号或密码有误')
                        }
                }
            }
        })
 }
module.exports = login;
