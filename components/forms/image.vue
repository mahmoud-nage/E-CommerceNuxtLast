<!--<template>-->
<!--  &lt;!&ndash; names Start &ndash;&gt;-->
<!--      <v-file-input-->
<!--        v-model= "image"-->
<!--        :rules="imageRules"-->
<!--        hint="This field uses counter prop"-->
<!--        label="Upload Image"-->
<!--        chips-->
<!--        counter-->
<!--        show-size-->
<!--        small-chips-->
<!--        truncate-length="50"-->
<!--        filled-->
<!--        prepend-icon="mdi-camera"-->
<!--      ></v-file-input>-->
<!--  &lt;!&ndash; end names &ndash;&gt;-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--  data: () => ({-->
<!--    valid: true,-->
<!--    image: '',-->
<!--    imageRules: [-->
<!--      v => !!v || 'Image is required',-->
<!--    ],-->
<!--  }),-->

<!--}-->
<!--</script>-->
<script>
import vue2Dropzone from 'vue2-dropzone'
/**
 * File Uploads component
 */
export default {
  head() {
    return {
      title: `${this.title} | Minton - Nuxtjs Responsive Admin Dashboard Template`
    }
  },
  components: {
    vueDropzone: vue2Dropzone
  },
  data() {
    return {
      dropzoneOptions: {
        url: 'https://httpbin.org/post',
        thumbnailWidth: 150,
        maxFilesize: 0.5,
        headers: {
          'My-Awesome-Header': 'header value'
        },
        previewTemplate: this.template()
      },
    }
  },
  methods: {
    template: function () {
      return ` <div class="dropzone-previews mt-3">
            <div class="card mt-1 mb-0 shadow-none border">
                <div class="p-2">
                    <div class="row align-items-center">
                        <div class="col-auto">
                            <img data-dz-thumbnail src="#" class="avatar-sm rounded bg-light" alt="">
                        </div>
                        <div class="col pl-0">
                            <a href="javascript:void(0);" class="text-muted font-weight-bold" data-dz-name></a>
                            <p class="mb-0" data-dz-size></p>
                        </div>
                        <div class="col-auto">
                            <!-- Button -->
      <a href="" class="btn btn-link btn-lg text-muted" data-dz-remove>
      <i class="fe-x"></i>
      </a>
      </div>
      </div>
      </div>
      </div>
      </div>
      `
      }
      }
      }
</script>

<template>
            <vue-dropzone id="dropzone" ref="myVueDropzone" :use-custom-slot="true" :options="dropzoneOptions">
              <div class="dz-message needsclick">
                <i class="h1 text-muted ri-upload-cloud-2-line"></i>
                <h3>Drop files here or click to upload.</h3>
                <span class="text-muted font-13">(This is just a demo dropzone. Selected files are
                                <strong>not</strong> actually uploaded.)</span>
              </div>
            </vue-dropzone>
</template>
