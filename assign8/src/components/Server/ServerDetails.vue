<template>
    <div class="col-xs-12 col-sm-6">
        <div v-if="!server">
            <p>Please select a server</p>
        </div>
        <div v-else>
            <p>Selected Server #{{ server.id }}, Status: {{ server.status }}</p>
            <button v-if="server.status !='normal'" @click="changeStatus">Change Status</button>
        </div>
    </div>
</template>

<script>
import { serverBus } from '../../main'

export default {
    data() {
        return {
            server: null
        }
    },
    methods: {
        changeStatus() {
            this.server.status = 'normal'
        }
    },
    created() {
        serverBus.$on('show-detail', (server) => {
            this.server = server
        })
    }
}
</script>

<style>

</style>
