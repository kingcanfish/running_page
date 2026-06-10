/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

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
