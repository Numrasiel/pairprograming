import { TestBed } from '@angular/core/testing';

import { UtilService } from './util.service';

import { CONSTANTS } from '../constants';

describe('UtilService', () => {
  beforeEach(() => TestBed.configureTestingModule({})
  .compileComponents().then(()=>{ 
  }));

  it('should be created', () => {
    const service: UtilService = TestBed.get(UtilService);
    expect(service).toBeTruthy();
  });

  it('should be 1 strings', () => {
    const service: UtilService = TestBed.get(UtilService);
    expect(service.countNumberOfStringsRec("")).toBe(1);
  });

  it('should be 1 strings', () => {
    const service: UtilService = TestBed.get(UtilService);
    expect(service.countNumberOfStringsRec([""])).toBe(1);
  });

  it('should be 3 strings', () => {
    const service: UtilService = TestBed.get(UtilService);
    expect(service.countNumberOfStringsRec(["",["",""]])).toBe(3);
  });

  it('should be 7 strings', () => {
    const service: UtilService = TestBed.get(UtilService);
    expect(service.countNumberOfStringsRec(CONSTANTS.data)).toBe(7);
  });
  
  it('should be 1 words', () => {
    const service: UtilService = TestBed.get(UtilService);
    expect(service.countNumberOfWords(["a"])).toBe(1);
  });

  it('should be 12 words', () => {
    const service: UtilService = TestBed.get(UtilService);
    expect(service.countNumberOfWords(CONSTANTS.data)).toBe(12);
  });

  it('should be 6 psaces', () => {
    const service: UtilService = TestBed.get(UtilService);
    expect(service.countNumberOfSpaces(CONSTANTS.data)).toBe(6);
  });

});
