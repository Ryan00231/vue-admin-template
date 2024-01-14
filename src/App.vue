<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { addWatermark } from './utils/watermark';

export default {
  name: 'App',
  mounted() {
    // alert(this.$getCookie());
    const userCookie = this.$getCookie();
    Object.keys(userCookie).forEach(key => {
      console.log(userCookie);
    });
    addWatermark(this.$getCookie('userName'));
  }
};
</script>
