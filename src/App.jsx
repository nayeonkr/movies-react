import  {useState} from 'react'

const user = {
  name: 'asdf',
  imageUrl: 'https://react.dev/images/docs/scientists/yXOvdOSs.jpg',
  imageSize: 90,
}

const products = [
  { title: 'Cabbage', id: 1, isFruit: false },
  { title: 'Garlic', id: 2, isFruit: false },
  { title: 'Apple', id: 3, isFruit: true },
  { title: 'Grape', id: 4, isFruit: true }
]

function ShoppingList() {
  const listItems = products.map(product => 
   <li 
      key={product.id}
      style={
        {color: product.isFruit ? 'red': 'blue'}
      }
    >
      {product.title}
      </li>
    
  )


  return (
    <ul>{ listItems }</ul>
  )
}

function Profile() {
  return (
    <>
      <h2>{user.name}</h2>
      <img
        src={user.imageUrl}
        style={
          {
            width: 300,
            height: user.imageSize
          }
        }
        alt={'photo of ' + user.name}
        className="avatar"
      />
    </>
    
  )
}

function MyButton() { 
  // useState(기본값)
  const [count, setCount] = useState(0)
  // const count = usestate(0)[0]
  // const setCount = useState(0)[1] 첫번째 값을 count에 두번째 값을 setcount에 저장한다

  // 데이터는 바뀔수 있지만 react에 보고가 안되어서 화면이 안바뀜
// let myCount = 0
// function MyCountF() {
//   myCount++
//   console.log(myCount)
// }

  // 이벤트 리스너 
  // => 1. 이벤트를 달고싶은 요소 찾기 2. 거기에 이벤트 리스너 달기 3. 이벤트 리스너 내부에 실행할 함수 넣기
  function handleClick() {
    setCount(count + 1)
  }


  return (
    <button onClick={handleClick}>{ count }번 클릭!</button>
  )
}

export default function MyApp() { 
  const isLoggedId = true

  return (
    <div>
      <h1>hello world</h1>
      <MyButton />
      <MyButton />
      <MyButton />
      <p>my name is hong</p>
      {/* <Profile/> */}
      { isLoggedId ? <Profile /> : <p>로그인해주세요</p> }
      { isLoggedId && <p>welcome</p>}
      <ShoppingList/>
    </div>
  )
}