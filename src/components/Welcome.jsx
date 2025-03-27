 
import {Button} from "@heroui/react"; 
import NavbarComp from "./NavbarComp"; 
import CustomButton from "./ButtonComp";
const Welcome = () => {
  return (
	<div className=''>
	<NavbarComp client:load />
	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, officia ipsa, provident incidunt sapiente reiciendis voluptas iste fuga facilis temporibus ex eius repellendus! Eum necessitatibus quas distinctio dolores? Eos, vitae.</p>
	   
		<CustomButton color="primary" label="Get It now" onClick={() => alert("hi")}  client:load />
	</div>
  )
}

export default Welcome