import './App.css'
import {motion} from "framer-motion"


const Home = () => {
  return (
    <div
    className="home-container">
      <img
        alt="image"
        src="/playground_assets/mix-900w.png"
        className="home-image"
      />

    <motion.div     initial ={{

x:"-100vw"

}}

animate={{
x:0
}}

transition={{
  delay:1.5,
  type:"spring",

}}
>
    <a     
    href="https://github.com/sisoalbert/BankWithdrawalFees">Visit the github repo!</a>
      </motion.div>  
    </div>
  )
}

export default Home
