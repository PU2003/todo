import { Form, useParams } from "react-router-dom"
import { retrieveTodoApi } from "./api/TodoApiService"
import { useAuth } from "./security/AuthContext"
import { useEffect, useState } from "react"
import { Formik,Field } from "formik"

export default function TodoComponent(){
    
    const {id} = useParams()                                      // useParams are the hook

    const [description,setDescription] = useState('')                             // making the state for desc so that we can change it

 
    useEffect(                                                                     // we want to call retrieveTodos at the load of the todo page
        () => retrieveTodos(),
        [id]                                                                      // and we want it to refreshed only when the id value changes
    )                                                                            // passing the second value as an array with id 


    function retrieveTodos(){
        
          retrieveTodoApi(id)
          .then( (response) => 
              {setDescription(response.data.description)}
          )
          .catch((error) => console.log(error))
    }

    return (
        <div className="container">

            <h1>Enter Todo Details</h1>

            <div>
               <Formik>

                    {
                        (props) => (

                            <Form>
                                 <fieldset className="form-group">   
                                    <label>Description</label>                                                     
                                    <Field type="text" className="form-control" name="description"/>                                      {/* we will have input,however when it comes to formik,we need to create something called field*/}
                                 </fieldset>
                                 <fieldset className="form-group">
                                    <label>Target Date</label>                                                     
                                    <Field type="date" className="form-control" name="targetDate"/>
                                 </fieldset>
                            </Form>
                        )
                    }
               </Formik>
            </div>

        </div>
    )
}