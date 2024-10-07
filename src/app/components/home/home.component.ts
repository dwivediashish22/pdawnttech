import { Component, OnInit } from '@angular/core';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { ApiService } from '../../api.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule,FormsModule,ToastrModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  email: string = '';
  id: number = 0;
  projectId: number = 1;
  constructor(public apiService: ApiService,private toastr: ToastrService) {}
  ngOnInit(): void {
   
  }
  subscribeNews(){
    this.id = this.id;
    this.projectId= 1;
    // Email Already Exist
    // Successfully Subscribed
    // Failed
    console.log("email"+this.email);
    this.apiService.subscribeNews(this.email,this.projectId).subscribe(data => {
      this.toastr.success('Subscribed Successfully!', 'You wil get our Daily News and letter on your email.');
    }, (err: any) => { 
    });

  }
}
