<template>
    <div class="step">
        <h2 class="headline headline--primary">
            <span class="headline__inner headline__inner--primary">
                Über ReplacePlastic
            </span>
        </h2>
        <div class="step__inner">
            <div class="content">
                <img src="img/header_uber_uns.jpg" alt="Plastikmüll" />
                <p>
                    Der Plastikmüll im Meer hat dramatische Ausmaße angenommen. Jede Verpackung und jedes Stück Plastik, das in die Umwelt gelangt, kann dort Jahrhunderte überdauern. Plastik kann in der Umwelt nicht abgebaut werden, es wird nur immer weiter zerkleinert und bedroht zahlreiche Lebewesen.
                </p>
                <p>
                    Ein großer Teil des Mülls gelangt vom Land her über die Flüsse ins Meer. Verpackungen spielen eine große Rolle. Es gibt zu viele Plastikverpackungen für Produkte des täglichen Bedarfs.
                </p>
                <p>
                    Hersteller und Anbieter sagen oft: „Der Verbraucher will es so.“ Das sehen wir anders. Mit dieser App wollen wir den Anbietern von Produkten mitteilen, dass wir uns andere Verpackungen wünschen, damit sie anfangen, die Entwicklung von abbaubaren Materialien voranzutreiben und Alternativen bereitzustellen. Mit der App kannst du Produkte scannen, die du verwendest oder kaufen würdest, um mitzuteilen, dass du dir für diese Produkte Verpackungen ohne Plastik wünschst. Dieses Feedback wird von uns weitergeleitet.
                </p>

                <button type="button" v-on:click.prevent="goHome" class="form__button">
                    Jetzt loslegen und Produkte scannen
                </button>

                <br />
                <br />
                <hr class="waves">
                <br />
                <br />

                <h2 class="headline headline--primary">
                    <span class="headline__inner headline__inner--primary">
                        Lizenz
                    </span>
                </h2>
                <br />
                <br />
                <div style="text-align:center;">
                    <a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/">
                        <img alt="Creative Commons Lizenzvertrag" style="border-width:0; margin: 0 auto;" src="https://i.creativecommons.org/l/by-nc/4.0/88x31.png" />
                    </a>
                </div>
                <br />
                <span xmlns:dct="http://purl.org/dc/terms/" href="http://purl.org/dc/dcmitype/Dataset" property="dct:title" rel="dct:type">ReplacePlastic App</span>
                von <span xmlns:cc="http://creativecommons.org/ns#" property="cc:attributionName">Küste gegen Plastik e.V.</span>
                ist lizenziert unter einer
                <a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/">
                    Creative Commons Namensnennung-Nicht kommerziell 4.0 International Lizenz
                </a>.

                <p>Wenn Ihr selbst etwas Ähnliches wie ReplacePlastic für andere Anliegen machen und unsere App als Vorlage nutzen möchtet oder wenn Ihr diese App als Instrument für den Kampf gegen Plastikmüll in Eurem Land verwenden möchtet, nehmt bitte gerne Kontakt zu uns auf: <a href="mailto:post@kueste-gegen-plastic.de">post@kueste-gegen-plastic.de</a>. Wir freuen uns, zusammen die Welt ein wenig besser machen zu können.</p>

                <p>If you want to do something similar like ReplacePlastic for different purposes or use this App as an instrument for your fight against plastic waste in your country, please contact us: <a href="mailto:post@kueste-gegen-plastic.de">post@kueste-gegen-plastic.de</a>. We are glad to be able to make the world a little better together.</p>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: 'kgp-about',
    data() {
        return {}
    },
    methods: {
        goHome() {
            this.$router.push('/');
        }
    }
};
</script>



