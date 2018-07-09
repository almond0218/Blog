<template>
  <div class="post-detail-view">
    <Nav></Nav>
    <div class="content">
      <div class="post-field">
        <span class="title">{{ postTitle }}</span>
        <span class="date">{{ postDate }}</span>
        <p class="post-content" v-html="postContent"></p>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from '@/components/Nav'
import axios from 'axios'
import { mapState } from 'vuex'
import marked from 'marked'

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
      axios.get(`${this.apiUrl}/post/${this.$route.params.postId}/`)
        .then((response) => {
          const date = response.data.created_at.split('T')[0].split('-')
          const year = date[0]
          const month = date[1]
          const day = date[2]
          this.postTitle = response.data.title
          this.postDate = `${year}년 ${month}월 ${day}일`
          this.postContent = marked(response.data.content).replace(/<pre>/gi, `<pre style="overflow-wrap: break-word; white-space: pre-wrap; background-color: #f5f7f9; padding: 15px;">`)
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
  width: 65%;

  padding-top: 60px;
  padding-bottom: 60px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.title {
  color: #2c3e50;

  font-size: 2.8rem;
  font-weight: 700;

  margin-top: 60px;

  text-align: center;
}

.date {
  color: #81878b;
  font-size: 1.2rem;

  margin-top: 1rem;
  margin-bottom: 1rem;
}

.post-content {
  color: #34495e;
  width: 100%;
  font-size: 1.2rem;
  margin-top: 7rem;
}
</style>
