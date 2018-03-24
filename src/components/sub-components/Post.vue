<template>
	<div>
		<b-card :title="post.title"
	            img-src="https://lorempixel.com/600/300/food/5/"
	            img-alt="Image"
	            img-top
	            tag="article"
	            style="max-width: 20rem;"
	            class="col-lg-12">
		    <p class="card-text">
		      	{{ post.body | limit }}
		    </p>
		    <b-button href="#" variant="primary">Complete reading</b-button>
		</b-card>
		<hr>
	</div>
</template>

<script>
	export default {
		props: [
			'post'
		],
		filters: {
			limit(value) {
				return value.substring(0, 20)
			}
		}
	}
</script>