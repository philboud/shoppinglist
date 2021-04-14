import Vue from 'vue'
import Router from 'vue-router'
import Accueil from '@/components/Accueil'
import ListeCreat from '@/components/ListeCreat'
import ManageList from '@/components/ManageList'
import Epicerie from '@/components/Epiceries'
import ProdMenag from '@/components/ProdMenag'
import FruitLeg from '@/components/LegumesFruits'
import Viandes from '@/components/Viandes'
import Poissonnerie from '@/components/Poissonnerie'
import Liste from '@/components/Liste'
import Help from '@/components/Help'
import FreeList from '@/components/FreeList'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Accueil',
      component: Accueil
    },
    {
      path: '/listecreat',
      name: 'ListeCreat',
      component: ListeCreat
    },
    {
      path: '/gestionliste',
      name: 'ManageList',
      component: ManageList
    },
    {
      path: '/epicerie',
      name: 'Epicerie',
      component: Epicerie
    },
    {
      path: '/prodmenag',
      name: 'ProdMenag',
      component: ProdMenag
    },
    {
      path: '/fruitleg',
      name: 'FruitLeg',
      component: FruitLeg
    },
    {
      path: '/viandes',
      name: 'Viandes',
      component: Viandes
    },
    {
      path: '/liste',
      name: 'Liste',
      component: Liste
    },
    {
      path: '/poissonnerie',
      name: 'Poissonnerie',
      component: Poissonnerie
    },
    {
      path: '/freelist',
      name: 'FreeList',
      component: FreeList
    },
    {
      path: '/help',
      name: 'Help',
      component: Help
    }
  ]
})
