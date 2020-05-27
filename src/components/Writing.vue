<template>
  <div class="writing">
    <div class="editor">
      <input class="editor__title" type="text" value="">
      <textarea class="editor__content" rows="40" cols="80" v-model="content"></textarea>
    </div>
    <div class="preview markdown-body" v-html="markupContent"></div>
  </div>
</template>

<script>
import hljs from 'highlight.js/lib/core'
import 'highlight.js/styles/atom-one-light.css'

const markdown = require('markdown-it')({
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value
      } catch (__) {}
    }
    return ''
  }
})

export default {
  name: 'Writing',
  data () {
    return {
      content: '',
      markupContent: ''
    }
  },
  watch: {
    content (val) {
      this.markupContent = markdown.render(val)
    }
  }
}
</script>

<style scoped>
.writing {
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: space-around;
  align-items: center;
}

.editor {
  width: 45%;

  overflow-y: scroll;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.editor__title {
  width: 90%;
  font-size: 16px;
}

.editor__content {
  width: 90%;
  height: 400px;
  margin-top: 20px;
  font-size: 16px;
}

.preview {
  width: 45%;
  height: 80%;

  overflow-y: scroll;

  font-size: 16px;
  line-height: 29px;
}
</style>
