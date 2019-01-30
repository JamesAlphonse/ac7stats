<template>
<div class="partslist">
	<div class="partslist-part" v-for="(part, index) in $store.state.partslist" @mouseover="preview(part.ID)" @mouseout="unpreview(part.ID)" @click="toggle($event, part.ID)">
		{{ part.PART }}<br/>
		{{ part.DESCRIPTION }}
	</div>
</div>
</template>

<style lang="scss" scoped>
$text-blue: #B0DAFD;
$text-gold: #BDB37D;

.partslist {
	display: flex;
	flex-direction: column;
	align-items: center;

	&-part {
		box-sizing: border-box;
		width: 390px;
		padding: 5px;
		border: 1px solid $text-blue;
		margin-top: -1px;
		cursor: pointer;
	}

	&-part:first-child {
		margin-top: 0px;
	}

	&-part:hover {
		color: $text-gold;
		border: 1px solid $text-gold;
	}

	.selected {
		color: $text-gold;
		border: 1px solid $text-gold;
	}
}
</style>

<script>
import {serverBus} from '@/main'

export default {
name: "PARTS-LIST",
props: ['aircraftID'],
methods: {
	preview(partID) {
		serverBus.$emit('previewPart', {
			AIRCRAFTID: this.aircraftID,
			PARTID: partID
		})
	},
	unpreview(partID) {
		serverBus.$emit('unpreview', {
			AIRCRAFTID: this.aircraftID,
			PARTID: partID
		})
	},
	toggle(e, partID) {
		if( e.target.classList.contains('selected') ){
			e.target.classList.remove('selected')
		}
		else{
			e.target.classList.add('selected')
			/*serverBus.$emit('addPart', {

			})*/
		}
	}
}
}
</script>