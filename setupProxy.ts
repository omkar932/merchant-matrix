import { createProxyMiddleware } from "http-proxy-middleware";
import { Express } from "express";

export default function setupProxy(app: Express) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://localhost:4000",
      changeOrigin: true,
    })
  );
}
