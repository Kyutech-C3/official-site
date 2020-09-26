<template>
    <div>
        <img :src="imageUrl" />
        <h1>{{ title }}</h1>
        <p>{{ description }}</p>
    </div>
</template>
<script>
export default {
    name: 'NewsCard',
    props: {
        title: String,
        description: String,
        imageUrl: String,
    },
}
</script>