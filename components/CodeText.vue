<!-- components/CodeText.vue -->
<template>
  <p v-html="formatCode(text)" class="prose" />
</template>

<script setup>
defineProps({ text: String, default: "" });

function formatCode(str) {
  return str ? str.replace(/`([^`]+)`/g, "<code>$1</code>") : "";
}
</script>
