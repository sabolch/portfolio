<template>
    <div class="cr cr-bottom cr-left cr-sticky green">Under dev</div>
</template>

<script>
    export default {
        name: "underDev"
    }
</script>

<style scoped>
    .cr {
        width: 200px;
        position: absolute;
        text-align: center;
        padding: 15px 0;
        background-color: #3498db;
        box-shadow: 0 5px 10px rgba(0,0,0,.1);
        color: #fff;
        font: 700 18px/1 'Lato', sans-serif;
        text-shadow: 0 1px 1px rgba(0,0,0,.2);
    }
    .cr-sticky {
        position: fixed;
    }
    /* Positions */
    .cr-bottom { bottom: 25px; }
    .cr-left   { left: -50px; }
    /* Rotations */
    cr-left, .cr-bottom{
        transform: rotate(-45deg);
    }
    .cr-bottom.cr-left {
        transform: rotate(45deg);
    }
</style>
