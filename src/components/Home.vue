<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm6 class="text-xs-center">
        <v-btn large router to="/meetups" class="info"> Explore Meetups </v-btn>
      </v-flex>
      <v-flex xs12 sm6 class="text-xs-center">
        <v-btn large router to="/meetup/new" class="info"> Organize Meetup </v-btn>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="mt-2">
      <v-flex xs12>
        <v-carousel>
          <v-carousel-item
            v-for="meetup in meetups"
            :src="meetup.imageUrl"
            :key="meetup.id">
            <div class="title">
              {{ meetup.title }}
            </div>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="mt-2">
      <v-flex xs12 class="text-xs-center">
        <p> Join our awesome meetups </p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      meetups: [
        {imageUrl: 'http://blog.splendia.com/wp-content/uploads/2016/06/times-square.jpg', id: 'kj432k435h', title: 'Meetup in New York'},
        {imageUrl: 'https://media.architecturaldigest.com/photos/5931758bf368f9234dedb534/master/pass/Paris_Personalities_GettyImages-546896176-2.jpg', id: 'esfsdfdsgf', title: 'Meetup in Paris'}
      ]
    }
  }
}
</script>

<style scoped>
  .title {
    position: absolute;
    bottom: 50px;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    font-size: 2em;
    padding: 20px;
  }
</style>
