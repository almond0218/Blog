<template>
  <div class="post">
    <span class="title"><router-link :to="{ name: 'PostDetailView', params: { postId: postId } }">{{ postTitle }}</router-link></span>
    <span class="date">{{ parsedDate }}</span>
  </div>
</template>

<script>
export default {
  name: 'Post',
  props: {
    postTitle: {
      required: true,
      type: String
    },
    postId: {
      required: true,
      type: Number
    },
    postDate: {
      required: true,
      type: String
    }
  },
  computed: {
    parsedDate: function () {
      const data = this.postDate.split('T')[0].split('-')
      const year = data[0]
      const month = data[1]
      const day = data[2]
      return year + '년 ' + month + '월 ' + day + '일'
    }
  }
}
</script>

<style scoped>
.post {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

.title {
  font-weight: 500;

  margin-top: 1.5rem;
  margin-bottom: 1rem;
  margin-left: 0.5rem;
}

.date {
  color: #81878b;

  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-left: 0.5rem;
}

.title a {
  text-decoration: none;
  color: #2c3e50
}

/* Smartphones (portrait) ----------- */
@media only screen and (max-width : 767px) {
  .title {
      font-size: 1.5rem;
  }

  .date {
    font-size: 0.8rem;
  }
}

/* iPads (portrait) ----------- */
@media only screen and (min-width : 768px) and (max-width : 1024px) {
  .title {
      font-size: 2rem;
  }

  .date {
    font-size: 1.2rem;
  }
}

/* Desktops and laptops ----------- */
@media only screen  and (min-width : 1025px) {
  .title {
      font-size: 2rem;
  }

  .date {
    font-size: 1.2rem;
  }
}
</style>
