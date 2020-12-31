<script>
import {
    ordersData
} from "./data";

/**
 * Orders component
 */
export default {
    head() {
        return {
            title: `${this.title} | Minton - Nuxtjs Responsive Admin Dashboard Template`,
        };
    },
    data() {
        return {
            ordersData: ordersData,
            title: "Orders",
            items: [{
                    text: "Minton"
                },
                {
                    text: "eCommerce"
                },
                {
                    text: "Orders",
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
                    key: "id",
                    label: "Order ID"
                },
                {
                    key: "name",
                    label: "Billing Name"
                },
                {
                    key: "date",
                    label: "Last Order"
                },
                {
                    key: "status",
                    label: "Payment Status"
                },
                {
                    key: "total"
                },
                {
                    key: "payment",
                    label: "Payment Method"
                },
                {
                    key: "orderstatus",
                    label: "Order Status"
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
            return this.ordersData.length;
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
                        <div class="text-center">
                            <div class="row">
                                <div class="col-md-6 col-xl-12">
                                    <div class="py-1">
                                        <i class="fe-tag font-24"></i>
                                        <h3>25563</h3>
                                        <p class="text-uppercase mb-1 font-13 font-weight-medium">
                                            Total Orders
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
                        <div class="text-center">
                            <div class="row">

                                <div class="col-md-6 col-xl-3">
                                    <div class="py-1">
                                        <i class="fe-archive font-24"></i>
                                        <h3 class="text-danger">6952</h3>
                                        <p class="text-uppercase mb-1 font-13 font-weight-medium">
                                            Pending Orders
                                        </p>
                                    </div>
                                </div>
                                <div class="col-md-6 col-xl-3">
                                    <div class="py-1">
                                        <i class="fe-shield font-24"></i>
                                        <h3 class="text-info">18361</h3>
                                        <p class="text-uppercase mb-1 font-13 font-weight-medium">
                                            On Review Orders
                                        </p>
                                    </div>
                                </div>
                                <div class="col-md-6 col-xl-3">
                                    <div class="py-1">
                                        <i class="fe-delete font-24"></i>
                                        <h3 class="text-warning">250</h3>
                                        <p class="text-uppercase mb-1 font-13 font-weight-medium">
                                            On Delivery Orders
                                        </p>
                                    </div>
                                </div>
                                                                <div class="col-md-6 col-xl-3">
                                                                    <div class="py-1">
                                                                        <i class="fe-tag font-24"></i>
                                                                        <h3 class="text-success">25563</h3>
                                                                        <p class="text-uppercase mb-1 font-13 font-weight-medium">
                                                                            Delivered Orders
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
                                    <b-form-select v-model="perPage" size="sm" :options="pageOptions"></b-form-select>&nbsp;Orders
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
                        <b-table table-class="table table-centered w-100" thead-tr-class="bg-light" :items="ordersData" :fields="fields" responsive="sm" :per-page="perPage" :current-page="currentPage" :sort-by.sync="sortBy" :sort-desc.sync="sortDesc" :filter="filter" :filter-included-fields="filterOn" @filtered="onFiltered">
                            <template v-slot:cell(check)="data">
                                <div class="custom-control custom-checkbox text-center">
                                    <input type="checkbox" class="custom-control-input" :id="`contacusercheck${data.item.id}`" />
                                    <label class="custom-control-label" :for="`contacusercheck${data.item.id}`"></label>
                                </div>
                            </template>

                            <template v-slot:cell(id)="data">
                                <nuxt-link to="/ecommerce/orders/1/view" class="text-body font-weight-medium">{{ data.item.id }}</nuxt-link>
                            </template>
                            <template v-slot:cell(status)="data">
                                <span class="badge badge-soft-success" :class="{'badge-soft-warning': data.item.status === 'Awaiting Authorization', 'badge-soft-danger': data.item.status === 'Payment Failed'}">
                                    {{ data.item.status }}</span>
                            </template>
                            <template v-slot:cell(name)="data">
                                {{ data.item.name }}
                            </template>
                            <template v-slot:cell()="data">
                                {{data.item.date}} <small class="text-muted">{{data.item.time}}</small>
                            </template>
                            <template v-slot:cell(payment)="data">
                                {{ data.item.payment }}
                            </template>
                            <template v-slot:cell(orderstatus)="data">
                                <span class="badge" :class="{'badge-warning': data.item.orderstatus === 'Processing', 'badge-success': data.item.orderstatus === 'Delivered', 'badge-info': data.item.orderstatus === 'Shipped','badge-danger': data.item.orderstatus === 'Cancelled'}">
                                    {{ data.item.orderstatus }}</span>
                            </template>
                            <template v-slot:cell(action)>
                                <ul class="list-inline table-action m-0">
                                    <li class="list-inline-item">
                                      <nuxt-link to="/ecommerce/orders/1/view" class="action-icon"><i class="mdi mdi-eye"></i></nuxt-link>
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
