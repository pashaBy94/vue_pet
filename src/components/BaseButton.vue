<script>
import {
  BUTTON_TYPE_PRIMARY,
  BUTTON_TYPE_SUCCESS,
  BUTTON_TYPE_WARNING,
  BUTTON_TYPE_DANGER,
  BUTTON_TYPE_NEUTRAL
} from '../utils/constants'

const typeClasses = {
  [BUTTON_TYPE_PRIMARY]: 'bg-lime-500 enabled:hover:bg-lime-600 text-white',
  [BUTTON_TYPE_SUCCESS]: 'bg-blue-500 enabled:hover:bg-blue-600 text-white',
  [BUTTON_TYPE_WARNING]: 'bg-red-500 enabled:hover:bg-red-600 text-white',
  [BUTTON_TYPE_DANGER]: 'bg-orange-500 enabled:hover:bg-orange-600 text-white',
  [BUTTON_TYPE_NEUTRAL]: 'bg-gray-100 enabled:hover:bg-gray-200'
}
</script>

<script setup>
import { isButtonTypeValid } from '../utils/validators'

const props = defineProps({
  type: {
    default: BUTTON_TYPE_PRIMARY,
    type: String,
    validator: isButtonTypeValid
  }
})

const classes = [
  'rounded-xl p-3 disabled:cursor-not-allowed disabled:opacity-50',
  typeClasses[props.type]
]
</script>

<template>
  <button :class="classes" class="rounded-xl">
    <slot />
  </button>
</template>
