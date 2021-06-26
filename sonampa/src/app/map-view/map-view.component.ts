import {Component, OnInit, ViewChild} from '@angular/core';
import {GoogleMap, MapInfoWindow, MapMarker} from '@angular/google-maps';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements OnInit {
  @ViewChild(GoogleMap, {static: false}) map: GoogleMap;
  @ViewChild(MapInfoWindow, {static: false}) info: MapInfoWindow;

  zoom = 9;
  center: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    zoomControl: true,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    mapTypeId: 'hybrid',
    maxZoom: 15,
    minZoom: 8,
  };
  markers: Marker[] = [
    {
      position: {
        lat: 27.5142,
        lng: 90.4336
      },
      label: {
        text: 'Thimphu',
        color: 'red'
      },
      info: 'A man died',
      title: 'Hello',
      options: {
        animation: google.maps.Animation.BOUNCE
      }
    },
    {
      position: {
        lat: 27.6142,
        lng: 90.3336
      },
      label: {
        text: 'Gasa',
        color: 'green'
      },
      info: 'A man killed a man',
      title: 'lingling',
    }
  ];
  infoContent = '';

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition(() => {
      this.center = {
        lat: 27.5314,
        lng: 90.4359
      };
    });
    this.addMarker(this.markers);
  }

  zoomIn(): void {
    if (this.zoom < this.options.maxZoom) {
      this.zoom++;
    }
  }

  zoomOut(): void {
    if (this.zoom > this.options.minZoom) {
      this.zoom--;
    }
  }

  click(event: google.maps.MouseEvent): void {
    console.log(event);
  }

  logCenter(): void {
    console.log(JSON.stringify(this.map.getCenter()));
  }

  addMarker(marker: Marker[]): void {
    marker.forEach(mark => {
      this.markers.push({
        position: mark.position,
        label: mark.label,
        title: mark.title,
        info: mark.info,
        options: mark.options,
      });
    });
    console.log(this.markers);
  }

  openInfo(marker: MapMarker, content): void {
    this.infoContent = content;
    this.info.open(marker);
  }
}

export interface Marker {
  position: Geolocation;
  label: Label;
  title: string;
  info: string;
  options?: {
    animation: google.maps.Animation;
  };
}

interface Label {
  color: string;
  text: string;
}

interface Geolocation {
  lat: number;
  lng: number;
}
