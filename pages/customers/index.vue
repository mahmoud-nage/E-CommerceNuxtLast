<script>
import {
    customesData
} from "./data";
/**
 * Customers component
 */
export default {
    head() {
        return {
            title: `${this.title} | Minton - Nuxtjs Responsive Admin Dashboard Template`,
        };
    },
    data() {
        return {
            customesData: customesData,
            title: "Customers",
            items: [{
                    text: "Minton"
                },
                {
                    text: "eCommerce"
                },
                {
                    text: "Customers",
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
                    key: "Customer",
                    sortable: true
                },
                {
                    key: "phone",
                    sortable: true
                },
                {
                    key: "balance",
                    sortable: true
                },
                {
                    key: "orders",
                    sortable: true
                },
                {
                    key: "date",
                    label: "Last Order",
                    sortable: true
                },
                {
                    key: "status",
                    label: "Status",
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
            return this.customesData.length;
        }
    },
    mounted() {
        // Set the initial number of items
        this.totalRows = this.items.length;
    },
    methods: {
        /**
         * Search the table data with search input
         */
        onFiltered(filteredItems) {
            // Trigger pagination to update the number of buttons/pages due to filtering
            this.totalRows = filteredItems.length;
            this.currentPage = 1;
        }
    },
    // middleware: 'router-auth',
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
                            <nuxt-link to="/ecommerce/product-create" class="btn btn-danger mb-2"><i class="mdi mdi-plus-circle mr-1"></i> Add Products</nuxt-link>
                        </div>
                        <div class="col-sm-6">
                            <div class="float-sm-right">
                                <button type="button" class="btn btn-success mb-2 mb-sm-0">
                                    <i class="mdi mdi-cog"></i>
                                </button>
                            </div>
                        </div>
                        <!-- end col-->
                    </div>
                    <div class="row mb-2">
                        <div class="col-sm-12 col-md-6">
                            <div id="tickets-table_length" class="dataTables_length">
                                <label class="d-inline-flex align-items-center">
                                    Display&nbsp;
                                    <b-form-select v-model="perPage" size="sm" :options="pageOptions"></b-form-select>&nbsp;Customers
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
                        <b-table table-class="table table-centered w-100" thead-tr-class="bg-light" :items="customesData" :fields="fields" responsive="sm" :per-page="perPage" :current-page="currentPage" :sort-by.sync="sortBy" :sort-desc.sync="sortDesc" :filter="filter" :filter-included-fields="filterOn" @filtered="onFiltered">
                            <template v-slot:cell(check)="data">
                                <div class="custom-control custom-checkbox text-center">
                                    <input type="checkbox" class="custom-control-input" :id="`contacusercheck${data.item.id}`" />
                                    <label class="custom-control-label" :for="`contacusercheck${data.item.id}`"></label>
                                </div>
                            </template>

                            <template v-slot:cell(phone)="data">
                                {{ data.item.phone }}
                            </template>

                            <template v-slot:cell(balance)="data">
                                {{ data.item.balance }}
                            </template>

                            <template v-slot:cell(orders)="data">
                                {{ data.item.orders }}
                            </template>
                            <template v-slot:cell(date)="data">
                                {{ data.item.date }}
                            </template>

                            <template v-slot:cell(status)="data">
                                <span class="badge" :class="{'badge-soft-success': data.item.status === 'Active', 'badge-soft-danger': data.item.status === 'Blocked'}"> {{ data.item.status }}</span>
                            </template>

                            <template v-slot:cell()="data">
                                <div class="media">
                                    <img v-if="data.item.profile" :src="data.item.profile" alt="table-user" class="mr-3 rounded-circle avatar-sm" />
                                    <div v-if="!data.item.profile" class="avatar-sm mr-3">
                                        <div class="avatar-title rounded-circle bg-soft-primary font-weight-medium text-primary">
                                            {{ data.item.name.charAt(0) }}
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

                            <template v-slot:cell(action)>
                                <ul class="list-inline table-action m-0">
                                    <li class="list-inline-item">
                                        <a href="javascript:void(0);" class="action-icon">
                                            <i class="mdi mdi-eye"></i></a>
                                    </li>
                                    <li class="list-inline-item">
                                        <a href="javascript:void(0);" class="action-icon">
                                            <i class="mdi mdi-square-edit-outline"></i></a>
                                    </li>
                                    <li class="list-inline-item">
                                        <a href="javascript:void(0);" class="action-icon">
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
