#Angular2 Bootstrap4 Navbar
An Angular2 App with Bootstrap4 Navbar and routing using Angular2's New Router. Navbar menu is fully configurable in TS files.
Configuration is shared between Angular and Bootstrap Navbar

##Update
A [New new router](https://angularjs.blogspot.in/2016/06/improvements-coming-for-routing-in.html) i.e. __router v3.0__ has been announced by Angular team. Will refactor this project soon to use router v3. See #1

[DEMO](http://sirajc.github.io/angular2-bs4-navbar)
##Steps to use
1. Fork and clone this repository
1. Run `npm install`
1. Run `gulp` to start watching html, css and typescript changes
1. Run `npm start` to start live-server with reload

##Angular2 Features
1. Components and Child Components
1. App Routing and Child Component Routing
1. Usage of Router Directives and functions like `routerLink` and `router.navigate`
1. Usage of Angular directives like `ngClass`, `ngFor`, `ngStyle`

##Router and Navbar Configuration
Bootstrap Navbar and corresponding Angular routes are configured using one single object in `app/routes.ts` file eg.
```typescript
		export const ROUTES: RouteInfo[] = [
			{ path: '/', component: HomeComponent, title: "Angular2 Bootstrap4 Navbar", menuType: MenuType.BRAND },
			{ path: '/heroes', component: HeroComponent, title: "Heroes", menuType: MenuType.LEFT },
			{ path: '/about', component: AboutUsComponent, title: "About Us", menuType: MenuType.RIGHT },
			{ path: '/contact', component: ContactComponent, title: "Contact", menuType: MenuType.RIGHT }
		]
```
* `path` and `component` is used by Angular to set Routes
* `path` is used by Angular to set routerLink in Nav Item of Bootsrap
* `title` is what is shown on Navbar for particular Nav Item
* `menuType` can be `LEFT`, `RIGHT` and `BRAND`, based on this value the Menu Item is placed accordingly on the Navbar

##TODO
- [ ] Add Content in DEMO pages
- [ ] Render Nav based on config similar to `dynamic-menu`
  - [X] Menu configuration should be controlled in TS file only
	- [ ] Configuration inside service, instead of Constant
	- [ ] Get Menu and Route Configuration from HTTP instead of hardcoding
	- [ ] Active class for Active Routes
	- [ ] Support for Dropdown Menu
- [ ] Move to SCSS
- [ ] Tests

##Contributing
Create an issue on this repo if something is broken or if a feature is needed
Feel Free to create a Pull Request if you fixed anything
In case you want to add a feature, create an issue to disscuss the feature first

## Copyright and license

	The MIT License

	Copyright (c) 2015-2016 Sirajuddin Choudhary

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE.
