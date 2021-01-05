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
              </v-row>


              <v-row
                align="center"
                class="mx-0">
                <v-col md="4">
                  <v-text-field
                    v-model="delivery_price"
                    :label="$t('forms.general.delivery_price')"
                    type="number"
                    clearable
                    outlined
                    prefix="$"
                  ></v-text-field>
                </v-col>
                <v-col md="4">
                  <v-text-field
                    v-model="delivery_time"
                    :label="$t('forms.general.delivery_time')"
                    type="number"
                    clearable
                    outlined
                    prefix="Per Min: "
                  >
                  </v-text-field>
                </v-col>
                <v-col
                  sm="4"
                >
                  <b-form-checkbox v-model="delivery_free"
                                   switch
                                   size="sm"
                                   inline
                                   style="margin: auto;display: table;"
                  >
                    <div><strong :class="delivery_free?on:off">{{
                        $t('forms.general.delivery_free')
                      }}</strong>
                    </div>
                  </b-form-checkbox>
                </v-col>
              </v-row>


              <v-row
                align="center"
                class="mx-0">
                <v-col md="4">
                  <h5 class="header-title m-t-0">{{ $t('forms.general.Countries') }}</h5>

                  <b-form-select
                    v-model="country_id"
                    size="sm"
                    :options="countries"
                    :label="$t('forms.general.Countries')"
                    v-validate="'required'"
                  ></b-form-select>&nbsp;
                </v-col>
                <v-col md="4">
                  <v-text-field
                    v-model="lat"
                    :label="$t('forms.general.lat')"
                    clearable
                    counter="191"
                    hint="This field uses counter prop"
                    outlined
                  >
                  </v-text-field>
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
              </v-row>
              <v-row
                align="center"
                class="mx-0">
                <v-col
                  sm="6"
                >
                  <h4 class="header-title m-t-0">{{ $t('forms.sections.shipping_method') }}</h4>
                  <v-col
                    sm="6"
                  >
                    <b-form-checkbox v-model="self"
                                     switch
                                     size="sm"
                                     inline
                    >
                      <div><strong :class="self?on:off">{{ $t('forms.general.self') }}</strong>
                      </div>
                    </b-form-checkbox>
                    <b-form-checkbox v-model="smsa"
                                     switch
                                     size="sm"
                                     inline
                    >
                      <div><strong :class="smsa?on:off">{{ $t('forms.general.smsa') }}</strong>
                      </div>
                    </b-form-checkbox>
                    <b-form-checkbox v-model="posta"
                                     switch
                                     size="sm"
                                     inline
                    >
                      <div><strong :class="posta?on:off">{{ $t('forms.general.posta') }}</strong>
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
                  </v-col>
                </v-col>
              </v-row>

              <v-row
                align="center"
                class="mx-0"
              >
                <v-col
                  cols="12"
                  md="12">
                  <b-button class="btn-rounded ml-1 text-white" @click="validate" variant="success"><span
                    class="btn-label"><i class="mdi mdi-check-all"></i></span>{{ $t('forms.buttons.submit') }}
                  </b-button>
                  <b-button class="btn-rounded ml-1 text-white" @click="reset" variant="danger"><span
                    class="btn-label"><i
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
import Swal from "sweetalert2";

export default {

  data: () => ({
    valid: true,
    loading: true,
    self: true,
    smsa: false,
    posta: false,
    countries: [],
    model: "cities",
    title: 'Create Countries',
    on: "text-success",
    off: "text-muted",
    published: true,
    delivery_free: false,
    delivery_price: 0,
    delivery_time: 1,
    country_id: 0,
    items: [
      {
        text: 'Dashboard',
        href: '/',
      },
      {
        text: 'Countries',
        href: '/governorates/cities',
      },
      {
        text: 'create',
        active: true,
      },
    ],
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


  mounted() {
    this.getCountries()
  },

  methods: {

    getCountries() {
      this.$axios.get('countries?to=-1', {
        headers: {
          'lang': 'ar'
        }
      }).then((response) => {
        this.allCountries = response.data.data;
        this.country_id = this.allCountries[0].id;
        for (var i = 0; i < this.allCountries.length; i++) {
          this.countries.push({
            'value': this.allCountries[i].id,
            'text': this.lang == 'ar' ? this.allCountries[i].name_ar : this.allCountries[i].name_en,
            'abbr': this.allCountries[i].code ?? '',
          })
        }

      }).catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error,
        })
      });
    },


    createRecord() {
      this.loading = true,
        this.$axios.post(this.model + '/store', {
          name_ar: this.name_ar,
          name_en: this.name_en,
          lat: this.lat,
          lon: this.lon,
          country_id: this.country_id,
          locales: this.locales,
          active: this.published,
          delivery_free: this.delivery_free,
          delivery_price: this.delivery_price,
          delivery_time: this.delivery_time,
          self: this.self,
          smsa: this.smsa,
          posta: this.posta,
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
    ,

    validate() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        this.createRecord()
      }
    }
    ,
    reset() {
      this.$refs.form.reset()
    }
    ,
    resetValidation() {
      this.$refs.form.resetValidation()
    }

  }
}
</script>


