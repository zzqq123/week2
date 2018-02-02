class tab{
        constructor(){
            this.Tab();
        }
        Tab(){
            let ul = document.getElementsByTagName('ul')[0];
            let uls = ul.getElementsByTagName('li');
            let ol = document.getElementsByTagName('ol')[0];
            let ols = ol.getElementsByTagName('li');
            let ulis = [...uls];
            ulis.forEach((v,i)=>{
                ulis[i].onclick = ()=>{
                [...ols].forEach((val,ind)=>{
                    ols[ind].className = 'hide';
                    if(ind === i){
                      ols[ind].className = 'show'
                    }
                })
                }
            })
        }
    }
  module.exports = tab;