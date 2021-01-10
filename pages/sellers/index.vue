
<template>
  <div>
    <PageHeader :title="title" :items="items" />
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <div class="row mb-2">
              <div class="col-sm-6">
<!--                <b-button class="btn-rounded ml-1 text-white" variant="success" :to="`/${model}/create`" dark><span-->
<!--                  class="btn-label"><i class="mdi mdi-plus"></i></span>{{ $t('Create') }}-->
<!--                </b-button>-->
              </div>
              <div class="col-sm-6">
                <div class="float-sm-right">
                  <b-button class="btn-rounded ml-1 text-white" variant="warning" ><span
                    class="btn-label"><i class="mdi mdi-export-variant"></i></span>{{ $t('Export') }}
                  </b-button>
                  <b-button class="btn-rounded ml-1 text-white" variant="info" ><span
                    class="btn-label"><i class="mdi mdi-filter-menu-outline"></i></span>{{ $t('Filter') }}
                  </b-button>
                </div>
              </div><!-- end col-->
            </div>
            <div class="row mb-2">
              <div class="col-sm-12 col-md-6">
                <div id="tickets-table_length" class="dataTables_length">
                  <label class="d-inline-flex align-items-center">
                    Display&nbsp;
                    <b-form-select v-model="perPage" size="sm" :options="pageOptions"></b-form-select>&nbsp;Sellers
                  </label>
                </div>
              </div>
              <!-- Search -->
              <div class="col-sm-12 col-md-6">
                <div id="tickets-table_filter" class="dataTables_filter text-md-right">
                  <label class="d-inline-flex align-items-center">
                    Search:
                    <b-form-input v-model="filter" type="search" placeholder="Search..." class="form-control form-control-sm ml-2"></b-form-input>
                  </label>
                </div>
              </div>
              <!-- End search -->
            </div>
            <!-- Table -->
            <div class="table-responsive mb-0">
              <b-table table-class="table table-centered w-100" thead-tr-class="bg-light" :items="Data" :fields="fields" responsive="sm" :per-page="perPage" :current-page="currentPage" :sort-by.sync="sortBy" :sort-desc.sync="sortDesc" :filter="filter" :filter-included-fields="filterOn" @filtered="onFiltered">
                <template v-slot:cell(check)="data">
                  <div class="custom-control custom-checkbox text-center">
                    <input type="checkbox" class="custom-control-input" :id="`contacusercheck${data.item.id}`" />
                    <label class="custom-control-label" :for="`contacusercheck${data.item.id}`"></label>
                  </div>
                </template>

                <template v-slot:cell(phone)="data">
                  {{ data.item.user.phone }}
                </template>

                <template v-slot:cell(email)="data">
                  {{ data.item.user.email }}
                </template>

                <template v-slot:cell(balance)="data">
                  {{ data.item.amount_pay }}
                </template>

                <template v-slot:cell(balance)="data">
                  {{ data.item.balance }}
                </template>
                <template v-slot:cell(all_sales)="data">
                  {{ data.item.all_sales }}
                </template>
                <template v-slot:cell(orders)="data">
                  {{ data.item.order_details_count }}
                </template>
                <template v-slot:cell(products_count)="data">
                  {{ data.item.products_count }}
                </template>
<!--                <template v-slot:cell(last_order)="data">-->
<!--                  {{ data.item.order_details ?? data.item.order_details[0].created_at }}-->
<!--                </template>-->
                <template v-slot:cell(created_at)="data">
                  {{ data.item.user.created_at }}
                </template>

                <template v-slot:cell(status)="data">
                  <span class="badge" :class="{'badge-soft-success': data.item.status === 'Active', 'badge-soft-danger': data.item.status === 'Blocked'}"> {{ data.item.status }}</span>
                </template>

                <template v-slot:cell(Seller)="data">
                  <div class="media">
                    <img v-if="data.item.user.avatar" :src="data.item.user.avatar" alt="table-user" class="mr-3 rounded-circle avatar-sm" />
                    <div v-if="!data.item.user.avatar" class="avatar-sm mr-3">
                      <div class="avatar-title rounded-circle bg-soft-primary font-weight-medium text-primary">
                        {{ data.item.user.name.charAt(0) }}
                      </div>
                    </div>
                    <div class="media-body">
                      <h5 class="mt-0 mb-1">
                        <a href="javascript:void(0);" class="text-dark">{{
                            data.item.name
                          }}</a>
                      </h5>
                      <p class="mb-0 font-13">ID : {{ data.item.id }}</p>
                    </div>
                  </div>
                </template>

                <template v-slot:cell(Published)="data">
                            <span class="badge badge-soft-success" :class="{'badge-soft-danger': data.item.user.active === 0}">
                              {{ data.item.user.active?'Published':'UnPublished' }}</span>
                </template>


                <template v-slot:cell(action)="data, index">
                  <ul class="list-inline table-action m-0">
                    <li class="list-inline-item">
                      <NuxtLink
                        :to="`${model}/${data.item.id}/view`"
                        class="action-icon text-primary"><i class="mdi mdi-eye"></i></NuxtLink>
                    </li>
                    <li class="list-inline-item">
                      <a href="javascript:void(0);" @click="removeRecord(data.index, data.item.id)" class="action-icon text-danger">
                        <i class="mdi mdi-delete"></i></a>
                    </li>
                  </ul>
                </template>
              </b-table>
            </div>
            <div class="row" v-if="this.totalRows > this.perPage">
              <div class="col">
                <div class="dataTables_paginate paging_simple_numbers float-right">
                  <ul class="pagination rounded">
                    <li>
                      <a href="#" class="btn btn-icon btn-sm btn-light mr-2 my-1" :class="prev ? 'disabled' : ''"
                         @click="prevStep">
                        &laquo;
                      </a>
                    </li>
                    <li v-for="c in count2">
                      <a href="#" :class="current_page === c ? 'active' : ''"
                         class="btn btn-icon btn-sm border-0 btn-light mr-2 my-1"
                         @click.prevent="getData(c)">{{ c }}</a>
                    </li>

                    <li>
                      <a href="#" :class="next ? 'disabled' : ''" class="btn btn-icon btn-sm btn-light mr-2 my-1"
                         @click="nextStep">
                        &raquo;
                      </a>
                    </li>
                    <div style="margin:auto;text-align: left;">
                      <ul  class="pagination">
                        <li class="page-item active"><a class="page-link">Total {{rows}}</a></li>
                      </ul>
                    </div>

                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
/**
 * Sellers component
 */
export default {
  head() {
    return {
      title: `${this.title}`,
    };
  },
  data() {
    return {
      model: "sellers",
      Data: {},
      lang:'ar',
      title: "Sellers List",
      items: [{
        text: "Dashboard"
      },
        {
          text: "Users"
        },
        {
          text: "Sellers List",
          active: true
        }
      ],
      totalRows: 1,
      currentPage: 1,
      perPage: 10,
      pageOptions: [10, 25, 50, 100],
      filter: null,
      filterOn: [],
      sortBy: "",
      sortDesc: false,


      pagination: {},
      dialog: false,
      count2: [],
      stepIndex: '',
      next: false,
      prev: false,
      last_page: '',

      fields: [{
        key: "check",
        label: ""
      },
        {
          key: "Seller",
          sortable: true
        },
        {
          key: "phone",
          sortable: true
        },
        {
          key: "email",
          label: "E Mail",
          sortable: true
        },
        {
          key: "balance",
          label: "Balance",
          sortable: true
        },
        {
          key: "all_sales",
          label: "Sales",
          sortable: true
        },
        {
          key: "orders",
          sortable: true
        },
        {
          key: "last_order",
          label: "Last Order",
          sortable: true
        },
        {
          key: "products_count",
          label: "Products",
          sortable: true
        },
        {
          key: "last_product",
          label: "Last Product",
          sortable: true
        },
        {
          key: "created_at",
          label: "Added Date",
          sortable: true
        },
        {
          key: "Published",
          label: "published",
          sortable: true
        },
        "action"
      ]
    };
  },
  computed: {
    /**
     * Total no. of records
     */
    rows() {
      return this.totalRows;
    }

  },
  mounted() {
    // Set the initial number of items
    this.getData(this.currentPage)
  },
  methods: {
    /**
     * Search the table data with search input
     */
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },

    removeRecord(index, id) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        type: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        confirmButtonClass: "btn btn-success mt-2",
        cancelButtonClass: "btn btn-danger ml-2 mt-2",
        buttonsStyling: false,
      }).then((result) => {
        if (result.value) {
          this.$axios.delete(this.model+ "/" + id + '/destroy')
            .then(response => {
              this.Data.splice(index, 1)
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 1500
              })
              console.log(index);
            })
        } else {
          Swal.fire({
            title: "Cancelled",
            text: "Your imaginary file is safe :)",
            type: "error",
          });
        }
      });
    },

    getData(page){
      console.log(this.perPage);
      this.$axios.get(this.model+'?page='+page+'&to='+this.perPage, {
        headers:{
          'lang': 'ar'
        }
      }).then((response) => {
        this.Data = response.data.data.data;
        this.totalRows = response.data.data.total;
        this.perPage = response.data.data.per_page;
        this.current_page = response.data.data.current_page;
        this.last_page = response.data.data.last_page;
        if (this.count2.length == 0) {
          for (var i = 1; i <= this.last_page; i++) {
            this.count2.push(i)
          }
        }
      }).catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error,
        })
      });
    },

    nextStep(e) {
      e.preventDefault();
      if (this.stepIndex < this.count2.length) {
        this.stepIndex++;
        this.getData(this.stepIndex)
      }
      if (this.stepIndex == this.count2.length) {
        this.next = true
      }
    },
    prevStep(e) {
      e.preventDefault();
      if (this.stepIndex > 1) {
        this.stepIndex--;
        this.getData(this.stepIndex)
      }
      if (this.stepIndex == 1) {
        this.prev = true
      }
    },
    export(e) {
      e.preventDefault();
      if (this.stepIndex > 1) {
        this.stepIndex--;
        this.getData(this.stepIndex)
      }
      if (this.stepIndex == 1) {
        this.prev = true
      }
    },

  },
  // middleware: 'router-auth',
};
</script>

