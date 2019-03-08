<template>
  <div class="home container-fluid">
    <img src="../assets/logo.png" />
    <div class="row d-flex justify-content-center">
      <div class="col">
        <h1>This is a FOOD LOG</h1>
      </div>
    </div>
    <div class="row d-flex justify-content-center">
      <log-form></log-form>
    </div>
    <hr>
    <div class="row d-flex justify-content-center">
      <div class="col-4 justify-content-center">
        <div class="dateme card my-2 py-1" v-for="(log,index) in logs"
          @click="$router.push({name: 'details', params: {id:log._id}})">
          {{log.date}}
          <button class=" btn btn-danger">Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import LogForm from '@/components/LogForm.vue'
  export default {
    name: 'home',
    data() {
      return {
      }
    },
    components: {
      LogForm
    },
    mounted() {
      this.$store.dispatch('getLogs')
    },
    methods: {
    },
    computed: {
      logs() {
        return this.$store.state.logs
      }
    }
  }
</script>

<style>
  .bullet {
    list-style-type: none;
  }

  .dateme {
    transition: all 0.1s linear;
    cursor: pointer;
  }

  .dateme:hover {
    border-width: 2px;
    border-style: solid;
    border-color: red;
    transition: rotate(180deg);
  }
</style>