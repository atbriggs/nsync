import { Component } from '@angular/core';
import { SongPlay, SortUtils } from '@nsync/data';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';

import { filter, map } from 'rxjs/operators';
import { SongsService } from './services/songs.service';


@Component({
  selector: 'nsync-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'frontend';
  columns: SortUtils.Column[] = [SortUtils.trackColumn, SortUtils.artistColumn, SortUtils.endTimeColumn]
  selectedColumn: BehaviorSubject<SortUtils.Column> = new BehaviorSubject(SortUtils.trackColumn)
  songs$: Observable<SongPlay[]> =
    combineLatest([this.selectedColumn, this.songService.songsSubject])
      .pipe(
        filter(([column, song]) => !!column && !!song),
        map(([column, song]) => {
          this.columns = SortUtils.updateColumnDirection(column, this.columns)
          const updatedColumn = this.columns.find(x => x.key === column.key)
          return SortUtils.sortSongs(updatedColumn, song)
        }))


  constructor(private songService: SongsService) {
  }

  newDirection(selectedColumn: SortUtils.Column) {
    this.selectedColumn.next(selectedColumn)
  }


}
