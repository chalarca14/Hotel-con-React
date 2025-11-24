import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import '@/styles/ui.css'

export function Home(){
    return(
        <div>
            <Navbar/>
                <section id="home" className="container" style={{paddingTop:16}}>
                    <h2>componentes y demos listos</h2>
                    <p>Navar , Footer , Logo , Favicon , Video , Formulario , Cards , Redes , Tablas , Carrusel + Variables/Decisiones/Ciclos/Aritmetica</p>
                </section>

                <Footer/>
        </div>
    )
}