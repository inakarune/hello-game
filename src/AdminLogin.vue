<template>
<form v-on:submit="submit">
    <h1>관리자 로그인</h1>
    <input type="text" v-model="user_id" placeholder="아이디를 입력하세요"><br>
    <input type="password" name="" id="" v-model="user_password" placeholder="패스워드를 입력하세요"><br>
    <button type="submit" class="btn">로그인</button>
</form>    
</template>
<script>
export default {
    name: 'AdminLogin',
    data: function () {
        return {
            user_id: '',
            user_password: ''
        };
    },
    methods: {
        submit() {
            if (this.user_id === 'admin' && this.user_password === '1111') {
                this.$router.push('/admin');
                return ;
            }
            alert('아이디 또는 패스워드가 잘못되었습니다.');
        }
    }
}
</script>