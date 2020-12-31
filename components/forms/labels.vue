<template>
  <!-- names Start -->
  <v-row>
    <v-col
      cols="6"
      sm="6"
    >
      <v-text-field
        v-model="label_ar"
        :rules="labelArRules"
        counter="191"
        hint="This field uses counter prop"
        label="Label Arabic"
      ></v-text-field>
    </v-col>
    <v-col
      cols="6"
      sm="6"
    >
      <v-text-field
        v-model="label_en"
        :rules="labelEnRules"
        counter="191"
        hint="This field uses counter prop"
        label="Label English"
      ></v-text-field>
    </v-col>
  </v-row>
  <!-- end names -->
</template>

<script>
export default {
  data: () => ({
    valid: true,
    label_ar: '',
    label_en: '',
    labelArRules: [
      // v => !!v || 'Name Arabic is required',
      v => (v && v.length <= 190) || 'Label Arabic must be less than 190 characters',
    ],
    labelEnRules: [
      // v => !!v || 'Name English is required',
      v => (v && v.length <= 190) || 'Label English must be less than 190 characters',
    ],
  }),

}
</script>
