import React from "react";

export function Profile({link, alt}) {
    return(
        <img 
            src={link}
            alt={alt}
        />
    );
}

export default function Gallery() {
    return (
        <section>
            <h1>Galeria de Imagens</h1>
            <Profile link={"https://sm.ign.com/t/ign_br/screenshot/default/darth-vader_5yvm.1200.jpg"} alt={"Darth Vader"} />
            <Profile link={"https://img.olhardigital.com.br/wp-content/uploads/2022/05/christensen-anakin.jpg"} alt={"Anakin Skywalker"} />
            <Profile link={"https://www.saboresajinomoto.com.br/uploads/images/posts/wall_e_5c757d90ccce15.27507640.jpg"} alt={"Walle-e"} />
        </section>
    );
}