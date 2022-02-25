<template>
    <div class="border p-3">
        <span class="text-muted">RespostaChild.vue</span>
        <div class="col d-grid">
            <button class="btn btn-primary" @click="responder">Perguntar</button>
        </div>
        <p class="fw-bold">{{resposta}}</p>
    </div>
</template>

<script>
export default {
    props: ['pergunta'],
    data() {
        return {
            resposta: ''
        }
    },
    methods: {
        responder() {
            if (this.pergunta == 'Seu nome é Lucas?') {
                this.resposta = 'Sim!'
            } else {
                this.resposta = 'Não!'
            }
        }
    },
}
</script>