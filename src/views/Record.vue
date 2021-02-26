<template>
  <div id="record">
    <Navbar>

    </Navbar>
    <div class="section">
      <div class="container mb-5">
        <div class="control mb-2">
          <textarea v-model="text" class="textarea" placeholder="Textarea"/>
        </div>
        <div class="field is-grouped">
          <div class="control">
            <button class="button is-link" @click="saveText">保存</button>
          </div>
          <input @change="uploadFile($event)" type="file" name="content">
        </div>
      </div>
      <div class="container">

        <div class="card mb-5" v-for="(record, index) in records" :key="record.id">
          <div class="card-content">
            <div class="content">
              {{record.content}}
              <br>
              <time>{{record.created_at}}</time>
            </div>
          </div>
          <footer class="card-footer">
            <a href="#" class="card-footer-item">Save</a>
            <a href="#" class="card-footer-item">Edit</a>
            <a href="#" class="card-footer-item" @click="deleteRecord(record.id, index)">Delete</a>
          </footer>
        </div>

        <div class="card">
          <div class="card-content">
            <div class="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
              <a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
              <br>
              <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
            </div>
          </div>
          <footer class="card-footer">
            <a href="#" class="card-footer-item">Save</a>
            <a href="#" class="card-footer-item">Edit</a>
            <a href="#" class="card-footer-item">Delete</a>
          </footer>
        </div>
        <br/>

        <div class="card">
          <div class="card-content">
            <div class="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
              <a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
              <br>
              <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
            </div>
          </div>
          <footer class="card-footer">
            <a href="#" class="card-footer-item">Save</a>
            <a href="#" class="card-footer-item">Edit</a>
            <a href="#" class="card-footer-item">Delete</a>
          </footer>
        </div>
        <br/>

        <div class="card">
          <div class="card-content">
            <div class="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
              <a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
              <br>
              <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
            </div>
          </div>
          <footer class="card-footer">
            <a href="#" class="card-footer-item">Save</a>
            <a href="#" class="card-footer-item">Edit</a>
            <a href="#" class="card-footer-item">Delete</a>
          </footer>
        </div>
        <br/>

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
        if (response.code === 200) {
          console.log();
        }
      })
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