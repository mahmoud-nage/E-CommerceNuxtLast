
<template>
  <v-app>
  <div>
    <!-- Begin page -->
    <Vertical v-if="layout.layoutType === 'vertical'" :layout="layout.layoutType">
        <Nuxt />
    </Vertical>
    <!-- END layout-wrapper -->

    <Horizontal v-if="layout.layoutType === 'horizontal'" :layout="layout.layoutType">
        <slot />
    </Horizontal>

    <Detached v-if="layout.layoutType === 'detached'" :layout="layout.layoutType">
        <slot />
    </Detached>

    <TwoColumn v-if="layout.layoutType === 'two-column'" :layout="layout.layoutType">
        <slot />
    </TwoColumn>
</div>
  </v-app>
</template>
<script>
import {
  mapState
} from "vuex";

import Vertical from "./vertical";
import Horizontal from "./horizontal";
import Detached from "./detached";
import TwoColumn from "./two-column";
import Swal from "sweetalert2";

/**
 * Default Layout
 */
export default {
  components: {
    Vertical,
    Horizontal,
    Detached,
    TwoColumn,
  },
  data() {
    return {}
  },
  methods: {
    confirm() {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        type: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        confirmButtonClass: "btn btn-success mt-2",
        cancelButtonClass: "btn btn-danger ml-2 mt-2",
        buttonsStyling: false,
      }).then((result) => {
        if (result.value) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            type: "success",
          });
        } else {
          Swal.fire({
            title: "Cancelled",
            text: "Your imaginary file is safe :)",
            type: "error",
          });
        }
      });
    },
  },
  computed: mapState(["layout"]),
  mounted() {
    if (this.$route.query.layout) {
      this.$store.dispatch('layout/changeLayoutType', {
        layoutType: this.$route.query.layout
      })
    }
  }
};
</script>
