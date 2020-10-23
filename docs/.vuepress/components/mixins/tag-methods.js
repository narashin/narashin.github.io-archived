export default {
    methods: {
      getText: function (tag) {
        const index = tag.search(/\(/)
        return index > 0 ? tag.slice(0, index) : tag
      },
      getValue: function (tag) {
        const index = tag.search(/\(/)
        return index > 0 ? tag.slice(index+1, -1) : tag
      }
    }
  }