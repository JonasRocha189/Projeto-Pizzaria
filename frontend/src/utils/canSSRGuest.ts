import {GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult} from 'next'
import{parseCookies} from 'nookies'

// função para páginas que só pode ser acessadas por visitantes
export function canSSRGuest<P>(fn: GetServerSideProps<P>){
  return async (ctx: GetServerSidePropsContext): Promise<GetServerSidePropsResult<P>> => {

    const cookies = parseCookies(ctx)

    // Somente não logados podem acessar
    if(cookies['@nextauth.token']){
      return {
        redirect: {
          destination: '/dashboard',
          permanent: false
        }
      }
    }

    return await fn(ctx)
  }
}
