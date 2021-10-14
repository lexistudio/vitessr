<template>
  socket {{ isSocket }}
  <pre>
    {{ getMess }}
  </pre>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    data: () => ({
      isSocket: false
    }),
    computed: mapGetters(['getMess']),
    sockets: {
      connect() {
        console.log('socket connected')
        this.isSocket = true
      }
    },
  }
</script>
