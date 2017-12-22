import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loadedMeetups: [
      { imageUrl: 'http://blog.splendia.com/wp-content/uploads/2016/06/times-square.jpg',
        id: '1',
        title: 'Meetup in New York',
        date: '2017-07-17'},
      { imageUrl: 'https://media.architecturaldigest.com/photos/5931758bf368f9234dedb534/master/pass/Paris_Personalities_GettyImages-546896176-2.jpg',
        id: 'esfsdfdsgf',
        title: 'Meetup in Paris',
        date: '2017-07-19'}
    ],
    user: {
      id: '1',
      registerdMeetups: ['1']
    }
  },
  mutations: {
    createMeetup (state, payload) {
      state.loadedMeetups.push(payload)
    }
  },
  actions: {
    createMeetup ({commit}, payload) {
      const meetup = {
        title: payload.title,
        location: payload.location,
        imageUrl: payload.imageUrl,
        description: payload.description,
        date: payload.date
      }
      // reach out to firebase and store it
      commit('createMeetup', meetup)
    }
  },
  getters: {
    loadedMeetups (state) {
      return state.loadedMeetups.sort((meatupA, meetupB) => {
        return meatupA.date > meetupB.date
      })
    },
    featuredMeetups (state, getters) {
      return getters.loadedMeetups.slice(0, 5)
    },
    loadedMeetup (state) {
      return (meetupId) => {
        return state.loadedMeetups.find((meetup) => {
          return meetup.id === meetupId
        })
      }
    }
  }
})
