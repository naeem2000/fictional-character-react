import './Navbar.scss';

export default function navbar() {
  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  return (
    <div className='NavBar'>
    <nav id="myTopnav">
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#background">Background</a></li>
        <li><a href="#personality">Personality</a></li>
        <li><a href="#appearance">Appearance</a></li>
        <li><a href="#abilities">Abilities</a></li>
        <li><a href="#sharingan">Sharingan</a></li>
        <li><a href="#rinnegan">Rinnegan</a></li>
        <li>  <a href="javascript:void(0);" class="icon" onclick="myFunction()">
    <i class="fa fa-bars"></i>
  </a></li>
      </ul>
    </nav>
  </div>
  );
}

