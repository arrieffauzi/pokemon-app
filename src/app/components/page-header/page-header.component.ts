import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss'],
})
export class PageHeaderComponent {
  @Input() title: string = '';
  @Input() backButton: boolean = false;

  constructor(
    private router:Router
  ){}

  goBack(){
    this.router.navigateByUrl('home')
  }
}
