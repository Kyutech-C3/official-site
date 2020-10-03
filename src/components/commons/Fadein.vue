<template>
    <div class="fadeIn" :class="{visible: visible}">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'Fadein',
    data: () => ({
        visible: false
    }),
    methods: {
        fadein() {
            const clientY = window.scrollY + window.innerHeight
            const elemY = document.querySelector('.fadeIn').offsetTop
            console.log(elemY, clientY)
            if(elemY < clientY) {
                console.log('visible')
                this.visible = true
            }
        }
    },
    mounted() {
        this.fadein()
        document.addEventListener('scroll', this.fadein) 
    },
}
</script>
<style lang='scss' scoped>
.fadeIn {
    margin-top: 3rem;
    opacity: 0;
    transition: 1s;
    background-color: $brand-color;
}
.fadeIn.visible {
    opacity: 1;
}
</style>