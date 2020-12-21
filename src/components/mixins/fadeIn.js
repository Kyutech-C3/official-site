export  const fadeIn = {
    components: {},
    mounted() {
        //this.$el.style.display = 'none'
        window.addEventListener('scroll', this.handleScrollDown)
    },
    methods: {
        handleScrollDown() {
            const top = this.$el.getBoundingClientRect().top;
            if(top < window.innerHeight + 100) {
                this.$el.style.display = 'block'
            }
        }
    }
}