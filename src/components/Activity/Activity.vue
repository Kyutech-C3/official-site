<template>
    <div style="margin-top:5vw;">

        <div v-for="item in items" :key="item">

            <ActivityCard :movie="item.movie" :message="item.message" :desc="item.description"></ActivityCard>

        </div>


    </div>

</template>


<script>

    import img1 from '../../assets/sample1.mp4';
    import img2 from '../../assets/sample2.mp4';
    import img3 from '../../assets/sample3.mp4';
    import ActivityCard from "./_Activity.vue";

    export default ({
        name: 'Activity',

        components: {
            // componentsプロパティにItemコンポーネントをセットして
            // template内でItemコンポーネントが利用できるようにしています。
            ActivityCard,
        },

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



