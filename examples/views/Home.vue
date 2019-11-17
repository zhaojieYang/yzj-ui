<template>
  <div class="home">

    <yzj-header />
  </div>
</template>

<script>
// @ is an alias to /src
import YzjHeader from "../components/yzj-header.vue";

export default {
  name: 'home',
  components: {
    "yzj-header": YzjHeader
  }
};
</script>
