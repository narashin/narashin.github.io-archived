<template lang="html">
  <div v-if="isNotEmpty" class="wrap">
    Tags :
    <router-link v-for="tag in $page.frontmatter.tags" :key="tag" :to="{path: `/tags.html#${getValue(tag)}`}">
      #{{getText(tag)}}
    </router-link>
  </div>
</template>
<script>
import tagMethods from './mixins/tag-methods'
export default {
  mixins: [tagMethods],
  computed: {
    isNotEmpty() {
      const { tags } = this.$page.frontmatter
      return Array.isArray(tags) && tags.length > 0
    }
  }
}
</script>
<style scoped>
.wrap{
    background-color: #e2ffe6;
    padding: .5em;
    border-radius: .5em;
}
</style>