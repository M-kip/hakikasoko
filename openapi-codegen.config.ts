import {
  generateSchemaTypes,
  generateReactQueryComponents,
  generateReactQueryFunctions,
} from "@openapi-codegen/typescript";
import { defineConfig } from "@openapi-codegen/cli";
export default defineConfig({
  openApiClient: {
    from: {
      relativePath: "./schema.yml",
      source: "file",
    },
    outputDir: "./OpenApi",
    to: async (context) => {
      const filenamePrefix = "openApiClient";
      const { schemasFiles } = await generateSchemaTypes(context, {
        filenamePrefix,
      });
      await generateReactQueryComponents(context, {
        filenamePrefix,
        schemasFiles,
      });
      await generateReactQueryFunctions(context, {
        filenamePrefix,
        schemasFiles,
      });
    },
  },
});
