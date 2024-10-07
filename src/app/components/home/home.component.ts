import { Component, OnInit, signal,ChangeDetectionStrategy  } from '@angular/core';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { ApiService } from '../../api.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule,FormsModule,ToastrModule,MatExpansionModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit{
  readonly panelOpenState = signal(false);
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
