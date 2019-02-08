<template>
    <div class="container">
        <app-header />
    	<hr>
        <div class="row">
            <app-server />
            <app-server-detail />
    	</div>
    	<hr>
        <app-footer />
    </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppServer from './components/AppServer.vue'
import AppServerDetail from './components/AppServerDetail.vue'
import AppFooter from './components/AppFooter.vue'

export default {
    components: {
        'app-header': AppHeader,
        'app-server': AppServer,
        'app-server-detail': AppServerDetail,
        'app-footer': AppFooter
    }
}
</script>

<style>
</style>