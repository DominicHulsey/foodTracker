<template>
  <div class="fooddetails">
    {{log}}
    <food-form></food-form>
  </div>
</template>


<script>
  import FoodForm from '@/components/FoodForm.vue'
  export default {
    name: 'foodDetails',
    data() {
      return {}
    },
    computed: {
      log() {
        let id = this.$route.params.id
        return this.$store.state.logs.find(e => {
          return id == e._id
        })
      }
    },
    methods: {

    },
    components: {
      FoodForm
    }
  }
</script>


<style scoped>

</style>