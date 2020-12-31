<template>
  <!-- names Start -->
  <v-row>
  <v-col
    cols="12"
    md="12"
  >

    <v-subheader>{{$t('Meta Section')}}</v-subheader>

  </v-col>
  </v-row>
  <!-- end names -->
</template>

<script>
export default {
  data: () => ({
    valid: true,
    title: '',
    desc: '',
    titleRules: [
      v => !!v || 'Title Arabic is required',
      v => (v && v.length <= 190) || 'Name Arabic must be less than 190 characters',
    ],
    descRules: [
      v => !!v || 'Description English is required',
    ],
  }),
}
</script>
