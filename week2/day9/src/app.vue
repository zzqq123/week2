<template>
    <div class="wrap">
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
    </ul>
    <ol>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
    </ol>
</div>
</template>
    <script>
    import Tab from'@/js/tab.js';
        export default {
            name:'tab',
            data(){
             return {
             }
            },
            mounted(){
            this.tab();
                },
                methods:{
            tab(){
                new Tab();
            }
            }
        }
    </script>
<style>
@import url('./css/style.css')
</style>