import {ActivatedRouteSnapshot, CanActivateFn, RedirectCommand, Router, RouterStateSnapshot} from '@angular/router';
import {UserService} from './user-service';
import {inject} from '@angular/core';

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot)  => {
 const userService = inject(UserService);
 const router = inject(Router);
 if (!userService.isLoggedIn()) {
   return new RedirectCommand(router.parseUrl('/login'));
 }
 return true;
}
