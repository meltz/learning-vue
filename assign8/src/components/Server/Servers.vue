<template>
    <div class="col-xs-12 col-sm-6">
        <app-server v-for="server in servers" :server="server"></app-server>
    </div>
</template>

<script>
import Server from './Server.vue'

export default {

    components: {
        'app-server': Server
    },
    data() {
        return {
            servers: [
                {id: 1, status: 'normal'},
                {id: 2, status: 'critical'},
                {id: 3, status: 'hibernate'},
                {id: 4, status: 'normal'},
                {id: 5, status: 'critical'},
            ]
        }
    }
}
</script>

<style>

</style>
