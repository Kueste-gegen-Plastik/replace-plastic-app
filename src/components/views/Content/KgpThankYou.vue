<template>
    <div class="step">
        <h2 class="headline headline--primary">
            <span class="headline__inner headline__inner--primary">
                Danke
            </span>
        </h2>
        <div class="step__inner">
            <div class="content">
                <p>
                    Großer Dank an alle, die an der Umsetzung dieser App mitgewirkt haben,
                    die es ermöglicht, den Anbietern von Produkten schnell und einfach Feedback zu ihren Plastikverpackungen zu geben:
                </p>
                <p>
                    Deutsche Postcode Lotterie, Thomas Daußmann, HALasersystems, Claudia Kerpa, Ralph Kerpa, neuwaerts GmbH,
                    Neuwerk Rechtsanwälte, Michael Pfeiffer-Härtl, Achim Schmacks, Frank Timrott, Jennifer Timrott, Felix Wahner.
                </p>
                <p>
                    Das Konzept zu dieser App ist im Rahmen des Wissenschaftsjahres Meere und Ozeane bei der Ozeanwerkstatt Kiel auf der MS Wissenschaft entstanden. Inspiriert durch einen Kurzvortrag unseres Vereins Küste gegen Plastik e.V. und unsere Idee, mit einer App durch einen Barcode-Scan die Stimme des Kunden zum Anbieter zu bringen, fand sich auf dem Schiff ein Team, das die Idee voranbringen wollte und zwei Tage lang ein Konzept ausgearbeitet hat. Für das vorgestellte Konzept haben wir bei der Ozeanwerkstatt den ersten Preis, die Goldene Kieler Sprotte, gewonnen.
                </p>
                <p>
                    Wir danken: Tanja Lücker, Stephan Schakulat, Mike Schindler, Klara Aylin Wenten.
                </p>
            </div>
        </div>
        <kgp-sponsors></kgp-sponsors>
    </div>
</template>


<script>
import KgpSponsors from '@/components/shared/KgpSponsors/KgpSponsors'
export default {
    name: 'kgp-thankyou',
    components: {
        KgpSponsors
    },
    data() {
        return {}
    }
};
</script>



