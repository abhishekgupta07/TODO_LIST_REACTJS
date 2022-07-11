// import logo from './logo.svg';
import { Component } from 'react';
import './App.css';
import Todolist from './components/Todolist'
// import ChildComponent from './component/FamilyDetails/ChildComponent';
// import ParentComp from './component/ParentComp';
// import ConditionalRendering from './component/ConditionalRendering';
// import ListPractice from './component/ListPractice';
// import StatePractice  from './component/StatePractice';
// import SetStatePractice from './component/SetStatePractice'
// import EventBinding from './component/EventBinding';
// import IndexAsKey from './component/IndexAsKey';
// import RefsDemo from './component/RefsDemo';
// import Focus from './component/Focus'
// import Form from './component/EmailPasswordValidationForm'
// import PureComp from './component/PureComp';
// import ClickCounter from './component/ClickCounter';
// import HoverCounter from './component/HoverCounter';
// import ClickCounter1 from './component/practice/ClickCounter1';
// import HoverCounter1 from './component/HoverCounter1';
// import FatherComponent from './component/family/Parent/FatherComponent'
// import Parents from './component/FamilyDetails/Parents';
// import Testing from './component/practice/Testing';

class App extends Component{


  // constructor(props){
  //   super(props);
  //     this.state ={ 
  //       timerID:" ",
  //       // nameList: [
  //       //   {fName:"Rajat", mName:"Khushi"},
  //       //   {fName:"Vipin",mName:"Divya"}, 
  //       //   {fName: "Aditya",mName:"Kirti"},
  //       //   {fName: "Shubham",mName:"Deepa"}
  //       // ],
        
  //     };
  // }
  
render(){
// const {nameList} = this.state;

// for(let i in nameList){
//   for(let j in childList){
//     if(i===j){
//       console.log(this.state.nameList[i])
//       console.log(this.state.childList[i])

//     }
//   }
// }
  
  return(
    <div className='App' style={{background: "#404040",  color:"white", height:"100vh"}}>
      {/* <StatePractice time={this.state.timerID}/> */}
      {/* <SetStatePractice /> */}
      {/* <EventBinding /> */}
      {/* <ConditionalRendering /> */}
      {/* <ListPractice/> */}
      {/* <IndexAsKey/> */}
      {/* <Form/> */}
      {/* <ParentComp/> */}
      {/* <RefsDemo/> */}
      {/* <Focus /> */}
      {/* <ClickCounter1 /> */}
      {/* <HoverCounter1 /> */}
      {/* <FatherComponent/> */}
      {/* <Parents fathersname={'Aakash'} fathersurname={'Yadav'} mothersname={"Khushi"} mothersurname={"tiwari"} /> */}
      {/* {nameList.map((name,key1)=> <Parents names={name} index1={key1}/>)} */}
      {/* {childList.map(Cname=> <ChildComponent Cnames={Cname}/>)} */}
    <Todolist/>
    {/* <Testing /> */}
      
    </div>
  )
}
}
export default App;
