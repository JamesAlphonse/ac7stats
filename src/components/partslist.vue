<template>
<div>
<div class="partslist">
	<div class="partslist-part" v-for="(part, index) in $store.state.partslist" @mouseover="preview(part.MODIFIER, part.VALUE)">
		{{ part.PART }}<br/>
		{{ part.DESCRIPTION }}
	</div>
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
}
</style>

<script>
import {serverBus} from '@/main'

export default {
name: "PARTS-LIST",
methods: {
	preview(modifier, value) {
		serverBus.$emit('preview', {
			modifier: modifier,
			value: value
		})
	}
}
}
</script>