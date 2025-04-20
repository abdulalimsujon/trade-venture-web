import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import MyProject from '@/components/co-founder/MyProject';

// Default export with metadata for Storybook
export default {
  title: 'Cofounder/MyProject',
  component: MyProject,
  parameters: {
    layout: 'centered', // Optional: Center the component on the Storybook page
  },
}

// Template to render the component
const Template = (args) => <MyProject {...args} />;

// Default story
export const Default = Template.bind({});
Default.args = {};

// Custom story with different image gallery
export const CustomImages = Template.bind({});
CustomImages.args = {
  companyImageGallery: [
    'https://i.ibb.co/1qMQLTD/photo1.jpg',
    'https://i.ibb.co/4pDsHym/photo2.jpg',
    'https://i.ibb.co/kK1Q6mG/photo3.jpg',
  ],
};

// Story to test behavior without initial load completion
export const NoInitialLoad = Template.bind({});
NoInitialLoad.args = {
  initialLoadComplete: false,
};
