<script setup>
import { ICONS } from '../utils/icons'
import { isIconValid } from '../utils/validators'

defineProps({
  name: {
    required: true,
    type: String,
    validator: isIconValid
  }
})
</script>

<template>
  <component :is="ICONS[name]" :class="$attrs.class || 'h-8'" />
</template>
