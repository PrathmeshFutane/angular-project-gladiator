import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'shopping-website';

  ngOnInit() {
    //   navigator.geolocation.getCurrentPosition(function (position) {
    //     alert('Location accessed')
    //     console.log(position['coords']['latitude']);
    //     console.log(position['coords']['longitude']);

    //   }, function (error) {
    //     console.log(error['message'])
    //   }, {
    //     timeout: 10000
    //   })
    // }
  }
}