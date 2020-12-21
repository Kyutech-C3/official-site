<template>
    <div class="media_container defaultShadow">
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
        name: 'ActivityCard',
        props: ['movie', 'message', 'desc'],
    };
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">


    .media_container {
        margin: 5rem 0; /* ���ꂢ�� */
        position: relative;

        overflow: hidden;
        border-radius: $border-radius;

        max-height: 300px; /* video�̂����菬���� */
    }

    @media (min-width: $mobile-width) { /*�t�@�b�L�����o�C��*/
        .media_container {
            position: relative;
            overflow: hidden;
            border-radius: $border-radius;
            max-height: 300px; /* video�̂����菬���� */
        }
    }


        .xtex {
            position: absolute;
            top: 30%;
            left: 50%;
            font-size: 3rem;
            -ms-transform: translate(-50%,-50%);
            -webkit-transform: translate(-50%,-50%);
            color: white; /*�����͔���*/
            transform: translate(-50%,-50%);
            margin: 0;
            padding: 0;
        }

    .ztex {
        position: absolute;
        top: 60%;
        left: 50%;
        font-size: 1.4rem;
        -ms-transform: translate(-50%,-50%);
        -webkit-transform: translate(-50%,-50%);
        color: white; /*�����͔���*/
        transform: translate(-50%,-50%);
        margin: 0;
        padding: 0;
        width: 50vw;
    }

    video {
        object-fit: cover; /* ���̈�s��ǉ����邾���I */
        width: 120vw; /* example�̂�����傫�� */
        height: 50vw; /* example�̂�����傫�� */
        margin: -10px; /* ���ꂢ��H */
        border-radius: $border-radius;
        max-height: 310px; /* example�̂�����傫�� */
        filter: brightness(60%) blur(3px);
    }


    template {
        background: $base-color;
    }
</style>
