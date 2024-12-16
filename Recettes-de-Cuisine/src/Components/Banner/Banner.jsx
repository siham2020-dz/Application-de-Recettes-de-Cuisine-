import "./Banner.css";

function Banner() {
    return (
        <div className="Banner-container">
            <div className="Banner-content">
                <div className="Banner-text">
                    <h1>Nos recettes faciles et traditionnelles</h1>
                    <p>
                        Chez Sisila, nous célébrons la diversité et la richesse de la cuisine sous toutes ses formes. Que vous cherchiez à préparer un apéritif qui pique la curiosité, maîtriser les bases
                        culinaires essentielles, concocter un dessert à tomber, ou surprendre avec un plat principal époustouflant, vous êtes au bon endroit.
                    </p>
                </div>
                <div className="Banner-image">
                    <img src="../../../public/Profil.png" alt="Recette" />
                </div>
            </div>
        </div>
    );
}

export default Banner;
