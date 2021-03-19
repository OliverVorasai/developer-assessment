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
    img {
        width: 25%;
    }
    p {
        margin-top: 0;
        font-weight: bold;
    }
}
</style>
