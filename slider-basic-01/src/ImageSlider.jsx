import { useState } from "react"

export default function ImageSlider({images}) {

    const [ImageIndex,setImageIndex] = useState(0)

    const handleLeft = ()=>{
        setImageIndex((index)=>{
            if(index === 0) return images.length - 1
            return index - 1
        })
    }
    const handleRight = ()=>{
        setImageIndex((index)=>{
            if(index === images.length -1) return 0
            return index + 1
        })
    }

  return (
    <div style={{width:"100%",maxWidth:"400px",height:"100%",maxHeight:"300px",position:"relative",borderRadius:"20px",overflow:"hidden"}}>
        <img style={{width:"100%",height:"100%",objectFit:"cover"}} src={images[ImageIndex].url} alt="" />
        <div className="" style={{display:"flex",gap:"10px",position:"absolute",top:"0px",width:"100%",justifyContent:"space-between",alignItems:"center",height:"100%",padding:"0px 20px",boxSizing:"border-box"}}>
            <button onClick={handleLeft} >  Left </button>
            <button onClick={handleRight}>  Right </button>
        </div>
    </div>
  )
}
