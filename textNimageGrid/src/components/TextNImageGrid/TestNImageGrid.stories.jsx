import TextNImageGrid from "./index";

export default {
  title: "Components/TextNImageGrid",
  component: TextNImageGrid,
  // decorators: [
  //   (Story) => (
  //     <div style={{ height: "700px", width: "500px" }}>
  //       <Story />
  //     </div>
  //   ),
  // ],
};

const Template = (args) => <TextNImageGrid {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Text and Image module 2",
  subtitle: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum condimentum eros ex, quis cursus arcu tempor quis. Ut elementum pellentesque orci at rhoncus. Donec in pellentesque turpis. Suspendisse imperdiet viverra quam in fringilla. In ullamcorper maximus rhoncus. Proin vitae maximus neque. Vivamus imperdiet sem vitae ullamcorper suscipit. `,
  imageOne:
    "https://images.unsplash.com/photo-1574285013029-29296a71930e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=627&q=80",
  imageOneAlt: "image of laptop",
  imageOneSubText: "Image taken from a free resource",
  imageTwo:
    "https://images.unsplash.com/photo-1505521377774-103a8cc2f735?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  imageTwoAlt: "image of laptop",
  imageTwoSubText: "Image taken from a free resource",
  imageThree:
    "https://images.unsplash.com/photo-1503602642458-232111445657?ixid:MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib:rb-1.2.1&auto:format&fit:crop&w:687&q:80",
  imageThreeAlt: "image of laptop",
  imageThreeSubText: "Image taken from a free resource",
  reversed: false,
};
