<template>
  <div>
    <PageHeader :title="title" :items="items"/>

    <v-row align="center"
           class="mx-0 d-flex align-items-center justify-content-center">
      <v-col
        cols="12"
        md="1">
      </v-col>

      <v-col
        cols="12"
        md="10">
        <v-card
          class="card pl-4 pr-4"
          elevation="24"
          shaped
        >
          <v-card-text
          >
            <v-form
              ref="form"
              v-model="valid"
              lazy-validation
            >
              <v-row
                align="center"
                class="mx-0">
                <v-col
                  cols="6"
                  sm="6"
                >
                  <v-text-field
                    v-model="name_ar"
                    :rules="nameArRules"
                    counter="191"
                    hint="This field uses counter prop"
                    :label="$t('forms.general.name_ar')"
                    clearable
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="6"
                  sm="6"
                >
                  <v-text-field
                    v-model="name_en"
                    :rules="nameEnRules"
                    counter="191"
                    hint="This field uses counter prop"
                    :label="$t('forms.general.name_en')"
                    clearable
                    @change="setMetaData(1)"
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="10"
                  md="12">
                  <h4 class="header-title m-t-0">{{ $t('forms.general.upload_image') }}</h4>
                  <p :class="'font-13 m-b-30 ' + imageTextColor">{{ $t(imageText) }}</p>
                  <!-- file upload -->
                  <!--                  <vue-dropzone id="dropzone" ref="myVueDropzone" @change="onFileChange" :use-custom-slot="true" :options="dropzoneOptions" required>-->
                  <!--                    <div class="dz-message needsclick">-->
                  <!--                      <i class="h1 text-muted ri-upload-cloud-2-line"></i>-->
                  <!--                      <h3>Drop files here or click to upload.</h3>-->
                  <!--                      <span class="text-muted font-13">(This is just a demo dropzone. Selected files are-->
                  <!--                                <strong>not</strong> actually uploaded.)</span>-->
                  <!--                    </div>-->
                  <!--                  </vue-dropzone>-->
                  <input type="file" name="image" id="image" class="form-control"
                         @change="onFileChange" accept="images/*" required/>
                </v-col>
                <v-col
                  cols="10"
                  md="12">
                  <h4 class="header-title m-t-0">{{ $t('forms.sections.meta_section') }}</h4>
                  <p class="text-muted font-13 m-b-30">{{ $t('forms.msg.meta_section') }}</p>
                  <v-text-field
                    v-model="meta_title"
                    :rules="keywordRules"
                    counter="191"
                    hint="This field uses counter prop"
                    :label="$t('forms.general.meta_title')"
                    clearable
                    outlined
                  ></v-text-field>
                  <v-textarea
                    v-model="meta_desc"
                    :rules="descRules"
                    :label="$t('forms.general.meta_desc')"
                    rows="5"
                    clearable
                    outlined
                  >{{ name_en }}
                  </v-textarea>
                </v-col>
                <v-col sm="6"></v-col>
                <v-col
                  cols="6"
                  sm="2"
                >
                  <b-form-checkbox v-model="published"
                                   switch
                                   size="sm"
                                   inline
                                   class="float-right"
                                   @change="changeStatus('published')"
                  >
                    <div><strong :class="publishedText">{{ $t('forms.general.published') }}</strong></div>
                  </b-form-checkbox>

                </v-col>
                <v-col
                  cols="6"
                  sm="2"
                >
                  <b-form-checkbox v-model="featured"
                                   switch
                                   size="sm"
                                   inline
                                   @change="changeStatus('featured')"
                  >
                    <div><strong :class="featuredText">{{ $t('forms.general.featured') }}</strong></div>
                  </b-form-checkbox>
                </v-col>
                <v-col
                  cols="6"
                  sm="2"
                >
                  <b-form-checkbox v-model="in_nav"
                                   switch
                                   size="sm"
                                   inline
                                   @change="changeStatus('in_nav')"
                  >
                    <div><strong :class="in_navText">{{ $t('forms.general.in_nav') }}</strong></div>
                  </b-form-checkbox>
                </v-col>
                <v-col
                  cols="12"
                  md="12">
                  <b-button class="btn-rounded ml-1 text-white" @click="validate" variant="success"><span
                    class="btn-label"><i class="mdi mdi-check-all"></i></span>{{ $t('forms.buttons.submit') }}
                  </b-button>
                  <b-button class="btn-rounded ml-1 text-white" @click="reset" variant="danger"><span class="btn-label"><i
                    class="mdi mdi-close-circle-outline"></i></span>{{ $t('forms.buttons.reset') }}
                  </b-button>
                </v-col>
              </v-row>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col
        cols="12"
        md="1">
      </v-col>

    </v-row>
  </div>
</template>


<script>
import vue2Dropzone from 'vue2-dropzone'
import Swal from "sweetalert2";

export default {
  components: {
    vueDropzone: vue2Dropzone
  },
  data: () => ({
    valid: true,
    loading: true,
    model: "categories",
    title: 'Create Categories',
    publishedText: "text-success",
    featuredText: "text-muted",
    in_navText: "text-muted",
    items: [{
      text: 'Dashboard',
      href: '/',
    },
      {
        text: 'Categories',
        href: '/ecommerce/categories',
      },
      {
        text: 'create',
        active: true,
      },
    ],
    dropzoneOptions: {
      url: 'https://httpbin.org/post',
      thumbnailWidth: 150,
      maxFilesize: 0.5,
      maxFiles: 1,
    },
    imageText: "DropzoneJS is an open source library that provides drag’n’drop\n" +
      "                    file uploads with image previews.",
    imageTextColor: "text-muted",
    name_ar: '',
    name_en: '',
    meta_title: '',
    meta_desc: '',
    nameArRules: [
      v => !!v || 'Name Arabic is required',
      v => (v && v.length <= 190) || 'Name Arabic must be less than 190 characters',
    ],
    nameEnRules: [
      v => !!v || 'Name English is required',
      v => (v && v.length <= 190) || 'Name English must be less than 190 characters',
    ],

    keywordRules: [
      v => !!v || 'Title Arabic is required',
      v => (v && v.length <= 190) || 'Name Arabic must be less than 190 characters',
    ],
    descRules: [
      v => !!v || 'Description English is required',
    ],
    published: true,
    featured: false,
    in_nav: false,
  }),
  methods: {
    createRecord() {
      if (!this.photo) {
        this.imageText = "Image Is Required";
        this.imageTextColor = "text-danger";
      } else {
        this.loading = true,
          this.$axios.post(this.model + '/store', {
            name_ar: this.name_ar,
            name_en: this.name_en,
            meta_title: this.meta_title,
            meta_description: this.meta_desc,
            active: this.published,
            in_home: this.featured,
            in_nav: this.in_nav,
            parent_id: 0,
            type: 0,
            image: this.photo
          })
            .then(response => {
              if (response.data.status === 200) {
                this.loading = false
                Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: 'Your work has been saved',
                  showConfirmButton: false,
                  timer: 1500
                })
                this.$router.push('/ecommerce/' + this.model)
              } else {
                this.error_message = response.data.message
                Swal.fire({
                  position: 'top-end',
                  icon: 'error',
                  title: 'Oops...',
                  text: response.data.message,
                  showConfirmButton: true,
                  timer: 5000
                })
              }

            }).catch((error) => {
            console.log(error);
          })
      }
    },
    changeStatus(el) {
      if (el === 'published') {
        if (this.published) {
          this.publishedText = "text-success";
        } else {
          this.publishedText = "text-muted";
        }
      } else if (el === 'featured') {
        if (this.featured) {
          this.featuredText = "text-success";
        } else {
          this.featuredText = "text-muted";
        }
      } else if (el === 'in_nav') {
        if (this.featured) {
          this.in_navText = "text-success";
        } else {
          this.in_navText = "text-muted";
        }
      }
    },
    onFileChange(e) {
      console.log('file changes');
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length || !files.length > 1) {
        this.imageText = "Some Thing went wrong";
        return
      }
      this.createImage(files[0])
    },
    createImage(file) {
      var photo = new Image();
      var reader = new FileReader();
      var vm = this;

      reader.onload = (e) => {
        vm.photo = e.target.result
        console.log(vm.photo);
      };
      reader.readAsDataURL(file)
    },
    setMetaData(from) {
      if (from === 1) {
        this.meta_desc = this.name_en;
        this.meta_title = this.name_en;
      } else if (from === 2) {
        this.meta_desc = this.desc_en;
        this.meta_title = this.name_en;
      }
    },
    validate() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        this.createRecord()
      }
    },
    reset() {
      this.$refs.form.reset()
    },
    resetValidation() {
      this.$refs.form.resetValidation()
    },
  }
}
</script>


