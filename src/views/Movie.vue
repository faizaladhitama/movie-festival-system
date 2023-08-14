<template>
  <router-view></router-view>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-header pb-0">
            <div class="d-flex align-items-center">
              <p class="mb-0">Movie Form</p>
            </div>
          </div>
          <div class="card-body">
            <form role="form" @submit.prevent="submitForm" id="form">
              <argon-input
                type="hidden"
                name="id"
                value=""
              />
              <div class="row">
                <div class="col-md-12">
                  <label for="title" class="form-control-label"
                    >Title</label
                  >
                  <argon-input
                    type="text"
                    name="title"
                    value="Title"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <label for="description" class="form-control-label"
                    >Description</label
                  >
                  <argon-input
                    type="text"
                    name="description"
                    value="Description"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <label for="duration" class="form-control-label"
                    >Duration</label
                  >
                  <argon-input
                    type="text"
                    name="duration"
                    value="Duration"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <label for="artists" class="form-control-label"
                    >Artists</label
                  >
                  <argon-input
                    type="text"
                    name="artists"
                    value="Artists"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <label for="genres" class="form-control-label"
                    >Genres</label
                  >
                  <argon-input
                    type="text"
                    name="genres"
                    value="Genres"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <label for="file" class="form-control-label"
                    >File</label
                  >
                  <argon-input
                    name="file"
                    type="file"
                  />
                </div>
              </div>  
              <argon-input type="submit">
                Submit
              </argon-input>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ArgonInput from "@/components/ArgonInput.vue";

export default {
  name: "movies",
  data() {
    return {
      showMenu: false
    };
  },
  components: { ArgonInput},
  methods: {
    submitForm(e){
      let formData = new FormData(e.target);
      let file = formData.get('file');
      console.log(file);
      let data = {
        title: formData.get('title'),
        description: formData.get('description'),
        duration: formData.get('duration'),
        artists: formData.get('artists'),
        genres: formData.get('genres'),
        url: file.value
      }
      console.log(data);
      console.log(e.target);
      console.log(formData);
      return false;
    },
  },  
  mounted() {
    let params = this.$route.params;
    if(params.id == "" || params.id == undefined || params.id == null){
      //MODE Create
      this.$store.state.isCreate = true;
    }else{
      this.$store.state.isCreate = false;
    }
    console.log(params);
  },
};
</script>
  