<template lang='pug'>
client-only
    lazy-nuxt-page
</template>
<script lang='ts'>
useHead({
  title: 'OBS - Unknown scene',
  meta: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
  ],
  bodyAttrs: {
    class: 'obs-screen',
  },
})
</script>
