import { createClient } from "@sanity/client/stega";

import { apiVersion, dataset, projectId } from "../env";

export function getClient(previewToken) {
  return createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: !previewToken,
    perspective: previewToken ? "previewDrafts" : "published",
    stega: {
      enabled: previewToken ? true : false,
      studioUrl: "/studio",
    },
    token: previewToken,
  });
}
