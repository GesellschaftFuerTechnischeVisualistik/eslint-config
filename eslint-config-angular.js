import { defineConfig } from 'eslint/config';
import typescriptConfig from './eslint-config-ts';

export default defineConfig([
  ...typescriptConfig,
  {
    rules: {
      // enforces consistent usage of uppercase functions with new operator
      'new-cap': [
        'error',
        {
          capIsNewExceptions: [
            // Exceptions for angular decorators (@Component, @Input etc), array may be extended if needed.
            // List of available decorators from https://angular.dev/api?type=decorator. Last checked 2026-02-25
            'Attribute', 'Component', 'ContentChild', 'ContentChildren', 'Directive', 'Host', 'HostBinding', 'HostListener', 'Inject', 'Injectable', 'Input', 'NgModule', 'Optional', 'Output', 'Pipe', 'Self', 'SkipSelf', 'ViewChild', 'ViewChildren'
          ]
        }
      ]
    }
  }
]);
