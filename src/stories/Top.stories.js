import Top from '@/components/Top/Top.vue'

export default {
    title: 'components/Top',
    component: Top
}

const Primary = () => ({
    components: { Top },
    template: '<Top></Top>'
})

export const Default = Primary
