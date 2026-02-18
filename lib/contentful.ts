import { createClient, Entry, EntrySkeletonType } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN!,
  environment: process.env.CONTENTFUL_ENVIRONMENT || "master",
});

const POST_TYPE = "blogPost";
const CATEGORY_TYPE = "category";

export type PagedResult<T> = {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
};

function toPaged<T>(items: T[], total: number, page: number, pageSize: number): PagedResult<T> {
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  return { items, total, page, pageSize, totalPages };
}

export async function getPostsPaged(page = 1, pageSize = 6) {
  const skip = (page - 1) * pageSize;

  const res = await client.getEntries({
    content_type: POST_TYPE,
    order: ["-fields.publishedDate"],
    limit: pageSize,
    skip,
  });

  return toPaged(res.items as any[], res.total, page, pageSize);
}

export async function getPostBySlug(slug: string) {
  const res = await client.getEntries({
    content_type: POST_TYPE,
    "fields.slug": slug,
    limit: 1,
    include: 2, // include references (like category)
  });

  return (res.items[0] as any) ?? null;
}

// Category pages (Category is a referenced content type)
export async function getPostsByCategorySlugPaged(categorySlug: string, page = 1, pageSize = 6) {
  const skip = (page - 1) * pageSize;

  const res = await client.getEntries({
    content_type: POST_TYPE,
    order: ["-fields.publishedDate"],
    limit: pageSize,
    skip,
    // filter by referenced category slug
    "fields.category.fields.slug": categorySlug,
    include: 2,
  });

  return toPaged(res.items as any[], res.total, page, pageSize);
}

// Search (Contentful 'query' does full-text across fields)
export async function searchPostsPaged(q: string, page = 1, pageSize = 6) {
  const skip = (page - 1) * pageSize;

  const res = await client.getEntries({
    content_type: POST_TYPE,
    order: ["-fields.publishedDate"],
    query: q,
    limit: pageSize,
    skip,
  });

  return toPaged(res.items as any[], res.total, page, pageSize);
}

export async function getAllCategories() {
  const res = await client.getEntries({
    content_type: CATEGORY_TYPE,
    order: ["fields.name"],
  });
  return res.items as any[];
}
