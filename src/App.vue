<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    apiUrl: 'https://gwvb3guzwj.execute-api.ap-northeast-2.amazonaws.com/dev/post-api',
    posts: []
  },
  mutations: {
    replacePosts (state, payload) {
      state.posts = payload.posts
    }
  },
  actions: {
    getPosts (context) {
      axios.get(context.state.apiUrl + '/posts/')
        .then((response) => {
          context.commit('replacePosts', {
            posts: response.data.reverse()
          })
        })
    },
    getPostsByTitle (context, payload) {
      axios.get(`${context.state.apiUrl}/posts/search/title/?keyword=${payload.keyword}`)
        .then((response) => {
          context.commit('replacePosts', {
            posts: response.data.reverse()
          })
        })
    },
    getPostsByTag (context, payload) {
      axios.get(`${context.state.apiUrl}/posts/search/tag/?keyword=${payload.keyword.split('#')[1]}`)
        .then((response) => {
          context.commit('replacePosts', {
            posts: response.data.reverse()
          })
        })
    }
  }
})

export default {
  name: 'App',
  store
}
</script>

<style>
#app {
  font-family: "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  width: 100%;
  height: 100%;
}
</style>
