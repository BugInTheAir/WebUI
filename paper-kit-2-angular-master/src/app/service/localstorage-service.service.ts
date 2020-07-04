import { Injectable } from '@angular/core';
export abstract class StorageService {
  public abstract get(): Storage;
}

@Injectable({
  providedIn: 'root'
})
export class LocalstorageServiceService extends StorageService {
  public get(): Storage {
    return localStorage;
  }
}
