import { Story, Meta } from '@storybook/react/types-6-0';
import {withKnobs, text} from '@storybook/addon-knobs'
import Main from '.';

export default  {
  title: "Main",
  Component: Main,
  decorators: [withKnobs]
} as Meta

export const Basic: Story = () => <Main
                                    title={text('title', 'React Avançado')}
                                    description={text('Description', 'Typescript, ReactJS, NextJS e styled components')}
                                  />
