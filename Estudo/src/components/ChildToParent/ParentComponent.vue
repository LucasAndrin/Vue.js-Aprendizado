<template>
    <div>
        <span class="text-center text-muted">ParentComponent.vue</span>
        <p class="fw-bold">{{nome}}</p>
        <button class="btn btn-primary" @click="alterar()">Alterar</button>
        <child-component
            :nome="nome"
            @nomeAlterado="nome = $event"
        />
    </div>
</template>

<script>
import ChildComponent from '@/components/ChildToParent/ChildComponent'

export default {
    components: {
        ChildComponent
    },
    data() {
        return {
            nome: 'Lucas'
        }
    },
    methods: {
        alterar(){
            this.nome = 'Lucas Andrin'
        }
    },
}
</script>