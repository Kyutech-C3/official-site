<template>
    <div class="top">
        <img src="@/assets/C3logo.png" id="C3logo" class="C3logo C3logo-animate"/>
        <h1>{{title}}</h1>
        <p>{{discription}}</p>
    </div>
</template>

<script>
export default {
    name: "Top",
    data(){
        return{
            title: "C3 ",
            discription: "めっちゃ楽しい部活！基本的に光回線を開通させる必要があります。フレッツやauひかり、nuro光などを契約しましょう。サーバーはネット上に情報公開するシステムなので、プライベートIPアドレスではなくグローバルIPアドレスというものが必要です。「よく分からない」という場合は、プロバイダなどに聞いてグローバルIPの有無とサーバーに運用できるかの是非を確認しましょう。", 
        }
    },
    mounted(){
        let logo=document.querySelector('.C3logo')
        setTimeout(() => {
            logo.classList.remove('C3logo-animate')
        }, 800);
    }
}
</script>

<style lang="scss" scoped>

@keyframes lanimate {
    0%   { transform: scale(0.9, 0.9) translate(-900px, 0px) rotate(0turn); }
    80%  { transform: scale(2, 2) translate(0px, 0px) rotate(100turn); }
    85%  { transform: scale(0.6, 1.4) translate(20px, 0px); }
    90%  { transform: scale(0.9, 0.9) translate(0px, 0px); }
    95%  { transform: scale(1.4, 0.6) translate(0px, 5%); }
    100% { transform: scale(1.0, 1.0) translate(0px, 0px); }
}

@keyframes lanimate1 {
    0%   { transform: scale(7, 7) translate(0px, 40px) rotate(0turn); }
    80%  { transform: scale(0.5, 0.5) translate(0px, 0px) rotate(30turn); }
    85%  { transform: scale(0.6, 1.4) translate(0px, 0px); }
    90%  { transform: scale(0.9, 0.9) translate(0px, 0px); }
    95%  { transform: scale(1.4, 0.6) translate(0px, 0px); }
    100% { transform: scale(1.0, 1.0) translate(0px, 0px); }
}


@-webkit-keyframes fluffy {
	0%   { -webkit-transform: scale(1.0, 1.0) translate(0%, 0%); }
	15%  { -webkit-transform: scale(0.9, 0.9) translate(0%, 5%); }
	30%  { -webkit-transform: scale(1.3, 0.8) translate(0%, 10%); }
	50%  { -webkit-transform: scale(0.8, 1.3) translate(0%, -10%); }
	70%  { -webkit-transform: scale(1.1, 0.9) translate(0%, 5%); }
	100% { -webkit-transform: scale(1.0, 1.0) translate(0%, 0%); }
}

@keyframes fluffy {
	0%   { transform: scale(1.0, 1.0) translate(0%, 0%); }
	15%  { transform: scale(0.9, 0.9) translate(0%, 5%); }
	30%  { transform: scale(1.3, 0.8) translate(0%, 10%); }
	50%  { transform: scale(0.8, 1.3) translate(0%, -10%); }
	70%  { transform: scale(1.1, 0.9) translate(0%, 5%); }
	100% { transform: scale(1.0, 1.0) translate(0%, 0%); }
}

.C3logo:hover {
    -webkit-animation: fluffy 0.8s linear 0s 1;
	animation: fluffy 0.8s linear 0s 1;
}
.top{
    background-color: $base-color;
    text-align: center;
}

p{
    padding:0 25%;
    font-size: 0.8em;
}

@media screen and (max-width: $mobile-width){
    p{
        padding:0 10%;
        font-size: 0.8em;
    }
}

.C3logo-animate {
    -webkit-animation: lanimate1 linear 0.8s 0s 1;
	animation: lanimate1 linear 0.8s 0s 1;
}

.C3logo {
    border-radius: 50%;
    width:120px;
    height:120px;
    margin-bottom: 0px;
    margin-top: 50px;
    padding:0px;
    border : solid 0px;
}

</style>
