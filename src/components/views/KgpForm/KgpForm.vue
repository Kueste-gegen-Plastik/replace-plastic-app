<template>
    <div class="step step--1" id="step_1">
        <form class="form" name="userdataform" v-on:submit="handleSubmit($event)">
            <fieldset class="form__fieldset">
                <legend class="form__legend">
                    Persönliche Daten
                </legend>
                <div class="step__inner">
                    <hr class="waves">
                    <div class="form__description">
                        <p>
                            Wir benötigen deine persönlichen Angaben, damit wir den Herstellern und Anbietern im Konfliktfall belegen können, dass wir die Meldungen  nicht selbst erzeugt haben und dass unterschiedliche Personen das Feedback gesendet haben. Bevor wir in einem Konfliktfall deine Daten an einen Anbieter übermitteln, anonymisieren wir sie durch Abkürzung des Nachnamens. Eine  Weitergabe an sonstige Dritte erfolgt nicht.
                        </p>
                    </div>

                    <div class="form__formrow form__formrow--wrap" >
                        <div class="form__formrow form__formrow--half">
                            <label class="form__label" v-bind:class="{ 'form__label--filled' : firstname.length }" for="firstname">Vorname<sup title="Pflichtfeld">*</sup></label>
                            <input class="form__input" type="text" required="required" id="firstname" :value="firstname" @input="updateUser($event, 'firstname')">
                        </div>
                        <div class="form__formrow form__formrow--half">
                            <label class="form__label" v-bind:class="{ 'form__label--filled' : name.length }" for="name">
                                Nachname
                                <sup title="Pflichtfeld">*</sup>
                            </label>
                            <input class="form__input" type="text" required="required" id="name" :value="name"  @input="updateUser($event, 'name')">
                        </div>
                    </div>
                    <div class="form__formrow">
                        <label class="form__label" v-bind:class="{ 'form__label--filled' : zip.length }" for="zip">PLZ<sup title="Pflichtfeld">*</sup></label>
                        <input class="form__input" type="text" required="required" id="zip" :value="zip" @input="updateUser($event, 'zip')">
                    </div>
                    <button class="form__button" type="submit">
                        Speichern und weiter
                    </button>
                    <button v-if="isUserValid" v-on:click.prevent="resetUser" class="form__button form__button--delete" type="reset">
                        Daten löschen
                    </button>
                </div>
            </fieldset>
        </form>
    </div>
</template>

<script>

const isUserValid = (usr) => {
    let isValid = false;
    do {
        if(!usr.firstname || usr.firstname == '' ||  usr.firstname.length < 2) break;
        if(!usr.name || usr.name == '' ||  usr.name.length < 2)  break;
        if(!usr.zip || usr.zip == '' ||  (usr.zip + '').length < 4)  break;
        isValid = true;
    } while(false);
    return isValid;
}

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
       zip() {
           return this.$store.getters.user.zip || '';
       },
       isUserValid() {
           return this.$store.getters.isUserValid;
       }
    },
    beforeCreate() {
        this.$store.dispatch('setStep', 3);
    },
    methods: {
        updateUser(e, type) {
            this.$store.dispatch('setUserKey', {
                type,
                val: e.target.value
            });
        },
        resetUser() {
            this.$store.dispatch('removeUser');
            this.$store.dispatch('resetHistory');
        },
        handleSubmit(e) {
            e.preventDefault();

            this.$store.dispatch('setUserKey', {
                type: 'password',
                val: process.env.VUE_APP_API_PASSWORD
            });
            this.$store.dispatch('setUserKey', {
                type: 'username',
                val: process.env.VUE_APP_API_USERNAME
            })
            var storedUser = localStorage.getItem('kgp_user');
            var nextRoute = !storedUser || !isUserValid(JSON.parse(storedUser)) ? '/scan' : '/send';
            this.$router.push(nextRoute);
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
    &--dark {
        background-image: url('./waves_dark.svg');
    }
}
.form {
  &__legend {
    color: #fff;
    text-align: center;
    font-family: 'Slabo 27px';
    @include fluid-type(23px, 32px);
    border: none;
    padding: 0;
    margin: 0 4vw;
    background: rgba(3, 60, 106, 0.5);
    padding: 2px 5px;
    &--dark {
        color: rgb(3, 60, 106);
        background: transparent;
        @include fluid-type(30px, 35px);
    }
  }
    &__inline {
        display: inline-block;
        margin-left: 10px;
    }
    &__hint {
        display: block;
        @include fluid-type(12px, 14px);
        padding: 3px;
        background: #fff;
        font-style: italic;
        color: #033c6a;
        transition: all .2s ease-out;
        &--filled {
            opacity: .5;
        }
    }
    &__description {
        padding-left: 10px;
        border-left: 5px solid rgba(255, 255, 255, 0.6);
        font-style: italic;
        @include fluid-type(14px, 19px);
    }
  &__fieldset {
    border: none;
    margin: 0;
    padding: 0;
  }

  &__formrow {
    position: relative;
    padding: 2vh 0;
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
    @include fluid-type(17px, 23px);
    sup {
      color: #f76259;
    }
    &--filled {
        top: -11px;
        left: 0;
        padding: 2px 5px;
        color: #ffffff;
        text-transform: uppercase;
        @include fluid-type(13px, 17px);
    }
    &--dark {
        color: rgb(3, 60, 106);
    }
  }
  &__input {
    height: 2.2em;
    width: calc(100% - 30px);
    border: none;
    color: #fff;
    border-bottom: 2px solid rgba(3, 60, 106, 0.55);
    @include fluid-type(17px, 23px);
    padding: 0 15px;
    font-family: 'Slabo 27px';
    background: rgba(255, 255, 255, 0.23);
    &--dark {
        background: #fff;
        color: rgb(3, 60, 106);
    }
    &--textarea {
        height: 4.4em;
    }
  }
  &__button {
    background: #f86259;
    color: #fff;
    font-family: 'Slabo 27px';
    cursor: pointer;
    @include fluid-type(18px, 25px);
    border: none;
    text-decoration: none;
    border-bottom: 5px solid rgba(0,0,0,.17);
    padding: 1.7vh 4vw;
    margin-top: 2vh;
    position: relative;
    transform: translateY(0);
    transition: all .2s ease-in;
    &:hover {
        background: darken( #f86259, 10);
        transform: translateY(-2px);
    }
    &--error {
        background: #fff;
        color: #033c6a;
        &:hover {
            background: darken( #fff, 10);
            transform: translateY(-2px);
        }
    }
    &--error-outline {
        background: transparent;
        color: #fff;
        border: 1px solid #fff;
        border-bottom: 5px solid rgba(255,255,255,.17);
    }
    &--delete {
        background: #ccc;
        &:hover {
            background: darken( #ccc, 10);
            transform: translateY(-2px);
        }
    }
  }
}
</style>
