import TextInput from '@/components/ui/input/TextInput';
import React, { useState } from 'react';

// Default export with metadata for Storybook
export default {
  title: 'UI/Input/TextInput',
  component: TextInput,
};

// Template to reuse across all stories
const Template = (args) => {
  const [value, setValue] = useState(args.value || '');

  return (
    <TextInput
      {...args}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

// Default Text Input
export const Default = Template.bind({});
Default.args = {
  id: 'default-input',
  label: 'Agenda',
  placeholder: 'Enter agenda',
  type: 'text',
};

// Text Input with Custom Label
export const WithCustomLabel = Template.bind({});
WithCustomLabel.args = {
  id: 'custom-label-input',
  label: 'Meeting Topic',
  placeholder: 'Enter the meeting topic',
  type: 'text',
};

// Password Input Example
export const PasswordInput = Template.bind({});
PasswordInput.args = {
  id: 'password-input',
  label: 'Password',
  placeholder: 'Enter your password',
  type: 'password',
};

// Number Input Example
export const NumberInput = Template.bind({});
NumberInput.args = {
  id: 'number-input',
  label: 'Age',
  placeholder: 'Enter your age',
  type: 'number',
};

// Email Input Example
export const EmailInput = Template.bind({});
EmailInput.args = {
  id: 'email-input',
  label: 'Email',
  placeholder: 'Enter your email address',
  type: 'email',
};

// Input with Validation Error
export const WithValidationError = Template.bind({});
WithValidationError.args = {
  id: 'validation-input',
  label: 'Username',
  placeholder: 'Enter your username',
  type: 'text',
  className: 'border-red-500', // Adds a red border to indicate an error
};

// Input with Pre-filled Value
export const PrefilledValue = Template.bind({});
PrefilledValue.args = {
  id: 'prefilled-input',
  label: 'Pre-filled Input',
  placeholder: 'Enter value',
  value: 'Initial Value',
  type: 'text',
};

// Disabled Input
export const DisabledInput = Template.bind({});
DisabledInput.args = {
  id: 'disabled-input',
  label: 'Disabled Input',
  placeholder: 'This input is disabled',
  type: 'text',
  className: 'bg-gray-200',
  onChange: () => {}, // No-op to prevent value changes
};

// Read-Only Input Example
export const ReadOnlyInput = Template.bind({});
ReadOnlyInput.args = {
  id: 'readonly-input',
  label: 'Read-Only Input',
  placeholder: 'This input is read-only',
  type: 'text',
  value: 'Read-only value',
  className: 'bg-gray-100',
  onChange: () => {}, // No-op to prevent editing
};
