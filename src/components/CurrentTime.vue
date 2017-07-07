<template>
  <div>
    {{dateText}}
  </div>
</template>

<script>
export default {
  name: 'CurrentTime',
  data () {
    return {
      date: new Date(),
      dateText: '-'
    }
  },
  mounted () {
    setInterval(() => {
      this.updateDate()
    }, 1000)
    return
  },
  methods: {
    zeroGap (num) {
      if (num >= 10) {
        return '' + num
      } else {
        return '0' + num
      }
    },
    updateDate () {
      this.date = new Date()
      this.dateText = this.zeroGap(this.date.getHours()) + ':' + this.zeroGap(this.date.getMinutes()) + ':' + this.zeroGap(this.date.getSeconds())
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
