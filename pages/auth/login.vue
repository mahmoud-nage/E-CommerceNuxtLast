

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
    <h4 class="mt-0">{{$t('Sign In')}}</h4>
    <p class="text-muted mb-4">{{$t('Enter your email address and password to access admin panel.')}}</p>

    <!-- form -->
    <form action="#">
        <div class="form-group">
            <label for="emailaddress">{{$t('Email address')}}</label>
            <input class="form-control" type="email" id="emailaddress" required :placeholder="$t('Enter your email')" />
        </div>
        <div class="form-group">
            <nuxt-link to="/auth/recoverpwd" class="text-muted float-right">
                <small>{{$t('Forgot your password?')}}</small>
            </nuxt-link>
            <label for="password">{{$t('Password')}}</label>
            <div class="input-group input-group-merge">
                <input :type="passwordFieldType" id="password" class="form-control" :placeholder="$t('Enter your password')" />
                <div class="input-group-append" data-password="false">
                    <div class="input-group-text">
                        <span class="password-eye" @click="switchVisibility"></span>
                    </div>
                </div>
            </div>
        </div>

        <div class="form-group mb-3">
            <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="checkbox-signin" />
                <label class="custom-control-label" for="checkbox-signin">{{$t('Remember me')}}</label>
            </div>
        </div>
        <div class="form-group mb-0 text-center">
            <button class="btn btn-primary btn-block" type="submit">{{$t('Log In')}}</button>
        </div>
    </form>
    <!-- end form-->
    <!-- Footer-->
    <footer class="footer footer-alt">
        <p class="text-muted">
          {{$t('Don"t have an account?')}}

            <nuxt-link to="/auth/register" class="text-primary ml-1">
                <b>{{$t('Sign Up')}}</b>
            </nuxt-link>
        </p>
    </footer>
</div>
</template>

<script>
/**
 * Login-2 component
 */
export default {
  head() {
    return {
      title: 'Login',
    };
  },
  data() {
    return {
      passwordFieldType:''
    };
  },
  methods: {
    switchVisibility(){
      this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
    }
  },
  layout: "auth-2",
};
</script>
