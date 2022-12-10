require("esbuild")
  .build({
    entryPoints: ["src/index.tsx"],
    outdir: "dist",
    bundle: true,
    // minify: true,
    loader: {
      ".png": "file",
    },
    plugins: [],
  })
  .catch(() => process.exit(1));
