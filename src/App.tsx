//import { useState } from 'react'
import { cvitem } from './data/cv'
import Card from './components/Card'
import InfoPersonal from './components/InfoPersonal'

function App() {

  //const [visor, setVisor] = useState([])
 

  return (
    <>

      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-4l text-amber-50 font-bold lg">Portafolio Agustín Aguilera Beltrán</h1>

      </header>

      <div className="container mx-auto my-5 px-4 max-w-screen-xl">
        <InfoPersonal />
      </div>

      {//TRABAJOS REALIZADOS
      }
      <div className="container mx-auto px-4 pt-2.5 max-w-screen-xl border-t-4 border-t-red-200 rounded-tl-xl">    
        <h3 className="font-bold text-xl mb-2 text-red-900">
          Trabajos realizados
        </h3>  

        <p className="font-bold">Elaboracion íntegra de plantillas de envío modulares y reutilizables (html y velocity) para envío por Centro de Notificaciones propio de compañía y Adobe Campaign</p>


        <p className="font-bold">Ejemplo de uso de plantilla modular para envío de campañas por email usando:</p>
        <ul>
          <li>Construcción de plantillas .vm velocity para envío por centro de notificaciones de la empresa.</li>
          <li>construcción de plantillas .html para envío.gestor de campañas Adobe Campaign con </li>
        </ul> 
      
        <div className="grid grid-cols-3 gap-4">          
            <div className="overflow-y-auto scrollbar w-full max-h-100">
            <strong>Email01</strong>
            <img src="./src/assets/img/email01.png" alt="" />
            </div>
            
            <div className="overflow-y-auto scrollbar w-full max-h-100">
              <strong>Email02</strong>
              <img src="./src/assets/img/email02.png" alt="" />
            </div>  
            
            <div className="overflow-y-auto scrollbar w-full max-h-100">
              <strong>Email03</strong>
              <img src="./src/assets/img/email03.png" alt="" />
          </div>
        </div>
      </div>

      {//AFICIONES
      }
      <div className="container mx-auto my-5 pr-4 pt-0 border-r-4 border-r-amber-200 max-w-screen-xl p-4 dark:border-neutral-600 dark:bg-neutral-800 rounded-tr-xl "> 
        <h3 className="font-bold text-xl mb-2 text-amber-900 text-right">
          Tiempo libre y aficiones
        </h3>  

        <div className="">
          <div className="flex w-full justify-end">          
            {cvitem.map(item => (
              <Card
                key = {item.id}
                item = {item} 
              />
            ))}
          </div>

          <p></p>        
        </div>
      </div>
      


    

    Ejemplo con prism de código (un par de módulos clicables?)

      
    </>
  )
}

export default App