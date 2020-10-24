import Activity from '@/components/Activity/Activity.vue'

export default {
    title: 'components/Activity',
    component: Activity
}

const Primary = () => ({
    components: { Activity },
    template: '<Activity></Activity>'
})

export const Default = Primary
