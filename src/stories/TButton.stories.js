import TButton from 'vue-tailwind/dist/t-button';
import '../assets/tailwind.css';


export default {
  title: 'Example/TButton',
  component: TButton,
  argTypes: {
    onClick: { action: 'clicked' },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { TButton },
  template: `<t-button @click="onClick" v-bind="$props" />`,
});

export const Primary = Template.bind({});
Primary.args = {
  text: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  text: 'Secondary',
  classes: 'text-gray-800 bg-white border border-gray-300 shadow-sm hover:text-gray-600',
};

export const Error = Template.bind({});
Error.args = {
  text: 'Error',
  classes: 'text-white bg-red-500 border border-transparent rounded shadow-sm hover:bg-red-600',
};

export const Success = Template.bind({});
Success.args = {
  text: 'Success',
  classes: 'text-white bg-green-500 border border-transparent rounded shadow-sm hover:bg-green-600',
};

export const Link = Template.bind({});
Link.args = {
  text: 'Link',
  classes: 'text-blue-500 underline hover:text-blue-600'
};
