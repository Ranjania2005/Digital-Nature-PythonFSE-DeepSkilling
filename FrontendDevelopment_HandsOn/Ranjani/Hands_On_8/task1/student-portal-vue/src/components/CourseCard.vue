<template>
  <div class="card">

    <h2>{{ name }}</h2>

    <p>Course Code: {{ code }}</p>

    <p>Credits: {{ credits }}</p>

    <p>Grade: {{ grade }}</p>

  </div>
</template>


<script setup>

defineProps({
  name: String,
  code: String,
  credits: Number,
  grade: String
})

</script>


<style scoped>

.card {
  border: 1px solid #ccc;
  padding: 15px;
  margin: 15px;
  border-radius: 10px;
}

</style>