<template>
  <div>
      <RoomPop v-if="togglePop" @onClose="toggleRoom" />
    <!-- <h1>Mind Game 방</h1> -->
    <p>게임하고자 하는 방을 선택해주세요.</p>
    <!-- <ul class="live-users">
        <li v-for="(item, idx) in userList" :key="idx"><span class="random"></span>{{ item }}</li>
    </ul> -->
    <ul class="room-list">
        <li v-for="(item, idx) in roomList" :key="idx">
            <p>{{ item }}</p>
            <button class="btn" v-on:click="enterGame(item)">들어가기</button>
        </li>
    </ul>
    <button v-on:click="toggleRoom" class="btn">방 만들기</button>

  </div>
</template>

<script>
import RoomPop from './components/RoomPop.vue';

export default {
    name: 'Room',
    components: {
        RoomPop
    },
    created() {
        this.$socket.emit('all');
        this.$socket.emit('login', { name: this.$store.state.user.userID });
        this.$socket.on('all', (data) => {
            this.roomList = data.list;
        });
        this.$socket.on('disconnect', () => {

        });
    },
    data: function () {
        return {
            togglePop: false,
            roomList: [],
            userList: []
        };
    },
    methods: {
        toggleRoom(title) {
            this.togglePop = !this.togglePop;
            if (typeof title === 'string') {
                this.roomList.push(title);
            }
        },
        enterGame(room) {
            this.$router.push('/game/' + room);
            this.$socket.emit('enter_user', { name: this.$store.state.user.userID });
        }
    }
}
</script>

<style>
.live-users li {
    display: inline-block;
}
.room-list {
    list-style-type: none;
}
.room-list li {
    display: flex;
    border: 1px solid gray;
    padding: 20px;
}
.btn {
    color: white;
    background-color: green;
    width: 100px;
    height: 50px;
    border: none;
    margin-left: auto;
    cursor: pointer;
    margin-right: 10px;
}
.random {
    background-color: greenyellow;
    width: 15px;
    height: 15px;
    border-radius: 20px;
    display: inline-block;
    margin-right: 10px;
}
</style>
