<template>
<div class="mt-24">

    <map-view />

</div>


</template>

<script setup>
import { getAuth,onAuthStateChanged } from 'firebase/auth'
import { useRouter } from 'vue-router'
import { onBeforeUnmount } from 'vue'
import MapView from './MapView.vue'

const router = useRouter()
const authListener = onAuthStateChanged(getAuth(),function(user) {
    if (!user) { // not logged in
        alert('you must be logged in to view this. redirecting to the home page')
        router.push('/')
    }
});

onBeforeUnmount(() => {
    // clear up listener
    authLi
        MapViewstener()
})
</script>