import {Button,MyButton,SubmitButton} from "@/components/button";
import { Media } from "@/components/media";
function Home(){
  return (
    <div>
  <h1>this is my headind</h1>
  <Button text="post"/>
   <SubmitButton text="like"/>
  {/* <MyButton/> */}
  <Media heading="MY FIRST CARD" 
  description="This is a dummy data for learning"
   buttonText="Read more"/>  
   <Media heading="MY SECOND CARD" 
  description="This is a dummy data for learning"
   buttonText="Read more"/>  
  
  </div>
  );
}
// function Button(){
//   return <button>{5+2}</button>;
//   // return<button>{1+2}</button> javascript inside html works using{}bracket

// }
 export default Home;
