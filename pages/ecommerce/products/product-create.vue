<script>
import {
    FormWizard,
    TabContent,
    WizardButton
} from "vue-form-wizard";
import vue2Dropzone from "vue2-dropzone";
import CKEditor from "@ckeditor/ckeditor5-vue";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import "vue-form-wizard/dist/vue-form-wizard.min.css";

/**
 * Product-create component
 */
export default {
    head() {
        return {
            title: `${this.title} | Minton - Nuxtjs Responsive Admin Dashboard Template`,
        };
    },
    components: {
        FormWizard,
        TabContent,
        WizardButton,
        vueDropzone: vue2Dropzone,
        ckeditor: CKEditor.component,
    },
    data() {
        return {
            title: "Create Product",
            items: [{
                    text: "Minton",
                },
                {
                    text: "eCommerce",
                },
                {
                    text: "Create Product",
                    active: true,
                },
            ],
            editor: ClassicEditor,
            editorData: "<p>Content of the editor.</p>",
            dropzoneOptions: {
                url: "https://httpbin.org/post",
                thumbnailWidth: 150,
                maxFilesize: 0.5,
                headers: {
                    "My-Awesome-Header": "header value",
                },
                previewTemplate: this.template(),
            },
        };
    },
    methods: {
        template: function () {
            return ` <div class="dropzone-previews mt-3">
            <div class="card mt-1 mb-0 shadow-none border">
                <div class="p-2">
                    <div class="row align-items-center">
                        <div class="col-auto">
                            <img data-dz-thumbnail src="#" class="avatar-sm rounded bg-light" alt="">
                        </div>
                        <div class="col pl-0">
                            <a href="javascript:void(0);" class="text-muted font-weight-bold" data-dz-name></a>
                            <p class="mb-0" data-dz-size></p>
                        </div>
                        <div class="col-auto">
                            <!-- Button -->
                            <a href="" class="btn btn-link btn-lg text-muted" data-dz-remove>
                                <i class="fe-x"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
        },
        isLastStep() {
            if (this.$refs.wizard) {
                return this.$refs.wizard.isLastStep;
            }
            return false;
        },
    }
    // middleware: "router-auth",
};
</script>

<template>
<div>
    <PageHeader :title="title" :items="items" />

    <div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-body">
                    <form-wizard color="#3bafda" ref="wizard">
                        <tab-content title="General">
                            <h4 class="header-title">General Information</h4>
                            <p class="sub-header">Fill all information below</p>

                            <div>
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="form-group mb-3">
                                            <label for="product-name">
                                                Product Name
                                                <span class="text-danger">*</span>
                                            </label>
                                            <input type="text" id="product-name" class="form-control" placeholder="e.g : Apple iMac" />
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="form-group mb-3">
                                            <label for="product-reference">
                                                Reference
                                                <span class="text-danger">*</span>
                                            </label>
                                            <input type="text" id="product-reference" class="form-control" placeholder="e.g : Apple iMac" />
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group mb-3">
                                    <label for="product-description">
                                        Product Description
                                        <span class="text-danger">*</span>
                                    </label>
                                    <ckeditor v-model="editorData" :editor="editor"></ckeditor>
                                </div>

                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="form-group mb-3">
                                            <label for="product-summary">Product Summary</label>
                                            <textarea class="form-control" id="product-summary" rows="5" placeholder="Please enter summary"></textarea>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="form-group mb-3">
                                            <label for="product-category">
                                                Categories
                                                <span class="text-danger">*</span>
                                            </label>
                                            <select class="form-control select2" id="product-category">
                                                <option>Select</option>
                                                <optgroup label="Shopping">
                                                    <option value="SH1">Shopping 1</option>
                                                    <option value="SH2">Shopping 2</option>
                                                    <option value="SH3">Shopping 3</option>
                                                    <option value="SH4">Shopping 4</option>
                                                </optgroup>
                                                <optgroup label="CRM">
                                                    <option value="CRM1">Crm 1</option>
                                                    <option value="CRM2">Crm 2</option>
                                                    <option value="CRM3">Crm 3</option>
                                                    <option value="CRM4">Crm 4</option>
                                                </optgroup>
                                                <optgroup label="eCommerce">
                                                    <option value="E1">eCommerce 1</option>
                                                    <option value="E2">eCommerce 2</option>
                                                    <option value="E3">eCommerce 3</option>
                                                    <option value="E4">eCommerce 4</option>
                                                </optgroup>
                                            </select>
                                        </div>
                                        <div class="form-group mb-3">
                                            <label for="product-price">
                                                Price
                                                <span class="text-danger">*</span>
                                            </label>
                                            <input type="text" class="form-control" id="product-price" placeholder="Enter amount" />
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group mb-3">
                                    <label class="mb-2">
                                        Status
                                        <span class="text-danger">*</span>
                                    </label>
                                    <br />
                                    <div class="radio form-check-inline">
                                        <input type="radio" id="inlineRadio1" value="option1" name="radioInline" checked />
                                        <label for="inlineRadio1">Online</label>
                                    </div>
                                    <div class="radio form-check-inline">
                                        <input type="radio" id="inlineRadio2" value="option2" name="radioInline" />
                                        <label for="inlineRadio2">Offline</label>
                                    </div>
                                    <div class="radio form-check-inline">
                                        <input type="radio" id="inlineRadio3" value="option3" name="radioInline" />
                                        <label for="inlineRadio3">Draft</label>
                                    </div>
                                </div>

                                <div class="form-group mb-0">
                                    <label>Comment</label>
                                    <textarea class="form-control" rows="3" placeholder="Please enter comment"></textarea>
                                </div>
                            </div>

                            <ul class="pager wizard mb-0 list-inline text-right mt-3">
                                <li class="next list-inline-item"></li>
                            </ul>
                        </tab-content>

                        <tab-content title="Product Images">
                            <h4 class="header-title">Product Images</h4>
                            <p class="sub-header">Upload product image</p>

                            <vue-dropzone id="dropzone" ref="myVueDropzone" :use-custom-slot="true" :options="dropzoneOptions">
                                <div class="dz-message needsclick">
                                    <i class="h1 text-muted ri-upload-cloud-2-line"></i>
                                    <h3>Drop files here or click to upload.</h3>
                                    <span class="text-muted font-13">
                                        (This is just a demo dropzone. Selected files are
                                        <strong>not</strong> actually uploaded.)
                                    </span>
                                </div>
                            </vue-dropzone>
                        </tab-content>

                        <tab-content title="Meta Data">
                            <h4 class="header-title">Meta Data</h4>
                            <p class="sub-header">Fill all information below</p>

                            <form>
                                <div class="form-group mb-3">
                                    <label for="product-meta-title">Meta title</label>
                                    <input type="text" class="form-control" id="product-meta-title" placeholder="Enter title" />
                                </div>

                                <div class="form-group mb-3">
                                    <label for="product-meta-keywords">Meta Keywords</label>
                                    <input type="text" class="form-control" id="product-meta-keywords" placeholder="Enter keywords" />
                                </div>

                                <div class="form-group mb-0">
                                    <label for="product-meta-description">Meta Description</label>
                                    <textarea class="form-control" rows="5" id="product-meta-description" placeholder="Please enter description"></textarea>
                                </div>
                            </form>
                        </tab-content>
                    </form-wizard>
                </div>
            </div>
        </div>
    </div>
    <!-- end row -->
</div>
</template>
