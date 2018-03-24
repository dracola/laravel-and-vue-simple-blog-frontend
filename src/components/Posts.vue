<template>
	<div>
		<post v-for="post in posts" :post="post"></post>
	</div>
</template>

<script>
	import Post from './sub-components/Post.vue'

	export default {
		components: {
			'post': Post
		},
		data() {
			return {
				posts: []
			}
		},

		created() {
			this.refreshPosts();
		},

		methods: {
			refreshPosts() {
				let token = this.$auth.getToken()
				console.log(token)
				this.axios.get('http://localhost:8000/api/posts', {
					headers: {'Authorization': 'Bearer ' + token}
				}).then(res => {
					this.posts = res.data
				})
			}
		}
	}
</script>