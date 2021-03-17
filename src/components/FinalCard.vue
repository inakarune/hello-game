<template>
<div>
    <h1>Final Card</h1>
    <p>파이널 카드</p>

    <p>1. 미션 카드 중 가장 기억에 남는 질문은?</p>
    <textarea v-model="one"></textarea>

    <p>2. 나의 그래프 지수 중 가장 낮게 혹은 가장 높게 나온 지수와 나의 삶은 얼마나 일치하나요?</p>
    <textarea v-model="two"></textarea>

    <p>3. 마지막으로 팀원들에게 하고 싶은 한 마디!</p>
    <textarea v-model="three"></textarea>
</div>    
</template>
<script>

export default {
    name: 'FinalCard',
    data: function () {
        return {
            one: '',
            two: '',
            three: ''
        };
    },
    methods: {

    }
}
</script>

<style>

</style>
