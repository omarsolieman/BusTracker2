<template>
  <GoogleMap api-key="AIzaSyCvdyny7hLxaW0WGUD49ds1bPDLvQZFFtY" style="width: 100%; height: 800px; margin-top: 24px" :center="center" :zoom="15">
    <Marker :options="{ position: center }" />
  </GoogleMap>
</template>

<script>
import { defineComponent } from "vue";
import { GoogleMap, Marker } from "vue3-google-map";

export default defineComponent({
  components: { GoogleMap, Marker },
  setup() {
    const center = { lat: 40.689247, lng: -74.044502 };

    return { center };
  },
});
</script>