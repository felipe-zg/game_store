import { Story, Meta } from '@storybook/react/types-6-0';
import Main from '.';

export default  {
  title: "Main",
  Component: Main,
  args: {
    title: "default title",
    description: "default descvription"
  }
} as Meta

export const Basic: Story = (args) => <Main {...args} />
