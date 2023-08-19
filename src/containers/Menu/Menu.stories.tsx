import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Menu } from "./index";

export default {
  title: 'Menu',
  component: Menu,
} as ComponentMeta<typeof Menu>;

const Template: ComponentStory<typeof Menu> = () =>
  <BrowserRouter>
    <Menu />;
  </BrowserRouter>

export const Main = Template.bind({});