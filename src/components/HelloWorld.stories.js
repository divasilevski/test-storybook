import HelloWorld from "./HelloWorld.vue";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "HelloWorld",
  component: HelloWorld,
  argTypes: {
    background: {
      control: { type: "color" },
    },
  },
};

export const Common = () => ({
  components: { HelloWorld },
  template: `<HelloWorld />`,
});
