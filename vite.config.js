export default {
  build: {
    outDir: "dist",
    rollupOptions: {
      output: {
        assetFileNames: "[ext]/[name][extname]",
        chunkFileNames: "chunks/[name].[hash].js",
        entryFileNames: "js/[name].js",
      },
    },
  },
  server: {
    host: true,
  },
};
