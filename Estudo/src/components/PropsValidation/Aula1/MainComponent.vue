<template>
    <div>
        <span class="text-center text-muted">MainComponent.vue</span>
        <input type="text" class="form-control mb-3" v-model="string">
        <component-child :string="string"/>
    </div>
</template>

<script>
import ComponentChild from '@/components/PropsValidation/Aula1/ComponentChild'

export default {
    data() {
        return {
            string: ''
        }
    },
    components: {
        ComponentChild
    }
}
</script>