<template>
  <div class="nav">
    <nav>
      <router-link to="/" class="logo">블로그</router-link>
      <ul>
        <li><input type="text" class="search" v-model.trim="keyword"></li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import _ from 'lodash'

export default {
  name: 'Nav',
  data: function () {
    return {
      keyword: ''
    }
  },
  watch: {
    keyword: function () {
      this.search()
    }
  },
  methods: {
    ...mapActions([
      'getPostsByTitle',
      'getPostsByTag'
    ]),
    search: _.debounce(
      function () {
        if (this.keyword.startsWith('#')) {
          this.getPostsByTag({
            keyword: this.keyword
          })
        } else {
          this.getPostsByTitle({
            keyword: this.keyword
          })
        }
      },
      500
    )
  }
}
</script>

<style scoped>
.nav {
  width: 100%;
  height: 60px;

  box-shadow: 0 0 1px rgba(0, 0, 0, 0.25);
  position: fixed;
  background-color: white;
}

.search {
  border-radius: 15px;
  border-width: 0px;

  box-shadow: 0 0 1px rgba(0, 0, 0, 0.8);

  font-size: 0.7rem;
  padding: 0.5rem;
  decoration: none;
}

.search:focus {
  outline-width: 0px;
}

nav {
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

a {
  text-decoration: none;
}

.logo {
  color: #2c3e50;
}

ul {
  list-style-type: none;

  display: flex;
  justify-content: center;
  align-items: center;
}

li a {
  color: #81878b;
}

li a:hover {
  color: #2c3e50;
}

/* Smartphones (portrait) ----------- */
@media only screen and (max-width : 767px) {
  .logo {
    margin-left: 2rem;
    font-size: 1.3rem;
  }

  li {
    margin-right: 1.5rem;
  }

  .search {
    display: none;
  }
}

/* iPads (portrait) ----------- */
@media only screen and (min-width : 768px) and (max-width : 1024px) {
  .logo {
    margin-left: 2rem;
    font-size: 1.3rem;
  }

  li {
    margin-right: 1.5rem;
  }
}

/* Desktops and laptops ----------- */
@media only screen  and (min-width : 1025px) {
  .logo {
    margin-left: 6rem;
    font-size: 1.5rem;
  }

  li {
    margin-right: 3rem;
  }
}
</style>
