<template>
  <!-- names Start -->
  <v-row>
    <v-col
      cols="6"
      sm="6"
    >
      <v-text-field
        v-model="name_ar"
        :rules="nameArRules"
        counter="191"
        hint="This field uses counter prop"
        label="Name Arabic"
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
        label="Name English"
        clearable
      ></v-text-field>
    </v-col>
  </v-row>
  <!-- end names -->
</template>

<script>
export default {
  data: () => ({
    valid: true,
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
  }),

}
</script>
