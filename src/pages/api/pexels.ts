import type { NextApiRequest, NextApiResponse } from 'next'
export const auth = "563492ad6f917000010000010eb5c93852c64363a4d3451ff10e6b3c";
import axios from "axios"

export const getImages = async () =>
    await axios.get(`https://api.pexels.com/v1/curated?per_page=50`,{
        headers:{
            Authorization: auth
        },
    })


