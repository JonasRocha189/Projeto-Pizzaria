import { Router, Request, Response } from 'express'

const router = Router()

router.get('/teste', (req: Request, res: Response) => {
  return res.json({ nome: "Sujeito Pizza" })
  //throw new Error("Ops! que zica, parece que deu ruim... debuga ai parceiro ")
})

export {router}