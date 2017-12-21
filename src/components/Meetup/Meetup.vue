<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card>
          <v-card-title>
            <h5 class="primary--text"> {{ meetup.title }} </h5>
          </v-card-title>
          <v-card-media
            :src="meetup.imageUrl"
            height="400px">
          </v-card-media>
          <v-card-text>
            <div class="info--text"> {{ meetup.date }} - where it takes place </div>
            <div> Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Vero voluptate fugit minus accusantium facere deleniti nesciunt,
               dicta nemo similique maxime accusamus id! Nostrum consequuntur
               ratione totam repellat. Culpa, nisi molestias.
            </div>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn dark color="deep-orange darken-3"> Register </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: ['id'],
  computed: {
    meetup () {
      return this.$store.getters.loadedMeetup(this.id)
    }
  }
}
</script>
