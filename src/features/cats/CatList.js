function CatList({ catPics }) {

    return(
        <div>
            {catPics.map((pic) => {
                return <img key={pic.id} src={pic.url} alt="cat" />
            })}
        </div>)

}

export default CatList