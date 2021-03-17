<template>
  <div>
    <h1>Mind Game 접속하기</h1>
    <p>대화형 보드게임 M.I.N.D는 승패보다 서로의 이야기를 들으며 상대방에 대해 알아갈 수 있는 4인용 대화형 보드게임 입니다.</p>
    <form>
      <input type="text" placeholder="ID를 입력하세요" v-model="id" />
      <input type="password" placeholder="패스워드를 입력하세요" />
      <button v-on:click="submit">접속하기</button>
    </form>
  </div>
</template>

<script>
// import { mapMutaions } from 'vuex';

export default {
  name: 'Login',
  components: {
    
  },
  data: function () {
    return {
      id: '',
      password: ''
    };
  },
  methods: {
    submit() {
      this.$socket.emit('login', { name: this.id });
      this.$router.push('/room');
      this.$store.commit('setID', this.id);

    }
  }
}
</script>

<style>

</style>
