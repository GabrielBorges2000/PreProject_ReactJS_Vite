import 'styled-components';
import { defaultTheme } from '../styles/theme/default';

type Themetype = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends Themetype {}
}


/* Essas são as configurações padrões para configurar
o meu carregamento de temas das PROPS de cores.
Essas são as cores que eu coloco em defaul.ts.
caso eu queira criar alguma função eu posso fazer uma nova também,
porém não posso esquecer de referênciar na pagina App.tsx.
Além disso não esquecer de relizar a importação. */