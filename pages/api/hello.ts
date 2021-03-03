import { ReamServerHandler } from "@ream/server"

const handler: ReamServerHandler = (req, res) => {
  res.send({
    hello: "vercel",
  })
}

export default handler
