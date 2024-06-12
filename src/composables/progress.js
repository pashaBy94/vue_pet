import { computed } from 'vue'
import { getProgressColorClass } from '../utils/functions'
import { calculateActivityCompletionPercentage } from '../utils/activities'
import { timelineItems, calculateTrackedActivitySeconds } from '../utils/timeline-items'

export function useProgress(activity) {
  const colorClass = computed(() => getProgressColorClass(percentage.value))

  const percentage = computed(() =>
    calculateActivityCompletionPercentage(activity, trackedActivitySeconds.value)
  )

  const trackedActivitySeconds = computed(() =>
    calculateTrackedActivitySeconds(timelineItems.value, activity)
  )

  return {
    colorClass,
    percentage,
    trackedActivitySeconds
  }
}
