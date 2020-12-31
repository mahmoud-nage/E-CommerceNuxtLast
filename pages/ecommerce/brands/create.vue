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
                <v-col sm="8"></v-col>
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
export default {
  components: {
    vueDropzone: vue2Dropzone
  },
  data: () => ({
    valid: true,
    loading: true,
    model: "banks",
    title: 'Create Brands',
    publishedText: "text-success",
    featuredText: "text-muted",
    items: [{
      text: 'Dashboard',
      href: '/',
    },
      {
        text: 'Brands',
        href: '/ecommerce/brands',
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
  }),
  methods: {
    createRecord() {
      if(!this.photo){
        this.imageText = "Image Is Required";
        this.imageTextColor = "text-danger";
      }else{
      this.loading = true,
        this.$axios.post("https://almurafiq.dev-krito.com/api/" + this.model + '/store', {
          bank_name_ar: this.name_ar,
          bank_name_en: this.name_ar,
          branch_name_ar: this.name_ar,
          branch_name_en: this.name_ar,
          owner_name_ar: this.name_ar,
          owner_name_en: this.name_ar,
          account_num: this.name_ar,
          swift_num: this.name_ar,
          image: this.photo
        })
          .then(response => {
            if (response.data.status == '500') {
              this.error_message = 'email is Repeated'
            } else {
              this.loading = false
              this.$router.push('/ecommerce/brands')
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


