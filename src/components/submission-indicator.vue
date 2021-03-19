<template>
    <div class="submission-indicator">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'SubmissionIndicator',
};
</script>

<style lang="scss" scoped>
.submission-indicator {
    text-align: center;
    font-weight: bold;
    img {
        width: 25%;
    }
}
</style>
