<template>
  <!-- names Start -->
    <v-select
      v-model="shareType"
      :rules="shareTypeRules"
      :items="items"
      label="Select Share Type"
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
    shareType: null,
    shareTypeRules: [
      v => !!v || 'Image is required',
    ],
    items: ['foo', 'bar', 'fizz', 'buzz'],
  }),
}
</script>
