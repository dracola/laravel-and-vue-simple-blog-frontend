<template>
    <div>
        <b-container>
            <h3 class="text-center">
                Create new post
            </h3>
            <b-row>
                <b-col cols="6">
                    <b-form @submit.prevent="create()">
                        <b-form-group id="title-area"
                                      label="Title:"
                                      label-for="title"
                                      description="The post title">
                            <b-form-input id="title"
                                          type="text"
                                          v-model="post.title"
                                          required
                                          placeholder="Enter post title">
                            </b-form-input>
                        </b-form-group>
                        <b-form-group id="title-area"
                                      label="Body:"
                                      label-for="body"
                                      description="The post body">
                            <b-form-textarea id="body"
                                             v-model="post.body"
                                             placeholder="Enter post body"
                                             :rows="3"
                                             :max-rows="6">
                            </b-form-textarea>
                        </b-form-group>
                        <b-button type="submit" variant="primary">Create post</b-button>
                    </b-form>
                </b-col>
                <b-col cols="2"></b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                post: {
                    title: '',
                    body: ''
                }
            }
        },
        methods: {
            create() {
                this.$http.post('http://localhost:8000/api/posts', this.post).then(res => {
                    console.log(res.data);

                    this.$router.push('/posts')
                })
            }
        }
    }
</script>