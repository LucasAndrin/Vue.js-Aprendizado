<template>
    <div class="alert alert-info">
        <span class="text-center text-muted">ResultadoAnalise.vue</span>
        <p>{{analise}}</p>
    </div>
</template>

<script>
export default {
    props: [
        'num'
    ],
    computed: {
       analise: function analise(){
            console.log('analise')
            if (this.num <100) {
                return this.num + ' Menor que 100!';
            } else if (this.num == 100) {
                return this.num + ' Igual a 100!';
            } else {
                return this.num + ' Maior que 100!';
            }
        }
    },
    
}
</script>