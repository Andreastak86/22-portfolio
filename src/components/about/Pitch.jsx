import React, { useState } from "react";

function Pitch() {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    const pitchText =
        "Jeg er en 36 år ung mann som har funnet gleden med å kode. Jeg er problemløser av natur, og gir meg ikke før jeg har oppnådd resultat. Med stor interesse for data, elektronikk og duppedingser, har jeg også fattet interesse for å knytte koding sammen med små datamaskiner som Arduino og Rasbery Pi. Ved å ha meg med på laget, får dere en dedikert, energisk person som aldri sier nei for å ta i et tak. Jeg ser på en hver utfordring til å tilegne meg ny kunnskap. Mitt mål er ikke å bli best, men å bli den beste personen å ha med på laget!";

    const visibleText = pitchText.slice(0, Math.round(pitchText.length * 0.1));

    return (
        <section id='pitch'>
            <div className='about__content'>
                <div className='about__pitch' onClick={toggleExpand}>
                    <h6>{isExpanded ? pitchText : visibleText + "... "}</h6>
                </div>
            </div>
        </section>
    );
}

export default Pitch;
