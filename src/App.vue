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
    apiUrl: 'https://uf1k81q71i.execute-api.ap-northeast-2.amazonaws.com/prod/api/blog',
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
            posts: response.data
          })
        })
    },
    getPostsByTitle (context, payload) {
      axios.get(`${context.state.apiUrl}/posts/?search=${payload.keyword}`)
        .then((response) => {
          context.commit('replacePosts', {
            posts: response.data
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
