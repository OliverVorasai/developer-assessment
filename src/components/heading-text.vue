<template>
    <h2 class="heading-text"><slot /></h2>
</template>

<script>
export default {
    name: 'HeadingText',
};
</script>

<style lang="scss" scoped>
.heading-text {
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: 6px solid var(--color-highlight);
    font-size: 44px;
    text-transform: uppercase;
}
</style>
