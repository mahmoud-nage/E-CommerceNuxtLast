<template>
  <!-- names Start -->
    <v-select
      v-model="bannerType"
      :rules="typeRules"
      :items="items"
      label="Select Show Page"
      auto-select-first
      chips
      clearable
      rounded
      solo
    ></v-select>
  <!-- end names -->
</template>

<script>
export default {
  data: () => ({
    bannerType: null,
    typeRules: [
      v => !!v || 'Image is required',
    ],
    items: ['foo', 'bar', 'fizz', 'buzz'],
    value: null
  }),
}
</script>
