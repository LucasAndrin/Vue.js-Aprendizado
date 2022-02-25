<template>
    <div>
        <span class="text-muted">PerguntaParent.vue</span>
        <input type="text" class="form-control rounded-0 rounded-top" v-model="pergunta" placeholder="Digite sua pergunta">
        <resposta-child :pergunta="pergunta"/>
    </div>
</template>

<script>
import RespostaChild from './RespostaChild.vue'
export default {
    components: { RespostaChild },
    data() {
        return {
            pergunta: ''
        }
    },
}
</script>