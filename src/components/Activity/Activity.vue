<template>
    <div class="activity">
        <section-title>Activity</section-title>
        <div v-for="item in items" :key="item">
            <ActivityCard :movie="item.movie" :message="item.message" :desc="item.description"></ActivityCard>
        </div>
    </div>
</template>


<script>
    import img1 from '../../assets/web.mp4';
    import img2 from '../../assets/unity.mp4';
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
                        message: 'Web',
                        description: 'Vue.js / React / Django / Ruby on Rails',

                    },
                    {
                        movie: img2,
                        message: 'ゲーム',
                        description: 'Unity / Unreal Engine',

                    },
                    {
                        movie: img3,
                        message: '3D',
                        description: 'Blender / XISMO / Fusion360',

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
  font-family: 'Roboto', sans-serif;
}
</style>