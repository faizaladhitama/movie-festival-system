<template>
    <div class="card">
      <div class="card-header pb-0 p-3">
        <div class="row">
          <div class="col-6 d-flex align-items-center">
            <h6 class="mb-0">Movies Table</h6>
          </div>
          <div class="col-6 text-end">
            <a href="/movie/form">
              <argon-button color="dark" variant="gradient">
                <i class="fas fa-plus me-2"></i>
                  Add New Movies
              </argon-button>
            </a>
          </div>
        </div>
      </div>
      <div class="card-body px-0 pt-0 pb-2">
        <div class="table-responsive p-0">
          <table class="table table-fixed align-items-center mb-0">
            <thead>
              <tr>
                <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">No</th>
                <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Title</th>
                <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Description</th>
                <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Duration</th>
                <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Artists</th>
                <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Genres</th>
                <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Watch URL</th>
                <th class="text-secondary opacity-7"></th>
                <th class="text-secondary opacity-7"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="movie in movies" :key="movie.id">
                <td class="align-middle text-center">
                  {{ movie.id }}
                </td>
                <td class="text-xs align-middle text-center mb-0">
                  {{ movie.title }}
                </td>
                <td class="text-xs align-middle text-center mb-0">
                  {{ movie.description }}
                </td>
                <td class="text-xs align-middle text-center mb-0">
                  {{ movie.duration }}
                </td>
                <td class="text-xs align-middle text-center mb-0">
                  <div v-for="movies_artists in movie.movies_artists" :key="movies_artists.id">
                    {{ movies_artists.artists.name }}
                  </div>
                </td>
                <td class="text-xs align-middle text-center mb-0">
                  <div v-for="movies_genres in movie.movies_genres" :key="movies_genres.id">
                    {{ movies_genres.genres.name }}
                  </div>
                </td>
                <td class="text-xs align-middle text-center mb-0">
                  <a v-bind:href="movie.watch_url">{{ movie.watch_url }}</a>
                </td>
                <td class="align-middle" @click="deleteBtn(movie.id)">
                  <a class="btn btn-link text-danger text-gradient px-3 mb-0" >
                    <i class="far fa-trash-alt me-2" aria-hidden="true"></i>Delete
                  </a>
                </td>
                <td class="align-middle"  @click="editBtn(movie.id)">
                  <a class="btn btn-link text-dark px-3 mb-0">
                    <i class="fas fa-pencil-alt text-dark me-2" aria-hidden="true"></i>Edit
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          </div>
            <Page
              ref="pageRef"
              v-model="page.number"
              language="en"
              :total-row="page.totalRow"
              @change="paginationChange"
              :info="false"
              :first="true"
              :last="true"
              :display-all="true"
              v-slot="{ pageNumber}"
              >
              <div>
                <div>Current: {{pageNumber == 0 ? 1 : pageNumber}} / {{ Math.ceil((page.totalRow == 0 ? 1 : page.totalRow)/page.size) }}</div>
              </div>
            </Page>
        </div>
    </div>
  </template>
  
  <script>
  import ArgonButton from "@/components/ArgonButton.vue";
  import { Page } from 'v-page'
  import { supabase } from '../../lib/supabaseClient.js'

  export default {
    name: "movies-table",
    data() {
      return {
        page: {
          number: 1,
          totalRow: 20,
          size: 10,
          range: {
            from: 0,
            to: 9
          }
        },
        movies: []
      };
    },
    components: {
      ArgonButton,
      Page
    },
    methods: {
      deleteBtn(id){
        console.log("delete");
        console.log(id);
      },
      editBtn(id){
        console.log("edit");
        console.log(id);
        this.$router.push(`/movie/${id}`)
      },
      async paginationChange(data){
        this.page.number = data.pageNumber;
        this.page.size = data.pageSize;
        this.page.range.from = data.pageSize * (data.pageNumber-1);
        this.page.range.to = (data.pageSize * data.pageNumber)-1;

        await this.getMovies();
      },
      async getMovies(){
        const { data, count, error } = await supabase
          .from('movies')
          .select(`*,movies_artists(artists(id, name)),movies_genres(genres(id, name))`, { count: 'exact'})
          .range(this.page.range.from, this.page.range.to)
        if(error){
          console.error(error)
        }else{
          console.log(data)
          console.log(count)
          this.movies = data
          this.page.totalRow = count;
        }
      }
    },
    async mounted() {
      await this.getMovies();
    },
  };
  </script>
  