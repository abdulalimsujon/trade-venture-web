import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import CoFounderCard from '@/components/co-founder/CoFounderCard';

// Default export for Storybook metadata
export default {
  title: 'Cofounder/CoFounderCard',
  component: CoFounderCard,
};

// Template to render the component with props
const Template= (args) => (
  <CoFounderCard {...args} />
);

// Mock data for stories
const mockCoFounder = {
  id: '1',
  name: 'John Doe',
  degi: 'Chief Technology Officer',
  experience: '10 years of experience in software development',
  image: 'https://randomuser.me/api/portraits/women/45.jpg',
};

// Export the Primary story with default props
export const Primary = Template.bind({});
Primary.args = {
  item: mockCoFounder,
};


// Export a variation with short experience text
export const ShortExperience = Template.bind({});
ShortExperience.args = {
  item: {
    ...mockCoFounder,
    experience: '5 years of experience',
  },
};
