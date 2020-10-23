<template lang="html">
  <div>
    <span v-for="tag in tags">
      <h2 :id="tag.value">
        <router-link :to="{path: `/tags.html#${tag.value}`}" class="header-anchor" aria-hidden="true">#</router-link>
        {{tag.value}}<template v-if="tag.text"> ({{tag.text}})</template>
      </h2>
      <ul>
        <li v-for="page in tag.pages">
          <router-link :to="{path: page.path}">{{page.title}}</router-link>
        </li>
      </ul>
    </span>
  </div>
</template>
<script>
import _ from 'lodash'
import tagMethods from './mixins/tag-methods'
export default {
  mixins: [tagMethods],
  computed: {
    tags() {
      let tags = {}
      for (let page of this.$site.pages) {
        for (let index in page.frontmatter.tags) {
          const tag = page.frontmatter.tags[index]
          const text = this.getText(tag)
          const value = this.getValue(tag)
          if (value in tags === false) tags[value] = {value, text: null, pages: []}
          // text가 한글인 경우, 따로 저장해둔다.
          if (!tags[value].text && text !== value) tags[value].text = text
          // 이미 추가된 페이지는 스킵
          if (_.findIndex(tags[value].pages, p => p.key === page.key) < 0) tags[value].pages.push(page)
        }
      }
      return _.sortBy(tags, ['value'])
    }
  }
}
</script>