<template>
  <div class="map">
      <User :coordinate="coordinate" />
      <DicePop v-if="diceP === 1" @onClose="onClose" />
      <CardPop v-if="cardP === 1" @onClose="onClose" />
  </div>
</template>

<script>
import DicePop from './components/DicePop.vue';
import CardPop from './components/CardPop.vue';
import User from './components/User.vue';
import map from './json/map.json';

export default {
    name: 'Game',
    components: {
        DicePop,
        CardPop,
        User
    },
    data: function () {
        return {
            diceP: '',
            cardP: 1,
            coordinate: { top: '0px', left: '0px' }
        };
    },
    methods: {
        onClose() {
            this.diceP = '';
            this.cardP = '';
            this.coordinate = map.list[5];
        },

    }
}
</script>

<style>
.map {
    background-image: url(./assets/map.png);
    width: 1500px;
    height: 969px;

}
</style>
