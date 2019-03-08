<template>
  <div class="logform col-6">
    <form @submit.prevent='createLog'>
      <input v-model="logForm.date" type="date" name="date" placeholder="Enter date" required /><button
        type="submit">Make Log</button>
    </form>
    <div class="row">
      <div class="col-6">

      </div>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'logform',
    data() {
      return {
        logForm: {}
      }
    },
    computed: {},
    methods: {
      createLog() {
        this.$store.dispatch('createLog', this.logForm)
      }
    },
    components: {}
  }
</script>


<style>

</style>