import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router';

const WishList = () => {

    const categoryList = ["전체", "식품", "향수", "등등..."]
    const [productList, setProductList] = useState();
    const [state, setState] = useState()
    const [selectList, setSelectList] = useState([])
    const router = useRouter();


    async function dataGet() {
        const res = await axios.get(`http://localhost:3000/api`)
        const data = res.data
        // console.log(data, '데이터조회결과')
        setProductList(data)
    }
    console.log(selectList, '??????????????')

    useEffect(() => {
        dataGet();
    }, [])

    return (
        <div>
            <h2>당신의 회원번호는 1001 입니다.</h2>
            <h2>회원번호 : {router.query.id}님의 위시리스트</h2>
            생일인 사람이 사용하는 공간
            <br />WishList
            카테고리 별로 상품조회기능
            <article style={{ display: "flex" }}>
                <ul>{categoryList.map(obj => <li onClick={() => { setState(obj) }} key={obj}>{obj}</li>)}
                </ul>
                <div style={{ border: "1px solid black", background: "#ddd" }}>
                    카테고리 : <strong>{state ? state : "카테고리를 선택하세요."}</strong><br />

                    {productList?.map(obj => {
                        return (<div>
                            <strong>상품명</strong> : <em>{obj.itemName} </em><button onClick={() => { setSelectList([...selectList, obj]) }}>클릭해서 담기</button>
                        </div>)
                    })}

                </div>
                <ul>
                    {selectList.map((obj, idx) => {
                        return <li style={{ border: "1px solid blue" }} key={idx}>
                            <article>
                                <h3>{obj.itemName}</h3>
                                <img style={{ width: 100, height: 100 }} src={obj.itemImgUrl} />
                                <span>{obj.itemPrice}원</span>
                                <button>{router.query.id == 1001 ? "나에게 선물하기" : `${router.query.id}님에게 선물하기`}</button>
                            </article>
                        </li>
                    })}
                </ul>
            </article>
        </div>
    )
}

export default WishList