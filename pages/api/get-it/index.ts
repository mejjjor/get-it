import { NextApiRequest, NextApiResponse } from "next";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET":
      const pictureFetch = await fetch(req.query.url as string);
      const body = pictureFetch.body;

      console.log("aaaaaaaaa: ", pictureFetch.url);

      return res
        .status(200)
        .setHeader(
          "Content-Type",
          pictureFetch.headers.get("Content-Type") ?? "application/octet-stream"
        )
        .send(body);

    default:
      throw new Error(
        `The HTTP ${req.method} method is not supported at this route.`
      );
  }
}
