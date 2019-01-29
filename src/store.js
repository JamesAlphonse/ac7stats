import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  	default: [

			{
				ID: 1,
				AIRCRAFT: "F-4E Phantom II",
				COST: 1500,
				SPECIFICATIONS: {
					SPEED: 6.1,
					MOBILITY: 2.0,
					STABILITY: 2.0,
					AIR_TO_AIR: 3.8,
					AIR_TO_GROUND: 3.0,
					DEFENSE: 1.0
				},
				PARTS: {
					MAX: 42
				},
				WEAPONS: [
					{weapon: "GUN", ammo: '---'},
					{weapon: "UGB", ammo: 18},
					{weapon: "MSL", ammo: 66},
					{weapon: "LAGM", ammo: 10},
					{weapon: "FLR", ammo: 6},
					{weapon: "SASM", ammo: 12}
				]
			}

		],

		partslist: [
			{
				ID: 1,
				PART: 'Light Blisk Level 1',
				DESCRIPTION: 'This part enhances the aircrafts acceleration ability.',
				MODIFIER: 'SPEED',
				VALUE: 1.5,
        PART_TYPE: 'BODY',
        PART_SPACE: 3
			}
		],

		custom: []

  },
  mutations: {
  	addCustom : (state, payload) => {
  		state.custom.push(payload)
  	},
  	removeCustom : (state, payload) => {
  		state.custom.splice(payload, 1)
  	},
  	setCustomSetName : (state, payload) => {
  		state.custom[payload.index].CUSTOM_NAME = payload.name
  	}
  },
  actions: {
  	addCustom : ({commit, getters}, payload) => {
  		let newSet = {...getters.getDefaultSetById(payload)}
  		newSet.CUSTOM_NAME = ""
  		newSet.ID = getters.getNewCustomSetId
  		newSet.UPDATED_COST = {...newSet.COST}
  		newSet.SPECIFICATIONS.UPDATED_SPEED = {...newSet.SPEED}
  		newSet.SPECIFICATIONS.UPDATED_MOBILITY = {...newSet.MOBILITY}
  		newSet.SPECIFICATIONS.UPDATED_STABILITY = {...newSet.STABILITY}
  		newSet.SPECIFICATIONS.UPDATED_AIR_TO_AIR = {...newSet.AIR_TO_AIR}
  		newSet.SPECIFICATIONS.UPDATED_AIR_TO_GROUND = {...newSet.AIR_TO_GROUND}
  		newSet.SPECIFICATIONS.UPDATED_DEFENSE = {...newSet.DEFENSE}
      newSet.PARTS.BODY = 0
      newSet.PARTS.ARMS = 0
      newSet.PARTS.MISC = 0
  		commit('addCustom', newSet)
  	},
  	removeCustom : ({commit, getters}, payload) => {
  		commit('removeCustom', getters.getCustomSetIndexById(payload))
  	},
  	setCustomSetName :  ({commit, getters}, payload) => {
  		commit('setCustomSetName', {
  			index: getters.getCustomSetIndexById(payload.id),
  			name: payload.name
  		})
  	}
  },
  getters: {
  	getDefaultSetById : state => id => {
  		return state.default.find( item => id === item.ID )
  	},
  	getCustomSetIndexById : state => id => {
  		return state.custom.findIndex( item => id === item.ID )
  	},
  	getNewCustomSetId : state => {
  		let id
  		if(state.custom.length == 0){ id = 1 }else{ id = state.custom[state.custom.length-1].ID + 1}
  		return id
  	}
  }
})
