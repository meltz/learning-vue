<template>
    <div class="">
        <h1>Server status: {{ status }}</h1>
        <hr>
        <button @click="changeStatus">Change Status</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            status: 'Critial'
        }
    },
    methods: {
        changeStatus() {
            this.status = 'Normal'
        }
    }
}
</script>

<style>
</style>