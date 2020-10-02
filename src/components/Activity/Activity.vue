<template>
    <div class="Activity">

            <div class="example" v-for="item in items" :key="item">
                <div>
                    <video muted autoplay loop name="media">
                        <source :src="item.movie" type="video/webm">
                    </video>
                </div>
                <div style="text-align:center;">
                    <h1 class="xtex">{{item.message}}</h1>
                    <h6 class="ztex">{{item.description}}</h6>
                </div>
            </div>

    </div>

</template>


<script>

    import img1 from '../../assets/sample1.mp4';
    import img2 from '../../assets/sample2.mp4';
    import img3 from '../../assets/sample3.mp4';


    export default ({
        name: 'Activity',

        data() {

            return {
                items: [
                    {
                        movie: img1,
                        message: 'そんな',
                        description: 'バナナバナナバナナバナナバナナバナナバナナバナナバナナ',

                    },
                    {
                        movie: img2,
                        message: 'アルミ缶のうえに',
                        description: 'あるミカン',

                    },
                    {
                        movie: img3,
                        message: 'ここを',
                        description: 'かえな',

                    },
                ]
            }


        },


        




    })
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

    .Activity {


        margin-top: 5vw;
    }

    .example {
        margin: 0 auto; /* これいる */
        position: relative;
        margin-bottom: 5vw;
        overflow: hidden;
        border-radius: $border-radius;
        width: 85vw; /* videoのそれより小さく */
        height: 50vw; /* videoのそれより小さく */
        max-height: 275px; /* videoのそれより小さく */
    }

        

        .example .xtex{
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
        .example .ztex{
            position: absolute;
            top: 55%;
            left: 50%;
            -ms-transform: translate(-50%,-50%);
            -webkit-transform: translate(-50%,-50%);
            font-size: 3vw; /*サイズ2倍*/
            color: white; /*文字は白に*/
            transform: translate(-50%,-50%);
            margin: 0;
            padding: 0;
            width: 65vw;
        }

        .example video {
            object-fit: cover; /* この一行を追加するだけ！ */
            width: 100vw; /* exampleのそれより大きく */
            height: 75vw; /* exampleのそれより大きく */
            margin: -10px; /* これいる？ */
            border-radius: calc($border-radius + 2vw);
            max-height: 300px; /* exampleのそれより大きく */
            filter: brightness(60%) blur(3px);
        }


    template {
        background: $base-color;
    }

</style>