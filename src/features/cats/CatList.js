function CatList({ catPics }) {

    const catPicComps = catPics.map((pic) => {
        <img src=`${pic.url}` alt="cat"/>
    })

    return(
        {catPicComps}
    )

}

export default CatList