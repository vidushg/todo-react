import React, {useEffect, useRef} from "react"

const Header = (props) => {
  const headerStyle = {
    padding: "20px 0",
    lineHeight: "2em",
  }
const isInitialMount = useRef(true)
console.log(isInitialMount)

useEffect(() => {
    var x = Math.floor(Math.random()*256)
    var y = Math.floor(Math.random()*256)
    var z = Math.floor(Math.random()*256)
    var bgcolor = "rgb("+x+","+y+","+z+")"

    var changeArray = ["now that's what i call a change!","changed","wow","what a change","fantastic!","great stuff"];

    var changeWord = changeArray[Math.floor(Math.random()*6)];

    if (isInitialMount.current) {
      isInitialMount.current = false;
    }
    else{
      document.getElementById("inH1").innerHTML = changeWord
      document.getElementById("inH1").style.backgroundColor = bgcolor;
    }
  }, [props.headerSpan])


  return (
    <header style={headerStyle}>
      <h1 style={{fontSize: "25px", marginBottom: "15px"}}>
        Todo Todo <span id="inH1"></span>
      </h1>
      <p style={{fontSize: "19px"}}>
        The Pink Panther's fav List
      </p>
    </header>
  )
}

/*class Header extends React.Component {
  componentDidUpdate(prevProps, prevState){

    var x = Math.floor(Math.random()*256);
    var y = Math.floor(Math.random()*256);
    var z = Math.floor(Math.random()*256);

    var changeArray = ["now that's what i call a change!","changed","wow","what a change","fantastic!","great stuff"];

    var changeWord = changeArray[Math.floor(Math.random()*6)];

    var bgcolor = "rgb("+x+","+y+","+z+")";

    if(prevProps.headerSpan !== this.props.headerSpan){
      document.getElementById("inH1").innerHTML = changeWord;
      document.getElementById("inH1").style.backgroundColor = bgcolor;
    }
  }
  render(){
    const headerStyle = {
      padding: "20px 0",
      lineHeight: "2em",
    }
    return(
      <header style={headerStyle}>
      <h1 style={{fontSize: "25px", marginBottom: "15px"}}>Simple Todo Todo <span id="inH1" /></h1>
      <p style={{fontSize: "19px"}}>Pink Panther List </p>
      </header>
    )
  }
}*/

export default Header
