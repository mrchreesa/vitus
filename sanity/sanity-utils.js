import { createClient, groq } from "next-sanity";
import { apiVersion, dataset, projectId } from "./env";

export async function getEvents() {
  const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: false, // Set to false to avoid using the CDN and its caching
  });

  return client.fetch(
    groq`*[_type == "event"] | order(date asc) {
      _id,
      _createdAt,
      name,
      date,
      location,
      description,
      "image": image.asset->url,
      "slug": slug.current,
    }`
  );
}
export const dynamic = "force-dynamic";
