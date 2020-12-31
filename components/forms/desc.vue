<template>
  <!-- names Start -->
  <v-row>
    <v-col
      cols="6"
      sm="6"
    >
      <v-textarea
        v-model="desc_ar"
        :rules="descArRules"
        label="Description Arabic"
        rows="5"
      ></v-textarea>
    </v-col>
    <v-col
      cols="6"
      sm="6"
    >
      <v-textarea
        v-model="desc_en"
        :rules="descEnRules"
        label="Description English"
        rows="5"
      ></v-textarea>

    </v-col>
  </v-row>
  <!-- end names -->
</template>

<script>
export default {
  data: () => ({
    valid: true,
    desc_ar: '',
    desc_en: '',
    descArRules: [
      v => !!v || 'Description Arabic is required',
    ],
    descEnRules: [
      v => !!v || 'Description English is required',
    ],
  }),
}
</script>
