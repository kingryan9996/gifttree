import { headers } from '@/next.config'
import '@/styles/globals.css'
import axios from 'axios'
import Link from 'next/link'
import { useEffect } from 'react'
import TeamContext from './src/TeamContext'

export default function App({ Component, pageProps }) {
  const REST_API_KEY = "51d923e3f663f838b4e51d65282d1b89"
  const REDIRECT_URI = "http://localhost:3000/auth/kakao/callback"

  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`

  useEffect(() => {
    let mycode = new URL(window.location.href)
    console.log(mycode)

    //현재 윈도우 창의 주소값 불러옴
    const href = window.location.href;
    //현재 url의 파라미터를 가져옴
    let params = new URL(window.location.href).searchParams;
    //params에 저장된 파라미터 안에서 'code'의 값을 가져옴
    let code = params.get("code");


  }, [])

  return (
    <TeamContext>
      <div>
        <Link href="/">Home</Link>&nbsp;&nbsp;|&|&nbsp;&nbsp;
        <Link href="/MyPage/회원번호">마이페이지</Link>&nbsp;&nbsp;|&|&nbsp;&nbsp;
        <Link href={KAKAO_AUTH_URL}>카카오톡 로그인</Link><br />
        현재 보유 캐시 : 50000원
        <hr />
      </div>
      <Component {...pageProps} />
    </TeamContext>
  )
}
