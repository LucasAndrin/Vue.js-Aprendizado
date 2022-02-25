<template>
    <div class="border p-3">
        <span class="text-center text-muted">ChildComponent.vue</span>
        <p class="fw-bold">{{nome}}</p>
        <button class="btn btn-success" @click="alterarChild()">Alterar pelo Child</button>
    </div>
</template>

<script>
export default {
    props: ['nome'],
    methods: {
        alterarChild(){
            this.$emit('nomeAlterado', 'Lucas')
        }
    },
}
</script>