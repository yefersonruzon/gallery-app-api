/* eslint-disable @next/next/no-img-element */
import Image from "next/image"
export default function Imagelist(photos:any) {
    const renderItem = (item:any) => {
        <p>{item.photographer}</p>
    } 
    return (
        <div>
        {photos?.photos.map(photo =>{
          return(
            <div  key={photo.id}>
                <p>{photo.photographer}</p>
                <img src={photo.src.small} alt={photo.id} />
            </div>
          )
        })}
    </div>
  )
}
