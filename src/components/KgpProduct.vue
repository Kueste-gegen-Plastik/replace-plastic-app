<template>
    <div class="step step--3" id="step_3">
        <div class="step__number">
            3
        </div>
        <div class="step__line"></div>
        <h2 class="headline headline--primary">Geschafft</h2>
        <div class="step__inner">
            <div class="product">
                <div class="product__content">
                    <h3 class="headline headline--tertiary">Danke für Dein Feedback!</h3>
                    <div class="form__description">
                        <p>
                            Gemeinsam schaffen wir eine spürbare Nachfrage nach plastikfreien Verpackungen, die auch bei den Herstellern ankommt. Wir
                            geben Deinen Wunsch an den Hersteller weiter. Der Hersteller wird spätestens nach vier Wochen benachrichtigt,
                            oder wenn 20 weitere Personen dieses Produkt mit der ReplacePlastic-App gescannt haben.
                        </p>
                    </div>
                    <a class="form__button">
                Ein weiteres Produkt scannen
                </a>
                </div>
                <div class="product__content">
                    <h3 class="headline headline--tertiary">Dieses Produkt ist leider noch nicht in der Datenbank</h3>
                    <div class="form__description">
                        <p>
                            Du kannst uns helfen, die Daten zu verbessern, indem Du deinen Verbesserungswunsch trotzdem sendest. Über die Barcode-Nummer
                            können wir das Produkt finden. Dein Wunsch wird trotzdem an den Hersteller gesendet.
                        </p>
                    </div>
                    <a class="form__button">
                        Verbesserungswunsch senden
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: 'kgp-product',
    props: ['product']
};
</script>

<style lang="scss">
.product {

}
</style>
