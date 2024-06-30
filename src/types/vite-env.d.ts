/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_WEB_3_FORMS_KEY: string;
    // otras variables de entorno que estés utilizando
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }