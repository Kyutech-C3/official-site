import Header from '@/components/Header/Header.vue'

export default {
    title: 'components/Header',
    component: Header
}

const Primary = {
    components: { Header },
    template: '<Header />'
}

export const Default = Primary.bind({})