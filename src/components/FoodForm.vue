<template>
  <div class="col-6  foodform">
    <form @submit.prevent="findFood">
      <input v-model="query" type="text" name="" placeholder="What did you eat?!" />
      <button type="submit">Submit</button>
    </form>
  </div>
  <!-- var food = new Schema({
    name: { type: String, required: true },
    fat: { type: Number, required: true },
    carbohydrates: { type: Number, required: true },
    protein: { type: Number, required: true },
    servingQty: { type: Number, required: true },
    servingUnit: { type: String, required: true },
    imgUrl: { type: String },
  }) -->
  <!-- <p>{{foodData.name}}</p>
  <p>{{foodData.fat}}</p>
  <p>{{foodData.protein}}</p> -->
</template>
<script>

  export default {
    name: 'foodform',
    data() {
      return {
        query: ''

      }
    },
    computed: {},
    methods: {
      findFood() {
        this.$store.dispatch('findFood', this.query)
      }
    },
    components: {}
  }
</script>


<style>

</style>