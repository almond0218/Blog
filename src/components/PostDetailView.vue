<template>
  <div class="post-detail-view">
    <Nav></Nav>
    <div class="content">
      <div class="post-field">
        <span class="title">{{ postTitle }}</span>
        <span class="date">{{ postDate }}</span>
        <div class="post-content markdown-body" v-html="postContent"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from '@/components/Nav'
import axios from 'axios'
import { mapState } from 'vuex'
import hljs from 'highlight.js/lib/core'
import 'highlight.js/styles/atom-one-light.css'

export default {
  name: 'PostDetailView',
  components: {
    Nav
  },
  data: function () {
    return {
      postTitle: '',
      postDate: '',
      postContent: ''
    }
  },
  computed: {
    ...mapState([
      'apiUrl'
    ])
  },
  methods: {
    getPostById: function () {
      axios.get(`${this.apiUrl}/posts/${this.$route.params.postId}/`)
        .then((response) => {
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
          const date = response.data.createdAt.split('T')[0].split('-')
          const year = date[0]
          const month = date[1]
          const day = date[2]
          this.postTitle = response.data.title
          this.postDate = `${year}년 ${month}월 ${day}일`
          this.postContent = markdown.render(response.data.content)
        })
    }
  },
  created: function () {
    this.getPostById()
  }
}
</script>

<style scoped>
.post-detail-view {
  width: 100%;
  height: 100%;
}

.content {
  width: 100%;
  height: calc(100% - 60px);

  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.post-field {
  padding-top: 60px;
  padding-bottom: 60px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.title {
  color: #2c3e50;
  font-weight: 700;
  margin-top: 60px;
  text-align: center;
}

.date {
  color: #81878b;

  margin-top: 1rem;
  margin-bottom: 1rem;
}

.post-content {
  color: #34495e;
  width: 100%;
  line-height: 29px;
}

/* Smartphones (portrait) ----------- */
@media only screen and (max-width : 767px) {
  .post-field {
    width: 80%;
  }

  .title {
    font-size: 28px;
  }

  .date {
    font-size: 14px;
  }

  .post-content {
    margin-top: 2rem;
    font-size: 14px;
  }
}

/* iPads (portrait) ----------- */
@media only screen and (min-width : 768px) and (max-width : 1024px) {
  .post-field {
    width: 75%;
  }

  .title {
    font-size: 32px;
  }

  .date {
    font-size: 16px;
  }

  .post-content {
    margin-top: 3rem;
    font-size: 16px;
  }
}

/* Desktops and laptops ----------- */
@media only screen  and (min-width : 1025px) {
    .post-field {
      width: 65%;
    }

    .title {
      font-size: 42px;
    }

    .date {
      font-size: 16px;
    }

    .post-content {
      margin-top: 3rem;
      font-size: 16px;
    }
}
</style>
