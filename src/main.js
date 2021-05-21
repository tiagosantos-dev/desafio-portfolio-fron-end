import { createApp } from 'vue'
import App from './App.vue'
import Auth from './views/auth/Auth.vue'
import Internal from './views/internal/Internal.vue'
import Home from './views/internal/home/Home.vue';
import 'vuetify/dist/vuetify.min.css'
import Analyse from './views/internal/analyse/Analyse.vue'
import Bar from './views/internal/analyse/Bar.vue'
import Line from './views/internal/analyse/Line.vue'
import Pie from './views/internal/analyse/Pie.vue'
import Invoice from './views/internal/createInvoice/Invoice.vue'
import CreateInvoice from './views/internal/createInvoice/components/CreateInvoice.vue'
import ViewInvoice from './views/internal/viewInvoice/ViewInvoice.vue'
import ECharts from 'vue-echarts'
import { use } from "echarts/core"
import 'echarts/lib/chart/bar';
import CardInvoice from './views/internal/home/components/CardInvoice.vue'
//import './plugin/axios.js'

// import ECharts modules manually to reduce bundle size
import {
    CanvasRenderer
} from 'echarts/renderers'
import {
    BarChart
} from 'echarts/charts'

import {
    GridComponent,
    TooltipComponent
} from 'echarts/components'

import router from './router'

const app = createApp(App).use(router);


use([
    CanvasRenderer,
    BarChart,
    GridComponent,
    TooltipComponent
])



app.component('v-chart', ECharts)

app.component('internal', Internal)
app.component('auth', Auth)
app.component('home', Home)
app.component('analyse', Analyse)
app.component('bar', Bar)
app.component('line', Line)
app.component('pie', Pie)
app.component('invoice', Invoice)
app.component('createInvoice', CreateInvoice)
app.component('viewInvoice', ViewInvoice)
app.component('cardInvoice', CardInvoice)



app.mount('#app')