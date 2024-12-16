import React from "react";
import "./Chef.css";

// Importer les images
import chef1 from "../../assets/img/Hélène Darroze.jpeg";
import chef2 from "../../assets/img/Michel-Bras.png";
import chef3 from "../../assets/img/pascal.png";
import chef4 from "../../assets/img/pierre.png";

function Chef() {
    const chefs = [
        { title: "Hélène Darroze", image: chef1 },
        { title: "Michel-Bras", image: chef2 },
        { title: "pascal", image: chef3 },
        { title: "pierre", image: chef4 },
    ];

    return (
        <div className="chef-container">
            {chefs.map((chef, index) => (
                <div className="chef-item" key={index}>
                    <div className="chef-circle">
                        <img src={chef.image} alt={chef.title} />
                    </div>
                    <h3 className="chef-title">{chef.title}</h3>
                </div>
            ))}
        </div>
    );
}

export default Chef;
