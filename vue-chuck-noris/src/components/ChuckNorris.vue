<template>
<div>
    <speech-bubble id="chuck_norris_joke_container" :text="currentJoke.joke" v-if="currentJoke" />
    <button @click="fetchRandomJoke()">Joke</button>
</div>
</template>

<script>
import axios from 'axios'
import SpeechBubble from './SpeechBubble'

const API_RANDOM_JOKE_ENDPOINT = 'https://api.icndb.com/jokes/random'

export default {
	name: 'ChuckNorris',
    components: {
        SpeechBubble
    },
    mounted() {
        this.fetchRandomJoke()
    },
	data: function() {
		return {
            currentJoke: null
        }
	},
	methods: {
        fetchRandomJoke() {
            axios.get(API_RANDOM_JOKE_ENDPOINT)
                .then( ({data}) => this.currentJoke = data.value )
        }
    }
}
</script>

<style scoped>
</style>