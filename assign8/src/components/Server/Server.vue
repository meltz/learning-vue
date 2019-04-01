<template>
    <div class="row list-group list-group-item" @click="showDetail(server)">
        <div class="col-xs-6">
            <span>Server #{{ server.id }}</span>
        </div>
        <div class="col-xs-6 text-right">
            <span>{{ server.status }}</span>
        </div>
    </div>
</template>

<script>
import { serverBus } from '../../main'

export default {
    props: ['server'],
    methods: {
        showDetail(server) {
            serverBus.$emit('show-detail', server)
        }
    },
}
</script>

<style>
    span
    {
        text-transform: capitalize;
    }

    .list-group-item
    {
        cursor: pointer;
    }

    .list-group-item:hover
    {
        background: #ccc;
    }

</style>
