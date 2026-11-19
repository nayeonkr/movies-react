const user = {
  name: 'asdf',
  imageUrl: 'https://react.dev/images/docs/scientists/yXOvdOSs.jpg',
  imageSize: 90,
}

const products = [
  { title: 'Cabbage', id: 1 },
  { title: 'Garlic', id: 2 },
  { title: 'Apple', id: 3 },
  { title: 'Grape', id: 4 }
]

function ShoppingList() {
  const listItems = products.map(product => {
    return <li key={ product.id }>
      {product.title}
    </li>
   })

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
  return (
    <button>i'm a button</button>
  )
}

export default function MyApp() { 
  const isLoggedId = true

  return (
    <div>
      <h1>hello world</h1>
      <MyButton />
      <p>my name is hong</p>
      {/* <Profile/> */}
      { isLoggedId ? <Profile /> : <p>로그인해주세요</p> }
      { isLoggedId && <p>welcome</p>}
      <ShoppingList/>
    </div>
  )
}