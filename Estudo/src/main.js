import Vue from 'vue'
import App from './App.vue'

// Import Components
import DetalheMain from '@/components/Detalhes/DetalheMain'
import DetalhesParent from '@/components/Detalhes/DetalhesParent'
import ButtonNumbers from '@/components/Exe2/ButtonNumbers'
import ResultadoAnalise from '@/components/Exe2/ResultadoAnalise'
import MainComponent from '@/components/PropsValidation/Aula1/MainComponent'
import ParentComponent from '@/components/ChildToParent/ParentComponent'
import PerguntaParent from '@/components/Perguntas/PerguntaParent'

// --------------------- Global Components ---------------------

//Detalhes
Vue.component('detalhe-main', DetalheMain)
Vue.component('detalhes-parent', DetalhesParent)

//Exe2
Vue.component('button-numbers', ButtonNumbers)
Vue.component('result-analise', ResultadoAnalise)

//PropsValidation Aula1
Vue.component('main-component', MainComponent)

// ChildComponenet
Vue.component('parent-component', ParentComponent)
Vue.component('pergunta-parent', PerguntaParent)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
