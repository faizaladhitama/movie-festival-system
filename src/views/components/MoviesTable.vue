<template>
    <div class="card">
      <div class="card-header pb-0">
        <h6>Movies table</h6>
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
              <tr>
                <td class="align-middle text-center">
                  1
                </td>
                <td class="text-xs align-middle text-center mb-0">
                  Laskar Pelangi
                </td>
                <td class="text-xs align-middle text-center mb-0">
                  Kisah anak SD
                </td>
                <td class="text-xs align-middle text-center mb-0">
                  02:00:00
                </td>
                <td class="text-xs align-middle text-center mb-0">
                  Artis 1
                </td>
                <td class="text-xs align-middle text-center mb-0">
                  Thriller
                </td>
                <td class="text-xs align-middle text-center mb-0">
                  https://www.youtube.com/
                </td>
                <td class="align-middle">
                  <a class="btn btn-link text-danger text-gradient px-3 mb-0" href="javascript:;">
                    <i class="far fa-trash-alt me-2" aria-hidden="true"></i>Delete
                  </a>
                </td>
                <td class="align-middle">
                  <a class="btn btn-link text-dark px-3 mb-0" href="javascript:;">
                    <i class="fas fa-pencil-alt text-dark me-2" aria-hidden="true"></i>Edit
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "movies-table",
  };
  </script>
  