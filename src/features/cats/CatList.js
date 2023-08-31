function CatList({ catPics }) {

    return(
        <div>
            {catPics.map((pic) => {
                <img src={pic.url} alt="cat" />
            })}
        </div>>)

}

export default CatList