<template>
    <div>
        <b-container>
            <h3 class="text-center">
                Create new post
            </h3>
            <b-row>
                <b-col cols="6">
                    <b-form @submit.prevent="create">
                        <input type="file" ref="file" name="image" class="form-control" @change="imageChanged">
                        <div class="mt-3">Selected file: {{post.image && post.image.name}}</div>
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
                        <b-button type="submit" variant="primary" :class="show_button">Create post</b-button>
                    </b-form>
                </b-col>
                <b-col cols="2"></b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import InputGroup from "bootstrap-vue/es/components/input-group/input-group";

    export default {
        components: {InputGroup},
        data() {
            return {
                post: {
                    title: '',
                    body: '',
                    image: ''
                },
                show_button: ''
            }
        },
        methods: {
            create() {
                let formData = new FormData();
                formData.append('title', this.post.title)
                formData.append('body', this.post.body)
                formData.append('image', this.post.image)

                this.show_button = 'disabled'
                this.$http.post('http://localhost:8000/api/posts', formData).then(res => {
                    console.log(res.data);

                    this.$router.push('/posts')
                }).catch(err => {
                    console.log(err)
                    this.show_button = ''
                })
            },
            imageChanged() {
                this.post.image = this.$refs.file.files[0];
                console.log(this.post.image)
            }
        }
    }
</script>