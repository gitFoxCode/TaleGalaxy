<template>
  <svg class="icon" :class="{ 'icon-spin': spin, 'fill-current': !allowFill }">
    <use :xlink:href="`#${icon}`" />
  </svg>
</template>

<script>
export default {
  name: 'SvgIcon',
  props: {
    icon: {
      type: String,
      required: true,
    },
    allowFill: {
      type: Boolean,
      default: false,
    },
    spin: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style>
svg.icon {
  height: 1em;
  margin-bottom: 0.125em;
  vertical-align: middle;
  width: 1em;
}
svg.icon.fill-current, svg.icon.fill-current * {
  fill: currentColor;
}
svg.icon-spin {
  animation: icon-spin 2s infinite linear;
}
@keyframes icon-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
</style>