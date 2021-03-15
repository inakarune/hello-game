<template>
<div class="user" v-bind:style="{ transform: `translate( ${ coordinate.left }, ${ coordinate.top } )`}"></div>
</template>

<script>
export default {
    name: 'User',
    props: ['coordinate']
}
</script>
<style>
.user {
    width: 50px;
    height: 50px;
    border-radius: 50px;
    background-color: indigo;
    position: absolute;
    transition: all 1s;
    top: 859px;
    left: 130px;
}
</style>
