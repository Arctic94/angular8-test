import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api/api/api.service'
import { timeout } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  message: string
  constructor(

    public api: ApiService
  ) { }

  ngOnInit() {

    this.getMessage()
    
  }
  getMessage() {
    new Promise((resolve, reject) => {
      this.api.getInventory().pipe(timeout(10000)).toPromise()
        .then(x => {
          this.message = x.message
          resolve(x)
        })
        .catch(error => reject(error))
    })
  }


}
