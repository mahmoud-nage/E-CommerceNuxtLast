<template>
  <div>
    <PageHeader :title="title" :items="items"/>
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
                  <b-button class="btn-rounded ml-1 text-white" variant="warning"><span
                    class="btn-label"><i class="mdi mdi-export-variant"></i></span>{{ $t('Export') }}
                  </b-button>
                  <b-button class="btn-rounded ml-1 text-white" variant="info"><span
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
                    <b-form-select v-model="perPage" size="sm" :options="pageOptions"></b-form-select>&nbsp;{{ model }}
                  </label>
                </div>
              </div>
              <!-- Search -->
              <div class="col-sm-12 col-md-6">
                <div id="tickets-table_filter" class="dataTables_filter text-md-right">
                  <label class="d-inline-flex align-items-center">
                    Search:
                    <b-form-input v-model="filter" type="search" placeholder="Search..."
                                  class="form-control form-control-sm ml-2"></b-form-input>
                  </label>
                </div>
              </div>
              <!-- End search -->
            </div>
            <!-- Table -->
            <div class="table-responsive mb-0">
              <b-table table-class="table table-centered w-100" thead-tr-class="bg-light" :items="Data"
                       :fields="fields" responsive="sm" :per-page="perPage" :current-page="currentPage"
                       :sort-by.sync="sortBy" :sort-desc.sync="sortDesc" :filter="filter"
                       :filter-included-fields="filterOn" @filtered="onFiltered">
                <template v-slot:cell(check)="data">
                  <div class="custom-control custom-checkbox text-center">
                    <input type="checkbox" class="custom-control-input" :id="`contacusercheck${data.item.id}`"/>
                    <label class="custom-control-label" :for="`contacusercheck${data.item.id}`"></label>
                  </div>
                </template>

                <template v-slot:cell(product)="data">
                  <img v-if="data.item.product.thumbnail_img" :src="data.item.product.thumbnail_img" alt=""
                       class="rounded mr-3" height="48"/>
                  <div v-if="!data.item.product.thumbnail_img" class="avatar-xs d-inline-block mr-2">
                    <div class="avatar-title bg-soft-primary rounded-circle text-primary">
                      <i class="mdi mdi-account-circle m-0"></i>
                    </div>
                  </div>
                  <h5 class="m-0 d-inline-block align-middle">
                    <a href="#" class="text-dark">{{ data.item.product.name_en }}</a>
                  </h5>
                </template>

                <template v-slot:cell(owner)="data">
                  <img v-if="data.item.product.user.avatar" :src="data.item.product.user.avatar" alt=""
                       class="rounded mr-3" height="48"/>
                  <div v-if="!data.item.product.user.avatar" class="avatar-xs d-inline-block mr-2">
                    <div class="avatar-title bg-soft-primary rounded-circle text-primary">
                      <i class="mdi mdi-account-circle m-0"></i>
                    </div>
                  </div>
                  <h5 class="m-0 d-inline-block align-middle">
                    <a href="#" class="text-dark">{{ data.item.product.user.name }}</a>
                  </h5>
                </template>

                <template v-slot:cell(customer)="data">
                  <img v-if="data.item.user.avatar" :src="data.item.user.avatar" alt="" class="rounded mr-3"
                       height="48"/>
                  <div v-if="!data.item.user.avatar" class="avatar-xs d-inline-block mr-2">
                    <div class="avatar-title bg-soft-primary rounded-circle text-primary">
                      <i class="mdi mdi-account-circle m-0"></i>
                    </div>
                  </div>
                  <h5 class="m-0 d-inline-block align-middle">
                    <a href="#" class="text-dark">{{ data.item.user.name }}</a>
                  </h5>
                </template>

                <template v-slot:cell(published)="data">
                  <div style="text-align: center;">
                    <v-icon
                      dark
                      right
                      class="text-center"
                      color="green darken-2"
                      v-if="data.item.active"
                      @click="dialog = true"
                    >
                      mdi-checkbox-marked-circle
                    </v-icon>
                    <v-icon
                      dark
                      right
                      color="red darken-2"
                      class="text-center"
                      v-if="!data.item.active"
                      @click="dialog = true"
                    >
                      mdi-close-circle
                    </v-icon>
                  </div>

                  <v-row justify="center">
                    <v-dialog
                      v-model="dialog"
                      max-width="290"
                    >
                      <v-card>
                        <v-card-title class="headline">
                          Published Action?
                        </v-card-title>

                        <v-card-text v-if="!data.item.active"
                                     color="green darken-1"
                        >
                          You will Published This review.
                          <div
                            style="text-align: center;"
                          >
                            <v-icon
                              x-large
                              color="red darken-2"
                              style="text-align: center; font-size: 75px; margin: 5px auto"
                            > mdi-close-circle
                            </v-icon>
                          </div>
                        </v-card-text>
                        <v-card-text v-if="data.item.active"
                                     color="red darken-1"
                        >
                          You will Un Published This review.

                          <div
                            style="text-align: center;"
                          >
                            <v-icon
                              x-large
                              color="green darken-2"
                              style="text-align: center; font-size: 75px; margin: 5px auto"
                            >
                              mdi-check-circle-outline
                            </v-icon>
                          </div>

                        </v-card-text>

                        <v-card-actions>
                          <v-spacer></v-spacer>

                          <v-btn
                            v-if="!data.item.active"
                            color="green darken-1"
                            text
                            @click="changeStatus('active', 1, data.item.id)"
                          >
                            Published
                          </v-btn>

                          <v-btn
                            v-if="data.item.active"
                            color="red darken-1"
                            text
                            @click="changeStatus('active', 0, data.item.id)"
                          >
                            Not Published
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                  </v-row>


                </template>

                <template v-slot:cell(in_home)="data">
                  <div
                    style="text-align: center;"
                  >
                    <v-icon
                      dark
                      right
                      class="text-center"
                      color="green darken-2"
                      v-if="data.item.in_home"
                      @click="dialog2 = true"
                    >
                      mdi-checkbox-marked-circle
                    </v-icon>
                    <v-icon
                      dark
                      right
                      color="red darken-2"
                      class="text-center"
                      v-if="!data.item.in_home"
                      @click="dialog2 = true"
                    >
                      mdi-close-circle
                    </v-icon>
                  </div>

                  <v-row justify="center">
                    <v-dialog
                      v-model="dialog2"
                      max-width="290"
                    >
                      <v-card>
                        <v-card-title class="headline">
                          Shoe In Home Action?
                        </v-card-title>

                        <v-card-text v-if="!data.item.in_home"
                                     color="green darken-1"
                        >
                          You will Show This review In Home.
                          <div
                            style="text-align: center;"
                          >
                            <v-icon
                              x-large
                              color="red darken-2"
                              style="text-align: center; font-size: 75px; margin: 5px auto"
                            > mdi-close-circle
                            </v-icon>
                          </div>
                        </v-card-text>
                        <v-card-text v-if="data.item.in_home"
                                     color="red darken-1"
                        >
                          You will not Show This review In Home.

                          <div
                            style="text-align: center;"
                          >
                            <v-icon
                              x-large
                              color="green darken-2"
                              style="text-align: center; font-size: 75px; margin: 5px auto"
                            >
                              mdi-check-circle-outline
                            </v-icon>
                          </div>

                        </v-card-text>

                        <v-card-actions>
                          <v-spacer></v-spacer>

                          <v-btn
                            v-if="!data.item.in_home"
                            color="green darken-1"
                            text
                            @click="changeStatus('in_home', 1, data.item.id)"
                          >
                            Show
                          </v-btn>

                          <v-btn
                            v-if="data.item.in_home"
                            color="red darken-1"
                            text
                            @click="changeStatus('in_home', 0, data.item.id)"
                          >
                            Not Show
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                  </v-row>


                </template>

                <template v-slot:cell(rating)="data">
                                <span class="badge" :class="{
                      'badge-success': data.item.rate >= 4,
                      'badge-danger': data.item.rate < 3,
                      'badge-warning':
                        data.item.rate > 3 && data.item.rate < 4
                    }"><i class="mdi mdi-star"></i> {{ data.item.rate }}</span>
                </template>

                <template v-slot:cell(comment)="data">
                  <span> {{ data.item.comment.substring(0, 10) }}
                  <v-icon color="green darken-1" @click="dialog3 = true">
                    mdi-lastpass
                  </v-icon>
                  </span>
                  <v-row justify="center">
                    <v-dialog
                      v-model="dialog3"
                      width="600px"
                    >
                      <v-card>
                        <v-card-title>
                          <span class="headline">Comment</span>
                        </v-card-title>
                        <v-card-text>
                          {{ data.item.comment }}
                        </v-card-text>
                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn
                            color="red darken-1"
                            text
                            @click="dialog3 = false"
                          >
                            Cancel
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                  </v-row>
                </template>

                <template v-slot:cell(action)="data, index">
                  <ul class="list-inline table-action m-0">
                    <!--                    <li class="list-inline-item">-->
                    <!--                      <NuxtLink-->
                    <!--                        :to="`${model}/${data.item.id}/view`"-->
                    <!--                        class="action-icon text-primary"><i class="mdi mdi-eye"></i></NuxtLink>-->
                    <!--                    </li>-->
                    <li class="list-inline-item">
                      <a href="javascript:void(0);" @click="removeRecord(data.index, data.item.id)"
                         class="action-icon text-danger">
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
                      <ul class="pagination">
                        <li class="page-item active"><a class="page-link">Total {{ rows }}</a></li>
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
 * Reviews-list component
 */
export default {
  head() {
    return {
      title: `${this.title}`,
    };
  },
  data() {
    return {
      Data: {},
      model: "reviews",
      lang: 'ar',
      title: "Reviews List",
      dialog: false,
      dialog2: false,
      dialog3: false,
      items: [{
        text: "Dashboard"
      },
        {
          text: "Reviews"
        },
        {
          text: "Reviews List",
          active: true
        }
      ],

      pagination: {},
      count2: [],
      stepIndex: '',
      next: false,
      prev: false,
      last_page: '',

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
          key: "product",
          label: "Product NAme",
          sortable: true
        },
        {
          key: "owner",
          label: "Product Owner",
          sortable: true
        },
        {
          key: "customer",
          sortable: true
        },
        {
          key: "comment",
          label: "Comment",
          sortable: true
        },
        {
          key: "rating",
          label: 'Rating',
          sortable: true
        },
        {
          key: "published",
          label: "Published",
          sortable: true
        },
        {
          key: "in_home",
          label: "Show In Home",
          sortable: true
        },
        {
          key: "created_at",
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

    changeStatus(type, val, id, dialog) {
      this.$axios.post(this.model + "/" + id + '/changeStatus', {
        'type': type,
        'value': val
      })
        .then(response => {
          this.dialog = false;
          this.dialog2 = false;
          let index = this.Data.findIndex(el => {
            return el.id === id
          })

          if (response.data.status === 200) {
            this.Data[index][type] = val;
            console.log(response);
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: response.data.message,
              showConfirmButton: false,
              timer: 1500
            })
          } else {
            Swal.fire({
              position: 'top-end',
              icon: 'danger',
              title: response.data.message,
              showConfirmButton: false,
              timer: 1500
            })
          }

        })
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
          this.$axios.delete(this.model + "/" + id + '/destroy')
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

    getData(page) {
      console.log(this.perPage);
      this.$axios.get(this.model + '?page=' + page + '&to=' + this.perPage, {
        headers: {
          'lang': 'ar'
        }
      }).then((response) => {
        console.log(response.data.data.data[0].product);
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
