<template>
<Nav></Nav>
<router-view></router-view>
</template>

<script>
import Nav from './components/Nav.vue';


export default {
    setup() {
        return {};
    },
    components: { Nav }
}
</script>

