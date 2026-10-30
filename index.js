export default {
 async fetch(request, env) {
  const url = new URL(request.url);
  if (url.pathname === "/api/health") return Response.json({ ok: true, store: env.PUBLIC_STORE_NAME || "IRON ANCHOR" });
  if (url.pathname === "/api/products" && request.method === "GET") {
   try { const { results } = await env.DB.prepare("SELECT id,name,description,price_cents,image_key,category FROM products WHERE active = 1 ORDER BY created_at DESC").all(); return Response.json(results); }
   catch (e) { return Response.json({ error: "Database not configured yet" }, { status: 503 }); }
  }
  if (url.pathname === "/api/checkout" && request.method === "POST") return Response.json({ error: "Stripe Checkout is not configured yet. No payments are being accepted." }, { status: 501 });
  return env.ASSETS.fetch(request);
 }
};