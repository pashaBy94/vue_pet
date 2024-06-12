<script setup>
import { PAGE_TIMELINE } from '../utils/constants'
import { currentPage, navigate } from '../utils/router'
import { scrollToCurrentHour } from '../utils/timeline-items'

function handleClick() {
  currentPage.value === PAGE_TIMELINE ? scrollToCurrentHour(true) : navigate(PAGE_TIMELINE)
}
</script>

<template>
  <a :href="`#${PAGE_TIMELINE}`" @click="handleClick">
    <img src="../assets/img/logo.png" alt="Logo" class="h-11" />
  </a>
</template>
