<script>
/**
 * Recoverpwd component
 */
export default {
    head() {
        return {
            title: `Recover Your Password`,
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

    <!-- title-->
    <h4 class="mt-0">{{$t('Recover Password')}}</h4>
    <p class="text-muted mb-4">{{$t('Enter your email address and we"ll send you an email with instructions to reset your password.')}}</p>

    <!-- form -->
    <form action="#">
        <div class="form-group mb-3">
            <label for="emailaddress">{{$t('Email address')}}</label>
            <input class="form-control" type="email" id="emailaddress" required :placeholder="$t('Enter your email')" />
        </div>

        <div class="form-group mb-0 text-center">
            <button class="btn btn-primary waves-effect waves-light btn-block" type="submit">{{$t('Reset Password')}}</button>
        </div>
    </form>
    <!-- end form-->

    <!-- Footer-->
    <footer class="footer footer-alt">
        <p class="text-muted">
          {{$t('Back to')}}
            <nuxt-link to="/auth/login-2" class="text-primary ml-1">
                <b>{{$t('Log In')}}</b>
            </nuxt-link>
        </p>
    </footer>
</div>
</template>
