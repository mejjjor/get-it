import { NextApiRequest, NextApiResponse } from "next";
import Cors from "cors";

import fetch from "got-fetch";

const cors = Cors({
  methods: ["GET"],
});

function runMiddleware(
  req: NextApiRequest,
  res: NextApiResponse,
  fn: Function
) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await runMiddleware(req, res, cors);

  switch (req.method) {
    case "GET":
      if (req.query.key !== process.env.QUERY_KEY) {
        return res.status(200).send({ msg: "API is closed, sorry" });
      }
      const pictureFetch = await fetch(req.query.url as string);
      const body = pictureFetch.body;

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
