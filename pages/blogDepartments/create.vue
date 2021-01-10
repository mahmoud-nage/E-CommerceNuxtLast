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
                  >
                    <div><strong :class="published?`text-success`:`text-muted`">{{ $t('forms.general.published') }}</strong></div>
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
import Swal from "sweetalert2";
export default {
  data: () => ({
    valid: true,
    loading: true,
    model: "blogDepartments",
    title: 'Create Departments',
    items: [{
      text: 'Dashboard',
      href: '/',
    },
      {
        text: 'blogDepartments',
        href: '/blogDepartments',
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

    name_ar: '',
    name_en: '',
    nameArRules: [
      v => !!v || 'Name Arabic is required',
      v => (v && v.length <= 190) || 'Name Arabic must be less than 190 characters',
    ],
    nameEnRules: [
      v => !!v || 'Name English is required',
      v => (v && v.length <= 190) || 'Name English must be less than 190 characters',
    ],
    published: true,
  }),
  methods: {
    createRecord() {
        this.loading = true,
          this.$axios.post(this.model + '/store', {
            name_ar: this.name_ar,
            name_en: this.name_en,
            active: this.published,
          }).then(response => {
              if (response.data.status === 200) {
                this.loading = false
                Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: 'Your work has been saved',
                  showConfirmButton: false,
                  timer: 1500
                })
                this.$router.push('/blogDepartments')
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


