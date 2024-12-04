import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  template: `
    <ix-map-navigation
      application-name="Test Application"
      navigation-title="Some other content"
    >
      <div class="placeholder-logo" slot="logo"></div>
      <ix-menu>
        <ix-menu-item>Item 1</ix-menu-item>
        <ix-menu-item>Item 2</ix-menu-item>
        <ix-menu-item>Item 3</ix-menu-item>
      </ix-menu>
      <div slot="sidebar-content">Sidebar content</div>
      <div style="display: flex; justify-content: center; align-items: center">
        <div style="height: 100rem; width: 10rem; background-color: rgb(255,255,255)">
            content
        </div>
    </div>
    </ix-map-navigation>
  `,
})
export default class MapNavigation {}
