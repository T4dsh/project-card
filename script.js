function toggleMode (){
   const html = document.documentElement
   // OUTRO JEITO DE FAZER, CÓDIGO MAIS LIMPO:
   html.classList.toggle('light')
   // UM JEITO DE FAZER, MAS LEVA MAIS CÓDIGO:
   //if(html.classList.contains('light')){
    //html.classList.remove("light")
   //} else { html.classList.add("light")} 

//trocar imagens de acordo com o background:
    const img = document.querySelector("#profile img")

    // substituir imagem
    if (html.classList.contains("light")) {
        // se estiver light mode, adicionar imagem light
        img.setAttribute('src', './assets/profile-pic (3).png')

    } else {
        // se tiver sem light mode, manter a original
        img.setAttribute('src', './assets/profile-pic (2).png')
    }

}