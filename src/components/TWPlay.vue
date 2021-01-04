<template>
  <div class="px-6 antialiased text-gray-900">
    <div class="max-w-xl py-12 mx-auto text-left md:max-w-4xl">

      <p>t-input</p>
      <t-input
        placeholder="enter some text"
      />

      <p>t-input</p>
      <t-input
        placeholder="enter a password"
        type='password'
      />

      <p>t-button</p>
      <t-button
        @click="openModal"
      >
        Open Modal
      </t-button>

      <t-modal
        v-model="showModal"
        header="Server overload"
      >
        Reboot server, are you sure?
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

      <p>t-button</p>
      <t-button
        @click="openDialog"
      >
        Open Dialog
      </t-button>

      <t-dialog
        v-model="showDialog"
        icon="question"
        type="confirm"
      >
        <template slot="title">
          Delete user?
        </template>

        <p>This action cannot be undone.</p>

        <template slot="icon">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7a4 4 0 11-8 0 4 4 0 018 0zM9 14a6 6 0 00-6 6v1h12v-1a6 6 0 00-6-6zM21 12h-6" /></svg>
        </template>
      </t-dialog>

      <p>t-toggle</p>
      <t-toggle
        checked
      />

    </div>
    <div class="mt-2 text-base text-left text-black">
      Playing with some components from vue-tailwind
    </div>
    <div class="mt-2 text-base text-left text-black" v-for="(reference, index) in references" :key=index>
      See also <a :href="reference">{{ reference }}</a>
    </div>
  </div>
</template>

<script>
import { TInput, TButton, TModal, TDialog, TToggle } from 'vue-tailwind/dist/components'

export default {
  name: 'TWPlay',
  components: {
    TModal,
    TInput,
    TButton,
    TDialog,
    TToggle,
  },
  data() {
    return {
      showModal: false,
      showDialog: false,
      references: [
        'https://www.vue-tailwind.com/',
      ]
    }
  },
  methods: {
    openModal: function() {
      this.showModal = !this.showModal;
    },
    openDialog: function() {
      this.showDialog = !this.showDialog;
    }
  }
}
</script>

<style>
</style>
