import React from "react"

const person = {
    name:"Prachi Pushkar",
    address:{
        line1:"Sai Apartment",
        city:"New Delhi"
    },
    profiles:['Instagram', 'WhatsApp'],                     // this is an array

    printProfile: () =>{
        person.profiles.forEach(

            profile => console.log(profile)
        )
    }

}

export default function LearningJavaScript(){
    return(
        <div>
            <div> {person.name} </div>
            <div> {person.address.line1} </div>
            <div> {person.address.city} </div>
            <div> {person.profiles[0]} </div>
            <div> {person.printProfile()} </div>
        </div>
    )
}