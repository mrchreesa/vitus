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
    }`,
    { next: { revalidate: 60 } },
    { cache: "no-store" }
  );
}
export async function getEvent(slug) {
  const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: false, // Set to false to avoid using the CDN and its caching
  });

  return client.fetch(
    groq`*[_type == "event" && slug.current == $slug][0] {
      _id,
      _createdAt,
      name,
      date,
      location,
      description,
      "image": image.asset->url,
      "slug": slug.current,
    }`,
    { slug },
    { next: { revalidate: 60 } },
    { cache: "no-store" }
  );
}
export async function getBlogs() {
  const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: false, // Set to false to avoid using the CDN and its caching
  });

  return client.fetch(
    groq`*[_type == "blog"]   {
      _id,
      _createdAt,
      title,
      author,
      description,
      "image": image.asset->url,
      "slug": slug.current,
    }`,
    { next: { revalidate: 60 } },
    { cache: "no-store" }
  );
}

export async function getBlog(slug) {
  const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: false, // Set to false to avoid using the CDN and its caching
  });

  return client.fetch(
    groq`*[_type == "blog" && slug.current == $slug][0] {
      _id,
      _createdAt,
      title,
      author,
      description,
      "image": image.asset->url,
      "slug": slug.current,
    }`,
    { slug },
    { next: { revalidate: 60 } },
    { cache: "no-store" }
  );
}
export const dynamic = "force-dynamic";
export const revalidate = 60;
