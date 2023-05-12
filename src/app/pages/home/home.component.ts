import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource: any;
  dataLength: number = 0;

  pageSize: number = 25;
  pageIndex: number = 0;
  disabled = false;

  pageEvent: PageEvent = new PageEvent();

  constructor(private router: Router, private dataService: DataService) {}

  ngOnInit() {
    this.getPokemonList(0, 25);
  }

  getPokemonList(offset: number, limit: number) {
    this.dataService.getList(offset, limit).then((data) => {
      this.dataSource = data.data.results;
      this.dataLength = data.data.count;
    });
  }

  handlePageEvent(e: PageEvent) {
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;

    this.getPokemonList(this.pageIndex * this.pageSize, this.pageSize);
  }

  goToDetail(param: string) {
    this.router.navigate(['detail'], { queryParams: { name: param } });
  }
}
