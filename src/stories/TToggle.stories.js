import TToggle from 'vue-tailwind/dist/t-toggle';
import '../assets/tailwind.css';


export default {
  title: 'Example/TToggle',
  component: TToggle,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { TToggle },
  template: `<t-toggle v-bind="$props" />`,
});

const defaultClasses = {
  wrapper: 'bg-gray-100 rounded-full border-2 border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50',
  wrapperChecked: 'bg-blue-500 rounded-full border-2 border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50',
  wrapperDisabled: 'bg-gray-100 rounded-full border-2 border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50',
  wrapperCheckedDisabled: 'bg-blue-500 rounded-full border-2 border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50',
  button: 'h-5 w-5 rounded-full bg-white shadow flex items-center justify-center text-gray-400 text-xs',
  buttonChecked: 'h-5 w-5 rounded-full bg-white shadow flex items-center justify-center text-blue-500 text-xs',
  checkedPlaceholder: 'rounded-full w-5 h-5 flex items-center justify-center text-gray-400 text-xs',
  uncheckedPlaceholder: 'rounded-full w-5 h-5 flex items-center justify-center text-gray-400 text-xs',
};

export const Off = Template.bind({});
Off.args = {
  checked: false
};

export const On = Template.bind({});
On.args = {
  checked: true
};

export const Danger = Template.bind({});
Danger.args = {
  checked: true,
  classes: {
    ...defaultClasses,
    ...{
      wrapperChecked: 'bg-red-500 rounded-full border-2 border-transparent focus:ring-2 focus:ring-red-500 focus:outline-none focus:ring-opacity-50',
      wrapperCheckedDisabled: 'bg-red-500 rounded-full border-2 border-transparent focus:ring-2 focus:ring-red-500 focus:outline-none focus:ring-opacity-50',
    }
  }
};

export const Success = Template.bind({});
Success.args = {
  checked: true,
  classes: {
    ...defaultClasses,
    ...{
      wrapperChecked: 'bg-green-500 rounded-full border-2 border-transparent focus:ring-2 focus:ring-green-500 focus:outline-none focus:ring-opacity-50',
      wrapperCheckedDisabled: 'bg-green-500 rounded-full border-2 border-transparent focus:ring-2 focus:ring-green-500 focus:outline-none focus:ring-opacity-50',
    }
  }
};

export const Box = Template.bind({});
Box.args = {
  checked: true,
  classes: {
    ...defaultClasses,
    ...{
      wrapper: 'bg-gray-100 rounded-sm border-2 border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50',
      wrapperChecked: 'bg-blue-500 rounded-sm',
      wrapperCheckedDisabled: 'bg-blue-500 rounded-sm',
      button: 'h-6 w-6 rounded-sm bg-white shadow flex items-center justify-center text-gray-400 text-xs',
      buttonChecked: 'h-6 w-6 rounded-sm  bg-white shadow flex items-center justify-center text-blue-500 text-xs',
      checkedPlaceholder: 'rounded-sm w-6 h-6 flex items-center justify-center text-gray-400 text-xs',
      uncheckedPlaceholder: 'rounded-sm w-6 h-6 flex items-center justify-center text-gray-400 text-xs'
    }
  }
};
