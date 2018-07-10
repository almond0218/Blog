<template>
  <div class="tag">
    <span class="name">{{ tagName }}</span>
  </div>
</template>

<script>
export default {
  name: 'Tag',
  props: {
    tagName: {
      required: true,
      type: String
    }
  }
}
</script>

<style scoped>
.tag {
  box-shadow: 0 0 1px rgba(0,0,0,0.5);

  padding: 0.4rem;
  border-radius: 5px;
}

.name {
  font-size: 0.8rem;
  cursor: default;

  color: #2c3e50;
}

/* Smartphones (portrait) ----------- */
@media only screen and (max-width : 767px) {
  .name {
    font-size: 0.5rem;
  }

  .tag {
    padding: 0.3rem;
  }
}

/* iPads (portrait) ----------- */
@media only screen and (min-width : 768px) and (max-width : 1024px) {
  .name {
    font-size: 0.8rem;
  }

  .tag {
    padding: 0.4rem;
  }
}

/* Desktops and laptops ----------- */
@media only screen  and (min-width : 1025px) {
  .name {
    font-size: 0.8rem;
  }

  .tag {
    padding: 0.4rem;
  }
}
</style>
