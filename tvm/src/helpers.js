import { BASE_SITE_URL } from "../settings"


export function slugify(str) {
  str = str.replace(/^\s+|\s+$/g, "")
  str = str.toLowerCase()
  var from = "ÁÄÂÀÃÅČÇĆĎÉĚËÈÊẼĔȆÍÌÎÏŇÑÓÖÒÔÕØŘŔŠŤÚŮÜÙÛÝŸŽáäâàãåčçćďéěëèêẽĕȇíìîïňñóöòôõøðřŕšťúůüùûýÿžþÞĐđßÆa·/_,:;"
  var to = "AAAAAACCCDEEEEEEEEIIIINNOOOOOORRSTUUUUUYYZaaaaaacccdeeeeeeeeiiiinnooooooorrstuuuuuyyzbBDdBAa------"
  for (var i = 0, l = from.length; i < l; i++) {
    str = str.replace(new RegExp(from.charAt(i), "g"), to.charAt(i))
  }
  return str.replace(/[^a-z0-9 -]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
}

export function getImageUrl(path) {
  return `${BASE_SITE_URL}t/p/w300${path}`
}

export function getMovieDetailUrl(id, title) {
  return `movies/${id}/${slugify(title) || "-"}/`
}

