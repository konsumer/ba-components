// turn any CSS color into a BABYLON color
export const convertColor = (name, alpha) => {
  const regexColor = /(\d{1,3}), (\d{1,3}), (\d{1,3})/gm
  let fakeDiv = document.createElement("div")
  fakeDiv.style.color = name
  document.body.appendChild(fakeDiv)
  const pv = window.getComputedStyle(fakeDiv).getPropertyValue("color")
  document.body.removeChild(fakeDiv)
  const c = regexColor.exec(pv.toString()).slice(1,4).map(n => parseInt(n))
  return typeof alpha !== 'undefined' ? BABYLON.Color4.FromInts(c[0], c[1], c[2], alpha) : BABYLON.Color3.FromInts(c[0], c[1], c[2])
}