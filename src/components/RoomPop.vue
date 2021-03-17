<template>
<div class="pop-back">
    <div class="pop-contents">
        <h1>새로운 게임 방 만들기</h1>
        <form>
            <input type="text" v-model="title"><br>
        </form>
        <button class="btn" v-on:click="create">만들기</button>
        <button class="btn" v-on:click="close">닫기</button>
    </div>
</div>
</template>
<script>
export default {
    name: 'RoomPop',
    data: function () {
        return {
            title: ''
        };
    },
    created() {console.log(2)
        this.$socket.on('create_room', () => {console.log(1)
            this.$router.push('/game/' + this.title);
            this.$store.commit('setOrner', this.title);
        });
    },
    methods: {
        create() {console.log(888)
            this.$socket.emit('create_room', { room: this.title, name: this.$store.state.user.userID });
            this.$emit('onClose', this.title);
        },
        close() {
            this.$emit('onClose');
        }
    }
}
</script>
<style>

</style>