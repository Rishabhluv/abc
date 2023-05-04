import './Viedio.css'
function Viedio({ newstitle, image, author, description, story, url }) {

    let temp = [{ "imgtemp": "https://images.unsplash.com/photo-1572949645841-094f3a9c4c94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bmV3c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" }]
    return (
        <>
            <div className="card">
                <img src={(image === null) ? temp[0].imgtemp : image} />
                <div className="container">
                    <h3><b>{newstitle}</b></h3>
                    <h5>{description}</h5>
                    <p>{story}</p>
                    <p>News by : {author}</p>
                    <a href={url} className="footbtn" target="_blank" rel="noopener noreferrer">
                        <button className='btn'>Read More</button>
                    </a>
                </div>
            </div>
        </>
    )
}
export default Viedio;