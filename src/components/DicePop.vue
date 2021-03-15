<template>
<div class="pop-back">
    <div class="pop-contents">
        test님의 차례입니다.<br> 
        주사위를 던져주세요.<br>
        <img :src="diceImg" /><br>
        <button class="btn" v-on:click="throwDice">던지기</button>
        <button class="btn" v-on:click="close">닫기</button>
    </div>
</div>
</template>

<script>
import one from '../assets/1.jpg';
import two from '../assets/2.jpg';
import three from '../assets/3.jpg';
import four from '../assets/4.jpg';
import five from '../assets/5.jpg';
import six from '../assets/6.jpg';
import '../css/pop.css';

export default {
    name: 'DicePop',
    data: function () {
        return {
            diceImg: six,
            dice: [one, two, three, four, five, six]
        };
    },
    methods: {
        throwDice() {
            const selected = Math.ceil(Math.random() * 6);
            
            for (let i = 0; i < 6; i++) {console.log(i)
                setTimeout(() => this.diceImg = this.dice[i], 300 * i);
            }
            setTimeout(() => this.diceImg = this.dice[selected - 1], 500 * 6);
        },
        close() {
            this.$emit('onClose', '');
        }
    }
}
</script>

<style>

</style>
