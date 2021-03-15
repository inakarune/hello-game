<template>
<div class="pop-back">
    <div class="pop-contents">
        소통에 도착하였습니다.<br>
        카드를 뽑아주세요.<br>
        <div class="card" v-if="selected">
            {{ selected }}
        </div>
        <button class="btn" v-on:click="chooseCard">뽑기</button>
        <button class="btn" v-on:click="close">닫기</button>
    </div>
</div>
</template>
<script>
import cardList from '../json/card.json';

export default {
    name: 'CardPop',
    data: function() {
        return {
            selected: ''
        };
    },
    methods: {
        chooseCard() {
            const selected = Math.ceil(Math.random() * 6);
            this.selected = cardList.list[selected - 1].text;
        },
        close() {
            this.$emit('onClose', '');
        }
    }    
}
</script>
<style>
.card {
    background-color: indianred;
    width: 200px;
    height: 200px;
    font-weight: bolder;
    text-align: center;
}
</style>
