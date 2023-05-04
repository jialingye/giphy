const GifDisplay = ({gif}) => {
    const loaded = () => {
        return (
            <div>
                <img src = {gif}/>
            </div>
        )
    };

    const loading = () =>{
        return <h1>No Gif to display</h1>
    }

    return gif? loaded():loading()
}

export default GifDisplay;