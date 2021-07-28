import { TestBed, async } from '@angular/core/testing';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';

import { SafeHtmlPipe } from './safe-html.pipe';

describe('SafeHtmlPipe', () => {
  let domSanitizer: DomSanitizer;
  let pipe: SafeHtmlPipe;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserModule],
    });

    domSanitizer = TestBed.get(DomSanitizer);
    pipe = new SafeHtmlPipe(domSanitizer);
  }));

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should convert &hellip;', () => {
    const result = pipe.transform('&hellip;');
    const expected = domSanitizer.bypassSecurityTrustHtml('&hellip;');

    expect(result).toEqual(expected);
  });
});
