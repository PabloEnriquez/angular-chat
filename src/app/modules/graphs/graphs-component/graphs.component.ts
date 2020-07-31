import { Component, OnInit, OnDestroy } from '@angular/core';
import { GraphData } from 'src/app/models/models';
import { GraphsService } from './../../../services/graphs.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.sass']
})
export class GraphsComponent implements OnInit, OnDestroy {

  graphs: GraphData[] = [];
  graphsSub: Subscription;

  constructor(private graphsService: GraphsService) { }

  ngOnInit(): void {
    this.graphsService.getGraphsData();
    this.graphsSub = this.graphsService.graphList$.subscribe(list => {
      if ( list ) {
        this.graphs = list;
      }
    });
  }

  ngOnDestroy(): void {
    this.graphsSub.unsubscribe();
  }

}
