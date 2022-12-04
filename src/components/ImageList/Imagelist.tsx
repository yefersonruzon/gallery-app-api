/* eslint-disable @next/next/no-img-element */
import Image from "next/image"
import styles from "./Imagelist.module.css"


export default function Imagelist(photos:any) {
    const renderItem = (item:any) => {
        <p>{item.photographer}</p>
    } 

    return (
        <div className={styles.imgcontainer}>
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
