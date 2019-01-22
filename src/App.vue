<template>
<main>
	<splitpanes id="pane" class="default-theme" style="height: 100%;" vertical>
	  <div class="list" splitpanes-min="1">
	  	
	  	<div class="item">
	  		<h4>F-4E Phantom II</h4>
	  		<h5>COST: 0</h5>
	  		<div>
	  			<span>SPEED: 6.1</span>
	  			<span>MOBILITY: 2.0</span>
	  			<span>STABILITY: 2.0</span>
	  		</div>
	  		<div>
	  			<span>AIR-TO-AIR: 3.8</span>
	  			<span>AIR-TO-GROUND: 3.0</span>
	  			<span>DEFENSE: 1.0</span>
	  		</div>
	  	</div>

	  </div>
	  <div class="list" splitpanes-min="1">
	  	
	  </div>
	</splitpanes>
</main>
</template>

<style lang="scss">
html, body, main {
	position: relative;
	display: flex;
	flex-direction: row;
	padding: 0px;
	margin: 0px;
	width: 100%;
	height: 100%;
	overflow: none;

	h1, h2, h3, h4, h5, h6, p {
		padding: 0px;
		margin: 0px;
	}
}

.splitpanes__pane {
	overflow-y: auto;
}

.splitpanes__splitter {
	min-width: 20px !important;
	min-height: 40px !important;
}

.list {
	display: flex;
	flex-direction: column;

	.item {
		position: relative;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		min-width: 200px;
		box-sizing: border-box;
		padding: 20px 0px;
		border-bottom: 1px solid red;

		div {
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			justify-content: space-between;
			padding: 0px 10px;
			box-sizing: border-box;
			width: 100%;

			span {
				margin: 5px;
			}
		}
	}
}
</style>

<script>
import Splitpanes from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'

export default {
name: "APP",
mounted() {
	if(document.body.clientWidth <= "480"){
	}else{
	}
},
components: {
	Splitpanes
}
}
</script>