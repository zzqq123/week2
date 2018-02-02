class paging{
    constructor(arr){
        this.init();
        this.createDom(arr);
    }
    init(){
        this.box = document.getElementById('box');
    }
    createDom(arr){
        let ul = document.createElement('ul');
        let ol = document.createElement('ol');
        [...arr].map((v,i)=>{
            let li = document.createElement('li');
            li.innerHTML = v.content;
            ul.append(li);
        })
        let num = arr.length/3;
        for(let i=1;i<=num;i++){
            let li = document.createElement('li');
            li.innerHTML = i;
            ol.append(li);
        }
        this.box.append(ul);
        this.box.append(ol);
    }
    LisClick(){
        let ol = document.getElementsByTagName('ol')[0];
        let lis = ol.getElementsByTagName('li');
        [...lis].map((v,i)=>{
            lis[i].onclick = ()=>{
                this.createPage(i);
            }
        })
    }
    createPage(i=0){
        let ul = document.getElementsByTagName('ul')[0];
        let lis = ul.getElementsByTagName('li');
        if(i != 0){
        i = i*3;
        }
        let n = i+3;
        let arr = [];
                for(i;i<n;i++){
                    [...lis].map((v,ind)=>{
                        lis[ind].className = 'hide';
                        if(ind === i){
                            arr.push(i);
                        }
                    })
                }
        arr.map((v,ii)=>{
            [...lis][v].className = 'show';
        })
    }
}
module.exports = paging;