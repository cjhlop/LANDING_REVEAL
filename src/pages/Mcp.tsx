import { useEffect } from "react";
import "../mcp.css";

const Mcp = () => {
  useEffect(() => {
    document.title =
      "DemandSense MCP: LinkedIn Buyer Intelligence for Claude and ChatGPT";

    const description =
      "DemandSense MCP joins LinkedIn ad exposure, person- and company-level website visitor identity, and CRM state into one dataset queryable from Claude, ChatGPT, and other MCP clients.";

    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = description;
  }, []);

  return null;
};

export default Mcp;
