<script>
import {
  productData
} from "./data";

/**
 * Products-list component
 */
export default {
  head() {
    return {
      title: `${this.title}`,
    };
  },
  data() {
    return {
      model:"coupons",
      productData: productData,
      title: "Coupons List",
      items: [{
        text: "Dashboard"
      },
        {
          text: "Coupons"
        },
        {
          text: "Coupons List",
          active: true
        }
      ],
      totalRows: 1,
      currentPage: 1,
      perPage: 10,
      pageOptions: [10, 25, 50, 100],
      filter: null,
      filterOn: [],
      sortBy: "id",
      sortDesc: true,
      fields: [
        {
          key: "check",
          label: ""
        },
        {
          key: "Code",
          sortable: true
        },
        {
          key: "Type",
          sortable: true
        },
        {
          key: "Amount",
          sortable: true
        },
        {
          key: "startDate",
          sortable: true
        },
        {
          key: "endDate",
          sortable: true
        },
        {
          key: "Published",
          sortable: true
        },
        {
          key: "date",
          label: "Added Date",
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
      return this.productData.length;
    }
  },
  mounted() {
    // Set the initial number of items
    this.totalRows = this.items.length;
    this.getData(1);

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

    getData(page){
      this.$axios.get("/"+this.model+"?page=" + page).then((response) => {
        this.productData = response.data.data.data;
        this.totalRows = response.data.data.last_page;
        this.currentPage = response.data.data.current_page;
      });
    },
    removeRecord(index, id){
      this.dialog = false
      $(".v-dialog").css('display', 'none')
      $(".v-overlay").css('display', 'none')
      this.$axios.delete("/"+this.model+ "/" + id + '/destroy')
        .then(response => {
          this.data.splice(index, 1)
        })
    },
  },
  // middleware: 'admin-auth',
};
</script>

<template>
  <div>
    <PageHeader :title="title" :items="items" />
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <div class="row mb-2">
              <div class="col-sm-6">
                <nuxt-link to="/ecommerce/coupons/create" class="btn btn-danger mb-2"><i class="mdi mdi-plus-circle mr-1"></i> {{$t('Add Coupon')}}</nuxt-link>
              </div>
              <div class="col-sm-6">
                <div class="float-sm-right">
                  <button type="button" class="btn btn-success mb-2 mb-sm-0"><i class="mdi mdi-cog"></i></button>
                </div>
              </div><!-- end col-->
            </div>
            <div class="row mb-2">
              <div class="col-sm-12 col-md-6">
                <div id="tickets-table_length" class="dataTables_length">
                  <label class="d-inline-flex align-items-center">
                    Display&nbsp;
                    <b-form-select v-model="perPage" size="sm" :options="pageOptions"></b-form-select>&nbsp;customers
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
              <b-table table-class="table table-centered w-100" thead-tr-class="bg-light" :items="productData" :fields="fields" responsive="sm" :per-page="perPage" :current-page="currentPage" :sort-by.sync="sortBy" :sort-desc.sync="sortDesc"
                       :filter="filter" :filter-included-fields="filterOn" @filtered="onFiltered">
                <template v-slot:cell(check)="data">
                  <div class="custom-control custom-checkbox text-center">
                    <input type="checkbox" class="custom-control-input" :id="`contacusercheck${data.item.id}`" />

                    <label class="custom-control-label" :for="`contacusercheck${data.item.id}`"></label>
                  </div>
                </template>

                <template v-slot:cell(Code)="data">
                  <h5 class="m-0 d-inline-block align-middle">
                    <a href="#" class="text-dark">{{ data.item.code }}</a>
                  </h5>
                </template>

                <template v-slot:cell(Published)="data">
                  <span class="badge badge-soft-success" :class="{'badge-soft-danger': data.item.status === 'Deactive'}">{{ data.item.status }}</span>
                </template>

                <template  v-slot:cell(Type)="data" >
                                <span v-if="data.item.type"  class="badge" :class="{
                      'badge-success': data.item.type == 'Card Base',
                      'badge-warning': data.item.type >= 'Product'
                    }">{{ data.item.type }}</span>
                </template>

                <template  v-slot:cell(Amount)="data" >
                                <span v-if="data.item.amount >= 0"  class="badge" :class="{
                      'badge-success': data.item.amount <= 50,
                      'badge-warning': data.item.amount <= 150,
                      'badge-danger': data.item.amount <= 200,
                    }">{{ data.item.amount }} {{ data.item.amountType }}</span>
                </template>

                <template v-slot:cell(action)>
                  <ul class="list-inline table-action m-0">
                    <li class="list-inline-item">
                      <NuxtLink to="/ecommerce/coupons/1/edit" class="action-icon"><i class="mdi mdi-square-edit-outline"></i></NuxtLink>
                    </li>
                    <li class="list-inline-item">
                      <a href="javascript:void(0);" @click="removeRecord(this, data.item.id)" class="action-icon">
                        <i class="mdi mdi-delete"></i></a>
                    </li>
                  </ul>
                </template>
              </b-table>
            </div>
            <div class="row">
              <div class="col">
                <div class="dataTables_paginate paging_simple_numbers float-right">
                  <ul class="pagination pagination-rounded">
                    <!-- pagination -->
                    <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage"></b-pagination>
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
