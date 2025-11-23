import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  setItem(key: string, value: any) {
    const parsed = JSON.stringify(value);
    localStorage.setItem(key, parsed);
  }
  getItem(key: string) {
    const value = localStorage.getItem(key);
    return JSON.parse(value || '');
  }
}
