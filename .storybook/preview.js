/** @type { import('@storybook/react').Preview } */
import NextImage from 'next/image';
import '../src/app/globals.css'; // Optional: Import your global styles

const CustomImage = (props) => (
  <img
    {...props}
    style={{ width: props.width, height: props.height }}
    alt={props.alt || 'Image'}
  />
);

// Replace the default export of next/image with the custom one
NextImage.default = CustomImage;

const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
