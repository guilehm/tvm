import Image from "next/image"
import styled from "styled-components"


export const ImageContainer = styled.figure`
  position: relative;
  min-height: 250px;
`

export const CardImage = styled(Image)`
  object-fit: contain;
`
