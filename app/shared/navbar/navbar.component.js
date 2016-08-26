"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
(function (MenuType) {
    MenuType[MenuType["BRAND"] = 0] = "BRAND";
    MenuType[MenuType["LEFT"] = 1] = "LEFT";
    MenuType[MenuType["RIGHT"] = 2] = "RIGHT";
})(exports.MenuType || (exports.MenuType = {}));
var MenuType = exports.MenuType;
exports.ROUTES = [
    { path: '', title: "Angular2 Bootstrap4 Navbar", menuType: MenuType.BRAND },
    { path: 'heroes', title: "Heroes", menuType: MenuType.LEFT },
    { path: 'about', title: "About Us", menuType: MenuType.RIGHT },
    { path: 'contact', title: "Contact", menuType: MenuType.RIGHT }
];
var NavbarComponent = (function () {
    function NavbarComponent() {
        this.isCollapsed = true;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.menuItems = exports.ROUTES.filter(function (menuItem) { return menuItem.menuType !== MenuType.BRAND; });
        this.brandMenu = exports.ROUTES.filter(function (menuItem) { return menuItem.menuType === MenuType.BRAND; })[0];
    };
    Object.defineProperty(NavbarComponent.prototype, "menuIcon", {
        get: function () {
            return this.isCollapsed ? '☰' : '✖';
        },
        enumerable: true,
        configurable: true
    });
    NavbarComponent.prototype.getMenuItemClasses = function (menuItem) {
        return {
            'pull-xs-right': menuItem.menuType === MenuType.RIGHT
        };
    };
    NavbarComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'navbar',
            templateUrl: 'navbar.component.html',
            styleUrls: ['navbar.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], NavbarComponent);
    return NavbarComponent;
}());
exports.NavbarComponent = NavbarComponent;

//# sourceMappingURL=navbar.component.js.map
