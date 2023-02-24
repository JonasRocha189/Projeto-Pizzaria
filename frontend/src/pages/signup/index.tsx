import { useState, FormEvent, useContext } from 'react'

import Head from 'next/head'
import Image from 'next/image'
import styles from '../../../styles/home.module.scss'

import logoImg from '../../../public/logo.svg'

import { Button } from '../../components/ui/Buttton'
import { Input } from '../../components/ui/Input'

import { AuthContext } from '../../contexts/AuthContext'
import { toast } from 'react-toastify'

import Link from 'next/link'

export default function Signup() {
  const { signUp } = useContext(AuthContext)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [loading, setLoading] = useState(false)

  async function handleSingUp(event: FormEvent) {
    event.preventDefault()

    if (name === '' || email === '' || password === '') {
      toast.error('Preencha todos os campos')
      return
    }

    setLoading(true)

    let data = {
      name,
      email,
      password,
    }

    await signUp(data)

    setLoading(false)
  }

  return (
    <>
      <Head>
        <title>Faça seu cadastro agora</title>
      </Head>

      <div className={styles.containerCenter}>
        <Image src={logoImg} alt="Logo Sujeito Programador" />

        <div className={styles.login}>
          <h1>Criando a sua conta</h1>
          <form onSubmit={handleSingUp}>
            <Input
              placeholder="Digite se nome"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <Input
              placeholder="E-mail"
              type="email"
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
              Cadastrar
            </Button>
          </form>
          <Link href="/" className={styles.text}>
            Já pssui uma conta? Faça login
          </Link>
        </div>
      </div>
    </>
  )
}
