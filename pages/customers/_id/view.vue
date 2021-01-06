<template>
  <div>
    <PageHeader :title="title" :items="items"/>
    <div class="row">
      <div class="col-lg-4 col-xl-4">
        <div class="card">
          <div class="card-body text-center">
            <img v-if="user.avatar" :src="user.avatar" class="rounded-circle avatar-xl img-thumbnail"
                 alt="profile-image"/>
            <div v-if="!user.avatar" class="avatar-xl m-auto">
              <div class="avatar-title rounded-circle bg-soft-primary font-weight-medium text-primary">
                {{ user.name }}
              </div>
            </div>

            <h4 class="mt-3 mb-0">{{ user.name }}</h4>
            <p class="text-muted">@{{ user.user_type }}</p>

            <button type="button" class="btn btn-success btn-xs waves-effect mb-2 waves-light">
              Follow
            </button>
            <button type="button" class="btn btn-danger btn-xs waves-effect mb-2 waves-light">
              Message
            </button>
            <hr>

            <div class="text-left mt-3">
              <div class="table-responsive">
                <table class="table table-borderless table-sm">
                  <tbody>
                  <tr>
                    <th scope="row">Full Name :</th>
                    <td class="text-muted">{{ user.name }}</td>
                  </tr>
                  <tr>
                    <th scope="row">Mobile :</th>
                    <td class="text-muted">{{ user.phone }}</td>
                  </tr>
                  <tr>
                    <th scope="row">Email :</th>
                    <td class="text-muted">{{ user.email }}</td>
                  </tr>
                  <tr>
                    <th scope="row">Location :</th>
                    <td class="text-muted">{{ user.address }}
                      / {{ user.city?lang==='ar'?user.city.name_ar:user.city.name_en:''}}
                      / {{ user.country?lang==='ar'?user.country.name_ar:user.country.name_en:''}}
                    </td>
                  </tr>
                  <hr>
                  <tr>
                    <th scope="row">Gender :</th>
                    <td class="text-muted">
                      <i v-if="user.gender === 'male'" class="mdi mdi-human-child text-success font-18"></i>
                      <i v-else class="mdi mdi-human-female text-pink"></i>
                      {{ user.gender }}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Date Of Birth :</th>
                    <td class="text-muted">{{ user.	dob }}</td>
                  </tr>
                  <tr>
                    <th scope="row">Device :</th>
                    <td class="badge badge-soft-info text-muted">{{ user.device }}</td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <!-- end card-box -->
        </div>
      </div>
      <!-- end col-->

      <div class="col-lg-8 col-xl-8">
        <div class="card">
          <div class="card-body">

            <b-tabs content-class="mt-1" pills class="navtab-bg">
              <b-tab active>
                <template v-slot:title>
                  <i class="mdi mdi-settings-outline mr-1"></i>Orders Statistics
                </template>
                <div class="row">
                  <div class="col-xl-3 col-md-6">
                    <div class="widget-simple text-center card">
                      <div class="card-body">
                        <h2 class="text-success counter mt-0">
                          $
                          <span class="counter ">
                            <countTo :end-val="62" :duration="3000"></countTo>
                          </span>                        </h2>
                        <p class="text-muted mb-0">Total Sales</p>
                      </div>
                    </div>
                  </div>

                  <div class="col-xl-3 col-md-6">
                    <div class="widget-simple text-center card">
                      <div class="card-body">
                        <h2 class="text-primary counter mt-0">
                          <countTo :end-val="62" :duration="3000"></countTo>
                        </h2>
                        <p class="text-muted mb-0">Total Orders</p>
                      </div>
                    </div>
                  </div>

                  <div class="col-xl-3 col-md-6">
                    <div class="widget-simple text-center card">
                      <div class="card-body">
                        <h2 class="text-pink mt-0">
                          $
                          <span class="counter">
                            <countTo :end-val="62" :duration="3000"></countTo>
                          </span>
                        </h2>
                        <p class="text-muted mb-0">Pending Orders</p>
                      </div>
                    </div>
                  </div>

                  <div class="col-xl-3 col-md-6">
                    <div class="widget-simple text-center card">
                      <div class="card-body">
                        <h2 class="text-warning counter mt-0">
                          <countTo :end-val="62" :duration="3000"></countTo>
                        </h2>
                        <p class="text-muted mb-0">On Delivery Orders</p>
                      </div>
                    </div>
                  </div>

                  <div class="col-xl-3 col-md-6">
                    <div class="widget-simple text-center card">
                      <div class="card-body">
                        <h2 class="text-success counter mt-0">
                          <countTo :end-val="62" :duration="3000"></countTo>
                        </h2>
                        <p class="text-muted mb-0">Delivered Orders</p>
                      </div>
                    </div>
                  </div>

                  <div class="col-xl-3 col-md-6">
                    <div class="widget-simple text-center card">
                      <div class="card-body">
                        <h2 class="text-danger counter mt-0">
                          <countTo :end-val="62" :duration="3000"></countTo>
                        </h2>
                        <p class="text-muted mb-0">Canceled Orders</p>
                      </div>
                    </div>
                  </div>
                </div>
              </b-tab>

              <b-tab >
                <template v-slot:title>
                  <i class="mdi mdi-face-profile mr-1"></i>General Statistics
                </template>
                <div class="row">
                  <div class="col-xl-3 col-md-6">
                    <div class="widget-simple text-center card">
                      <div class="card-body">
                        <h2 class="text-success counter mt-0">
                          <countTo :end-val="62" :duration="3000"></countTo>
                        </h2>
                        <p class="text-muted mb-0">Total Reviews</p>
                      </div>
                    </div>
                  </div>

                  <div class="col-xl-3 col-md-6">
                    <div class="widget-simple text-center card">
                      <div class="card-body">
                        <h2 class="text-info counter mt-0">
                          <countTo :end-val="62" :duration="3000"></countTo>
                        </h2>
                        <p class="text-muted mb-0">Total Tickets</p>
                      </div>
                    </div>
                  </div>

                  <div class="col-xl-3 col-md-6">
                    <div class="widget-simple text-center card">
                      <div class="card-body">
                        <h2 class="text-danger counter mt-0">
                          <countTo :end-val="62" :duration="3000"></countTo>
                        </h2>
                        <p class="text-muted mb-0">Total Favorites</p>
                      </div>
                    </div>
                  </div>

                  <div class="col-xl-3 col-md-6">
                    <div class="widget-simple text-center card">
                      <div class="card-body">
                        <h2 class="text-primary counter mt-0">
                          <countTo :end-val="62" :duration="3000"></countTo>
                        </h2>
                        <p class="text-muted mb-0">Total Address</p>
                      </div>
                    </div>
                  </div>

                </div>

                <!-- end tab-pane -->
              </b-tab>
            </b-tabs>
          </div>
          <!-- end card-box-->
        </div>
      </div>

      <div class="col-lg-12 col-xl-12">

        <h5 class="mb-3 mt-5 text-uppercase">
          Orders
        </h5>
        <div class="table-responsive mb-0">
          <table class="table table-borderless mb-0">
            <thead class="thead-light">
            <tr>
              <th>#</th>
              <th>Order ID</th>
              <th>Payment Status</th>
              <th>Payment Method</th>
              <th>Order Status</th>
              <th>Requested Date</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(order,key) in orders">
              <td>{{ key + 1 }}</td>
              <td>
                <nuxt-link :to="`/ecommerce/orders/${order.id}/view`">{{ order.code }}</nuxt-link>
              </td>
              <td>
                <span class="badge badge-soft-success"
                  :class="{'badge-soft-danger': order.payment_status === 'unpaid'}">
                  {{ order.payment_status }}
                </span>
              </td>
              <td>
                <span class="badge badge-soft-warning">
                  {{ order.pmethod }}
                </span>
              </td>
              <td>{{ order.status_id }}</td>
              <td>{{ order.created_at }}</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="col-lg-12 col-xl-12">

        <h5 class="mb-3 mt-5 text-uppercase">
          Reviews
        </h5>
        <div class="table-responsive mb-0">
          <table class="table table-borderless mb-0">
            <thead class="thead-light">
            <tr>
              <th>#</th>
              <th>Project Name</th>
              <th>Rate</th>
              <th>Comment</th>
              <th>Published</th>
              <th>Show In Home</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(review,key) in reviews">
              <td>{{key+1}}</td>
              <td>
                <nuxt-link :to="`/ecommerce/products/${review.product.id}/view`">{{lang==='ar'?review.product.name_ar:review.product.name_en}}</nuxt-link>
              </td>
              <td>
                                                <span class="badge" :class="{
                      'badge-success': review.rate >= 4,
                      'badge-danger': review.rate < 3,
                      'badge-warning':
                        review.rate > 3 && review.rate < 4
                    }"><i class="mdi mdi-star"></i> {{ review.rate }}</span>
              </td>
              <td>{{review.comment}}</td>
              <td>
                <span class="badge badge-soft-success" :class="{'badge-soft-danger': review.active === 0}">
                              {{ review.active?'Published':'UnPublished' }}</span>
              </td>
              <td>
                <span class="badge badge-soft-success" :class="{'badge-soft-danger': review.in_home === 0}">
                              {{ review.in_home?'InHome':'NotInHome' }}</span>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="col-lg-12 col-xl-12">

        <h5 class="mb-3 mt-5 text-uppercase">
          Wishlists
        </h5>
        <div class="table-responsive mb-0">
          <table class="table table-borderless mb-0">
            <thead class="thead-light">
            <tr>
              <th>#</th>
              <th>Project Name</th>
              <th>Added At</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(wishlist,key) in wishlists">
              <td>{{key+1}}</td>
              <td>
                <nuxt-link :to="`/ecommerce/products/${wishlist.product.id}/view`">{{lang==='ar'?wishlist.product.name_ar:review.product.name_en}}</nuxt-link>
              </td>
              <td>{{wishlist.created_at}}</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="col-lg-12 col-xl-12">

        <h5 class="mb-3 mt-5 text-uppercase">
          Tickets
        </h5>
        <div class="table-responsive mb-0">
          <table class="table table-borderless mb-0">
            <thead class="thead-light">
            <tr>
              <th>#</th>
              <th>Ticket Id</th>
              <th>Subject</th>
              <th>Details</th>
              <th>Status</th>
              <th>Viewed</th>
              <th>Added Date</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(ticket,key) in tickets">
              <td>{{key+1}}</td>
              <td>{{ticket.code}}</td>
              <td>{{ticket.subject}}</td>
              <td>{{ticket.details}}</td>
              <td>{{ticket.status}}</td>
              <td>
                <span class="badge badge-soft-success"
                      :class="{'badge-soft-danger': ticket.viewed === 0}">
                  {{ ticket.viewed?'Viewed':"UnViewed" }}
                </span>
              </td>
              <td>{{ticket.created_at}}</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="col-lg-12 col-xl-12">

        <h5 class="mb-3 mt-5 text-uppercase">
          Addresses
        </h5>
        <div class="table-responsive mb-0">
          <table class="table table-borderless mb-0">
            <thead class="thead-light">
            <tr>
              <th>#</th>
              <th>Address Details</th>
              <th>Country</th>
              <th>City</th>
              <th>Phone</th>
              <th>Building No</th>
              <th>Added Date</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(address,key) in addresses">
              <td>{{key+1}}</td>
              <td>{{address.address_details}}</td>
              <td>{{address.country.name_en}}</td>
              <td>{{address.city.name_en}}</td>
              <td>{{address.phone}}</td>
              <td>{{address.building_no}}</td>
              <td>{{address.created_at}}</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
      <!-- end col -->
    </div>
    <!-- end row-->
  </div>
</template>

<script>

import countTo from 'vue-count-to'
import {
  widgetData,
  widgetuser,
  widget,
  revenueAreaChart,
  revenueBarChart,
  revenueLineColumnChart,
  revenueLineChart,
  revenueRealTimeChart,
  revenuePieChart,
  getNewRealTimeSeries,
} from './data'

/**
 * Contacts profile component
 */
export default {
  head() {
    return {
      title: `${this.title} | Minton - Nuxtjs Responsive Admin Dashboard Template`,
    };
  },
  components: {
    apexchart: () => import('vue-apexcharts'),
    countTo
  },
  data() {
    return {
      title: "Profile",
      model: "customers",
      user: {},
      data: {},
      orders: {},
      wishlists: {},
      reviews: {},
      tickets: {},
      addresses: {},
      lang:'ar',
      items: [{
        text: 'Dashboard',
        href: '/',
      },
        {
          text: 'Customers',
          href: '/customers',
        },
        {
          text: 'Profile',
          active: true,
        },
      ],
      id: ''
    };
  },
  mounted() {
    this.id = this.$route.params.id
    this.getRecord()
    window.setInterval(() => {
      this.revenueRealTimeChart['series'] = [{
        name: 'Data',
        data: getNewRealTimeSeries({
          min: 10,
          max: 90,
        }),
      },]
    }, 1000)
  },
  methods: {
    getRecord() {
      this.$axios.get(this.model + '/' + this.id)
        .then(response => {
          console.log(response.data.data.user);
          this.data = response.data.data
          this.user = response.data.data.user
          this.orders = response.data.data.orders
          this.wishlists = response.data.data.wishlists
          this.reviews = response.data.data.reviews
          this.tickets = response.data.data.tickets
          this.addresses = response.data.data.address
        })
    },

  }
  // middleware: 'router-auth'
};
</script>
