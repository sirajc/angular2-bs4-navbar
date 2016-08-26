# Angular2 Bootstrap4 Navbar
An Angular2 App with Bootstrap4 Navbar and routing using Angular2's New New Router v3.rc1. Navbar menu is fully configurable in TS files.
Configuration is shared between Angular and Bootstrap Navbar

## Update
Navbar is now responsive. Collapsible menu with Hamburger `☰` icon on Mobile
`AppModule`_(NgModule)_ and all featues are `NgModule`

[DEMO](http://sirajc.github.io/angular2-bs4-navbar)

## Steps to use
1. Fork and clone this repository
1. Run `npm install`
1. Run `npm run typings`, to install all the typing files
1. Run `gulp` to start watching html, scss and typescript changes and do a first build
1. On new termial run `npm start` to start lite-server with live reload support

## Angular2 Features
1. Usage of `NgModule` and configure routes using `RouterModule.forRoot([])`
1. Module specific routes using `RouterModule.forChild([...])`
1. Code is based on Angular2 RC5
1. Components and Child Components
1. App Routing and Child Component Routing
1. Usage of Router Directives and functions like `routerLink` and `router.navigate`
1. Usage of Angular directives like `ngClass`, `ngFor`, `ngStyle`
1. Responsive Navbar

## Router and Navbar Configuration
Bootstrap Navbar are configured in `app/navbar/navbar-routes.config.ts` file eg.
```typescript
		export const ROUTES: RouteInfo[] = [
			{ path: '', title: 'Angular2 Bootstrap4 Navbar', menuType: MenuType.BRAND },
			{ path: 'heroes', title: 'Heroes', menuType: MenuType.LEFT },
			{ path: 'about', title: 'About Us', menuType: MenuType.RIGHT },
			{ path: 'contact', title: 'Contact', menuType: MenuType.RIGHT }
		];
```
* `path` is used set routerLink in Nav Item of Bootsrap
* `title` is what is shown on Navbar for particular Nav Item
* `menuType` can be `LEFT`, `RIGHT` and `BRAND`, based on this value the Menu Item is placed accordingly on the Navbar

## TODO
- [X] Create AppModule and boot using `bootstrapModule`
- [X] Move hero component and children to `NgModule`
- [ ] Add Content in DEMO pages
- [ ] Render Nav based on config similar to `dynamic-menu`
  - [X] Menu configuration should be controlled in TS file only
	- [ ] Get Menu and Route Configuration from HTTP instead of hardcoding
	- [X] Active class for Active Routes
	- [ ] Support for Dropdown Menu
- [X] Move to SCSS
- [x] Image Compression
- [ ] Tests

## NOTE
1. App runs on port 8002, configurable in bs-config.json under scripts
1. lite-server uses browserSync and runs on port 3000, configurable in bs-config.json

## Contributing

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
