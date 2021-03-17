<template>
  <div class="map">
      <div>
          나의 점수:
          상대방의 점수:
      </div>
      <div class="chat_box">
        <ul>
            <li v-for="(item, idx) in msgList" :key="idx">{{ item }}</li>
            <input type="text" v-model="chat" v-on:keyup.enter="write">
        </ul>
      </div>
      <User :coordinate="coordinate" />
      <DicePop v-if="diceP === 1" @onClose="onClose" />
      <CardPop v-if="cardP === 1" @onClose="onClose" />
      <button class="btn" v-if="$store.state.user.orner">start</button>
  </div>
</template>

<script>
import DicePop from './components/DicePop.vue';
import CardPop from './components/CardPop.vue';
import User from './components/User.vue';
// import map from './json/map.json';
// import testmap from './json/testmap.json';


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
            cardP: '',
            coordinate: { top: '0px', left: '0px' },
            score: 0,
            msgList: [],
            chat: ''
        };
    },
    created() {
        this.$socket.emit('enter_user', { room: this.$route.params.room, name: this.$store.state.user.userID });
        this.$socket.on('enter_user', (data) => {console.log('enter_user', data);
            this.msgList.push(data.name + '님이 입장하였습니다.');
        });
        this.$socket.on('msg', (data) => {
            this.msgList.push(data.name + ' : ' + data.txt);
        });
        this.$socket.on('start', (data) => {
            console.log(data);
        });
    },
    methods: {
        onClose() {
            this.diceP = '';
            this.cardP = '';
            // this.coordinate = testmap.list[5];
        },
        write() {
            this.$socket.emit('msg', { room: this.$route.params.room, name: this.$store.state.user.userID, txt: this.chat });
            this.chat = '';
        },
        startGate() {
            this.$socket.emit('start', {});
        }
    }
}
</script>

<style>
.map {
    background-image: url(./assets/testmap.png);
    width: 1500px;
    height: 969px;
}
.chat_box {
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 999;
}

</style>
