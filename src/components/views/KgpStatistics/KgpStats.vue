<template>
    <div class="step">
        <h2 class="headline headline--primary">
            <span class="headline__inner headline__inner--primary">
                Zahlen, Daten, Fakten
            </span>
        </h2>
        <div class="step__inner">

            <kgp-statistics></kgp-statistics>

        </div>
    </div>
</template>

<script>
import KgpStatistics from '@/components/shared/KgpStatistics/KgpStatistics'

export default {
    name: 'kgp-stats',
    components: {
        KgpStatistics
    },
    mixins:[handleError]
};
</script>
<style>
.stats-container {
    margin-bottom: 40px;
}
</style>
