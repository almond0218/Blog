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
  font-size: 1.2rem;
}

/* Smartphones (portrait) ----------- */
@media only screen and (max-width : 767px) {
  .post-field {
    width: 80%;
  }

  .title {
    font-size: 1.5rem;
  }

  .date {

    font-size: 1.0rem;
  }

  .post-content {
    margin-top: 2rem;
    font-size: 0.8rem;
  }
}

/* iPads (portrait) ----------- */
@media only screen and (min-width : 768px) and (max-width : 1024px) {
  .post-field {
    width: 75%;
  }

  .title {
    font-size: 2.8rem;
  }

  .date {
    font-size: 1.2rem;
  }

  .post-content {
    margin-top: 3rem;
    font-size: 1.2rem;
  }
}

/* Desktops and laptops ----------- */
@media only screen  and (min-width : 1025px) {
    .post-field {
      width: 65%;
    }

    .title {
      font-size: 2.8rem;
    }

    .date {

      font-size: 1.2rem;
    }

    .post-content {
      margin-top: 7rem;
      font-size: 1.2rem;
    }
}
</style>
