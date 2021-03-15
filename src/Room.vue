<template>
  <div>
    <h1>Mind Game 방</h1>
    <p>게임하고자 하는 방을 선택해주세요.</p>
    <ul class="room-list">
        <li>
            <p>테스트 방</p>
            <button class="btn">들어가기</button>
        </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'Room',
  components: {
    
  }
}
</script>

<style>
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
</style>
