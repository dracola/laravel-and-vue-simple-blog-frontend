<template>
    <div>
        <b-navbar toggleable="md" type="dark" variant="info">

            <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

            <b-navbar-brand href="#">Blog</b-navbar-brand>

            <b-collapse is-nav id="nav_collapse">

                <b-navbar-nav>
                    <router-link class="nav-item" to="/login" tag="li" v-if="! isAuth">
                        <a class="nav-link">Login</a>
                    </router-link>
                    <router-link class="nav-item" to="/register" tag="li" v-if="! isAuth">
                        <a class="nav-link">Register</a>
                    </router-link>
                    <router-link class="nav-item" to="/posts" tag="li" v-if="isAuth">
                        <a class="nav-link">Posts</a>
                    </router-link>
                    <router-link class="nav-item" to="/posts/create" tag="li" v-if="isAuth">
                        <a class="nav-link">Create post</a>
                    </router-link>
                </b-navbar-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">

                    <b-nav-form>
                        <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"></b-form-input>
                        <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
                    </b-nav-form>

                    <b-nav-item-dropdown text="Lang" right>
                        <b-dropdown-item href="#">EN</b-dropdown-item>
                    </b-nav-item-dropdown>

                    <b-nav-item-dropdown right>
                        <!-- Using button-content slot -->
                        <template slot="button-content">
                            <em>{{ $auth.getAuthenticatedUser().name }}</em>
                        </template>
                        <b-dropdown-item href="#">Profile</b-dropdown-item>
                        <b-dropdown-item href="#">Sign out</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>

            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isAuth: null
            }
        },
        created() {
            this.isAuth = this.$auth.isAuthenticated()
        }
    }
</script>