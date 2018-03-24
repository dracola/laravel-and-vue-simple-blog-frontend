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
				      	<b-button type="submit" variant="primary">Login</b-button>
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
				password: 'secret'
			}
		},
		methods: {
			onSubmit() {

				let data = {
					client_id: 2,
					client_secret: 'wj08IIFGJ5w7PYezyWStUFPYGBvgAujmc0fI6NJ6',
					grant_type: 'password',
					username: this.email,
					password: 'secret'
				}

				this.axios.post('http://localhost:8000/oauth/token', data).then(res => {
					console.log(res.data)
					this.$auth.setToken(res.data.access_token, res.data.expires_in + Date.now())
					console.log(this.$auth.isAuthenticated());

					// Redirect to feed
					this.$router.push('/feed')
				})
			}
		}
	}
</script>