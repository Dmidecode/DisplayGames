import { Component } from '@angular/core';

@Component({
  selector: 'api-root',
  templateUrl: `layout.component.html`,
  styles: []
})
export class LayoutComponent {
  title = 'Front Api';

  konamiCode(): void {
    window.location.replace('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
  }
}
