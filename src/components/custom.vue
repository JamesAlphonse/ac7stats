<template>
<div>
<div class="aircraft">
	<div class="aircraft-cost">
		COST: <span class="aircraft-cost-amount">{{aircraft.COST}}</span>
	</div>

	<div class="aircraft-name">
		<div class="aircraft-name-custom">
			<form autocomplete="off">
				<input :id="aircraft.ID" class="aircraft-name-custom-input" type="text" name="aircraft-name-custom" placeholder="Custom Set Name" @keyup="editCustomName" :value="aircraft.CUSTOM_NAME" />

			</form>
		</div>

		<div class="aircraft-name-default">
			{{aircraft.AIRCRAFT}}
		</div>
	</div>

	<div class="aircraft-specifications">
		<div>[ AIRCRAFT SPECIFICATIONS ]</div>

		<div class="aircraft-specifications-stat">
			<div class="aircraft-specifications-stat-title">SPEED</div>

			<div class="aircraft-specifications-stat-display">
				<div class="aircraft-specifications-stat-display-bar">
					<div class="aircraft-specifications-stat-display-bar-inner" :id="'SPEED_' + aircraft.ID" :style="{ width: (aircraft.SPECIFICATIONS.SPEED*10) + '%' }"></div>
					<div class="aircraft-specifications-stat-display-bar-preview" :id="'PREVIEW_SPEED_' + aircraft.ID"></div>
					<div class="aircraft-specifications-stat-display-bar-updated" :id="'UPDATED_SPEED_' + aircraft.ID"></div>
				</div>
				<div class="aircraft-specifications-stat-display-numerical">{{aircraft.SPECIFICATIONS.SPEED.toFixed(1)}}</div>
			</div>
		</div>

		<div class="aircraft-specifications-stat">
			<div class="aircraft-specifications-stat-title">MOBILITY</div>

			<div class="aircraft-specifications-stat-display">
				<div class="aircraft-specifications-stat-display-bar">
					<div class="aircraft-specifications-stat-display-bar-inner" :style="{ width: (aircraft.SPECIFICATIONS.MOBILITY*10) + '%' }"></div>
				</div>
				<div class="aircraft-specifications-stat-display-numerical">{{aircraft.SPECIFICATIONS.MOBILITY.toFixed(1)}}</div>
			</div>
		</div>

		<div class="aircraft-specifications-stat">
			<div class="aircraft-specifications-stat-title">STABILITY</div>

			<div class="aircraft-specifications-stat-display">
				<div class="aircraft-specifications-stat-display-bar">
					<div class="aircraft-specifications-stat-display-bar-inner" :style="{ width: (aircraft.SPECIFICATIONS.STABILITY*10) + '%' }"></div>
				</div>
				<div class="aircraft-specifications-stat-display-numerical">{{aircraft.SPECIFICATIONS.STABILITY.toFixed(1)}}</div>
			</div>
		</div>

		<div class="aircraft-specifications-stat">
			<div class="aircraft-specifications-stat-title">AIR-TO-AIR</div>

			<div class="aircraft-specifications-stat-display">
				<div class="aircraft-specifications-stat-display-bar">
					<div class="aircraft-specifications-stat-display-bar-inner" :style="{ width: (aircraft.SPECIFICATIONS.AIR_TO_AIR*10) + '%' }"></div>
				</div>
				<div class="aircraft-specifications-stat-display-numerical">{{aircraft.SPECIFICATIONS.AIR_TO_AIR.toFixed(1)}}</div>
			</div>
		</div>

		<div class="aircraft-specifications-stat">
			<div class="aircraft-specifications-stat-title">AIR-TO-GROUND</div>

			<div class="aircraft-specifications-stat-display">
				<div class="aircraft-specifications-stat-display-bar">
					<div class="aircraft-specifications-stat-display-bar-inner" :style="{ width: (aircraft.SPECIFICATIONS.AIR_TO_GROUND*10) + '%' }"></div>
				</div>
				<div class="aircraft-specifications-stat-display-numerical">{{aircraft.SPECIFICATIONS.AIR_TO_GROUND.toFixed(1)}}</div>
			</div>
		</div>

		<div class="aircraft-specifications-stat">
			<div class="aircraft-specifications-stat-title">DEFENSE</div>

			<div class="aircraft-specifications-stat-display">
				<div class="aircraft-specifications-stat-display-bar">
					<div class="aircraft-specifications-stat-display-bar-inner" :style="{ width: (aircraft.SPECIFICATIONS.DEFENSE*10) + '%' }"></div>
				</div>
				<div class="aircraft-specifications-stat-display-numerical">{{aircraft.SPECIFICATIONS.DEFENSE.toFixed(1)}}</div>
			</div>
		</div>

		<div class="aircraft-divider">[ PARTS ]</div>

		<div class="aircraft-specifications-stat">
			<div class="aircraft-specifications-stat-title">BODY</div>
			<div class="aircraft-specifications-stat-display">
				<div class="aircraft-specifications-stat-display-numerical">00/{{aircraft.PARTS.MAX}}</div>
			</div>
		</div>

		<div class="aircraft-specifications-stat">
			<div class="aircraft-specifications-stat-title">ARMS</div>
			<div class="aircraft-specifications-stat-display">
				<div class="aircraft-specifications-stat-display-numerical">00/{{aircraft.PARTS.MAX}}</div>
			</div>
		</div>

		<div class="aircraft-specifications-stat">
			<div class="aircraft-specifications-stat-title">MISC</div>
			<div class="aircraft-specifications-stat-display">
				<div class="aircraft-specifications-stat-display-numerical">00/{{aircraft.PARTS.MAX}}</div>
			</div>
		</div>
		<!-- v-if="partslist == 'partslist_' + aircraft.ID" -->
		<div class="aircraft-partslist" :id="'partslist_' + aircraft.ID" >
			<partslist :aircraftID="aircraft.ID" />
		</div>

		<div class="aircraft-copy" @click="toggleParts('partslist_' + aircraft.ID, $event)">SHOW PARTS LIST</div>

		<div class="aircraft-divider">[ WEAPONS AMMO ]</div>

		<div class="aircraft-specifications-statWeapon">
			<div class="aircraft-specifications-statWeapon-weapon" v-for="(weapon, index) in aircraft.WEAPONS">
					<div>{{ weapon.weapon }}</div> <div>{{ weapon.ammo }}</div>
			</div>
		</div>

	</div>

	<div class="aircraft-copy" @click="removeCustom(aircraft.ID)">
		!! DELETE SET !!
	</div>
</div>
</div>
</template>

<style lang="scss" scoped>
$text-blue: #B0DAFD;
$text-gold: #BDB37D;

@keyframes blink {
	50% {
		opacity: 0;
	}
}

.aircraft {
	display: flex;
	flex-direction: column;
	box-sizing: border-box;
	padding: 10px;
	width: 100%;
	min-width: 400px;
	min-height: 635px;
	border-bottom: 1px solid grey;
	color: $text-blue;

	&-cost {
		align-self: flex-end;
		font-size: 1.3em;

		&-amount {
			color: $text-gold;
		}
	}

	&-name {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		font-size: 2em;

		&-custom {
			display: flex;
			align-items: center;

			&-input {
				border: 1px solid transparent;
				outline: 0;
				background: #0D1225;
				width: 188px;
				height: 30px;
				box-sizing: border-box;
				padding: 5px;
				color: $text-blue
			}

			&-input:hover {
				border: 1px solid $text-gold;
			}

			&-input:focus {
				border: 1px solid $text-gold;
			}
		}
	}

	&-specifications {
		display: flex;
		flex-direction: column;

		&-stat {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			font-size: 1.3em;

			&-title {
			}

			&-display {
				display: flex;
				flex-direction: row;

				&-bar {
					position: relative;
					margin-top: 8px;
					width: 200px;
					height: 20px;
					background: #19244F;

					&-inner {
						position: absolute;
						height: 100%;
						width: 0;
						background-color: $text-blue;
						z-index: 1000;
						transition: width 0.2s;
					}

					&-preview {
						position: absolute;
						height: 100%;
						width: 0;
						background-color: $text-gold;
						z-index: 900;
						animation: blink 1.2s ease-in infinite;
						transition: width 0.2s;
					}

					&-updated {
						position: absolute;
						height: 100%;
						width: 0;
						background-color: #63A878;
						z-index: 800;
						transition: width 0.2s;
					}
				}

				&-numerical {
					display: flex;
					justify-content: flex-end;
					width: 30px;
					margin-left: 10px;
				}
			}
		}

		&-statWeapon {
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;

			&-weapon {
				display: flex;
				width: 30%;
				margin-right: 20%;
				justify-content: space-between;
			}

			&-weapon:nth-child(even) {
				margin-right: 0;
				margin-left: 20%;
			}
		}
	}

	&-copy {
		display: flex;
		justify-content: center;
		align-items: center;
		align-self: center;
		margin-top: 10px;
		width: 300px;
		height: 40px;
		border-top: 1px solid $text-blue;
		font-size: 0.8em;
		font-weight: 700;
		cursor: pointer;
	}

	&-copy:hover {
		background: $text-gold;
		color: white;
	}

	&-divider {
		margin-top: 10px;
	}
}
</style>

<script>
import {serverBus} from '@/main'
import partslist from '@/components/partslist'

export default {
name: "CUSTOM",
props: ['aircraft'],
components: {
	partslist
},
mounted() {
	serverBus.$on('preview', payload => {
		if(payload.AIRCRAFTID === this.aircraft.ID)
			this.preview(payload)
	})

	serverBus.$on('unpreview', payload => {
		if(payload.AIRCRAFTID === this.aircraft.ID)
			this.unpreview(payload)
	})
},
methods: {
	removeCustom(id) {
		this.$store.dispatch('removeCustom', id)
	},
	editCustomName(e) {
		this.$store.dispatch('setCustomSetName', {
			id: parseInt(e.target.id),
			name: e.target.value
		})
	},
	toggleParts(listID, e) {
		if(e.target.innerText === 'SHOW PARTS LIST'){
			this.partslist = listID
			e.target.innerText = "HIDE PARTS LIST"
		} else {
			this.partslist = null
			e.target.innerText = "SHOW PARTS LIST"
		}
	},
	preview(payload) {
		let defaultStat = document.getElementById(payload.MODIFIER + '_' + payload.AIRCRAFTID)
		let previewStat = document.getElementById('PREVIEW_' + payload.MODIFIER + '_' + payload.AIRCRAFTID)
		let previewAmount = parseInt(defaultStat.style.width) + (payload.VALUE*10) + '%'
		previewStat.style.width = previewAmount
	},
	unpreview(payload) {
		document.getElementById('PREVIEW_' + payload.MODIFIER + '_' + payload.AIRCRAFTID).style.width = 0
	}
},
data() {
return {
	partslist: null	
}
}
}
</script>