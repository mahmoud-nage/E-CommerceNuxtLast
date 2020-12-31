<script>
/**
 * Topbar component
 */
export default {
    data() {
        return {
            languages: [{
                flag: require("~/assets/images/flags/arabic.png"),
                language: "ar",
                title: "Arabic",
              },{
                    flag: require("~/assets/images/flags/us.jpg"),
                    language: "en",
                    title: "English",
                },
            ],
            current_language: this.$i18n.locale,
            text: null,
            flag: null,
            value: null,
        };
    },
    mounted() {
        this.value = this.languages.find((x) => x.language === this.$i18n.locale);
        this.text = this.value.title;
        this.flag = this.value.flag;
    },
    methods: {
        /**
         * Toggle menu
         */
        toggleMenu() {
            this.$parent.toggleMenu();
        },
        /**
         * Full screen
         */
        initFullScreen() {
            document.body.classList.toggle("fullscreen-enable");
            if (
                !document.fullscreenElement &&
                /* alternative standard method */
                !document.mozFullScreenElement &&
                !document.webkitFullscreenElement
            ) {
                // current working methods
                if (document.documentElement.requestFullscreen) {
                    document.documentElement.requestFullscreen();
                } else if (document.documentElement.mozRequestFullScreen) {
                    document.documentElement.mozRequestFullScreen();
                } else if (document.documentElement.webkitRequestFullscreen) {
                    document.documentElement.webkitRequestFullscreen(
                        Element.ALLOW_KEYBOARD_INPUT
                    );
                }
            } else {
                if (document.cancelFullScreen) {
                    document.cancelFullScreen();
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if (document.webkitCancelFullScreen) {
                    document.webkitCancelFullScreen();
                }
            }
        },
        /**
         * Toggle rightbar
         */
        toggleRightSidebar() {
            this.$parent.toggleRightSidebar();
        },
        /**
         * Set languages
         */
        setLanguage(locale, country, flag) {
            this.$i18n.locale = locale;
            this.current_language = locale;
            this.text = country;
            this.flag = flag;
        },
        /**
         * Horizontal-toggle menu
         */
        horizonalmenu() {
            let element = document.getElementById("topnav-menu-content");
            element.classList.toggle("show");
        },
        /**
         * Logout user
         */
        logoutUser() {
            // if (process.env.auth === "firebase") {
            //     this.$store.dispatch("auth/logOut");
            // } else if (process.env.auth === "fakebackend") {
            //     this.$store.dispatch("authfack/logout");
            // }
            this.$router.push({
                path: "/account/login",
            });
        },
    },
};
</script>

<template>
<!-- Topbar Start -->
<div class="navbar-custom">
    <div class="container-fluid">
        <ul class="list-unstyled topnav-menu float-right mb-0">
            <li class="d-none d-lg-block">
                <form class="app-search">
                    <div class="app-search-box">
                        <div class="input-group">
                            <input type="search" class="form-control" :placeholder="$t('navbar.search.text')" id="top-search" />
                            <div class="input-group-append">
                                <button class="btn" type="submit">
                                    <i class="fe-search"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </li>

            <li class="dropdown d-inline-block d-lg-none">
                <a class="nav-link dropdown-toggle arrow-none waves-effect waves-light" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                    <i class="fe-search noti-icon"></i>
                </a>
                <div class="dropdown-menu dropdown-lg dropdown-menu-right p-0">
                    <form class="p-3">
                        <input type="text" class="form-control" :placeholder="$t('navbar.search.text')" aria-label="Recipient's username" />
                    </form>
                </div>
            </li>

            <li class="dropdown d-none d-lg-inline-block">
                <a class="nav-link dropdown-toggle arrow-none waves-effect waves-light" @click="initFullScreen" data-toggle="fullscreen" href="#">
                    <i class="fe-maximize noti-icon"></i>
                </a>
            </li>
            <b-nav-item-dropdown variant="white" class="d-none d-lg-inline-block topbar-dropdown" toggle-class="nav-link" right menu-class="dropdown-lg p-0">
                <template v-slot:button-content>
                    <i class="fe-grid noti-icon"></i>
                </template>
                <div class="px-lg-2">
                    <div class="row no-gutters">
                        <div class="col">
                            <a class="dropdown-icon-item" href="#">
                                <img src="~/assets/images/brands/github.png" alt="Github" />
                                <span>{{ $t('navbar.dropdown.site.list.github') }}</span>
                            </a>
                        </div>
                        <div class="col">
                            <a class="dropdown-icon-item" href="#">
                                <img src="~/assets/images/brands/dribbble.png" alt="dribbble" />
                                <span>{{ $t('navbar.dropdown.site.list.dribbble') }}</span>
                            </a>
                        </div>
                        <div class="col">
                            <a class="dropdown-icon-item" href="#">
                                <img src="~/assets/images/brands/slack.png" alt="slack" />
                                <span>{{ $t('navbar.dropdown.site.list.slack') }}</span>
                            </a>
                        </div>
                    </div>

                    <div class="row no-gutters">
                        <div class="col">
                            <a class="dropdown-icon-item" href="#">
                                <img src="~/assets/images/brands/g-suite.png" alt="G Suite" />
                                <span>{{ $t('navbar.dropdown.site.list.g-suite') }}</span>
                            </a>
                        </div>
                        <div class="col">
                            <a class="dropdown-icon-item" href="#">
                                <img src="~/assets/images/brands/bitbucket.png" alt="bitbucket" />
                                <span>{{ $t('navbar.dropdown.site.list.bitbucket') }}</span>
                            </a>
                        </div>
                        <div class="col">
                            <a class="dropdown-icon-item" href="#">
                                <img src="~/assets/images/brands/dropbox.png" alt="dropbox" />
                                <span>{{ $t('navbar.dropdown.site.list.dropbox') }}</span>
                            </a>
                        </div>
                    </div>
                </div>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown variant="white" class="d-none d-lg-inline-block" right toggle-class="header-item">
                <template v-slot:button-content>
                    <img class :src="flag" alt="Header Language" height="16" />
                    {{text}}
                </template>
                <b-dropdown-item class="notify-item" v-for="(entry, i) in languages" :key="`Lang${i}`" :value="entry" @click="setLanguage(entry.language, entry.title, entry.flag)" :link-class="{'active': entry.language === current_language}">
                    <img :src="`${entry.flag}`" alt="user-image" class="mr-1" height="12" />
                    <span class="align-middle">{{ entry.title }}</span>
                </b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item-dropdown right class="notification-list" menu-class="dropdown-lg">
                <template slot="button-content" class="nav-link dropdown-toggle">
                    <i class="fe-bell noti-icon"></i>
                    <span class="badge badge-danger rounded-circle noti-icon-badge">{{ $t('navbar.dropdown.notifications.badge')}}</span>
                </template>

                <a href="#" class="dropdown-item noti-title">
                    <h5 class="m-0">
                        <span class="float-right">
                            <a href class="text-dark">
                                <small>{{ $t('navbar.dropdown.notifications.subtext')}}</small>
                            </a>
                        </span>
                        {{ $t('navbar.dropdown.notifications.text')}}
                    </h5>
                </a>

                <simplebar style="max-height: 230px;">
                    <a href="javascript:void(0);" class="dropdown-item notify-item active">
                        <div class="notify-icon bg-soft-primary text-primary">
                            <i class="mdi mdi-comment-account-outline"></i>
                        </div>
                        <p class="notify-details">
                            {{ $t('navbar.dropdown.notifications.1.title')}}
                            <small class="text-muted">{{ $t('navbar.dropdown.notifications.1.text')}}</small>
                        </p>
                    </a>

                    <!-- item-->
                    <a href="javascript:void(0);" class="dropdown-item notify-item">
                        <div class="notify-icon">
                            <img src="~/assets/images/users/avatar-2.jpg" class="img-fluid rounded-circle" alt />
                        </div>
                        <p class="notify-details">{{ $t('navbar.dropdown.notifications.2.title')}}</p>
                        <p class="text-muted mb-0 user-msg">
                            <small>{{ $t('navbar.dropdown.notifications.2.text')}}</small>
                        </p>
                    </a>

                    <!-- item-->
                    <a href="javascript:void(0);" class="dropdown-item notify-item">
                        <div class="notify-icon">
                            <img src="~/assets/images/users/avatar-4.jpg" class="img-fluid rounded-circle" alt />
                        </div>
                        <p class="notify-details">{{ $t('navbar.dropdown.notifications.3.title')}}</p>
                        <p class="text-muted mb-0 user-msg">
                            <small>{{ $t('navbar.dropdown.notifications.3.text')}}</small>
                        </p>
                    </a>

                    <!-- item-->
                    <a href="javascript:void(0);" class="dropdown-item notify-item">
                        <div class="notify-icon bg-soft-warning text-warning">
                            <i class="mdi mdi-account-plus"></i>
                        </div>
                        <p class="notify-details">
                            {{ $t('navbar.dropdown.notifications.4.title')}}
                            <small class="text-muted">{{ $t('navbar.dropdown.notifications.4.text')}}</small>
                        </p>
                    </a>

                    <!-- item-->
                    <a href="javascript:void(0);" class="dropdown-item notify-item">
                        <div class="notify-icon bg-info">
                            <i class="mdi mdi-comment-account-outline"></i>
                        </div>
                        <p class="notify-details">
                            {{ $t('navbar.dropdown.notifications.5.title')}}
                            <small class="text-muted">{{ $t('navbar.dropdown.notifications.5.text')}}</small>
                        </p>
                    </a>

                    <!-- item-->
                    <a href="javascript:void(0);" class="dropdown-item notify-item">
                        <div class="notify-icon bg-secondary">
                            <i class="mdi mdi-heart"></i>
                        </div>
                        <p class="notify-details">
                            {{ $t('navbar.dropdown.notifications.6.title')}}
                            <small class="text-muted">{{ $t('navbar.dropdown.notifications.6.text')}}</small>
                        </p>
                    </a>
                </simplebar>

                <a href="javascript:void(0);" class="dropdown-item text-center text-primary notify-item notify-all">
                    {{ $t('navbar.dropdown.notifications.button')}}
                    <i class="fi-arrow-right"></i>
                </a>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown right class="notification-list topbar-dropdown" menu-class="profile-dropdown" toggle-class="p-0">
                <template slot="button-content" class="nav-link dropdown-toggle">
                    <div class="nav-user mr-0">
                        <img src="~/assets/images/users/avatar-1.jpg" alt="user-image" class="rounded-circle" />
                        <span class="pro-user-name ml-1">
                            {{ $t('navbar.dropdown.name.text') }}
                            <i class="mdi mdi-chevron-down"></i>
                        </span>
                    </div>
                </template>

                <b-dropdown-header>
                    <h6 class="text-overflow m-0 py-2">{{ $t('navbar.dropdown.name.list.greet') }}</h6>
                </b-dropdown-header>

                <b-dropdown-item href="#">
                    <i class="remixicon-account-circle-line"></i>
                    <span>{{ $t('navbar.dropdown.name.list.account') }}</span>
                </b-dropdown-item>

                <b-dropdown-item href="#">
                    <i class="remixicon-settings-3-line"></i>
                    <span>{{ $t('navbar.dropdown.name.list.settings') }}</span>
                </b-dropdown-item>

                <b-dropdown-item href="#">
                    <i class="remixicon-wallet-line"></i>
                    <span>
                        {{ $t('navbar.dropdown.name.list.mywallet') }}
                        <span class="badge badge-success float-right">3</span>
                    </span>
                </b-dropdown-item>

                <b-dropdown-item href="#">
                    <i class="remixicon-lock-line"></i>
                    <span>{{ $t('navbar.dropdown.name.list.lockscreen') }}</span>
                </b-dropdown-item>

                <b-dropdown-divider></b-dropdown-divider>
                <a class="dropdown-item" @click="logoutUser" href="jvascript: void(0);">
                    <i class="fe-log-out mr-1"></i>
                    <span>{{ $t('navbar.dropdown.name.list.logout') }}</span>
                </a>
            </b-nav-item-dropdown>

            <li class="dropdown notification-list">
                <a href="javascript:void(0);" @click="toggleRightSidebar" class="nav-link right-bar-toggle toggle-right">
                    <i class="fe-settings noti-icon toggle-right"></i>
                </a>
            </li>
        </ul>

        <!-- LOGO -->
        <div class="logo-box">
            <nuxt-link to="/" class="logo logo-dark text-center">
                <span class="logo-sm">
                    <img src="~/assets/images/logo-sm-dark.png" alt height="24" />
                    <!-- <span class="logo-lg-text-light">Minton</span> -->
                </span>
                <span class="logo-lg">
                    <img src="~/assets/images/logo-dark.png" alt height="20" />
                    <!-- <span class="logo-lg-text-light">M</span> -->
                </span>
            </nuxt-link>

            <nuxt-link to="/" class="logo logo-light text-center">
                <span class="logo-sm">
                    <img src="~/assets/images/logo-sm.png" alt height="24" />
                </span>
                <span class="logo-lg">
                    <img src="~/assets/images/logo-light.png" alt height="20" />
                </span>
            </nuxt-link>
        </div>

        <ul class="list-unstyled topnav-menu topnav-menu-left m-0">
            <li>
                <button class="button-menu-mobile waves-effect waves-light" @click="toggleMenu">
                    <i class="fe-menu"></i>
                </button>
            </li>

            <li>
                <!-- Mobile menu toggle (Horizontal Layout)-->
                <a class="navbar-toggle nav-link" data-toggle="collapse" @click="horizonalmenu()" data-target="#topnav-menu-content">
                    <div class="lines">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </a>
                <!-- End mobile menu toggle-->
            </li>
            <b-nav-item-dropdown class="d-none d-lg-block">
                <template slot="button-content">
                    {{ $t('navbar.dropdown.createnew.text') }}
                    <i class="mdi mdi-chevron-down"></i>
                </template>
                <b-dropdown-item href="/ecommerce/products/product-create">
                    <i class="ri-product-hunt-line mr-1"></i>
                    <span>{{ $t('navbar.dropdown.createnew.list.product') }}</span>
                </b-dropdown-item>
                <b-dropdown-item href="/ecommerce/flashdeals/create">
                    <i class="ri-gift-2-line mr-1"></i>
                    <span>{{ $t('navbar.dropdown.createnew.list.flashDeal') }}</span>
                </b-dropdown-item>
                <b-dropdown-item href="/ecommerce/coupons/create">
                    <i class="ri-coupon-2-line mr-1"></i>
                    <span>{{ $t('navbar.dropdown.createnew.list.coupon') }}</span>
                </b-dropdown-item>
                <b-dropdown-item href="/ecommerce/brands/create">
                    <i class="fe-align-left mr-1"></i>
                    <span>{{ $t('navbar.dropdown.createnew.list.brand') }}</span>
                </b-dropdown-item>
                <b-dropdown-item href="/staffs/create">
                    <i class="ri-user-settings-line mr-1"></i>
                    <span>{{ $t('navbar.dropdown.createnew.list.staff') }}</span>
                </b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown class="dropdown-mega d-none d-md-block" variant="black" menu-class="dropdown-megamenu">
                <template v-slot:button-content>
                    {{ $t('navbar.dropdown.megamenu.text') }}
                    <i class="mdi mdi-chevron-down"></i>
                </template>

                <div class="row">
                    <div class="col-sm-12">
                        <div class="row">
                            <div class="col-md-3">
                                <h5 class="text-dark mt-0">{{ $t('navbar.dropdown.megamenu.businessSettings.title') }}</h5>
                                <ul class="list-unstyled megamenu-list">
                                    <li>
                                      <nuxt-link to="/settings/businessSettings">{{ $t('navbar.dropdown.megamenu.businessSettings.list.activation') }}</nuxt-link>
                                    </li>
                                    <li>
                                      <nuxt-link to="/settings/businessSettings/paymentMethods">{{ $t('navbar.dropdown.megamenu.businessSettings.list.paymentMethods') }}</nuxt-link>
                                    </li>
                                    <li>
                                      <nuxt-link to="/settings/businessSettings/shipmentMethods">{{ $t('navbar.dropdown.megamenu.businessSettings.list.shipmentMethods') }}</nuxt-link>
                                    </li>
                                    <li>
                                      <nuxt-link to="/settings/businessSettings/STMPSettings">{{ $t('navbar.dropdown.megamenu.businessSettings.list.STMPSettings') }}</nuxt-link>
                                    </li>
                                    <li>
                                      <nuxt-link to="/settings/businessSettings/socialMediaSettings">{{ $t('navbar.dropdown.megamenu.businessSettings.list.socialMediaSettings') }}</nuxt-link>
                                    </li>
                                    <li>
                                      <nuxt-link to="/settings/businessSettings/googleAnalytics">{{ $t('navbar.dropdown.megamenu.businessSettings.list.googleAnalytics') }}</nuxt-link>
                                    </li>
                                    <li>
                                      <nuxt-link to="/settings/businessSettings/facebookChat">{{ $t('navbar.dropdown.megamenu.businessSettings.list.facebookChat') }}</nuxt-link>
                                    </li>
                                    <li>
                                      <nuxt-link to="/settings/businessSettings/facebookBlogs">{{ $t('navbar.dropdown.megamenu.businessSettings.list.facebookBlogs') }}</nuxt-link>
                                    </li>
                                </ul>
                            </div>

                            <div class="col-md-3">
                                <h5 class="text-dark mt-0">{{ $t('navbar.dropdown.megamenu.appSettings.title') }}</h5>
                                <ul class="list-unstyled megamenu-list">
                                  <li>
                                    <nuxt-link to="/settings/appSettings/banners">{{ $t('navbar.dropdown.megamenu.appSettings.list.banners') }}</nuxt-link>
                                  </li>
                                  <li>
                                    <nuxt-link to="/settings/appSettings/sliders">{{ $t('navbar.dropdown.megamenu.appSettings.list.sliders') }}</nuxt-link>
                                  </li>
                                  <li>
                                    <nuxt-link to="/settings/appSettings/products">{{ $t('navbar.dropdown.megamenu.appSettings.list.products') }}</nuxt-link>
                                  </li>
                                  <li>
                                    <nuxt-link to="/settings/appSettings/coupons">{{ $t('navbar.dropdown.megamenu.appSettings.list.coupons') }}</nuxt-link>
                                  </li>
                                  <li>
                                    <nuxt-link to="/settings/appSettings/flashDeals">{{ $t('navbar.dropdown.megamenu.appSettings.list.flashDeals') }}</nuxt-link>
                                  </li>
                                  <li>
                                    <nuxt-link to="/settings/appSettings/contests">{{ $t('navbar.dropdown.megamenu.appSettings.list.contests') }}</nuxt-link>
                                  </li>
                                </ul>
                            </div>

                            <div class="col-md-3">
                                <h5 class="text-dark mt-0">{{ $t('navbar.dropdown.megamenu.frontSettings.title') }}</h5>
                                <ul class="list-unstyled megamenu-list">
                                  <li>
                                    <nuxt-link to="/settings/frontSettings/banners">{{ $t('navbar.dropdown.megamenu.frontSettings.list.banners') }}</nuxt-link>
                                  </li>
                                  <li>
                                    <nuxt-link to="/settings/frontSettings/sliders">{{ $t('navbar.dropdown.megamenu.frontSettings.list.sliders') }}</nuxt-link>
                                  </li>
                                  <li>
                                    <nuxt-link to="/settings/frontSettings/usefulLinks">{{ $t('navbar.dropdown.megamenu.frontSettings.list.usefulLinks') }}</nuxt-link>
                                  </li>
                                  <li>
                                    <nuxt-link to="/settings/policies">{{ $t('navbar.dropdown.megamenu.frontSettings.list.policies') }}</nuxt-link>
                                  </li>
                                </ul>
                            </div>

                            <div class="col-md-3">
                                <h5 class="text-dark mt-0">{{ $t('navbar.dropdown.megamenu.generalSettings') }}</h5>
                                <ul class="list-unstyled megamenu-list">
                                  <li>
                                    <nuxt-link to="/settings/generalSettings">{{ $t('navbar.dropdown.megamenu.generalSettings') }}</nuxt-link>
                                  </li>
                                  <li>
                                    <nuxt-link to="/settings/logoSettings">{{ $t('navbar.dropdown.megamenu.logoSettings') }}</nuxt-link>
                                  </li>
                                  <li>
                                    <nuxt-link to="/settings/metaSettings">{{ $t('navbar.dropdown.megamenu.metaSettings') }}</nuxt-link>
                                  </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </b-nav-item-dropdown>
        </ul>
        <div class="clearfix"></div>
    </div>
</div>
<!-- end Topbar -->
</template>
