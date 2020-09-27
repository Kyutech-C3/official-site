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

    import img1 from '../../assets/0951ad5c744a5a3f7ee01d2e5a9d5e90.mp4';
    import img2 from '../../assets/b34c17a5e04fb74e38ab8f96335a8e03.mp4';
    import img3 from '../../assets/c12.mp4';


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
<style scoped>
    .example { /*親div*/
        position: relative; /*相対配置*/

    }

        .example .xtex{
            position: absolute;
            top: 25%;
            left: 50%;
            -ms-transform: translate(-50%,-50%);
            -webkit-transform: translate(-50%,-50%);
            font-size: 5vw; /*サイズ2倍*/
         
            color: white; /*文字は白に*/
            transform: translate(-50%,-50%);
            margin: 0;
            padding: 0;
        }
        .example .ztex{
            position: absolute;
            top: 45%;
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
            margin-bottom: 5vw;
            width: 85vw;
            height: 50vw;
            border-radius: 20px;
            filter: brightness(60%);

        }


</style>