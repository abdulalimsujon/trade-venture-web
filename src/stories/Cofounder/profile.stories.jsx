import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import CoFounderProfileGrid from '@/components/co-founder/CoFounderProfileGrid';

// Default export with metadata for Storybook
export default {
  title: 'Cofounder/CoFounderProfileGrid',
  component: CoFounderProfileGrid,
} 

// Template for rendering the component
const Template= (args) => (
  <CoFounderProfileGrid {...args} />
);

// Primary story (default state)
export const Primary = Template.bind({});

// Secondary story (with different image path)
export const CustomImage = Template.bind({});
CustomImage.args = {
  item: { image: '/2.jpg' },
};
