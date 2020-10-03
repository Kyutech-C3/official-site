import _NewsCard from '@/components/News/_NewsCard.vue'

export default {
    title: 'components/NewsCard',
    component: _NewsCard
}

const Primary = () => ({
    components: { _NewsCard },
    template: '<_NewsCard></_NewsCard>'
})

export const Default = Primary
