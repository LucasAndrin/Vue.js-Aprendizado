<template>
    <div id="app" class="container mt-3 shadow-sm border">
        <div class="text-center">
            <img class="img-fluid" alt="Vue logo" src="./assets/logo.png" />
        </div>
        <div class="col-md-10 mx-auto">
            <div class="p-4 mx-auto border border-2 rounded mb-3">
                <detalhe-main />
            </div>
            <div class="p-4 mx-auto border border-2 rounded mb-3">
                <button-numbers />
            </div>
            <div class="p-4 mx-auto border border-2 rounded mb-3">
                <main-component />
            </div>
            <div class="p-4 mx-auto border border-2 rounded mb-3">
                <parent-component />
            </div>
            <div class="p-4 mx-auto border border-2 rounded mb-3">
                <pergunta-parent />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {},
    name: "App",
};
</script>

<style>
</style>
