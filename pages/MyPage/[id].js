import Link from 'next/link'
import React from 'react'

const MyPage = () => {

    const userList = ["1001", "1002", "1003"]
    const user = ["1001"]
    return (
        <div>MyPage
            <Link href={`/WishList/${user}`}><br />{user}의 회원님의 위시리스트로 이동</Link>
        </div>
    )
}

export default MyPage