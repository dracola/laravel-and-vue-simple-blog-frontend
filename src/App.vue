<template>
  	<div id="app">
	    <navbar></navbar>
	    <router-view></router-view>
  	</div>
</template>

<script>
	import NavBar from './components/NavBar.vue'
	export default {
		components: {
			'navbar': NavBar
		}
	}
</script>
