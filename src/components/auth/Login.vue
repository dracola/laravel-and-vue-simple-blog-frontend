<template>
    <div>
        <b-container class="bv-example-row">
            <h3 class="text-center">Login Page</h3>
            <b-row>
                <b-col></b-col>
                <b-col>
                    <b-form @submit.prevent="onSubmit">
                        <b-form-group id="email-area"
                                      label="Email address:"
                                      label-for="email">
                            <b-form-input id="email"
                                          type="email"
                                          v-model="email"
                                          required
                                          placeholder="Enter email">
                            </b-form-input>
                        </b-form-group>
                        <b-form-group id="password-area"
                                      label="Password:"
                                      label-for="password">
                            <b-form-input id="password"
                                          type="password"
                                          v-model="password"
                                          required
                                          placeholder="Enter Password">
                            </b-form-input>
                        </b-form-group>
                        <b-button type="submit" variant="primary" :class="button_show">Login</b-button>
                    </b-form>
                </b-col>
                <b-col></b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                email: 'cschaden@example.net',
                password: 'secret',
                button_show: ''
            }
        },
        methods: {
            onSubmit() {

                let data = {
                    client_id: 2,
                    client_secret: 'wj08IIFGJ5w7PYezyWStUFPYGBvgAujmc0fI6NJ6',
                    grant_type: 'password',
                    username: this.email,
                    password: this.password
                }

                // Make the button disabled
                this.button_show = 'disabled'

                this.$http.post('oauth/token', data).then(res => {
                    this.$auth.setToken(res.data.access_token, res.data.expires_in + Date.now())

                    // Redirect to feed
                    this.$router.push('/posts')
                }).catch(err => {
                    console.log(err);
                    this.button_show = ''
                })
            }
        }
    }
</script>