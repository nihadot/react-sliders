import ImageSlider from "./ImageSlider"

function App() {


  const images = [
    {url:'https://images.unsplash.com/photo-1682686580849-3e7f67df4015?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',title:'Deep dive'},
    {url:'https://images.unsplash.com/photo-1707280985305-f5f3efbca5e7?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',title:'Entertinment'},
    {url:'https://images.unsplash.com/photo-1682685797743-3a7b6b8d8149?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',title:'Adventure'},
    {url:'https://images.unsplash.com/photo-1707420256622-0af616bb57b6?q=80&w=1483&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',title:'Penguine'},
  ]


  return (
    <div style={{width:"100%",minHeight:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}}>

      <ImageSlider images={images}/>
    </div>
  )
}

export default App