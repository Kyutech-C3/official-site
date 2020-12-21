<template>
    <div class="top">
        <img src="@/assets/C3logo.png" id="C3logo" class="C3logo C3logo-animate defaultDropShadow"/>
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
            discription: 
                `
                九工大のサークル、C3です。
                Unityを使ってゲームを作ったり、Webの開発、Blenderで3Dモデリングなど、コンピュータを使って色々な創作活動を行っているサークルです。\n
                `, 
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
    -webkit-animation: lfluffy linear 0.8s 0s 1;
	animation: fluffy linear 0.8s 0s 1;
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
.top h1 {
    font-size: 4em;
    font-family: 'Roboto', sans-serif;
    margin-bottom: 0;
}
.top p {
    display: inline-block;
    margin: 1rem 0;
    white-space: pre-line;
    word-wrap: break-word;
}

</style>
