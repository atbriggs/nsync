import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { SongsService } from './services/songs.service';

describe('AppComponent', () => {
  let testComponent: AppComponent;
  const returnData = [];
  const mockService = {
    getSongs: jest.fn(),
    songs: returnData
  } as any;

  beforeEach(() => {
    mockService.getSongs.mockClear();
    testComponent = new AppComponent(mockService as SongsService);
  });

  it('should return the data provided by the service', () => {
    expect(testComponent.getSongs()).toBe(returnData);
  });
});
