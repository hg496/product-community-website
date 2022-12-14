import { Component, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
import { RegistrationComponent } from '../registration/registration.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.sass'],
})
export class HomepageComponent implements OnInit {

  homepage_image: String = "assets/images/pro-com-web.jpg";

  constructor(private api: ApiService, private dialog: MatDialog) {}

  totalUsers!: number;
  ngOnInit(): void {
    this.api.totalRegisteredUsers().subscribe((res)=>{
      this.totalUsers = res;
    })
  }

  openRegistrationDialog() {
    this.dialog.open(RegistrationComponent, {
      width: '80%'
    });
  }
}
