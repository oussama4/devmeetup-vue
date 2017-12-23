import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loadedMeetups: [
      { imageUrl: 'http://blog.splendia.com/wp-content/uploads/2016/06/times-square.jpg',
        id: '1',
        title: 'Meetup in New York',
        date: '2017-07-17',
        location: 'New York',
        description: 'This is new york'},
      { imageUrl: 'https://media.architecturaldigest.com/photos/5931758bf368f9234dedb534/master/pass/Paris_Personalities_GettyImages-546896176-2.jpg',
        id: 'esfsdfdsgf',
        title: 'Meetup in Paris',
        date: '2017-07-19',
        location: 'Paris',
        description: 'Paris Paris'}
    ],
    user: null
  },
  mutations: {
    createMeetup (state, payload) {
      state.loadedMeetups.push(payload)
    },
    setUser (state, payload) {
      state.user = payload
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
    },
    signUserUp ({commit}, payload) {
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then(user => {
          const newUser = {
            id: user.uid,
            registerdMeetups: []
          }
          commit('setUser', newUser)
        })
        .catch(error => {
          console.log(error)
        })
    },
    signUserIn ({commit}, payload) {
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then(user => {
          const newUser = {
            id: user.uid,
            registerdMeetups: []
          }
          commit('setUser', newUser)
        })
        .catch(error => {
          console.log(error)
        })
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
    },
    user (state) {
      return state.user
    }
  }
})
