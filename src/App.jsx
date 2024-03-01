import './App.css'

function App() {
    const github = () => {
        window.open('https://github.com/livalves', '_blank');
    };
      
    const gmail = () => {
        window.open('mailto:liviamabelle@gmail.com', '_blank');
    };
      
    const linkedin = () => {
        window.open('https://www.linkedin.com/in/livia--alves', '_blank');
    };
      
    const instagram = () => {
        window.open('https://www.instagram.com/maabelle_', '_blank');
    };

    return (

        <>
        <main>
            <div className='container'>
                <img className='photo' src="https://i.pinimg.com/736x/fd/6c/cd/fd6ccdb97d1857a470f748a280ccfd46.jpg"/>
                <h1>
                    Lívia Alves
                    <span className='locality'>Barbalha, Ceará</span>
                </h1>

                <div className='profession'>
                    <span >"Desenvolvedora Front-end"</span>
                </div>

                <div className='container-buttons'>
                    <button onClick={github}>GitHub</button>
                    <button onClick={gmail}>Gmail</button>
                    <button onClick={linkedin}>Linkedin</button>
                    <button onClick={instagram}>Instagram</button>
                </div>
            </div>
        </main>
        </>
    )
}

export default App
