import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { auth, getImages } from './api/pexels'
import { useState, useEffect} from 'react'
import Imagelist from '../components/ImageList/Imagelist'

export default function Home() {
  const [photos, setPhotos] = useState([])

  const loadImages = async () =>{
    const res = await getImages()
    console.log(res.data)
    setPhotos(res.data.photos)
  }
  useEffect(()=>{
    loadImages()
  },[])
  return (
    <div className={styles.container}>
      <Imagelist photos={photos} />
    </div>
  )
}
