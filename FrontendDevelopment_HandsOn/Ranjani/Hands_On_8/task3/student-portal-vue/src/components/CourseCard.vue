<template>
  <div class="card">
    <h3>{{ course.name }}</h3>
    <p><strong>Code:</strong> {{ course.code }}</p>
    <p><strong>Credits:</strong> {{ course.credits }}</p>

    <button @click="$emit('enroll', course)">
      Enroll
    </button>
  </div>
</template>

<script setup>
defineProps({
  course: Object
})

defineEmits(['enroll'])
</script>

<style scoped>
.card{
  border:1px solid #ccc;
  border-radius:8px;
  padding:15px;
  margin:15px;
}

button{
  padding:8px 15px;
  cursor:pointer;
}
</style>