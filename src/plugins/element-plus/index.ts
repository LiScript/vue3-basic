import { App } from "vue";
// import {
//   ElAffix,
//   ElSkeleton,
//   ElBreadcrumb,
//   ElBreadcrumbItem,
//   ElScrollbar,
//   ElSubmenu,
//   ElButton,
//   ElCol,
//   ElRow,
//   ElSpace,
//   ElDivider,
//   ElCard,
//   ElDropdown,
//   ElDialog,
//   ElMenu,
//   ElMenuItem,
//   ElDropdownItem,
//   ElDropdownMenu,
//   ElIcon,
//   ElInput,
//   ElForm,
//   ElFormItem,
//   ElLoading,
//   ElPopover,
//   ElPopper,
//   ElTooltip,
//   ElDrawer,
//   ElPagination,
//   ElAlert,
//   ElRadioButton,
//   ElRadioGroup,
//   ElCollapse
// } from "element-plus";
import ElementPlus from "element-plus";

import "element-plus/packages/theme-chalk/src/base.scss";
import "element-plus/lib/theme-chalk/index.css";
// const components = [
//   ElAffix,
//   ElSkeleton,
//   ElBreadcrumb,
//   ElBreadcrumbItem,
//   ElScrollbar,
//   ElSubmenu,
//   ElButton,
//   ElCol,
//   ElRow,
//   ElSpace,
//   ElDivider,
//   ElCard,
//   ElDropdown,
//   ElDialog,
//   ElMenu,
//   ElMenuItem,
//   ElDropdownItem,
//   ElDropdownMenu,
//   ElIcon,
//   ElInput,
//   ElForm,
//   ElFormItem,
//   ElPopover,
//   ElPopper,
//   ElTooltip,
//   ElDrawer,
//   ElPagination,
//   ElAlert,
//   ElRadioButton,
//   ElRadioGroup,
//   ElCollapse
// ];

// const plugins = [ElLoading];

import ElementLocale from "element-plus/lib/locale";
import zhLocale from "element-plus/lib/locale/lang/zh-cn";
ElementLocale.use(zhLocale);

export function useElementPlus(app: App) {
  app.use(ElementPlus);
  // components.forEach((component: Component) => {
  //   app.component(component.name, component);
  // });
  // plugins.forEach(plugin => {
  //   app.use(plugin);
  // });
}
