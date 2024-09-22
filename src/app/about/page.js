import  { getAllProductsDB }from "@/app/actions"
import React from 'react'

const About = async() => {

  const products = await getAllProductsDB()
  console.log(products)

  return (
    <div>Hola soy la pagina de about</div>
  )
}

export default About