<template>
    <div>
        <h1>Olá{{NomeSobrenome}}!</h1>
        Nome: <input type="text" v-model="nome">
        Sobrenome: <input type="text" v-model="sobrenome">
        <button type="button" @click="clear">Limpar</button>
    </div>
</template>

<script>
export default {
    // retorna um objeto javascript que contém as informações
    data: function(){
        return {
            nome: '',
            sobrenome: '',
        }
    },
    methods: {
        clear(){
            this.nome = '';
            this.sobrenome = '';
        }
    },

    computed: {
        NomeSobrenome: function(){
            return ' ' + this.nome + ' ' + this.sobrenome;
        }
    }
}
</script>