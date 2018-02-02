<template>
<div id="box"></div>
</template>
    <script>
    import axios from 'axios'
    import Paging from'@/js/paging.js'
        export default {
            name:'paging',
            data(){
             return {
             }
            },
            mounted(){
            this.paging();
                },
                methods:{
            paging(){
                axios.get('http://localhost/8080').then(result)=>{
                    let data = result.data;
                    new Paging(data)
                }
            }
            }
        }
    </script>
<style>
@import url('./css/style.css')
</style>