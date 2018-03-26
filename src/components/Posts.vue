<template>
    <div>
        <post v-for="post in posts"
              :post="post"
              :key="post.id"
              @delete-post="deletePost(post)"></post>
    </div>
</template>

<script>
    import Post from './posts/Post.vue'
    import swal from 'sweetalert'

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
            this.getPosts();
        },

        methods: {
            getPosts() {
                this.$http.get('http://localhost:8000/api/posts').then(res => {
                    this.posts = res.data
                })
            },
            deletePost(post) {
                swal({
                    title: "Are you sure want to delete " + post.title + " ?",
                    text: "Once deleted, you will not be able to recover this post",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                }).then((willDelete) => {
                    if (willDelete) {
                        this.$http.delete('api/posts/ ' + post.id).then(res => {
                            console.log(res)
                        })

                        let index = this.posts.indexOf(post)
                        // Remove it from dom
                        this.posts.splice(index, 1)

                        swal("The post was deleted", {
                            icon: "success",
                        });
                    } else {
                        swal("You posts is save :)");
                    }
                });
            }
        }
    }
</script>