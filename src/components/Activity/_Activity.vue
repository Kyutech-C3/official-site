

<template>
    <div class="media_container">

        <div>
            <video muted autoplay loop name="media">
                <source :src="movie" type="video/webm">
            </video>
        </div>
        <div style="text-align:center;">
            <h1 class="xtex">{{message}}</h1>
            <h6 class="ztex">{{desc}}</h6>
        </div>

    </div>


</template>

<script>
    export default {
        name: '_Activity',
        props: ['movie', 'message', 'desc'],
    };
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">


    .media_container {
        margin: 0 10vw 10vw; /* これいる */
        position: relative;

        overflow: hidden;
        border-radius: $border-radius;

        max-height: 300px; /* videoのそれより小さく */
    }
    @media (min-width: $mobile-width) { /*ファッキンモバイル*/
        .media_container {
            margin: 0 10vw 4rem; /* これいる */
            position: relative;
            overflow: hidden;
            border-radius: $border-radius;
            max-height: 300px; /* videoのそれより小さく */
        }
    }


        .xtex {
            position: absolute;
            top: 30%;
            left: 50%;
            -ms-transform: translate(-50%,-50%);
            -webkit-transform: translate(-50%,-50%);
            font-size: 5vw;
            color: white; /*文字は白に*/
            transform: translate(-50%,-50%);
            margin: 0;
            padding: 0;
        }


    @media (min-width: 1100px) {
        .xtex {
            font-size: 52px;
        }
    }

    .ztex {
        position: absolute;
        top: 60%;
        left: 50%;
        -ms-transform: translate(-50%,-50%);
        -webkit-transform: translate(-50%,-50%);
        font-size: 3vw;
        color: white; /*文字は白に*/
        transform: translate(-50%,-50%);
        margin: 0;
        padding: 0;
        width: 50vw;
        margin-top: 2vw;
    }

    @media (min-width: 1100px) {
        .ztex {
            font-size: 24px;
        }
    }

    video {
        object-fit: cover; /* この一行を追加するだけ！ */
        width: 120vw; /* exampleのそれより大きく */
        height: 50vw; /* exampleのそれより大きく */
        margin: -10px; /* これいる？ */
        border-radius: calc($border-radius + 2vw);
        max-height: 310px; /* exampleのそれより大きく */
        filter: brightness(60%) blur(3px);
    }


    template {
        background: $base-color;
    }
</style>
