<template>
  <div id="record">
    <Navbar>

    </Navbar>
    <div class="section">
      <div class="container mb-5">
        <div class="file">
          <label class="file-label">
            <input class="file-input" type="file" name="file" @change="uploadFile($event)">
            <span class="file-cta">
              <span class="file-icon">
                <i class="fas fa-upload"></i>
              </span>
              <span class="file-label">
                Choose a file…
              </span>
            </span>
          </label>
        </div>
      </div>

      <div class="columns is-multiline">
        <div class="column is-2" v-for="record in records" :key="record.id">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img :src="makeImageUri(record.id)" alt="Placeholder image">
              </figure>
            </div>
            <div class="card-content">
              <p>{{ record.filename }}</p>
              <p>{{ makeImageUri(record.id) }}</p>
              <div>
                <button class="button is-danger" @click="deleteFile(record.id)">删除</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
import {apiDeleteRecord, apiRecordList, apiUploadFile, apiUploadText} from "@/request/api";
import Navbar from "@/components/Navbar";

export default {
  name: "Record",
  components: {
    Navbar
  },
  data: () => {
    return {
      text: "",
      records: [],
      file: null
    }
  },
  methods: {
    saveText: function() {
      apiUploadText(this.text).then(response => {
        if (response.code === 200) {
          this.text = "";
        }
      })
    },
    deleteRecord: function(id, index) {
      apiDeleteRecord(id).then(response => {
        if (response.code === 200) {
          this.records.splice(index, 1);
        }
      })
    },
    uploadFile: function(event) {
      let file = event.target.files[0];
      apiUploadFile("/records", file).then(response => {
        location.reload();
        if (response.code === 200) {
          location.reload();
        }
      })
    },
    deleteFile(id) {
      apiDeleteRecord(id).then(response => {
        location.reload();
        if (response.code === 200)
          location.reload();
      })
    },
    makeImageUri(id) {
      return "http://localhost:9999/records/" + id;
    }
  },
  mounted() {
    apiRecordList().then(response => {
      console.log(response);
      for (let i = 0; i < response.data.length; i++) {
        let created_at = new Date(response.data[i].created_at*1000)
        response.data[i].created_at = created_at.getFullYear() + "-" + created_at.getMonth() + "-" + created_at.getDay();
        this.records.push(response.data[i]);
      }
    })
  }
}
</script>

<style lang="stylus">

</style>