<template>
  <div>
    <PageHeader :title="title" :items="items"/>

    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <div class="text-center">
              <div class="row">
                <div class="col-md-6 col-xl-3">
                  <div class="py-1">
                    <i class="fe-tag font-24"></i>
                    <h3>25563</h3>
                    <p class="text-uppercase mb-1 font-13 font-weight-medium">
                      Total notification
                    </p>
                  </div>
                </div>
                <div class="col-md-6 col-xl-3">
                  <div class="py-1">
                    <i class="fe-archive font-24"></i>
                    <h3 class="text-warning">6952</h3>
                    <p class="text-uppercase mb-1 font-13 font-weight-medium">
                      Pending Notification
                    </p>
                  </div>
                </div>
                <div class="col-md-6 col-xl-3">
                  <div class="py-1">
                    <i class="fe-shield font-24"></i>
                    <h3 class="text-success">18361</h3>
                    <p class="text-uppercase mb-1 font-13 font-weight-medium">
                      Closed Notification
                    </p>
                  </div>
                </div>
                <div class="col-md-6 col-xl-3">
                  <div class="py-1">
                    <i class="fe-delete font-24"></i>
                    <h3 class="text-danger">250</h3>
                    <p class="text-uppercase mb-1 font-13 font-weight-medium">
                      Deleted Notification
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

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
            <b-table table-class="table table-centered w-100" thead-tr-class="bg-light" :items="Data"
                     :fields="fields" responsive="sm" :per-page="perPage" :current-page="currentPage"
                     :sort-by.sync="sortBy" :sort-desc.sync="sortDesc" :filter="filter"
                     :filter-included-fields="filterOn" @filtered="onFiltered">

              <template v-slot:cell(code)="data">
                {{ data.item.title }}
              </template>

              <template v-slot:cell(Message)="data">
                  <span> {{ data.item.body.substring(0, 10) }}
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
                        {{ data.item.body }}
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

              <template v-slot:cell(status)="data">
                <span class="badge"
                      :class="{'badge-secondary': data.item.status === 'Closed','badge-success': data.item.status === 'Open'}"> {{
                    data.item.status
                  }}</span>
              </template>

              <template v-slot:cell(user)="data">
                <div class="media">
                  <img v-if="data.item.user.avatar" :src="data.item.user.avatar" alt="table-user"
                       class="mr-3 rounded-circle avatar-sm"/>
                  <div v-if="!data.item.user.avatar" class="avatar-sm mr-3">
                    <div class="avatar-title rounded-circle bg-soft-primary font-weight-medium text-primary">
                      {{ data.item.user.name.charAt(0) }}
                    </div>
                  </div>
                  <div class="media-body">
                    <h5 class="mt-0 mb-1">
                      <a href="javascript:void(0);" class="text-dark">{{
                          data.item.user.name
                        }}</a>
                    </h5>
                  </div>
                </div>
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
 * Notification-list component
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
      model: "notifications",
      lang: 'ar',
      title: "Notification List",
      dialog: false,
      dialog2: false,
      dialog3: false,
      items: [{
        text: "Dashboard"
      },
        {
          text: "Notification"
        },
        {
          text: "Notification List",
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
          key: "user",
          label: "Added By",
          sortable: true
        },
        {
          key: "title",
          label: "Title",
          sortable: true
        },
        {
          key: 'Message',
          sortable: true
        },
        {
          key: 'show_type',
          Label: 'Send To',
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

    changeStatus(type, val, id) {
      this.$axios.post(this.model + "/" + id + '/changeStatus', {
        'type': type,
        'value': val
      })
        .then(response => {
          this.dialog = false;
          this.dialog2 = false;
          let index = this.Data.findIndex(el => {
            return el.id == id
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

