<template>
    <div>
        <b-card :title="post.title" :currentUser="currentUser"
                :img-src="post.image_url"
                img-alt="Image"
                img-top
                img-responsive
                tag="article"
                :footer="post.user.name"
                footer-tag="footer"
                class="col-lg-8">
            <p class="card-text">
                {{ post.body | limit }}
                <b-button href="#" variant="primary">Complete reading</b-button>
            </p>
            <p class="card-body" v-if="currentUser.id == post.user_id">
                <b-button variant="danger" @click="$emit('delete-post')">Delete post</b-button>
                <router-link class="btn btn-warning" :to="'/posts/' + post.id + '/edit'">
                    Edit
                </router-link>
            </p>
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
                return value.substring(0, 20) + ' ...'
            }
        },
        computed: {
            currentUser() {
                return this.$auth.getAuthenticatedUser()
            }
        },
        methods: {

        }
    }
</script>