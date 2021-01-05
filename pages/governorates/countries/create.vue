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
                <v-col md="4">
                  <v-text-field
                    v-model="lat"
                    counter="191"
                    hint="This field uses counter prop"
                    :label="$t('forms.general.lat')"
                    clearable
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col md="4">
                  <v-text-field
                    v-model="lon"
                    :label="$t('forms.general.lon')"
                    clearable
                    counter="191"
                    hint="This field uses counter prop"
                    outlined
                  >
                  </v-text-field>
                </v-col>
                <v-col md="4">
                  <v-text-field
                    v-model="exchange_rate_usd"
                    :label="$t('forms.general.exchange_rate_usd')"
                    clearable
                    outlined
                    type="number"
                    prefix="%"
                  >
                  </v-text-field>
                </v-col>
                <v-row>
                  <v-col
                    sm="6"
                  >
                    <h4 class="header-title m-t-0">{{ $t('forms.sections.payment_method') }}</h4>
                    <v-col
                      sm="6"
                    >
                      <b-form-checkbox v-model="cash"
                                       switch
                                       size="sm"
                                       inline
                      >
                        <div><strong :class="cash?on:off">{{
                            $t('forms.general.cash')
                          }}</strong>
                        </div>
                      </b-form-checkbox>
                      <b-form-checkbox v-model="card"
                                       switch
                                       size="sm"
                                       inline
                      >
                        <div><strong :class="card?on:off">{{ $t('forms.general.card') }}</strong>
                        </div>
                      </b-form-checkbox>
                      <b-form-checkbox v-model="kiosk"
                                       switch
                                       size="sm"
                                       inline
                      >
                        <div><strong :class="kiosk?on:off">{{
                            $t('forms.general.kiosk')
                          }}</strong></div>
                      </b-form-checkbox>
                      <b-form-checkbox v-model="valu"
                                       switch
                                       size="sm"
                                       inline
                      >
                        <div><strong :class="valu?on:off">{{ $t('forms.general.valu') }}</strong>
                        </div>
                      </b-form-checkbox>

                    </v-col>

                  </v-col>
                  <v-col
                    sm="6"
                  >
                    <h4 class="header-title m-t-0">{{ $t('forms.sections.actions') }}</h4>
                    <v-col
                      sm="6"
                    >
                      <b-form-checkbox v-model="published"
                                       switch
                                       size="sm"
                                       inline
                      >
                        <div><strong :class="published?on:off">{{ $t('forms.general.published') }}</strong></div>
                      </b-form-checkbox>
                      <b-form-checkbox v-model="defaultt"
                                       switch
                                       size="sm"
                                       inline
                      >
                        <div><strong :class="defaultt?on:off">{{ $t('forms.general.default') }}</strong></div>
                      </b-form-checkbox>
                    </v-col>
                  </v-col>
                </v-row>
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
    model: "countries",
    title: 'Create Countries',
    on: "text-success",
    off: "text-muted",
    published: true,
    defaultt: false,
    cash: true,
    card: false,
    kiosk: false,
    valu: false,
    exchange_rate_usd: 1.00,
    items: [{
      text: 'Dashboard',
      href: '/',
    },
      {
        text: 'Countries',
        href: '/governorates/countries',
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
    lat: '',
    lon: '',
    nameArRules: [
      v => !!v || 'Name Arabic is required',
      v => (v && v.length <= 190) || 'Name Arabic must be less than 190 characters',
    ],
    nameEnRules: [
      v => !!v || 'Name English is required',
      v => (v && v.length <= 190) || 'Name English must be less than 190 characters',
    ],

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
            lat: this.lat,
            lon: this.lon,
            currency_id: this.currency_id,
            locales: this.locales,
            active: this.published,
            default: this.defaultt,
            icon: this.photo,
            cash: this.cash,
            accept_card: this.card,
            accept_kiosk: this.kiosk,
            accept_valu: this.valu,
            exchange_rate_usd: this.exchange_rate_usd,
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
                this.$router.push('/governorates/' + this.model)
              } else {
                this.error_message = response.data.message
                Swal.fire({
                  position: 'top-end',
                  icon: 'error',
                  title: 'Oops...',
                  text: response.data.message[0],
                  showConfirmButton: true,
                  timer: 5000
                })
              }

            }).catch((error) => {
            console.log(error);
          })
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


