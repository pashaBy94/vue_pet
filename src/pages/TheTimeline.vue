<script setup>
import { onActivated } from 'vue'
import { timelineItems, timelineItemRefs, scrollToCurrentHour } from '../utils/timeline-items'
import TimelineItem from '../components/TimelineItem.vue'

onActivated(scrollToCurrentHour)
</script>

<template>
  <div class="relative mt-7">
    <ul>
      <TimelineItem
        v-for="timelineItem in timelineItems"
        :key="timelineItem.hour"
        :timeline-item="timelineItem"
        ref="timelineItemRefs"
      />
    </ul>
  </div>
</template>
