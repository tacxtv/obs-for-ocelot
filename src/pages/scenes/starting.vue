<template lang='pug'>
div.starting
    //img.background(src='https://cdn.discordapp.com/attachments/1073407839479005227/1166129627492790373/image.png?ex=65495dd8&is=6536e8d8&hm=62147598739d56d2fa325682d5ce45a0df687e7aba6267b64c3e28ce0c6c8384&')
    div.television.zoom
</template>

<script lang='ts' setup>
import { definePageMeta } from '#imports'

definePageMeta({
  layout: 'scene',
})


</script>

<style lang='scss' scoped>
.starting {
  display: flex;
  justify-content: center;
}
.zoom {
  background: url("https://cdn.discordapp.com/attachments/1073407839479005227/1166127406080331846/image.png") !important;
}
.television {
  width: 100%;
  height: 100%;
  position: absolute;
  background-position: center;
  background-size: 100% 100% !important;
  //opacity: 0.2;
  background-image: url("https://media.discordapp.net/attachments/1073407839479005227/1166094064047902850/TV_Meuble.png");
}
.background {
  width: 100%;
  height: 100%;
  position: absolute;
}
</style>
