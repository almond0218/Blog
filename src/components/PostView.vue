<template>
  <div class="post-view">
    <Nav active="post"></Nav>
    <div class="content">
      <div class="post-field">
        <Post v-for="post in posts" :key="post.id" :post-title="post.title" :post-date="post.created_at" :post-id="post.id" :tags="post.tags"></Post>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from '@/components/Nav'
import Post from '@/components/Post'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'PostView',
  components: {
    Nav,
    Post
  },
  created: function () {
    this.getPosts()
  },
  computed: {
    ...mapState({
      posts: state => state.posts
    })
  },
  methods: {
    ...mapActions([
      'getPosts'
    ])
  }
}
</script>

<style scoped>
.content {
  width: 100%;
  height: 100%;

  padding-top: 60px;
  padding-bottom: 60px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.post-field {
  max-width: 700px;
  min-width: 200px;
  width: 70%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
</style>
