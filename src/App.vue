<template>
  socket {{ isSocket }}
</template>

<script>
  export default {
    data: () => ({
      isSocket: false
    }),
    sockets: {
      connect() {
        console.log('socket connected')
        this.isSocket = true
      }
    },
  }
</script>
