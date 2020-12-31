<template>
  <!-- names Start -->
  <v-row>
    <v-col
      cols="6"
      sm="6"
    >
      <v-text-field
        v-model="title_ar"
        :rules="titleArRules"
        counter="191"
        hint="This field uses counter prop"
        label="Title Arabic"
      ></v-text-field>
    </v-col>
    <v-col
      cols="6"
      sm="6"
    >
      <v-text-field
        v-model="label_en"
        :rules="titleEnRules"
        counter="191"
        hint="This field uses counter prop"
        label="Title English"
      ></v-text-field>
    </v-col>
  </v-row>
  <!-- end names -->
</template>

<script>
export default {
  data: () => ({
    valid: true,
    title_ar: '',
    title_en: '',
    titleArRules: [
      v => !!v || 'Title Arabic is required',
      v => (v && v.length <= 190) || 'Title Arabic must be less than 190 characters',
    ],
    titleEnRules: [
      v => !!v || 'Title English is required',
      v => (v && v.length <= 190) || 'Title English must be less than 190 characters',
    ],
  }),

}
</script>
