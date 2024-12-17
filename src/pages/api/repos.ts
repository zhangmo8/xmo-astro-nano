
// import { useOctokit } from "@pages/api/utils";
import type { APIRoute } from "astro";
import { useOctokit } from "./utils";

export const GET: APIRoute = async () => {
  try {
    const { data } = await useOctokit().request("GET /user/repos", { per_page: 100 });
   
    return new Response(JSON.stringify(data));
  }
  catch (error) {
    console.error("Error fetching repos:", error);
    throw error;
  }
};
