import Contact from '@/components/Contact/Contact.vue'

export default {
    title: 'components/Contact',
    component: Contact
}

const Primary = () => ({
    components: { Contact },
    template: '<Contact></Contact>'
})

export const Default = Primary
