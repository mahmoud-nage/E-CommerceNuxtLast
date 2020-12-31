<script>
/**
 * Sellers component
 */
export default {
  head() {
    return {
      title: `${this.title} | Minton - Nuxtjs Responsive Admin Dashboard Template`,
    };
  },
  data() {
    return {
      title: "Sellers",
      items: [{
        text: "Minton",
      },
        {
          text: "eCommerce",
        },
        {
          text: "Sellers",
          active: true,
        },
      ],
      sellersData: [{
        name: "Homovee",
        text: "Charles Garcia",
        products: 125,
        balance: "$126,562",
        revenue: "$235.16k",
      },
        {
          name: "Execucy",
          profile: require("~/assets/images/users/avatar-3.jpg"),
          text: "Nicholas Watkins",
          products: 125,
          balance: "$84,235",
          revenue: "$196.08k",
        },
        {
          name: "Epiloo",
          text: "Jared Carroll",
          products: 96,
          balance: "$124,250",
          revenue: "$201.04k",
        },
        {
          name: "Uberer",
          text: "Gregory Secrest",
          products: 84,
          balance: "$74,236",
          revenue: "$175.12k",
        },
        {
          name: "Symic",
          profile: require("~/assets/images/users/avatar-4.jpg"),
          text: "Leticia Cane",
          products: 134,
          balance: "$92,237",
          revenue: "$172.24k",
        },
        {
          name: "Vicedel",
          profile: require("~/assets/images/users/avatar-5.jpg"),
          text: "Tyler Smith",
          products: 56,
          balance: "$57,235",
          revenue: "$162.52k",
        },
      ],
    };
  },
  // middleware: 'router-auth',
};
</script>

<template>
  <div>
    <PageHeader :title="title" :items="items" />

    <div class="row mb-2">
      <div class="col-sm-4">
        <a href="javascript:void(0);" class="btn btn-danger mb-2">
          <i class="mdi mdi-plus-circle mr-1"></i> Add Sellers
        </a>
      </div>
      <div class="col-sm-8">
        <div class="float-sm-right">
          <form class="form-inline">
            <div class="form-group mr-2">
              <label for="sellersearch-input" class="sr-only">Search</label>
              <input type="search" class="form-control" id="sellersearch-input" placeholder="Search..." />
            </div>
            <button type="button" class="btn btn-success mb-2 mb-sm-0">
              <i class="mdi mdi-cog"></i>
            </button>
          </form>
        </div>
      </div>
      <!-- end col-->
    </div>
    <!-- end row -->

    <div class="row">
      <div class="col-lg-6" v-for="(item, index) in sellersData" :key="index">
        <div class="card">
          <div class="card-body">
            <div class="media">
              <div class="mr-3" v-if="item.profile">
                <img :src="item.profile" alt="user-image" class="rounded avatar-md" />
              </div>
              <div class="avatar-md mr-3" v-else>
                <div class="avatar-title bg-light rounded text-body font-20 font-weight-semibold">{{ item.name.charAt(0) }}</div>
              </div>

              <div class="media-body">
                <h5 class="my-1">
                  <a href="javascript:void(0);" class="text-dark">
                    {{
                      item.name
                    }}
                  </a>
                </h5>
                <p class="text-muted mb-0">
                  <i class="mdi mdi-account mr-1"></i>
                  {{ item.text }}
                </p>
              </div>
              <b-dropdown toggle-class="text-body p-0" right variant="black">
                <template v-slot:button-content>
                  <i class="mdi mdi-dots-vertical font-20"></i>
                </template>
                <b-dropdown-item>Action</b-dropdown-item>
                <b-dropdown-item>Another action</b-dropdown-item>
                <b-dropdown-item>Something else here</b-dropdown-item>
              </b-dropdown>
            </div>
            <hr />
            <div class="text-muted">
              <div class="row">
                <div class="col-sm-4 col-6">
                  <div>
                    <p class="mb-0">Products</p>
                    <h5 class="mb-sm-0">{{ item.products }}</h5>
                  </div>
                </div>
                <div class="col-sm-4 col-6">
                  <div>
                    <p class="mb-0">Wallet Balance</p>
                    <h5 class="mb-sm-0">{{ item.balance }}</h5>
                  </div>
                </div>
                <div class="col-sm-4 col-6">
                  <div class="mt-3 mt-sm-0">
                    <p class="mb-0">Revenue</p>
                    <h5 class="mb-0">{{ item.revenue }}</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end row -->

    <div class="row">
      <div class="col-lg-12">
        <div>
          <div class="text-center my-3">
            <a href="javascript:void(0);" class="text-danger">
              <i class="mdi mdi-spin mdi-loading font-20 align-middle mr-2"></i>
              Load more
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- end row -->
  </div>
</template>
