<template>
    <div class="Activity">

        <div class="description">
            <p>{{bitch}}</p>
        </div>


        <div class="example">
            <div class="example">
                <video muted autoplay loop name="media" style="width: 75vw; border-radius: 20px; ">
                    <source src="../../assets/b34c17a5e04fb74e38ab8f96335a8e03.mp4" type="video/webm">

                </video>
                <p>{{message}}</p>

            </div>
            <div class="example">

                <video muted autoplay loop name="media" style="width: 75vw; border-radius: 20px; ">
                    <source src="../../assets/0951ad5c744a5a3f7ee01d2e5a9d5e90.mp4" type="video/webm">

                </video>
                <p>{{bitch}}</p>


            </div>
            <div class="example">

                <video muted autoplay loop name="media" style="width: 75vw; border-radius: 20px; ">
                    <source src="https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm" type="video/webm">

                </video>
                <p>{{bitch}}</p>


            </div>

        </div>

    </div>

</template>


<script>
    export default ({
        name: 'Activity',

        data() {
            return {
                message: 'ﾌﾞﾘﾌﾞﾘﾌﾞﾘﾌﾞﾘﾌﾞﾘｭﾘｭﾘｭﾘｭﾘｭ！！！！！！！仏父部武舞父リブブ',
                bitch: 'おちｍぽ'
            }
        },







    })
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .example { /*親div*/
        position: relative; /*相対配置*/

    }

        .example p {
            position: absolute;
            top: 30%;
            left: 50%;
            -ms-transform: translate(-50%,-50%);
            -webkit-transform: translate(-50%,-50%);
            font-size: 2em; /*サイズ2倍*/
            color: white; /*文字は白に*/
            transform: translate(-50%,-50%);
            margin: 0;
            padding: 0;
        }

        .example video {
            width: 100%;
            height: 100%;
            object-fit: cover; /* この一行を追加するだけ！ */
            margin-bottom :5rem
        }

    .examplevideo::before {
        content: ' ';
        background-color: rgba(0,0,0,.5);
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }

</style>