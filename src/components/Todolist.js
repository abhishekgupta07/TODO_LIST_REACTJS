import React, { Component } from "react";
import { v1 as uuidv1 } from 'uuid';

class Todolist extends Component{

    constructor(props) {
        super(props);
        this.state = {
          task : "",
          list: [],
          selectedTasks : [],
        }
      }

      updateUserInput=(event) =>{
        this.setState({
            task: event.target.value
        }
        );
      }
//adding the tasks initially
    addToList=(e)=>{
        e.preventDefault()
        const element={}
        const { list, task } = this.state;
        element.id=uuidv1()
        element.work=task
        list.push(element)
        this.setState({list:list})
        this.setState({ task: ""})
    
    }


//adding the selected tasks to temp array
//and removing the unchecked taska from array
selectTasks = (e) => {
    let {selectedTasks}=this.state

    if(e.currentTarget.checked===true){
        selectedTasks.push(e.target.id)
    }
    else if(e.currentTarget.checked===false){
        const index = selectedTasks.indexOf(e.target.id)
        if(index > -1) {
            selectedTasks.splice(index, 1);
        }
    }
    console.log(selectedTasks)
    this.setState({selectedTasks})
    }
    

//deleting the selected task from the main ARRAY
    deleteSelected=(e)=>{
        e.preventDefault();
        let {list,selectedTasks}=this.state;  
        for(let i=0;i<selectedTasks.length;i++){
            list=list.filter(data => data.id !== selectedTasks[i]);        
        }
        this.setState({ list: list, selectedTasks: []})
        console.log(list)
        console.log(selectedTasks)
    }

//deleting all the tasks at onve
    deleteAllTask = (e) => {
        e.preventDefault();
        this.setState({ list: []})
    }
    


    render(){
        return(
            <form>
    <div>
                <h1 style= {{color: "white", textAlign: "center", fontFamily :"Lucida Handwriting, Cursive",  borderBottom: "5px solid", borderRadius: "10px", margin:"auto", width: "15%"  }} >TODO LIST</h1><br/><br/>
        <div style={{border: "2px solid white", width: "30%", margin:"auto", padding:"10px", borderRadius: "20px", background:"grey" }}>
                <div style={{border: "white hidden", paddingBottom: "7px", margin:"auto", width:"95%", borderRadius: "7px",background:"#404040"}}>
                <label style={{color: "white",fontFamily :"Lucida Handwriting, Cursive",fontSize:"23px"}}>Enter your task </label> 
                <input style={{fontSize: "16px",borderRadius: "8px", border: "2px solid white",  }} type='text' placeholder="Task" value={this.state.task} onChange={this.updateUserInput} />
                <button style={{borderRadius: "6px", fontSize:"15px",border: "2px solid #CC6600", backgroundColor:"#CC6600", marginLeft: "5px"}} onClick={ this.addToList}>Add</button>
                </div>
                <br/> <br/> 

            <div style={{width: "95%", margin: "auto",textAlign: "start", height: "50vh",overflowY : "auto"}} > 
                {this.state.list.map(item => ( 
                <div style={{border: "1px solid white", borderRadius: "6px", margin: "3px", background:"#606060"}} key={item.id}>
                    <input value={item?.work} type="checkbox" onClick={this.selectTasks} id={item.id}  defaultChecked={false}/>
                    <span> {item.work} </span>
                </div>
                ))}
             </div> 

                <br/><br/>

                <button style={{borderRadius:"30px",border: "2px solid #FF3333", marginRight:"10px", background: "#FF3333"}} onClick={this.deleteSelected} > Delete selected Task </button>

                <button style={{borderRadius:"30px",border: "2px solid #FF3333", background: "#FF3333"}} onClick={this.deleteAllTask}> Delete All Task </button>
        </div>

    </div>
            
            </form>
        )
    }
}
export default Todolist