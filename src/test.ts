// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js/dist/zone-testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';
import { Pony } from './app/pony';
import { Course } from './app/course';
import { empty } from 'rxjs';

declare const require: any;

// First, initialize the Angular testing environment.
// getTestBed().initTestEnvironment(
//   BrowserDynamicTestingModule,
//   platformBrowserDynamicTesting()
// );
// Then we find all the tests.
//const context = require.context('./', true, /\.spec\.ts$/);
// And load the modules.
//context.keys().map(context);


it( 'test unit', () => {
  const s = 'real value';
  expect(s).toBe('real value');
});

it( 'test Pony', () => {
  const p = new Pony();
  expect(p).toBe(p);
});

// vetifier qu'une course a bien une liste de pony instanciée
it( 'test CoursePony', () => {
  const c = new Course();
  expect(c).toBeDefined(c.ponies);
});

// vérifier qu'une course n'as pas de pony à la crétion
it( 'test CoursePonyEmpty', () => {
  const c = new Course();
  expect(c.ponies.length).toBe(0);
  console.log(c.ponies);
});

// vérifier le nom par défaut d'un pony
it( 'test NamePony', () => {
  const p = new Pony();
  expect(p.name).toBe('nom');
  console.log( p.name );
});

// vérifier la date par défaut d'une courses
it( 'test DateCourse', () => {
  const c = new Course();
  expect(c.date).toEqual(new Date());
});