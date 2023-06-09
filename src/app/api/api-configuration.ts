/* tslint:disable */
import { Injectable } from '@angular/core';

/**
 * Global configuration for Api services
 */
@Injectable({
  providedIn: 'root',
})
export class ApiConfiguration {
  rootUrl: string = '//127.0.0.1:8088';
}

export interface ApiConfigurationInterface {
  rootUrl?: string;
}
