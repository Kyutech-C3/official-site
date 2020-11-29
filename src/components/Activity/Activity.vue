<template>
    <div class="activity">
        <section-title>Activity</section-title>
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
    import SectionTitle from "../miscs/SectionTitle";

    export default ({
        name: 'Activity',

        components: {
            // componentsプロパティにItemコンポーネントをセットして
            // template内でItemコンポーネントが利用できるようにしています。
            ActivityCard,
            SectionTitle
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
<style lang="scss" scoped>
.activity {
  background-color: $base-color;
  padding: $content-padding-y $content-padding-x;
}
</style>