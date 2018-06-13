import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { Aw3MyTableDataSource } from './aw3-my-table-datasource';

@Component({
  selector: 'aw3-my-table',
  templateUrl: './aw3-my-table.component.html',
  styleUrls: ['./aw3-my-table.component.css']
})
export class Aw3MyTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: Aw3MyTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new Aw3MyTableDataSource(this.paginator, this.sort);
  }
}
