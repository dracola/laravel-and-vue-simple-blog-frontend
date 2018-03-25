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
		},
        created() {
            this.setAuthenticatedUser()
        },
        data() {
		    return {

            }
        },
		methods: {
            setAuthenticatedUser() {
                this.$http.get('api/user')
                    .then(res => {
                        this.$auth.setAuthenticatedUser(res.body)
                    })
            }
        }
	}
</script>
