import { Component, OnInit } from '@angular/core';
import { SendQuery } from '../../SendQuery';
import { ApiService } from '../../api.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterModule,FormsModule,ToastrModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  id: number = 0;
  query: SendQuery  = new SendQuery(); 

  constructor(public apiService: ApiService,private toastr: ToastrService) {}
  ngOnInit(): void {
   
  }
  submit() {
    this.query.id = this.id;
    this.query.projectId= 1;
      this.apiService.saveQuery(this.query).subscribe(data => {
        this.toastr.success('Thanks for your interest, Our team will call you back shortly!', 'Message Sent');
      }, (err: any) => { 
      });
}
}
