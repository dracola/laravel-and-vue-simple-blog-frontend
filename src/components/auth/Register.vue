<template>
	<div>
		<b-container class="bv-example-row">
			<h3 class="text-center">Register Page</h3>
		    <b-row>
		        <b-col></b-col>
		        <b-col>
		        	<b-form @submit.prevent="onSubmit">
		        		<b-form-group id="name-area"
				                    label="Name:"
				                    label-for="name">
				        	<b-form-input id="name"
				                      type="text"
				                      v-model="name"
				                      required
				                      placeholder="Enter name">
				        	</b-form-input>
				      	</b-form-group>
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
				name: '',
				email: '',
				password: ''
			}
		},
		methods: {
			onSubmit() {
				alert('submitted!');
			}
		}
	}
</script>