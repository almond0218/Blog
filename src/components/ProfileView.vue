<template>
  <div class="profile-view">
    <Nav active="profile"></Nav>
    <div class="content">

    </div>
  </div>
</template>

<script>
import Nav from '@/components/Nav'

export default {
  name: 'ProfileView',
  components: {
    Nav
  }
}
</script>

<style scoped>
.content {
  padding-top: 60px;
}
</style>
