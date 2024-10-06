import { Component, OnInit } from '@angular/core';
import { SendQuery } from '../../SendQuery';
import { ApiService } from '../../api.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterModule,FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  id: number = 0;
  query: SendQuery  = new SendQuery(); 

  constructor(public apiService: ApiService) {}
  ngOnInit(): void {
  }
  submit() {
    this.query.id = this.id;
      this.apiService.saveQuery(this.query).subscribe(data => {
      }, (err: any) => { 
      });
}
}
