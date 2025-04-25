const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export async function getCategories() {
  const res = await fetch(`${baseUrl}/categoies.json`, { cache: "no-store" });
  return res.json();
}

export async function getNewsList() {
  const res = await fetch(`${baseUrl}/new-by-category.json`, {
    cache: "no-store",
  });
  return res.json();
}

export async function getArticleList() {
  const res = await fetch(`${baseUrl}/article-by-category.json`, {
    cache: "no-store",
  });
  const data = await res.json();
  console.log("Article data:", data);
  return data.items;
}
