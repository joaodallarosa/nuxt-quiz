<!-- components/CodeText.vue -->
<template>
  <p class="prose">
    {{ text }}
  </p>
</template>

<script setup>
defineProps({ text: String, default: "" });

function formatCode(str) {
  return str ? str.replace(/`([^`]+)`/g, "<code>$1</code>") : "";
}
</script>
