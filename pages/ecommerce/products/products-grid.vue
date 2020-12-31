<script>
import {
    products
} from "../data-products";

/**
 * Products-grid component
 */
export default {
    head() {
        return {
            title: `${this.title} | Minton - Nuxtjs Responsive Admin Dashboard Template`,
        };
    },
    data() {
        return {
            products: products,
            title: "Products Grid",
            items: [{
                    text: "Minton"
                },
                {
                    text: "eCommerce"
                },
                {
                    text: "Products Grid",
                    active: true
                }
            ]
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
            <nuxt-link to="/ecommerce/products/product-create" class="btn btn-danger mb-2"><i class="mdi mdi-plus-circle mr-1"></i> Add Products</nuxt-link>
        </div>
        <div class="col-sm-8">
            <div class="float-sm-right">
                <form class="form-inline">
                    <div class="form-group mr-2">
                        <label for="productssearch-input" class="sr-only">Search</label>
                        <input type="search" class="form-control border-light" id="productssearch-input" placeholder="Search...">
                    </div>
                    <button type="button" class="btn btn-success mb-2 mb-sm-0"><i class="mdi mdi-cog"></i></button>
                </form>
            </div>
        </div><!-- end col-->
    </div>
    <!-- end row -->

    <div class="row">
        <div class="col-md-6 col-xl-3" v-for="(item, index) in products" :key="index">
            <div class="card product-box">

                <div class="product-img">
                    <div class="p-3">
                        <img :src="`${item.image}`" alt="product-pic" class="img-fluid" />
                    </div>
                    <div class="product-action">
                        <div class="d-flex">
                          <NuxtLink to="/ecommerce/products/1/edit" class="btn btn-white btn-block action-btn m-2"><i class="ri-edit-2-fill align-middle"></i> Edit</NuxtLink>

                          <a href="javascript: void(0);" class="btn btn-white btn-block action-btn m-2"><i class="ri-delete-bin-fill align-middle"></i> Delete</a>
                        </div>
                    </div>
                </div>

                <div class="product-info border-top p-3">
                    <div>
                        <h5 class="font-16 mt-0 mb-1">
                            <nuxt-link :to="'/ecommerce/product-detail/' + item.id" class="text-dark">{{ item.name }}</nuxt-link>
                        </h5>
                        <p class="text-muted">
                            <i class="mdi mdi-star text-warning"></i>
                            <i class="mdi mdi-star text-warning"></i>
                            <i class="mdi mdi-star text-warning"></i>
                            <i class="mdi mdi-star text-warning"></i>
                            <i class="mdi mdi-star text-warning"></i>
                        </p>
                        <h4 class="m-0"> <span class="text-muted"> Price : $ {{item.price}}</span></h4>
                    </div>

                </div> <!-- end product info-->

            </div>
        </div>
    </div>
    <!-- end row -->

    <div class="row">
        <div class="col-12">
            <ul class="pagination pagination-rounded justify-content-end mb-3">
                <li class="page-item">
                    <a class="page-link" href="javascript: void(0);" aria-label="Previous">
                        <span aria-hidden="true">«</span>
                        <span class="sr-only">Previous</span>
                    </a>
                </li>
                <li class="page-item active"><a class="page-link" href="javascript: void(0);">1</a></li>
                <li class="page-item"><a class="page-link" href="javascript: void(0);">2</a></li>
                <li class="page-item"><a class="page-link" href="javascript: void(0);">3</a></li>
                <li class="page-item"><a class="page-link" href="javascript: void(0);">4</a></li>
                <li class="page-item"><a class="page-link" href="javascript: void(0);">5</a></li>
                <li class="page-item">
                    <a class="page-link" href="javascript: void(0);" aria-label="Next">
                        <span aria-hidden="true">»</span>
                        <span class="sr-only">Next</span>
                    </a>
                </li>
            </ul>
        </div> <!-- end col-->
    </div>
    <!-- end row-->

</div>
</template>
