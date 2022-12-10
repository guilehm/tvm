"use client"

import { getImageUrl } from "../../helpers"
import ImageContainer from "../commons/ImageContainer"

export default function MovieDetail({ data }) {
  return (
    <div>
      Hello from MovieDetail
      <p>Original Title: {data.original_title}</p>
      {data.poster_path &&
        <ImageContainer
          src={getImageUrl(data.poster_path)}
          alt={data.original_title}
          fill />}
    </div >
  )
}
