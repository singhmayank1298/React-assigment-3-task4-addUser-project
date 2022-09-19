import  { useState } from 'react';
import NewForm from './component/Forms/NewForm';
import FormList from './component/NewList/FormList';
import Card from './component/Ui/Card'
import ErrorModel from './component/NewList/ErrorModel';

import './App.css';


const App = () => {
  const [ListArray,setListArray]=useState([{User:"mayank",Age:"23",key:"jnjs"}])
const  [isValid,setisValid]=useState(1)


 const ListItemHendeler=(Item)=>{
if(Item.User===('')){
return setisValid(2)
}
if(Item.Age<0){
  return setisValid(3)
  }
  const obj=[
    ...ListArray,
    Item

  ]
  
  setListArray(obj)
  console.log(ListArray)
 }

 const ErrorHnedeler=()=>{
  setisValid(1)
 }
  

  return (<div>
   
    <NewForm ListItem={ListItemHendeler}></NewForm>
    
   <Card>
    {isValid !==1? <ErrorModel age={isValid} Errorok={ErrorHnedeler}></ErrorModel>:( ListArray.map((x)=>{
return <FormList key={x.key} user={x.User} age={x.Age} ></FormList>
}))}

</Card>
   
    
  </div>)
    
};

export default App;
