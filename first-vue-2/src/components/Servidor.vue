<template>
    <div>
        <div class="p-1 bg-light shadow">
            <span class="position-relative start-0 top-0 text-muted">Servidor.vue</span>
            <h3 class="text-center fw-bold fs-3">Dados do Servidor</h3>
            <div class="row">
                <servidor-temperatura></servidor-temperatura>
                <servidor-estado></servidor-estado>
            </div>
        </div>
    </div>
</template>

<script>
import ServidorEstado from '@/components/DadosServidor/ServidorEstado';
import ServidorTemperatura from '@/components/DadosServidor/ServidorTemperatura';
export default {
    components: {
        ServidorEstado,
        ServidorTemperatura,
    }
}
</script>