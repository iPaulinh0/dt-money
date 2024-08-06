import 'styled-components';
import { defaultTheme } from '../styles/themes/default';

type THemeType = typeof defaultTheme

declare module 'styled-component' {
  export interface DefaultTHeme extends THemeType {}
}