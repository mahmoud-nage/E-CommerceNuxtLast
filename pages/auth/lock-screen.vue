<script>
/**
 * Lock-screen-2 component
 */
export default {
    head() {
        return {
            title: `Lock Screen`,
        };
    },
    data() {
        return {};
    },
    layout: "auth-2",
};
</script>

<template>
<div>
    <!-- Logo -->
    <div class="auth-brand text-center text-lg-left">
        <div class="auth-logo">
            <nuxt-link to="/" class="logo logo-dark text-center">
                <span class="logo-lg">
                    <img src="~/assets/images/logo-dark.png" alt height="22" />
                </span>
            </nuxt-link>

            <nuxt-link to="/" class="logo logo-light text-center">
                <span class="logo-lg">
                    <img src="~/assets/images/logo-light.png" alt height="22" />
                </span>
            </nuxt-link>
        </div>
    </div>

    <div class="text-center w-75 m-auto">
        <img src="~/assets/images/users/avatar-1.jpg" alt="user-image" class="rounded-circle avatar-lg img-thumbnail" />
        <h4 class="text-dark-50 text-center mt-3">{{$t('Hi ! Nik Patel')}}</h4>
        <p class="text-muted mb-4">{{$t('Enter your password to access the admin.')}}</p>
    </div>

    <form action="#">
        <div class="form-group mb-3">
            <label for="password">{{$t('Password')}}</label>
            <input class="form-control" type="password" required id="password" :placeholder="$t('Enter your password')" />
        </div>

        <div class="form-group mb-0 text-center">
            <button class="btn btn-primary btn-block" type="submit">{{$t('Log In')}}</button>
        </div>
    </form>

    <!-- Footer-->
    <footer class="footer footer-alt">
        <p class="text-muted">
          {{$t('Not you? return')}}
            <nuxt-link to="/auth/login" class="text-primary ml-1">
                <b>{{$t('Sign In')}}</b>
            </nuxt-link>
        </p>
    </footer>
</div>
</template>
