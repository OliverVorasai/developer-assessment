<template>
    <div class="chapman-cares">
        <HeadingText>Chapman Cares</HeadingText>

        <img
            :src="require('@/assets/cares-banner.jpg')"
            alt="Chapman Cares"
            class="banner-img"
        />

        <div v-for="(event, index) in events" :key="index" class="event">
            <h3 class="event-name">{{ event.name }}</h3>
            <div class="flex-wrap">
                <div class="event-img">
                    <img :src="event.image" :alt="event.imageAlt" />
                </div>
                <div class="event-details">
                    <p class="event-text">{{ event.text }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import HeadingText from '@/components/heading-text';

export default {
    name: 'ChapmanCares',
    components: {
        HeadingText,
    },
    data() {
        return {
            events: [
                {
                    name: 'Making Strides Against Cancer',
                    image: require('@/assets/making-strides.jpg'),
                    imageAlt: 'Making Strides',
                    text:
                        'Thousands of people, young and old, participated in the Making Strides Against Breast Cancer event at Tempe Beach Park. As a sponsorship partner, Chapman Auto brought the Breast Cancer Pace Car, driven by Danica Patrick. Chapman Auto employees participated in the walk, helping to raise thousands of dollars for breast cancer research.',
                },
                {
                    name: 'Canine Companions For Independence',
                    image: require('@/assets/canine-companions.jpg'),
                    imageAlt: 'Canine Companions',
                    text:
                        'Chapman Auto has been a proud supporter of Canine Companions for Independence for more than 10 years. From sponsoring a golf tournament to puppy training, Chapman Auto employees are proud to work with CCI as they help others live happy, independent lives.',
                },
            ],
        };
    },
};
</script>

<style lang="scss" scoped>
.banner-img {
    width: 100%;
}
.event {
    margin-top: 2rem;
}
.flex-wrap {
    display: flex;
    flex-direction: column;
    @media (min-width: 481px) {
        flex-direction: row;
    }
}
.event-img {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    img {
        width: 100%;
    }
    @media (min-width: 481px) {
        width: 50%;
    }
}
.event-name {
    margin-bottom: 1rem;
}
.event-details {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    @media (min-width: 481px) {
        width: 50%;
        padding-left: 1rem;
    }
}
.event-text {
    line-height: 1.7;
}
</style>
