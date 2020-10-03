import Fadein from '@/components/commons/Fadein.vue'
import _FadeinLazyAppear from './FadeinLazyAppear'

export default {
    title: 'commons/Fadein',
    component: Fadein
}

const Primary = () => ({
    components: { Fadein },
    template: '<Fadein><h1 style="background-color: silver;">Test</h1></Fadein>'
})

export const Default = Primary.bind({})
Default.template = '<div><h1 style="background-color: silver;">Test</h1></div>'

export const FadeinLazyAppear = () => (_FadeinLazyAppear)
