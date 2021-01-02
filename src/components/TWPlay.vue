<template>
  <div class="antialiased text-gray-900 px-6">
    <div class="max-w-xl mx-auto py-12 md:max-w-4xl">
      <!-- <p>FormsDemo</p>
      <FormsDemo /> -->
      <p>t-input</p>
      <t-input
      />
      <p>t-button</p>
      <t-button
        @click="buttonClicked"
      >
        Open Modal
      </t-button>
      <t-modal
        v-model="showModal"
        header="Title of the modal"
      >
        Content of the modal.
        <template v-slot:footer>
          <div class="flex justify-between">
            <t-button type="button">
              Cancel
            </t-button>
            <t-button type="button">
              Ok
            </t-button>
          </div>
        </template>
      </t-modal>
    </div>
  </div>
</template>

<script>
import { TInput, TButton, TModal } from 'vue-tailwind/dist/components'
// import FormsDemo from './FormsDemo.vue'

export default {
  name: 'TWPlay',
  components: {
    // FormsDemo,
    TModal,
    TInput,
    TButton,
  },
  data() {
    return {
      showModal: false
    }
  },
  methods: {
    buttonClicked: function() {
      this.showModal = !this.showModal;
    }
  }
}
</script>

<style>
</style>
