<template>
    <div>
        <span class="text-center text-muted">ButtonNumbers.vue</span>
        <div class="input-group mb-3">
            <!-- <input type="number" class="form-control"> -->
            <input type="number" class="form-control" v-model="num" placeholder="Verifique se o valor é menor que 100">
        </div>
        <!-- CHILD COMPONENT -->
        <result-analise :num="num"/>
    </div>
</template>

<script>
export default {
    data(){
        return {
            num: null
        }
    }
}
</script>