<template>
	<splitpanes watch-slots id="pane" class="default-theme" style="height: 100%;" vertical>

		<!-- left -->
		<div class="list">
			<defaultView v-for="(aircraft, index) in $store.state.default" :key="index" :aircraft="aircraft" />
		</div>
		<!-- end left -->

		<!-- right -->
		<div class="list">
			<customView v-for="(aircraft, index) in $store.state.custom" :key="index" :aircraft="aircraft" />
		</div>
		<!-- end right -->
	</splitpanes>
</template>

<style lang="scss">
$text-blue: #B0DAFD;
$text-gold: #BDB37D; 

.splitpanes__pane {
	overflow-y: auto;
	background-color: #0D1225 !important;
}

.splitpanes__splitter {
	min-width: 20px !important;
}
</style>

<script>
import Splitpanes from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'
import defaultView from '@/components/default'
import customView from '@/components/custom'

export default {
	name: 'APP-VIEW-DESKTOP',
	components: {
		Splitpanes,
		defaultView,
		customView
	}
}
</script>