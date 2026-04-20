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
  readonly VITE_MAPBOX_TOKEN?: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
  readonly glob: ImportMetaGlob;
}
