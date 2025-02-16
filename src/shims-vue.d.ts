// Sometimes Typescript does not recognize Vue files, this code is to solve that out.
declare module "*.vue" {
   import { DefineComponent } from 'vue';
   const component: DefineComponent<{}, {}, any>;
   export default component;
}
