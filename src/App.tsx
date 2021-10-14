import './App.css';
import React, { useState } from 'react';
import LoginModel,{LoginFunction} from './ModalPopup/LoginModel';
import loginUser from './ModalPopup/fakeAuthService';


function App() {
  
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [loginError, ] = useState<string | undefined>()
  const toggleModel = () => {
    setIsModalVisible(wasModalVisible => !wasModalVisible)
  }
  
const onBackdropClick = () =>{
    setIsModalVisible(false)
}

 const onLoginRequeste :LoginFunction =  async(args) =>{
    try{
      const result = await loginUser(args)
      console.log(result)
    }
    catch (error)
    {
      //setLoginError(error)
      console.log(error)
      console.log(JSON.stringify(error))
    }
 }

  return (
    <div className="App">
      
      <button onClick={toggleModel}>show model</button>
      <LoginModel loginError ={loginError} onClose={onBackdropClick} onLoginRequested={onLoginRequeste} isModalVisible={isModalVisible}/>
    
    </div>
  );
}

export default App;
