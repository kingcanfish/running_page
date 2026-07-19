/// <reference types="vite/client" />

interface ImportMetaGlob {
  (
    pattern: string,
    options?: {
      import?: 'default' | 'named' | 'namespace' | 'named+default';
      eager?: boolean;
      as?: string;
      assert?: Record<string, boolean>;
    }
  ): Record<string, () => Promise<any>>;
}

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
  readonly glob: ImportMetaGlob;
}

declare module '*.svg' {
  import type { FC, SVGProps } from 'react';

  export const ReactComponent: FC<SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

declare module '@config' {
  const config: Record<string, unknown>;
  export default config;
}

declare module '*.yml' {
  const content: Record<string, unknown>;
  export default content;
}
