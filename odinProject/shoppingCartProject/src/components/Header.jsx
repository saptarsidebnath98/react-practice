
const Header = () => {

  const images = ["coffee", "cycle", "laptop", "ring", "mobile", "shoe"];

  return (
    <header className="header">
      <div className="container">
        <div className="header-container">
            <div className="header-title">
                <h1 className="header-first">Shop <span className="h-pink">essential</span></h1>
                <p>and</p>
                <h1 className="header-first">Showcase <span className="h-pink">Luxury</span></h1>
            </div>
            <img className="header-img" src="./images/oneStop.png" alt="sale image" />
            <h3 className="famous-for">#World No.1 trusted shopping platform</h3>

            <div className="header-img-div">
              {images.map((image, index)=> 
              <img key={index} src={`./images/${image}.png`} alt={`${image} image`} className="header-img-items" />)}
            </div>
        </div>
      </div>
    </header>
  )
}

export default Header
