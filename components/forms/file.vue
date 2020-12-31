<template>
  <!-- names Start -->
      <v-file-input
        v-model= "file"
        :rules="fileRules"
        label="Upload File"
        chips
        counter
        show-size
        small-chips
        truncate-length="50"
      ></v-file-input>
  <!-- end names -->
</template>

<script>
export default {
  data: () => ({
    valid: true,
    file: '',
    fileRules: [
      v => !!v || 'File is required',
    ],
  }),
}
</script>
