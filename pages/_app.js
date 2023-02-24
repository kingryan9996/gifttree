import '@/styles/globals.css'
import Link from 'next/link'
import TeamContext from './src/TeamContext'

export default function App({ Component, pageProps }) {
  return (
    <TeamContext>
      <div>
        <Link href="/">Home</Link>&nbsp;&nbsp;|&|&nbsp;&nbsp;
        <Link href="/MyPage/회원번호">마이페이지</Link>&nbsp;&nbsp;|&|&nbsp;&nbsp;
        현재 보유 캐시 : 50000원
        <hr />
      </div>
      <Component {...pageProps} />
    </TeamContext>
  )
}
