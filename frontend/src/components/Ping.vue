<template>
  <div class="container">
    <button type="button" class="btn btn-primary">{{ msg }}</button>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Ping",
  data() {
    return {
      msg: ""
    };
  },
  methods: {
    getMessage() {
      axios
        .get("http://localhost:5000/ping")
        .then(response => {
          this.msg = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    }
  },
  beforeMount() {
    this.getMessage();
  }
};
</script>
<style scoped>
</style>
