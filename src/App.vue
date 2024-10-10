<template>
  <img alt="Vue logo" src="./assets/laravel.png">
  <h1>{{ $t('write') }}</h1>
  <h4>{{ $t('for') }}</h4>
  <h5>{{ $t('ins') }}</h5>

  <p>{{ $t('welcome') }}</p>
  <p>{{ $t('message') }}</p>

  <button @click="changeLocale('en')">{{ $t('english') }}</button>
  <button @click="changeLocale('km')">{{ $t('khmer') }}</button>
</template>

<script>

export default {
  name: 'App',
  methods: {
    changeLocale(locale) {
      this.$i18n.locale = locale
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
