import { useParams } from "react-router-dom"
import { retrieveTodoApi, updateTodoApi } from "./api/TodoApiService"
import { useEffect, useState } from "react"
import { Formik,Field,Form, ErrorMessage } from "formik"
import { useAuth } from "./security/AuthContext"

export default function TodoComponent(){
    
    const {id} = useParams()                                      // useParams are the hook
    const username = useAuth().username

    const [description,setDescription] = useState('')                             // making the state for desc so that we can change it
    const [targetDate,setTargetDate] = useState("")
 
    useEffect(                                                                     // we want to call retrieveTodos at the load of the todo page
        () =>  {retrieveTodos();},
        [id]                                                                      // and we want it to refreshed only when the id value changes
    );                                                                            // passing the second value as an array with id 


    function retrieveTodos(){       
        
          retrieveTodoApi(id)
          .then( (response) => 
              {setDescription(response.data.description),
              setTargetDate(response.data.targetDate)}
          )
          .catch((error) => console.log(error))
    }

    function onSubmit(values){

        // console.log(values)
        const todo = {
            id:id,
            username:username,
            description:description,
            targetDate:targetDate,
            done:false
        }

        console.log(todo)
        
        updateTodoApi(id,todo)
        .then( (response) => 
              {console.log(response)}
          )
        .catch((error) => console.log(error))

    }

    function validate(values){

         let errors = {
        //     description:"Enter a valid description",                                     // making an empty list of errors
        //     targetDate:"Enter a valid Target date"
         }

        if(values.description.length < 5){
            errors.description = "Enter atleast 5 characaters"                           
        }      
        
        if(values.targetDate == null){
            errors.targetDate = "Enter a target date"                           
        } 

        console.log(values)
        return errors
    }

    return (
        <div className="container">

            <h1>Enter Todo Details</h1>

            <div>
               <Formik initialValues={{description,targetDate}}
                  enableReinitialize={true}
                  onSubmit={onSubmit}
                  validate={validate}
                  validateOnChange={false}
                  validateOnBlur={false}                                                 // only want the error message on clicking save button
               >
                {
                    (props) => (
                        <Form>
                            <ErrorMessage 
                               name="description"
                               component="div"
                               className="alert alert-warning"
                            
                            />

                            <ErrorMessage 
                               name="targetDate"
                               component="div"
                               className="alert alert-warning"
                            
                            />

                            <fieldset className="form-group">   
                                <label>Description</label>                                                     
                                <Field type="text" className="form-control" name="description"/>                                      {/* we will have input,however when it comes to formik,we need to create something called field*/}
                            </fieldset>
                            <fieldset className="form-group">
                                <label>Target Date</label>                                                     
                                <Field type="date" className="form-control" name="targetDate"/>
                            </fieldset>
                            <div>
                                <button className="btn btn-success m-5" type="submit">Save</button>
                            </div>
                        </Form>
                    )
                }
               </Formik>  
            </div>

        </div>
    )
}