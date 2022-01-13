import { SongPlay } from "./data";

export namespace SortUtils {
    export enum Direction {
        UP = 'up',
        DOWN = 'down',
        NONE = 'none'
    }
    export interface Column {
        key: string,
        name: string,
        direction?: Direction

    }
    export const trackColumn = {
        key: 'trackName',
        name: 'Track',
    }
    export const artistColumn = {
        key: 'artistName',
        name: 'Artist',
    }
    export const endTimeColumn = {
        key: 'endTime',
        name: 'Last played',
    }

    export function sortSongs(selectedColumn: Column, songs: SongPlay[]) {

        let newSongsList = songs.sort(
            function (a, b) {
                return a[selectedColumn.key].localeCompare(b[selectedColumn.key]);
            }
        )
        if (selectedColumn.direction === Direction.UP) {
            newSongsList = newSongsList.reverse()
        }

        return newSongsList

    }

    export function updateColumnDirection(selectedColumn: Column, columns: Column[]) {
        return columns.map(x => {
            return {
                ...x,
                direction: selectedColumn.key === x.key ? changeOrder(selectedColumn.direction) : Direction.NONE
            }
        })
    }

    export function changeOrder(direction: Direction) {
        switch (direction) {
            case Direction.DOWN:
                return Direction.UP
            default:
                return Direction.DOWN
        }

    }
}