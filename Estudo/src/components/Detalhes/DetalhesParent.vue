<template>
    <div class="row bg-light border p-3 text-center">
        <span class="position-relative start-0 top-0 text-muted">DetalheParent.vue</span>
        <span :class='textstyle'>{{text}}</span>
    </div>
</template>

<script>
export default {
    props: [
        'text',
        'textstyle'
    ]
}
</script>