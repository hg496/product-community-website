import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-dashboard-product',
  templateUrl: './dashboard-product.component.html',
  styleUrls: ['./dashboard-product.component.sass']
})
export class DashboardProductComponent implements OnInit {

  homepage_image: String = "assets/images/pro-com-web.jpg";
  constructor(private api: ApiService, private router: ActivatedRoute) { }

  userRecord: any;
  ngOnInit(): void {
    this.api.getUserById(this.router.snapshot.params['id']).subscribe((res)=>{
      this.userRecord = res;
    })
  }

}
