<template>
  <div>
    <PageHeader :title="title" :items="items" />
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <div class="row mb-2">
              <div class="col-sm-6">

                <b-button class="btn-rounded ml-1 text-white" variant="success" to="/ecommerce/brands/create" dark><span
                  class="btn-label"><i class="mdi mdi-plus"></i></span>{{ $t('Create') }}
                </b-button>


              </div>
              <div class="col-sm-6">
                <div class="float-sm-right">

                  <b-button class="btn-rounded ml-1 text-white" variant="warning"><span
                    class="btn-label"><i class="mdi mdi-export-variant"></i></span>{{ $t('Export') }}
                  </b-button>
                  <b-button class="btn-rounded ml-1 text-white" variant="info" to=""><span
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
              <b-table table-class="table table-centered w-100" thead-tr-class="bg-light" :items="productData" :fields="fields" responsive="sm" :per-page="perPage" :current-page="currentPage" :sort-by.sync="sortBy" :sort-desc.sync="sortDesc" :filter="filter" :filter-included-fields="filterOn" @filtered="onFiltered">
                <template v-slot:cell(check)="data">
                  <div class="custom-control custom-checkbox text-center">
                    <input type="checkbox" class="custom-control-input" :id="`contacusercheck${data.item.id}`" />

                    <label class="custom-control-label" :for="`contacusercheck${data.item.id}`"></label>
                  </div>
                </template>

                <template v-slot:cell(Brand)="data">
                  <img v-if="data.item.logo" :src="data.item.logo" alt="" class="rounded mr-3" height="48" />
                  <div v-if="!data.item.logo" class="avatar-xs d-inline-block mr-2">
                    <div class="avatar-title bg-soft-primary rounded-circle text-primary">
                      <i class="mdi mdi-account-circle m-0"></i>
                    </div>
                  </div>
                  <h5 class="m-0 d-inline-block align-middle">
                    <a href="#" class="text-dark">{{ data.item.name_en }}</a>
                  </h5>
                </template>

                <template v-slot:cell(Published)="data">
                  <span class="badge badge-soft-success" :class="{'badge-soft-danger': data.item.status === 'Deactive'}">{{ data.item.status }}</span>
                </template>
                <template v-slot:cell(Featured)="data">
                  <span class="badge badge-soft-success" :class="{'badge-soft-danger': data.item.status === 'Deactive'}">{{ data.item.status }}</span>
                </template>

                <template  v-slot:cell(countProducts)="data" >
                                <span  class="badge" :class="{
                      'badge-success': data.item.countProducts <= 100,
                      'badge-danger': data.item.countProducts <= 0 ,
                      'badge-warning':
                        data.item.countProducts >= 150
                    }">{{ data.item.countProducts }} {{$t('product')}}</span>
                </template>

                <template v-slot:cell(action)>
                  <ul class="list-inline table-action m-0">
                    <li class="list-inline-item">
                      <NuxtLink
                        :to="`/ecommerce/brands/2/edit`"
                        class="action-icon text-primary"><i class="mdi mdi-square-edit-outline"></i></NuxtLink>
                    </li>
                    <li class="list-inline-item">
                      <a href="javascript:void(0);" @click="removeRecord" class="action-icon text-danger">
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
      </div>s
    </div>
  </div>
</template>

<script>

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
      model: "brands",
      productData: {},
      title: "Brands List",
      items: [{
        text: "Dashboard"
      },
        {
          text: "Brands"
        },
        {
          text: "Brands List",
          active: true
        }
      ],
      totalRows: 1,
      currentPage: 1,
      perPage: 10,
      pageOptions: [10, 25, 50, 100],
      filter: null,
      filterOn: [],
      sortBy: "age",
      sortDesc: false,
      fields: [{
        key: "check",
        label: ""
      },
        {
          key: "Brand",
          sortable: true
        },
        {
          key: "Published",
          sortable: true
        },
        {
          key: "Featured",
          sortable: true
        },
        {
          key: "countProducts",
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
    this.getData()
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


    getData(){
      this.$axios.get(this.model, {
        headers:{
          'lang': 'ar'
        }
      }).then((response) => {
        this.productData = response.data.data.data;
      });
    },

    removeRecord(index, id){
      if(confirm()){
        this.dialog = false
        $(".v-dialog").css('display', 'none')
        $(".v-overlay").css('display', 'none')
        this.$axios.delete("/"+this.model+ "/" + id + '/destroy')
          .then(response => {
            this.data.splice(index, 1)
          })
      }
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

  },
  // middleware: 'admin-auth',
};
</script>

