<template>
    <div class="step__inner">
        <kgp-statistics></kgp-statistics>
    </div>
</template>

<script>
import Api from '@/api'
import KgpStatistics from '@/components/shared/KgpStatistics/KgpStatistics'

export default {
    name: 'kgp-stats',
    components: {
        KgpStatistics
    }
};
</script>
<style>
.stats-container {
    margin-bottom: 40px;
}
</style>
