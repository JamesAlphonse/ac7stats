<template>
<main>
	<appViewDesktop v-if="isDesktop" />
	<appViewMobile v-if="!isDesktop" />
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

	@import url('https://fonts.googleapis.com/css?family=News+Cycle:400,700');
	font-family: 'News Cycle', sans-serif;
}
</style>

<script>
import appViewDesktop from '@/components/appViewDesktop'
import appViewMobile from '@/components/appViewMobile'

export default {
name: "APP",
components: {
	appViewDesktop,
	appViewMobile
},
mounted() {
	this.resize();
	window.addEventListener('resize', () => { this.resize(); })
},
methods: {
	resize() {
		if(document.body.clientWidth <= "480") this.isDesktop = false
		else this.isDesktop = true
	}
},
data() {
	return {
		isDesktop: true
	}
}
}
</script>