<template>
  <!-- fallback content  -->
  <slot>products</slot>
<div>
  <slot name="title"></slot>
</div>

<div>
  <slot name="image"></slot>
</div>

</template>

<script>
export default {
  setup() {
    return {}
  }
}
</script>

<style lang="scss" scoped></style>
