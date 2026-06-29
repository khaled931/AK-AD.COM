import { NextResponse } from "next/server";
import { isAdminRequest } from "@/lib/auth";
import { createEmptyPost, getCmsState, saveCmsState, type CmsState } from "@/lib/cms";

function unauthorized() {
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}

export async function GET() {
  if (!isAdminRequest()) return unauthorized();
  const cms = await getCmsState();
  return NextResponse.json({ cms });
}

export async function POST(request: Request) {
  if (!isAdminRequest()) return unauthorized();

  const body = await request.json();
  const action = String(body.action || "");
  const current = await getCmsState();
  const now = new Date().toISOString();

  if (action === "createPost") {
    const post = createEmptyPost();
    const next = await saveCmsState({ ...current, posts: [post, ...current.posts] });
    return NextResponse.json({ cms: next, post });
  }

  if (action === "saveCms") {
    const incoming = body.cms as CmsState;
    const normalized: CmsState = {
      posts: (incoming.posts || []).map((post) => ({ ...post, updatedAt: post.updatedAt || now })),
      pages: (incoming.pages || []).map((page) => ({ ...page, updatedAt: page.updatedAt || now })),
      siteInfo: { ...incoming.siteInfo, updatedAt: now }
    };

    const next = await saveCmsState(normalized);
    return NextResponse.json({ cms: next });
  }

  if (action === "deletePost") {
    const id = String(body.id || "");
    const next = await saveCmsState({
      ...current,
      posts: current.posts.filter((post) => post.id !== id)
    });
    return NextResponse.json({ cms: next });
  }

  return NextResponse.json({ error: "Unknown CMS action" }, { status: 400 });
}
