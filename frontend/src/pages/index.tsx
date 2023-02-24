import { useContext, FormEvent, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/home.module.scss'

import logoImg from '../../public/logo.svg'

import { Button } from '../components/ui/Buttton'
import { Input } from '../components/ui/Input'
import { toast } from 'react-toastify'

import { AuthContext } from '../contexts/AuthContext'

import Link from 'next/link'

import { canSSRGuest } from '../utils/canSSRGuest'

export default function Home() {
  const { signIn } = useContext(AuthContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [loading, setLoading] = useState(false)

  async function handleLogin(event: FormEvent) {
    event.preventDefault()

    if (email === '' || password === '') {
      toast.warning('Preencha os campos')
      return
    }

    setLoading(true)

    let data = {
      email,
      password,
    }

    await signIn(data)

    setLoading(false)
  }

  return (
    <>
      <Head>
        <title>Sujeito Pizza</title>
      </Head>

      <div className={styles.containerCenter}>
        <Image src={logoImg} alt="Logo Sujeito Programador" />

        <div className={styles.login}>
          <form onSubmit={handleLogin}>
            <Input
              placeholder="Digite seu Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              placeholder="******"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" loading={loading}>
              Acessar
            </Button>
          </form>
          <Link href="/signup" className={styles.text}>
            Não pssui uma conta? Cadastre-se
          </Link>
        </div>
      </div>
    </>
  )
}

export const getServerSideProps = canSSRGuest(async (ctx) => {
  return {
    props: {},
  }
})
