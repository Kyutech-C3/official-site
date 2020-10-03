import NormalStyleDecorator from './NormalStyleDecorator'
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const decorators = [
  (story) => ({
    components: { story,
      NormalStyleDecorator,
    },
    template: '<NormalStyleDecorator><story /></NormalStyleDecorator>',
  })
]