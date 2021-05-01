import { Component, Input, OnInit, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

  @Input() dataSource: Array<any>;
  ngOnChanges(val: SimpleChange) {
    this.formatData();
  }

  maleCount;
  femaleCount;
  constructor() { }

  ngOnInit(): void {
    this.formatData();
  }

  formatData() {
    this.maleCount = this.dataSource.filter(x=> x.gender === 'male').length;
    this.femaleCount = this.dataSource.filter(x=> x.gender === 'female').length;
  }

}
