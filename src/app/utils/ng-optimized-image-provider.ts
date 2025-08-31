import { InjectionToken, Provider } from '@angular/core';

export interface NgOptimizedImageConfig {
  disableImageSizeWarning?: boolean;
  disableImageLazyLoadWarning?: boolean;
}

export const IMAGE_CONFIG = new InjectionToken<NgOptimizedImageConfig>('IMAGE_CONFIG');

export function provideNgOptimizedImage(): Provider[] {
  return [];
}
