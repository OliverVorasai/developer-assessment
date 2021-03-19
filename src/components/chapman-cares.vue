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

        <HeadingText>{{ career.title }}</HeadingText>
        <div class="career-flex-container">
            <div class="career-right">
                <div class="career-image">
                    <img :src="career.image" :alt="career.imageAlt" />
                    <div class="overlay"></div>
                </div>
            </div>
            <div class="career-left">
                <p class="career-text">{{ career.text }}</p>
                <SubmissionIndicator v-show="career.isSubmitting">
                    <img :src="require('@/assets/indicator-loading.svg')" />
                    <p>Submitting information...</p>
                </SubmissionIndicator>
                <SubmissionIndicator
                    v-show="!career.isSubmitting && career.isSubmitSuccess"
                >
                    <img :src="require('@/assets/indicator-success.svg')" />
                    <p>Submission Successful!</p>
                    <button class="yellow-button" @click="resetSubmitState()">
                        Resubmit
                    </button>
                </SubmissionIndicator>
                <div v-if="career.formErrors.length">
                    <b>Please correct the following error(s)</b>
                    <ul>
                        <li
                            v-for="(error, index) in career.formErrors"
                            :key="index"
                        >
                            {{ error }}
                        </li>
                    </ul>
                </div>
                <form
                    v-show="!career.isSubmitting && !career.isSubmitSuccess"
                    @submit.prevent="updateCareerData()"
                >
                    <label for="form-name">Name (required)</label>
                    <input
                        id="form-name"
                        v-model.lazy="career.formName"
                        type="text"
                        name="form-name"
                        class="form-input"
                        :disabled="career.isSubmitting"
                    />
                    <label for="form-phone">Phone</label>
                    <input
                        id="form-phone"
                        v-model.lazy="career.formPhone"
                        type="text"
                        name="form-phone"
                        class="form-input"
                        :disabled="career.isSubmitting"
                    />
                    <input
                        class="yellow-button"
                        type="submit"
                        :value="career.formSubmit"
                        :disabled="career.isSubmitting"
                    />
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import HeadingText from '@/components/heading-text';
import SubmissionIndicator from '@/components/submission-indicator';

export default {
    name: 'ChapmanCares',
    components: {
        HeadingText,
        SubmissionIndicator,
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
            career: {
                title: 'Shift Your Career Into Overdrive!',
                text: `We're seeking friendly, happy individuals up for the challenge to change the way people view the automotive industry. If you agree that a customer's time is valuable and positive human interaction is important, then we want to hear from you!`,
                image: require('@/assets/careers.jpg'),
                imageAlt: 'Careers At Chapman',
                formErrors: [],
                formName: '',
                formPhone: '',
                formSubmit: `I'm Interested!`,
                isSubmitting: false,
                isSubmitSuccess: false,
            },
        };
    },
    methods: {
        async updateCareerData() {
            // Form Validation
            this.career.formErrors = [];
            if (!this.career.formName) {
                this.career.formErrors.push('Name Required');
                return;
            }

            // Set form submission state for indicators
            this.career.isSubmitting = true;

            // Commit form data to the store
            this.$store.commit('setCareerName', this.career.formName);
            this.$store.commit('setCareerPhone', this.career.formPhone);

            // Timeout to simulate async push request
            await new Promise(resolve => setTimeout(resolve, 1500));

            // Set form submission state for successful submission
            this.career.isSubmitSuccess = true;
            this.career.isSubmitting = false;
        },
        resetSubmitState() {
            // Set form submission state for user to retry form
            this.career.isSubmitSuccess = false;
        },
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
    @media (min-width: 769px) {
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
    @media (min-width: 769px) {
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
    @media (min-width: 769px) {
        width: 50%;
        padding-left: 1rem;
    }
}
.event-text {
    line-height: 1.7;
}
.career-flex-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    @media (min-width: 769px) {
        flex-direction: row-reverse;
    }
    .career-right {
        width: 100%;
        .career-image {
            img {
                width: 100%;
            }
            position: relative;
            @media (min-width: 769px) {
                .overlay {
                    position: absolute;
                    height: 100%;
                    width: 100%;
                    top: 0;
                    left: 0;
                    content: ' ';
                    background: linear-gradient(
                        85deg,
                        white 30px,
                        transparent 30px
                    );
                }
            }
        }
        @media (min-width: 769px) {
            margin-left: 1.5em;
        }
    }
    .career-left {
        width: 100%;
        p {
            margin-top: 0;
        }
        form {
            label {
                font-weight: bold;
            }
            input {
                width: 100%;
                margin-top: 0.5em;
                margin-bottom: 1em;
                border: 1px solid black;
                border-radius: 0.25em;
                height: 2em;
            }
            .yellow-button {
                border: 0;
            }
        }
        @media (min-width: 769px) {
            margin-right: 1.5em;
        }
    }
}
.yellow-button {
    width: 100%;
    background-color: var(--color-highlight);
    border: 0;
    border-radius: 0.25rem;
    height: 2.5em;
    margin-bottom: 0;
    font-family: inherit;
    font-size: 1.25em;
    font-weight: bold;
}
</style>
