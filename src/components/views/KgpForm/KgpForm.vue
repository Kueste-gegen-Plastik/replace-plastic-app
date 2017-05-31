<template>
    <div class="step step--1" id="step_1">
        <form class="form" name="userdataform" v-on:submit="handleSubmit($event)">
            <fieldset class="form__fieldset">
                <legend class="form__legend">
                    Persönliche Daten eingeben
                </legend>
                <div class="step__inner">
                    <hr class="waves" />
                    <div class="form__description">
                        <p>
                            Wir benötigen Deine persönlichen Angaben, damit wir den Herstellern
                            im Konfliktfall belegen können, dass Dein Feedback gültig
                            ist, und dass wir diese Meldungen nicht selbst erzeugt haben.
                        </p>
                        <p>
                            <strong>Wir geben Deine Daten nicht an Dritte weiter.</strong>
                        </p>
                    </div>

                    <div class="form__formrow form__formrow--wrap" >
                        <div class="form__formrow form__formrow--half">
                            <label class="form__label" v-bind:class="{ 'form__label--filled' : firstname.length }" for="firstname">Vorname<sup title="Pflichtfeld">*</sup></label>
                            <input class="form__input" type="text" required="required" id="firstname" :value="firstname" @input="updateUser($event, 'firstname')" />
                        </div>
                        <div class="form__formrow form__formrow--half">
                            <label class="form__label" v-bind:class="{ 'form__label--filled' : name.length }" for="name">
                                Nachname
                                <sup title="Pflichtfeld">*</sup>
                            </label>
                            <input class="form__input" type="text" required="required" id="name" :value="name"  @input="updateUser($event, 'name')"/>
                        </div>
                    </div>
                    <div class="form__formrow">
                        <label class="form__label" v-bind:class="{ 'form__label--filled' : email.length }" for="email">E-Mail<sup title="Pflichtfeld">*</sup></label>
                        <input class="form__input" type="email" required="required" id="email" :value="email" @input="updateUser($event, 'email')" />
                    </div>
                    <div class="form__formrow">
                        <label class="form__label" v-bind:class="{ 'form__label--filled' : zip.length }" for="zip">PLZ<sup title="Pflichtfeld">*</sup></label>
                        <input class="form__input" type="text" required="required" id="zip" :value="zip" @input="updateUser($event, 'zip')" />
                    </div>
                    <button class="form__button" type="submit">
                        Speichern und weiter
                    </button>
                </div>
            </fieldset>
        </form>
    </div>
</template>

<script>
import config from '@/config';

export default {
    name: 'kgp-form',
    data() {
        return {};
    },
    computed: {
       firstname() {
           return this.$store.getters.user.firstname || '';
       },
       name() {
           return this.$store.getters.user.name || '';
       },
       email() {
           return this.$store.getters.user.email || '';
       },
       zip() {
           return this.$store.getters.user.zip || '';
       }
    },
    beforeCreate() {
        this.$store.dispatch('setStep', 1);
    },
    methods: {
        updateUser(e, type) {
            this.$store.dispatch('setUserKey', {
                type,
                val: e.target.value
            });
        },
        handleSubmit(e) {
            e.preventDefault();
            this.$store.dispatch('setUserKey', {
                type: 'password',
                val: config.password
            });
            this.$router.push('/scan');
        }
    }
};
</script>
<style lang="scss">
.waves {
    background: url('./waves.svg') center center no-repeat;
    height: 8px;
    width: 100%;
    border: none;
    line-height: 8px;
    background-size: contain;
    margin: 0;
    padding: 0;
}
.form {

  &__legend {

    color: #fff;
    text-align: center;
    font-family: 'Slabo 27px';
    font-size: 23px;
    border: none;
    padding: 0;
    margin: 0 4vw;
    background: rgba(3, 60, 106, 0.5);
    padding: 2px 5px;
  }
  &__description {
    padding-left: 10px;
    border-left: 5px solid rgba(255, 255, 255, 0.6);
    font-style: italic;
    font-size: 14px;
  }
  &__fieldset {
    border: none;
    margin: 0;
    padding: 0;
  }

  &__formrow {
    position: relative;
    padding: 2.5vh 0;
    &--wrap {
        display: flex;
        flex-wrap: nowrap;
    }
    &--half {
        width: 48%;
        margin-right: 4%;
        padding-bottom: 0;
        &:nth-child(2) {
            margin-right: 0;
        }
    }
  }
  &__label {
    color: #fff;
    font-family: 'Slabo 27px';
    position: absolute;
    left: 20px;
    top: 1.5rem;
    transition: all .2s ease-out;
    sup {
      color: #f76259;
    }
    &--filled {
        top: -11px;
        left: 0;
        padding: 2px 5px;
        /* text-shadow: 0 0 2px #ffffff; */
        color: #ffffff;
        text-transform: uppercase;
        font-size: 13px;
    }
  }
  &__input {
    height: 42px;
    width: calc(100% - 30px);
    border: none;
    color: #fff;
    border-bottom: 2px solid rgba(3, 60, 106, 0.55);
    font-size: 17px;
    padding: 0 15px;
    font-family: 'Slabo 27px';
    background: rgba(255, 255, 255, 0.23);
  }
  &__button {
    background: #f86259;
    color: #fff;
    font-family: 'Slabo 27px';
    font-size: 18px;
    border: none;
    text-decoration: none;
    border-bottom: 5px solid rgba(0,0,0,.17);
    padding: 1.7vh 5vw;
    margin-top: 2vh;
  }
}
</style>
