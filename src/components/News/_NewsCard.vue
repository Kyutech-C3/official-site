<template>
    <div class="card">
        <table>
            <tr id="tr_img">
                <img :src="imageUrl" />
            </tr>
            <tr>
                <article>
                    <h2>{{ title }}</h2>
                    <p v-html="description">{{ description }}</p>
                    <p id="time">{{ year }}/{{ month }}/{{ day }}</p>
                </article>
            </tr>
        </table>
    </div>
</template>
<script>
export default {
    name: 'NewsCard',
    props: {
        title: String, 
        description: String, 
        imageUrl: String, 
        year: Number, 
        month: Number, 
        day: Number,
    },
}
</script>

<style scoped>
    .card{
        width: 14rem;
        height: 21rem;
        background: linear-gradient( #99f, #77f);
        border-radius: 10px;
    }
    #tr_img, article{
        background: linear-gradient(to right, #eef, #ccf);
        height: 10.35rem;
        width: 13.8rem;
    }
    img{
        display: block;
        margin: auto;
        margin-top: auto;
        margin-bottom: auto;
        width: 13.8rem;
        height: 10.35rem;
    }
    h2{
        text-align: left;
        margin: 0;
        padding: 4px 7px 0px;
        width: 9rem;
        height: 2rem;
        overflow: hidden;
    }
    p{
        text-align: left;
        margin: 0.4rem 0;
        padding: 0 30px;
        width: 10rem;
        height: 5.8rem;
        overflow: hidden;
    }
    #time{
        width: 11rem;
        text-align: right;
        font-size: 13px;
    }
</style>