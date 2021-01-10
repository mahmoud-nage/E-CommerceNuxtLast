<div
  style="text-align: center;"
>
<v-icon
  dark
  right
  class="text-center"
  color="green darken-2"
  v-if="published"
  @click="dialog = true"
>
  mdi-checkbox-marked-circle
</v-icon>
<v-icon
  dark
  right
  color="red darken-2"
  class="text-center"
  v-if="!published"
  @click="dialog = true"
>
  mdi-close-circle
</v-icon>
</div>

<v-row justify="center">
<v-dialog
  v-model="dialog"
  max-width="290"
>
  <v-card>
    <v-card-title class="headline">
      Published Action?
    </v-card-title>

    <v-card-text v-if="!published"
                 color="green darken-1"
    >
      You will Published This review.
      <div
        style="text-align: center;"
      >
        <v-icon
          x-large
          color="red darken-2"
          style="text-align: center; font-size: 75px; margin: 5px auto"
        > mdi-close-circle
        </v-icon>
      </div>
    </v-card-text>
    <v-card-text v-if="published"
                 color="red darken-1"
    >
      You will Un Published This review.

      <div
        style="text-align: center;"
      >
        <v-icon
          x-large
          color="green darken-2"
          style="text-align: center; font-size: 75px; margin: 5px auto"
        >
          mdi-check-circle-outline
        </v-icon>
      </div>

    </v-card-text>

    <v-card-actions>
      <v-spacer></v-spacer>

      <v-btn
        v-if="!published"
        color="green darken-1"
        text
        @click="changeStatus('published', 1)"
      >
        Published
      </v-btn>

      <v-btn
        v-if="published"
        color="red darken-1"
        text
        @click="changeStatus('published', 0)"
      >
        Not Published
      </v-btn>
    </v-card-actions>
  </v-card>
</v-dialog>
</v-row>

<script>
import Swal from "sweetalert2";

/**
 * Reviews-list component
 */
export default {
  data() {
    return {
      props: ['published'],
      published: 0,
      dialog: false,
      dialog2: false,
    };
  },
  methods: {
    changeStatus(type, val) {
      this.$axios.post(this.model + "/" + id + '/changeStatus', {
        'type': type,
        'value': val
      })
        .then(response => {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: response,
            showConfirmButton: false,
            timer: 1500
          })
        })
    },
  },
  // middleware: 'router-auth',
};
</script>

