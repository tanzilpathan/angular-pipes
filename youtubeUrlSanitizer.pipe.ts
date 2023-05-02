#Use this pipe for sanitize the youtube Url, to display in angular youtube url bellow safeurl and bind the api response in "iframe" tag.
==================HTML=============
<iframe [src]="youtube_url | safeUrl:'resourceUrl'"></iframe>

===========Pipe=====================
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'safeUrl'
})
export class SanitizeurlPipe implements PipeTransform {
  constructor(protected sanitizer: DomSanitizer) {}
 public transform(value: any, type: string): SafeResourceUrl {
  let data=value.replace('watch?v=','embed/')
	 'resourceUrl': return this.sanitizer.bypassSecurityTrustResourceUrl(data);
		}
  }
}
