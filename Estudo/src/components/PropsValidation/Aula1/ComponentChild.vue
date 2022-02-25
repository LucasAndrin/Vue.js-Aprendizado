<template>
    <div class="border p-3">
        <span class="text-center text-muted">ComponentChild.vue</span>
        <p class="fw-bold">{{string}}</p>
    </div>
</template>

<script>
export default {
    props: {
        string: {
            type: String,
            required: true
        }
    }
}
</script>