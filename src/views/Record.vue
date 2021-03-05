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

      <div class="columns is-multiline">
        <div class="column is-2" v-for="record in records" :key="record.id">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img :src="makeImageUri(record.id)" alt="Placeholder image">
              </figure>
            </div>
            <div class="card-content">

            </div>
          </div>
        </div>

        <div class="column is-2">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img src="https://lqzhgood.github.io/bulma-docs-cn/images/placeholders/1280x960.png" alt="Placeholder image">
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img src="https://lqzhgood.github.io/bulma-docs-cn/images/placeholders/96x96.png" alt="Placeholder image">
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4">John Smith</p>
                  <p class="subtitle is-6">@johnsmith</p>
                </div>
              </div>

              <div class="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                <a href="#">#css</a> <a href="#">#responsive</a>
                <br>
                <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
              </div>
            </div>
          </div>
        </div>

        <div class="column is-2">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img src="https://lqzhgood.github.io/bulma-docs-cn/images/placeholders/1280x960.png" alt="Placeholder image">
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img src="https://lqzhgood.github.io/bulma-docs-cn/images/placeholders/96x96.png" alt="Placeholder image">
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4">John Smith</p>
                  <p class="subtitle is-6">@johnsmith</p>
                </div>
              </div>

              <div class="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                <a href="#">#css</a> <a href="#">#responsive</a>
                <br>
                <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
              </div>
            </div>
          </div>
        </div>

        <div class="column is-2">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img src="https://lqzhgood.github.io/bulma-docs-cn/images/placeholders/1280x960.png" alt="Placeholder image">
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img src="https://lqzhgood.github.io/bulma-docs-cn/images/placeholders/96x96.png" alt="Placeholder image">
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4">John Smith</p>
                  <p class="subtitle is-6">@johnsmith</p>
                </div>
              </div>

              <div class="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                <a href="#">#css</a> <a href="#">#responsive</a>
                <br>
                <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
              </div>
            </div>
          </div>
        </div>

        <div class="column is-2">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img src="https://lqzhgood.github.io/bulma-docs-cn/images/placeholders/1280x960.png" alt="Placeholder image">
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img src="https://lqzhgood.github.io/bulma-docs-cn/images/placeholders/96x96.png" alt="Placeholder image">
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4">John Smith</p>
                  <p class="subtitle is-6">@johnsmith</p>
                </div>
              </div>

              <div class="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                <a href="#">#css</a> <a href="#">#responsive</a>
                <br>
                <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
              </div>
            </div>
          </div>
        </div>

        <div class="column is-2">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img src="https://lqzhgood.github.io/bulma-docs-cn/images/placeholders/1280x960.png" alt="Placeholder image">
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img src="https://lqzhgood.github.io/bulma-docs-cn/images/placeholders/96x96.png" alt="Placeholder image">
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4">John Smith</p>
                  <p class="subtitle is-6">@johnsmith</p>
                </div>
              </div>

              <div class="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                <a href="#">#css</a> <a href="#">#responsive</a>
                <br>
                <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-2">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img src="https://lqzhgood.github.io/bulma-docs-cn/images/placeholders/1280x960.png" alt="Placeholder image">
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img src="https://lqzhgood.github.io/bulma-docs-cn/images/placeholders/96x96.png" alt="Placeholder image">
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4">John Smith</p>
                  <p class="subtitle is-6">@johnsmith</p>
                </div>
              </div>

              <div class="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                <a href="#">#css</a> <a href="#">#responsive</a>
                <br>
                <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
              </div>
            </div>
          </div>
        </div>

        <div class="column is-2">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img src="https://lqzhgood.github.io/bulma-docs-cn/images/placeholders/1280x960.png" alt="Placeholder image">
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img src="https://lqzhgood.github.io/bulma-docs-cn/images/placeholders/96x96.png" alt="Placeholder image">
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4">John Smith</p>
                  <p class="subtitle is-6">@johnsmith</p>
                </div>
              </div>

              <div class="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                <a href="#">#css</a> <a href="#">#responsive</a>
                <br>
                <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
              </div>
            </div>
          </div>
        </div>

        <div class="column is-2">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img src="https://lqzhgood.github.io/bulma-docs-cn/images/placeholders/1280x960.png" alt="Placeholder image">
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img src="https://lqzhgood.github.io/bulma-docs-cn/images/placeholders/96x96.png" alt="Placeholder image">
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4">John Smith</p>
                  <p class="subtitle is-6">@johnsmith</p>
                </div>
              </div>

              <div class="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                <a href="#">#css</a> <a href="#">#responsive</a>
                <br>
                <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
              </div>
            </div>
          </div>
        </div>

        <div class="column is-2">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img src="https://lqzhgood.github.io/bulma-docs-cn/images/placeholders/1280x960.png" alt="Placeholder image">
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img src="https://lqzhgood.github.io/bulma-docs-cn/images/placeholders/96x96.png" alt="Placeholder image">
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4">John Smith</p>
                  <p class="subtitle is-6">@johnsmith</p>
                </div>
              </div>

              <div class="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                <a href="#">#css</a> <a href="#">#responsive</a>
                <br>
                <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
              </div>
            </div>
          </div>
        </div>

        <div class="column is-2">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img src="https://lqzhgood.github.io/bulma-docs-cn/images/placeholders/1280x960.png" alt="Placeholder image">
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img src="https://lqzhgood.github.io/bulma-docs-cn/images/placeholders/96x96.png" alt="Placeholder image">
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4">John Smith</p>
                  <p class="subtitle is-6">@johnsmith</p>
                </div>
              </div>

              <div class="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                <a href="#">#css</a> <a href="#">#responsive</a>
                <br>
                <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
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
        if (response.code === 200) {
          console.log();
        }
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