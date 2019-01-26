<template>
<div>
<div class="aircraft">
	<div class="aircraft-cost">
		COST: <span class="aircraft-cost-amount">{{aircraft.COST}}</span>
	</div>

	<div class="aircraft-name">
		<div class="aircraft-name-custom"></div>

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
					<div class="aircraft-specifications-stat-display-bar-inner" :style="{ width: (aircraft.SPECIFICATIONS.SPEED*10) + '%' }"></div>
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
				<div class="aircraft-specifications-stat-display-numerical">{{aircraft.PARTS.MAX}}</div>
			</div>
		</div>

		<div class="aircraft-specifications-stat">
			<div class="aircraft-specifications-stat-title">ARMS</div>
			<div class="aircraft-specifications-stat-display">
				<div class="aircraft-specifications-stat-display-numerical">{{aircraft.PARTS.MAX}}</div>
			</div>
		</div>

		<div class="aircraft-specifications-stat">
			<div class="aircraft-specifications-stat-title">MISC</div>
			<div class="aircraft-specifications-stat-display">
				<div class="aircraft-specifications-stat-display-numerical">{{aircraft.PARTS.MAX}}</div>
			</div>
		</div>

		<div class="aircraft-divider">[ WEAPONS AMMO ]</div>

		<div class="aircraft-specifications-statWeapon">
			<div class="aircraft-specifications-statWeapon-weapon" v-for="(weapon, index) in aircraft.WEAPONS">
					<div>{{ weapon.weapon }}</div> <div>{{ weapon.ammo }}</div>
			</div>
		</div>

	</div>

	<div class="aircraft-copy" @click="addCustom(aircraft.ID)">
		CREATE NEW SET >>
	</div>
</div>
</div>
</template>

<style lang="scss" scoped>
$text-blue: #B0DAFD;
$text-gold: #BDB37D;

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
					margin-top: 8px;
					width: 200px;
					height: 20px;
					background: #19244F;

					&-inner {
						height: 100%;
						background-color: $text-blue;
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
export default {
name: "DEFAULT",
props: ['aircraft'],
methods: {
	addCustom(id) {
		this.$store.dispatch("addCustom", id)
	}
}
}
</script>