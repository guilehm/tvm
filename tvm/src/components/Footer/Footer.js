"use client"

import Link from "next/link"
import { useContext } from "react"
import SettingsContext from "../../contexts/settings-context"
import * as S from "./Footer.styles"

export default function Footer() {
  const settings = useContext(SettingsContext)
  const { footer } = settings
  return (
    <S.Footer>
      <S.Container>

        <S.Section>
          <S.About>{footer.about}</S.About>
          <p>{footer.description}</p>
        </S.Section>

        <S.Section>
          <h5>Contact</h5>
          <S.Email>{settings.contact.email}</S.Email>
        </S.Section>

        <S.Section>
          <h5>Links</h5>
          <S.StyledLink href="">movies</S.StyledLink>
          <S.StyledLink href="">tv show</S.StyledLink>
        </S.Section>

      </S.Container>

      <S.Rights>
        <h5>Developed by</h5>
        <Link href={settings.contact.github}>{settings.contact.name}</Link>
      </S.Rights>

    </S.Footer>
  )
}
