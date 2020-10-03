import _NewsCard from '@/components/News/_NewsCard.vue'

import {withKnobs, text, number, files} from '@storybook/addon-knobs'

export default {
    title: 'components/NewsCard',
    component: _NewsCard,
    decorators: [ withKnobs ]
}

const Primary = () => ({
    components: { _NewsCard },
    props: {
        title: {
            default: text('Title', 'TestNews')
        },
        description: {
            default: text('Description', 'foobar')
        },
        imageUrl: {
            default: files('ImageUrl')
        },
        year: {
            default: number('Year', 2020)
        },
        month: {
            default: number('Month', 10)
        },
        day: {
            default: number('Day', 3)
        }
    },
    template: `<_NewsCard
        :title="title"
        :description="description"
        :imageUrl="imageUrl"
        :year="year"
        :month="month"
        :day="day"
        ></_NewsCard>`
})

export const Default = Primary
