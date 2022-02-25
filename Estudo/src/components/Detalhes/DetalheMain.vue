<template>
    <div class="text-center">
        <span class="position-relative start-0 top-0 text-muted">DetalheMain.vue</span>
        <div class="col-md-4 mx-auto" data-bs-toggle="tooltip" data-bs-placement="bottom" title="DetalheMain.vue">
            <!-- <span :class="style">{{text}}</span> -->
            <input type="text" class="form-control" v-model="text" />
        </div>
        <div class="col-md-6 input-group mt-3">
            <button
                type="button"
                class="btn btn-success"
                @click="diminuirFonte"
            >
                Diminuir Fonte
            </button>
            <button
                type="button"
                class="btn btn-success"
                @click="aumentarFonte"
            >
                Aumentar Fonte
            </button>
        </div>
        <detalhes-parent
            :text="text"
            :textstyle="textStyle"
        />
    </div>
</template>
<script>
export default {
    data() {
        return {
            text: "Texto",
            fonte: 1,
            textStyle: "",
        };
    },
    created() {
        this.changeStyle();
    },

    methods: {
        diminuirFonte() {
            if (this.fonte !== 5) {
                this.fonte += 1;
                this.changeStyle();
            }
        },

        aumentarFonte() {
            if (this.fonte !== 1) {
                this.fonte -= 1;
                this.changeStyle();
            }
        },

        changeStyle() {
            this.textStyle = "fs-" + this.fonte;
        },
    },
};
</script>