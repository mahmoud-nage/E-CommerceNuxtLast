<template>
  <div>
    <PageHeader :title="title" :items="items"/>
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <div class="row mb-2">
              <div class="col-sm-6">
                <b-button class="btn-rounded ml-1 text-white" variant="success" :to="`/${model}/create`" dark><span
                  class="btn-label"><i class="mdi mdi-plus"></i></span>{{ $t('Create') }}
                </b-button>
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

                <template v-slot:cell(department)="data">
                  <h5 class="m-0 d-inline-block align-middle">
                    <a href="#" class="text-dark" v-if="">{{
                        lang === 'ar' ? data.item.name_ar : data.item.name_en
                      }}</a>
                  </h5>
                </template>


                <!--                <template v-slot:cell(user)="data" >-->
                <!--                  <div v-if="data.item.user">-->
                <!--                  <img v-if="data.item.user.user.avatar" :src="data.item.user.user.avatar" alt="" class="rounded mr-3"-->
                <!--                       height="48"/>-->
                <!--                  <div v-if="!data.user.user.avatar" class="avatar-xs d-inline-block mr-2">-->
                <!--                    <div class="avatar-title bg-soft-primary rounded-circle text-primary">-->
                <!--                      <i class="mdi mdi-account-circle m-0"></i>-->
                <!--                    </div>-->
                <!--                  </div>-->
                <!--                  <h5 class="m-0 d-inline-block align-middle">-->
                <!--                    <a href="#" class="text-dark">{{ data.item.user.user.name }}</a>-->
                <!--                  </h5>-->
                <!--                  </div>-->
                <!--                </template>-->

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

                <template v-slot:cell(action)="data, index">
                  <ul class="list-inline table-action m-0">
                    <li class="list-inline-item">
                      <NuxtLink
                        :to="`${model}/${data.item.id}/edit`"
                        class="action-icon text-primary"><i class="mdi mdi-square-edit-outline"></i></NuxtLink>
                    </li>
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
 * blogDepartments-list component
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
      model: "blogDepartments",
      lang: 'ar',
      title: "Departments List",
      dialog: false,
      dialog2: false,
      items: [{
        text: "Dashboard"
      },
        {
          text: "Departments"
        },
        {
          text: "Departments List",
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
      sortBy: "",
      sortDesc: false,
      fields: [{
        key: "check",
        label: ""
      },
        {
          key: "department",
          label: "Department",
          sortable: true
        },
        {
          key: "blogs_count",
          label: "countBlog",
          sortable: true
        },
        // {
        //   key: "user",
        //   label: "Added By",
        //   sortable: true
        // },
        {
          key: "published",
          label: "Published",
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
      this.$axios.get(this.model + '?page=' + page + '&to=' + this.perPage, {
        headers: {
          'lang': 'ar'
        }
      }).then((response) => {
        console.log(response.data.data.data[0]);
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
