<template>
    <div class="col border">
        <p>Servidor Ligado: {{estado}}</p>
        <button type="button" class="btn btn-primary" @click="alterarServidorEstado">Ligar/Desligar</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            estado: true
        }
    },
    methods: {
        alterarServidorEstado(){
            this.estado = !this.estado
        }
    },
}
</script>